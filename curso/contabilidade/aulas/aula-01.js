(window.CURSO_AULAS = window.CURSO_AULAS || {})["01"] = {
  "n": "01",
  "parte": "A",
  "titulo": "Juros simples e compostos",
  "objetivo": "Calcular o valor a pagar ou receber, descobrir taxa e prazo em juros simples e encontrar o valor inicial ou final em juros compostos.",
  "minutos": 40,
  "tabelas": {
    "comparacao_anos": {
      "fonte": "nenhum",
      "titulo": "R$ 1.000,00 a 10,00% ao ano: montante ao fim de cada ano",
      "colunas": [
        "Ano",
        "Montante simples (R$)",
        "Montante composto (R$)"
      ],
      "numericas": [
        1,
        2
      ],
      "linhas": [
        [
          "1",
          "1.100,00",
          "1.100,00"
        ],
        [
          "2",
          "1.200,00",
          "1.210,00"
        ],
        [
          "3",
          "1.300,00",
          "1.331,00"
        ],
        [
          "4",
          "1.400,00",
          "1.464,10"
        ],
        [
          "5",
          "1.500,00",
          "1.610,51"
        ]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Qual empréstimo sai mais barato?",
      "texto": "Marta, dona de uma loja, precisa de R$ 50.000,00 para reformá-la. Dois bancos oferecem o dinheiro, mas cobram de jeitos diferentes. Você vai aprender desde o começo como calcular o total a devolver. No fim, ajudará Marta a escolher.",
      "quadrinho": [
        {
          "quem": "dona",
          "fala": "Preciso de R$ 50.000,00 para reformar a loja. Recebi duas propostas. Como descubro qual sai mais barata?"
        },
        {
          "quem": "voce",
          "fala": "Vamos entender como o valor cresce até o dia do pagamento."
        }
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "O que são juros?",
      "texto": "Marta pega R$ 1.000,00 emprestados e, um mês depois, devolve R$ 1.020,00. Os R$ 20,00 a mais são os [[juros|Valor pago pelo uso do dinheiro ao longo do tempo.]]: uma espécie de aluguel do dinheiro. Quem empresta cobra porque deixa de usar esse dinheiro e corre o risco de não receber. Além disso, os preços podem subir: é a [[inflação|Aumento geral dos preços, que faz o mesmo dinheiro comprar menos.]], que faz o mesmo dinheiro comprar menos coisas."
    },
    {
      "tipo": "conceito",
      "titulo": "Os três nomes do dinheiro",
      "texto": "No exemplo de Marta, os R$ 1.000,00 recebidos no começo são o [[capital|Valor emprestado ou aplicado no início.]]. Aplicar dinheiro significa deixá-lo rendendo juros. Os R$ 20,00 extras são os juros. Os R$ 1.020,00 devolvidos no fim são o [[montante|Total no fim: capital mais juros.]]. Nas contas, C representa o capital, J os juros e M o montante. Somamos 1.000 + 20 = 1.020. Com letras: **M = C + J**.",
      "atencao": "Se pedirem apenas os juros, tire o capital do montante: 1.020 − 1.000 = R$ 20,00. O total devolvido inclui o dinheiro que Marta recebeu no começo."
    },
    {
      "tipo": "conceito",
      "titulo": "O que significa 2,00% ao mês?",
      "texto": "[[Percentual|Quantidade em cada grupo de cem.]] significa uma quantidade em cada cem: 2,00% são 2 em cada 100. A [[taxa de juros|Percentual cobrado ou recebido por período.]] diz quantos por cento do capital viram juros em cada período, isto é, em cada intervalo de tempo: mês, ano etc. Sobre R$ 1.000,00, 2,00% ao mês geram R$ 20,00 no primeiro mês. Para calcular, divida 2 por 100: 0,02 é a mesma taxa escrita como número decimal. Assim, 1.000 × 0,02 = 20.",
      "exemplo": "Para voltar do decimal ao percentual, multiplique por 100: 0,02 × 100 = 2,00%. O símbolo × significa multiplicar; ÷ significa dividir. Os parênteses agrupam uma conta que deve ser feita primeiro."
    },
    {
      "tipo": "conceito",
      "titulo": "Por quanto tempo o dinheiro fica emprestado?",
      "texto": "O [[prazo|Tempo durante o qual o dinheiro fica emprestado ou aplicado.]] é o tempo até devolver ou retirar o dinheiro. A [[unidade de tempo|Medida usada para contar o tempo, como mês ou ano.]] diz como você conta esse tempo. Com 2,00% ao mês por 2 anos, conte 2 × 12 = **24 meses**. Isso é necessário porque a cobrança se repete a cada mês. Usar apenas 2 contaria dois meses, não dois anos.",
      "exemplo": "As abreviações indicam o período da taxa: a.m. = ao mês; a.a. = ao ano; a.t. = ao trimestre (3 meses); a.s. = ao semestre (6 meses). Um ano tem 12 meses."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "completar",
        "enunciado": "Complete a regra para contar corretamente os períodos de cobrança.",
        "frase": "Taxa e prazo devem estar na mesma ___ de tempo.",
        "aceitas": [
          "unidade"
        ],
        "explicacao": "A palavra é unidade. Se a taxa vale por mês, conte o prazo em meses. Por exemplo, 2 anos correspondem a 24 meses."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Juros simples: o mesmo acréscimo a cada mês",
      "texto": "Marta pega R$ 1.000,00 a 2,00% ao mês por 3 meses. Em [[juros simples|Juros calculados sempre sobre o capital inicial.]], cada mês acrescenta 2,00% dos R$ 1.000,00 iniciais: R$ 20,00. No mês 1, o total chega a R$ 1.020,00; no mês 2, a R$ 1.040,00; no mês 3, a R$ 1.060,00. Os acréscimos são iguais porque o cálculo sempre usa o capital inicial. Se desenhássemos esse crescimento, ele seria uma linha reta.",
      "atencao": "Mesmo que Marta só pague no fim dos 3 meses, os juros já acumulados não geram novos juros nessa forma de cobrança."
    },
    {
      "tipo": "conceito",
      "titulo": "A fórmula dos juros simples, letra por letra",
      "texto": "No exemplo, C é o capital (1.000), i é a taxa em decimal (0,02), n é o número de períodos (3 meses) e J são os juros que queremos descobrir. Cada mês acrescenta 1.000 × 0,02 = R$ 20,00. Em três meses: **1.000 × 0,02 × 3 = R$ 60,00**. A mesma conta com letras é **J = C × i × n**. Uma fórmula é só essa regra de cálculo escrita com letras para servir a outros números.",
      "exemplo": "M é o montante: 1.000 + 60 = R$ 1.060,00. Numa conta só: 1.000 × (1 + 0,02 × 3). Nos parênteses, multiplique antes de somar; o 1 representa o próprio capital. Com letras: **M = C × (1 + i × n)**.",
      "atencao": "Outro capital: R$ 80.000,00 a 2,50% ao mês por um trimestre. Como o trimestre tem 3 meses, os juros são 80.000 × 0,025 × 3 = R$ 6.000,00. O enunciado pediu juros, não montante."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Um empréstimo de R$ 35.000,00 foi contratado a juros simples de 2,50% ao mês por 6 meses. Calcule apenas os juros.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 5250,
        "calculo": "35000 * 0.025 * 6",
        "explicacao": "J = C × i × n. Digite 35.000 × 0,025 × 6 = **R$ 5.250,00**. A taxa de 2,50% vira 0,025; o prazo já está em meses. Esse é apenas o valor extra, sem o capital."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Um empréstimo de R$ 35.000,00 cobra juros simples de 2,50% ao mês por 6 meses. Calcule o montante final.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 40250,
        "calculo": "35000 * (1 + 0.025 * 6)",
        "explicacao": "M = C × (1 + i × n). Digite 35.000 × (1 + 0,025 × 6) = **R$ 40.250,00**. O montante inclui os R$ 35.000,00 recebidos no começo e os R$ 5.250,00 de juros."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa aplicou R$ 60.000,00 a juros simples de 1,80% ao mês. Calcule o montante que receberá após 8 meses.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 68640,
        "calculo": "60000 * (1 + 0.018 * 8)",
        "explicacao": "Digite 60.000 × (1 + 0,018 × 8) = **R$ 68.640,00**. A taxa de 1,80% vira 0,018, não 0,18. A conta soma ao capital os juros dos oito meses."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "E quando falta a taxa, o prazo ou o capital?",
      "texto": "Retome C = 1.000, i = 0,02, n = 3 e J = 60. Para descobrir um número que foi multiplicado, dividimos pelos outros. É a mesma regra dos juros simples, reorganizada:\n- **Taxa:** 60 ÷ (1.000 × 3) = 0,02, ou 2,00% ao mês. Fórmula: i = J ÷ (C × n).\n- **Prazo:** 60 ÷ (1.000 × 0,02) = 3 meses. Fórmula: n = J ÷ (C × i).\n- **Capital:** 60 ÷ (0,02 × 3) = R$ 1.000,00. Fórmula: C = J ÷ (i × n).",
      "atencao": "Se souber o montante e o capital, subtraia um do outro para achar os juros. Triplicar significa terminar com três vezes o capital: de R$ 100,00 para R$ 300,00, os juros são R$ 200,00."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma aplicação de R$ 42.000,00 rendeu juros simples de R$ 6.300,00 em 5 meses. Calcule a taxa mensal, em percentual.",
        "unidade": "%",
        "casas": 2,
        "resposta": 3,
        "calculo": "6300 / (42000 * 5) * 100",
        "explicacao": "i = J ÷ (C × n). Digite 6.300 ÷ (42.000 × 5) × 100 = **3,00% ao mês**. A divisão encontra 0,03; multiplicar por 100 transforma esse decimal em percentual."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "R$ 2.500,00 foram aplicados a juros simples de 1,50% ao mês e geraram R$ 150,00 de juros. Calcule o prazo em meses.",
        "unidade": "",
        "casas": 0,
        "tolerancia": 0.4,
        "resposta": 4,
        "calculo": "150 / (2500 * 0.015)",
        "explicacao": "n = J ÷ (C × i). Digite 150 ÷ (2.500 × 0,015) = **4 meses**. Cada mês gera R$ 37,50; precisamos de quatro desses acréscimos para chegar a R$ 150,00."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Um capital foi aplicado a juros simples de 1,50% ao mês durante 8 meses, gerando R$ 720,00 de juros. Calcule o capital inicial.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 6000,
        "calculo": "720 / (0.015 * 8)",
        "explicacao": "C = J ÷ (i × n). Digite 720 ÷ (0,015 × 8) = **R$ 6.000,00**. Dividimos os juros pela taxa e pelo número de meses porque são esses dois números que multiplicam o capital."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule a taxa mensal de juros simples necessária para triplicar um capital em 1 ano. Responda em percentual.",
        "unidade": "%",
        "casas": 2,
        "resposta": 16.67,
        "calculo": "(300 - 100) / (100 * 12) * 100",
        "explicacao": "Use capital de R$ 100,00 e montante de R$ 300,00: os juros são R$ 200,00. Um ano tem 12 meses. Digite (300 − 100) ÷ (100 × 12) × 100 = **16,67% ao mês**. Triplicar o total exige ganhar duas vezes o capital em juros."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Juros compostos: o acréscimo também cresce",
      "texto": "Agora Marta pega os mesmos R$ 1.000,00 a 2,00% ao mês com [[juros compostos|Juros calculados sobre o total já acumulado, incluindo juros anteriores.]]. No mês 1: 1.000 × 0,02 = R$ 20,00; total de R$ 1.020,00. No mês 2, a cobrança usa esse novo total: 1.020 × 0,02 = R$ 20,40; total de R$ 1.040,40. No mês 3, os juros chegam a R$ 20,81 e o total a R$ 1.061,21. Os juros anteriores passam a gerar juros: são os **juros sobre juros**.",
      "atencao": "Os valores acima foram arredondados para centavos. Na calculadora, não arredonde no meio da conta: mantenha todas as **casas decimais**, os dígitos depois da vírgula, e arredonde só o resultado final."
    },
    {
      "tipo": "conceito",
      "titulo": "Como calcular os compostos de uma vez?",
      "texto": "No primeiro mês, somar R$ 20,00 aos R$ 1.000,00 equivale a multiplicar por 1 + 0,02 = 1,02. Esse número é o [[fator|Número que multiplica o valor para incluir os juros de um período.]]: ele inclui o valor anterior e os juros do mês. Em três meses: 1.000 × 1,02 × 1,02 × 1,02. A [[potência|Escrita abreviada de uma multiplicação repetida.]] 1,02^3, lida “1,02 elevado a 3”, abrevia essas três multiplicações; o [[expoente|Número que indica por quantos períodos o fator é aplicado.]] é 3. A conta dá **R$ 1.061,21**.",
      "exemplo": "C = capital (1.000); i = taxa decimal (0,02); n = períodos (3); M = montante procurado. Com números: 1.000 × (1 + 0,02)^3. Com letras: **M = C × (1 + i)^n**.",
      "atencao": "Na tabela, o capital é R$ 1.000,00 e a taxa é 10,00% ao ano. Nos simples, cada ano soma R$ 100,00. Nos compostos, cada ano multiplica o total anterior por 1,10.",
      "tabela": "comparacao_anos"
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tomou R$ 25.000,00 emprestados a juros compostos de 2,80% ao mês por 5 meses. Calcule o montante a pagar no fim.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 28701.57,
        "calculo": "25000 * (1 + 0.028) ** 5",
        "explicacao": "Digite 25.000 × 1,028^5 = **R$ 28.701,57**. O fator é 1 + 0,028, repetido por cinco meses. O gabarito oficial do simulado da disciplina traz R$ 28.701,80 porque arredonda o fator no meio da conta; mantenha todas as casas decimais até o fim."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Um capital de R$ 18.500,00 foi aplicado a juros compostos de 3,50% ao mês. Calcule o montante após 6 meses.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 22741.22,
        "calculo": "18500 * (1 + 0.035) ** 6",
        "explicacao": "Digite 18.500 × 1,035^6 = **R$ 22.741,22**. O fator 1,035 multiplica o total a cada mês. O expoente é 6 porque tanto a taxa quanto o prazo estão em meses."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Uma dívida de R$ 1.000,00 aumenta 100,00% ao ano em juros compostos, dobrando a cada ano. Sem pagamentos, qual será o total após 5 anos?",
        "opcoes": [
          "R$ 6.000,00",
          "R$ 16.000,00",
          "R$ 32.000,00",
          "R$ 64.000,00"
        ],
        "correta": 2,
        "explicacao": "1.000 × 2^5 = R$ 32.000,00. O fator é 2 porque 100,00% acrescentam outro valor igual ao total anterior. R$ 6.000,00 usa juros simples; R$ 16.000,00 conta quatro anos; R$ 64.000,00 conta seis anos."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto depositar hoje para ter um valor no futuro?",
      "texto": "Imagine que Marta queira R$ 1.020,00 daqui a um mês, com juros compostos de 2,00% ao mês. Como R$ 1.000,00 crescem para R$ 1.020,00, desfazemos a multiplicação: 1.020 ÷ 1,02 = R$ 1.000,00. O [[valor presente|Dinheiro no começo, também chamado capital.]] é o capital de hoje, abreviado VP. O [[valor futuro|Dinheiro no fim, também chamado montante.]] é o montante desejado, abreviado VF. Aqui, VF = 1.020, i = 0,02 e n = 1. A regra é **VP = VF ÷ (1 + i)^n**.",
      "atencao": "Para descobrir quanto depositar hoje, divida pelo fator elevado ao número de períodos. Multiplicar levaria o dinheiro para uma data ainda mais distante, em vez de voltar ao começo."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma pessoa deseja ter R$ 27.500,00 dentro de 1 ano. Quanto deve depositar hoje, a juros compostos de 1,70% ao mês?",
        "unidade": "R$",
        "casas": 2,
        "resposta": 22463.7,
        "calculo": "27500 / (1 + 0.017) ** 12",
        "explicacao": "VP = VF ÷ (1 + i)^n. Um ano tem 12 meses. Digite 27.500 ÷ (1,017^12) = **R$ 22.463,70**. O depósito é menor que o valor desejado porque os juros completarão a diferença ao longo do ano."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Qual dos dois cresce mais?",
      "texto": "Compare sempre o **mesmo capital, a mesma taxa positiva e o mesmo prazo**. Ao fim do primeiro período, simples e compostos dão o mesmo montante. Depois de um período, os compostos crescem mais, pois os juros anteriores também geram juros. Em menos de um período, os simples rendem mais. Por exemplo, meio mês corresponde a n = 0,5 quando a taxa é mensal; nos compostos, usamos esse 0,5 como expoente.",
      "diagrama": {
        "tipo": "lado_a_lado",
        "esquerda": {
          "titulo": "Juros simples",
          "itens": [
            "Sempre sobre o capital inicial",
            "Mesmo acréscimo por período",
            "Rendem mais antes de completar um período"
          ]
        },
        "direita": {
          "titulo": "Juros compostos",
          "itens": [
            "Sobre o total já acumulado",
            "Juros anteriores também geram juros",
            "Rendem mais depois de um período"
          ]
        },
        "nota": "Compare Juros simples e Juros compostos com capital, taxa e prazo iguais. Em um período, os resultados são iguais."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Duas aplicações têm o mesmo capital e a mesma taxa positiva ao mês. Uma usa juros simples; outra, compostos. Em meio mês, qual rende mais?",
        "opcoes": [
          "A de juros compostos, pois sempre rende mais.",
          "As duas rendem o mesmo.",
          "A de juros simples."
        ],
        "correta": 2,
        "explicacao": "Em meio período, os simples rendem mais. Para conferir com R$ 1.000,00 a 2,00% ao mês: simples, 1.000 × (1 + 0,02 × 0,5) = R$ 1.010,00; compostos, 1.000 × 1,02^0,5 = R$ 1.009,95. A igualdade vale em um período completo; a vantagem dos compostos vem depois dele."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Como digitar na calculadora científica?",
      "texto": "Para R$ 1.000,00 a 2,00% ao mês por 3 meses, digite **1000 × 1.02 ^ 3 =**. A tecla ^, também chamada xʸ, significa “elevado a”: aplica a potência. O ponto da calculadora corresponde à nossa vírgula decimal. Para meio mês, digite **1000 × 1.02 ^ (1 ÷ 2) =**. Esse expoente é fracionário: representa parte de um período. Os parênteses fazem a calculadora resolver a divisão antes de elevar o fator.",
      "exemplo": "Digite o fator 1,02 para incluir juros de 2,00%, sem usar a tecla %. Mantenha todas as casas decimais durante a conta. Arredonde só o resultado final para duas casas decimais: 1.061,208 vira R$ 1.061,21.",
      "diagrama": {
        "tipo": "fluxo",
        "etapas": [
          "Identifique a taxa e o prazo",
          "Conte o prazo na mesma unidade de tempo da taxa",
          "Escolha a fórmula: simples ou compostos",
          "Calcule e arredonde o resultado final"
        ],
        "nota": "Se a taxa é mensal, conte meses antes de usar a fórmula. Confira se a pergunta pede juros ou montante."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada fórmula ao valor que ela permite calcular.",
        "pares": [
          [
            "J = C × i × n",
            "Juros simples"
          ],
          [
            "M = C × (1 + i × n)",
            "Montante em juros simples"
          ],
          [
            "M = C × (1 + i)^n",
            "Montante em juros compostos"
          ],
          [
            "VP = VF ÷ (1 + i)^n",
            "Capital de hoje em juros compostos"
          ]
        ],
        "explicacao": "C é o capital, i a taxa decimal, n o número de períodos, J os juros e M o montante. VP também representa o capital; VF, o montante. Primeiro leia o que a questão pede. Depois escolha a fórmula correspondente."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, precisa de R$ 50.000,00 para reformá-la e pagará tudo ao fim de 8 meses. O banco A cobra 2,00% ao mês em juros simples; o B, 1,90% ao mês em juros compostos. Não há outras cobranças. Ela precisa escolher: “O B tem a taxa menor, então é melhor, certo?”",
        "enunciado": "Calcule o total de cada proposta e recomende a opção mais barata para Marta.",
        "passos": [
          {
            "pergunta": "Qual será o montante a pagar ao banco A ao fim dos 8 meses?",
            "comeco": "No banco A, o total será…"
          },
          {
            "pergunta": "Qual será o montante a pagar ao banco B ao fim dos 8 meses?",
            "comeco": "No banco B, o total será…"
          },
          {
            "pergunta": "Qual proposta você recomenda a Marta, considerando o total a pagar?",
            "comeco": "Marta, eu escolheria…"
          }
        ],
        "dica": "Montante é o total a devolver. Nos simples, use C × (1 + i × n); nos compostos, C × (1 + i)^n. C é o valor emprestado, i a taxa dividida por 100 e n o prazo em meses.",
        "contas": [
          {
            "conta": "2 / 100",
            "resultado": "0,02"
          },
          {
            "conta": "1 + 1.9 / 100",
            "resultado": "1,019"
          },
          {
            "conta": "50000 * (1 + 0.02 * 8)",
            "resultado": "58.000,00"
          },
          {
            "conta": "50000 * 1.019 ** 8",
            "resultado": "58.125,07"
          },
          {
            "conta": "58125.07 - 58000",
            "resultado": "125,07"
          }
        ],
        "resposta_comentada": "**Passo 1.** No banco A, 2,00 ÷ 100 = 0,02. O montante simples é 50.000 × (1 + 0,02 × 8) = **R$ 58.000,00**.\n\n**Passo 2.** No banco B, o fator é 1 + 1,90 ÷ 100 = 1,019. O montante composto é 50.000 × 1,019^8 = **R$ 58.125,07**.\n\n**Passo 3.** Escolheria o banco A: 58.125,07 − 58.000,00 = **R$ 125,07** a menos. Apesar da taxa menor, o B cobra juros sobre juros. Para esse valor e esses 8 meses, o total do A é menor."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "Capital é o dinheiro inicial; juros são o acréscimo; montante é o total: M = C + J.",
        "Divida o percentual por 100 e conte o prazo na unidade da taxa: 2,00% ao mês por 2 anos usa i = 0,02 e n = 24.",
        "Nos simples, J = C × i × n e M = C × (1 + i × n); para achar outra letra, divida os juros pelos dois valores conhecidos.",
        "Nos compostos, M = C × (1 + i)^n; para descobrir o depósito inicial, VP = VF ÷ (1 + i)^n.",
        "Use parênteses no expoente fracionário, arredonde só no fim e compare o total a pagar no mesmo prazo para escolher o empréstimo."
      ],
      "glossario": [
        {
          "termo": "Capital (C ou VP)",
          "def": "Valor emprestado ou aplicado no começo; VP significa valor presente."
        },
        {
          "termo": "Juros (J)",
          "def": "Valor acrescentado ao capital pelo uso do dinheiro ao longo do tempo."
        },
        {
          "termo": "Montante (M ou VF)",
          "def": "Capital mais juros no fim; VF significa valor futuro."
        },
        {
          "termo": "Taxa de juros (i)",
          "def": "Percentual por período; na fórmula, entra dividido por 100."
        },
        {
          "termo": "Prazo (n)",
          "def": "Quantidade de períodos, contados na mesma unidade de tempo da taxa."
        },
        {
          "termo": "Juros simples",
          "def": "Calculados sempre sobre o capital inicial."
        },
        {
          "termo": "Juros compostos",
          "def": "Calculados sobre o total acumulado, incluindo juros anteriores."
        },
        {
          "termo": "Fator",
          "def": "Número que multiplica o valor para incluir os juros de um período: 1 + i."
        }
      ]
    }
  ]
};
