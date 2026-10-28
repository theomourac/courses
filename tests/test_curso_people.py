"""The People Skills course (curso/people/): the checker accepts every written lesson, each question of the class
mock exam is used in one lesson only, the whole course fits in about an hour, and the checker rejects lessons that
break the course's rules (a personal challenge without its criterion, the wrong number of challenges in the
reference-sheet lesson, a mock exam with few questions, a cast from another course)."""

from __future__ import annotations

import importlib.util
import json
import re
import sys
from collections import Counter
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parents[1]
TOOLS = REPO / "curso" / "tools"
AULAS = REPO / "curso" / "people" / "aulas"
sys.path.insert(0, str(TOOLS))


def _modulo(nome):
    spec = importlib.util.spec_from_file_location(nome, TOOLS / f"{nome}.py")
    mod = importlib.util.module_from_spec(spec)
    sys.modules[nome] = mod
    spec.loader.exec_module(mod)
    return mod


CK = _modulo("check_aula_ps")
SRV = _modulo("servidor")
FOLHA = AULAS / "aula-03.js"
PREFIX = '(window.CURSO_AULAS = window.CURSO_AULAS || {})["03"] = '
LICOES = sorted(AULAS.glob("aula-*.js"))


def _aula(path):
    d = CK.base.carregar(path)
    d.pop("_chave")
    return d


@pytest.mark.parametrize("path", LICOES, ids=lambda p: p.stem)
def test_every_written_lesson_passes(path):
    erros, _ = CK.checar(path)
    assert erros == [], "\n".join(erros)


def test_each_mock_exam_question_is_used_once():
    usos = Counter()
    for p in LICOES:
        usos.update(int(q) for q in re.findall(r"Simulado, Q(\d+)", p.read_text(encoding="utf-8")))
    assert [q for q, n in usos.items() if n > 1] == []
    assert all(1 <= q <= 100 for q in usos)


def test_course_fits_in_about_an_hour():
    """Lessons 01 to 10 (the reference sheet included); the extra question bank (aula 11) is optional."""
    minutos = sum(_aula(p)["minutos"] for p in LICOES if p.stem != "aula-11")
    assert minutos <= 70


def _cartao(d, tipo, n=0):
    return [c for c in d["cartoes"] if c["tipo"] == tipo or (c.get("exercicio") or {}).get("tipo") == tipo][n]


@pytest.mark.parametrize("mutation, expected", [
    ("personal_without_criterion", "desafio pessoal sem critério"),
    ("sheet_with_one_challenge", "a aula da folha tem de 2 a 4"),
    ("two_challenges_outside_the_sheet", "no máximo 1 fora da aula da folha"),
    ("mock_exam_with_few_questions", "(mínimo 4"),
    ("agent_in_the_comic", "precisa de quem"),
    ("challenge_is_not_open", "o desafio é um exercício 'aberta'"),
    ("term_used_before_explained", "usa 'lente' antes de explicá-lo"),
    ("repeated_answers_in_matching", "associar com itens repetidos"),
    ("html_in_text", "texto com HTML"),
])
def test_broken_lessons_fail(tmp_path, mutation, expected):
    d = _aula(FOLHA)
    desafio = _cartao(d, "desafio")["exercicio"]
    if mutation == "personal_without_criterion":
        desafio["resposta_comentada"] = re.sub(r"Vale (qualquer|um|uma) ", "Por exemplo, ", desafio["resposta_comentada"])
    elif mutation == "sheet_with_one_challenge":
        d["cartoes"] = [c for c in d["cartoes"] if c["tipo"] != "desafio" or c["exercicio"] is desafio]
    elif mutation == "two_challenges_outside_the_sheet":
        d.pop("folha")
    elif mutation == "mock_exam_with_few_questions":
        d["simulado"] = True
    elif mutation == "agent_in_the_comic":
        d["cartoes"][0]["quadrinho"][1]["quem"] = "agente"
    elif mutation == "challenge_is_not_open":
        _cartao(d, "desafio")["exercicio"] = dict(_cartao(d, "escolha")["exercicio"])
    elif mutation == "term_used_before_explained":
        d["cartoes"][0]["texto"] += " No fim vem a lente."
        _cartao(d, "conceito")["texto"] += " Cada [[lente|um jeito de olhar o valor]] tem três opções."
    elif mutation == "repeated_answers_in_matching":
        d["cartoes"].insert(-1, {"tipo": "pratica", "exercicio": {
            "tipo": "associar", "enunciado": "Associe cada item ao quadro da SWOT.", "explicacao": "Interno ou externo.",
            "pares": [["Entrego antes do prazo", "Força"], ["Deixo mensagens sem resposta", "Força"], ["Cortaram estágios", "Ameaça"]]}})
    elif mutation == "html_in_text":
        _cartao(d, "conceito")["texto"] += " <b>Atenção</b>"
    p = tmp_path / "aula-03.js"
    p.write_text(PREFIX + json.dumps(d, ensure_ascii=False) + ";\n", encoding="utf-8")
    erros, _ = CK.checar(p)
    assert any(expected in e for e in erros), erros


def test_server_grades_a_personal_challenge_against_its_criterion():
    """The grader reads the lesson by course id; the model answer it sends carries the criterion, so a story
    different from the example can still be graded as right."""
    aula = SRV.carregar_aula("people", "03")
    k = next(i for i, c in enumerate(aula["cartoes"]) if c["tipo"] == "desafio")
    prompt = SRV.montar_prompt(aula, aula["cartoes"][k], ["a", "b", "c", "d"])
    assert "Vale qualquer força sua" in prompt and prompt.count("<resposta_do_aluno>") == 4
