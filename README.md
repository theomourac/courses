# Courses

Cursos de estudo para prova, no formato de um cartão por tela: conceito curto, prática com retorno imediato,
XP, erros que voltam no fim da aula e um desafio escrito no fim de cada aula. Feitos para as AV1 da
Link School of Business (Administração, 2026).

| Curso | Abrir | Aulas |
|---|---|---|
| Contabilidade Gerencial em 1 dia | `index.html?curso=contabilidade` | matemática financeira, balanço, DRE, DFC, análise vertical e horizontal, rentabilidade, liquidez, tributos e simulado |
| People Skills para a AV1 | `index.html?curso=people` | autoconhecimento e SWOT, valores e as 3 lentes, folha de consulta, equação da motivação, emoções, perfis, as 3 perguntas do cérebro, rede padrão, effectuation e simulado |

## Como rodar

Precisa de [uv](https://docs.astral.sh/uv/). Na raiz do repositório:

```bash
uv run python curso/tools/servidor.py --porta 8765
```

Abra http://localhost:8765. O servidor:

- serve as páginas;
- guarda o progresso num SQLite local (`~/.curso-agente-analista/progresso.sqlite`; troque com `CURSO_DB=...`);
- corrige os desafios escritos com o Claude (precisa do comando `claude` instalado e logado). Sem ele, o
  curso funciona e o desafio mostra a resposta comentada para você se avaliar.

As páginas também abrem direto pelo arquivo (`curso/index.html`), sem correção automática.

## Como é feito

- `curso/assets/`: a plataforma (trilha, player, diagramas, ilustrações, estilo claro e escuro, celular).
- `curso/cursos.js`: a lista de cursos. Cada curso tem a sua pasta de aulas e a sua chave de progresso.
- `curso/<curso>/aulas/aula-NN.js`: uma aula por arquivo, só dados (JSON). `indice.js` monta a trilha.
- `curso/<curso>/BRIEFING-CODEX.md` e `CURRICULO.md`: as regras de escrita e a ficha de cada aula.
- `curso/<curso>/fontes/`: o material de estudo de onde as aulas saíram.
- `curso/tools/check_aula_ctb.py` e `check_aula_ps.py`: os verificadores de cada curso (formato, limites de
  texto, contas conferidas, termo explicado antes de ser usado, questão do simulado usada uma vez só).

## Verificar e testar

```bash
uv run python curso/tools/check_aula_ps.py curso/people/aulas/aula-*.js
uv run python curso/tools/check_aula_ctb.py curso/contabilidade/aulas/aula-*.js
uv run pytest -q
```
