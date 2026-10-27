"""Verificador de uma aula do curso (curso/aulas/aula-NN.js, formato de dados).

    uv run python curso/tools/check_aula.py curso/aulas/aula-03.js [mais arquivos] [--quiet]

Sai com 0 quando a aula segue o formato (curso/BRIEFING-CODEX.md §3) e as regras de escrita (§4);
com 1 quando há ERRO. AVISO não reprova. Cada linha diz o que corrigir. Só biblioteca padrão.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path

CURSO = Path(__file__).resolve().parents[1]
REPO = CURSO.parent
DADOS = CURSO / "dados"

TIPOS_CARTAO = {"abertura", "conceito", "pratica", "agente", "desafio", "resumo"}
TIPOS_EXERCICIO = {"escolha", "multipla", "completar", "ordenar", "associar", "aberta"}
MAX_TEXTO = 90          # palavras por cartão (texto principal)
MAX_CAIXA = 45          # exemplo / atencao
MAX_ENUNCIADO = 45
MIN_RESPOSTA, MAX_RESPOSTA = 30, 150
MAX_POR_PASSO = 45      # words per "**Passo N.**" paragraph of the model answer
# The challenge is solved with what the lesson shows: no grader jargon before the evaluation part.
JARGAO_CORRETOR = re.compile(r"gabarito|faixa aceita|toler[âa]ncia", re.I)
# The challenge: a scene that tells the story, a one-line goal and 2-4 guided steps.
MAX_CENA, MAX_OBJETIVO, MAX_PERGUNTA, MAX_COMECO = 70, 25, 30, 15
# Visual story: a comic strip with the recurring cast, and bar charts drawn from a lesson table.
PERSONAGENS = {"dona", "voce", "agente"}
# Concept diagrams, drawn by the platform from data.
DIAGRAMAS = {"fluxo", "arvore", "piramide", "lado_a_lado", "cascata", "funil"}
MAX_ITEM = 12           # words per box of a diagram
MAX_FALA, MAX_NOTA = 25, 25
SEGREDOS = re.compile(r"(sk-ant-|postgres(?:ql)?://|password=|api[_-]?key\s*[:=]|/Users/)", re.I)
EMAIL = re.compile(r"[\w.+-]+@(?!teste\.com\b)[\w-]+\.[\w.]+")
INGLES = {"the", "and", "of", "is", "are", "with", "this", "that", "which", "for", "from", "should", "must", "when", "every"}
NUMERO = re.compile(r"[−–-]?\d{1,3}(?:\.\d{3})+(?:,\d+)?|[−–-]?\d+(?:,\d+)?")
GLOSS = re.compile(r"\[\[([^\]|]+)\|([^\]]+)\]\]")


def palavras(texto: str) -> int:
    texto = GLOSS.sub(lambda m: m.group(1), texto or "")
    return len(re.findall(r"[\wÀ-ÿ]+(?:[-'][\wÀ-ÿ]+)*", texto))


def numero_ptbr(tok: str) -> float | None:
    t = tok.replace("−", "-").replace("–", "-")
    try:
        if "," in t:
            return float(t.replace(".", "").replace(",", "."))
        if re.fullmatch(r"-?\d{1,3}(?:\.\d{3})+", t):
            return float(t.replace(".", ""))
        return float(t)
    except ValueError:
        return None


def numeros_csv(path: Path) -> list[float]:
    vals: list[float] = []
    with path.open(encoding="utf-8", newline="") as fh:
        for row in csv.reader(fh):
            for cell in row:
                cell = cell.strip()
                try:
                    vals.append(float(cell))
                    continue
                except ValueError:
                    pass
                for m in NUMERO.finditer(cell):
                    v = numero_ptbr(m.group(0))
                    if v is not None:
                        vals.append(v)
    return vals


def bate(v: float, decimais: int, csvvals: list[float]) -> bool:
    """O número exibido (com seu arredondamento) corresponde a um valor do CSV, também como
    percentual (12,5 na página ↔ 0,125 no CSV) ou em milhares abreviados com 0,5% de folga."""
    meia = 0.5 * 10 ** (-decimais) + 1e-9
    for c in csvvals:
        for cand in (c, c * 100):
            if abs(cand - v) <= meia or (abs(v) >= 1000 and abs(cand - v) <= abs(v) * 0.005):
                return True
    return False


def carregar(path: Path) -> dict:
    src = path.read_text(encoding="utf-8")
    m = re.search(r'\(window\.CURSO_AULAS\s*=\s*window\.CURSO_AULAS\s*\|\|\s*\{\}\)\["(\d\d)"\]\s*=\s*(\{.*\})\s*;\s*$', src, re.S)
    if not m:
        raise ValueError('o arquivo deve ser: (window.CURSO_AULAS = window.CURSO_AULAS || {})["NN"] = { ...JSON... };')
    dados = json.loads(m.group(2))
    dados["_chave"] = m.group(1)
    return dados


def textos(obj) -> list[str]:
    if isinstance(obj, str):
        return [obj]
    if isinstance(obj, list):
        return [t for x in obj for t in textos(x)]
    if isinstance(obj, dict):
        return [t for k, v in obj.items() if not k.startswith("_") for t in textos(v)]
    return []


def checar_diagrama(d: dict, onde: str, tabelas: dict, erros: list[str]) -> None:
    """fluxo {etapas}; arvore {raiz, ramos[{texto, filhos}]}; piramide {niveis}; lado_a_lado
    {esquerda, direita: {titulo, itens}}; cascata/funil {tabela, rotulo, valor} — plus a nota."""
    tipo = (d or {}).get("tipo") if isinstance(d, dict) else None
    if tipo not in DIAGRAMAS:
        erros.append(f"{onde}: diagrama.tipo deve ser um de {', '.join(sorted(DIAGRAMAS))}")
        return
    if not d.get("nota") or palavras(d["nota"]) > MAX_NOTA:
        erros.append(f"{onde}: diagrama.nota é obrigatória (o que a figura mostra), até {MAX_NOTA} palavras")
    elif re.search(r"\b(à|a) (direita|esquerda)\b", d["nota"], re.I):
        erros.append(f"{onde}: diagrama.nota diz 'à direita/à esquerda', mas no celular as colunas empilham: "
                     "cite o título da coluna (\"Em 'Pergunta delimitada'…\")")
    caixas: list[str] = []
    if tipo == "fluxo":
        e = d.get("etapas")
        if not (isinstance(e, list) and 3 <= len(e) <= 7):
            erros.append(f"{onde}: diagrama fluxo precisa de 3 a 7 etapas")
        caixas = e if isinstance(e, list) else []
    elif tipo == "arvore":
        ramos = d.get("ramos")
        if not d.get("raiz") or not (isinstance(ramos, list) and 2 <= len(ramos) <= 4):
            erros.append(f"{onde}: diagrama arvore precisa de raiz e 2 a 4 ramos {{texto, filhos}}")
            return
        caixas = [d["raiz"]]
        for r in ramos:
            filhos = r.get("filhos", []) if isinstance(r, dict) else None
            if not isinstance(r, dict) or not r.get("texto") or not (isinstance(filhos, list) and len(filhos) <= 3):
                erros.append(f"{onde}: cada ramo da arvore precisa de texto e até 3 filhos")
                continue
            caixas += [r["texto"], *filhos]
    elif tipo == "piramide":
        n = d.get("niveis")
        if not (isinstance(n, list) and 2 <= len(n) <= 4):
            erros.append(f"{onde}: diagrama piramide precisa de 2 a 4 niveis (o topo primeiro)")
        caixas = n if isinstance(n, list) else []
    elif tipo == "lado_a_lado":
        for lado in ("esquerda", "direita"):
            x = d.get(lado)
            if not (isinstance(x, dict) and x.get("titulo") and isinstance(x.get("itens"), list) and 1 <= len(x["itens"]) <= 4):
                erros.append(f"{onde}: diagrama lado_a_lado precisa de {lado} {{titulo, itens (1 a 4)}}")
                continue
            caixas += [x["titulo"], *x["itens"]]
    else:  # cascata, funil: numbers come from a lesson table (checked against its CSV)
        t = tabelas.get(d.get("tabela"))
        if t is None:
            erros.append(f"{onde}: diagrama {tipo} precisa de tabela (uma tabela da aula)")
            return
        if not (isinstance(d.get("rotulo"), int) and 0 <= d["rotulo"] < len(t.get("colunas") or [])):
            erros.append(f"{onde}: diagrama.rotulo deve ser o índice de uma coluna")
        if not (isinstance(d.get("valor"), int) and d["valor"] in (t.get("numericas") or [])):
            erros.append(f"{onde}: diagrama.valor deve ser uma coluna listada em 'numericas'")
            return
        vals = [numero_ptbr(m.group(0)) for linha in t.get("linhas") or []
                for m in [NUMERO.search(str(linha[d["valor"]]).replace("R$", ""))] if m]
        if tipo == "cascata" and len(vals) >= 3 and None not in vals:
            ini, meio, fim = vals[0], vals[1:-1], vals[-1]
            if abs(ini + sum(meio) - fim) > max(abs(fim), 1) * 0.01:
                erros.append(f"{onde}: cascata não fecha: início + partes ({ini + sum(meio):,.2f}) ≠ fim ({fim:,.2f}); "
                             "inclua o resíduo como uma parte")
        if tipo == "funil" and None not in vals and any(b > a for a, b in zip(vals, vals[1:])):
            erros.append(f"{onde}: funil com etapa maior que a anterior: confira a ordem das linhas")
    for x in caixas:
        if isinstance(x, str) and palavras(x) > MAX_ITEM:
            erros.append(f"{onde}: caixa do diagrama com {palavras(x)} palavras (máximo {MAX_ITEM}): {x[:40]}…")


def checar_visuais(c: dict, onde: str, tabelas: dict, erros: list[str]) -> None:
    """quadrinho: 1-3 balloons by the cast; grafico: bars from one numeric column of a lesson table."""
    q = c.get("quadrinho")
    if q is not None:
        if not (isinstance(q, list) and 1 <= len(q) <= 3):
            erros.append(f"{onde}: quadrinho deve ter de 1 a 3 falas")
        else:
            for i, b in enumerate(q, 1):
                if not isinstance(b, dict) or b.get("quem") not in PERSONAGENS or not b.get("fala"):
                    erros.append(f"{onde}: fala {i} do quadrinho precisa de quem ({', '.join(sorted(PERSONAGENS))}) e fala")
                elif palavras(b["fala"]) > MAX_FALA:
                    erros.append(f"{onde}: fala {i} do quadrinho com {palavras(b['fala'])} palavras (máximo {MAX_FALA})")
    dg = c.get("diagrama")
    if dg is not None:
        checar_diagrama(dg, onde, tabelas, erros)
    g = c.get("grafico")
    if g is not None:
        t = tabelas.get((g or {}).get("tabela"))
        if not isinstance(g, dict) or t is None:
            erros.append(f"{onde}: grafico.tabela deve ser uma tabela da aula")
            return
        ncol = len(t.get("colunas") or [])
        if not (isinstance(g.get("rotulo"), int) and 0 <= g["rotulo"] < ncol):
            erros.append(f"{onde}: grafico.rotulo deve ser o índice de uma coluna")
        if not (isinstance(g.get("valor"), int) and g["valor"] in (t.get("numericas") or [])):
            erros.append(f"{onde}: grafico.valor deve ser o índice de uma coluna listada em 'numericas'")
        d = g.get("destaque", [])
        if not (isinstance(d, list) and all(isinstance(i, int) and 0 <= i < len(t.get("linhas") or []) for i in d)):
            erros.append(f"{onde}: grafico.destaque deve listar índices de linhas da tabela")
        if not g.get("nota") or palavras(g["nota"]) > MAX_NOTA:
            erros.append(f"{onde}: grafico.nota é obrigatória (o que olhar no gráfico), até {MAX_NOTA} palavras")


def checar_tela(ex: dict, onde: str, cartoes: list, tabelas: dict, n_aula: int, erros: list[str]) -> None:
    """Everything the challenge asks and the model answer says must be reachable from the screen:
    numbers from the lesson's tables and cards, rounded percentages, short steps, no grader jargon."""
    proprio = {id(ex.get("resposta_comentada")), id(ex.get("dica"))}
    vistos: list[float] = []
    for t in tabelas.values():
        for linha in t.get("linhas") or []:
            for cel in linha:
                vistos += [v for m in NUMERO.finditer(str(cel)) if (v := numero_ptbr(m.group(0))) is not None]
    for c in cartoes:
        for txt in textos(c):
            if id(txt) in proprio:
                continue
            vistos += [v for m in NUMERO.finditer(txt) if (v := numero_ptbr(m.group(0))) is not None]
    r = ex.get("resposta_comentada") or ""
    for campo, txt in [("resposta_comentada", r), ("cena", ex.get("cena") or "")] + [
            (f"passo {i}", f"{st.get('pergunta', '')} {st.get('comeco', '')}") for i, st in enumerate(ex.get("passos") or [], 1)
            if isinstance(st, dict)]:
        if n_aula < 11 and (m := JARGAO_CORRETOR.search(txt)):
            erros.append(f"{onde}: {campo} fala de {m.group(0)!r}: isso é assunto do corretor (Parte C); explique com o que o aluno vê")
    sem_passo = re.sub(r"Passo \d+", "", r)
    for m in NUMERO.finditer(sem_passo):
        tok, depois = m.group(0), sem_passo[m.end():m.end() + 9]
        v = numero_ptbr(tok)
        if v is None:
            continue
        if depois.startswith("%"):
            if "," in tok:
                erros.append(f"{onde}: resposta_comentada traz {tok}%: arredonde (\"cerca de 15%\"); o aluno faz a conta de cabeça")
            continue
        if float(v).is_integer() and (0 <= abs(v) <= 31 or 2000 <= v <= 2100):
            continue  # days, counts, years
        escala = 1e6 if depois.lstrip().startswith("milh") else 1e3 if depois.lstrip().startswith("mil") else 1
        alvo = v * escala
        tol = max(abs(alvo) * 0.01, 0.5 * 10 ** -(len(tok.split(",")[1]) if "," in tok else 0))
        derivados = (abs(a - b) for a in vistos for b in vistos) if len(vistos) < 400 else ()
        somas = (a + b for a in vistos for b in vistos) if len(vistos) < 400 else ()
        if not any(abs(abs(x) - abs(alvo)) <= tol for x in (*vistos, *derivados, *somas)):
            erros.append(f"{onde}: resposta_comentada usa {tok}{' mil' if escala == 1e3 else ''} que não aparece na aula (tabela ou cartão): use só o que o aluno vê")
    partes = re.split(r"\*\*Passo \d+\.\*\*", r)[1:]
    for i, parte in enumerate(partes, 1):
        if palavras(parte) > MAX_POR_PASSO:
            erros.append(f"{onde}: resposta_comentada do passo {i} com {palavras(parte)} palavras (máximo {MAX_POR_PASSO}; um assunto por passo)")


def checar_desafio(ex: dict, onde: str, erros: list[str]) -> None:
    """A challenge the learner can start without guessing: who asks and why (cena), the goal in one
    line (enunciado) and 2-4 steps, each a single question with a sentence starter."""
    cena = ex.get("cena") or ""
    if not cena:
        erros.append(f"{onde}: falta cena (a história: quem pergunta, o que disse, que decisão depende disso)")
    elif palavras(cena) > MAX_CENA:
        erros.append(f"{onde}: cena com {palavras(cena)} palavras (máximo {MAX_CENA})")
    if palavras(ex.get("enunciado") or "") > MAX_OBJETIVO:
        erros.append(f"{onde}: enunciado do desafio com {palavras(ex['enunciado'])} palavras (máximo "
                     f"{MAX_OBJETIVO}: só o objetivo; as perguntas vão em passos)")
    passos = ex.get("passos")
    if not (isinstance(passos, list) and 2 <= len(passos) <= 4):
        erros.append(f"{onde}: passos deve ter de 2 a 4 itens {{pergunta, comeco}}")
        return
    for i, st in enumerate(passos, 1):
        if not isinstance(st, dict) or not st.get("pergunta") or not st.get("comeco"):
            erros.append(f"{onde}: passo {i} precisa de pergunta e comeco")
            continue
        if palavras(st["pergunta"]) > MAX_PERGUNTA:
            erros.append(f"{onde}: passo {i} com pergunta de {palavras(st['pergunta'])} palavras (máximo {MAX_PERGUNTA}; uma pergunta por passo)")
        if palavras(st["comeco"]) > MAX_COMECO:
            erros.append(f"{onde}: passo {i} com comeco de {palavras(st['comeco'])} palavras (máximo {MAX_COMECO}; só o começo da frase)")
    r = ex.get("resposta_comentada") or ""
    faltam = [i for i in range(1, len(passos) + 1) if f"Passo {i}" not in r]
    if faltam:
        erros.append(f"{onde}: resposta_comentada deve comentar cada passo (\"**Passo 1.** …\"); faltam {faltam}")


def checar_exercicio(ex: dict, onde: str, tabelas: dict, erros: list[str], pratica: bool) -> None:
    tipo = ex.get("tipo")
    if tipo not in TIPOS_EXERCICIO:
        erros.append(f"{onde}: tipo de exercício {tipo!r} (use {', '.join(sorted(TIPOS_EXERCICIO))})")
        return
    if not ex.get("enunciado"):
        erros.append(f"{onde}: falta enunciado")
    elif palavras(ex["enunciado"]) > MAX_ENUNCIADO:
        erros.append(f"{onde}: enunciado com {palavras(ex['enunciado'])} palavras (máximo {MAX_ENUNCIADO})")
    if pratica and tipo == "aberta":
        erros.append(f"{onde}: exercício 'aberta' vai no cartão 'desafio', não em 'pratica'")
    if pratica and not ex.get("explicacao"):
        erros.append(f"{onde}: falta explicacao (o feedback mostrado depois da resposta)")
    if tipo in ("escolha", "multipla"):
        op = ex.get("opcoes")
        if not isinstance(op, list) or not 2 <= len(op) <= 5:
            erros.append(f"{onde}: opcoes deve ter de 2 a 5 itens")
            return
        if tipo == "escolha" and not (isinstance(ex.get("correta"), int) and 0 <= ex["correta"] < len(op)):
            erros.append(f"{onde}: correta deve ser o índice (0..{len(op) - 1}) da opção certa")
        if tipo == "multipla":
            c = ex.get("corretas")
            if not (isinstance(c, list) and c and all(isinstance(i, int) and 0 <= i < len(op) for i in c)):
                erros.append(f"{onde}: corretas deve listar índices válidos (pelo menos um)")
    elif tipo == "completar":
        if "___" not in (ex.get("frase") or ""):
            erros.append(f"{onde}: frase precisa da lacuna ___")
        if not (isinstance(ex.get("aceitas"), list) and ex["aceitas"]):
            erros.append(f"{onde}: aceitas deve listar as respostas aceitas")
    elif tipo == "ordenar":
        it = ex.get("itens")
        if not (isinstance(it, list) and 3 <= len(it) <= 7):
            erros.append(f"{onde}: itens deve ter de 3 a 7 passos, já na ordem certa")
    elif tipo == "associar":
        pares = ex.get("pares")
        if not (isinstance(pares, list) and 3 <= len(pares) <= 6 and all(isinstance(p, list) and len(p) == 2 for p in pares)):
            erros.append(f"{onde}: pares deve ter de 3 a 6 pares [esquerda, direita]")
    elif tipo == "aberta":
        r = ex.get("resposta_comentada") or ""
        n = palavras(r)
        if not MIN_RESPOSTA <= n <= MAX_RESPOSTA:
            erros.append(f"{onde}: resposta_comentada com {n} palavras (de {MIN_RESPOSTA} a {MAX_RESPOSTA})")
        checar_desafio(ex, onde, erros)
    if ex.get("tabela") and ex["tabela"] not in tabelas:
        erros.append(f"{onde}: tabela {ex['tabela']!r} não existe em 'tabelas'")


def checar(path: Path) -> tuple[list[str], list[str]]:
    erros: list[str] = []
    avisos: list[str] = []
    try:
        aula = carregar(path)
    except (ValueError, json.JSONDecodeError) as e:
        return [f"não consegui ler a aula: {e}"], []

    m = re.fullmatch(r"aula-(\d\d)\.js", path.name)
    if not m:
        erros.append("nome do arquivo deve ser aula-NN.js")
    elif not (aula.get("n") == m.group(1) == aula["_chave"]):
        erros.append(f"n={aula.get('n')!r}, chave [{aula['_chave']!r}] e nome do arquivo ({m.group(1)}) devem ser iguais")
    exemplo = bool(aula.get("exemplo"))
    n_aula = int(aula.get("n", "0") or 0)
    if aula.get("parte") not in ("A", "B", "C", "D"):
        erros.append("parte deve ser A, B, C ou D")
    for campo in ("titulo", "objetivo"):
        if not aula.get(campo):
            erros.append(f"falta {campo}")
    if not isinstance(aula.get("minutos"), int):
        erros.append("minutos deve ser um número inteiro")

    # tabelas
    tabelas = aula.get("tabelas") or {}
    for tid, t in tabelas.items():
        onde = f"tabela {tid}"
        cols, linhas = t.get("colunas") or [], t.get("linhas") or []
        if not cols or not linhas or any(len(l) != len(cols) for l in linhas):
            erros.append(f"{onde}: colunas e linhas precisam existir e ter o mesmo número de células")
            continue
        fonte = t.get("fonte")
        if not fonte:
            erros.append(f"{onde}: falta fonte (arquivo em curso/dados/ ou \"nenhum\" para tabela sem dados da loja)")
            continue
        if fonte == "nenhum":
            continue
        arq = DADOS / fonte
        if not arq.is_file():
            erros.append(f"{onde}: fonte {fonte!r} não existe em curso/dados/")
            continue
        if not arq.with_suffix(".sql").is_file():
            erros.append(f"{onde}: falta {arq.with_suffix('.sql').name} com a consulta que gerou {fonte}")
        csvvals = numeros_csv(arq)
        for j in t.get("numericas") or []:
            for linha in linhas:
                cel = str(linha[j]) if j < len(linha) else ""
                for mm in NUMERO.finditer(cel):
                    tok = mm.group(0)
                    v = numero_ptbr(tok)
                    if v is None:
                        continue
                    dec = len(tok.split(",")[1]) if "," in tok else 0
                    if not bate(v, dec, csvvals):
                        erros.append(f"{onde}: o número {tok} (coluna {cols[j]!r}) não aparece em {fonte}")
        if not t.get("numericas"):
            avisos.append(f"{onde}: sem 'numericas' — os números desta tabela não são conferidos com {fonte}")

    # cartões
    cartoes = aula.get("cartoes") or []
    tipos = [c.get("tipo") for c in cartoes]
    for t in set(tipos) - TIPOS_CARTAO:
        erros.append(f"tipo de cartão desconhecido: {t!r}")
    if not tipos or tipos[0] != "abertura":
        erros.append("o primeiro cartão deve ser 'abertura'")
    if not tipos or tipos[-1] != "resumo":
        erros.append("o último cartão deve ser 'resumo'")
    if tipos.count("desafio") != 1:
        erros.append(f"{tipos.count('desafio')} cartões 'desafio' (deve haver exatamente 1)")
    if tipos.count("pratica") < 3:
        erros.append(f"{tipos.count('pratica')} cartões 'pratica' (mínimo 3)")
    if not 2 <= tipos.count("conceito") <= 6:
        erros.append(f"{tipos.count('conceito')} cartões 'conceito' (de 2 a 6)")
    if n_aula >= 9 and "agente" not in tipos:
        erros.append("a partir da aula 09 é obrigatório um cartão 'agente'")
    praticas = [c for c in cartoes if c.get("tipo") == "pratica"]
    if len({(c.get("exercicio") or {}).get("tipo") for c in praticas}) < 2 and not exemplo:
        avisos.append("todas as práticas são do mesmo tipo: varie (escolha, completar, ordenar, associar…)")
    if "conceito" in tipos and "pratica" in tipos and tipos.index("pratica") < tipos.index("conceito"):
        erros.append("a primeira prática vem antes do primeiro conceito")

    if cartoes and not cartoes[0].get("quadrinho"):
        erros.append("cartão 1 (abertura): falta quadrinho (a história começa com a pergunta da dona da loja)")
    for k, c in enumerate(cartoes, start=1):
        onde = f"cartão {k} ({c.get('tipo')})"
        t = c.get("tipo")
        checar_visuais(c, onde, tabelas, erros)
        if t in ("abertura", "conceito", "agente"):
            if not c.get("titulo"):
                erros.append(f"{onde}: falta titulo")
            n = palavras(c.get("texto", ""))
            if not c.get("texto"):
                erros.append(f"{onde}: falta texto")
            elif n > MAX_TEXTO:
                erros.append(f"{onde}: texto com {n} palavras (máximo {MAX_TEXTO}: um cartão = uma ideia; divida)")
            for caixa in ("exemplo", "atencao"):
                if c.get(caixa) and palavras(c[caixa]) > MAX_CAIXA:
                    erros.append(f"{onde}: {caixa} com {palavras(c[caixa])} palavras (máximo {MAX_CAIXA})")
            if c.get("tabela") and c["tabela"] not in tabelas:
                erros.append(f"{onde}: tabela {c['tabela']!r} não existe em 'tabelas'")
        if t == "agente":
            arqs = c.get("arquivos") or []
            if not arqs:
                erros.append(f"{onde}: liste em 'arquivos' os caminhos do kit onde a regra mora")
            for a in arqs:
                if not (REPO / a).exists():
                    erros.append(f"{onde}: o caminho {a!r} não existe no repositório")
        if t in ("pratica", "desafio"):
            ex = c.get("exercicio")
            if not isinstance(ex, dict):
                erros.append(f"{onde}: falta exercicio")
                continue
            if t == "desafio" and ex.get("tipo") != "aberta":
                erros.append(f"{onde}: o desafio é um exercício 'aberta' (resposta escrita + resposta comentada)")
            checar_exercicio(ex, onde, tabelas, erros, pratica=(t == "pratica"))
            if t == "desafio" and ex.get("tipo") == "aberta":
                checar_tela(ex, onde, cartoes, tabelas, n_aula, erros)
        if t == "resumo":
            p = c.get("pontos") or []
            if not 3 <= len(p) <= 5:
                erros.append(f"{onde}: pontos deve ter de 3 a 5 frases")
            for g in c.get("glossario") or []:
                if not (g.get("termo") and g.get("def")):
                    erros.append(f"{onde}: cada item do glossário precisa de termo e def")

    # texto: formato, higiene, idioma
    todos = textos({k: v for k, v in aula.items() if k not in ("tabelas",)}) + textos(tabelas)
    for s in todos:
        if "<" in s or ">" in s.replace("→", ""):
            erros.append(f"texto com HTML (use só **negrito**, *itálico*, `código`, listas '- ' e [[termo|definição]]): {s[:60]!r}")
            break
    for s in todos:
        if s.count("[[") != len(GLOSS.findall(s)):
            erros.append(f"termo de glossário mal formado (use [[termo|definição]]): {s[:60]!r}")
    blob = "\n".join(todos)
    if SEGREDOS.search(blob):
        erros.append(f"conteúdo proibido (segredo, URL do Molde ou caminho pessoal): {SEGREDOS.search(blob).group(0)!r}")
    for em in EMAIL.findall(blob):
        erros.append(f"e-mail no texto: {em!r}")
    if re.search(r"https?://", blob):
        avisos.append("link externo no texto: o curso deve funcionar offline")
    for s in todos:
        ws = re.findall(r"[a-zA-Z]+", s.lower())
        if len(ws) >= 8 and sum(w in INGLES for w in ws) / len(ws) > 0.12:
            erros.append(f"trecho parece em inglês: {s[:70]!r}")
    if re.search(r"\b\d+\.\d+\s?%", blob):
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
