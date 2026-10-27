# Briefing para o Codex — curso "Contabilidade Gerencial em 1 dia"

> **Esta tarefa não é uma análise de dados.** O `AGENTS.md` deste repositório descreve um agente
> analista; o loop dele (onboard, SMART, árvore, `analyst sql`…) **não se aplica aqui**. Você é o
> autor de um curso. Escreva **somente** o arquivo da aula pedida, em `curso/contabilidade/aulas/`.

## 1. Para quem e para quê

- **Aluno:** Theo, aluno de Administração da Link School of Business. Perfil de negócio. Lê em pt-BR.
- **Objetivo:** tirar a nota máxima na **AV1 de Contabilidade Gerencial**, uma prova individual, **sem
  consulta**, com **calculadora científica**. Ele vai fazer o curso inteiro **num dia** (12 aulas,
  cerca de 6 horas).
- **O que a prova cobra** (o simulado oficial tem 32 questões): contas curtas de um ou dois passos
  ("calcule…"), classificação ("classifique em operacional, investimento ou financiamento") e
  interpretação em uma frase ("explique o que significa"). Matemática financeira é o maior bloco.
- **Fonte do conteúdo:** `curso/contabilidade/fontes/`, que tem uma cópia das 11 skills de estudo da
  disciplina. Cada tema tem a teoria (`<tema>.md`) e o banco de questões com gabarito comentado
  (`<tema>-exercicios.md`). Tudo ali já foi conferido. Siga **sempre a versão do curso** (o que as
  fontes marcam com 📘); use o complemento (➕) só para dar intuição; aproveite as pegadinhas (⚠️).
  **Não** copie os marcadores 📘 ➕ ⚠️ ✍️ para a aula.

## 1.1 Regra número 1: o aluno tem contexto zero

Theo **nunca viu esta matéria**. Escreva para alguém inteligente que não sabe o que é juros, taxa,
percentual, capital, regime, ativo, receita ou lucro. Esta regra vem antes de todas as outras.

O retorno dele sobre a primeira versão da aula 01, que **não pode se repetir**:
- O texto dizia "Nas fórmulas, divida o percentual por 100: 2,00% vira 0,02. Compare valores na mesma
  data". Ele perguntou: *Que fórmulas? Nenhuma foi mostrada. Que percentual? Que valores?*
- O diagrama dizia "Escolha a fórmula do regime". *O que é regime?*
- Dizia "Use a mesma unidade". *Unidade de quê? Em que contexto?*

Como escrever:
1. **Nada é usado antes de ser explicado.** Todo termo técnico (e todo termo do dia a dia usado em
   sentido técnico, como "regime", "unidade", "taxa", "base") é explicado em palavras simples **no
   cartão em que aparece pela primeira vez**, ou num cartão anterior. Não cite algo que ainda não
   apareceu ("nas fórmulas", "compare os valores", "use o regime certo").
2. **Do concreto para o nome, do nome para a fórmula.** Comece por uma situação com números pequenos
   ("Marta pega R$ 1.000 emprestados e, um mês depois, devolve R$ 1.020"). Depois dê o nome de cada
   parte ("os R$ 1.000 são o capital; os R$ 20 a mais são os juros"). Só então mostre a fórmula.
3. **Uma fórmula por cartão, letra por letra.** Antes de `M = C × (1 + i × n)`, diga o que é M, C, i e
   n, com o número de cada um no exemplo; depois a conta com números; por fim a fórmula.
4. **Uma ideia por cartão.** Se o cartão precisa de "e também…", divida. Prefira mais cartões curtos a
   poucos cartões cheios. O título do cartão pode ser a pergunta que ele responde ("O que são juros?").
5. **Diga o porquê** de cada passo em uma frase ("o prazo precisa estar em meses porque a taxa é por
   mês: 2% de juros a cada mês").
6. **O glossário em linha não ensina.** `[[termo|definição]]` é só um lembrete ao tocar: o texto do
   cartão tem que explicar o termo sozinho. E o termo marcado só pode ter aparecido a partir daquele
   cartão (o verificador recusa um termo do glossário usado num cartão anterior).
7. **Diagramas e opções de exercício** só usam palavras já explicadas.
8. **Releia cada cartão como Theo:** "eu, sem ter visto as aulas, entendo cada palavra daqui?". Se não,
   reescreva.

## 2. A plataforma (já existe; não mexa)

Um cartão por tela, prática com retorno imediato, XP, erros que voltam no fim da aula, navegação livre.
O player é o mesmo dos outros cursos (`curso/aula.html`, `curso/assets/`). A aula de exemplo deste
curso, com todos os tipos, é `curso/contabilidade/aulas/aula-00.js`: **use-a como modelo de formato**.

## 3. O formato de uma aula

Um arquivo de dados por aula, `curso/contabilidade/aulas/aula-NN.js`, com exatamente esta forma (JSON
válido depois do `=`):

```js
(window.CURSO_AULAS = window.CURSO_AULAS || {})["NN"] = {
  "n": "NN", "parte": "A",
  "titulo": "…", "objetivo": "o que o aluno consegue fazer ao fim (1 frase)", "minutos": 25,
  "tabelas": { "<id>": { "fonte": "nenhum", "titulo": "…", "colunas": ["…"], "numericas": [1],
                         "linhas": [["…", "1.234"]] } },
  "cartoes": [ … ]
};
```

**Cartões** (`tipo`), sempre nesta lógica:
1. `abertura` (o primeiro), **sempre com `quadrinho`**;
2. `conceito`: de 2 a 12. Com o aluno de contexto zero (§1.1), uma aula costuma ter de 8 a 12 cartões
   curtos de conceito;
3. `pratica`: **6 ou mais** (o currículo diz quantas), intercaladas com os conceitos e nunca antes do
   primeiro. Cada prática testa o conceito que acabou de ser explicado;
4. `desafio`: exatamente 1, perto do fim;
5. `resumo`: o último.

- **abertura / conceito:** `titulo` e `texto` (≤ 90 palavras). Opcionais:
  - `exemplo`: caixa "Na prática", ≤ 45 palavras;
  - `atencao`: caixa "Atenção ao detalhe", ≤ 45 palavras; use para a pegadinha de prova;
  - `tabela`: id de uma tabela;
  - `quadrinho`, `grafico`, `diagrama`.
- **pratica:** `exercicio` com `tipo` ∈ `numero` · `escolha` · `multipla` · `completar` · `ordenar` ·
  `associar`, mais `enunciado` (≤ 45 palavras) e `explicacao` (o retorno, ≤ 70 palavras no `numero`).
  O cartão da prática pode ter `tabela` (id), quando os dados de um exercício não cabem no enunciado.
  - **`numero`** (o tipo mais importante: o aluno faz a conta na calculadora e digita o resultado):
    `{"tipo": "numero", "enunciado": "…", "unidade": "R$" | "%" | "dias" | "vezes" | "", "casas": 2,
    "resposta": 40250, "calculo": "35000 * (1 + 0.025 * 6)", "explicacao": "… = **R$ 40.250,00**."}`
    - `resposta` é o número já arredondado com `casas` casas (`5.66` para 5,66%; `40250` para R$ 40.250,00);
    - `calculo` é a conta em Python (só números, `+ - * / **`, parênteses e `log`). O verificador
      a avalia e recusa a aula se não der a `resposta`;
    - a `explicacao` mostra a conta como se digita na calculadora e o resultado no formato da prova,
      exatamente como o verificador formata (`40.250,00`, `5,66`, `1,25`);
    - percentuais: `unidade` `"%"` e `resposta` em pontos percentuais (`5.66`, não `0.0566`);
    - o player aceita `22.463,70`, `22463,70`, `22463.70` e uma folga de arredondamento (0,1% ou uma
      unidade da última casa). Não confie nela para esconder erro de conta.
  - **escolha:** `opcoes` (2–5), `correta` (índice);
  - **multipla:** `opcoes`, `corretas` (índices);
  - **completar:** `frase` com `___` e `aceitas` (palavras; para número, use `numero`);
  - **ordenar:** `itens` (3–7, na ordem certa; a plataforma embaralha);
  - **associar:** `pares` (3–6, `[esquerda, direita]`; a plataforma embaralha a direita).
- **desafio:** `exercicio` do tipo `aberta`, corrigido por IA contra a resposta comentada:
  - `cena` (≤ 70 palavras): Marta conta o que viu, com os números, e que decisão depende da resposta;
  - `enunciado` (≤ 25 palavras): só o objetivo;
  - `tabela` (opcional);
  - `passos` (2 a 4): `{pergunta (≤ 30 palavras), comeco (≤ 15 palavras, termina em "…")}`, do mais
    concreto (uma conta) ao mais amplo ("o que você diria a Marta?");
  - `dica`;
  - `contas`: `[{"conta": "100000 - 20000", "resultado": "80.000"}]`. Cada número **calculado** que a
    resposta comentada usa entra aqui. O verificador avalia cada conta e exige que o `resultado`
    apareça, escrito igual, na resposta comentada;
  - `resposta_comentada` (30–150 palavras; até 45 por passo): "**Passo 1.** …", "**Passo 2.** …",
    com a conta e o número exato. Todo número dela precisa estar na tela (tabelas, cartões) ou nas
    `contas`.
- **quadrinho:** 1 a 3 falas `{"quem": "dona" | "voce", "fala": "…"}` (≤ 25 palavras cada).
  **Obrigatório na abertura.**
- **grafico** (cartão com tabela): `{"tabela", "rotulo", "valor" (coluna em numericas), "destaque": [linhas], "nota"}`. Aceita números negativos.
- **diagrama** (sempre com `nota` ≤ 25 palavras e caixas ≤ 12 palavras):
  - `fluxo`: `etapas` (3–7) e `destaque` opcional;
  - `arvore`: `raiz` e `ramos` (2–4) `{texto, filhos (até 3)}`;
  - `piramide`: `niveis` (2–4);
  - `lado_a_lado`: `esquerda` e `direita` `{titulo, itens (1–4)}`. Na nota, cite o título da coluna,
    nunca "à direita";
  - `cascata`: `tabela`, `rotulo`, `valor`. A primeira linha é o início, as do meio são as partes, com
    sinal, e a última é o fim. O verificador confere que fecha. **Ótima para a DRE**;
  - `funil`: `tabela`, `rotulo`, `valor`, em ordem decrescente.
- **resumo:** `pontos` (3–5 frases "lembre-se") e `glossario` (`[{termo, def}]`).
- **Tabelas:** sempre `"fonte": "nenhum"`. Números em pt-BR com o sinal "−" para negativos.

## 4. Regras de escrita (o verificador confere as que dá para medir)

**A história.** Cada aula é um episódio com o mesmo elenco:
- **Marta** (`dona`), dona de uma loja. Entende do negócio, não de contabilidade. Chega com pressa,
  com o número que viu (no extrato, no balanço, na guia de imposto) e com uma decisão a tomar: pegar
  um empréstimo, escolher o regime tributário, dar prazo ao cliente;
- **você** (`voce`), o aluno, que aprende o assunto e responde a ela.

A abertura traz a pergunta de Marta, os conceitos dão as ferramentas e o desafio fecha o episódio com a
resposta para ela. Os números da loja de Marta são exemplos didáticos deste curso.

**As práticas treinam a prova.**
- Escreva os enunciados no estilo da prova ("Uma empresa apresentou…", "Calcule…", "Classifique…").
- Use primeiro as questões oficiais que o currículo indica (simulado geral, pré-aulas, listas), com os
  números delas, e complete com as inéditas das fontes.
- Os distratores são os **erros reais** de quem faz a prova: somar taxas em vez de multiplicar fatores,
  fazer 12% − 6% no lugar do Fisher, esquecer as deduções, pôr o empréstimo no PL, trocar liquidez seca
  por corrente, dividir pelo PL no lugar do ativo.
- Uma conta por prática `numero`. Se a questão oficial pede três valores, vire três práticas seguidas.

**Números exatos, como na prova.**
- R$ com 2 casas e percentuais com 2 casas (`R$ 28.701,57`, `5,66%`, liquidez `1,25`), em pt-BR.
- Mostre a conta como se digita na calculadora científica: `25.000 × 1,028^5`, `1,58^(1 ÷ 12) − 1`.
- **Nunca** mencione HP12C: o aluno usa calculadora científica. O verificador recusa.
- **Erros do material:** as fontes listam questões cujo gabarito oficial está errado (seção 7 de cada
  skill e a tabela da `revisao_geral.md`). Use o valor certo; se a questão for oficial, diga numa linha
  da explicação o que a lista traz ("a lista traz 6,04% por arredondamento").

**Convenções do curso** (são as que valem na prova; estão nas fontes):
- taxa nominal com capitalização: divide (proporcional) e depois compõe;
- "alíquota combinada de 34%" de IR + CSLL quando o enunciado disser;
- juros recebidos de aplicações = atividade operacional; dividendos pagos = financiamento;
- AV sobre o ativo total (BP) ou a receita líquida (DRE); margens sobre a receita líquida;
- caixa e aplicações são contas financeiras (ACF); empréstimos de curto prazo, PCF;
- Lucro Presumido: CSLL sobre a mesma base presumida do IRPJ.

**Escrita.**
- Uma ideia por cartão: `texto` ≤ 90 palavras; `exemplo`/`atencao` ≤ 45; `enunciado` ≤ 45.
- pt-BR, frases curtas, voz ativa, "você".
- Glossário em linha `[[termo|definição]]` na primeira vez que um termo técnico aparece.
- Sem HTML (o verificador recusa `<` e `>`); só `**negrito**`, `*itálico*`, listas com `- `.

**Ilustre o que é difícil de imaginar.**
- **Diagrama** para estrutura e processo: a escada da DRE, as três atividades da DFC,
  os grupos do balanço.
- **Gráfico** quando a forma dos números é o argumento: a AH de cada linha, as margens de dois anos.
- **Cascata** quando há uma conta que vai do início ao fim: a DRE.
- Sempre com a `nota` dizendo o que olhar. Poucas caixas, textos curtos.

**Escopo.**
- Fora do curso (aulas 20 e 22 do plano): custos e formação de preço, unit economics, ponto de
  equilíbrio, LTV, CAC, churn, VPL, TIR, payback. O verificador recusa.
- Não use nada de uma aula posterior: o currículo diz o que cada aula ainda não pode usar.

## 5. O que nunca fazer

- Escrever fora de `curso/contabilidade/aulas/aula-NN.js` (nem no `indice.js`: as aulas são escritas em
  paralelo e quem marca `pronta` é a revisão).
- Pôr caminho pessoal (`/Users/…`), e-mail, link externo ou nome de arquivo no texto da aula.
- Copiar parágrafos inteiros das fontes: reescreva para o aluno, curto.
- Rodar o agente (`analyst sql`, `/investigate`) ou mexer em `src/`, `evals/`, `tests/` e `curso/assets/`.

## 6. Checklist ao terminar a aula

1. `uv run python curso/tools/check_aula_ctb.py curso/contabilidade/aulas/aula-NN.js` sai com 0 erros.
2. Releia cada prática `numero`: o `calculo` é a fórmula certa do curso (não só uma conta que bate)?
3. Toda prática tem uma resposta certa possível, e os distratores são erros plausíveis.
4. O desafio se entende sem reler a aula: a cena diz quem pergunta e por quê, e cada passo pede uma
   coisa só.
5. Resuma em 3 linhas: o que a aula ensina, quantas práticas tem e qualquer dúvida de conteúdo.
