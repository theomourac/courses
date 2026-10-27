(window.CURSO_AULAS = window.CURSO_AULAS || {})["07"] = {
  "n": "07",
  "parte": "C",
  "titulo": "Análise vertical e horizontal",
  "objetivo": "Calcular a participação de uma conta, sua mudança em percentual e em reais e explicar de onde veio o lucro.",
  "minutos": 35,
  "tabelas": {
    "ah_lucros": {
      "fonte": "nenhum",
      "titulo": "Loja de Marta: mudança do ano X para X+1 (%)",
      "colunas": ["Linha", "AH (%)"],
      "numericas": [1],
      "linhas": [
        ["Receita líquida", "20,00"],
        ["Lucro bruto", "10,30"],
        ["Lucro operacional (EBIT)", "−34,43"],
        ["Lucro líquido", "−50,53"]
      ]
    },
    "dre_marta": {
      "fonte": "nenhum",
      "titulo": "DRE de Marta: dois anos completos (R$); valores negativos são deduções",
      "colunas": ["Linha", "Ano X", "Ano X+1"],
      "numericas": [1, 2],
      "linhas": [
        ["Receita líquida", "76.230,00", "91.476,00"],
        ["CPV — custo dos produtos vendidos", "−35.000,00", "−46.000,00"],
        ["Lucro bruto", "41.230,00", "45.476,00"],
        ["Despesas operacionais, sem depreciação", "−10.000,00", "−15.000,00"],
        ["Depreciação", "0,00", "−10.000,00"],
        ["Lucro operacional (EBIT)", "31.230,00", "20.476,00"],
        ["Resultado não operacional", "0,00", "0,00"],
        ["Juros — despesa financeira", "−5.000,00", "−7.500,00"],
        ["Lucro antes dos impostos", "26.230,00", "12.976,00"],
        ["IR e CSLL — impostos sobre o lucro", "−8.918,20", "−4.411,84"],
        ["Lucro líquido", "17.311,80", "8.564,16"]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Vender mais pode deixar menos?",
      "texto": "Marta, dona de uma loja, compara dois anos completos: vendeu mais, mas sobrou menos depois de descontar os gastos. Essa sobra é o **lucro**. Ela quer decidir se basta continuar aumentando as vendas. Você vai comparar o tamanho de cada gasto e sua mudança entre os anos antes de responder.",
      "quadrinho": [
        {"quem": "dona", "fala": "Vendi 20% mais, mas meu lucro caiu pela metade. Devo continuar buscando só mais vendas?"},
        {"quem": "voce", "fala": "Vamos descobrir quais gastos cresceram mais e quanto sobrou em cada etapa."}
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto do total está em dinheiro?",
      "texto": "Marta tem R$ 20,00 em dinheiro dentro de R$ 100,00 em bens e direitos da loja. Dinheiro disponível é **caixa**; o conjunto de bens e direitos controlados é o **ativo total**. O **balanço patrimonial (BP)** mostra esses valores numa data. A [[análise vertical|Participação de uma conta no total escolhido, na mesma data ou período.]], ou AV, mede essa participação: 20 ÷ 100 × 100 = 20,00%. Percentual significa partes em cada cem. **AV = conta ÷ base × 100**; conta é o item, base é o total usado na divisão.",
      "atencao": "No BP, a base é o ativo total. Use o item e o total da mesma data. Os dois valores precisam estar na mesma moeda e na mesma escala: por exemplo, ambos em R$ mil."
    },
    {
      "tipo": "conceito",
      "titulo": "Quais partes do ativo vamos comparar?",
      "texto": "Na loja, dinheiro e mercadorias para vender logo pertencem ao **ativo circulante**: bens e direitos que se espera realizar em até 12 meses. Mercadorias guardadas para venda são **estoques**. Máquinas e instalações usadas por vários anos são o **imobilizado**. A AV de qualquer desses grupos usa o ativo total como base. Ela mostra onde os recursos estão aplicados; uma participação alta, sozinha, não diz se a escolha foi boa.",
      "exemplo": "Uma loja costuma precisar de estoques; uma transportadora, de veículos. Compare a composição com a atividade da empresa e com seu próprio passado."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou ativo circulante de R$ 210.000,00 e ativo total de R$ 700.000,00. Calcule a AV do ativo circulante. (Simulado geral, Q23)",
        "unidade": "%", "casas": 2, "resposta": 30,
        "calculo": "210000 / 700000 * 100",
        "explicacao": "210.000 ÷ 700.000 × 100 = **30,00%**. De cada R$ 100,00 do ativo total, R$ 30,00 estão no ativo circulante. A base é o total, não apenas outro grupo do ativo."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "A Apple apresentou caixa de US$ 54,7 bilhões e ativo total de US$ 359,2 bilhões na mesma data. Calcule a AV do caixa. (Exemplo dos slides)",
        "unidade": "%", "casas": 2, "resposta": 15.23,
        "calculo": "54.7 / 359.2 * 100",
        "explicacao": "54,7 ÷ 359,2 × 100 = **15,23%**. Ambos os valores estão em bilhões de dólares, então a escala se cancela. De cada US$ 100,00 de ativo, aproximadamente US$ 15,23 estão no caixa. Isso não mede crescimento."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Em 2025, uma empresa apresentou imobilizado de 2.168.539 e ativo total de 4.293.945, ambos em R$ mil. Calcule a AV do imobilizado. (Pré-aula 05, item 1.1)",
        "unidade": "%", "casas": 2, "resposta": 50.5,
        "calculo": "2168539 / 4293945 * 100",
        "explicacao": "2.168.539 ÷ 4.293.945 × 100 = **50,50%**. Aproximadamente metade do ativo está em bens usados na operação por vários anos. Como os dois valores estão em R$ mil, divida diretamente."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Na DRE, o total de referência muda",
      "texto": "De R$ 100,00 vendidos após descontar impostos sobre vendas e devoluções, R$ 60,00 cobrem o custo das mercadorias vendidas. O primeiro valor é a **receita líquida**; o segundo, o **CMV**. A **DRE**, Demonstração do Resultado do Exercício, organiza receitas e gastos de um período. Sua AV usa a receita líquida: 60 ÷ 100 × 100 = 60,00%. **AV = valor da linha ÷ receita líquida × 100**. Aqui, leia os custos pelo valor que consomem, sem o sinal de dedução.",
      "atencao": "AV igual em dois anos significa participação igual. O custo em reais pode ter aumentado junto com a receita."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "No ano 1, CMV de R$ 180.000,00 e receita líquida de R$ 300.000,00; no ano 2, R$ 240.000,00 e R$ 400.000,00. Como mudou a AV do CMV? (Simulado geral, Q24)",
        "opcoes": [
          "Ficou igual: 60,00% nos dois anos; custo e receita cresceram na mesma proporção.",
          "Aumentou de 60,00% para 80,00%, usando a receita do ano 1 nos dois cálculos.",
          "Diminuiu de 60,00% para 45,00%, usando o custo do ano 1 nos dois cálculos.",
          "Ficou igual em 60,00%, portanto o custo em reais não mudou."
        ],
        "correta": 0,
        "explicacao": "Ano 1: 180.000 ÷ 300.000 × 100 = 60,00%. Ano 2: 240.000 ÷ 400.000 × 100 = 60,00%. Use a receita do próprio ano. A participação ficou igual, embora os valores em reais tenham aumentado."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto sobra depois do custo?",
      "texto": "Dos R$ 100,00 de receita líquida, descontar R$ 60,00 de custo deixa R$ 40,00 de **lucro bruto**. A [[margem bruta|Lucro bruto como percentual da receita líquida.]] é a participação dessa sobra nas vendas: 40 ÷ 100 × 100 = 40,00%. Na fórmula, LB é lucro bruto, RL é receita líquida e MB é margem bruta: **MB = LB ÷ RL × 100**. É a AV do lucro bruto. Ainda faltam outros gastos; essa sobra não é o lucro final.",
      "atencao": "Se o custo cresce mais que a receita, sobra uma parcela menor de cada real vendido: a margem bruta cai."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Em 2025, uma empresa apresentou lucro bruto de 485.263 e receita líquida de 1.050.340, ambos em R$ mil. Calcule a margem bruta. (Pré-aula 05, item 3.2)",
        "unidade": "%", "casas": 2, "resposta": 46.2,
        "calculo": "485263 / 1050340 * 100",
        "explicacao": "485.263 ÷ 1.050.340 × 100 = **46,20%**. De cada R$ 100,00 de receita líquida, sobram aproximadamente R$ 46,20 depois do custo, antes dos demais gastos."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto mudou de um ano para outro?",
      "texto": "Uma receita líquida de R$ 100,00 passou a R$ 120,00. A [[análise horizontal|Mudança percentual de uma mesma conta entre dois períodos.]], ou AH, mede a mudança relativa ao valor anterior. Atual é R$ 120,00; anterior é R$ 100,00. Faça (120 ÷ 100 − 1) × 100 = 20,00%. **AH = (atual ÷ anterior − 1) × 100**. Subtrair 1 retira a parcela original: sem isso, você obteria o tamanho atual como percentual do anterior, não o crescimento.",
      "atencao": "Queda tem sinal negativo. Compare períodos de mesma duração. Com anterior igual a zero, não há divisão possível; descreva a mudança em dinheiro."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "A receita líquida passou de R$ 480.000,00 para R$ 552.000,00 entre dois anos completos. Calcule sua AH. (Simulado geral, Q22)",
        "unidade": "%", "casas": 2, "resposta": 15,
        "calculo": "(552000 / 480000 - 1) * 100",
        "explicacao": "(552.000 ÷ 480.000 − 1) × 100 = **15,00%**. A receita líquida cresceu 15,00% em relação ao ano anterior. Dividir pelo valor atual mudaria a referência e daria outra resposta."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "O caixa da Apple passou de US$ 65,2 bilhões no terceiro trimestre de 2024 para US$ 54,7 bilhões no terceiro trimestre de 2025. Calcule a AH. (Exemplo dos slides)",
        "unidade": "%", "casas": 2, "resposta": -16.1,
        "calculo": "(54.7 / 65.2 - 1) * 100",
        "explicacao": "(54,7 ÷ 65,2 − 1) × 100 = **−16,10%**. O caixa caiu. O slide da disciplina escreve 16,1% sem sinal; na prova, a queda exige o sinal negativo. Só essa mudança não informa como o dinheiro foi usado."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "O caixa passou de 289.426 em 2023 para 851.334 em 2025, ambos em R$ mil. Calcule a AH acumulada entre essas datas. (Pré-aula 05, item 1.2)",
        "unidade": "%", "casas": 2, "resposta": 194.15,
        "calculo": "(851334 / 289426 - 1) * 100",
        "explicacao": "(851.334 ÷ 289.426 − 1) × 100 = **194,15%**. O aumento supera o valor inicial. Essa é a mudança de 2023 a 2025, não uma taxa por ano. Arredonde só no resultado final."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Quantos reais mudaram?",
      "texto": "Um estoque passou de R$ 100,00 para R$ 120,00. A [[variação monetária|Diferença em dinheiro entre o valor atual e o anterior.]], ou VM, responde quantos reais mudaram: 120 − 100 = R$ 20,00. Atual é o valor final, R$ 120,00; anterior é o inicial, R$ 100,00. **VM = atual − anterior**. Ela complementa a AH: um crescimento percentual enorme numa conta pequena pode valer menos dinheiro que uma mudança pequena numa conta grande.",
      "atencao": "AV pergunta quanto representa; AH, quanto mudou em percentual; VM, quanto mudou em dinheiro. Escreva a unidade para não confundir as respostas."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Os estoques de uma empresa passaram de R$ 5.500,00 para R$ 7.500,00. Calcule a variação monetária.",
        "unidade": "R$", "casas": 2, "resposta": 2000,
        "calculo": "7500 - 5500",
        "explicacao": "7.500 − 5.500 = **R$ 2.000,00**. O estoque aumentou nesse valor. Não divida pelo saldo anterior: isso seria parte de uma conta percentual, não da variação monetária."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Crescer menos pode ser uma boa notícia?",
      "texto": "A receita líquida subiu de R$ 100,00 para R$ 120,00, mas a despesa com administração foi de R$ 10,00 para R$ 11,00. A despesa cresceu menos que a receita e passou a consumir uma parcela menor das vendas. Isso é um **sinal de ganho de eficiência**: sustentar mais receita com menos despesa proporcionalmente. Se custo e receita crescem na mesma proporção, a AV do custo fica igual. Sempre confira os valores em dinheiro antes de interpretar o percentual.",
      "diagrama": {
        "tipo": "fluxo",
        "etapas": ["AV: participação no total", "AH: mudança percentual", "VM: mudança em dinheiro", "Interprete as três juntas"],
        "nota": "As três medidas respondem perguntas diferentes sobre a mesma conta."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O que reduz o lucro depois do custo?",
      "texto": "Do lucro bruto ainda saem gastos de funcionamento, como salários e aluguel: as **despesas operacionais**. Também sai a **depreciação**, que distribui o custo de um equipamento pelos períodos de uso; não é um novo pagamento naquele momento. A sobra é o **lucro operacional**, chamado **EBIT**, antes dos juros e dos impostos sobre o lucro. Se aparecer **CPV**, custo dos produtos vendidos, trate-o como o CMV: ele é descontado antes do lucro bruto.",
      "atencao": "Na tabela do desafio, a depreciação aparece separada das demais despesas operacionais. Desconte cada linha uma vez."
    },
    {
      "tipo": "conceito",
      "titulo": "De onde veio o lucro final?",
      "texto": "A atividade habitual gera o resultado **operacional**. Já um ganho na venda do prédio usado pela loja é **não operacional**, pois vender prédios não é seu negócio habitual. O resultado **financeiro** reúne rendimentos de aplicações e juros de dívidas. O bloco **fiscal** mostra os impostos sobre o lucro, IR e CSLL. Depois desses blocos chega-se ao **lucro líquido**, a sobra final. Um ganho isolado pode elevar essa sobra sem melhorar as vendas habituais.",
      "exemplo": "Vender um prédio pode gerar lucro hoje, mas não é uma fonte que se repete todo ano. Separe esse ganho do resultado da atividade da loja."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Uma loja vendeu o imóvel que usava e reconheceu ganho de R$ 60.000,00. Vender imóveis não é sua atividade habitual. Qual é a origem desse ganho na análise do curso?",
        "opcoes": ["Operacional, porque entrou dinheiro na loja.", "Não operacional, porque veio da venda de um bem fora da atividade habitual.", "Financeira, porque a venda foi recebida em dinheiro.", "Fiscal, porque pode haver imposto sobre o ganho."],
        "correta": 1,
        "explicacao": "É não operacional: a loja não tem a venda de imóveis como atividade habitual. Receber dinheiro não torna o ganho financeiro; pagar imposto sobre ele não transforma sua origem em fiscal. O ganho isolado não comprova melhora nas vendas da loja."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Receita em alta, lucro em queda",
      "texto": "No caso de Marta, a receita líquida cresce, mas o lucro bruto cresce menos: os custos passaram a consumir uma parcela maior das vendas. Depois, o EBIT e o lucro líquido caem. O gráfico mostra a AH de cada linha, não sua participação na receita. As barras negativas indicam queda em relação ao ano anterior. Para explicar a diferença, acompanhe custos, despesas, depreciação, juros e impostos na DRE.",
      "tabela": "ah_lucros",
      "grafico": {
        "tabela": "ah_lucros", "rotulo": 0, "valor": 1, "destaque": [2, 3],
        "nota": "Receita líquida +20,00%; lucro bruto +10,30%; EBIT −34,43%; lucro líquido −50,53%. Crescer em vendas não garantiu crescer em lucro."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Onde encontrar os números publicados?",
      "texto": "Uma **empresa de capital aberto** permite que investidores negociem participações nela no mercado. Para acompanhar seus números, há a **DFP**, Demonstrações Financeiras Padronizadas: conjunto anual de relatórios contábeis, auditado, isto é, examinado por auditor independente. A **ITR**, Informações Trimestrais, reúne informações a cada trimestre, com revisão de auditoria. Use o documento do período correto e confira se a comparação trata de anos completos ou de trimestres equivalentes.",
      "atencao": "Auditoria anual e revisão trimestral são trabalhos diferentes. O trimestre não deve ser tratado como se fosse um ano inteiro."
    },
    {
      "tipo": "conceito",
      "titulo": "Onde encontrar a explicação da administração?",
      "texto": "O **release de resultados** resume os números e traz comentários dos gestores sobre o período. A **apresentação institucional** explica visualmente o negócio, sua estratégia e seus planos. Eles ajudam a entender a história contada pela empresa. Confira essa história nos relatórios: uma manchete sobre vendas maiores não responde, sozinha, se o lucro melhorou. Recalcule AV e AH para verificar o que os gestores destacam.",
      "exemplo": "Se o release destaca vendas maiores, procure também o custo e o lucro. O destaque da administração é o começo da leitura, não a conclusão."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada documento à sua principal função. (Slides de AV/AH, documentos de empresa aberta)",
        "pares": [
          ["DFP", "Relatórios contábeis anuais auditados"],
          ["ITR", "Informações trimestrais com revisão de auditoria"],
          ["Release de resultados", "Resumo dos resultados com comentários da administração"],
          ["Apresentação institucional", "Visão visual do negócio, da estratégia e dos planos"]
        ],
        "explicacao": "DFP e ITR fornecem os números dos períodos; o release explica os resultados pela visão da administração; a apresentação institucional mostra o negócio e sua estratégia. Compare a narrativa com os dados."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, compara os dois anos completos da DRE na tabela. A receita líquida foi de R$ 76.230,00 para R$ 91.476,00; o lucro líquido, de R$ 17.311,80 para R$ 8.564,16. Ela precisa decidir se basta buscar mais vendas. Os custos e gastos aparecem negativos porque são descontados; use seus valores sem sinal para comparar quanto cresceram.",
        "enunciado": "Explique a Marta por que vender mais não impediu a queda do lucro.",
        "tabela": "dre_marta",
        "passos": [
          {"pergunta": "Como receita líquida e lucro líquido mudaram em percentual de X para X+1?", "comeco": "As análises horizontais mostram…"},
          {"pergunta": "Como o crescimento do CPV afetou a margem bruta, isto é, o lucro bruto como percentual da receita líquida?", "comeco": "O CPV cresceu…"},
          {"pergunta": "Qual aumento de gasto mais pesou depois do lucro bruto?", "comeco": "Comparando os aumentos em reais…"},
          {"pergunta": "Que resposta você daria à decisão de Marta?", "comeco": "Marta, buscar mais vendas…"}
        ],
        "dica": "AH = (atual ÷ anterior − 1) × 100; margem bruta = lucro bruto ÷ receita líquida × 100. Compare também os aumentos em reais.",
        "contas": [
          {"conta": "(91476 / 76230 - 1) * 100", "resultado": "20,00"},
          {"conta": "(8564.16 / 17311.8 - 1) * 100", "resultado": "−50,53"},
          {"conta": "(46000 / 35000 - 1) * 100", "resultado": "31,43"},
          {"conta": "41230 / 76230 * 100", "resultado": "54,09"},
          {"conta": "45476 / 91476 * 100", "resultado": "49,71"},
          {"conta": "10000 - 0", "resultado": "10.000,00"},
          {"conta": "15000 - 10000", "resultado": "5.000,00"},
          {"conta": "7500 - 5000", "resultado": "2.500,00"},
          {"conta": "(15000 / 10000 - 1) * 100", "resultado": "50,00"},
          {"conta": "(7500 / 5000 - 1) * 100", "resultado": "50,00"}
        ],
        "resposta_comentada": "**Passo 1.** Receita: (91.476 ÷ 76.230 − 1) × 100 = +20,00%. Lucro líquido: (8.564,16 ÷ 17.311,80 − 1) × 100 = −50,53%.\n\n**Passo 2.** CPV: (46.000 ÷ 35.000 − 1) × 100 = +31,43%. Margem bruta: 41.230 ÷ 76.230 × 100 = 54,09%; depois, 45.476 ÷ 91.476 × 100 = 49,71%. O custo cresceu mais que a receita.\n\n**Passo 3.** Depreciação (maior aumento): 10.000 − 0 = 10.000,00; despesas, 15.000 − 10.000 = 5.000,00; juros, 7.500 − 5.000 = 2.500,00. (15.000 ÷ 10.000 − 1) × 100 = 50,00%; (7.500 ÷ 5.000 − 1) × 100 = 50,00%.\n\n**Passo 4.** Marta, vender mais não basta: custos, despesas, depreciação e juros consumiram o ganho. O lucro vem da operação, reduzido por juros e impostos. Revise esses gastos: vendas maiores não garantem lucro maior."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "AV = conta ÷ base × 100: ativo total no BP; receita líquida na DRE. Use valores da mesma data ou período.",
        "AH = (atual ÷ anterior − 1) × 100: compare a mesma conta no tempo e mantenha o sinal da queda.",
        "VM = atual − anterior: mostra a mudança em dinheiro. AV igual não significa valor em reais constante.",
        "Margem bruta = lucro bruto ÷ receita líquida × 100. Se o custo cresce mais que a receita, essa margem cai.",
        "Separe a origem operacional, não operacional, financeira e fiscal do lucro; confira a narrativa dos gestores nos relatórios."
      ],
      "glossario": [
        {"termo": "AV", "def": "Análise vertical: participação percentual de uma conta na base do mesmo período."},
        {"termo": "AH", "def": "Análise horizontal: mudança percentual em relação ao valor anterior."},
        {"termo": "VM", "def": "Variação monetária: valor atual menos valor anterior, em dinheiro."},
        {"termo": "Margem bruta", "def": "Parcela percentual da receita líquida que sobra depois do custo dos produtos ou mercadorias vendidos."},
        {"termo": "DFP", "def": "Demonstrações Financeiras Padronizadas: relatórios anuais auditados."},
        {"termo": "ITR", "def": "Informações Trimestrais: informações de cada trimestre com revisão de auditoria."}
      ]
    }
  ]
};
