(window.CURSO_AULAS = window.CURSO_AULAS || {})["08"] = {
  "n": "08",
  "parte": "C",
  "titulo": "Rentabilidade e margens",
  "objetivo": "Calcular margens, ROA e ROE e explicar o que cada um mostra sobre o retorno do negócio e dos sócios.",
  "minutos": 20,
  "cartoes_removidos": [
    [
      2,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27
    ],
    [
      4,
      5,
      9,
      12
    ]
  ],
  "tabelas": {
    "fazendas_dados": {
      "fonte": "nenhum",
      "titulo": "Pré-aula 06 — concorrentes no mesmo ano (R$ mil)",
      "colunas": [
        "Dado",
        "Rio Verde",
        "Talhão Dourado"
      ],
      "numericas": [
        1,
        2
      ],
      "linhas": [
        [
          "Ativo total",
          "2.800.000,00",
          "3.000.000,00"
        ],
        [
          "Patrimônio líquido",
          "1.480.000,00",
          "2.000.000,00"
        ],
        [
          "Receita líquida",
          "1.800.000,00",
          "2.100.000,00"
        ],
        [
          "Lucro bruto",
          "630.000,00",
          "800.000,00"
        ],
        [
          "Lucro operacional (EBIT)",
          "340.000,00",
          "380.000,00"
        ],
        [
          "EBITDA",
          "400.000,00",
          "450.000,00"
        ],
        [
          "Lucro líquido",
          "195.000,00",
          "210.000,00"
        ]
      ]
    },
    "marta_anos": {
      "fonte": "nenhum",
      "titulo": "Loja de Marta — dois anos completos (R$)",
      "colunas": [
        "Dado",
        "Ano 1",
        "Ano 2"
      ],
      "numericas": [
        1,
        2
      ],
      "linhas": [
        [
          "Lucro líquido (LL)",
          "60.000,00",
          "66.000,00"
        ],
        [
          "Receita líquida (RL)",
          "600.000,00",
          "660.000,00"
        ],
        [
          "Ativo total (AT)",
          "500.000,00",
          "600.000,00"
        ],
        [
          "Patrimônio líquido (PL)",
          "400.000,00",
          "300.000,00"
        ]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "O retorno subiu. Já pode comemorar?",
      "texto": "Marta viu o [[ROE|Retorno sobre o patrimônio líquido: lucro líquido em relação aos recursos próprios.]] subir de 15,00% para 22,00%. Ele compara o [[lucro líquido|Resultado depois de todos os custos, despesas e impostos.]], o que sobra depois de todos os gastos, ao [[patrimônio líquido|Parcela dos recursos da empresa pertencente aos sócios.]], os recursos próprios dos sócios. Antes de pegar outro empréstimo, ela quer saber se a loja passou a lucrar mais. Você vai calcular as margens e o retorno sobre os recursos para descobrir.",
      "quadrinho": [
        {
          "quem": "dona",
          "fala": "Meu ROE foi de 15,00% para 22,00%! Posso comemorar e pegar outro empréstimo para a loja?"
        },
        {
          "quem": "voce",
          "fala": "Vamos ver se a loja passou a lucrar mais em cada venda antes de decidir."
        }
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "Ganhar quanto, sobre quanto?",
      "texto": "Você aplica R$ 200,00 num negócio e ganha R$ 30,00 no ano. O investimento é o dinheiro aplicado; o ganho é o lucro obtido. A [[rentabilidade|Ganho em relação ao investimento.]] compara esses dois valores: 30 ÷ 200 × 100 = 15,00%. Isso significa ganhar R$ 15,00 por R$ 100,00 investidos. Multiplicamos por 100 para escrever o resultado em percentual. **Rentabilidade (%) = ganho ÷ investimento × 100.**",
      "exemplo": "Um lucro grande, sozinho, não prova um bom retorno: é preciso saber quanto foi investido para consegui-lo."
    },
    {
      "tipo": "pratica",
      "titulo": "Exemplo dos slides · rentabilidade",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa investiu R$ 200.000,00 e obteve lucro de R$ 30.000,00 no ano. Calcule a rentabilidade.",
        "unidade": "%",
        "casas": 2,
        "resposta": 15,
        "calculo": "30000 / 200000 * 100",
        "explicacao": "30.000 ÷ 200.000 × 100 = **15,00%**. A empresa ganhou R$ 0,15 por R$ 1,00 investido."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto sobra em cada etapa da DRE?",
      "texto": "Das vendas, R$ 100,00 restaram após devoluções, descontos e impostos sobre vendas: a [[receita líquida|Vendas após deduções, como devoluções e impostos sobre vendas.]], RL. Após o custo das mercadorias, sobraram R$ 40,00 de [[lucro bruto|Receita líquida menos o custo dos produtos ou mercadorias vendidos.]]: a [[margem bruta|Lucro bruto como percentual da receita líquida.]] é 40 ÷ 100 × 100 = 40,00%. Após as despesas de vender e administrar, sobram R$ 20,00 de EBIT: [[margem operacional|Lucro operacional dividido pela receita líquida, em percentual.]] de 20,00%. Somando de volta depreciação e amortização, o [[EBITDA|Lucro operacional acrescido de depreciação e amortização.]] é R$ 25,00: [[margem EBITDA|EBITDA como percentual da receita líquida.]] de 25,00%. **Margem (%) = resultado ÷ RL × 100.**",
      "atencao": "Todas as margens dividem pela receita líquida. A margem EBITDA indica capacidade de gerar caixa na operação, sem juros e impostos, mas não é o dinheiro recebido."
    },
    {
      "tipo": "pratica",
      "titulo": "Pré-aula 06 · Q5",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Qual margem indica capacidade de geração de caixa operacional, sem considerar juros, impostos, depreciação e amortização?",
        "opcoes": [
          "Margem bruta",
          "Margem operacional",
          "Margem EBITDA"
        ],
        "correta": 2,
        "explicacao": "A margem EBITDA usa o resultado operacional com depreciação e amortização somadas de volta. A operacional ainda desconta essas despesas; a bruta ainda nem descontou as despesas de vender e administrar."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto sobra de cada venda para os sócios?",
      "texto": "Depois de todos os custos, despesas e impostos, sobraram R$ 10,00 de lucro líquido numa receita líquida de R$ 100,00. A [[margem líquida|Lucro líquido como percentual da receita líquida.]] mostra essa sobra final por real vendido. LL significa lucro líquido; RL, receita líquida. Conta: 10 ÷ 100 × 100 = 10,00%. **Margem líquida (%) = LL ÷ RL × 100.**",
      "exemplo": "A margem de 10,00% significa R$ 0,10 de lucro por R$ 1,00 de receita líquida. Não significa que esse dinheiro já entrou na conta bancária."
    },
    {
      "tipo": "pratica",
      "titulo": "Simulado geral · Q28",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresenta lucro líquido de R$ 54.000,00 e receita líquida de R$ 450.000,00. Calcule a margem líquida.",
        "unidade": "%",
        "casas": 2,
        "resposta": 12,
        "calculo": "54000 / 450000 * 100",
        "explicacao": "54.000 ÷ 450.000 × 100 = **12,00%**. Sobram R$ 0,12 de lucro líquido por R$ 1,00 de receita líquida."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto lucro todos os recursos geram?",
      "texto": "A loja usa caixa, mercadorias e equipamentos. Seus bens e direitos formam o [[ativo total|Soma dos bens e direitos da empresa.]], abreviado AT. Se o AT é R$ 200,00 e o lucro líquido é R$ 10,00, o [[ROA|Retorno sobre o ativo: lucro líquido dividido pelo ativo total.]] mede o lucro por real desses recursos. Conta: 10 ÷ 200 × 100 = 5,00%. **ROA (%) = LL ÷ AT × 100.**",
      "exemplo": "ROA de 5,00%: R$ 0,05 de lucro líquido por R$ 1,00 aplicado nos ativos. Use o ativo total informado no enunciado."
    },
    {
      "tipo": "pratica",
      "titulo": "Pré-aula 06 · Q2",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Qual divisão calcula o ROA, antes de multiplicar por 100 para expressá-lo em percentual?",
        "opcoes": [
          "Lucro líquido ÷ patrimônio líquido",
          "Receita líquida ÷ ativo total",
          "Lucro líquido ÷ ativo total",
          "EBITDA ÷ receita líquida"
        ],
        "correta": 2,
        "explicacao": "O ROA compara o lucro líquido com todos os ativos. Dividir pelo patrimônio líquido responde quanto o lucro representa para os sócios, não para o conjunto dos ativos."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto lucro cabe aos recursos dos sócios?",
      "texto": "A loja tem R$ 200,00 em ativos, mas os recursos próprios dos sócios são R$ 100,00: esse é o patrimônio líquido, abreviado PL. Com R$ 10,00 de lucro líquido, o ROE é 10 ÷ 100 × 100 = 10,00%. **ROE (%) = LL ÷ PL × 100.** Dividimos pelo PL porque agora a pergunta é quanto o lucro representa em relação aos recursos dos proprietários.",
      "atencao": "ROA usa AT; ROE usa PL. Um ROE maior pode refletir menos recursos próprios sustentando os ativos. Com PL zero ou negativo, não interprete o ROE como retorno normal."
    },
    {
      "tipo": "pratica",
      "titulo": "Simulado geral · Q29",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresenta lucro líquido de R$ 68.000,00 e patrimônio líquido de R$ 340.000,00. Calcule o ROE.",
        "unidade": "%",
        "casas": 2,
        "resposta": 20,
        "calculo": "68000 / 340000 * 100",
        "explicacao": "68.000 ÷ 340.000 × 100 = **20,00%**. São R$ 0,20 de lucro líquido por R$ 1,00 de recursos próprios."
      }
    },
    {
      "tipo": "pratica",
      "titulo": "Pré-aula 06 · Q7 — ROE",
      "tabela": "fazendas_dados",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Com os dados da tabela, calcule o ROE da Fazenda Rio Verde.",
        "unidade": "%",
        "casas": 2,
        "resposta": 13.18,
        "calculo": "195000 / 1480000 * 100",
        "explicacao": "195.000 ÷ 1.480.000 × 100 = **13,18%**. O lucro é o mesmo usado no ROA; agora a divisão é pelo patrimônio líquido."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, quer pegar outro empréstimo porque seu ROE subiu de 15,00% para 22,00%. Ela já tomou empréstimo no segundo ano. A tabela mostra lucro líquido (LL), receita líquida (RL), ativo total (AT) e patrimônio líquido (PL) dos dois anos completos. Ela precisa entender a alta antes de assumir mais dívida.",
        "enunciado": "Explique a alta do ROE e dê a Marta um recado sobre o próximo empréstimo.",
        "tabela": "marta_anos",
        "passos": [
          {
            "pergunta": "Qual é o ROE em cada ano?",
            "comeco": "Dividindo o lucro líquido pelo PL…"
          },
          {
            "pergunta": "Qual é a margem líquida e o ROA em cada ano?",
            "comeco": "A margem líquida é…"
          },
          {
            "pergunta": "O que explica a alta do ROE e que recado você daria a Marta sobre o empréstimo?",
            "comeco": "A alta veio de…"
          }
        ],
        "dica": "ROE = LL ÷ PL; margem líquida = LL ÷ RL; ROA = LL ÷ AT. Multiplique por 100 e compare os dois anos.",
        "contas": [
          {
            "conta": "60000 / 400000 * 100",
            "resultado": "15,00"
          },
          {
            "conta": "66000 / 300000 * 100",
            "resultado": "22,00"
          },
          {
            "conta": "60000 / 600000 * 100",
            "resultado": "10,00"
          },
          {
            "conta": "66000 / 660000 * 100",
            "resultado": "10,00"
          },
          {
            "conta": "60000 / 500000 * 100",
            "resultado": "12,00"
          },
          {
            "conta": "66000 / 600000 * 100",
            "resultado": "11,00"
          }
        ],
        "resposta_comentada": "**Passo 1.** ROE: ano 1, 60.000 ÷ 400.000 × 100 = 15,00%; ano 2, 66.000 ÷ 300.000 × 100 = 22,00%.\n\n**Passo 2.** Margem líquida: 60.000 ÷ 600.000 × 100 = 10,00%; 66.000 ÷ 660.000 × 100 = 10,00%. ROA: 60.000 ÷ 500.000 × 100 = 12,00%; 66.000 ÷ 600.000 × 100 = 11,00%.\n\n**Passo 3.** A margem ficou igual e o ROA caiu: a loja não ficou mais lucrativa. O ROE subiu porque o PL caiu de 400.000 para 300.000, com mais dívida. Marta, antes de outro empréstimo, confira se a loja paga as parcelas."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "Rentabilidade compara ganho com investimento; todas as margens dividem o resultado correspondente pela receita líquida.",
        "Margem bruta usa o lucro bruto; operacional, o EBIT; EBITDA, o EBITDA; líquida, o lucro líquido. Multiplique por 100.",
        "ROA = LL ÷ AT: retorno de todos os recursos. ROE = LL ÷ PL: retorno dos sócios. Multiplique por 100 para apresentar os percentuais.",
        "Compare no tempo, com o setor e considerando a inflação. ROE subindo com margem e ROA parados vem de menos capital próprio, não de uma loja mais lucrativa."
      ],
      "glossario": [
        {
          "termo": "Margem",
          "def": "Resultado de uma etapa do lucro dividido pela receita líquida, apresentado em percentual."
        },
        {
          "termo": "ROA",
          "def": "Lucro líquido em relação ao ativo total."
        },
        {
          "termo": "ROE",
          "def": "Lucro líquido em relação ao patrimônio líquido."
        }
      ]
    }
  ]
};
