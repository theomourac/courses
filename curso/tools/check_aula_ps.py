"""Verificador de uma aula do curso "People Skills para a AV1" (curso/people/aulas/aula-NN.js).

    uv run python curso/tools/check_aula_ps.py curso/people/aulas/aula-03.js [mais arquivos] [--quiet]

Mesmo formato de cartões e mesmas regras de escrita do curso de contabilidade (curso/tools/check_aula_ctb.py),
com o que muda num curso de conceitos para uma prova de 2 horas de estudo (curso/people/BRIEFING-CODEX.md):
- aulas curtas: de 4 práticas para cima e de 2 a 8 conceitos;
- o desafio é uma dissertativa no esqueleto da prova (conceito, evidência, diagnóstico, intervenção). Quando o
  desafio pede um exemplo do aluno (`pessoal`), a resposta comentada diz o critério ("Vale qualquer…"), porque
  o professor não corrige a história, só se ela faz sentido com o conceito;
- a aula da folha de consulta (`folha`) tem de 2 a 4 desafios, um por parte da folha;
- o simulado (`simulado`) é só prática: de 10 práticas para cima e nenhum conceito obrigatório;
- elenco Marta, você e Lia; o exercício `numero` (equação da motivação) é conferido como na contabilidade.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import check_aula as base  # noqa: E402  (loader, word count, glossary, diagrams, hygiene rules)
import check_aula_ctb as ctb  # noqa: E402  (numero, contas, numbers on screen, terms before use)

TIPOS_CARTAO = {"abertura", "conceito", "pratica", "desafio", "resumo"}
TIPOS_EXERCICIO = {"escolha", "multipla", "completar", "ordenar", "associar", "numero", "aberta"}
PERSONAGENS = {"dona", "voce", "mentora"}
MAX_TEXTO, MAX_CAIXA, MAX_ENUNCIADO, MAX_FALA = 90, 45, 45, 25
MIN_PRATICAS, MIN_CONCEITOS, MAX_CONCEITOS = 4, 2, 8
MIN_PRATICAS_SIMULADO = 10
# A personal challenge grades the fit with the concept, not the story: the model answer states the criterion.
CRITERIO_PESSOAL = re.compile(r"\bvale (qualquer|um|uma)\b", re.I)


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
    folha, simulado = bool(aula.get("folha")), bool(aula.get("simulado"))

    tabelas = aula.get("tabelas") or {}
    for tid, t in tabelas.items():
        cols, linhas = t.get("colunas") or [], t.get("linhas") or []
        if not cols or not linhas or any(len(l) != len(cols) for l in linhas):
            erros.append(f"tabela {tid}: colunas e linhas precisam existir e ter o mesmo número de células")
        if t.get("fonte") != "nenhum":
            erros.append(f"tabela {tid}: fonte deve ser \"nenhum\" (o conteúdo vem do material do curso, não de um CSV)")
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
    desafios = tipos.count("desafio")
    if folha and not 2 <= desafios <= 4:
        erros.append(f"{desafios} cartões 'desafio' (a aula da folha tem de 2 a 4: um por parte da folha)")
    elif not folha and desafios != 1:
        erros.append(f"{desafios} cartões 'desafio' (deve haver exatamente 1)")
    minimo = MIN_PRATICAS_SIMULADO if simulado else 2 if folha else MIN_PRATICAS
    if tipos.count("pratica") < minimo:
        erros.append(f"{tipos.count('pratica')} cartões 'pratica' (mínimo {minimo}: prova se treina fazendo)")
    if not simulado and not MIN_CONCEITOS <= tipos.count("conceito") <= MAX_CONCEITOS:
        erros.append(f"{tipos.count('conceito')} cartões 'conceito' (de {MIN_CONCEITOS} a {MAX_CONCEITOS})")
    if "conceito" in tipos and "pratica" in tipos and tipos.index("pratica") < tipos.index("conceito"):
        erros.append("a primeira prática vem antes do primeiro conceito")
    praticas = [(c.get("exercicio") or {}).get("tipo") for c in cartoes if c.get("tipo") == "pratica"]
    if len(set(praticas)) < 2:
        avisos.append("todas as práticas são do mesmo tipo: varie (escolha, associar, ordenar, completar…)")
    if cartoes and not cartoes[0].get("quadrinho"):
        erros.append("cartão 1 (abertura): falta quadrinho (Marta traz o problema do dia)")

    for k, c in enumerate(cartoes, start=1):
        onde = f"cartão {k} ({c.get('tipo')})"
        t = c.get("tipo")
        if c.get("quadrinho") is not None:
            checar_quadrinho(c["quadrinho"], onde, erros)
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
                    erros.append(f"{onde}: enunciado com {base.palavras(ex['enunciado'])} palavras (máximo {MAX_ENUNCIADO})")
                ctb.checar_numero(ex, onde, erros)
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
                contas = ctb.checar_contas(ex, onde, erros)
                ctb.checar_tela(ex, onde, cartoes, tabelas, contas, erros)
                if ex.get("pessoal") and not CRITERIO_PESSOAL.search(ex.get("resposta_comentada") or ""):
                    erros.append(f"{onde}: desafio pessoal sem critério: a resposta comentada diz o que vale "
                                 "(\"Vale qualquer projeto seu em que…\") e só depois dá um exemplo")
        if t == "resumo":
            p = c.get("pontos") or []
            if not 3 <= len(p) <= 5:
                erros.append(f"{onde}: pontos deve ter de 3 a 5 frases")
            for g in c.get("glossario") or []:
                if not (isinstance(g, dict) and g.get("termo") and g.get("def")):
                    erros.append(f"{onde}: cada item do glossário precisa de termo e def")

    ctb.checar_termos(cartoes, erros)
    todos = ctb.prosa(aula)
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
