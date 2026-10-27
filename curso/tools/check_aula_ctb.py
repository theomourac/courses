"""Verificador de uma aula do curso "Contabilidade Gerencial em 1 dia" (curso/contabilidade/aulas/aula-NN.js).

    uv run python curso/tools/check_aula_ctb.py curso/contabilidade/aulas/aula-03.js [mais arquivos] [--quiet]

Mesmo formato de cartões e mesmas regras de escrita do curso do agente (curso/tools/check_aula.py), com o
que muda num curso de contas para prova (curso/contabilidade/BRIEFING-CODEX.md):
- o exercício `numero`: o aluno digita o resultado da conta. O `calculo` é avaliado aqui e precisa dar a
  `resposta`, e a `explicacao` mostra o resultado;
- o desafio traz `contas` conferidas aqui, e todo número da resposta comentada está na tela ou nas contas;
- números exatos, como na prova (percentuais com casas decimais são permitidos);
- tabelas sem CSV (fonte "nenhum"), elenco Marta e você, nada de HP12C nem de temas fora do escopo.
"""

from __future__ import annotations

import argparse
import ast
import math
import operator
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import check_aula as base  # noqa: E402  (loader, word count, glossary, diagrams, hygiene rules)

TIPOS_CARTAO = {"abertura", "conceito", "pratica", "desafio", "resumo"}
TIPOS_EXERCICIO = {"escolha", "multipla", "completar", "ordenar", "associar", "numero", "aberta"}
PERSONAGENS = {"dona", "voce"}
UNIDADES = {"R$", "%", "dias", "vezes", ""}
MAX_TEXTO, MAX_CAIXA, MAX_ENUNCIADO, MAX_FALA, MAX_POR_PASSO = 90, 45, 45, 25, 45
MAX_EXPLICACAO = 70
MIN_PRATICAS, MIN_CONCEITOS, MAX_CONCEITOS = 6, 2, 12  # the learner starts from zero: many short concept cards
# fields that hold arithmetic for the checker, not prose for the learner
CAMPOS_CONTA = {"calculo", "contas"}
HP12C = re.compile(r"\bHP[\s-]?12\s?C\b", re.I)
# Aulas 20 e 22 do plano (custos e precificação, unit economics, VPL/TIR/payback) ficam fora do curso. Também não
# caem na prova o método indireto da DFC (o FCO se calcula pelo direto), o capital de giro com seus ciclos, a DuPont
# (giro e alavancagem) e os índices de endividamento e solvência; margens, ROA, ROE e liquidez continuam.
FORA_DO_ESCOPO = re.compile(r"\bVPL\b|\bTIR\b|payback|unit economics|valor presente l[íi]quido|taxa interna de retorno|"
                            r"ponto de equil[íi]brio|\bLTV\b|\bCAC\b|\bchurn\b|forma[çc][ãa]o de pre[çc]o|precifica|"
                            r"m[ée]todo indireto|DFC indireta|capital de giro|\bNIG\b|\bCGL\b|necessidade de (investimento em )?giro|"
                            r"saldo (em|de) tesouraria|ciclo (de caixa|operacional|financeiro)|\bPM[ERP]\b|prazo m[ée]dio|Fleuriet|"
                            r"DuPont|giro do ativo|alavancagem|endividamento|solv[êe]ncia|\bPCT\b|cobertura de juros|"
                            r"imobiliza[çc][ãa]o do PL", re.I)

_OPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv,
        ast.Pow: operator.pow, ast.USub: operator.neg, ast.UAdd: operator.pos}
_FUNCOES = {"log": math.log, "ln": math.log, "sqrt": math.sqrt}


def avaliar(expr: str) -> float:
    """Arithmetic only: numbers, + - * / **, parentheses and log/ln/sqrt. Anything else is refused."""
    def ev(n):
        if isinstance(n, ast.Expression):
            return ev(n.body)
        if isinstance(n, ast.Constant) and isinstance(n.value, (int, float)) and not isinstance(n.value, bool):
            return n.value
        if isinstance(n, ast.BinOp) and type(n.op) in _OPS:
            return _OPS[type(n.op)](ev(n.left), ev(n.right))
        if isinstance(n, ast.UnaryOp) and type(n.op) in _OPS:
            return _OPS[type(n.op)](ev(n.operand))
        if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id in _FUNCOES and len(n.args) == 1 and not n.keywords:
            return _FUNCOES[n.func.id](ev(n.args[0]))
        raise ValueError(f"só contas com números, + - * / **, parênteses e log: {ast.dump(n)[:40]}")
    return float(ev(ast.parse(str(expr), mode="eval")))


def formatar(v: float, casas: int) -> str:
    """1234.5, 2 -> '1.234,50' (pt-BR, sem sinal)."""
    return f"{abs(v):,.{casas}f}".replace(",", "X").replace(".", ",").replace("X", ".")


def prosa(obj) -> list[str]:
    if isinstance(obj, str):
        return [obj]
    if isinstance(obj, list):
        return [t for x in obj for t in prosa(x)]
    if isinstance(obj, dict):
        return [t for k, v in obj.items() if not k.startswith("_") and k not in CAMPOS_CONTA for t in prosa(v)]
    return []


def checar_numero(ex: dict, onde: str, erros: list[str]) -> None:
    """`numero`: resposta, unidade, casas, calculo (avaliado aqui) e a explicacao com o resultado."""
    r, casas, unidade = ex.get("resposta"), ex.get("casas"), ex.get("unidade", "")
    if not isinstance(r, (int, float)) or isinstance(r, bool):
        erros.append(f"{onde}: resposta deve ser um número (ex.: 40250 ou 5.66)")
        return
    if not (isinstance(casas, int) and 0 <= casas <= 4):
        erros.append(f"{onde}: casas deve ser um inteiro de 0 a 4 (quantas casas decimais a resposta tem)")
        return
    if unidade not in UNIDADES:
        erros.append(f"{onde}: unidade deve ser uma de {sorted(UNIDADES)}")
    tol = ex.get("tolerancia")
    if tol is not None and not (isinstance(tol, (int, float)) and tol > 0):
        erros.append(f"{onde}: tolerancia, se houver, é um número positivo")
    calc = ex.get("calculo")
    if not isinstance(calc, str) or not calc.strip():
        erros.append(f"{onde}: falta calculo (a conta em Python, ex.: 35000 * (1 + 0.025 * 6))")
    else:
        try:
            v = avaliar(calc)
        except (ValueError, SyntaxError, ZeroDivisionError, OverflowError) as e:
            erros.append(f"{onde}: calculo inválido ({e})")
        else:
            if abs(v - r) > 0.5 * 10 ** -casas + 1e-9:
                erros.append(f"{onde}: o calculo dá {'−' if v < 0 else ''}{formatar(v, 6)}, mas a resposta é {r} (arredonde com {casas} casas)")
    exp = ex.get("explicacao") or ""
    if not exp:
        erros.append(f"{onde}: falta explicacao (a conta e o resultado, mostrados depois de responder)")
    else:
        if formatar(r, casas) not in exp:
            erros.append(f"{onde}: a explicacao deve mostrar o resultado como na prova: {formatar(r, casas)}")
        if base.palavras(exp) > MAX_EXPLICACAO:
            erros.append(f"{onde}: explicacao com {base.palavras(exp)} palavras (máximo {MAX_EXPLICACAO})")


def checar_contas(ex: dict, onde: str, erros: list[str]) -> list[float]:
    """Desafio: `contas` [{conta, resultado}]; cada conta é avaliada e o resultado aparece na resposta."""
    contas = ex.get("contas")
    if contas is None:
        return []
    if not (isinstance(contas, list) and all(isinstance(c, dict) and c.get("conta") and c.get("resultado") for c in contas)):
        erros.append(f"{onde}: contas deve ser uma lista de {{conta, resultado}}")
        return []
    resposta, vals = ex.get("resposta_comentada") or "", []
    for c in contas:
        res = str(c["resultado"])
        m = base.NUMERO.search(res.replace("R$", ""))
        alvo = base.numero_ptbr(m.group(0)) if m else None
        if alvo is None:
            erros.append(f"{onde}: resultado {res!r} não é um número em pt-BR (ex.: 40.250,00 ou 5,66)")
            continue
        try:
            v = avaliar(c["conta"])
        except (ValueError, SyntaxError, ZeroDivisionError, OverflowError) as e:
            erros.append(f"{onde}: conta {c['conta']!r} inválida ({e})")
            continue
        dec = len(m.group(0).split(",")[1]) if "," in m.group(0) else 0
        if abs(v - alvo) > 0.5 * 10 ** -dec + 1e-9:
            erros.append(f"{onde}: a conta {c['conta']!r} dá {'−' if v < 0 else ''}{formatar(v, 4)}, não {res}")
        if m.group(0).lstrip("−–-") not in resposta:
            erros.append(f"{onde}: o resultado {res} das contas não aparece na resposta_comentada")
        vals.append(alvo)
    return vals


def checar_tela(ex: dict, onde: str, cartoes: list, tabelas: dict, contas: list[float], erros: list[str]) -> None:
    """Todo número da resposta comentada está na tela (tabelas e cartões, somas e diferenças de dois
    deles) ou nas contas do desafio; cada passo trata de um assunto."""
    proprio = {id(ex.get("resposta_comentada")), id(ex.get("dica"))}
    vistos: list[float] = list(contas)
    for t in tabelas.values():
        for linha in t.get("linhas") or []:
            for cel in linha:
                vistos += [v for m in base.NUMERO.finditer(str(cel)) if (v := base.numero_ptbr(m.group(0))) is not None]
    for c in cartoes:
        for txt in prosa(c):
            if id(txt) in proprio:
                continue
            vistos += [v for m in base.NUMERO.finditer(txt) if (v := base.numero_ptbr(m.group(0))) is not None]
    r = ex.get("resposta_comentada") or ""
    sem_passo = re.sub(r"Passo \d+", "", r)
    for m in base.NUMERO.finditer(sem_passo):
        tok, depois = m.group(0), sem_passo[m.end():m.end() + 9]
        v = base.numero_ptbr(tok)
        if v is None or (float(v).is_integer() and (0 <= abs(v) <= 31 or 2000 <= v <= 2100)):
            continue  # days, counts, years
        escala = 1e6 if depois.lstrip().startswith("milh") else 1e3 if depois.lstrip().startswith("mil") else 1
        alvo = v * escala
        # exact numbers, as in the exam: half a unit of the last digit shown (scaled for "mil"), 0,05% at most
        tol = max(abs(alvo) * 0.0005, 0.5 * 10 ** -(len(tok.split(",")[1]) if "," in tok else 0) * escala)
        derivados = (abs(a - b) for a in vistos for b in vistos) if len(vistos) < 400 else ()
        somas = (a + b for a in vistos for b in vistos) if len(vistos) < 400 else ()
        if not any(abs(abs(x) - abs(alvo)) <= tol for x in (*vistos, *derivados, *somas)):
            erros.append(f"{onde}: resposta_comentada usa {tok}{' mil' if escala == 1e3 else ''}, que não está na tela "
                         "nem nas contas do desafio: ponha a conta em 'contas'")
    for i, parte in enumerate(re.split(r"\*\*Passo \d+\.\*\*", r)[1:], 1):
        if base.palavras(parte) > MAX_POR_PASSO:
            erros.append(f"{onde}: resposta_comentada do passo {i} com {base.palavras(parte)} palavras (máximo {MAX_POR_PASSO}; um assunto por passo)")


def _explica(c: dict) -> str:
    """The text a card uses to teach: body, boxes, diagram and exercise (comic speech and titles aside,
    since Marta talks the way she talks)."""
    partes = [c.get("texto"), c.get("exemplo"), c.get("atencao"), c.get("diagrama")]
    ex = c.get("exercicio") or {}
    partes += [ex.get(k) for k in ("enunciado", "opcoes", "frase", "itens", "pares", "explicacao", "cena", "passos")]
    return "\n".join(prosa([p for p in partes if p]))


def checar_termos(cartoes: list, erros: list[str]) -> None:
    """Contexto zero: a glossary term is explained where it first appears, so [[termo|…]] cannot come
    after a card that already used the word without explaining it."""
    explicado: dict[str, int] = {}
    for k, c in enumerate(cartoes):
        for m in base.GLOSS.finditer(_explica(c)):
            explicado.setdefault(m.group(1).strip().lower(), k)
    for termo, kdef in explicado.items():
        padrao = re.compile(r"(?<![\wÀ-ÿ])" + re.escape(termo) + r"(?![\wÀ-ÿ])", re.I)
        for k in range(kdef):
            if padrao.search(base.GLOSS.sub(lambda m: m.group(1), _explica(cartoes[k]))):
                erros.append(f"cartão {k + 1}: usa '{termo}' antes de explicá-lo (o [[termo|…]] só vem no cartão {kdef + 1}); "
                             "explique onde o termo aparece pela primeira vez")
                break


def checar_quadrinho(q, onde: str, erros: list[str]) -> None:
    if not (isinstance(q, list) and 1 <= len(q) <= 3):
        erros.append(f"{onde}: quadrinho deve ter de 1 a 3 falas")
        return
    for i, b in enumerate(q, 1):
        if not isinstance(b, dict) or b.get("quem") not in PERSONAGENS or not b.get("fala"):
            erros.append(f"{onde}: fala {i} do quadrinho precisa de quem ({', '.join(sorted(PERSONAGENS))}) e fala")
        elif base.palavras(b["fala"]) > MAX_FALA:
            erros.append(f"{onde}: fala {i} do quadrinho com {base.palavras(b['fala'])} palavras (máximo {MAX_FALA})")


def checar(path: Path) -> tuple[list[str], list[str]]:
    erros: list[str] = []
    avisos: list[str] = []
    try:
        aula = base.carregar(path)
    except (ValueError, OSError) as e:
        return [f"não consegui ler a aula: {e}"], []
    chave = aula.pop("_chave")
    if path.name != f"aula-{chave}.js" or aula.get("n") != chave:
        erros.append(f"o arquivo, a chave e o campo n devem bater: aula-{chave}.js, n={aula.get('n')!r}")
    for campo in ("titulo", "objetivo"):
        if not aula.get(campo):
            erros.append(f"falta {campo}")
    if aula.get("parte") not in ("A", "B", "C", "D"):
        erros.append("parte deve ser A, B, C ou D")
    if not isinstance(aula.get("minutos"), int):
        erros.append("minutos deve ser um número inteiro")
    removidos = aula.get("cartoes_removidos")
    if removidos is not None and not (isinstance(removidos, list) and all(
            isinstance(r, list) and r and r == sorted(set(r)) and all(isinstance(i, int) and i >= 0 for i in r) for r in removidos)):
        erros.append("cartoes_removidos: uma lista por edição, cada uma com as posições removidas (inteiros a partir de 0, "
                     "em ordem, sem repetir), contadas na lista de cartões de antes da edição")
    exemplo = bool(aula.get("exemplo"))

    tabelas = aula.get("tabelas") or {}
    for tid, t in tabelas.items():
        cols, linhas = t.get("colunas") or [], t.get("linhas") or []
        if not cols or not linhas or any(len(l) != len(cols) for l in linhas):
            erros.append(f"tabela {tid}: colunas e linhas precisam existir e ter o mesmo número de células")
        if t.get("fonte") != "nenhum":
            erros.append(f"tabela {tid}: fonte deve ser \"nenhum\" (os números vêm do material do curso, não de um CSV)")
        if not t.get("titulo"):
            erros.append(f"tabela {tid}: falta titulo")
        if not all(isinstance(j, int) and 0 <= j < len(cols) for j in t.get("numericas") or []):
            erros.append(f"tabela {tid}: numericas deve listar índices de colunas")

    cartoes = aula.get("cartoes") or []
    tipos = [c.get("tipo") for c in cartoes]
    for t in set(tipos) - TIPOS_CARTAO:
        erros.append(f"tipo de cartão desconhecido: {t!r} (use {', '.join(sorted(TIPOS_CARTAO))})")
    if not tipos or tipos[0] != "abertura":
        erros.append("o primeiro cartão deve ser 'abertura'")
    if not tipos or tipos[-1] != "resumo":
        erros.append("o último cartão deve ser 'resumo'")
    if tipos.count("desafio") != 1:
        erros.append(f"{tipos.count('desafio')} cartões 'desafio' (deve haver exatamente 1)")
    minimo = 3 if exemplo else MIN_PRATICAS
    if tipos.count("pratica") < minimo:
        erros.append(f"{tipos.count('pratica')} cartões 'pratica' (mínimo {minimo}: prova se treina fazendo)")
    if not MIN_CONCEITOS <= tipos.count("conceito") <= MAX_CONCEITOS:
        erros.append(f"{tipos.count('conceito')} cartões 'conceito' (de {MIN_CONCEITOS} a {MAX_CONCEITOS})")
    if "conceito" in tipos and "pratica" in tipos and tipos.index("pratica") < tipos.index("conceito"):
        erros.append("a primeira prática vem antes do primeiro conceito")
    praticas = [(c.get("exercicio") or {}).get("tipo") for c in cartoes if c.get("tipo") == "pratica"]
    if len(set(praticas)) < 2 and not exemplo:
        avisos.append("todas as práticas são do mesmo tipo: varie (numero, escolha, associar, ordenar…)")
    if cartoes and not cartoes[0].get("quadrinho"):
        erros.append("cartão 1 (abertura): falta quadrinho (Marta traz o problema do dia)")

    for k, c in enumerate(cartoes, start=1):
        onde = f"cartão {k} ({c.get('tipo')})"
        t = c.get("tipo")
        if c.get("quadrinho") is not None:
            checar_quadrinho(c["quadrinho"], onde, erros)
        # diagram and chart rules are the analyst course's; the comic cast is checked above
        base.checar_visuais({x: y for x, y in c.items() if x != "quadrinho"}, onde, tabelas, erros)
        if c.get("tabela") and c["tabela"] not in tabelas:
            erros.append(f"{onde}: tabela {c['tabela']!r} não existe em 'tabelas'")
        if t in ("abertura", "conceito"):
            if not c.get("titulo"):
                erros.append(f"{onde}: falta titulo")
            n = base.palavras(c.get("texto", ""))
            if not c.get("texto"):
                erros.append(f"{onde}: falta texto")
            elif n > MAX_TEXTO:
                erros.append(f"{onde}: texto com {n} palavras (máximo {MAX_TEXTO}: um cartão = uma ideia; divida)")
            for caixa in ("exemplo", "atencao"):
                if c.get(caixa) and base.palavras(c[caixa]) > MAX_CAIXA:
                    erros.append(f"{onde}: {caixa} com {base.palavras(c[caixa])} palavras (máximo {MAX_CAIXA})")
        if t in ("pratica", "desafio"):
            ex = c.get("exercicio")
            if not isinstance(ex, dict):
                erros.append(f"{onde}: falta exercicio")
                continue
            tipo = ex.get("tipo")
            if tipo not in TIPOS_EXERCICIO:
                erros.append(f"{onde}: tipo de exercício {tipo!r} (use {', '.join(sorted(TIPOS_EXERCICIO))})")
                continue
            if t == "desafio" and tipo != "aberta":
                erros.append(f"{onde}: o desafio é um exercício 'aberta' (passos escritos + resposta comentada)")
                continue
            if tipo == "numero":
                if not ex.get("enunciado"):
                    erros.append(f"{onde}: falta enunciado")
                elif base.palavras(ex["enunciado"]) > MAX_ENUNCIADO:
                    erros.append(f"{onde}: enunciado com {base.palavras(ex['enunciado'])} palavras (máximo {MAX_ENUNCIADO}; "
                                 "dados longos vão numa tabela do cartão)")
                checar_numero(ex, onde, erros)
            else:
                base.checar_exercicio(ex, onde, tabelas, erros, pratica=(t == "pratica"))
            if tipo == "associar" and isinstance(ex.get("pares"), list):
                # the player grades a pair by position, so two equal answers make a right pairing look wrong
                for lado, nome in ((0, "esquerda"), (1, "direita")):
                    vals = [str(p[lado]).strip().lower() for p in ex["pares"] if isinstance(p, list) and len(p) == 2]
                    if len(set(vals)) < len(vals):
                        erros.append(f"{onde}: associar com itens repetidos na coluna da {nome}: a plataforma corrige pela "
                                     "posição, então quem acerta pode ser marcado como errado; deixe cada item único ou use 'escolha'")
            if t == "desafio":
                contas = checar_contas(ex, onde, erros)
                checar_tela(ex, onde, cartoes, tabelas, contas, erros)
        if t == "resumo":
            p = c.get("pontos") or []
            if not 3 <= len(p) <= 5:
                erros.append(f"{onde}: pontos deve ter de 3 a 5 frases")
            for g in c.get("glossario") or []:
                if not (isinstance(g, dict) and g.get("termo") and g.get("def")):
                    erros.append(f"{onde}: cada item do glossário precisa de termo e def")

    checar_termos(cartoes, erros)
    todos = prosa(aula)
    for s in todos:
        if "<" in s or ">" in s.replace("→", ""):
            erros.append(f"texto com HTML (use só **negrito**, *itálico*, listas '- ' e [[termo|definição]]): {s[:60]!r}")
            break
    for s in todos:
        if s.count("[[") != len(base.GLOSS.findall(s)):
            erros.append(f"termo de glossário mal formado (use [[termo|definição]]): {s[:60]!r}")
    blob = "\n".join(base.textos(aula))
    if base.SEGREDOS.search(blob):
        erros.append(f"conteúdo proibido (segredo ou caminho pessoal): {base.SEGREDOS.search(blob).group(0)!r}")
    for em in base.EMAIL.findall(blob):
        erros.append(f"e-mail no texto: {em!r}")
    texto = "\n".join(todos)
    if m := HP12C.search(texto):
        erros.append(f"o curso usa calculadora científica: tire a menção a {m.group(0)!r}")
    if m := FORA_DO_ESCOPO.search(texto):
        erros.append(f"{m.group(0)!r} não cai na prova e fica fora deste curso (aulas 20 e 22, método indireto da DFC, capital de giro, DuPont, endividamento e solvência)")
    if re.search(r"https?://", texto):
        avisos.append("link externo no texto: o curso deve funcionar offline")
    for s in todos:
        ws = re.findall(r"[a-zA-Z]+", s.lower())
        if len(ws) >= 8 and sum(w in base.INGLES for w in ws) / len(ws) > 0.12:
            erros.append(f"trecho parece em inglês: {s[:70]!r}")
    if re.search(r"\b\d+\.\d+\s?%", texto):
        erros.append("número com ponto decimal (use vírgula: 14,5%)")
    return erros, avisos


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("aulas", nargs="+")
    ap.add_argument("--quiet", action="store_true")
    a = ap.parse_args(argv)
    falhou = False
    for arq in a.aulas:
        path = Path(arq).resolve()
        erros, avisos = checar(path)
        for e in erros:
            print(f"ERRO   {path.name}: {e}")
        if not a.quiet:
            for w in avisos:
                print(f"AVISO  {path.name}: {w}")
        print(f"{path.name}: {len(erros)} erro(s), {len(avisos)} aviso(s)")
        falhou = falhou or bool(erros)
    return 1 if falhou else 0


if __name__ == "__main__":
    sys.exit(main())
