(window.CURSO_AULAS = window.CURSO_AULAS || {})["05"] = {
  "n": "05",
  "parte": "B",
  "titulo": "DRE: do faturamento ao lucro",
  "objetivo": "Montar a DRE da receita bruta ao lucro líquido e calcular seus resultados intermediários e o EBITDA.",
  "minutos": 35,
  "tabelas": {
    "nota": {
      "fonte": "nenhum",
      "titulo": "Nota fiscal do exemplo: valores em R$",
      "colunas": ["Componente", "Valor (R$)"],
      "numericas": [1],
      "linhas": [
        ["Mercadoria, já com ICMS", "66.000,00"],
        ["IPI acrescentado à nota", "33.000,00"],
        ["Total da nota: receita bruta", "99.000,00"],
        ["Dedução: ICMS", "−11.880,00"],
        ["Dedução: IPI", "−33.000,00"]
      ]
    },
    "q15": {
      "fonte": "nenhum",
      "titulo": "Simulado geral, Q15: dados do período",
      "colunas": ["Item", "Valor (R$)"],
      "numericas": [1],
      "linhas": [
        ["Receita bruta", "450.000,00"],
        ["Impostos sobre vendas", "54.000,00"],
        ["Devoluções", "12.000,00"],
        ["CMV", "210.000,00"],
        ["Despesas operacionais", "88.000,00"],
        ["Receitas financeiras", "6.500,00"],
        ["Despesas financeiras", "15.500,00"]
      ]
    },
    "alfa": {
      "fonte": "nenhum",
      "titulo": "Comercial Alfa: DRE de 2025 — pré-aula 03, Q10",
      "colunas": ["Linha", "Valor (R$)"],
      "numericas": [1],
      "linhas": [
        ["Receita bruta", "500.000,00"],
        ["Devoluções", "−20.000,00"],
        ["Impostos sobre vendas", "−60.000,00"],
        ["CMV", "−250.000,00"],
        ["Despesas de vendas", "−35.000,00"],
        ["Despesas administrativas", "−45.000,00"],
        ["Outras receitas operacionais", "5.000,00"],
        ["Resultado financeiro", "−10.000,00"],
        ["IR e CSLL", "−25.000,00"],
        ["Lucro líquido", "60.000,00"]
      ]
    },
    "marta": {
      "fonte": "nenhum",
      "titulo": "Loja de Marta: dados do mês para montar a DRE",
      "colunas": ["Item", "Valor (R$)"],
      "numericas": [1],
      "linhas": [
        ["Receita bruta", "200.000,00"],
        ["Impostos sobre vendas", "30.000,00"],
        ["Devoluções", "10.000,00"],
        ["CMV", "90.000,00"],
        ["Despesas operacionais totais", "40.000,00"],
        ["Depreciação já incluída nessas despesas", "5.000,00"],
        ["Despesas financeiras", "8.000,00"]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Vender R$ 200 mil é ganhar R$ 200 mil?",
      "texto": "Marta olha o total das vendas do mês: R$ 200.000,00. Ela quer decidir quanto do resultado pode deixar na loja. Você vai separar o total vendido do que sobra depois dos valores que pertencem ao governo, das mercadorias vendidas e dos gastos para manter a loja funcionando.",
      "quadrinho": [
        {"quem": "dona", "fala": "Vendi R$ 200 mil neste mês. Quanto sobrou de verdade para eu decidir o que deixar na loja?"},
        {"quem": "voce", "fala": "Vamos organizar as vendas e os gastos do mês. O total vendido é só o começo da conta."}
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "Qual mês recebe uma venda a prazo?",
      "texto": "Marta entrega R$ 1.000,00 em mercadorias em março, mas recebe em abril. A venda pertence a março. Esse critério é o [[regime de competência|Registrar receitas e gastos no período em que acontecem.]]: registrar vendas quando realizadas e gastos quando consumidos, mesmo sem pagamento. A [[DRE|Demonstração do Resultado do Exercício.]], Demonstração do Resultado do Exercício, reúne esses valores de um período. Ela mostra se houve lucro (sobra) ou prejuízo (gastos maiores que as receitas). Receitas, aqui, são as vendas realizadas.",
      "atencao": "O dinheiro recebido não define o mês da venda na DRE. No exemplo, receber em abril não cria outra venda."
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto da venda continua sendo receita?",
      "texto": "Marta vende R$ 1.000,00 e separa R$ 100,00 de impostos sobre vendas, valores devidos ao governo. O total inicial é a [[receita bruta|Total faturado antes das deduções.]], ou faturamento. As [[deduções|Valores retirados da receita bruta.]] incluem esses impostos, devoluções (vendas desfeitas), abatimentos (reduções de preço para evitar devoluções) e descontos incondicionais (reduções já concedidas na nota, sem condição futura). A [[receita líquida|Receita depois das deduções.]] é o restante. Aqui, R$ 900,00: **receita líquida = receita bruta − deduções**.",
      "atencao": "Receita líquida ainda não é lucro: falta descontar o que a mercadoria vendida custou à loja."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou receita bruta de R$ 450.000,00, impostos sobre vendas de R$ 54.000,00 e devoluções de R$ 12.000,00. Calcule a receita líquida. (Simulado geral, Q15)",
        "unidade": "R$", "casas": 2, "resposta": 384000,
        "calculo": "450000 - 54000 - 12000",
        "explicacao": "Retire as duas deduções: 450.000 − 54.000 − 12.000 = **R$ 384.000,00**. Deixar as devoluções na conta faria a receita incluir vendas desfeitas."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O imposto já está no preço ou será acrescentado?",
      "texto": "Na nota fiscal do exemplo, o documento da venda, a mercadoria é vendida por R$ 66.000,00. O [[ICMS|Imposto sobre circulação de mercadorias e serviços.]] é um imposto sobre vendas já incluído nesse preço: R$ 11.880,00. O [[IPI|Imposto sobre produtos industrializados.]] é acrescentado: R$ 33.000,00. Na regra usada na prova, o total da nota, R$ 99.000,00, é a receita bruta. Os dois impostos são deduções. **Receita líquida = total da nota − ICMS − IPI**.",
      "tabela": "nota",
      "exemplo": "O IPI equivale a 50,00% de R$ 66.000,00; o ICMS, a 18,00% desse mesmo preço. Não calcule o ICMS sobre o total de R$ 99.000,00.",
      "atencao": "O IPI entra no total da nota e depois sai como dedução. O ICMS já estava no preço; não o acrescente outra vez."
    },
    {
      "tipo": "pratica",
      "tabela": "nota",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule a receita líquida da nota apresentada, considerando a receita bruta de R$ 99.000,00 e as duas deduções de impostos.",
        "unidade": "R$", "casas": 2, "resposta": 54120,
        "calculo": "(66000 + 33000) - 11880 - 33000",
        "explicacao": "Receita líquida = (66.000 + 33.000) − 11.880 − 33.000 = **R$ 54.120,00**. O IPI acrescentado é retirado, e o ICMS embutido no preço também sai."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O que sobra depois da mercadoria vendida?",
      "texto": "Dos R$ 900,00 de receita líquida, a mercadoria vendida custou R$ 500,00 à loja. Esse valor é o [[CMV|Custo das Mercadorias Vendidas.]]. Na indústria, o [[CPV|Custo dos Produtos Vendidos.]] mede o custo dos produtos fabricados e vendidos. O restante, R$ 400,00, é o [[lucro bruto|Receita líquida menos o custo do que foi vendido.]]. Portanto: **lucro bruto = receita líquida − CMV**. Use CPV na indústria. Esse lucro ainda precisa cobrir os gastos para vender e administrar a empresa.",
      "atencao": "Mercadoria comprada e ainda não vendida permanece no estoque, entre os bens da empresa. Só o custo do que foi vendido entra no CMV."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou receita líquida de R$ 320.000,00 e CMV de R$ 190.000,00. Calcule o lucro bruto. (Simulado geral, Q14)",
        "unidade": "R$", "casas": 2, "resposta": 130000,
        "calculo": "320000 - 190000",
        "explicacao": "Lucro bruto = receita líquida − CMV = 320.000 − 190.000 = **R$ 130.000,00**. Comece pela receita líquida, pois as deduções já foram retiradas."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Como registrar o uso de um equipamento?",
      "texto": "Um computador do escritório serve por vários anos. Se R$ 100,00 de seu valor forem atribuídos ao uso neste mês, essa parcela reduz o lucro do mês. É a [[depreciação|Reconhecimento do consumo ou desgaste de bens físicos ao longo do tempo.]]. Para um direito sem forma física, como uma licença de software, a parcela consumida é a [[amortização|Distribuição do custo de um direito ao longo de sua vida útil.]]. Ambas entram no custo ou nas despesas, conforme o uso: máquina da fábrica no custo; computador administrativo nas despesas.",
      "atencao": "Reconhecer a parcela mensal não significa pagar novamente pelo bem ou direito. Se a depreciação já está nas despesas informadas, não a desconte duas vezes."
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto a atividade da loja deixou?",
      "texto": "Do lucro bruto de R$ 400,00, Marta gasta R$ 150,00 para vender e administrar a loja: sobram R$ 250,00. As [[despesas operacionais|Gastos para vender, administrar e manter a atividade.]] incluem vendas (salários dos vendedores), administração (aluguel do escritório) e energia da loja. A depreciação administrativa também entra. A sobra é o [[lucro operacional|Resultado da atividade antes do resultado financeiro e dos tributos sobre o lucro.]], chamado [[EBIT|Sigla inglesa para lucro antes de juros e impostos sobre o lucro.]]. **EBIT = lucro bruto − despesas operacionais + outras receitas operacionais**.",
      "exemplo": "Outras receitas operacionais são ganhos ligados à atividade que aparecem separados das vendas. Somam ao EBIT; outras despesas operacionais devem estar incluídas no total subtraído."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa teve receita líquida de R$ 320.000,00, CMV de R$ 190.000,00 e despesas operacionais de R$ 65.000,00. Não houve outras receitas operacionais. Calcule o EBIT. (Simulado geral, Q14)",
        "unidade": "R$", "casas": 2, "resposta": 65000,
        "calculo": "320000 - 190000 - 65000",
        "explicacao": "EBIT = receita líquida − CMV − despesas operacionais = 320.000 − 190.000 − 65.000 = **R$ 65.000,00**. Os juros ainda não entram nessa etapa."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Como retirar o efeito da depreciação do resultado?",
      "texto": "O EBIT de R$ 250,00 já descontou R$ 100,00 de depreciação e R$ 20,00 de amortização. Somando essas parcelas de volta, chegamos a R$ 370,00. Esse resultado é o [[EBITDA|Lucro antes de juros, impostos sobre o lucro, depreciação e amortização.]], também chamado LAJIDA em português. Ele mostra a atividade sem essas duas parcelas contábeis: **EBITDA = EBIT + depreciação + amortização**. A soma desfaz descontos que já reduziram o EBIT.",
      "atencao": "EBITDA não é dinheiro disponível na conta bancária: uma venda pode entrar no resultado antes de ser recebida. Somá-lo à DRE como outra receita contaria o resultado duas vezes."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou EBIT de R$ 250.000,00, já descontados R$ 40.000,00 de depreciação e R$ 10.000,00 de amortização. Calcule o EBITDA. (Exercício inédito)",
        "unidade": "R$", "casas": 2, "resposta": 300000,
        "calculo": "250000 + 40000 + 10000",
        "explicacao": "EBITDA = EBIT + depreciação + amortização = 250.000 + 40.000 + 10.000 = **R$ 300.000,00**. Somamos de volta as parcelas já descontadas, sem acrescentar juros ou impostos ao EBIT."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Onde entram os juros?",
      "texto": "Marta tem EBIT de R$ 250,00, ganha R$ 10,00 de juros numa aplicação e deve R$ 30,00 de juros ao banco pelo dinheiro emprestado. Os ganhos são [[receitas financeiras|Ganhos de juros e aplicações, recebidos ou ainda a receber.]]; os encargos são [[despesas financeiras|Juros e encargos de empréstimos ou outras operações financeiras.]]. A diferença entre receitas e despesas é o [[resultado financeiro|Receitas financeiras menos despesas financeiras.]]. O [[LAIR|Lucro Antes do Imposto de Renda.]] fica em R$ 230,00: **LAIR = EBIT + receitas financeiras − despesas financeiras**.",
      "exemplo": "Na classificação da prova, o financeiro é não operacional: fica fora da atividade principal. Uma indenização judicial também fica fora da operação; ganhos ou perdas assim entram antes do LAIR, somados ou subtraídos conforme o sinal.",
      "atencao": "O valor tomado emprestado não é receita da DRE. Entram os juros devidos pelo período, mesmo que ainda não pagos."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apresentou EBIT de R$ 65.000,00, receitas financeiras de R$ 4.000,00 e despesas financeiras de R$ 12.000,00, sem outros resultados não operacionais. Calcule o LAIR. (Simulado geral, Q14)",
        "unidade": "R$", "casas": 2, "resposta": 57000,
        "calculo": "65000 + 4000 - 12000",
        "explicacao": "LAIR = EBIT + receitas financeiras − despesas financeiras = 65.000 + 4.000 − 12.000 = **R$ 57.000,00**. As receitas somam; os juros devidos reduzem o resultado."
      }
    },
    {
      "tipo": "pratica",
      "tabela": "q15",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Calcule o LAIR da empresa com os dados da tabela. Não há outros resultados não operacionais. (Simulado geral, Q15)",
        "unidade": "R$", "casas": 2, "resposta": 77000,
        "calculo": "450000 - 54000 - 12000 - 210000 - 88000 + 6500 - 15500",
        "explicacao": "Retire deduções, CMV e despesas operacionais; acrescente as receitas financeiras e retire as despesas financeiras: 450.000 − 54.000 − 12.000 − 210.000 − 88.000 + 6.500 − 15.500 = **R$ 77.000,00**."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Uma loja teve estas despesas: salários da equipe de vendas; juros sobre empréstimos bancários; aluguel do escritório administrativo; depreciação de máquinas da operação; energia elétrica da loja; indenização em processo judicial. Quais são não operacionais? (Pré-aula 03, Q7)",
        "opcoes": [
          "Apenas os juros sobre empréstimos bancários",
          "Juros sobre empréstimos e depreciação de máquinas",
          "Juros sobre empréstimos e indenização judicial",
          "Depreciação de máquinas e indenização judicial",
          "Aluguel do escritório e energia elétrica da loja"
        ],
        "correta": 2,
        "explicacao": "Salários de vendas, aluguel administrativo, depreciação da operação e energia sustentam a atividade: são operacionais. Os juros ficam no resultado financeiro; a indenização fica fora da atividade principal. Os dois são não operacionais. A depreciação não tira dinheiro do caixa, mas continua operacional."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Qual lucro serve para calcular os tributos?",
      "texto": "Uma empresa tem LAIR de R$ 10.200,00. Para calcular tributos, cobranças do governo, precisa acrescentar R$ 200,00 de despesas que a lei dos tributos, a regra **fiscal**, não aceita e retirar R$ 400,00 de ajustes permitidos. Esses aumentos são [[adições|Ajustes que aumentam o lucro usado para calcular tributos.]]; as reduções são [[exclusões|Ajustes que reduzem o lucro usado para calcular tributos.]]. O [[LALUR|Livro de Apuração do Lucro Real.]] registra os ajustes. O [[lucro real|Lucro contábil ajustado para calcular os tributos.]] é R$ 10.000,00: **lucro real = LAIR + adições − exclusões**.",
      "atencao": "Lucro real é o valor ajustado para o cálculo fiscal. Ele não substitui o LAIR na DRE; os tributos calculados serão descontados do LAIR."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tem LAIR de R$ 10.200,00, adições de R$ 200,00 e exclusões de R$ 400,00. Calcule o lucro real registrado no LALUR.",
        "unidade": "R$", "casas": 2, "resposta": 10000,
        "calculo": "10200 + 200 - 400",
        "explicacao": "Lucro real = LAIR + adições − exclusões = 10.200 + 200 − 400 = **R$ 10.000,00**. As adições aumentam o valor usado no cálculo fiscal; as exclusões reduzem esse valor."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Qual é a última sobra?",
      "texto": "Uma questão traz LAIR de R$ 1.000,00 e manda retirar 34,00% de tributos sobre o lucro: R$ 340,00. São o [[IR|Imposto de Renda; IRPJ quando cobrado da pessoa jurídica.]] e a [[CSLL|Contribuição Social sobre o Lucro Líquido.]]; o IR da empresa se chama IRPJ. Os 34,00% são a **taxa combinada**: IR e CSLL juntos numa taxa só. O restante, R$ 660,00, é o [[lucro líquido|Resultado final depois dos custos, despesas e tributos.]]. Sem ajustes fiscais: **lucro líquido = LAIR × (1 − t)**, com t = 0,34. Sobra o fator 0,66.",
      "atencao": "Aplique 34,00% sobre todo o LAIR quando a questão der essa taxa e não houver ajustes. Se IR e CSLL vierem em reais, só subtraia. Eles incidem sobre o lucro: não são deduções da receita bruta."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apurou LAIR de R$ 90.000,00, com taxa combinada de IRPJ e CSLL de 34,00% sobre esse valor. Calcule o lucro líquido original. (Simulado geral, Q16)",
        "unidade": "R$", "casas": 2, "resposta": 59400,
        "calculo": "90000 * (1 - 0.34)",
        "explicacao": "Lucro líquido = 90.000 × (1 − 0,34) = **R$ 59.400,00**. O fator 0,66 representa a parte do LAIR que sobra após retirar os tributos."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa apurou LAIR de R$ 90.000,00, mas faltou registrar R$ 8.000,00 de despesas operacionais do período. Com IRPJ e CSLL de 34,00% sobre o LAIR corrigido, calcule o lucro líquido corrigido. (Simulado geral, Q16)",
        "unidade": "R$", "casas": 2, "resposta": 54120,
        "calculo": "(90000 - 8000) * (1 - 0.34)",
        "explicacao": "Primeiro reconheça a despesa omitida; depois recalcule os tributos: (90.000 − 8.000) × (1 − 0,34) = **R$ 54.120,00**. Subtrair R$ 8.000,00 diretamente do lucro líquido original esqueceria a redução dos tributos."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Agora os degraus têm nome",
      "texto": "Comece na receita bruta. Retire deduções para chegar à líquida; retire o custo do que foi vendido (CMV) para chegar ao lucro bruto. Depois das despesas operacionais, chega ao EBIT. Acrescente o resultado financeiro, respeitando o sinal, e outros resultados não operacionais, quando houver: chegou ao LAIR. Por fim, retire IR e CSLL para achar o lucro líquido. O EBITDA é uma conta feita a partir do EBIT; não é uma receita extra nessa escada.",
      "diagrama": {
        "tipo": "fluxo",
        "etapas": ["Receita bruta", "Receita líquida", "Lucro bruto", "Lucro operacional (EBIT)", "LAIR", "Lucro líquido"],
        "nota": "Siga os degraus: cada nome representa o resultado depois de considerar mais um grupo de valores."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "ordenar",
        "enunciado": "Ordene os resultados da DRE, do começo ao fim. (lista de exercícios de DRE da disciplina, Q3)",
        "itens": ["Receita bruta", "Receita líquida", "Lucro bruto", "Lucro operacional", "LAIR", "Lucro líquido"],
        "explicacao": "Primeiro retire as deduções da receita. Depois, o custo do que foi vendido e as despesas operacionais. Inclua o resultado financeiro e outros não operacionais para chegar ao LAIR. Desconte IR e CSLL por último."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Identifique, nesta ordem: resultado após despesas operacionais, antes das financeiras e dos tributos sobre o lucro; resultado após todas as despesas e tributos; receita líquida menos o custo do que foi vendido. (Adaptado da pré-aula 03, Q3)",
        "opcoes": [
          "Lucro bruto; lucro operacional; lucro líquido",
          "Lucro operacional; lucro bruto; lucro líquido",
          "Lucro líquido; lucro bruto; lucro operacional",
          "Lucro líquido; lucro operacional; lucro bruto",
          "Lucro operacional; lucro líquido; lucro bruto"
        ],
        "correta": 4,
        "explicacao": "A sequência é operacional, líquido e bruto. O operacional já desconta os gastos para operar; o líquido inclui também o financeiro e os tributos sobre o lucro; o bruto desconta apenas o custo do que foi vendido da receita líquida."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Onde fica o lucro depois da DRE?",
      "texto": "A Comercial Alfa começa com R$ 500.000,00 de receita bruta e termina com R$ 60.000,00 de lucro líquido. Esse lucro aumenta o [[patrimônio líquido|A parcela dos sócios na empresa.]], ou PL: bens e direitos menos dívidas. No balanço, relatório dessa posição em uma data, o resultado entra em lucros acumulados. A parcela do lucro destinada aos sócios se chama [[dividendos|Parcela do lucro destinada aos sócios.]] e reduz o PL. Dividendos são distribuição do resultado, não despesa da DRE.",
      "tabela": "alfa",
      "diagrama": {
        "tipo": "cascata", "tabela": "alfa", "rotulo": 0, "valor": 1,
        "nota": "As parcelas negativas reduzem o resultado; outras receitas operacionais somam. A última barra mostra o lucro líquido de R$ 60.000,00."
      },
      "exemplo": "Na Alfa, o resultado financeiro reúne R$ 8.000,00 de receitas e R$ 18.000,00 de despesas: redução de R$ 10.000,00. IR e CSLL já foram fornecidos em reais."
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, viu R$ 200.000,00 em vendas no mês e quer decidir quanto do resultado deixar na empresa. A tabela reúne todos os valores. Os R$ 5.000,00 de depreciação já estão nas despesas operacionais. Não houve amortização, receitas financeiras ou outros resultados. IR e CSLL são 34,00% do LAIR, sem ajustes fiscais. Ela pergunta: quanto sobrou como lucro?",
        "enunciado": "Monte a DRE de Marta e explique o resultado que pode orientar sua decisão.",
        "tabela": "marta",
        "passos": [
          {"pergunta": "Monte o trecho da DRE que vai da receita bruta ao lucro bruto.", "comeco": "Retirando impostos e devoluções, chego a…"},
          {"pergunta": "Calcule o EBITDA a partir do EBIT, mostrando como chegou a ele.", "comeco": "Depois das despesas operacionais, o EBIT é…"},
          {"pergunta": "Complete a DRE do EBIT ao lucro líquido, mostrando o LAIR e os tributos.", "comeco": "Descontando as despesas financeiras, encontro…"},
          {"pergunta": "Que resposta você daria a Marta sobre o resultado disponível para destinação?", "comeco": "Marta, o resultado do mês é…"}
        ],
        "dica": "Desconte cada grupo uma vez. A depreciação já reduziu o EBIT; some-a de volta somente para calcular o EBITDA.",
        "contas": [
          {"conta": "200000 - 30000 - 10000", "resultado": "160.000,00"},
          {"conta": "160000 - 90000", "resultado": "70.000,00"},
          {"conta": "70000 - 40000", "resultado": "30.000,00"},
          {"conta": "30000 + 5000", "resultado": "35.000,00"},
          {"conta": "30000 - 8000", "resultado": "22.000,00"},
          {"conta": "34 / 100", "resultado": "0,34"},
          {"conta": "22000 * 0.34", "resultado": "7.480,00"},
          {"conta": "22000 - 7480", "resultado": "14.520,00"}
        ],
        "resposta_comentada": "**Passo 1.** Receita líquida = 200.000,00 − 30.000,00 − 10.000,00 = R$ 160.000,00. Lucro bruto = 160.000,00 − 90.000,00 = R$ 70.000,00.\n\n**Passo 2.** EBIT = 70.000,00 − 40.000,00 = R$ 30.000,00. EBITDA = 30.000,00 + 5.000,00 = R$ 35.000,00. A depreciação já estava nas despesas; só a somamos de volta no EBITDA.\n\n**Passo 3.** LAIR = 30.000,00 − 8.000,00 = R$ 22.000,00. IR e CSLL = 22.000,00 × 0,34 = R$ 7.480,00. Lucro líquido = 22.000,00 − 7.480,00 = R$ 14.520,00.\n\n**Passo 4.** Marta, o lucro do mês é R$ 14.520,00. Esse resultado aumenta o PL antes da destinação aos sócios. Ele orienta quanto reter, mas não informa sozinho o dinheiro disponível para uma retirada: parte das vendas pode ainda não ter sido recebida."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "A DRE registra o desempenho do período por competência: uma venda entra quando realizada, mesmo que ainda não recebida.",
        "Receita líquida = receita bruta − deduções; lucro bruto = receita líquida − CMV ou CPV.",
        "EBIT desconta despesas operacionais; EBITDA soma de volta depreciação e amortização já descontadas.",
        "Depois do resultado financeiro e de outros não operacionais, vem o LAIR; IR e CSLL reduzem esse valor até o lucro líquido.",
        "LALUR ajusta o lucro para calcular tributos; lucro líquido aumenta o PL, e dividendos reduzem o PL sem virar despesa da DRE."
      ],
      "glossario": [
        {"termo": "DRE", "def": "Demonstração do Resultado do Exercício: mostra o resultado de um período pelo regime de competência."},
        {"termo": "Deduções", "def": "Impostos sobre vendas, devoluções, abatimentos e descontos incondicionais retirados da receita bruta."},
        {"termo": "CMV e CPV", "def": "Custo das mercadorias vendidas no comércio e dos produtos vendidos na indústria."},
        {"termo": "EBIT", "def": "Lucro operacional, antes do resultado financeiro e dos tributos sobre o lucro."},
        {"termo": "EBITDA", "def": "EBIT acrescido da depreciação e da amortização já descontadas; não equivale a dinheiro disponível."},
        {"termo": "LAIR", "def": "Lucro Antes do Imposto de Renda: resultado anterior à dedução de IR e CSLL."},
        {"termo": "LALUR", "def": "Livro que registra adições e exclusões para passar do LAIR ao lucro real."},
        {"termo": "Lucro líquido", "def": "Resultado final da DRE, que aumenta o patrimônio líquido antes da destinação aos sócios."}
      ]
    }
  ]
};
