(window.CURSO_AULAS = window.CURSO_AULAS || {})["02"] = {
  "n": "02",
  "parte": "A",
  "titulo": "Taxas e inflação",
  "objetivo": "Converter e acumular taxas de juros e calcular quanto o dinheiro ganha em poder de compra depois da inflação.",
  "minutos": 35,
  "tabelas": {},
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Qual oferta faz o dinheiro comprar mais?",
      "texto": "Marta quer guardar dinheiro por um ano. Um [[CDB|Certificado de Depósito Bancário: aplicação em que você empresta dinheiro a um banco.]] é uma aplicação em que ela empresta dinheiro ao banco. Um [[fundo|Aplicação que reúne dinheiro de várias pessoas para investir em conjunto.]] reúne dinheiro de várias pessoas para investir. As ofertas prometem ganhos em percentuais: 12% significa 12 em cada 100. Mas os preços também sobem: a [[inflação|Aumento geral dos preços em um período.]] é esse aumento geral, que faz o mesmo dinheiro comprar menos.",
      "quadrinho": [
        {"quem": "dona", "fala": "Me ofereceram um CDB que rende 12% ao ano e um fundo que rende 1% ao mês. A inflação esperada é 5% ao ano."},
        {"quem": "voce", "fala": "Vamos comparar os ganhos em um ano e descobrir quanto cada oferta permite comprar a mais."}
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "O que significa ganhar 1% ao mês?",
      "texto": "Marta guarda R$ 100,00 e recebe R$ 101,00 após um mês. Os R$ 100,00 iniciais são o [[capital|Dinheiro aplicado ou emprestado no início.]]; o R$ 1,00 a mais são os [[juros|Valor pago pelo uso do dinheiro ao longo do tempo.]]. A [[taxa de juros|Percentual de juros referente a um período.]] indica o ganho por período: 1% ao mês significa R$ 1,00 por mês para cada R$ 100,00 usados no cálculo. Para calcular, dividimos o percentual por 100: 1 ÷ 100 = 0,01, sua forma decimal.",
      "exemplo": "O período é o intervalo de tempo: mês, bimestre (2 meses), trimestre (3 meses), semestre (6 meses) ou ano (12 meses). Compare ofertas no mesmo período: um ganho mensal ainda precisa ser convertido para ser comparado a um anual."
    },
    {
      "tipo": "conceito",
      "titulo": "Quando basta dividir ou multiplicar?",
      "texto": "R$ 100,00 a 30,00% ao ano em [[juros simples|Juros calculados sempre sobre o capital inicial.]] ganham R$ 30,00 no ano, sempre calculados sobre o dinheiro inicial. Por mês, são R$ 2,50. As [[taxas proporcionais|Taxas que variam na mesma proporção que seus períodos.]] acompanham o tamanho do período. Na fórmula, i é a taxa original (30,00% ao ano) e k é quantos períodos menores cabem no período dela (12 meses em um ano). Conta: 30,00% ÷ 12 = 2,50%. Fórmula: **taxa menor = i ÷ k**. Para ir a um período maior, multiplique por k.",
      "exemplo": "8,00% por trimestre viram 32,00% por ano: 8 × 4, pois há 4 trimestres no ano. Siglas: a.m. = ao mês; a.t. = ao trimestre; a.s. = ao semestre; a.a. = ao ano.",
      "atencao": "Em juros simples, duas taxas proporcionais também são chamadas de [[equivalentes|Taxas que dão o mesmo valor final para o mesmo dinheiro inicial e prazo.]]: dão o mesmo ganho no mesmo prazo. Quando os juros também rendem juros, a conversão é outra, como você verá adiante."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule a taxa mensal proporcional a 30% ao ano, em juros simples.",
        "unidade": "%",
        "casas": 2,
        "resposta": 2.5,
        "calculo": "30 / 12",
        "explicacao": "Há 12 meses no ano. Divida a taxa anual por 12: 30 ÷ 12 = **2,50% ao mês**. A divisão é adequada porque a conversão é proporcional."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Um escritório compara cinco aplicações em juros simples. Para o mesmo capital e o mesmo prazo, qual taxa gera o maior ganho?",
        "opcoes": ["7% ao bimestre", "10% ao trimestre", "18% ao semestre", "40% ao ano", "3% ao mês"],
        "correta": 0,
        "explicacao": "Converta todas para um ano: 7 × 6 = 42,00%; 10 × 4 = 40,00%; 18 × 2 = 36,00%; 40,00%; 3 × 12 = 36,00%. A maior é **7% ao bimestre**. Escolher o maior número escrito, 40%, ignora os períodos diferentes."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Por que 1% ao mês supera 12% ao ano?",
      "texto": "Com [[juros compostos|Juros calculados sobre o dinheiro inicial mais os juros já incorporados.]], os juros anteriores também passam a render. R$ 100,00 a 1,00% ao mês viram R$ 101,00; no mês seguinte, R$ 102,01, porque o ganho incide sobre R$ 101,00. O [[fator|Número que multiplica um valor para incluir uma variação percentual.]] é o número que multiplica o dinheiro para incluir o ganho: 1,01 mantém o valor anterior e acrescenta 1%. Multiplicá-lo duas vezes inclui dois meses; escrever 1,01^2 é a mesma conta.",
      "exemplo": "O símbolo ^ indica uma potência: 1,01^12 multiplica 1,01 por ele mesmo 12 vezes. A calculadora científica costuma ter a tecla xʸ ou ^. Use parênteses quando o expoente, o número depois do ^, for uma divisão: 1,58^(1 ÷ 12)."
    },
    {
      "tipo": "conceito",
      "titulo": "Como trocar o período nos juros compostos?",
      "texto": "A 1,00% ao mês, R$ 100,00 chegam a R$ 112,68 em um ano. A taxa anual equivalente é 12,68%: aplicada uma vez no ano, dá o mesmo valor final. Na fórmula, i_tenho é a taxa conhecida em decimal (0,01); i_quero, a procurada. QUERO é a duração do período procurado (12 meses); TENHO, a do conhecido (1 mês). Conta: (1,01^(12 ÷ 1) − 1) × 100 = 12,68%. Fórmula: **i_quero = (1 + i_tenho)^(QUERO ÷ TENHO) − 1**.",
      "atencao": "Para passar de ano para mês, QUERO = 1 e TENHO = 12: o expoente é 1 ÷ 12. Não divida a taxa composta por 12. Arredonde só a resposta final.",
      "diagrama": {
        "tipo": "lado_a_lado",
        "esquerda": {"titulo": "Proporcional (simples)", "itens": ["1,00% ao mês", "1,00% × 12", "12,00% ao ano"]},
        "direita": {"titulo": "Equivalente (compostos)", "itens": ["1,00% ao mês", "(1,01^12 − 1) × 100", "12,68% ao ano"]},
        "nota": "Em Equivalente (compostos), os juros anteriores também rendem. Em Proporcional (simples), o cálculo usa sempre o dinheiro inicial."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule a taxa mensal equivalente a 58% ao ano, em juros compostos.",
        "unidade": "%",
        "casas": 2,
        "resposta": 3.89,
        "calculo": "(1.58 ** (1 / 12) - 1) * 100",
        "explicacao": "Você quer 1 mês e tem 12 meses. Digite (1,58^(1 ÷ 12) − 1) × 100 = **3,89% ao mês**. Dividir 58 por 12 daria uma taxa proporcional, não a equivalente composta."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule a taxa composta anual equivalente a 10% ao semestre.",
        "unidade": "%",
        "casas": 2,
        "resposta": 21,
        "calculo": "(1.10 ** (12 / 6) - 1) * 100",
        "explicacao": "Um ano tem 2 semestres: 12 ÷ 6 = 2. Digite (1,10^2 − 1) × 100 = **21,00% ao ano**. O resultado inclui juros sobre os juros do primeiro semestre."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule a taxa de juros compostos anual equivalente a 2% ao mês.",
        "unidade": "%",
        "casas": 2,
        "resposta": 26.82,
        "calculo": "(1.02 ** 12 - 1) * 100",
        "explicacao": "São 12 meses de ganhos sucessivos: (1,02^12 − 1) × 100 = **26,82% ao ano**. Multiplicar 2% por 12 daria 24,00%, que corresponde à conversão proporcional."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O que significa “24% ao ano, capitalizados mensalmente”?",
      "texto": "Um contrato anuncia 24,00% ao ano, mas incorpora juros ao dinheiro a cada mês. Essa incorporação se chama [[capitalização|Incorporação dos juros ao valor que passa a render.]]. Como o anúncio usa ano e a incorporação usa mês, os 24,00% se chamam [[taxa nominal|Na capitalização, taxa anunciada em período diferente daquele em que os juros são incorporados.]]. Primeiro descubra a [[taxa efetiva|Taxa que representa o ganho de fato em um período.]], o ganho de fato no mês. Na fórmula, i_período é essa taxa mensal; i_nominal = 0,24 e k = 12 incorporações anuais. Conta: 0,24 ÷ 12 = 0,02. Fórmula: **i_período = i_nominal ÷ k**.",
      "atencao": "Aqui a divisão é obrigatória: você está traduzindo a taxa nominal para o período em que os juros são incorporados. Depois, a taxa de 2,00% ao mês será usada em juros compostos."
    },
    {
      "tipo": "conceito",
      "titulo": "Depois de dividir, como chegar ao prazo pedido?",
      "texto": "Os 24,00% nominais ao ano viraram 2,00% efetivos ao mês. Agora **componha** os ganhos mensais: use juros compostos, em que cada mês rende sobre o anterior. Na fórmula, i_período é 0,02; n é o número de meses desejado (12); i_final é a taxa anual procurada. Conta: (1,02^12 − 1) × 100 = 26,82%. Fórmula: **i_final = (1 + i_período)^n − 1**. Os juros mensais rendem novos juros, por isso o ganho efetivo anual supera o número anunciado.",
      "exemplo": "48,00% nominais ao ano com capitalização mensal: 48 ÷ 12 = 4,00% ao mês. Para um bimestre, são 2 meses: (1,04^2 − 1) × 100 = 8,16%.",
      "diagrama": {
        "tipo": "fluxo",
        "etapas": ["24,00% nominais ao ano", "Dividir por 12 meses", "2,00% efetivos ao mês", "Compor 12 meses: 1,02^12 − 1", "26,82% efetivos ao ano"],
        "nota": "Primeiro divida a nominal pelo número de incorporações no ano. Depois componha a taxa obtida até o prazo pedido."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Um empréstimo anuncia taxa nominal de 24% ao ano, capitalizada trimestralmente. Calcule a taxa semestral efetiva em juros compostos.",
        "unidade": "%",
        "casas": 2,
        "resposta": 12.36,
        "calculo": "((1 + 0.24 / 4) ** 2 - 1) * 100",
        "explicacao": "Há 4 trimestres no ano: 24 ÷ 4 = 6,00% ao trimestre. Um semestre tem 2 trimestres. Digite ((1 + 0,24 ÷ 4)^2 − 1) × 100 = **12,36% ao semestre**. Só dividir 24 por 2 ignoraria os juros sobre juros."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma financeira cobra taxa nominal de 84% ao ano, com capitalização mensal. Calcule a taxa efetiva de um empréstimo de 2 meses.",
        "unidade": "%",
        "casas": 2,
        "resposta": 14.49,
        "calculo": "((1 + 0.84 / 12) ** 2 - 1) * 100",
        "explicacao": "Primeiro, 84 ÷ 12 = 7,00% ao mês. Depois, ((1 + 0,84 ÷ 12)^2 − 1) × 100 = **14,49% em 2 meses**. Na lista de exercícios da disciplina, a alternativa certa aparece como 14,5%, arredondada para uma casa decimal."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "E se a taxa mudar a cada mês?",
      "texto": "R$ 100,00 crescem 10,00% no primeiro mês e viram R$ 110,00. No segundo, crescem 20,00% sobre R$ 110,00 e chegam a R$ 132,00. O ganho conjunto é 32,00%, não 30,00%. A [[taxa acumulada|Variação conjunta de períodos sucessivos, calculada multiplicando seus fatores.]] reúne essas mudanças. A segunda taxa atua sobre um valor já alterado. Por isso, multiplicamos 1,10 por 1,20; somar os percentuais perderia essa mudança do valor usado no cálculo.",
      "atencao": "A inflação também se acumula sobre preços já alterados. Uma queda usa fator menor que 1: uma queda de 1,00% usa 0,99, pois conserva 99% do valor anterior."
    },
    {
      "tipo": "conceito",
      "titulo": "Como calcular a taxa acumulada?",
      "texto": "No exemplo anterior, i₁ é 0,10, a primeira taxa; i₂ é 0,20, a segunda; i_acum é a taxa conjunta. Conta: (1,10 × 1,20 − 1) × 100 = 32,00%. Fórmula: **i_acum = (1 + i₁) × (1 + i₂) × … − 1**. Os pontos indicam que você continua multiplicando se houver mais períodos. Cada fator inclui o valor anterior mais a mudança; tirar 1 deixa só a variação. Multiplicar por 100 transforma a resposta decimal em percentual.",
      "exemplo": "Inflação de 1,20%, 0,95%, 1,70% e 1,40% em quatro meses: (1,012 × 1,0095 × 1,017 × 1,014 − 1) × 100 = 5,35%. Mantenha todos os dígitos na calculadora até o fim."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma aplicação rendeu juros compostos de 1,5%, 2,0%, 0,8%, 1,2% e 2,1% em cinco meses consecutivos. Calcule a taxa acumulada nesses 5 meses.",
        "unidade": "%",
        "casas": 2,
        "resposta": 7.83,
        "calculo": "(1.015 * 1.02 * 1.008 * 1.012 * 1.021 - 1) * 100",
        "explicacao": "Digite (1,015 × 1,02 × 1,008 × 1,012 × 1,021 − 1) × 100 = **7,83%**. A soma daria 7,60%, mas ignoraria que cada mês rende sobre o valor já aumentado."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma aplicação rendeu 1,0%, 1,8%, 2,2% e 0,9% em quatro meses consecutivos, em juros compostos. Calcule a taxa acumulada no período.",
        "unidade": "%",
        "casas": 2,
        "resposta": 6.03,
        "calculo": "(1.01 * 1.018 * 1.022 * 1.009 - 1) * 100",
        "explicacao": "Digite (1,01 × 1,018 × 1,022 × 1,009 − 1) × 100 = **6,03%**. O gabarito oficial do simulado da disciplina (questão 9) traz 6,04%, mas a conta sem arredondar no meio dá 6,03%."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Mais dinheiro significa comprar mais?",
      "texto": "Marta tinha R$ 100,00 e terminou o ano com R$ 114,00. Uma mesma cesta de compras passou de R$ 100,00 para R$ 107,00. Seu dinheiro cresceu 14,00%, mas os preços subiram 7,00%. A [[taxa real|Variação do poder de compra depois de considerar a inflação.]] mede o ganho em poder de compra, isto é, quanto ela consegue comprar. Nesta comparação, chamamos de **nominal** o ganho do dinheiro antes de considerar os preços. Aqui, nominal não indica uma diferença entre os períodos de anúncio e capitalização.",
      "exemplo": "Dividir o dinheiro final pelo preço final da cesta mostra quantas cestas Marta pode comprar. Subtrair 14% − 7% não faz essa comparação: os dois crescimentos precisam ser relacionados por seus fatores."
    },
    {
      "tipo": "conceito",
      "titulo": "Como retirar a inflação do ganho?",
      "texto": "No exemplo de Marta, i_nominal é 0,14; i_inflação é 0,07; i_real é o ganho em poder de compra procurado. Conta: (1,14 ÷ 1,07 − 1) × 100 = 6,54%. Fórmula: **i_real = (1 + i_nominal) ÷ (1 + i_inflação) − 1**. Essa relação é o [[Efeito Fisher|Relação exata entre o ganho nominal, o ganho real e a inflação.]]. Dividimos o crescimento do dinheiro pelo crescimento dos preços para medir quanto mais ele compra. As duas taxas precisam cobrir exatamente o mesmo período.",
      "atencao": "O ganho real é 6,54%, não 7,00%. Se o dinheiro crescer menos que os preços, a taxa real será negativa: haverá mais reais, mas eles comprarão menos."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma aplicação apresentou taxa nominal composta de 12% em 4 meses. A inflação acumulada nesses mesmos meses foi 6%. Calcule a taxa real pelo Efeito Fisher.",
        "unidade": "%",
        "casas": 2,
        "resposta": 5.66,
        "calculo": "(1.12 / 1.06 - 1) * 100",
        "explicacao": "As taxas já cobrem os mesmos 4 meses. Digite (1,12 ÷ 1,06 − 1) × 100 = **5,66%** de ganho real no período. Fazer 12% − 6% daria 6,00%, uma aproximação que não atende à fórmula exata."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Como achar o ganho nominal?",
      "texto": "Para comprar 10,00% mais quando os preços sobem 5,00%, R$ 100,00 precisam virar R$ 115,50. Pelo Efeito Fisher, o crescimento do dinheiro reúne o crescimento da quantidade comprada e o dos preços. Na fórmula, i_real = 0,10; i_inflação = 0,05; i_nominal é a taxa procurada. Conta: (1,10 × 1,05 − 1) × 100 = 15,50%. Fórmula: **(1 + i_nominal) = (1 + i_real) × (1 + i_inflação)**. Retire 1 do produto para isolar a taxa nominal; depois multiplique por 100.",
      "atencao": "Quando a pergunta pede nominal a partir de real e inflação, multiplique os fatores. A regra de dividir uma taxa anual nominal para capitalização mensal pertence a outro tipo de enunciado."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma aplicação apresentou taxa real de 8% em um trimestre, com inflação acumulada de 3% nesse período. Calcule a taxa nominal composta pelo Efeito Fisher.",
        "unidade": "%",
        "casas": 2,
        "resposta": 11.24,
        "calculo": "(1.08 * 1.03 - 1) * 100",
        "explicacao": "Digite (1,08 × 1,03 − 1) × 100 = **11,24% no trimestre**. A soma 8% + 3% daria 11,00% e deixaria de incluir o efeito conjunto do ganho real com a inflação."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "E quando a incógnita é a inflação?",
      "texto": "Uma aplicação ganhou 12,00% em dinheiro, mas seu poder de compra cresceu 5,00%. Para descobrir quanto os preços subiram, divida o fator nominal pelo fator real. Na fórmula, i_nominal = 0,12; i_real = 0,05; i_inflação é o valor desconhecido, a incógnita. Conta: (1,12 ÷ 1,05 − 1) × 100 = 6,67%. Fórmula: **i_inflação = (1 + i_nominal) ÷ (1 + i_real) − 1**. A ordem da divisão importa: o fator nominal fica no numerador, a parte de cima da divisão.",
      "exemplo": "Para comparar duas taxas já calculadas, usamos [[ponto percentual|Unidade da diferença entre duas taxas em percentual.]]: é a diferença entre os números percentuais. De 5,00% para 6,00% há 1,00 ponto percentual. Isso não é uma conversão de taxa nem o cálculo de ganho real."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma aplicação apresentou taxa real de 5% ao ano e taxa nominal de 12% ao ano. Calcule a inflação desse ano pelo Efeito Fisher.",
        "unidade": "%",
        "casas": 2,
        "resposta": 6.67,
        "calculo": "(1.12 / 1.05 - 1) * 100",
        "explicacao": "Digite (1,12 ÷ 1,05 − 1) × 100 = **6,67% ao ano**. Você conhece o ganho nominal e o real; a divisão dos fatores revela a inflação, não uma nova taxa real."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada pedido à regra de cálculo adequada.",
        "pares": [
          ["Proporcional: de ano para mês", "Dividir a taxa por 12"],
          ["Equivalente composta: de ano para mês", "Elevar o fator a 1 ÷ 12 e subtrair 1"],
          ["Acumulada de vários meses", "Multiplicar os fatores mensais e subtrair 1"],
          ["Real a partir de nominal e inflação", "Dividir o fator nominal pelo da inflação e subtrair 1"]
        ],
        "explicacao": "Leia o pedido antes de calcular: proporcional acompanha a duração; equivalente composta usa potência; acumulada junta fatores sucessivos; real desconta o crescimento dos preços por divisão. Nas três últimas regras, multiplique o resultado decimal por 100 para responder em percentual."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, precisa escolher onde guardar dinheiro por um ano: CDB com ganho de 12% no ano ou fundo com juros compostos de 1% ao mês. A inflação esperada é 5% no ano. Para este exercício, considere as ofertas iguais nos demais aspectos e sem descontos sobre os ganhos. Ela quer escolher a que mais aumenta seu poder de compra.",
        "enunciado": "Compare as ofertas no mesmo ano, calcule os ganhos reais e recomende uma delas a Marta.",
        "passos": [
          {"pergunta": "Qual é a taxa anual equivalente do fundo?", "comeco": "A taxa anual do fundo é…"},
          {"pergunta": "Qual é a taxa real anual do CDB?", "comeco": "Descontando a inflação, o CDB…"},
          {"pergunta": "Qual é a taxa real anual do fundo?", "comeco": "Sem arredondar o fator anual, o fundo…"},
          {"pergunta": "Qual oferta você recomenda, indicando a vantagem em pontos percentuais de ganho real?", "comeco": "Marta, eu escolheria…"}
        ],
        "dica": "Componha 12 meses do fundo. Para cada oferta, divida o fator anual pelo fator da inflação, 1,05. Arredonde apenas as respostas.",
        "contas": [
          {"conta": "(1.01 ** 12 - 1) * 100", "resultado": "12,68"},
          {"conta": "(1.12 / 1.05 - 1) * 100", "resultado": "6,67"},
          {"conta": "(1.01 ** 12 / 1.05 - 1) * 100", "resultado": "7,32"},
          {"conta": "7.32 - 6.67", "resultado": "0,65"}
        ],
        "resposta_comentada": "**Passo 1.** Fundo: (1,01^12 − 1) × 100 = **12,68% ao ano**. Os juros de cada mês também rendem nos meses seguintes.\n\n**Passo 2.** CDB: (1,12 ÷ 1,05 − 1) × 100 = **6,67% reais ao ano**.\n\n**Passo 3.** Fundo: (1,01^12 ÷ 1,05 − 1) × 100 = **7,32% reais ao ano**. Use a potência sem arredondar antes da divisão.\n\n**Passo 4.** Marta, eu escolheria o fundo nas condições do exercício. Usando as taxas arredondadas, sua vantagem é 7,32 − 6,67 = **0,65 ponto percentual** de ganho real anual. Assim, o dinheiro compra mais ao fim do ano."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "Em juros simples, converta proporcionalmente: divida para períodos menores e multiplique para maiores.",
        "Em juros compostos, use (1 + i)^(QUERO ÷ TENHO) − 1, contando os períodos na mesma unidade de tempo.",
        "Nominal com capitalização: primeiro divida pelo número de incorporações; depois componha até o prazo pedido.",
        "Para acumular taxas, multiplique seus fatores e subtraia 1; não some os percentuais.",
        "Fisher: ganho real = fator nominal dividido pelo fator da inflação, menos 1. Use taxas do mesmo período e arredonde só no fim."
      ],
      "glossario": [
        {"termo": "Taxas proporcionais", "def": "Taxas que acompanham a duração do período por divisão ou multiplicação, usadas em juros simples."},
        {"termo": "Taxas equivalentes", "def": "Taxas de períodos diferentes que dão o mesmo valor final para o mesmo capital e prazo; em juros compostos, usam potência."},
        {"termo": "Capitalização", "def": "Incorporação dos juros ao dinheiro que passa a render."},
        {"termo": "Taxa nominal", "def": "Na capitalização, anúncio em período diferente da incorporação dos juros; no Fisher, ganho antes de considerar a inflação."},
        {"termo": "Taxa efetiva", "def": "Ganho de fato em um período, considerando a capitalização."},
        {"termo": "Taxa real", "def": "Ganho ou perda de poder de compra, depois de considerar a inflação."},
        {"termo": "Ponto percentual", "def": "Unidade da diferença entre duas taxas escritas em percentual."}
      ]
    }
  ]
};
