"""The accounting course (curso/contabilidade/): the checker accepts the example and every written lesson,
evaluates every typed-number answer and every challenge sum, and rejects lessons that break the course's
rules (an unchecked number, HP12C, topics left out of the course such as the DFC's indirect method, working capital, DuPont or debt ratios, a cast or
data source from another course)."""

from __future__ import annotations

import importlib.util
import json
import sys
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parents[1]
TOOLS = REPO / "curso" / "tools"
AULAS = REPO / "curso" / "contabilidade" / "aulas"
sys.path.insert(0, str(TOOLS))


def _modulo(nome):
    spec = importlib.util.spec_from_file_location(nome, TOOLS / f"{nome}.py")
    mod = importlib.util.module_from_spec(spec)
    sys.modules[nome] = mod
    spec.loader.exec_module(mod)
    return mod


CK = _modulo("check_aula_ctb")
SRV = _modulo("servidor")
EXEMPLO = AULAS / "aula-00.js"
PREFIX = '(window.CURSO_AULAS = window.CURSO_AULAS || {})["00"] = '


def test_example_lesson_passes():
    erros, _ = CK.checar(EXEMPLO)
    assert erros == []


@pytest.mark.parametrize("path", sorted(p for p in AULAS.glob("aula-*.js") if p.name != "aula-00.js"), ids=lambda p: p.stem)
def test_every_written_lesson_passes(path):
    erros, _ = CK.checar(path)
    assert erros == [], "\n".join(erros)


@pytest.mark.parametrize("expr, valor", [
    ("35000 * (1 + 0.025 * 6)", 40250),
    ("25000 * 1.028 ** 5", 28701.565),
    ("(1.12 / 1.06 - 1) * 100", 5.6604),
    ("log(1610.51 / 1000) / log(1.1)", 5),
])
def test_calculations_are_evaluated(expr, valor):
    assert CK.avaliar(expr) == pytest.approx(valor, abs=1e-3)


@pytest.mark.parametrize("expr", ["__import__('os')", "open('x')", "a + 1", "[1, 2]"])
def test_calculation_refuses_anything_but_arithmetic(expr):
    with pytest.raises((ValueError, SyntaxError)):
        CK.avaliar(expr)


def _exemplo():
    d = CK.base.carregar(EXEMPLO)
    d.pop("_chave")
    return d


def _cartao(d, tipo, n=0):
    return [c for c in d["cartoes"] if c["tipo"] == tipo or (c.get("exercicio") or {}).get("tipo") == tipo][n]


@pytest.mark.parametrize("mutation, expected", [
    ("wrong_calculation", "o calculo dá"),
    ("explanation_without_result", "a explicacao deve mostrar o resultado"),
    ("challenge_number_not_checked", "não está na tela nem nas contas"),
    ("wrong_challenge_sum", "dá 5.100,0000, não 5.000"),
    ("hp12c", "calculadora científica"),
    ("out_of_scope_topic", "fora deste curso"),
    ("indirect_method", "fora deste curso"),
    ("working_capital", "fora deste curso"),
    ("dupont", "fora deste curso"),
    ("debt_ratios", "fora deste curso"),
    ("removed_cards_out_of_order", "cartoes_removidos"),
    ("agent_in_the_comic", "precisa de quem"),
    ("table_from_a_csv", "fonte deve ser \"nenhum\""),
    ("challenge_is_not_open", "o desafio é um exercício 'aberta'"),
    ("term_used_before_explained", "usa 'lair' antes de explicá-lo"),
    ("repeated_answers_in_matching", "associar com itens repetidos"),
])
def test_broken_lessons_fail(tmp_path, mutation, expected):
    d = _exemplo()
    numero, desafio = _cartao(d, "numero")["exercicio"], _cartao(d, "desafio")["exercicio"]
    if mutation == "wrong_calculation":
        numero["calculo"] = "100000 - 30000"
    elif mutation == "explanation_without_result":
        numero["explicacao"] = "Tire as deduções da receita bruta."
    elif mutation == "challenge_number_not_checked":
        desafio["resposta_comentada"] = desafio["resposta_comentada"].replace("sobram R$ 9.900", "sobram R$ 9.917")
    elif mutation == "wrong_challenge_sum":
        desafio["contas"][3]["resultado"] = "5.000"
    elif mutation == "hp12c":
        _cartao(d, "conceito")["texto"] += " Na HP12C, use a tecla CHS."
    elif mutation == "out_of_scope_topic":
        _cartao(d, "conceito")["texto"] += " Depois, calcule o VPL."
    elif mutation == "indirect_method":
        _cartao(d, "conceito")["texto"] += " Pelo método indireto, some a depreciação ao lucro."
    elif mutation == "working_capital":
        _cartao(d, "conceito")["texto"] += " Calcule a NIG e o ciclo de caixa."
    elif mutation == "dupont":
        _cartao(d, "conceito")["texto"] += " Pela DuPont, o ROE é margem × giro × alavancagem."
    elif mutation == "debt_ratios":
        _cartao(d, "conceito")["texto"] += " O endividamento geral divide o passivo pelo ativo."
    elif mutation == "removed_cards_out_of_order":
        d["cartoes_removidos"] = [[5, 3]]
    elif mutation == "agent_in_the_comic":
        d["cartoes"][0]["quadrinho"][1]["quem"] = "agente"
    elif mutation == "table_from_a_csv":
        d["tabelas"]["dre_mes"]["fonte"] = "aula-00-dre.csv"
    elif mutation == "challenge_is_not_open":
        _cartao(d, "desafio")["exercicio"] = dict(numero)
    elif mutation == "repeated_answers_in_matching":
        _cartao(d, "associar")["exercicio"]["pares"][1][1] = "dedução da receita bruta"
    elif mutation == "term_used_before_explained":
        d["cartoes"][0]["texto"] += " No fim aparece o LAIR."
        _cartao(d, "conceito")["texto"] += " O [[LAIR|lucro antes do imposto de renda]] vem antes do IR."
    p = tmp_path / "aula-00.js"
    p.write_text(PREFIX + json.dumps(d, ensure_ascii=False) + ";\n", encoding="utf-8")
    erros, _ = CK.checar(p)
    assert any(expected in e for e in erros), erros


def test_server_grades_this_course_with_its_challenge():
    """The open-answer grader reads the lesson by course id and sends the model answer as the reference."""
    aula = SRV.carregar_aula("contabilidade", "00")
    k = next(i for i, c in enumerate(aula["cartoes"]) if c["tipo"] == "desafio")
    prompt = SRV.montar_prompt(aula, aula["cartoes"][k], ["a", "b", "c"])
    assert "R$ 9.900" in prompt and "<resposta_do_aluno>" in prompt


def test_chat_sends_the_card_on_screen_and_the_learners_answer(monkeypatch):
    """The side chat answers about the card on screen: the tutor sees the card (with its answer key), the
    lesson's concepts, what the learner answered and the conversation so far, on the chat model."""
    visto = {}

    def falso(prompt, schema, sistema, modelo=None):
        visto.update(prompt=prompt, sistema=sistema, modelo=modelo)
        return {"resposta": "Divida pelo fator da inflação."}

    monkeypatch.setattr(SRV, "chamar_modelo", falso)
    aula = SRV.carregar_aula("contabilidade", "00")
    k = next(i for i, c in enumerate(aula["cartoes"]) if (c.get("exercicio") or {}).get("tipo") == "numero")
    r = SRV.perguntar("contabilidade", "00", k, "Por que deu errado?", [{"quem": "aluno", "texto": "oi"}], "100.000", True)
    assert r["resposta"] == "Divida pelo fator da inflação." and visto["modelo"] == SRV.MODELO_CHAT
    p = visto["prompt"]
    assert "receita líquida de março" in p and "100.000" in p and "<pergunta_do_aluno>" in p
    assert "JÁ RESPONDEU ESTE CARTÃO? sim" in p and "ALUNO: oi" in p and "A escada da DRE" in p


@pytest.mark.parametrize("cartao, pergunta", [(999, "oi"), (0, "   ")])
def test_chat_refuses_a_missing_card_or_an_empty_question(cartao, pergunta):
    with pytest.raises(ValueError):
        SRV.perguntar("contabilidade", "00", cartao, pergunta, [])
