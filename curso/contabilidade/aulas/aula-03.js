(window.CURSO_AULAS = window.CURSO_AULAS || {})["03"] = {
  "n": "03",
  "parte": "B",
  "titulo": "A contabilidade que decide",
  "objetivo": "Saber para quem servem os registros contábeis, que qualidades eles precisam ter e que regras usar para registrar os fatos da loja no lugar e no mês certos.",
  "minutos": 30,
  "tabelas": {
    "relatorios": {
      "fonte": "nenhum",
      "titulo": "Três relatórios, três perguntas",
      "colunas": ["Relatório", "Pergunta", "O que mostra"],
      "numericas": [],
      "linhas": [
        ["Balanço Patrimonial (BP)", "O que a empresa controla e deve nesta data?", "Ativos, passivos e patrimônio líquido"],
        ["Demonstração do Resultado do Exercício (DRE)", "Houve lucro ou prejuízo no período?", "Receitas e despesas pela competência"],
        ["Demonstração dos Fluxos de Caixa (DFC)", "Por que o dinheiro disponível mudou no período?", "Entradas e saídas de dinheiro"]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "De quem é a conta? De qual mês é a venda?",
      "texto": "Marta está terminando de anotar tudo o que aconteceu na loja em dezembro. Ela vendeu e entregou produtos, mas receberá só em janeiro. Também usou o cartão da loja para pagar a luz da própria casa. Você vai ajudá-la a separar o que pertence à loja e quando registrar cada fato.",
      "quadrinho": [
        {"quem": "dona", "fala": "Vendi R$ 20.000,00 em dezembro, mas recebo em janeiro. Posso registrar a venda em janeiro?"},
        {"quem": "dona", "fala": "E os R$ 1.500,00 da luz da minha casa? Paguei com o cartão da loja."},
        {"quem": "voce", "fala": "Vamos descobrir de quem é cada gasto e o que determina o mês de uma venda."}
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "Quem precisa desses registros?",
      "texto": "A loja de Marta tem R$ 600,00 em dinheiro e mercadorias, espera receber R$ 400,00 de clientes e deve R$ 300,00. Esses bens, direitos de receber e obrigações de pagar formam seu [[patrimônio|Conjunto de bens, direitos e obrigações.]]. A [[contabilidade|Registro e interpretação dos fatos que afetam o patrimônio.]] registra e interpreta essas informações. A contabilidade **gerencial** atende quem administra: usuários internos, como Marta e seus gerentes. A **financeira** informa usuários externos: investidores, que colocam dinheiro no negócio; credores, a quem a empresa deve; e governo.",
      "exemplo": "O [[CPC 00|Estrutura Conceitual que orienta os relatórios contábeis.]] é a norma brasileira chamada Estrutura Conceitual: orienta para quem servem os relatórios contábeis, que qualidades devem ter e como definir e medir o que eles registram."
    },
    {
      "tipo": "conceito",
      "titulo": "O que torna uma informação útil?",
      "texto": "Uma dívida esquecida pode mudar a decisão de emprestar à loja. As **características qualitativas** são qualidades da informação. Na versão cobrada na prova, três são **fundamentais**, isto é, indispensáveis:\n- [[Relevância|Capacidade de fazer diferença em uma decisão.]]: ajuda a decidir.\n- [[Materialidade|Importância de uma informação cuja ausência ou distorção pode mudar uma decisão.]]: omitir ou alterar o dado pode mudar a decisão, pelo valor ou pela natureza do fato.\n- [[Fidedignidade|Representação completa, neutra e livre de erro.]]: informação completa, sem favorecer alguém e sem erro no modo de representar o fato.",
      "atencao": "A materialidade é um aspecto da relevância próprio de cada empresa; na prova, ela aparece como uma característica à parte. Estimativas podem ser fidedignas quando suas bases e limitações são bem explicadas."
    },
    {
      "tipo": "conceito",
      "titulo": "Como melhorar uma informação útil?",
      "texto": "Marta quer comparar lojas e conferir os registros. Quatro qualidades de melhoria ajudam:\n- [[Comparabilidade|Permite identificar semelhanças e diferenças entre períodos e empresas.]]: comparar períodos e empresas. Manter métodos coerentes, a **consistência**, ajuda nisso.\n- [[Verificabilidade|Observadores independentes conseguem conferir a informação.]]: outras pessoas conseguem conferir, contando dinheiro ou refazendo uma conta.\n- [[Tempestividade|Informação disponível a tempo de influenciar a decisão.]]: chegar antes da decisão.\n- [[Compreensibilidade|Apresentação clara e concisa da informação.]]: apresentar com clareza para quem conhece negócios e lê com atenção.",
      "diagrama": {
        "tipo": "arvore",
        "raiz": "Qualidades da informação",
        "ramos": [
          {"texto": "Fundamentais", "filhos": ["Relevância", "Materialidade", "Fidedignidade"]},
          {"texto": "De melhoria", "filhos": ["Comparabilidade", "Verificabilidade", "Tempestividade e compreensibilidade"]}
        ],
        "nota": "As fundamentais precisam estar presentes juntas. As quatro qualidades de melhoria ajudam a usar a informação."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Pré-aula 02, Q1: a comparabilidade na contabilidade permite que os usuários:",
        "opcoes": [
          "Entendam os registros apenas de uma empresa, sem comparar períodos.",
          "Dispensem a conferência dos registros por outras pessoas.",
          "Comparem informações de diferentes períodos e empresas.",
          "Troquem livremente de método para melhorar os números apresentados.",
          "Mantenham sempre as mesmas práticas, mesmo quando as regras mudam."
        ],
        "correta": 2,
        "explicacao": "Comparabilidade permite perceber semelhanças e diferenças entre períodos e empresas. A consistência dos métodos ajuda a comparar, mas não autoriza ignorar mudanças nas regras nem dispensa a conferência."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O que a loja controla, deve e tem de saldo?",
      "texto": "A loja controla R$ 1.000,00 em bens e direitos e deve R$ 300,00 por compras já feitas. [[Ativo|Recurso controlado, vindo de um fato passado, capaz de gerar benefícios.]] é o recurso que a empresa controla e que pode trazer benefícios, como gerar dinheiro; [[passivo|Obrigação atual decorrente de um fato passado.]] é a obrigação de entregar recursos por algo já ocorrido. O [[patrimônio líquido|Parcela dos ativos que resta após descontar os passivos.]] é o que sobra para os donos. A representa ativo; P, passivo; PL, patrimônio líquido: **1.000 − 300 = R$ 700,00**. Portanto, **PL = A − P**.",
      "atencao": "Controlar é poder usar o recurso e obter seus benefícios. Só planejar uma compra não cria passivo: a obrigação ainda não existe."
    },
    {
      "tipo": "conceito",
      "titulo": "O que aumenta ou reduz o patrimônio líquido?",
      "texto": "Um serviço de R$ 200,00 cria direito de receber e aumenta o PL: é [[receita|Aumento de ativo ou redução de passivo que aumenta o PL, exceto contribuição dos sócios.]]. Luz consumida pela loja gera obrigação de R$ 50,00 e reduz o PL: é [[despesa|Redução de ativo ou aumento de passivo que reduz o PL, exceto distribuição aos sócios.]]. Receitas aumentam ativos ou reduzem passivos, elevando o PL. Despesas fazem o inverso. Dinheiro colocado pelos sócios, os donos, não é receita; dinheiro distribuído a eles não é despesa.",
      "atencao": "Comprar um recurso ainda não consumido não o transforma imediatamente em despesa. Um empréstimo também não é receita: entram dinheiro e uma obrigação de igual valor."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Pré-aula 02, Q2: a Tesla comprou um lote de baterias para seus carros elétricos. As baterias ainda serão usadas na produção. Segundo o CPC 00, como classificar o lote?",
        "opcoes": [
          "Ativo: recurso controlado que pode gerar benefícios futuros.",
          "Despesa: toda compra vira despesa no momento do pagamento.",
          "Passivo: o lote ainda não foi usado.",
          "Patrimônio líquido: o lote será usado no futuro."
        ],
        "correta": 0,
        "explicacao": "O lote é ativo: a compra já ocorreu, a Tesla controla as baterias e espera benefícios de seu uso. Se a compra for a prazo, a dívida é o passivo; as baterias continuam sendo o ativo. PL é a diferença entre ativos e passivos."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "multipla",
        "enunciado": "Marque todas as características fundamentais da informação, na versão cobrada na prova.",
        "opcoes": ["Relevância", "Comparabilidade", "Materialidade", "Tempestividade", "Fidedignidade"],
        "corretas": [0, 2, 4],
        "explicacao": "Na prova, as fundamentais são relevância, materialidade e fidedignidade. Comparabilidade e tempestividade são de melhoria. Materialidade trata da importância de uma informação para as decisões daquela empresa."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Uma empresa prepara informações para seus gerentes decidirem sobre a loja e outras para um banco avaliar um empréstimo. Classifique o foco de cada conjunto, nessa ordem.",
        "opcoes": [
          "Financeira e gerencial.",
          "Gerencial e financeira.",
          "Financeira e financeira, porque ambas usam dinheiro.",
          "Gerencial e gerencial, porque ambas apoiam decisões."
        ],
        "correta": 1,
        "explicacao": "Gerentes são usuários internos: foco gerencial. O banco é usuário externo: foco financeiro. Os dois conjuntos apoiam decisões; a distinção aqui é quem usa a informação."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Qual mês recebe o registro?",
      "texto": "Marta entrega R$ 200,00 em produtos em dezembro e recebe em janeiro. Um **regime** é a regra para escolher quando registrar. Na [[competência|Registro no período em que o fato ocorre, independentemente do pagamento.]], a receita pertence a dezembro. A entrega é o **fato gerador**, o acontecimento que origina a receita. O regime de [[caixa|Registro das entradas e saídas quando o dinheiro é recebido ou pago.]] acompanha o dinheiro: a entrada ocorre em janeiro. Pela competência, despesas pertencem ao período do consumo, mesmo se pagas depois.",
      "exemplo": "Princípios contábeis orientam os registros. O princípio da competência aplica essa regra às receitas e às despesas relacionadas a elas. Venda a prazo significa receber depois; isso não adia a receita de uma entrega já feita.",
      "diagrama": {
        "tipo": "lado_a_lado",
        "esquerda": {"titulo": "Competência", "itens": ["Entrega em dezembro", "Receita em dezembro: R$ 200,00"]},
        "direita": {"titulo": "Caixa", "itens": ["Recebimento em janeiro", "Entrada em janeiro: R$ 200,00"]},
        "nota": "Competência acompanha o fato; Caixa acompanha o recebimento ou pagamento."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa vendeu e entregou 10 produtos por R$ 200,00 cada em dezembro. Receberá tudo em janeiro. Calcule a receita de dezembro pelo regime de competência.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 2000,
        "calculo": "10 * 200",
        "explicacao": "Receita de dezembro = quantidade entregue × preço de venda = 10 × 200 = **R$ 2.000,00**. A entrega ocorreu em dezembro, então a venda inteira pertence a esse mês. Receber em janeiro muda a data da entrada de dinheiro."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O cartão da loja transforma a luz de casa em despesa?",
      "texto": "Marta pagou R$ 1.500,00 da luz da própria casa com o cartão da loja. O consumo foi pessoal. O princípio da [[entidade|Separação entre o patrimônio da empresa e o dos sócios.]] exige separar o patrimônio da empresa do patrimônio dos donos. Portanto, a conta não é despesa da loja. **Princípios contábeis** são orientações para registrar e interpretar os fatos; entidade é uma delas.",
      "atencao": "O pagamento precisa ser registrado e tratado como valor de Marta, por exemplo a devolver à loja. O meio de pagamento não muda quem consumiu a energia."
    },
    {
      "tipo": "conceito",
      "titulo": "Registrar pensando em continuar, sem deixar fatos de fora",
      "texto": "A loja usa seus equipamentos e pretende seguir aberta. O princípio da [[continuidade|Suposição de que a empresa continuará funcionando.]] orienta os registros considerando que a empresa continuará funcionando. Se surge uma perda, Marta precisa registrá-la por inteiro e a tempo de decidir. É o princípio da [[oportunidade|Registro completo e no momento adequado dos fatos patrimoniais.]]: informação completa e no momento adequado, sem deixar de registrar o fato só porque falta uma formalidade, como um documento oficial.",
      "exemplo": "Continuidade trata da expectativa de a empresa seguir funcionando. Oportunidade trata da integridade e do momento do registro. Competência, já vista, determina a qual período pertencem receitas e despesas."
    },
    {
      "tipo": "conceito",
      "titulo": "Como escolher quando há incerteza?",
      "texto": "As mercadorias guardadas para venda, o **estoque**, têm duas avaliações igualmente válidas: R$ 100.000,00 e R$ 120.000,00. Uma obrigação tem estimativas de R$ 45.000,00 e R$ 50.000,00. Pela [[prudência|No curso, menor ativo e maior passivo entre alternativas igualmente válidas.]], a regra da prova escolhe o menor ativo e o maior passivo: R$ 100.000,00 e R$ 50.000,00. O objetivo é ter cautela com a incerteza.",
      "atencao": "A condição é haver alternativas igualmente válidas. Prudência não permite inventar dívidas nem diminuir arbitrariamente o valor de um recurso."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Há avaliações igualmente válidas de R$ 100.000,00 ou R$ 120.000,00 para um estoque e de R$ 45.000,00 ou R$ 50.000,00 para uma obrigação. Pelo princípio da prudência, escolha estoque e obrigação, nessa ordem.",
        "opcoes": [
          "R$ 120.000,00 e R$ 45.000,00.",
          "R$ 100.000,00 e R$ 45.000,00.",
          "R$ 120.000,00 e R$ 50.000,00.",
          "R$ 100.000,00 e R$ 50.000,00."
        ],
        "correta": 3,
        "explicacao": "O estoque é ativo: escolha R$ 100.000,00, o menor valor. A obrigação é passivo: escolha R$ 50.000,00, o maior valor. Escolher o menor para os dois itens esquece que a regra do passivo é inversa."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada situação ao princípio contábil que ela exemplifica.",
        "pares": [
          ["Separar a viagem pessoal da dona das despesas da loja", "Entidade"],
          ["Registrar em dezembro a venda entregue em dezembro e recebida depois", "Competência"],
          ["Considerar que a empresa seguirá funcionando", "Continuidade"],
          ["Registrar uma perda por inteiro e sem atraso indevido", "Oportunidade"],
          ["Escolher o maior passivo entre estimativas igualmente válidas", "Prudência"]
        ],
        "explicacao": "Entidade separa loja e dona; competência determina o período; continuidade pressupõe funcionamento futuro; oportunidade exige registro completo e no momento adequado; prudência orienta a escolha entre estimativas igualmente válidas. São os cinco princípios do curso."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "De qual data vem o valor registrado?",
      "texto": "Uma máquina custou R$ 8.000,00 quando comprada. **Mensurar** é atribuir um valor em dinheiro; a base de mensuração é a regra usada. O [[custo histórico|Valor baseado na transação que originou o item.]] parte do preço da compra e não muda quando os preços de mercado mudam depois. O [[valor atual|Valor que considera as condições na data da avaliação.]] considera as condições de hoje. Dentro dele, o [[valor justo|Preço de mercado para vender um ativo ou quitar um passivo.]] considera o preço de mercado: quanto seria recebido pela venda da máquina hoje.",
      "atencao": "A avaliação pode exigir estimativas e julgamento. Usar uma base diferente não é escolher livremente o número mais conveniente."
    },
    {
      "tipo": "conceito",
      "titulo": "Quanto vale usar a máquina?",
      "texto": "Marta pode vender a máquina ou continuar usando-a. O [[valor em uso|Valor presente do dinheiro que se espera obter com o uso de um recurso.]] considera o dinheiro que o uso deve gerar no futuro, convertido para quanto vale hoje. Esse valor de hoje é o **valor presente**, calculado com juros. É outra forma de valor atual. Ele depende do uso na empresa, enquanto o valor justo considera o preço de mercado.",
      "exemplo": "Se o dinheiro só chegar daqui a um ano, ele não vale o mesmo que dinheiro disponível hoje. Por isso, não basta somar todos os recebimentos futuros sem considerar o tempo."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Uma empresa avalia uma máquina pelo valor presente do dinheiro que espera obter ao utilizá-la. Qual base de mensuração está usando?",
        "opcoes": ["Custo histórico", "Valor justo", "Valor em uso"],
        "correta": 2,
        "explicacao": "Valor em uso traz para hoje o dinheiro futuro esperado com o uso da máquina. Custo histórico parte da transação original. Valor justo considera o preço de mercado, não o uso específico pela empresa."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Qual relatório responde à pergunta de Marta?",
      "texto": "Os registros formam **demonstrações contábeis**, relatórios sobre a empresa. O [[BP|Balanço Patrimonial: ativos, passivos e PL em uma data.]] é uma fotografia do patrimônio numa data. A [[DRE|Demonstração do Resultado do Exercício: desempenho do período pela competência.]] mostra receitas e despesas do período: receitas maiores geram **lucro**; despesas maiores, **prejuízo**. A [[DFC|Demonstração dos Fluxos de Caixa: entradas e saídas de dinheiro no período.]] acompanha recebimentos e pagamentos. A tabela traduz as três perguntas.",
      "tabela": "relatorios",
      "exemplo": "O lucro da DRE aumenta o PL mostrado no BP; o prejuízo o reduz. A DFC explica a mudança do dinheiro disponível que aparece no BP. Ter receita ainda não recebida ajuda a entender por que lucro e dinheiro disponível diferem."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada pergunta à demonstração contábil que a responde diretamente.",
        "pares": [
          ["Quais são os ativos, passivos e o PL nesta data?", "Balanço Patrimonial (BP)"],
          ["Houve lucro ou prejuízo neste período?", "Demonstração do Resultado do Exercício (DRE)"],
          ["Como as entradas e saídas mudaram o dinheiro disponível?", "Demonstração dos Fluxos de Caixa (DFC)"]
        ],
        "explicacao": "BP é a fotografia de uma data. DRE acompanha receitas e despesas pela competência. DFC acompanha o dinheiro recebido e pago. O lucro da DRE afeta o PL do BP; a DFC explica a mudança do caixa do BP."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta está terminando de anotar na contabilidade o que aconteceu na loja em dezembro. Vendeu e entregou R$ 20.000,00 em produtos a prazo em dezembro; receberá tudo em janeiro. Dessa venda, recebeu R$ 0,00 em dezembro. Também pagou R$ 1.500,00 da luz da própria casa com o cartão da loja. Ela quer decidir em qual mês registrar a venda e como tratar o gasto pessoal.",
        "enunciado": "Oriente Marta sobre o mês da venda, o recebimento e a conta pessoal.",
        "passos": [
          {"pergunta": "Qual é a receita de dezembro dessa venda pelo regime de competência?", "comeco": "A receita de dezembro é…"},
          {"pergunta": "Quanto dessa venda entrou no caixa em dezembro?", "comeco": "Em dezembro entrou…"},
          {"pergunta": "A luz da casa é despesa da loja, segundo o princípio da entidade?", "comeco": "Pelo princípio da entidade…"},
          {"pergunta": "Juntando os passos anteriores: o que Marta anota em dezembro, o que fica para janeiro e o que faz com a conta de luz?", "comeco": "Marta, registre…"}
        ],
        "dica": "Separe o mês da entrega do mês do recebimento. Para a luz, observe quem consumiu a energia, não qual cartão foi usado.",
        "contas": [],
        "resposta_comentada": "**Passo 1.** A receita de dezembro é R$ 20.000,00: os produtos foram entregues nesse mês. Pela competência, receber depois não adia a receita.\n\n**Passo 2.** Entrou R$ 0,00 dessa venda no caixa em dezembro. O recebimento ocorrerá em janeiro.\n\n**Passo 3.** Não. Os R$ 1.500,00 são da luz da casa de Marta. O princípio da entidade separa o patrimônio da dona do patrimônio da loja.\n\n**Passo 4.** Marta, registre a receita em dezembro e o recebimento em janeiro. Registre também a luz de casa como valor seu, separado das despesas da loja: devolva-o à loja ou trate-o como dinheiro que você retirou dela. Não deixe o pagamento sem registro."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "A contabilidade gerencial atende usuários internos; a financeira informa usuários externos.",
        "Competência acompanha o fato; caixa acompanha o dinheiro. Entidade separa o patrimônio da loja do da dona.",
        "Na prova, as fundamentais são relevância, materialidade e fidedignidade; as de melhoria são comparabilidade, verificabilidade, tempestividade e compreensibilidade.",
        "PL = ativo − passivo. Receitas aumentam e despesas reduzem o PL, excluídas as contribuições e distribuições dos sócios. Prudência: menor ativo e maior passivo entre alternativas igualmente válidas.",
        "Custo histórico parte da transação; valor atual considera a data da avaliação e inclui valor justo e valor em uso. BP mostra o patrimônio; DRE, lucro ou prejuízo; DFC, entradas e saídas de dinheiro."
      ],
      "glossario": [
        {"termo": "Competência", "def": "Registra os fatos no período em que ocorrem, independentemente do recebimento ou pagamento."},
        {"termo": "Entidade", "def": "Princípio que separa o patrimônio da empresa do patrimônio dos sócios."},
        {"termo": "Ativo", "def": "Recurso controlado, decorrente de fato passado e capaz de gerar benefícios."},
        {"termo": "Passivo", "def": "Obrigação atual decorrente de fato passado."},
        {"termo": "Patrimônio líquido", "def": "Parcela dos ativos restante após descontar os passivos."},
        {"termo": "Fidedignidade", "def": "Informação completa, neutra e livre de erro."},
        {"termo": "Valor em uso", "def": "Valor presente do dinheiro futuro esperado com o uso de um recurso."}
      ]
    }
  ]
};
