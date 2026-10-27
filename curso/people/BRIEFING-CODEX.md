# Briefing — curso "People Skills para a AV1"

> **Esta tarefa não é uma análise de dados.** O `AGENTS.md` deste repositório descreve um agente
> analista; o loop dele **não se aplica aqui**. Você é o autor de um curso. Escreva **somente** o
> arquivo da aula pedida, em `curso/people/aulas/`.

## 1. Para quem e para quê

- **Aluno:** Theo, aluno de Administração da Link School of Business, perfil de negócio. Lê em pt-BR.
- **Objetivo:** ir bem na **AV1 de People Skills** (prof. Bruno Mano), com **cerca de 2 horas de estudo**
  no total (10 aulas). Cada minuto conta: corte o que não cai.
- **Como é a prova:** até 10 questões, múltipla escolha e algumas dissertativas, feita para 1h30. Cai
  "exatamente" o que foi feito em aula: quizzes, recapitulações e exercícios. O aluno pode levar **uma
  folha** com a SWOT dele, os 4 cruzamentos e os 5 valores com as 3 lentes (a aula 03 monta essa folha).
- **Como o professor corrige uma dissertativa:** 1) entendeu a pergunta? 2) ligou a um conceito da
  matéria? 3) o exemplo faz sentido? Ele **não corrige a história do aluno**, só se ela faz sentido com o
  conceito. Resposta forte = **conceito certo + evidência observável + diagnóstico + intervenção possível**.
- **Fontes** (em `curso/people/fontes/`):
  - `resumo-av1.md`: o conteúdo inteiro, por módulo, com "O que saber", "Como cai", "Cuidado" e as falas
    do professor. É a fonte da teoria. Foi escrito por outro aluno: ignore as frases "você errou a Qn".
  - `simulado-100.md`: as 100 questões do simulado da turma, com o gabarito (deduzido; a Q40 tem dúvida).
  - `folha-modelo.md`: o formato da folha de consulta.
  - `lentes-dos-valores.md`: as 3 lentes dos valores (A função, B necessidade, C onde faz efeito), como o
    professor definiu em aula. Use estas definições, não outras.

## 1.1 Contexto zero, mas curto

Escreva para alguém inteligente que pode não ter visto a aula. Nada é usado antes de ser explicado:
todo termo (Johari, Schwartz, effectuation, amígdala, sense making…) é explicado em palavras simples
**no cartão em que aparece pela primeira vez**. Do concreto para o nome: comece por uma situação ("Marta
abre o Instagram toda vez que senta para fazer o plano"), depois dê o nome do conceito. Uma ideia por
cartão. Mas o tempo é curto: nada de introdução longa, nada de curiosidade que não cai.

## 2. A plataforma (já existe; não mexa)

Um cartão por tela, prática com retorno imediato, XP, erros que voltam no fim da aula, navegação livre.
O player é o mesmo dos outros cursos. Modelo de formato pronto e aprovado:
`curso/contabilidade/aulas/aula-09.js` (curto) e `aula-08.js`. Copie a forma, não o assunto.

## 3. O formato de uma aula

Um arquivo por aula, `curso/people/aulas/aula-NN.js`, com exatamente esta forma (JSON válido depois do `=`):

```js
(window.CURSO_AULAS = window.CURSO_AULAS || {})["NN"] = {
  "n": "NN", "parte": "A",
  "titulo": "…", "objetivo": "o que o aluno consegue fazer ao fim (1 frase)", "minutos": 12,
  "tabelas": { "<id>": { "fonte": "nenhum", "titulo": "…", "colunas": ["…"], "numericas": [],
                         "linhas": [["…", "…"]] } },
  "cartoes": [ … ]
};
```

**Cartões** (`tipo`), nesta lógica:
1. `abertura` (o primeiro), **sempre com `quadrinho`**;
2. `conceito`: de 2 a 8, curtos;
3. `pratica`: **4 ou mais** (o currículo diz quais questões), intercaladas com os conceitos e nunca antes
   do primeiro. Cada prática testa o conceito que acabou de ser explicado;
4. `desafio`: exatamente 1, perto do fim (a aula 03 tem de 2 a 4; o simulado marca `"simulado": true`);
5. `resumo`: o último.

- **abertura / conceito:** `titulo` e `texto` (≤ 90 palavras). Opcionais: `exemplo` (caixa "Na prática",
  ≤ 45 palavras), `atencao` (caixa "Atenção ao detalhe", ≤ 45 palavras: use para a pegadinha de prova),
  `tabela` (id), `quadrinho`, `diagrama`.
- **pratica:** `exercicio` com `tipo` ∈ `escolha` · `multipla` · `completar` · `ordenar` · `associar` ·
  `numero`, `enunciado` (≤ 45 palavras) e `explicacao` (o retorno).
  - **escolha:** `opcoes` (2–5), `correta` (índice). **Varie a posição da correta**: no simulado original
    a resposta é B em 6 de cada 10 questões; ao usar uma questão, reordene as opções.
  - **multipla:** `opcoes`, `corretas` (índices);
  - **completar:** `frase` com `___` e `aceitas` (palavras curtas e variações aceitas);
  - **ordenar:** `itens` (3–7, na ordem certa; a plataforma embaralha);
  - **associar:** `pares` (3–6, `[esquerda, direita]`, cada item único; a plataforma embaralha a direita);
  - **numero** (só na aula da equação da motivação): `{"tipo": "numero", "enunciado": "…", "unidade": "",
    "casas": 0, "resposta": 3, "calculo": "(8 * 6) / (4 * 4)", "explicacao": "… = **3**."}`. O
    verificador avalia o `calculo` e exige o resultado formatado em pt-BR na `explicacao`.
- **desafio:** `exercicio` do tipo `aberta`, corrigido por IA contra a resposta comentada:
  - `cena` (≤ 70 palavras): quem pergunta, o que aconteceu, que decisão depende disso;
  - `enunciado` (≤ 25 palavras): só o objetivo;
  - `passos` (2 a 4): `{pergunta (≤ 30 palavras), comeco (≤ 15 palavras, termina em "…")}`;
  - `dica`;
  - `resposta_comentada` (30–150 palavras; até 45 por passo): "**Passo 1.** …", "**Passo 2.** …";
  - `"pessoal": true` quando o passo pede um exemplo **do aluno** (um projeto seu, um valor seu). Aí a
    resposta comentada de cada passo pessoal **começa pelo critério** ("Vale qualquer projeto seu em que
    você começou pelo que já tinha…") e só depois dá um exemplo curto. O corretor automático compara com
    ela, então o critério é o que faz uma história diferente da do exemplo ser aceita.
- **quadrinho:** 1 a 3 falas `{"quem": "dona" | "voce" | "mentora", "fala": "…"}` (≤ 25 palavras).
- **diagrama** (sempre com `nota` ≤ 25 palavras e caixas ≤ 12 palavras): `fluxo` (`etapas` 3–7),
  `arvore` (`raiz`, `ramos` 2–4 `{texto, filhos}`), `piramide` (`niveis` 2–4), `lado_a_lado`
  (`esquerda`/`direita` `{titulo, itens 1–4}`; na nota cite o título, nunca "à direita").
- **resumo:** `pontos` (3–5 frases "lembre-se") e `glossario` (`[{termo, def}]`).
- **Tabelas** podem ser de texto (`"numericas": []`), sempre com `"fonte": "nenhum"`. Ótimas para
  comparar (os 6 perfis, os 4 quadrantes de Johari, as 3 perguntas).

## 4. Regras de escrita

**A história.** Cada aula é um episódio com o mesmo elenco:
- **Marta** (`dona`): dona de uma loja que vai abrir a segunda unidade. Lidera um time pequeno, vai
  apresentar o plano a um investidor e vive os problemas humanos da matéria (procrastina o plano, briga
  com um sócio, não percebe o próprio ponto cego, trava pensando demais). Fala simples, com pressa;
- **você** (`voce`): o aluno, que aprende o conceito e ajuda Marta;
- **Lia** (`mentora`): mentora, aparece raramente para dar o toque de prova ("isso cai assim").
Nomes de outros personagens: invente nomes brasileiros curtos (Caio, Duda, Rafa, Bia). **Nunca** use
"Bruno" (é o professor) nem nomes de alunos reais.

**As práticas treinam a prova.**
- Use as questões do simulado que o currículo indica para a aula, com o conteúdo e a resposta delas.
  Pode encurtar o enunciado e as opções (≤ 45 palavras no enunciado), sem mudar o sentido. Termine o
  enunciado com a fonte: "(Simulado, Q14)". Complete com questões inéditas no mesmo estilo quando o
  currículo pedir.
- **Não repita** uma questão do simulado que o currículo deu a outra aula.
- Distratores: os do próprio simulado (são os erros reais). A `explicacao` diz por que a certa é certa e
  por que o distrator mais tentador está errado, em até 50 palavras.
- Quando o resumo diz que o simulado marca algo diferente do guia (por exemplo, Lemonade ligado a
  social awareness), ensine o que o simulado marca e diga na `explicacao` "na prova, marque a opção que
  aparecer".

**O desafio treina a dissertativa.** Ele segue o esqueleto que o professor corrige: o primeiro passo
nomeia o **conceito** e a **evidência** (o que se vê no caso, comportamento e não adjetivo), o seguinte dá
o **diagnóstico** (qual variável, pergunta, perfil ou valor) e o último a **intervenção** (uma ação
concreta, com prazo e um jeito de medir). Use as questões-exemplo que o professor deu (no resumo,
"Questões que ele deu como exemplo") quando o currículo pedir.

**Escrita.**
- Uma ideia por cartão: `texto` ≤ 90 palavras; `exemplo`/`atencao` ≤ 45; `enunciado` ≤ 45.
- pt-BR, frases curtas, voz ativa, "você". Os nomes em inglês da matéria (Bird-in-hand, Affordable
  Loss, deep work, sense making, play not to lose) ficam em inglês, sempre com a explicação em português.
- Glossário em linha `[[termo|definição]]` na primeira vez que um termo técnico aparece. O texto do
  cartão explica o termo sozinho; o glossário é só lembrete. Um termo marcado não pode ter aparecido em
  cartão anterior (o verificador recusa).
- Sem HTML (o verificador recusa `<` e `>`); só `**negrito**`, `*itálico*`, listas com `- `. Use `→` em
  sequências.
- Pesquisadores e casos (Eurich, Clifton, Schwartz, Damásio, Festinger, Haidt, Patagonia, Nike) entram
  com uma linha de contexto e o dado que cai na prova, nada além.

**Escopo.** Só o que está em `resumo-av1.md` e `simulado-100.md`. Nada de outros autores, testes de
personalidade ou teorias que não estão lá.

## 5. O que nunca fazer

- Escrever fora de `curso/people/aulas/aula-NN.js` (nem no `indice.js`).
- Pôr caminho pessoal (`/Users/…`), e-mail, link externo ou nome de arquivo no texto da aula.
- Copiar parágrafos inteiros do resumo: reescreva curto.
- Mexer em `curso/assets/`, `curso/tools/`, `src/`, `evals/` ou `tests/`.

## 6. Checklist ao terminar a aula

1. `uv run python curso/tools/check_aula_ps.py curso/people/aulas/aula-NN.js` sai com 0 erros
   (rode a partir da raiz do repositório).
2. Cada prática do simulado tem a resposta do gabarito e a fonte "(Simulado, Qn)"; a correta não está
   sempre na mesma posição.
3. O desafio se entende sem reler a aula, e cada passo pede uma coisa só.
4. Os minutos da aula batem com o currículo (conte cerca de 1 minuto por cartão de conceito, 40
   segundos por prática de clique e 5 minutos pelo desafio).
