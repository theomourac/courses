(window.CURSO_AULAS = window.CURSO_AULAS || {})["09"] = {
  "n": "09",
  "parte": "C",
  "titulo": "Liquidez",
  "objetivo": "Calcular e interpretar a liquidez corrente, seca e imediata para avaliar se a empresa paga as contas de curto prazo.",
  "minutos": 15,
  "cartoes_removidos": [
    [
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    [
      3,
      10
    ]
  ],
  "tabelas": {
    "loja": {
      "fonte": "nenhum",
      "titulo": "Loja de Marta: valores antes do novo empréstimo (R$)",
      "colunas": [
        "Conta",
        "Valor (R$)"
      ],
      "numericas": [
        1
      ],
      "linhas": [
        [
          "Ativo circulante (AC)",
          "240.000,00"
        ],
        [
          "Estoques, já incluídos no AC",
          "100.000,00"
        ],
        [
          "Passivo circulante (PC)",
          "200.000,00"
        ]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "O banco quer saber se a loja consegue pagar",
      "texto": "Marta pediu um empréstimo. Antes de decidir, o banco quer comparar o que a loja tem com o que deve. Você vai transformar esses valores em índices: números obtidos por divisão que ajudam a avaliar a capacidade de pagamento. Cada índice responde a uma pergunta diferente.",
      "quadrinho": [
        {
          "quem": "dona",
          "fala": "O banco pediu os índices antes de aprovar meu empréstimo. Tenho R$ 240 mil para o curto prazo. Isso basta?"
        },
        {
          "quem": "voce",
          "fala": "Vamos comparar esse valor com as dívidas e ver quanto depende de vender mercadorias."
        }
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto há para cada real devido?",
      "texto": "Uma loja tem R$ 150,00 disponíveis ou para transformar em dinheiro em até 12 meses: seu ativo circulante, AC. Deve R$ 100,00 nesse prazo: seu passivo circulante, PC. A [[liquidez corrente|AC dividido pelo PC: compara recursos e obrigações de curto prazo.]], LC, mede a capacidade de pagar essas obrigações. Divida 150 ÷ 100 = 1,50: há R$ 1,50 de AC por R$ 1,00 devido. **LC = AC ÷ PC.** Quanto maior, menor o risco de faltar recursos.",
      "atencao": "Acima de 1, o AC supera o PC. Isso não garante pagamento na data certa: clientes podem atrasar e mercadorias podem não vender."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou AC de R$ 150.000,00 e PC de R$ 100.000,00. Calcule a liquidez corrente. (Simulado geral, Q25)",
        "unidade": "vezes",
        "casas": 2,
        "resposta": 1.5,
        "calculo": "150000 / 100000",
        "explicacao": "LC = AC ÷ PC = 150.000 ÷ 100.000 = **1,50 vezes**. Há R$ 1,50 de recursos de curto prazo por R$ 1,00 de obrigações nesse prazo."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "E se as mercadorias não venderem?",
      "texto": "Dos R$ 150,00 de AC, R$ 45,00 são estoques: mercadorias guardadas para vender. Elas precisam ser vendidas e recebidas antes de pagar contas. A [[liquidez seca|Compara o AC sem estoques com o PC.]], LS, retira esse valor. Com PC de R$ 100,00, calcule (150 − 45) ÷ 100 = 1,05. **LS = (AC − estoques) ÷ PC.** Acima de 1, os recursos de curto prazo sem estoques superam as obrigações desse prazo.",
      "atencao": "Na fórmula do curso, retire somente os estoques do AC. Abaixo de 1, pode haver dependência da venda de estoques ou de novos recursos."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou AC de R$ 150.000,00, incluindo estoques de R$ 45.000,00, e PC de R$ 100.000,00. Calcule a liquidez seca. (Simulado geral, Q25)",
        "unidade": "vezes",
        "casas": 2,
        "resposta": 1.05,
        "calculo": "(150000 - 45000) / 100000",
        "explicacao": "LS = (150.000 − 45.000) ÷ 100.000 = **1,05 vezes**. Sem os estoques, há R$ 1,05 de AC por R$ 1,00 de PC: uma pequena folga."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou AC de R$ 320.000,00, incluindo estoques de R$ 90.000,00, e PC de R$ 200.000,00. Calcule a liquidez seca. (Simulado geral, Q26)",
        "unidade": "vezes",
        "casas": 2,
        "resposta": 1.15,
        "calculo": "(320000 - 90000) / 200000",
        "explicacao": "LS = (320.000 − 90.000) ÷ 200.000 = **1,15 vezes**. Retire os estoques antes de dividir pelo PC. O valor restante ainda depende, em parte, de recebimentos."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "A liquidez seca se diferencia da liquidez corrente porque: (Pré-aula 07, Q2)",
        "opcoes": [
          "Retira os estoques do ativo circulante.",
          "Considera todo o ativo circulante, sem retirar nada.",
          "Retira os estoques do passivo circulante.",
          "Divide os estoques pelo passivo circulante."
        ],
        "correta": 0,
        "explicacao": "A seca exclui os estoques do AC porque a mercadoria ainda precisa ser vendida e recebida. Manter todo o AC reproduz a corrente; retirar estoque do PC confunde recurso com obrigação."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto pode ser pago agora?",
      "texto": "Uma loja tem R$ 25,00 em caixa, dinheiro disponível, e R$ 15,00 em aplicações financeiras que pode resgatar imediatamente. Seu PC é R$ 200,00. A [[liquidez imediata|Dinheiro disponível em caixa e aplicações imediatas dividido pelo PC.]], LI, conta só esse dinheiro: (25 + 15) ÷ 200 = 0,20. **LI = (caixa + aplicações) ÷ PC.** Há R$ 0,20 disponíveis por R$ 1,00 de dívida de curto prazo.",
      "atencao": "Não inclua clientes nem estoques. Abaixo de 1, o dinheiro atual não cobre todo o PC de uma vez; isso não significa atraso, pois as dívidas vencem em datas diferentes."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tem caixa de R$ 25.000,00, aplicações de resgate imediato de R$ 15.000,00 e PC de R$ 200.000,00. Calcule a liquidez imediata. (Simulado geral, Q26)",
        "unidade": "vezes",
        "casas": 2,
        "resposta": 0.2,
        "calculo": "(25000 + 15000) / 200000",
        "explicacao": "LI = (25.000 + 15.000) ÷ 200.000 = **0,20 vezes**. Some caixa e aplicações imediatas; depois divida pelo PC. Clientes e mercadorias não são dinheiro disponível agora."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada liquidez à fórmula usada no curso.",
        "pares": [
          [
            "Liquidez corrente",
            "AC ÷ PC"
          ],
          [
            "Liquidez seca",
            "(AC − estoques) ÷ PC"
          ],
          [
            "Liquidez imediata",
            "(caixa + aplicações imediatas) ÷ PC"
          ]
        ],
        "explicacao": "Todas dividem pelo PC; muda o que entra em cima: todo o AC, o AC sem os estoques ou só o dinheiro disponível."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, quer responder ao banco antes de contratar outro empréstimo. Ela viu AC de R$ 240.000,00 e PC de R$ 200.000,00 e achou que bastava. Mas R$ 100.000,00 do AC são estoques. A tabela traz os valores atuais, antes do novo empréstimo. Ela pede sua avaliação.",
        "enunciado": "Prepare o recado ao banco sobre a capacidade de pagamento atual da loja.",
        "tabela": "loja",
        "passos": [
          {
            "pergunta": "Como fica a cobertura do curto prazo com e sem estoques, medida por LC e LS?",
            "comeco": "Com estoques, a LC é…"
          },
          {
            "pergunta": "O que a LS abaixo de 1 revela e que recado você daria a Marta?",
            "comeco": "Sem contar com os estoques…"
          }
        ],
        "dica": "LC = AC ÷ PC; LS = (AC − estoques) ÷ PC. Índices não garantem pagamento.",
        "contas": [
          {
            "conta": "240000 / 200000",
            "resultado": "1,20"
          },
          {
            "conta": "(240000 - 100000) / 200000",
            "resultado": "0,70"
          }
        ],
        "resposta_comentada": "**Passo 1.** LC = 240.000 ÷ 200.000 = **1,20**. LS = (240.000 − 100.000) ÷ 200.000 = **0,70**. A cobertura cai quando retiramos os estoques.\n\n**Passo 2.** Sem os estoques, os recursos de curto prazo não cobrem as obrigações desse prazo: a loja depende de vender mercadorias. Marta, antes de assumir novas parcelas, confira quando os clientes pagarão e quando as dívidas vencerão."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "Todas as liquidezes dividem pelo PC: a corrente usa todo o AC; a seca retira os estoques; a imediata usa só caixa e aplicações imediatas.",
        "Acima de 1, os recursos considerados superam o PC. Quanto maior, menor o risco, sem garantia de pagamento.",
        "Seca bem abaixo da corrente indica que a empresa depende de vender os estoques para pagar o curto prazo."
      ],
      "glossario": [
        {
          "termo": "AC / PC",
          "def": "Ativo circulante: recursos disponíveis ou realizáveis em até 12 meses. Passivo circulante: obrigações nesse prazo."
        },
        {
          "termo": "Estoques",
          "def": "Mercadorias guardadas para vender; precisam ser vendidas e recebidas antes de virar dinheiro."
        },
        {
          "termo": "Liquidez imediata",
          "def": "Caixa e aplicações de resgate imediato divididos pelo passivo circulante."
        }
      ]
    }
  ]
};
