(window.CURSO_AULAS = window.CURSO_AULAS || {})["10"] = {
  "n": "10",
  "parte": "C",
  "titulo": "Capital de giro e ciclos",
  "objetivo": "Calcular CGL, NIG, saldo em tesouraria, prazos e ciclos para explicar o dinheiro preso na operação e classificar a gestão.",
  "minutos": 40,
  "tabelas": {
    "contas_q4": {
      "fonte": "nenhum",
      "titulo": "Contas de curto prazo — pré-aula 08, Q4",
      "colunas": ["Conta", "Valor (R$)"],
      "numericas": [1],
      "linhas": [
        ["Caixa", "1.800,00"],
        ["Aplicações financeiras", "700,00"],
        ["Clientes", "6.200,00"],
        ["Estoques", "4.800,00"],
        ["Fornecedores", "3.500,00"],
        ["Salários a pagar", "1.900,00"],
        ["Impostos a pagar", "1.600,00"],
        ["Empréstimos de curto prazo", "2.000,00"]
      ]
    },
    "variacao_q5": {
      "fonte": "nenhum",
      "titulo": "Saldos operacionais — pré-aula 08, Q5",
      "colunas": ["Grupo", "Inicial (R$)", "Final (R$)"],
      "numericas": [1, 2],
      "linhas": [["ACO", "9.000,00", "11.500,00"], ["PCO", "6.200,00", "7.000,00"]]
    },
    "gestoes": {
      "fonte": "nenhum",
      "titulo": "Gestões com NIG positiva — classificação do curso",
      "colunas": ["Gestão", "Condição", "Como financia a NIG", "ST"],
      "numericas": [],
      "linhas": [
        ["Equilibrada", "CGL igual à NIG", "Longo prazo cobre exatamente a NIG", "Zero"],
        ["Conservadora", "CGL maior que a NIG", "Longo prazo cobre a NIG e sobra", "Positivo"],
        ["Agressiva", "CGL não negativo, menor que a NIG", "Parte da NIG depende de dívida financeira de curto prazo", "Negativo"],
        ["Muito agressiva", "CGL negativo", "Toda a NIG depende de recursos de curto prazo", "Negativo"]
      ]
    },
    "marta": {
      "fonte": "nenhum",
      "titulo": "Loja de Marta — únicas contas operacionais de curto prazo",
      "colunas": ["Conta", "Antes (R$)", "Depois (R$)"],
      "numericas": [1, 2],
      "linhas": [
        ["Clientes a receber", "80.000,00", "120.000,00"],
        ["Estoques", "60.000,00", "90.000,00"],
        ["Fornecedores a pagar", "50.000,00", "65.000,00"]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Vendeu mais. Cadê o dinheiro?",
      "texto": "Marta vendeu mais, mas parte dos compradores ainda vai pagar. Enquanto espera, ela precisa pagar as mercadorias e os funcionários. Você vai descobrir quanto dinheiro ficou comprometido nessa espera e como mudar os prazos da loja.",
      "quadrinho": [
        {"quem": "dona", "fala": "Meus clientes ainda vão pagar R$ 120.000,00. Vendi mais, mas o dinheiro sumiu! Preciso de empréstimo ou consigo ajustar os prazos?"},
        {"quem": "voce", "fala": "Vamos separar o que falta receber, o que está nas prateleiras e o que ainda podemos pagar depois."}
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "O que sobra para o curto prazo?",
      "texto": "Marta tem R$ 1.000,00 em dinheiro, valores a receber e mercadorias: seu [[ativo circulante|AC: bens e direitos de curto prazo.]] (AC). Deve R$ 600,00 no curto prazo: seu [[passivo circulante|PC: obrigações de curto prazo.]] (PC). Aqui, curto prazo significa até um ano. O [[capital de giro líquido|CGL: diferença entre AC e PC.]] (CGL) mede a diferença: 1.000 − 600 = R$ 400,00. **CGL = AC − PC.** Esse valor indica recursos de longo prazo sustentando o curto prazo; não significa dinheiro disponível agora.",
      "atencao": "Recursos de longo prazo vêm dos sócios ou de dívidas que vencem depois de um ano. Quem paga mercadorias antes de receber pelas vendas precisa de dinheiro para sustentar essa espera."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresenta ativo circulante de R$ 1.200,00 e passivo circulante de R$ 750,00. Calcule o CGL. (Pré-aula 08, Q1.)",
        "unidade": "R$", "casas": 2, "resposta": 450,
        "calculo": "1200 - 750",
        "explicacao": "CGL = AC − PC = 1.200 − 750 = **R$ 450,00**. Subtraia as obrigações dos recursos de curto prazo; somar os dois valores não mede a folga."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Comprar e vender ou aplicar e tomar dinheiro?",
      "texto": "Na loja, clientes são valores a receber; estoques são mercadorias guardadas. Fornecedores são compras ainda não pagas. São contas operacionais: surgem do funcionamento da loja. Separe quatro grupos de curto prazo:\n- [[ACO|Ativo circulante operacional.]]: clientes e estoques.\n- [[PCO|Passivo circulante operacional.]]: fornecedores, salários e impostos a pagar, obrigações que permitem pagar depois.\n- [[ACF|Ativo circulante financeiro.]]: caixa, dinheiro disponível, e aplicações, dinheiro investido para render.\n- [[PCF|Passivo circulante financeiro.]]: empréstimos, dinheiro tomado que deve ser devolvido com juros, o valor cobrado pelo empréstimo.",
      "atencao": "Na prova, caixa e aplicações são financeiros. Só trate caixa como operacional quando o enunciado disser explicitamente que é caixa operacional."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Classifique as contas de curto prazo pelos grupos do curso. (Pré-aula 08, Q4.)",
        "pares": [
          ["Clientes e estoques", "ACO"],
          ["Caixa e aplicações financeiras", "ACF"],
          ["Fornecedores, salários e impostos a pagar", "PCO"],
          ["Empréstimos de curto prazo", "PCF"]
        ],
        "explicacao": "Clientes e estoques prendem recursos na operação; fornecedores, salários e impostos a pagar dão prazo à loja. Caixa e aplicações pertencem ao ACF; empréstimos, ao PCF."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto a operação precisa financiar?",
      "texto": "Marta mantém R$ 100,00 em clientes e estoques (ACO). Fornecedores e outras contas operacionais permitem pagar R$ 70,00 depois (PCO). Faltam 100 − 70 = R$ 30,00 para sustentar a operação. Essa diferença é a [[NIG|Necessidade de investimento em giro: ACO menos PCO.]], necessidade de investimento em giro. **NIG = ACO − PCO.** Subtraímos o PCO porque esse prazo já financia parte da operação. Caixa, aplicações e empréstimos não entram nessa conta.",
      "diagrama": {
        "tipo": "lado_a_lado",
        "esquerda": {"titulo": "NIG positiva", "itens": ["ACO maior que PCO", "A operação precisa de recursos adicionais"]},
        "direita": {"titulo": "NIG negativa", "itens": ["PCO maior que ACO", "A operação fornece recursos para outros usos"]},
        "nota": "NIG negativa significa que os prazos operacionais financiam mais do que clientes e estoques exigem."
      }
    },
    {
      "tipo": "pratica",
      "tabela": "contas_q4",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule a NIG da empresa usando as contas da tabela. (Pré-aula 08, Q4.)",
        "unidade": "R$", "casas": 2, "resposta": 4000,
        "calculo": "(6200 + 4800) - (3500 + 1900 + 1600)",
        "explicacao": "NIG = (6.200 + 4.800) − (3.500 + 1.900 + 1.600) = 11.000 − 7.000 = **R$ 4.000,00**. Caixa, aplicações e empréstimos são financeiros: não entram na NIG."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Uma NIG positiva indica qual situação? (Pré-aula 08, Q3.)",
        "opcoes": [
          "O PCO é maior que o ACO.",
          "A operação não precisa de recursos além do prazo das contas operacionais.",
          "Parte do ACO não é financiada pelo PCO.",
          "A empresa tem excesso de caixa disponível."
        ],
        "correta": 2,
        "explicacao": "NIG positiva significa ACO maior que PCO: os prazos das contas operacionais não cobrem tudo. PCO maior que ACO indicaria NIG negativa. Excesso de caixa é uma informação financeira, fora do cálculo da NIG."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Por que aumentar a NIG consome dinheiro?",
      "texto": "No exemplo do curso, a NIG passa de R$ 3.700,00 para R$ 5.500,00. A [[variação da NIG|ΔNIG: NIG final menos NIG inicial.]], escrita ΔNIG, compara o final com o início: 5.500 − 3.700 = R$ 1.800,00. A operação passou a exigir esse dinheiro adicional. O efeito sobre o caixa tem sinal contrário: −1.800,00. **Impacto no caixa = −ΔNIG.** Aumento da necessidade consome dinheiro; redução libera dinheiro. Esse impacto isolado não é a variação total do dinheiro da empresa.",
      "atencao": "O slide chama a variação de diferença entre CGL final e inicial. A conta correta usa NIG final menos NIG inicial. Não troque NIG por CGL."
    },
    {
      "tipo": "pratica",
      "tabela": "variacao_q5",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Com os saldos operacionais da tabela, calcule a variação da NIG no ano. (Pré-aula 08, Q5.)",
        "unidade": "R$", "casas": 2, "resposta": 1700,
        "calculo": "(11500 - 7000) - (9000 - 6200)",
        "explicacao": "ΔNIG = (11.500 − 7.000) − (9.000 − 6.200) = 4.500 − 2.800 = **R$ 1.700,00**. A necessidade aumentou: o final vem primeiro na subtração."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "A NIG de uma empresa passou de R$ 2.800,00 para R$ 4.500,00. Calcule o impacto dessa mudança no caixa, incluindo o sinal. (Pré-aula 08, Q5.)",
        "unidade": "R$", "casas": 2, "resposta": -1700,
        "calculo": "-(4500 - 2800)",
        "explicacao": "Impacto no caixa = −(4.500 − 2.800) = **R$ −1.700,00**. O sinal negativo indica consumo de caixa: mais dinheiro ficou comprometido na operação."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto sobra do lado financeiro?",
      "texto": "Marta tem R$ 35,00 em caixa e aplicações (ACF) e deve R$ 20,00 em empréstimos de curto prazo (PCF). Sobram 35 − 20 = R$ 15,00. O [[saldo em tesouraria|ST: diferença entre ativos e passivos financeiros de curto prazo.]] (ST) mede essa diferença. **ST = ACF − PCF.** Positivo: os recursos financeiros superam as dívidas financeiras de curto prazo. Negativo: essas dívidas superam os recursos financeiros disponíveis.",
      "atencao": "Não subtraia fornecedores no ST: eles pertencem ao PCO. A NIG mede o lado operacional; o ST mede o lado financeiro."
    },
    {
      "tipo": "pratica",
      "tabela": "contas_q4",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Usando os mesmos dados da pré-aula 08, Q4, calcule o saldo em tesouraria da empresa.",
        "unidade": "R$", "casas": 2, "resposta": 500,
        "calculo": "(1800 + 700) - 2000",
        "explicacao": "ST = ACF − PCF = (1.800 + 700) − 2.000 = **R$ 500,00**. Some caixa e aplicações e desconte os empréstimos de curto prazo."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "A folga cobre a necessidade?",
      "texto": "Se a NIG é R$ 20,00 e o ST é R$ 15,00, o CGL é 20 + 15 = R$ 35,00. **CGL = NIG + ST.** A diferença total reúne a parte operacional e a financeira. Compare CGL com NIG para classificar a gestão, isto é, a forma de financiar a operação. Longo prazo significa recursos dos sócios ou dívidas que vencem depois de um ano. Na tabela, a NIG é positiva. Primeiro verifique se o CGL é negativo; depois compare os valores.",
      "tabela": "gestoes",
      "atencao": "Uma gestão conservadora oferece folga, mas pode deixar dinheiro com pouco rendimento. Uma agressiva depende mais de empréstimos de curto prazo. Muito agressiva exige CGL negativo; ST negativo sozinho não basta."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Considere NIG positiva em todos os casos. Associe cada tipo de gestão à condição correspondente. (Slide p.23.)",
        "pares": [
          ["Equilibrada", "CGL igual à NIG; ST zero"],
          ["Conservadora", "CGL maior que a NIG; ST positivo"],
          ["Agressiva", "CGL não negativo e menor que a NIG; ST negativo"],
          ["Muito agressiva", "CGL negativo; ST negativo"]
        ],
        "explicacao": "CGL negativo caracteriza gestão muito agressiva. Nos demais casos, compare-o com a NIG: igual indica equilíbrio; maior, folga conservadora; menor, dependência parcial de dívida financeira de curto prazo."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quantos dias a mercadoria fica guardada?",
      "texto": "Marta guarda R$ 20,00 em mercadorias e vende mercadorias que lhe custaram R$ 365,00 no ano. Esse custo é o [[CMV|Custo das mercadorias vendidas.]]; não é o preço cobrado do cliente. O [[PME|Prazo médio de estoque, em dias.]], prazo médio de estoque, estima a espera entre comprar e vender. Estoques = R$ 20,00; CMV anual = R$ 365,00. A conta 20 ÷ 365 × 365 dá 20 dias. **PME = estoques ÷ CMV × 365.** Multiplicamos por 365 para converter a parcela do ano em dias.",
      "atencao": "Use o saldo de estoque e o CMV anual informados. O curso usa 365 dias, salvo indicação diferente. Menos dias de estoque significam menos tempo com dinheiro preso em mercadorias."
    },
    {
      "tipo": "conceito",
      "titulo": "Quantos dias até o cliente pagar?",
      "texto": "Marta vende R$ 365,00 no ano: essa é a receita, o valor das vendas. Ainda tem R$ 30,00 a receber de clientes. O [[PMR|Prazo médio de recebimento, em dias.]], prazo médio de recebimento, estima a espera entre vender e receber. Clientes = R$ 30,00; receita anual = R$ 365,00. A conta 30 ÷ 365 × 365 dá 30 dias. **PMR = clientes ÷ receita × 365.** Usamos vendas porque clientes devem o preço de venda, não o custo da mercadoria.",
      "atencao": "Use a receita e o saldo de clientes fornecidos pelo enunciado. Reduzir o prazo de recebimento diminui o dinheiro preso em clientes, mantendo as demais condições."
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto foi comprado durante o ano?",
      "texto": "Marta começa com R$ 10,00 em mercadorias, vende mercadorias que custaram R$ 30,00 e termina com R$ 15,00 guardados. Comprou 15 + 30 − 10 = R$ 35,00: repôs o que vendeu e aumentou o estoque. EI significa estoque inicial (R$ 10,00); EF, estoque final (R$ 15,00); CMV, custo vendido (R$ 30,00). **Compras = EF + CMV − EI.** Na indústria, a questão pode usar CPV, custo dos produtos vendidos, no lugar de CMV.",
      "atencao": "Compras e CMV só coincidem quando o estoque inicial é igual ao final. Estoque maior no fim significa compras maiores que o custo vendido."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa teve CPV anual de R$ 180.000,00, estoque inicial de R$ 20.000,00 e final de R$ 28.000,00. Calcule as compras do ano. (Pré-aula 08, Q7.)",
        "unidade": "R$", "casas": 2, "resposta": 188000,
        "calculo": "28000 + 180000 - 20000",
        "explicacao": "Compras = EF + CPV − EI = 28.000 + 180.000 − 20.000 = **R$ 188.000,00**. A empresa comprou mais do que o custo vendido porque terminou com mais estoque."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto tempo o fornecedor dá para pagar?",
      "texto": "Marta compra R$ 365,00 por ano e deve R$ 15,00 aos fornecedores. O [[PMP|Prazo médio de pagamento aos fornecedores, em dias.]], prazo médio de pagamento, estima a espera entre comprar e pagar. Fornecedores = R$ 15,00; compras anuais = R$ 365,00. A conta 15 ÷ 365 × 365 dá 15 dias. **PMP = fornecedores ÷ compras × 365.** Usamos compras porque a dívida nasce ao comprar. Nesse prazo, o fornecedor financia a mercadoria: a loja ainda não precisou desembolsar o dinheiro.",
      "atencao": "PMP divide por compras, não por CMV nem por receita. Negociar mais prazo com fornecedores permite pagar depois; não significa simplesmente deixar contas vencerem."
    },
    {
      "tipo": "conceito",
      "titulo": "Da compra até receber: quanto tempo passa?",
      "texto": "Marta compra uma mercadoria, espera 20 dias para vendê-la e recebe 30 dias depois da venda. O [[ciclo operacional|CO: dias entre comprar a mercadoria e receber pela venda.]] (CO) soma essas duas esperas. PME é a espera em estoque (20 dias); PMR, a espera após vender (30 dias). A conta é 20 + 30 = 50 dias. **CO = PME + PMR.** O prazo do fornecedor não muda a data da venda nem a do recebimento: por isso não é descontado aqui.",
      "exemplo": "Na loja, os 50 dias começam na compra e terminam no recebimento. A data em que Marta paga o fornecedor será usada para medir apenas o intervalo em que falta dinheiro."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresenta PME de 28 dias, PMR de 32 dias e PMP de 18 dias. Calcule o ciclo operacional. (Pré-aula 08, Q6.)",
        "unidade": "dias", "casas": 0, "resposta": 60,
        "calculo": "28 + 32",
        "explicacao": "CO = PME + PMR = 28 + 32 = **60 dias**. Os 18 dias de prazo do fornecedor não são descontados do ciclo operacional."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresenta PME de 40 dias e PMR de 25 dias. Calcule o ciclo operacional. (Pré-aula 08, Q7.)",
        "unidade": "dias", "casas": 0, "resposta": 65,
        "calculo": "40 + 25",
        "explicacao": "CO = PME + PMR = 40 + 25 = **65 dias**. São 40 dias até vender e mais 25 até receber."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Por quantos dias falta financiar o dinheiro?",
      "texto": "Marta paga o fornecedor no dia 15 e recebe no dia 50. Precisa financiar 20 + 30 − 15 = 35 dias. O [[ciclo de caixa|CCC: intervalo entre pagar o fornecedor e receber do cliente.]], também chamado ciclo de conversão de caixa (CCC), desconta a espera financiada pelo fornecedor. PME = 20, PMR = 30 e PMP = 15 dias. **CCC = PME + PMR − PMP.** Reduzir esse intervalo libera dinheiro, mantendo o restante constante. Se receber antes de pagar, o ciclo será negativo.",
      "diagrama": {
        "tipo": "fluxo",
        "etapas": ["Dia 0: compra", "Dia 15: paga fornecedor", "Dia 20: vende", "Dia 50: recebe"],
        "destaque": 1,
        "nota": "PME: 20 dias; PMR: 30; PMP: 15. CO: 50 dias. Do pagamento ao recebimento: 35 dias sem financiamento do fornecedor."
      },
      "exemplo": "Receber mais rápido, manter menos estoque ou negociar mais prazo com fornecedores reduz a necessidade de dinheiro. Como a loja compra e vende continuamente, essa espera se repete."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresenta PME de 28 dias, PMR de 32 dias e PMP de 18 dias. Calcule o ciclo de caixa. (Pré-aula 08, Q6.)",
        "unidade": "dias", "casas": 0, "resposta": 42,
        "calculo": "28 + 32 - 18",
        "explicacao": "CCC = PME + PMR − PMP = 28 + 32 − 18 = **42 dias**. Dos 60 dias até receber, o fornecedor financia 18; a empresa precisa sustentar os 42 restantes com outros recursos."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Uma empresa reduziu seu ciclo de caixa de 45 para 30 dias, mantendo tudo mais constante. O que isso significa? (Pré-aula 08, Q8.)",
        "opcoes": [
          "Aumentou a NIG e consumiu caixa.",
          "Reduziu a NIG e liberou caixa.",
          "Não houve efeito sobre o caixa.",
          "Aumentou o risco de faltar dinheiro para pagar no curto prazo."
        ],
        "correta": 1,
        "explicacao": "Menos dias entre pagar e receber exigem menos dinheiro sustentando a operação. Mantidas as demais condições, a NIG diminui e há liberação de caixa. Somar dias de espera produziria o efeito oposto."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresenta clientes a receber de R$ 160,00 e receita anual de R$ 1.250,00. Calcule o PMR usando 365 dias e o saldo informado. Arredonde para duas casas decimais.",
        "unidade": "dias", "casas": 2, "resposta": 46.72,
        "calculo": "160 / 1250 * 365",
        "explicacao": "PMR = clientes ÷ receita × 365 = 160 ÷ 1.250 × 365 = **46,72 dias**. A receita deve corresponder ao ano porque a conversão usa 365 dias."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, vendeu mais e ficou sem dinheiro para os próximos pagamentos. Na tabela, clientes são vendas ainda não recebidas; estoques, mercadorias guardadas; fornecedores, compras ainda não pagas. São as únicas contas operacionais de curto prazo. Ela quer medir quanto dinheiro adicional ficou preso na operação para decidir quais prazos ou estoques ajustar antes de buscar empréstimo.",
        "enunciado": "Explique o aperto de caixa de Marta e proponha duas mudanças na operação.",
        "tabela": "marta",
        "passos": [
          {"pergunta": "Qual era a NIG antes do crescimento?", "comeco": "Antes, a NIG era…"},
          {"pergunta": "Qual passou a ser a NIG depois do crescimento?", "comeco": "Depois, a NIG passou a…"},
          {"pergunta": "Qual foi o impacto da mudança da NIG no caixa?", "comeco": "A mudança da NIG teve impacto de…"},
          {"pergunta": "Quais duas mudanças você proporia a Marta para reduzir a NIG?", "comeco": "Marta, podemos reduzir essa necessidade se…"}
        ],
        "dica": "NIG = clientes + estoques − fornecedores. Compare depois com antes e inverta o sinal para medir o impacto no caixa.",
        "contas": [
          {"conta": "80000 + 60000 - 50000", "resultado": "90.000,00"},
          {"conta": "120000 + 90000 - 65000", "resultado": "145.000,00"},
          {"conta": "145000 - 90000", "resultado": "55.000,00"},
          {"conta": "-(145000 - 90000)", "resultado": "−55.000,00"}
        ],
        "resposta_comentada": "**Passo 1.** NIG antes = 80.000 + 60.000 − 50.000 = R$ 90.000,00.\n\n**Passo 2.** NIG depois = 120.000 + 90.000 − 65.000 = R$ 145.000,00.\n\n**Passo 3.** Aumento da NIG = 145.000 − 90.000 = R$ 55.000,00. Impacto no caixa = −(145.000 − 90.000) = R$ −55.000,00. O crescimento exigiu dinheiro adicional na operação; esse efeito não mede sozinho a mudança total do caixa.\n\n**Passo 4.** Marta, proponho receber dos clientes mais rápido e reduzir mercadorias paradas em estoque. Isso reduz o ACO e a NIG. Também seria válida a negociação de mais prazo com fornecedores, aumentando o PCO sem atrasar pagamentos."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "CGL = AC − PC; NIG = ACO − PCO; ST = ACF − PCF. Confira: CGL = NIG + ST.",
        "NIG final menos inicial mede a variação; o impacto no caixa tem sinal contrário. NIG negativa pode financiar outros usos.",
        "Com NIG positiva: CGL igual indica equilíbrio; maior, gestão conservadora; não negativo e menor, agressiva; negativo, muito agressiva.",
        "Em 365 dias: PME usa estoques ÷ CMV; PMR, clientes ÷ receita; PMP, fornecedores ÷ compras. Compras = EF + CMV − EI.",
        "CO = PME + PMR; CCC = PME + PMR − PMP. Receber antes, reduzir estoque e negociar mais prazo com fornecedores ajudam a liberar caixa."
      ],
      "glossario": [
        {"termo": "CGL", "def": "Capital de giro líquido: ativo circulante menos passivo circulante."},
        {"termo": "ACO / PCO", "def": "Ativos e passivos operacionais de curto prazo: clientes e estoques; fornecedores, salários e impostos a pagar."},
        {"termo": "ACF / PCF", "def": "Ativos e passivos financeiros de curto prazo: caixa e aplicações; empréstimos."},
        {"termo": "NIG", "def": "Necessidade de investimento em giro: parcela operacional a financiar, medida por ACO menos PCO."},
        {"termo": "ST", "def": "Saldo em tesouraria: ACF menos PCF."},
        {"termo": "PME / PMR / PMP", "def": "Prazos médios de estoque, recebimento e pagamento, em dias."},
        {"termo": "CO / CCC", "def": "CO vai da compra ao recebimento; CCC vai do pagamento ao fornecedor ao recebimento do cliente."}
      ]
    }
  ]
};
