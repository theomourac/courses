(window.CURSO_AULAS = window.CURSO_AULAS || {})["11"] = {
  "n": "11",
  "parte": "D",
  "titulo": "Tributos e regimes",
  "objetivo": "Calcular IRPJ e CSLL no Lucro Presumido e no Lucro Real e justificar a escolha entre eles nas condições da questão.",
  "minutos": 25,
  "cartoes_removidos": [
    [
      11,
      13,
      20,
      21
    ],
    [
      1,
      2,
      3,
      4,
      7,
      8,
      20,
      21,
      22,
      23
    ]
  ],
  "tabelas": {
    "ti": {
      "fonte": "nenhum",
      "titulo": "TI: serviços de R$ 200.000,00 no mês, Presumido de 32,00%",
      "colunas": [
        "Etapa",
        "Conta",
        "Resultado (R$)"
      ],
      "numericas": [
        2
      ],
      "linhas": [
        [
          "Base presumida",
          "200.000 × 0,32",
          "64.000,00"
        ],
        [
          "IRPJ a 15,00%",
          "64.000 × 0,15",
          "9.600,00"
        ],
        [
          "Adicional de IRPJ",
          "(64.000 − 20.000) × 0,10",
          "4.400,00"
        ],
        [
          "CSLL a 9,00%",
          "64.000 × 0,09",
          "5.760,00"
        ],
        [
          "PIS a 0,65%",
          "200.000 × 0,0065",
          "1.300,00"
        ],
        [
          "COFINS a 3,00%",
          "200.000 × 0,03",
          "6.000,00"
        ],
        [
          "ISS a 3,00% neste exemplo",
          "200.000 × 0,03",
          "6.000,00"
        ],
        [
          "Total dos tributos",
          "9.600 + 4.400 + 5.760 + 1.300 + 6.000 + 6.000",
          "33.060,00"
        ]
      ]
    },
    "bella": {
      "fonte": "nenhum",
      "titulo": "Bella Café: serviços, mês sem créditos; Lucro Real corrigido (R$)",
      "colunas": [
        "Linha",
        "Lucro Presumido",
        "Lucro Real"
      ],
      "numericas": [
        1,
        2
      ],
      "linhas": [
        [
          "Receita bruta",
          "80.000,00",
          "80.000,00"
        ],
        [
          "ISS (4,00%) + PIS + COFINS",
          "−6.120,00",
          "−10.600,00"
        ],
        [
          "Receita líquida",
          "73.880,00",
          "69.400,00"
        ],
        [
          "Custos e despesas",
          "−43.000,00",
          "−43.000,00"
        ],
        [
          "LAIR, sem outros ajustes",
          "30.880,00",
          "26.400,00"
        ],
        [
          "Base de IRPJ e CSLL (32,00% no Presumido)",
          "25.600,00",
          "26.400,00"
        ],
        [
          "IRPJ a 15,00%",
          "−3.840,00",
          "−3.960,00"
        ],
        [
          "Adicional de IRPJ",
          "−560,00",
          "−640,00"
        ],
        [
          "CSLL a 9,00%",
          "−2.304,00",
          "−2.376,00"
        ],
        [
          "Lucro líquido",
          "24.176,00",
          "19.424,00"
        ],
        [
          "Total dos tributos",
          "12.824,00",
          "17.576,00"
        ]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "A mesma loja, duas formas de calcular",
      "texto": "Marta vendeu R$ 1.200.000,00 no ano, mas sobraram apenas R$ 30.000,00 antes dos tributos sobre o lucro. [[Tributos|Pagamentos obrigatórios em dinheiro, previstos em lei, que não punem infrações.]] são pagamentos obrigatórios ao poder público, previstos em lei, que não punem infrações. O contador propõe comparar o [[Lucro Presumido|Forma de tributação que estima o lucro a partir das vendas.]], que estima o lucro pelas vendas, com o [[Lucro Real|Forma de tributação que usa o lucro apurado e ajustado pelas regras fiscais.]], que usa o lucro apurado, ajustado às regras fiscais. Você aprenderá a fazer essa comparação com as convenções da prova.",
      "quadrinho": [
        {
          "quem": "dona",
          "fala": "Meu contador perguntou: ficamos no Lucro Presumido ou passamos para o Real? Vendi muito, mas sobrou pouco."
        },
        {
          "quem": "voce",
          "fala": "Vamos calcular quanto cada opção cobra sobre o lucro da loja."
        }
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "Quatro formas de recolher",
      "texto": "Uma costureira do exemplo paga R$ 80,90 mensais numa guia, o [[DAS|Documento de Arrecadação do Simples Nacional, guia para pagar tributos.]], Documento de Arrecadação do Simples Nacional. Ela é MEI, Microempreendedor Individual. [[Regime tributário|Conjunto de regras para calcular e recolher tributos.]] é o conjunto de regras para calcular e pagar. No MEI, o pagamento é fixo; no Simples Nacional, a guia reúne tributos e varia com as vendas e a atividade. Presumido e Real usam as duas formas de determinar lucro apresentadas na abertura.",
      "diagrama": {
        "tipo": "arvore",
        "raiz": "Regimes tributários",
        "ramos": [
          {
            "texto": "MEI",
            "filhos": [
              "Até R$ 81 mil por ano",
              "DAS fixo: R$ 80,90 no exemplo"
            ]
          },
          {
            "texto": "Simples Nacional",
            "filhos": [
              "Até R$ 4,8 milhões por ano",
              "DAS varia com vendas e atividade"
            ]
          },
          {
            "texto": "Lucro Presumido",
            "filhos": [
              "Até R$ 78 milhões por ano",
              "Lucro estimado pelas vendas"
            ]
          },
          {
            "texto": "Lucro Real",
            "filhos": [
              "Sem teto de vendas",
              "Lucro apurado com ajustes"
            ]
          }
        ],
        "nota": "Limites apresentados no curso; faturamento não é o único requisito. Bancos e empresas acima de R$ 78 milhões usam o Real."
      },
      "exemplo": "Com vendas de R$ 4.500,00, a carga tributária efetiva, parcela das vendas consumida pelos tributos, é 80,90 ÷ 4.500 × 100 = 1,80%. Em geral: carga em % = tributos ÷ faturamento × 100.",
      "atencao": "R$ 80,90 é o DAS fixo do exemplo didático de serviços. Com pagamento fixo, vender mais reduz a carga percentual, respeitados os requisitos e o limite do MEI."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Pré-aula 09, Q2. Uma costureira MEI faturou R$ 4.500,00 no mês. Seu DAS é R$ 80,90. Calcule a carga tributária efetiva sobre o faturamento.",
        "unidade": "%",
        "casas": 2,
        "resposta": 1.8,
        "calculo": "80.90 / 4500 * 100",
        "explicacao": "Carga = tributos ÷ faturamento × 100 = 80,90 ÷ 4.500 × 100 = **1,80%**. O denominador é o valor vendido no mês, não o limite anual do MEI."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Presumido: qual valor será tributado?",
      "texto": "Se uma loja vende R$ 1.000,00, o curso considera R$ 80,00 como lucro estimado: 1.000 × 0,08. A [[presunção|Percentual das vendas tratado como lucro para calcular tributos.]] do comércio é 8,00%. A [[base de cálculo|Valor sobre o qual se aplica a alíquota de um tributo.]] é o valor que receberá a alíquota: aqui, R$ 80,00. Fórmula: base presumida = receita bruta × presunção. Comércio, indústria e transporte de cargas usam 8,00%; transporte de passageiros, 16,00%; serviços em geral, 32,00%.",
      "atencao": "Estimar a base não é calcular o imposto. No Presumido, usamos as vendas, mesmo se o lucro apurado for menor ou houver prejuízo."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Pré-aula 09, Q3. Uma empresa comercial no Lucro Presumido faturou R$ 150.000,00 no mês. Com presunção de 8,00%, calcule a base de IRPJ e CSLL segundo o curso.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 12000,
        "calculo": "150000 * 0.08",
        "explicacao": "Base presumida = 150.000 × 0,08 = **R$ 12.000,00**. Esse é o lucro estimado para calcular os tributos, não o valor dos tributos."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "IRPJ: o adicional alcança só o excedente",
      "texto": "Sobre uma base mensal de R$ 30.000,00, o IRPJ cobra 15,00% de tudo e mais 10,00% apenas dos R$ 10.000,00 que ultrapassam R$ 20.000,00. Esse acréscimo é o [[adicional de IRPJ|Cobrança de 10% sobre a parcela da base acima do limite do período.]]. Conta: 30.000 × 0,15 + (30.000 − 20.000) × 0,10 = R$ 5.500,00. Para base mensal acima do limite: IRPJ total = base × 0,15 + (base − 20.000) × 0,10. Abaixo ou no limite, aplique só 15,00%.",
      "atencao": "No trimestre, o limite corresponde a R$ 60.000,00. Mas, se a questão pedir somente IRPJ a 15,00%, calcule apenas essa parcela."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Pré-aula 09, Q4. Serviços de TI faturaram R$ 120.000,00 no mês. Use presunção de 32,00%. Calcule o IRPJ total: 15,00% da base mais 10,00% sobre a parcela acima de R$ 20.000,00.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 7600,
        "calculo": "120000 * 0.32 * 0.15 + (120000 * 0.32 - 20000) * 0.10",
        "explicacao": "Base = 120.000 × 0,32 = 38.400. IRPJ = 38.400 × 0,15 + (38.400 − 20.000) × 0,10 = 5.760 + 1.840 = **R$ 7.600,00**. O adicional incide só sobre o excedente."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "CSLL usa qual base?",
      "texto": "Uma empresa com base presumida de R$ 10.000,00 paga R$ 900,00 de CSLL: 10.000 × 0,09. A alíquota é 9,00%; no curso, a base é a mesma usada no IRPJ. Fórmula: CSLL = base presumida × 0,09. A tabela reúne um exemplo completo de serviços de TI. Observe que PIS, COFINS e ISS usam o faturamento, enquanto IRPJ e CSLL usam o lucro estimado.",
      "tabela": "ti",
      "atencao": "Convenção da prova: CSLL sobre a mesma presunção do IRPJ. No Presumido, PIS de 0,65% e COFINS de 3,00% são cumulativos: não descontamos créditos de compras. Crédito é um valor permitido para abater do tributo."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Pré-aula 09, Q4. Uma empresa de serviços de TI faturou R$ 120.000,00 no mês. Com presunção de 32,00% e alíquota de CSLL de 9,00%, calcule a CSLL devida.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 3456,
        "calculo": "120000 * 0.32 * 0.09",
        "explicacao": "CSLL = 120.000 × 0,32 × 0,09 = **R$ 3.456,00**. Os 9,00% incidem sobre a base presumida de R$ 38.400,00, não sobre todo o faturamento."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Real: ajustar o lucro antes de tributar",
      "texto": "Uma empresa tem LAIR de R$ 10.200,00, mas precisa acrescentar R$ 200,00 e retirar R$ 400,00 conforme as regras fiscais. Essas adições e exclusões ajustam o lucro contábil: 10.200 + 200 − 400 = R$ 10.000,00. O [[LALUR|Livro de Apuração do Lucro Real, que registra os ajustes fiscais do lucro.]] registra esses ajustes. Fórmula: lucro real = LAIR + adições − exclusões. Adições devolvem ao lucro gastos que a lei não aceita para reduzir o tributo; exclusões tiram do lucro valores que a lei permite não tributar. IRPJ e CSLL incidem sobre o lucro ajustado.",
      "atencao": "No Real, PIS de 1,65% e COFINS de 7,60% são não cumulativos: permitem abater créditos de compras autorizadas. Alíquotas maiores não significam automaticamente maior pagamento."
    },
    {
      "tipo": "conceito",
      "titulo": "Quando a questão manda usar 34,00%",
      "texto": "Se o enunciado dá lucro de R$ 1.000,00 e alíquota combinada de 34,00%, IRPJ e CSLL juntos são 1.000 × 0,34 = R$ 340,00. Combinada significa que reúne os dois tributos. Fórmula: IRPJ + CSLL = base indicada × 0,34. Nas questões sem ajustes fiscais, essa base é o LAIR. É uma simplificação do curso, diferente da conta que separa 15,00%, adicional sobre o excedente e CSLL de 9,00%.",
      "atencao": "Com 34,00% combinado, não some outro adicional ou outra CSLL. Leia se o pedido é IRPJ sozinho ou IRPJ e CSLL juntos."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Simulado Q30. Uma empresa apurou LAIR de R$ 120.000,00 no exercício. Calcule IRPJ e CSLL no Lucro Real, considerando alíquota combinada de 34,00% e nenhum ajuste fiscal.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 40800,
        "calculo": "120000 * 0.34",
        "explicacao": "IRPJ e CSLL = 120.000 × 0,34 = **R$ 40.800,00**. Use a alíquota combinada dada; não calcule adicional separado."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Qual regime deixa mais lucro?",
      "texto": "Se uma loja vende R$ 1.000,00 e ganha R$ 25,00 antes de IRPJ e CSLL, sua margem real, lucro em relação às vendas, é 2,50%. A presunção comercial de 8,00% estima mais lucro do que ela ganhou. Margem real abaixo da presumida favorece o Real; acima, favorece o Presumido. É uma pista: compare também tributos sobre vendas, créditos e trabalho administrativo. Na tabela, a cafeteria Bella Café presta serviços e tem margem acima dos 32,00% presumidos: o Presumido deixa mais lucro líquido.",
      "tabela": "bella",
      "atencao": "O slide usa R$ 37.000,00 como base no Real, sem tirar tributos sobre vendas. Aqui usamos R$ 26.400,00: 80.000 − 10.600 − 43.000. O lucro líquido corrigido é R$ 19.424,00; o Presumido continua melhor."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Simulado Q32. O Real resultou em R$ 27.200,00 de IRPJ e CSLL; o Presumido, em R$ 6.000,00 apenas de IRPJ. Considerando somente os valores pedidos, qual conclusão está correta?",
        "opcoes": [
          "O Real é melhor porque usa o lucro efetivo.",
          "Os regimes empatam porque a empresa é a mesma.",
          "O Presumido é melhor nos valores pedidos; a comparação é simplificada."
        ],
        "correta": 2,
        "explicacao": "R$ 6.000,00 é menor que R$ 27.200,00. A resposta da Q32 é Presumido, dentro do recorte pedido. Ela compara IRPJ e CSLL no Real com apenas IRPJ no Presumido; uma decisão completa considera os demais tributos."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona de uma loja comercial, precisa responder ao contador sobre trocar de regime. No ano, faturou R$ 1.200.000,00 e teve LAIR, lucro antes do imposto de renda, de R$ 30.000,00. Sem ajustes fiscais, compare IRPJ e CSLL no Real a 34,00% com apenas IRPJ no Presumido: presunção de 8,00% e alíquota de 15,00%. Ignore outros tributos e adicional nesta comparação didática.",
        "enunciado": "Calcule os valores pedidos e recomende um regime a Marta dentro dessa comparação.",
        "passos": [
          {
            "pergunta": "Quanto a loja pagaria de IRPJ e CSLL no Real, usando 34,00%?",
            "comeco": "No Real, os dois tributos somam…"
          },
          {
            "pergunta": "Quanto pagaria somente de IRPJ no Presumido, usando 8,00% das vendas e depois 15,00%?",
            "comeco": "No Presumido, o IRPJ pedido é…"
          },
          {
            "pergunta": "O que você recomendaria a Marta, relacionando a margem real sobre o faturamento com a presunção de 8,00%?",
            "comeco": "Marta, nessa comparação eu escolheria…"
          }
        ],
        "dica": "No Real, parta do LAIR. No Presumido, parta das vendas. Para a margem real, divida o LAIR pelo faturamento e multiplique por 100.",
        "contas": [
          {
            "conta": "30000 * 0.34",
            "resultado": "10.200,00"
          },
          {
            "conta": "1200000 * 0.08 * 0.15",
            "resultado": "14.400,00"
          },
          {
            "conta": "30000 / 1200000 * 100",
            "resultado": "2,50"
          }
        ],
        "resposta_comentada": "**Passo 1.** IRPJ e CSLL no Real = 30.000 × 0,34 = **R$ 10.200,00**. O enunciado manda aplicar os 34,00% sobre o LAIR inteiro.\n\n**Passo 2.** IRPJ no Presumido = 1.200.000 × 0,08 × 0,15 = **R$ 14.400,00**. Aplicamos a presunção às vendas e, depois, a alíquota à base estimada.\n\n**Passo 3.** Marta, escolheria o **Real neste recorte**: os dois tributos juntos custam menos que apenas o IRPJ no Presumido. Sua margem é 30.000 ÷ 1.200.000 × 100 = **2,50%**, abaixo da presunção de 8,00%. A decisão completa ainda considera os demais tributos."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "Tributos sobre vendas reduzem a receita bruta; IRPJ e CSLL vêm depois do LAIR na DRE.",
        "Presumido: receita bruta × presunção. Use 8,00% para comércio e cargas, 16,00% para passageiros e 32,00% para serviços.",
        "IRPJ: 15,00% da base mais 10,00% só do excedente ao limite; CSLL: 9,00%. Se a questão disser 34,00% combinado ou só IRPJ a 15,00%, siga esse pedido.",
        "Real: lucro apurado com ajustes fiscais. Margem real baixa favorece esse regime, mas a decisão completa inclui tributos sobre vendas, créditos e trabalho administrativo.",
        "Elisão é legal; sonegação é crime. Na reforma estudada: CBS substitui PIS/COFINS; IBS substitui ICMS/ISS; IS alcança produtos nocivos."
      ],
      "glossario": [
        {
          "termo": "Base de cálculo",
          "def": "Valor sobre o qual se aplica a alíquota de um tributo."
        },
        {
          "termo": "Presunção",
          "def": "Percentual das vendas tratado como lucro no Lucro Presumido."
        },
        {
          "termo": "Alíquota",
          "def": "Percentual aplicado à base para calcular um tributo."
        },
        {
          "termo": "LALUR",
          "def": "Livro de Apuração do Lucro Real: registra os ajustes fiscais do lucro."
        },
        {
          "termo": "Elisão",
          "def": "Redução de tributos mediante escolhas permitidas por lei."
        }
      ]
    }
  ]
};
