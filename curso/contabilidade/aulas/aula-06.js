(window.CURSO_AULAS = window.CURSO_AULAS || {})["06"] = {
  "n": "06",
  "parte": "B",
  "titulo": "Lucro não é caixa (DFC)",
  "objetivo": "Classificar transações nas três atividades da DFC e calcular o caixa operacional pelo método direto.",
  "minutos": 35,
  "cartoes_removidos": [[23, 24, 25]],
  "tabelas": {
    "janeiro_fevereiro": {
      "fonte": "nenhum",
      "titulo": "Uma compra, duas vendas: competência e caixa (R$)",
      "colunas": ["Linha", "Janeiro", "Fevereiro"],
      "numericas": [1, 2],
      "linhas": [
        ["Receita: valor vendido", "7.000,00", "3.500,00"],
        ["Custo das mercadorias vendidas", "−4.000,00", "−2.000,00"],
        ["Lucro do mês", "3.000,00", "1.500,00"],
        ["Lucro acumulado", "3.000,00", "4.500,00"],
        ["Entradas de dinheiro", "3.500,00", "7.000,00"],
        ["Saídas de dinheiro", "−6.000,00", "0,00"],
        ["Fluxo de caixa do mês", "−2.500,00", "7.000,00"],
        ["Fluxo de caixa acumulado", "−2.500,00", "4.500,00"]
      ]
    },
    "classificacao": {
      "fonte": "nenhum",
      "titulo": "Classifique pela finalidade, não pelo sinal",
      "colunas": ["Movimento de dinheiro", "Atividade"],
      "numericas": [],
      "linhas": [
        ["Receber de clientes; pagar fornecedores, salários e impostos", "Operacional"],
        ["Receber juros de aplicações financeiras", "Operacional"],
        ["Comprar ou vender máquinas, veículos e terrenos", "Investimento"],
        ["Comprar ou vender participação em outra empresa", "Investimento"],
        ["Emprestar dinheiro a terceiros; receber sua devolução", "Investimento"],
        ["Receber empréstimo; devolver seu principal", "Financiamento"],
        ["Receber capital pela emissão de ações", "Financiamento"],
        ["Pagar dividendos aos sócios", "Financiamento"]
      ]
    },
    "q7": {
      "fonte": "nenhum",
      "titulo": "Pré-aula 04, Q7 — movimentos do ano (R$)",
      "colunas": ["Movimento", "Valor"],
      "numericas": [1],
      "linhas": [
        ["Recebimentos de clientes", "300.000,00"],
        ["Pagamentos a fornecedores", "150.000,00"],
        ["Salários pagos", "50.000,00"],
        ["Compra de máquinas à vista", "80.000,00"],
        ["Empréstimos recebidos", "100.000,00"]
      ]
    },
    "q10": {
      "fonte": "nenhum",
      "titulo": "Pré-aula 04, Q10 — movimentos do mês (R$)",
      "colunas": ["Movimento", "Valor"],
      "numericas": [1],
      "linhas": [
        ["Recebimento de clientes", "85.000,00"],
        ["Pagamento a fornecedores", "38.000,00"],
        ["Pagamento de salários", "22.000,00"],
        ["Pagamento de impostos", "7.500,00"],
        ["Compra de máquina à vista", "18.000,00"],
        ["Venda de veículo à vista", "9.000,00"],
        ["Empréstimo recebido", "25.000,00"],
        ["Pagamento do principal de empréstimo", "10.000,00"]
      ]
    },
    "q9": {
      "fonte": "nenhum",
      "titulo": "Pré-aula 04, Q9 — trimestre (R$)",
      "colunas": ["Item", "Valor", "Condição"],
      "numericas": [1],
      "linhas": [
        ["Saldo inicial de caixa", "25.000,00", "Dinheiro disponível no início"],
        ["Vendas", "90.000,00", "60% à vista; 40% a prazo"],
        ["Recebimento da parte a prazo", "27.000,00", "75% das vendas a prazo recebidos no trimestre"],
        ["Compras de mercadorias", "48.000,00", "70% pagos no trimestre"],
        ["Salários", "14.500,00", "Pagos no trimestre"],
        ["Depreciação", "3.000,00", "Despesa registrada no trimestre"],
        ["Compra de veículo", "20.000,00", "50% pagos à vista; restante financiado sem passar pelo caixa"],
        ["Venda de equipamento antigo", "8.000,00", "Recebida à vista"]
      ]
    },
    "cenarios": {
      "fonte": "nenhum",
      "titulo": "Duas empresas em três cenários da economia (mesma unidade monetária)",
      "colunas": ["Empresa e fluxo", "Normal", "Recessão branda", "Recessão intensa"],
      "numericas": [1, 2, 3],
      "linhas": [
        ["Empresa 1 — FCO", "500", "350", "50"],
        ["Empresa 1 — FCI", "−200", "−120", "50"],
        ["Empresa 1 — FCF", "−50", "−100", "−80"],
        ["Empresa 1 — variação total", "250", "130", "20"],
        ["Empresa 2 — FCO", "30", "−150", "−500"],
        ["Empresa 2 — FCI", "−150", "30", "300"],
        ["Empresa 2 — FCF", "150", "100", "100"],
        ["Empresa 2 — variação total", "30", "−20", "−100"]
      ]
    },
    "marta": {
      "fonte": "nenhum",
      "titulo": "Loja de Marta — o que foi registrado e o que foi pago no ano (R$)",
      "colunas": ["Item", "Valor", "O que aconteceu"],
      "numericas": [1],
      "linhas": [
        ["Vendas do ano", "300.000,00", "Receita: valor vendido, recebido ou não"],
        ["Recebimentos de clientes", "265.000,00", "Dinheiro que entrou pelas vendas"],
        ["Custo das mercadorias vendidas", "180.000,00", "Custo da parte vendida"],
        ["Pagamentos a fornecedores", "190.000,00", "Pagos por mercadorias; parte continua no estoque"],
        ["Salários", "40.000,00", "Despesa do ano, toda paga"],
        ["Impostos", "10.000,00", "Despesa do ano, toda paga"],
        ["Depreciação", "10.000,00", "Despesa registrada, sem pagamento"],
        ["Lucro líquido", "60.000,00", "Vendas menos custo e despesas"],
        ["Compra de equipamento", "30.000,00", "Paga à vista"],
        ["Empréstimo", "20.000,00", "Recebido em dinheiro"],
        ["Dividendos", "10.000,00", "Lucro distribuído e pago aos sócios"]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Cadê o dinheiro?",
      "texto": "Marta viu R$ 60.000,00 de [[lucro|Resultado das vendas depois dos custos e despesas.]]: o resultado depois de descontar custos e despesas das vendas. Mas o [[caixa|Dinheiro disponível da empresa.]], o dinheiro disponível, cresceu só R$ 5.000,00. Você vai explicar essa diferença antes de ela decidir retirar mais dinheiro da loja.",
      "quadrinho": [
        {"quem": "dona", "fala": "Lucrei R$ 60 mil no ano, mas o caixa só subiu R$ 5 mil. Cadê o dinheiro? Posso retirar mais?"},
        {"quem": "voce", "fala": "Vamos separar o que a loja vendeu do que recebeu e acompanhar cada pagamento."}
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "Vender não significa receber agora",
      "texto": "Marta compra mercadorias por R$ 6.000,00 em janeiro. Vende uma parte por R$ 7.000,00; essa parte custou R$ 4.000,00. A [[receita|Valor das vendas realizadas no período.]] é o valor vendido. O [[regime de competência|Registro da venda e do consumo no período em que acontecem.]] registra a venda e o custo do que foi vendido, mesmo sem pagamento. O lucro de janeiro é 7.000 − 4.000 = R$ 3.000,00. Neste exemplo, sem outras despesas: **lucro = receita − custo das mercadorias vendidas**.",
      "atencao": "Mercadoria que continua guardada é estoque: ainda não virou custo de uma venda. Não desconte toda a compra ao calcular o lucro."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa comprou R$ 12.000,00 em mercadorias à vista. Vendeu 60% delas por R$ 10.800,00, recebendo 40% à vista. Sem outras despesas, calcule o lucro por competência. (Simulado Q20)",
        "unidade": "R$", "casas": 2, "resposta": 3600,
        "calculo": "10800 - 12000 * 0.60",
        "explicacao": "Use o custo da parte vendida: 10.800 − 12.000 × 0,60 = **R$ 3.600,00**. Os 40% recebidos não mudam a receita por competência. Descontar a compra inteira trataria mercadorias ainda guardadas como vendidas."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa vendeu produtos por R$ 25.000,00, com custo de R$ 16.000,00. Recebeu 30% à vista e receberá o restante em 60 dias. Sem outras despesas, calcule o lucro por competência. (Simulado Q21)",
        "unidade": "R$", "casas": 2, "resposta": 9000,
        "calculo": "25000 - 16000",
        "explicacao": "A venda inteira e o custo dos produtos vendidos pertencem ao mês: 25.000 − 16.000 = **R$ 9.000,00**. O prazo de recebimento não muda esse lucro."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quando o dinheiro entra e sai?",
      "texto": "No exemplo de janeiro, Marta pagou a compra inteira, mas recebeu só metade da venda. O [[regime de caixa|Registro pelo recebimento ou pagamento efetivo.]] acompanha o dinheiro quando entra ou sai. O [[fluxo de caixa|Entradas menos saídas de dinheiro em um período.]] mede essa diferença: 3.500 − 6.000 = R$ −2.500,00. Assim, **fluxo de caixa = recebimentos − pagamentos**. Em fevereiro, recebe os R$ 3.500,00 pendentes e vende o estoque restante por R$ 3.500,00 à vista. A tabela acompanha os dois meses.",
      "tabela": "janeiro_fevereiro",
      "atencao": "Acumulado significa somado desde janeiro. Neste exemplo, tudo foi vendido, recebido e pago: lucro e fluxo acumulados chegam a R$ 4.500,00. Isso não vale automaticamente quando há empréstimos, equipamentos ou outros movimentos."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa pagou R$ 12.000,00 por mercadorias. Vendeu 60% delas por R$ 10.800,00, recebendo 40% no mês e o restante depois. Sem outros movimentos, calcule o fluxo de caixa do mês; use sinal negativo se o caixa diminuir. (Simulado Q20)",
        "unidade": "R$", "casas": 2, "resposta": -7680,
        "calculo": "10800 * 0.40 - 12000",
        "explicacao": "Conte só dinheiro recebido e pago: 10.800 × 0,40 − 12.000 = **R$ −7.680,00**. Saiu o pagamento da compra inteira, inclusive das mercadorias ainda não vendidas. O sinal negativo indica redução de caixa."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa vendeu produtos por R$ 25.000,00, com custo de R$ 16.000,00, recebendo 30% à vista e o restante em 60 dias. Calcule apenas quanto entrou no caixa no mês da venda. (Simulado Q21)",
        "unidade": "R$", "casas": 2, "resposta": 7500,
        "calculo": "25000 * 0.30",
        "explicacao": "Recebimento no mês = 25.000 × 0,30 = **R$ 7.500,00**. A pergunta pede a entrada, não o lucro nem o saldo final. O custo não é descontado dessa entrada."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O dinheiro do dia a dia",
      "texto": "Marta recebe R$ 1.000,00 de clientes e paga R$ 600,00 aos fornecedores, que vendem mercadorias à loja. São [[atividades operacionais|Movimentos de dinheiro ligados ao dia a dia do negócio.]]: recebimentos e pagamentos ligados à atividade que gera vendas. Salários, aluguel e impostos pagos também entram nesse grupo. Pela convenção da prova, juros recebidos de aplicações financeiras, o dinheiro ganho por deixar recursos aplicados, são operacionais.",
      "exemplo": "Receber uma venda antiga continua sendo operacional: a classificação depende da origem do dinheiro, não da data da venda."
    },
    {
      "tipo": "conceito",
      "titulo": "Comprar e vender bens de uso duradouro",
      "texto": "Marta paga R$ 5.000,00 por uma máquina para usar na loja. A máquina faz parte do [[imobilizado|Bens físicos usados no negócio por vários períodos.]], bens físicos usados durante vários períodos. Comprar ou vender esses bens são [[atividades de investimento|Compra e venda de bens duradouros e outros investimentos.]]. Vender uma máquina também é investimento: entra dinheiro, mas não veio da venda habitual de mercadorias. Comprar ou vender participação societária, uma parte de outra empresa, entra aqui. Emprestar dinheiro a terceiros e receber sua devolução também.",
      "atencao": "Estoque é mercadoria para vender; máquina é um bem para usar. Pagar mercadorias é operacional. Pagar uma máquina é investimento."
    },
    {
      "tipo": "conceito",
      "titulo": "Dinheiro dos bancos e dos sócios",
      "texto": "Marta recebe R$ 2.000,00 emprestados. Receber e devolver dinheiro de bancos ou sócios são [[atividades de financiamento|Entradas e saídas de recursos de credores e sócios.]]. A [[amortização de empréstimo|Devolução do valor emprestado, sem os juros.]] paga o principal, o valor emprestado sem juros. [[Dividendos|Parte do lucro distribuída aos sócios.]] são parcelas do lucro distribuídas aos sócios; seu pagamento é financiamento. Ações representam partes da própria empresa: emitir novas ações e receber dinheiro dos sócios aumenta o capital, os recursos que eles investiram.",
      "tabela": "classificacao",
      "atencao": "Empréstimo recebido é financiamento. Empréstimo concedido a outra empresa é investimento. A direção da operação muda a classificação."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Classifique, nesta ordem: (a) pagamento de fornecedores; (b) recebimento pela venda de máquina do imobilizado; (c) pagamento de dividendos; (d) recebimento de clientes; (e) empréstimo bancário de longo prazo recebido. (Simulado Q17)",
        "opcoes": [
          "Operacional; operacional; financiamento; operacional; financiamento",
          "Operacional; investimento; operacional; operacional; financiamento",
          "Operacional; investimento; financiamento; operacional; financiamento",
          "Operacional; investimento; financiamento; operacional; investimento"
        ],
        "correta": 2,
        "explicacao": "Clientes e fornecedores, (a) e (d), pertencem ao dia a dia: operacional. Vender uma máquina (b) é investimento, mesmo trazendo dinheiro. Pagar dividendos (c) e receber empréstimo (e) são movimentos com sócios e bancos: financiamento."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Classifique, nesta ordem, segundo a convenção da prova: (a) compra de terreno à vista para expansão; (b) pagamento de salários; (c) amortização de empréstimo bancário; (d) recebimento de juros de aplicações financeiras; (e) emissão de novas ações com entrada de dinheiro. (Simulado Q18)",
        "opcoes": [
          "Investimento; operacional; financiamento; investimento; financiamento",
          "Investimento; operacional; financiamento; operacional; financiamento",
          "Investimento; operacional; operacional; operacional; financiamento",
          "Operacional; operacional; financiamento; operacional; financiamento"
        ],
        "correta": 1,
        "explicacao": "Terreno para expansão (a) é investimento; salários (b) são operacionais. Pagar o principal de empréstimos (c) e receber dinheiro pela emissão de ações (e) são financiamento. A pegadinha é (d): na prova, juros recebidos de aplicações são operacionais, não investimento."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Classifique, nesta ordem: recebimento de vendas; amortização de empréstimo; venda de participação em outra empresa; pagamento a funcionários. (Pré-aula 04, Q6)",
        "opcoes": [
          "Operacional; operacional; investimento; operacional",
          "Operacional; financiamento; investimento; investimento",
          "Operacional; financiamento; investimento; operacional",
          "Operacional; investimento; financiamento; operacional"
        ],
        "correta": 2,
        "explicacao": "Vendas recebidas e salários pagos são operacionais. Amortizar empréstimo é devolver principal: financiamento. Vender participação em outra empresa é investimento. Nem todo pagamento é operacional."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Registrar uma despesa não significa pagar",
      "texto": "Uma máquina perde valor com o uso. A [[depreciação|Despesa que distribui o valor de um bem físico ao longo do uso.]] registra esse consumo como despesa, sem novo pagamento. A amortização de intangível faz algo semelhante com um direito sem forma física, como software comprado. Uma [[provisão|Registro de uma obrigação provável com valor ou prazo incerto.]] registra uma obrigação provável, como uma indenização; registrá-la, o que se chama constituir a provisão, não significa pagá-la. Esses registros podem reduzir o lucro sem tirar dinheiro naquele momento.",
      "atencao": "Venda a prazo ainda não recebida e compra a prazo ainda não paga também não movimentam caixa. Amortização de intangível é diferente de amortização de empréstimo: esta devolve dinheiro ao banco."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Qual operação não altera o caixa da empresa no período? (Pré-aula 04, Q3)",
        "opcoes": [
          "Pagamento de fornecedores",
          "Recebimento de clientes por transferência bancária",
          "Depreciação do imobilizado registrada",
          "Pagamento de salários",
          "Compra de mercadorias paga no ato"
        ],
        "correta": 2,
        "explicacao": "A depreciação é uma despesa sem pagamento no momento do registro. As demais alternativas descrevem entradas ou saídas efetivas de dinheiro."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Qual operação diminui o caixa? (Pré-aula 04, Q5)",
        "opcoes": [
          "Recebimento de vendas feitas a prazo",
          "Pagamento de dividendos aos sócios",
          "Entrada de dinheiro dos sócios para aumentar o capital",
          "Venda de veículo com recebimento à vista",
          "Registro de despesa de depreciação"
        ],
        "correta": 1,
        "explicacao": "Pagar dividendos tira dinheiro da empresa e é financiamento. Receber vendas, dinheiro dos sócios ou o preço de um veículo aumenta o caixa. Registrar depreciação não movimenta dinheiro."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "multipla",
        "enunciado": "Marque os grupos em que todas as situações alteram o caixa no período. (Pré-aula 04, Q8)",
        "opcoes": [
          "Pagamento de fornecedores e recebimento de clientes",
          "Registro de depreciação de máquinas",
          "Compra de veículo à vista e pagamento do principal de empréstimo",
          "Constituição de provisão para indenização provável",
          "Registro de venda ainda não recebida e amortização de intangível"
        ],
        "corretas": [0, 2],
        "explicacao": "Movimentam dinheiro o pagamento a fornecedores, o recebimento de clientes, a compra à vista e a devolução do principal ao banco. Depreciação, provisão, venda ainda não recebida e amortização de intangível são registros sem caixa nesses eventos."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O relatório que acompanha o dinheiro",
      "texto": "Marta começa com R$ 100,00, gera R$ 40,00 operando, gasta R$ 30,00 em equipamento e recebe R$ 20,00 emprestados. Termina com R$ 130,00. A [[DFC|Demonstração dos Fluxos de Caixa: explica a mudança do dinheiro disponível.]] organiza esse caminho. FCO é fluxo operacional; FCI, de investimento; FCF, de financiamento. Cada fluxo soma entradas e desconta saídas do grupo. Saldo é dinheiro disponível numa data. **Saldo inicial + FCO + FCI + FCF = saldo final**: 100 + 40 − 30 + 20 = 130.",
      "diagrama": {"tipo": "fluxo", "etapas": ["Saldo inicial", "Somar FCO", "Somar FCI", "Somar FCF", "Saldo final"], "nota": "Some cada fluxo com seu sinal: positivo aumenta o dinheiro; negativo diminui."},
      "exemplo": "O saldo final corresponde ao caixa e equivalentes do Balanço Patrimonial, o relatório de bens, direitos e obrigações numa data. Equivalentes são aplicações de curtíssimo prazo, prontamente convertíveis em dinheiro e com risco insignificante de mudança de valor."
    },
    {
      "tipo": "conceito",
      "titulo": "Método direto: conte recebimentos e pagamentos",
      "texto": "Marta recebeu R$ 1.000,00 de clientes e pagou R$ 600,00 a fornecedores. Sem outros movimentos operacionais, sobram R$ 400,00. O [[método direto|Apresentação do caixa operacional pelos recebimentos e pagamentos efetivos.]] mostra os recebimentos e pagamentos de cada tipo. **FCO = recebimentos operacionais − pagamentos operacionais**: 1.000 − 600 = R$ 400,00. Compra de equipamento e empréstimo não entram nessa conta, pois pertencem a outros grupos da DFC.",
      "atencao": "Fluxo líquido é o resultado das entradas menos as saídas de um grupo. Não confunda FCO com a variação total do dinheiro, que inclui investimento e financiamento."
    },
    {
      "tipo": "pratica",
      "tabela": "q7",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule o fluxo líquido das atividades operacionais da empresa com os movimentos da tabela. (Pré-aula 04, Q7)",
        "unidade": "R$", "casas": 2, "resposta": 100000,
        "calculo": "300000 - 150000 - 50000",
        "explicacao": "FCO = 300.000 − 150.000 − 50.000 = **R$ 100.000,00**. A compra de máquinas é investimento; o empréstimo recebido é financiamento. Misturá-los ao FCO mudaria a pergunta respondida."
      }
    },
    {
      "tipo": "pratica",
      "tabela": "q10",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule o fluxo operacional do mês com os movimentos da tabela. (Pré-aula 04, Q10)",
        "unidade": "R$", "casas": 2, "resposta": 17500,
        "calculo": "85000 - 38000 - 22000 - 7500",
        "explicacao": "FCO = 85.000 − 38.000 − 22.000 − 7.500 = **R$ 17.500,00**. Para comparar: FCI = 9.000 − 18.000 = −9.000; FCF = 25.000 − 10.000 = 15.000. O operacional apresenta a maior entrada líquida."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Compra parcelada: quanto saiu agora?",
      "texto": "Marta compra um veículo por R$ 20.000,00: paga metade agora e fica devendo o restante, sem receber esse financiamento em dinheiro. Só R$ 10.000,00 saíram do caixa. Para achar o saldo final, comece com o dinheiro inicial e inclua apenas os recebimentos e pagamentos efetivos. Se parte das vendas a prazo já foi recebida no período, essa parte entra. A depreciação não entra como pagamento.",
      "atencao": "Não invente uma entrada de empréstimo para a parcela financiada que não passou pelo caixa. O valor total do bem e o pagamento do período são coisas diferentes."
    },
    {
      "tipo": "pratica",
      "tabela": "q9",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule o saldo final de caixa do trimestre com os dados da tabela. Conte a parte recebida das vendas a prazo uma única vez. (Pré-aula 04, Q9)",
        "unidade": "R$", "casas": 2, "resposta": 55900,
        "calculo": "25000 + 90000 * 0.60 + 90000 * 0.40 * 0.75 - 48000 * 0.70 - 14500 - 20000 * 0.50 + 8000",
        "explicacao": "Saldo final = 25.000 + 90.000 × 0,60 + 90.000 × 0,40 × 0,75 − 48.000 × 0,70 − 14.500 − 20.000 × 0,50 + 8.000 = **R$ 55.900,00**. Ignore a depreciação e a parte financiada sem passagem pelo caixa."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "De onde vem o dinheiro que sustenta a empresa?",
      "texto": "Vender uma máquina pode trazer dinheiro uma vez; vender mercadorias sustenta o dia a dia. [[Qualidade do lucro|Consistência do resultado da atividade principal, com pouco efeito de eventos únicos.]] significa olhar se o resultado vem da atividade principal e se repete, sem depender de acontecimentos únicos. Recessão é uma queda da atividade econômica. Na tabela, a Empresa 1 mantém FCO positivo mesmo na recessão intensa. A Empresa 2 passa a vender bens e tomar dívida para cobrir uma operação que consome dinheiro.",
      "tabela": "cenarios",
      "atencao": "FCI negativo pode significar investimento no negócio. FCF positivo pode significar dívida nova. Um sinal isolado não define saúde: observe os três fluxos e sua continuidade ao longo dos períodos."
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, teve lucro líquido de R$ 60.000,00 no ano, mas o extrato mostra aumento de só R$ 5.000,00 no dinheiro disponível. Ela quer entender a diferença antes de retirar mais dinheiro. A tabela traz o que foi registrado e o que foi recebido ou pago; não há outros movimentos. Monte a DFC pelo método direto: conte só o dinheiro que entrou ou saiu.",
        "enunciado": "Monte os três fluxos pelo método direto e explique a Marta por que o caixa cresceu menos que o lucro.",
        "tabela": "marta",
        "passos": [
          {"pergunta": "Quais linhas são recebimentos e pagamentos do dia a dia, e quanto dá o FCO?", "comeco": "O caixa operacional é…"},
          {"pergunta": "Qual é o fluxo de investimento da compra do equipamento?", "comeco": "O fluxo de investimento é…"},
          {"pergunta": "Qual é o fluxo de financiamento, considerando empréstimo e dividendos?", "comeco": "O fluxo de financiamento é…"},
          {"pergunta": "Quanto o caixa variou no ano, e por que ficou abaixo do lucro?", "comeco": "Marta, somando os três fluxos…"}
        ],
        "dica": "No FCO entram só recebimentos de clientes e pagamentos a fornecedores, salários e impostos. Vendas, custo das mercadorias vendidas, depreciação e lucro são registros, não dinheiro.",
        "contas": [
          {"conta": "265000 - 190000 - 40000 - 10000", "resultado": "25.000,00"},
          {"conta": "0 - 30000", "resultado": "−30.000,00"},
          {"conta": "20000 - 10000", "resultado": "10.000,00"},
          {"conta": "25000 - 30000 + 10000", "resultado": "5.000,00"},
          {"conta": "300000 - 265000", "resultado": "35.000,00"},
          {"conta": "190000 - 180000", "resultado": "10.000,00"}
        ],
        "resposta_comentada": "**Passo 1.** FCO = 265.000,00 recebidos − 190.000,00 a fornecedores − 40.000,00 de salários − 10.000,00 de impostos = R$ 25.000,00. Vendas, custo das mercadorias vendidas, depreciação e lucro ficam fora: são registros, não dinheiro que entrou ou saiu.\n\n**Passo 2.** O equipamento foi pago à vista: FCI = R$ −30.000,00. É investimento, não pagamento operacional.\n\n**Passo 3.** FCF = 20.000,00 do empréstimo − 10.000,00 de dividendos = R$ 10.000,00.\n\n**Passo 4.** Marta, 25.000,00 − 30.000,00 + 10.000,00 = R$ 5.000,00. Vendas de R$ 35.000,00 ainda não foram recebidas, R$ 10.000,00 pagos viraram mercadoria no estoque, e equipamento e dividendos levaram dinheiro. Lucro não é dinheiro para retirar."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "Competência acompanha vendas e consumo; caixa acompanha recebimentos e pagamentos. Lucro não é dinheiro disponível.",
        "Operacional é o dia a dia; investimento inclui bens duradouros; financiamento envolve recursos de bancos e sócios. Na prova, juros recebidos são operacionais e dividendos pagos são financiamento.",
        "No método direto, FCO = recebimentos operacionais − pagamentos operacionais. Depreciação, provisões, vendas ainda não recebidas e compras ainda não pagas ficam fora: não movimentam dinheiro.",
        "Saldo inicial + FCO + FCI + FCF = saldo final de caixa do balanço.",
        "Leia a origem do dinheiro: receber empréstimos ou vender equipamentos não substitui uma operação que gera caixa de forma consistente."
      ],
      "glossario": [
        {"termo": "DFC", "def": "Demonstração dos Fluxos de Caixa: explica as entradas, saídas e a mudança do saldo de dinheiro."},
        {"termo": "FCO", "def": "Fluxo de caixa das atividades operacionais, ligadas ao dia a dia do negócio."},
        {"termo": "FCI", "def": "Fluxo de caixa das atividades de investimento, como comprar e vender equipamentos."},
        {"termo": "FCF", "def": "Fluxo de caixa das atividades de financiamento, como empréstimos e dividendos pagos."},
        {"termo": "Método direto", "def": "Calcula o FCO somando os recebimentos e descontando os pagamentos operacionais efetivos."}
      ]
    }
  ]
};
