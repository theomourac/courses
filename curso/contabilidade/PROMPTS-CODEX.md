# Prompts para o Codex — curso "Contabilidade Gerencial em 1 dia"

A plataforma já existe (é a mesma dos outros cursos). Os prompts abaixo escrevem e revisam as aulas.
Os lotes rodam em paralelo com `curso/tools/lote_codex.sh` (o modelo de cada aula é o bloco "Aula NN",
salvo num `.txt`); por isso o Codex **não** mexe no `indice.js`: quem marca `pronta` é a revisão.

---

## Aula NN (troque NN pelo número)

```
Tarefa: escrever a aula NN do curso "Contabilidade Gerencial em 1 dia". NÃO é uma análise de dados:
ignore o loop do AGENTS.md (onboard, SMART, árvore, analyst sql); você é o autor de um curso.

Leia, nesta ordem:
1. curso/contabilidade/BRIEFING-CODEX.md (inteiro: formato, regras de escrita, proibições, checklist);
2. a ficha "Aula NN" em curso/contabilidade/CURRICULO.md (e a tabela do que cada aula ainda não pode usar);
3. as fontes que a ficha indica, em curso/contabilidade/fontes/ (a teoria e o banco de exercícios do tema;
   procure as questões pela etiqueta [Fonte: …]);
4. curso/contabilidade/aulas/aula-00.js como modelo de formato (não copie o conteúdo).

Escreva somente curso/contabilidade/aulas/aula-NN.js. Não mexa no indice.js nem em nenhum outro arquivo.
As respostas da ficha já foram conferidas: use-as. Toda prática `numero` tem um `calculo` que dá a
`resposta`, e toda conta da resposta comentada do desafio entra em `contas`. Use só `uv run` (python e
pip soltos são proibidos neste repositório).

Antes de responder:
- `uv run python curso/tools/check_aula_ctb.py curso/contabilidade/aulas/aula-NN.js` com 0 erros;
- confira o checklist do §6 do briefing (fórmula certa em cada `calculo`, distratores plausíveis,
  desafio que se entende sozinho).
Responda com 3 linhas: o que a aula ensina, quantas práticas tem e qualquer dúvida de conteúdo.
```

---

## R — Revisão de uma aula

```
Revise curso/contabilidade/aulas/aula-NN.js com base neste retorno: <cole aqui o que não ficou bom>.
NÃO é uma análise de dados: ignore o loop do AGENTS.md; você é o autor de um curso. Mesmas regras de
curso/contabilidade/BRIEFING-CODEX.md. Mantenha o que funciona; mude só o necessário. Escreva somente
nesse arquivo. Rode `uv run python curso/tools/check_aula_ctb.py curso/contabilidade/aulas/aula-NN.js`
(0 erros) antes de responder, e diga em 3 linhas o que mudou.
```
