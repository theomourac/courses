// Aula 00 — EXEMPLO DO FORMATO (não entra na trilha do curso).
// Usa todos os tipos de cartão e de exercício deste curso, incluindo o 'numero' (o aluno digita o resultado
// da conta) e o desafio com 'contas' conferidas. Verificar:
//   uv run python curso/tools/check_aula_ctb.py curso/contabilidade/aulas/aula-00.js
(window.CURSO_AULAS = window.CURSO_AULAS || {})["00"] = {
  "n": "00",
  "parte": "B",
  "exemplo": true,
  "titulo": "Do faturamento ao lucro em poucos minutos",
  "objetivo": "Descer a DRE da receita bruta até o lucro líquido e dizer para onde foi cada parte do faturamento.",
  "minutos": 8,
  "tabelas": {
    "dre_mes": {
      "fonte": "nenhum",
      "titulo": "DRE da loja de Marta em março (R$)",
      "colunas": ["linha", "valor (R$)"],
      "numericas": [1],
      "linhas": [
        ["Receita bruta", "100.000"],
        ["Deduções (impostos sobre vendas)", "−20.000"],
        ["CMV", "−40.000"],
        ["Despesas operacionais", "−20.000"],
        ["Despesas financeiras", "−5.000"],
        ["IR e CSLL (34% do LAIR)", "−5.100"],
        ["Lucro líquido", "9.900"]
      ]
    },
    "lucro_trimestre": {
      "fonte": "nenhum",
      "titulo": "Lucro líquido da loja no trimestre (R$)",
      "colunas": ["mês", "lucro líquido (R$)"],
      "numericas": [1],
      "linhas": [
        ["janeiro", "12.300"],
        ["fevereiro", "−2.100"],
        ["março", "9.900"]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Para onde foi o faturamento?",
      "texto": "Nesta lição curta você lê a [[DRE|Demonstração do Resultado do Exercício: mostra receitas, custos e despesas de um período, no regime de competência.]], o relatório que mostra se a loja ganhou ou perdeu dinheiro no mês. Você desce linha por linha, do total vendido ao que sobrou.",
      "quadrinho": [
        {"quem": "dona", "fala": "Faturei R$ 100 mil em março, mas sobraram só R$ 9.900. Onde foi parar o resto?"},
        {"quem": "voce", "fala": "Vamos descer a DRE linha por linha: cada degrau mostra quem ficou com uma parte."}
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "A escada da DRE",
      "texto": "A DRE é uma escada. Começa no total vendido e, a cada degrau, tira uma parte: impostos, custo das mercadorias, despesas. O que sobra em cada degrau tem um nome de lucro diferente.",
      "diagrama": {"tipo": "fluxo", "etapas": ["Receita bruta", "Receita líquida", "Lucro bruto", "Lucro operacional (EBIT)", "LAIR", "Lucro líquido"], "destaque": 2, "nota": "Cada degrau desconta um grupo: deduções, custo, despesas, resultado financeiro e, por fim, IR e CSLL."}
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "ordenar",
        "enunciado": "Coloque a escada da DRE na ordem, de cima para baixo.",
        "itens": ["Receita bruta", "Receita líquida", "Lucro bruto", "Lucro operacional", "LAIR", "Lucro líquido"],
        "explicacao": "Da receita bruta tiram-se as deduções (receita líquida), o custo (lucro bruto), as despesas (operacional), o resultado financeiro (LAIR) e o IR e a CSLL (líquido)."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "A DRE da loja em março",
      "texto": "A tabela mostra a DRE de março. A figura desenha a mesma conta: cada barra que desce é uma parte que saiu do faturamento.",
      "tabela": "dre_mes",
      "diagrama": {"tipo": "cascata", "tabela": "dre_mes", "rotulo": 0, "valor": 1, "nota": "Dos R$ 100 mil, o custo das mercadorias leva a maior fatia: R$ 40 mil."},
      "atencao": "Os impostos sobre vendas saem **antes** do custo: eles reduzem a receita, não o lucro bruto."
    },
    {
      "tipo": "pratica",
      "tabela": "dre_mes",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Com a DRE da tabela, qual é a receita líquida de março?",
        "unidade": "R$",
        "casas": 2,
        "resposta": 80000,
        "calculo": "100000 - 20000",
        "explicacao": "Receita líquida = receita bruta − deduções = 100.000 − 20.000 = **R$ 80.000,00**."
      }
    },
    {
      "tipo": "pratica",
      "tabela": "dre_mes",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Qual é a margem bruta de março (lucro bruto dividido pela receita líquida)?",
        "unidade": "%",
        "casas": 2,
        "resposta": 50,
        "calculo": "(80000 - 40000) / 80000 * 100",
        "explicacao": "Lucro bruto = 80.000 − 40.000 = 40.000. Margem bruta = 40.000 ÷ 80.000 = **50,00%**."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Onde entram os impostos sobre vendas, como o ICMS?",
        "opcoes": ["Como dedução da receita bruta", "Como despesa financeira", "Depois do LAIR, junto com o IR"],
        "correta": 0,
        "explicacao": "Impostos sobre vendas são deduções: transformam a receita bruta em receita líquida. Depois do LAIR só vêm o IR e a CSLL."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "multipla",
        "enunciado": "Quais itens ficam abaixo do lucro operacional? (marque todos)",
        "opcoes": ["Despesas financeiras", "IR e CSLL", "CMV", "Despesas de vendas"],
        "corretas": [0, 1],
        "explicacao": "CMV e despesas de vendas vêm antes do lucro operacional. Abaixo dele ficam o resultado financeiro e o IR e a CSLL."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "completar",
        "enunciado": "Complete a fórmula.",
        "frase": "Lucro bruto = receita líquida − ___",
        "aceitas": ["CMV", "CPV", "custo", "custos", "custo das mercadorias vendidas", "custo dos produtos vendidos"],
        "explicacao": "Lucro bruto = receita líquida − custo (CMV no comércio, CPV na indústria)."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Um mês no vermelho",
      "texto": "O lucro muda mês a mês. Quando as despesas passam da receita, a última linha da DRE fica negativa: é o **prejuízo**.",
      "grafico": {"tabela": "lucro_trimestre", "rotulo": 0, "valor": 1, "destaque": [1], "nota": "Fevereiro fechou com prejuízo de R$ 2.100; janeiro e março tiveram lucro."}
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada linha ao lugar dela na DRE.",
        "pares": [
          ["ICMS sobre as vendas", "dedução da receita bruta"],
          ["Juros do empréstimo", "despesa financeira"],
          ["Salário do vendedor", "despesa operacional"],
          ["IR e CSLL", "depois do LAIR"]
        ],
        "explicacao": "Cada linha tem um degrau: impostos sobre vendas no topo, despesas operacionais antes do EBIT, juros no resultado financeiro e IR e CSLL no fim."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Fim de março. Marta, dona da loja, vê no extrato que faturou R$ 100 mil, mas o lucro foi de só R$ 9.900. Ela pergunta se vale aumentar o preço ou cortar despesas e quer entender, antes, para onde foi o dinheiro.",
        "enunciado": "Mostre a Marta, degrau por degrau, para onde foi o faturamento.",
        "tabela": "dre_mes",
        "passos": [
          {"pergunta": "Quanto são a receita líquida e o lucro bruto de março?", "comeco": "A receita líquida é…"},
          {"pergunta": "Quanto é o LAIR, e quanto sai de IR e CSLL?", "comeco": "O LAIR é…"},
          {"pergunta": "O que você diria a Marta, em uma ou duas frases?", "comeco": "Marta, a maior parte foi…"}
        ],
        "dica": "Desça a tabela uma linha por vez: cada linha negativa sai do degrau anterior.",
        "contas": [
          {"conta": "100000 - 20000", "resultado": "80.000"},
          {"conta": "80000 - 40000", "resultado": "40.000"},
          {"conta": "40000 - 20000 - 5000", "resultado": "15.000"},
          {"conta": "15000 * 0.34", "resultado": "5.100"}
        ],
        "resposta_comentada": "**Passo 1.** Receita líquida = 100.000 − 20.000 de impostos = R$ 80.000. Lucro bruto = 80.000 − 40.000 de CMV = R$ 40.000.\n\n**Passo 2.** LAIR = 40.000 − 20.000 de despesas operacionais − 5.000 de juros = R$ 15.000. IR e CSLL = 34% de 15.000 = R$ 5.100, e sobram R$ 9.900.\n\n**Passo 3.** \"Marta, a maior parte foi para o custo das mercadorias (R$ 40 mil) e para os impostos sobre vendas (R$ 20 mil). Antes de mexer no preço, vale olhar o custo de compra.\""
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "A DRE desce da receita bruta ao lucro líquido, um degrau por vez.",
        "Impostos sobre vendas são deduções; IR e CSLL vêm depois do LAIR.",
        "Lucro bruto = receita líquida − CMV."
      ],
      "glossario": [
        {"termo": "DRE", "def": "Demonstração do Resultado do Exercício: receitas, custos e despesas de um período, no regime de competência."},
        {"termo": "LAIR", "def": "Lucro antes do imposto de renda: o lucro operacional mais o resultado financeiro."}
      ]
    }
  ]
};
