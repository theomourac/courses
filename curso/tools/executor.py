"""Runs code for the LeetCode course: the learner's answer to a `codigo` exercise, or a lesson's
reference / slow solution (the checker uses the same path, so a lesson can only ship tests that
its reference passes).

    rodar(exercicio, codigo, envio=False) -> {"veredito": ..., "testes": [...], "desempenho": {...}}

`envio=False` is LeetCode's "Run": the visible tests, all of them shown. `envio=True` is "Submit":
visible + hidden tests, stopping at the first failure, then the performance test (a large input
with a time limit). The verdict names follow LeetCode, in pt-BR with the English term the learner
will meet on the site. Each run is a fresh `python -I` process in a temporary folder, with a CPU
limit and a wall-clock timeout; the result comes back through a file, never through stdout.
"""

from __future__ import annotations

import json
import subprocess
import sys
import tempfile
from pathlib import Path

HARNESS = Path(__file__).resolve().parent / "_harness.py"
TIMEOUT_TESTES_S = 5.0
MAX_CODIGO = 20_000

VEREDITOS = {
    "aceito": ("Aceito", "Accepted"),
    "passou": ("Passou nos exemplos", "Run: all sample tests passed"),
    "errado": ("Resposta errada", "Wrong Answer"),
    "lento": ("Tempo excedido", "Time Limit Exceeded"),
    "erro": ("Erro de execução", "Runtime Error"),
    "sintaxe": ("Erro de sintaxe", "Compile Error"),
    "estrutura": ("Faltou a estrutura", "Solution class or method not found"),
}


def _limitar():  # runs in the child before exec: a CPU-seconds ceiling on top of the timeout
    try:
        import resource
        resource.setrlimit(resource.RLIMIT_CPU, (30, 31))
    except (ImportError, ValueError, OSError):
        pass


def _job(ex: dict, codigo: str, envio: bool, referencia: bool) -> dict:
    testes = [dict(t) for t in ex.get("testes") or []]
    if envio:
        testes += [dict(t, oculto=True) for t in ex.get("ocultos") or []]
    job = {"codigo": codigo, "modo": ex.get("modo", "funcao"), "metodo": ex.get("metodo"),
           "comparar": ex.get("comparar", "igual"), "testes": testes, "parar": envio}
    if envio and ex.get("desempenho"):
        job["desempenho"] = ex["desempenho"]
        if referencia and ex.get("referencia"):
            job["referencia"] = ex["referencia"]
    return job


def _executar(job: dict) -> tuple[dict | None, bool]:
    """Returns (result, timed_out). The partial result survives a timeout in the performance test."""
    limite = TIMEOUT_TESTES_S + (2 * job["desempenho"]["limite_s"] + 1 if job.get("desempenho") else 0)
    with tempfile.TemporaryDirectory(prefix="curso-exec-") as d:
        entrada, saida = Path(d) / "job.json", Path(d) / "resultado.json"
        entrada.write_text(json.dumps(job, ensure_ascii=False), encoding="utf-8")
        estourou = False
        try:
            subprocess.run([sys.executable, "-I", str(HARNESS), str(entrada), str(saida)], cwd=d,
                           capture_output=True, text=True, timeout=limite, preexec_fn=_limitar,
                           env={"PATH": "/usr/bin:/bin", "PYTHONDONTWRITEBYTECODE": "1", "PYTHONHASHSEED": "0"})
        except subprocess.TimeoutExpired:
            estourou = True
        if not saida.exists():
            return None, estourou
        return json.loads(saida.read_text(encoding="utf-8")), estourou


def _veredito(res: dict | None, estourou: bool, job: dict, envio: bool) -> dict:
    if res is None:
        # no result file at all: the visible/hidden tests themselves never finished
        return {"veredito": "lento", "detalhe": "Seu código não terminou dentro do limite de tempo. "
                "Procure um laço que nunca para (um while sem avanço, por exemplo).", "testes": []}
    if not res.get("compilou"):
        return {"veredito": "sintaxe", "erro": res["erro_sintaxe"], "testes": []}
    if res.get("erro_estrutura"):
        return {"veredito": "estrutura", "detalhe": res["erro_estrutura"], "testes": []}
    if res.get("erro_carregar"):
        return {"veredito": "erro", "erro": res["erro_carregar"], "testes": []}
    testes = res.get("testes") or []
    falha = next((t for t in testes if not t["ok"]), None)
    out = {"testes": testes, "total": len(job["testes"]), "passaram": sum(t["ok"] for t in testes)}
    if falha:
        out["veredito"] = "erro" if falha["estado"] == "erro" else "errado"
        out["falha"] = falha
        return out
    if not envio:
        out["veredito"] = "passou"
        return out
    if job.get("desempenho"):
        d = res.get("desempenho")
        if d is None and estourou:   # killed while running the large input
            d = {"ok": False, "estado": "lento", "segundos": None, "limite_s": job["desempenho"]["limite_s"]}
        out["desempenho"] = d
        if d and not d["ok"]:
            out["veredito"] = {"lento": "lento", "errado": "errado", "erro": "erro"}.get(d["estado"], "erro")
            return out
    out["veredito"] = "aceito"
    return out


def rodar(ex: dict, codigo: str, envio: bool = False, referencia: bool = True) -> dict:
    if not isinstance(codigo, str) or len(codigo) > MAX_CODIGO:
        raise ValueError("código vazio ou grande demais")
    job = _job(ex, codigo, envio, referencia)
    res, estourou = _executar(job)
    out = _veredito(res, estourou, job, envio)
    pt, en = VEREDITOS[out["veredito"]]
    out.update(titulo=pt, leetcode=en)
    if not envio:  # "Run" shows only the visible tests; nothing hidden leaks to the browser
        out["testes"] = [t for t in out["testes"] if not t.get("oculto")]
    elif out.get("falha", {}).get("oculto"):
        out["falha"] = {k: v for k, v in out["falha"].items() if k in ("ok", "estado", "erro", "oculto", "entrada", "esperado", "obtido")}
    out["testes"] = [t for t in out["testes"] if not t.get("oculto")] + (
        [] if not envio else [{"oculto": True, "ok": t["ok"]} for t in out.get("testes", []) if t.get("oculto")])
    return out
