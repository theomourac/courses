"""Runs a learner's Python code against an exercise's tests, in its own process.

Started by executor.py as `python -I _harness.py <job.json> <result.json>`. Standard library only:
it never imports the repository. The job holds the learner's code, the tests and, for the
performance test, the input generator and the reference solution that computes the expected
answer. The result goes to a file, so whatever the learner prints never mixes with it.
"""

import contextlib
import copy
import io
import json
import math
import sys
import time
import traceback

ARQUIVO = "solucao.py"   # the name the learner sees in error messages
MAX_SAIDA = 4000         # characters of print() output kept per test

PRELUDIO = """from typing import *
import collections, math, heapq, bisect, itertools, functools, string
from collections import Counter, defaultdict, deque
"""  # what LeetCode's Python 3 already imports for you


def _erro(e, codigo):
    """The last frames that point at the learner's own lines, in plain terms."""
    linhas = codigo.splitlines()
    pilha = [f for f in traceback.extract_tb(e.__traceback__) if f.filename == ARQUIVO]
    onde = []
    for f in pilha[-3:]:
        txt = linhas[f.lineno - 1].strip() if 0 < (f.lineno or 0) <= len(linhas) else ""
        onde.append({"linha": f.lineno, "codigo": txt})
    return {"tipo": type(e).__name__, "mensagem": str(e)[:500], "onde": onde}


def _base(nome):
    """A namespace with LeetCode's imports already done; the learner's line numbers stay their own."""
    ns = {"__name__": nome}
    exec(PRELUDIO, ns)
    return ns


def _compilar(codigo):
    try:
        return compile(codigo, ARQUIVO, "exec"), None
    except SyntaxError as e:
        return None, {"tipo": type(e).__name__, "mensagem": e.msg, "linha": e.lineno,
                      "codigo": (e.text or "").rstrip(), "coluna": e.offset}


def _carregar(obj, codigo):
    ns = _base("solucao")
    exec(obj, ns)
    return ns


def _metodo(ns, nome):
    cls = ns.get("Solution")
    if cls is None:
        raise LookupError("Não encontrei a classe Solution. O LeetCode espera: class Solution: ... def " + nome + "(self, ...)")
    try:
        inst = cls()
    except TypeError as e:
        raise LookupError("Não consegui criar Solution(): " + str(e))
    f = getattr(inst, nome, None)
    if f is None:
        raise LookupError(f"A classe Solution não tem o método {nome}(self, ...). Confira o nome, letra por letra.")
    return f


def _igual(a, b, modo):
    if modo == "ordem_livre" and isinstance(a, list) and isinstance(b, list):
        try:
            return sorted(a) == sorted(b)
        except TypeError:
            return sorted(map(repr, a)) == sorted(map(repr, b))
    if modo == "float" and isinstance(a, (int, float)) and isinstance(b, (int, float)):
        return math.isclose(a, b, rel_tol=1e-6, abs_tol=1e-6)
    if isinstance(a, bool) != isinstance(b, bool):   # True == 1 in Python; LeetCode tells them apart
        return False
    return a == b


def _serializavel(v):
    try:
        json.dumps(v)
        return v
    except (TypeError, ValueError):
        return repr(v)


def _rodar_funcao(job, ns, f):
    saida = []
    for t in job["testes"]:
        args = copy.deepcopy(t["entrada"])
        buf = io.StringIO()
        ini = time.perf_counter()
        try:
            with contextlib.redirect_stdout(buf):
                r = f(*args)
        except Exception as e:
            saida.append({"ok": False, "estado": "erro", "erro": _erro(e, job["codigo"]),
                          "entrada": t["entrada"], "esperado": t["esperado"], "prints": buf.getvalue()[:MAX_SAIDA]})
            if job.get("parar"):
                break
            continue
        ms = (time.perf_counter() - ini) * 1000
        ok = _igual(r, t["esperado"], job.get("comparar", "igual"))
        saida.append({"ok": ok, "estado": "ok" if ok else "errado", "entrada": t["entrada"], "esperado": t["esperado"],
                      "obtido": _serializavel(r), "prints": buf.getvalue()[:MAX_SAIDA], "ms": round(ms, 2),
                      "oculto": bool(t.get("oculto"))})
        if job.get("parar") and not ok:
            break
    return saida


def _rodar_desempenho(job, f):
    d = job["desempenho"]
    gns = _base("gerador")
    exec(compile(d["gerar"], "<gerador>", "exec"), gns)
    args = gns["gerar"]()
    esperado = None
    if job.get("referencia"):
        rns = _base("referencia")
        exec(compile(job["referencia"], "<referencia>", "exec"), rns)
        esperado = getattr(rns["Solution"](), job["metodo"])(*copy.deepcopy(args))
    buf = io.StringIO()
    ini = time.perf_counter()
    with contextlib.redirect_stdout(buf):
        r = f(*args)
    seg = time.perf_counter() - ini
    tamanho = {k: len(v) for k, v in zip(d.get("nomes") or [f"arg{i + 1}" for i in range(len(args))], args)
               if hasattr(v, "__len__")}
    ok = esperado is None or _igual(r, esperado, job.get("comparar", "igual"))
    return {"ok": ok and seg <= d["limite_s"], "estado": "ok" if ok and seg <= d["limite_s"] else
            "lento" if ok else "errado", "segundos": round(seg, 3), "limite_s": d["limite_s"], "tamanho": tamanho,
            "obtido": _serializavel(r) if not ok else None, "esperado": _serializavel(esperado) if not ok else None}


def _rodar_saida(job, obj):
    saida = []
    for t in job["testes"]:
        buf = io.StringIO()
        entrada = io.StringIO(t.get("stdin", ""))
        antigo_in = sys.stdin
        sys.stdin = entrada
        try:
            with contextlib.redirect_stdout(buf):
                exec(obj, _base("__main__"))
            erro = None
        except SystemExit:
            erro = None
        except Exception as e:
            erro = _erro(e, job["codigo"])
        finally:
            sys.stdin = antigo_in
        obtido = buf.getvalue()[:MAX_SAIDA]
        norm = lambda s: "\n".join(l.rstrip() for l in s.strip().splitlines())  # noqa: E731
        ok = erro is None and norm(obtido) == norm(t["esperado"])
        saida.append({"ok": ok, "estado": "erro" if erro else "ok" if ok else "errado", "erro": erro,
                      "stdin": t.get("stdin", ""), "esperado": t["esperado"], "obtido": obtido})
        if job.get("parar") and not ok:
            break
    return saida


def main():
    job = json.load(open(sys.argv[1], encoding="utf-8"))
    res = {"compilou": True}
    obj, erro = _compilar(job["codigo"])
    if erro:
        res.update(compilou=False, erro_sintaxe=erro)
    elif job["modo"] == "saida":
        res["testes"] = _rodar_saida(job, obj)
    else:
        try:
            ns = _carregar(obj, job["codigo"])
            f = _metodo(ns, job["metodo"])
        except LookupError as e:
            res["erro_estrutura"] = str(e)
        except Exception as e:
            res["erro_carregar"] = _erro(e, job["codigo"])
        else:
            res["testes"] = _rodar_funcao(job, ns, f)
            if job.get("desempenho") and all(t["ok"] for t in res["testes"]):
                json.dump(res, open(sys.argv[2], "w", encoding="utf-8"))  # partial result survives a timeout
                try:
                    res["desempenho"] = _rodar_desempenho(job, f)
                except Exception as e:
                    res["desempenho"] = {"ok": False, "estado": "erro", "erro": _erro(e, job["codigo"])}
    json.dump(res, open(sys.argv[2], "w", encoding="utf-8"))


if __name__ == "__main__":
    main()
