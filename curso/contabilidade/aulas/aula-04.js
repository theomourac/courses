(window.CURSO_AULAS = window.CURSO_AULAS || {})["04"] = {
  "n": "04",
  "parte": "B",
  "titulo": "Balanço patrimonial",
  "objetivo": "Montar e ler um balanço patrimonial e identificar como cada operação altera o ativo circulante e o patrimônio líquido.",
  "minutos": 35,
  "tabelas": {
    "balanco_130": {
      "fonte": "nenhum",
      "titulo": "Balanço de uma empresa em 31 de dezembro (R$)",
      "colunas": [
        "Ativo",
        "Valor (R$)",
        "Passivo + PL",
        "Valor (R$)"
      ],
      "numericas": [
        1,
        3
      ],
      "linhas": [
        [
          "Bens",
          "80.000.000,00",
          "Dívidas",
          "100.000.000,00"
        ],
        [
          "Direitos",
          "50.000.000,00",
          "Patrimônio líquido",
          "30.000.000,00"
        ],
        [
          "Total do ativo",
          "130.000.000,00",
          "Total do passivo + PL",
          "130.000.000,00"
        ]
      ]
    }
  },
  "cartoes": [
    {
      "tipo": "abertura",
      "titulo": "Mais dinheiro significa mais riqueza?",
      "texto": "Marta quer pegar dinheiro emprestado, comprar uma van e distribuir aos sócios parte do que a loja ganhou. Antes de decidir, você vai montar uma fotografia da loja: o [[balanço patrimonial|Relatório dos bens, direitos, dívidas e patrimônio líquido em uma data.]], ou BP. Ele mostra o que a empresa tem e deve **naquela data**, não quanto ganhou durante o ano.",
      "quadrinho": [
        {
          "quem": "dona",
          "fala": "Vou pegar R$ 100.000,00 emprestados, comprar a van e distribuir parte do lucro. Esse empréstimo aumenta nossa riqueza, certo?"
        },
        {
          "quem": "voce",
          "fala": "Vamos acompanhar o que entra na loja e o que ela passa a dever antes de decidir."
        }
      ]
    },
    {
      "tipo": "conceito",
      "titulo": "O que a loja tem e o que deve?",
      "texto": "Marta tem R$ 600,00 em dinheiro e R$ 400,00 a receber: R$ 1.000,00 de [[ativo|Bens e direitos controlados pela empresa, com benefício econômico.]] (A). **Bens** são itens como dinheiro; **direitos** são valores a receber. Deve R$ 300,00: esse é o [[passivo|Obrigações da empresa com terceiros.]] (P). Sobram R$ 700,00 de [[patrimônio líquido|Diferença entre ativo e passivo: parcela dos sócios.]] (PL), a parcela dos sócios. Os dois lados fecham: 1.000 = 300 + 700. Assim, **A = P + PL**.",
      "atencao": "O PL não é uma conta bancária separada. Ele é a diferença entre tudo que a empresa tem e tudo que deve.",
      "exemplo": "Uma conta é uma categoria do balanço. Caixa registra dinheiro disponível; estoques registram mercadorias para vender; fornecedores registra o que a empresa deve por compras a prazo."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tem passivo de R$ 130.000,00 e PL de R$ 125.000,00, formado apenas pelo dinheiro investido pelos sócios. Calcule o ativo total.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 255000,
        "calculo": "130000 + 125000",
        "explicacao": "Ativo = passivo + PL. Digite 130.000 + 125.000 = **R$ 255.000,00**. Os recursos de terceiros e dos sócios sustentam os bens e direitos. Fonte: Pré-aula 02, Q7."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "De onde veio e onde foi aplicado?",
      "texto": "Na tabela, bens de R$ 80.000.000,00 e direitos de R$ 50.000.000,00 somam ativo (A) de R$ 130.000.000,00. Tirando o passivo (P) de R$ 100.000.000,00, sobram R$ 30.000.000,00 para os sócios (PL): **PL = A − P**. O ativo mostra as **aplicações**, onde os recursos foram investidos. Passivo e PL mostram as **origens**, como esses recursos foram obtidos: [[capital de terceiros|Recursos de credores, registrados no passivo.]], vindo de credores, e [[capital próprio|Recursos dos sócios e resultados mantidos na empresa, registrados no PL.]], vindo dos sócios.",
      "exemplo": "O valor que os sócios entregam à empresa como investimento é o [[capital social|Investimento dos sócios registrado no patrimônio líquido.]]. Ele compõe o capital próprio; o dinheiro emprestado pelo banco compõe o capital de terceiros.",
      "tabela": "balanco_130",
      "diagrama": {
        "tipo": "lado_a_lado",
        "esquerda": {
          "titulo": "Ativo",
          "itens": [
            "Aplicações: onde investir",
            "Bens e direitos"
          ]
        },
        "direita": {
          "titulo": "Passivo + PL",
          "itens": [
            "Origens: como obter recursos",
            "Passivo: capital de terceiros",
            "PL: capital próprio"
          ]
        },
        "nota": "Ativo e Passivo + PL têm o mesmo total: cada aplicação tem uma origem."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa possui R$ 200.000,00 em bens e direitos e R$ 120.000,00 em obrigações. Calcule o patrimônio líquido.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 80000,
        "calculo": "200000 - 120000",
        "explicacao": "PL = ativo − passivo. Digite 200.000 − 120.000 = **R$ 80.000,00**. Somar as dívidas ao ativo não encontra a parcela dos sócios: é preciso descontá-las. Fonte: lista de exercícios de balanço da disciplina, Q32."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "E se as dívidas forem maiores?",
      "texto": "Uma loja tem ativo de R$ 1.000,00, mas deve R$ 1.200,00. Seu PL é negativo em R$ 200,00: os bens e direitos não cobrem as dívidas. Isso se chama [[passivo a descoberto|Situação em que o passivo supera o ativo e o PL é negativo.]]. Para descobrir a dívida, use A para ativo, P para passivo e PL para patrimônio líquido. A conta é 1.000 − (−200) = 1.200. A fórmula é **P = A − PL**.",
      "atencao": "Subtrair um PL negativo equivale a somar seu valor: mantenha o sinal negativo entre parênteses na calculadora."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "No fim do ano, um clube tinha ativo de R$ 1.200.000,00 e patrimônio líquido de −R$ 500.000,00. Calcule o passivo.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 1700000,
        "calculo": "1200000 - (-500000)",
        "explicacao": "Passivo = ativo − PL. Digite 1.200.000 − (−500.000) = **R$ 1.700.000,00**. O PL negativo indica dívidas maiores que os bens e direitos. Fonte: Pré-aula 02, Q5."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Precisa estar no nome da empresa?",
      "texto": "Marta usa uma van por [[leasing financeiro|Contrato que transfere ao negócio o controle, os riscos e os benefícios do uso de um bem.]], contrato parecido com um aluguel longo. Ele lhe dá o controle do uso, os riscos e os benefícios da van, embora ela pertença legalmente a outra empresa. Esse direito entra no ativo. **Controle** significa poder dirigir o uso e obter os benefícios. O recurso deve vir de um fato já ocorrido, ter valor mensurável em dinheiro e potencial para ajudar o negócio.",
      "atencao": "Dinheiro em espécie é bem. Dinheiro depositado no banco é direito: a empresa pode exigir esse valor do banco. Ambos pertencem ao ativo."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Qual alternativa apresenta apenas contas do ativo?",
        "opcoes": [
          "Contas bancárias, estoques e capital social",
          "Contas bancárias, estoques e veículos",
          "Contas a receber, estoques e empréstimos a pagar",
          "Contas bancárias, estoques e salários a pagar"
        ],
        "correta": 1,
        "explicacao": "Contas bancárias são direitos; estoques e veículos são bens. Capital social pertence ao PL. Empréstimos e salários a pagar são obrigações, portanto passivo. Adaptado da Pré-aula 02, Q8."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "O que já é dinheiro ou vira dinheiro logo?",
      "texto": "R$ 1.000,00 no caixa já podem pagar uma conta. Uma venda a receber em 30 dias ainda precisa virar dinheiro. Essa rapidez de conversão se chama [[liquidez|Rapidez com que um bem ou direito se transforma em dinheiro.]]. O ativo é apresentado do mais líquido ao menos líquido. O [[ativo circulante|Dinheiro e bens ou direitos que se transformam em dinheiro em até 12 meses.]] (AC) reúne caixa, banco, valores a receber e estoques que virarão dinheiro em até 12 meses, contados da data do balanço.",
      "exemplo": "Uma aplicação financeira é dinheiro colocado para render. Se vence em 60 dias, pertence ao AC. Um valor a receber em 18 meses fica fora do AC: o prazo supera 12 meses."
    },
    {
      "tipo": "conceito",
      "titulo": "Onde ficam os recursos de prazo longo?",
      "texto": "Uma máquina usada por anos não é mercadoria para vender logo. Ela fica no [[ativo não circulante|Bens e direitos de longo prazo, agrupados em quatro categorias.]] (ANC). Há quatro grupos:\n- [[Realizável a longo prazo|Grupo do ANC que reúne recebimentos após 12 meses.]]: valores a receber após 12 meses.\n- [[Investimentos|Grupo do ANC para fatias de outras empresas mantidas por longo prazo e bens fora do uso diário do negócio.]]: fatias de outras empresas mantidas por longo prazo ou bens fora do uso diário, como prédio alugado a terceiros.\n- [[Imobilizado|Bens físicos utilizados no negócio por longo prazo.]]: bens físicos usados no negócio, como máquinas e a van de entregas.\n- [[Intangível|Direitos sem forma física usados no negócio.]]: direitos sem forma física, como marca comprada e licença de uso de programa.",
      "diagrama": {
        "tipo": "arvore",
        "raiz": "Ativo não circulante (ANC)",
        "ramos": [
          {
            "texto": "Realizável a longo prazo",
            "filhos": [
              "Valor a receber em 18 meses"
            ]
          },
          {
            "texto": "Investimentos",
            "filhos": [
              "Prédio alugado a terceiros"
            ]
          },
          {
            "texto": "Imobilizado",
            "filhos": [
              "Máquinas e van de entregas"
            ]
          },
          {
            "texto": "Intangível",
            "filhos": [
              "Marca comprada"
            ]
          }
        ],
        "nota": "Dentro do ANC, observe o prazo e a finalidade: receber depois, manter um investimento ou usar no negócio."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Qual dívida vence primeiro?",
      "texto": "Uma compra já feita para pagar em 60 dias cria dívida com fornecedores. Ela entra no [[passivo circulante|Obrigações que vencem em até 12 meses da data do balanço.]] (PC): pagamento em até 12 meses. Um empréstimo a pagar integralmente em três anos entra no [[passivo não circulante|Obrigações com vencimento após 12 meses da data do balanço.]] (PNC). O passivo segue a [[exigibilidade|Prazo em que uma obrigação pode ser cobrada.]], o prazo em que o pagamento pode ser cobrado: primeiro o que vence antes. O PL vem separado; capital dos sócios não é dívida bancária.",
      "atencao": "Classifique pelo vencimento. Num empréstimo parcelado, a parte que vence em até 12 meses vai ao PC; a parte posterior, ao PNC.",
      "exemplo": "Para montar o balanço, separe as contas em AC, ANC, PC, PNC e PL. Some cada grupo e confira: o total do ativo deve igualar o total do passivo mais PL."
    },
    {
      "tipo": "conceito",
      "titulo": "O que aumenta ou reduz a parcela dos sócios?",
      "texto": "Marta tinha PL de R$ 1.000,00, entregou mais R$ 200,00 como investimento e retirou R$ 100,00 de lucros anteriores. Entregar recursos como investimento é fazer um [[aporte|Entrega de recursos pelos sócios como investimento na empresa.]]. Pagar de fato o capital prometido é **integralizar capital**. Distribuições de lucro aos sócios são [[dividendos|Parte dos lucros destinada aos sócios, que reduz o PL.]]. O novo PL é 1.000 + 200 − 100 = R$ 1.100,00. Para essas operações, **PL final = PL inicial + aporte − dividendos**. Lucro mantido na empresa também aumenta o PL; prejuízo o reduz.",
      "exemplo": "Receitas são valores ganhos com vendas e serviços; despesas são gastos consumidos para funcionar. Lucro é o que sobra das receitas depois das despesas; se elas forem maiores, há prejuízo. Lucros acumulados são ganhos mantidos na empresa, dentro do PL.",
      "atencao": "Dividendos reduzem o PL quando declarados, isto é, quando a distribuição é formalizada. Se forem pagos depois, o pagamento quita a dívida com os sócios; não reduz o PL outra vez."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tem PL de R$ 250.000,00. Os sócios integralizam R$ 40.000,00 de capital e a empresa distribui R$ 18.000,00 dos lucros acumulados em dividendos, sem declaração anterior. Sem outras operações, calcule o novo PL.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 272000,
        "calculo": "250000 + 40000 - 18000",
        "explicacao": "PL final = PL inicial + aporte − dividendos. Digite 250.000 + 40.000 − 18.000 = **R$ 272.000,00**. A integralização aumenta a parcela dos sócios; a distribuição a reduz. Fonte: Simulado geral, Q10."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Dinheiro emprestado aumenta o PL?",
      "texto": "Marta recebe R$ 1.000,00 de empréstimo. O caixa aumenta R$ 1.000,00 e a dívida também. Como ativo e passivo sobem igualmente, o PL fica igual. Ao devolver R$ 200,00 do [[principal|Valor da dívida sem juros.]], o valor emprestado sem juros, caixa e dívida caem R$ 200,00: novamente, o PL não muda. Pagar uma dívida com fornecedor já registrada segue essa lógica. Receber dinheiro não significa necessariamente ganhar riqueza; veja a obrigação que acompanha a entrada.",
      "atencao": "A regra do pagamento de dívida aqui considera só o principal, sem juros nem outros gastos. Juros são despesa e afetam o resultado."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tem PL de R$ 410.000,00. Recebe empréstimo de longo prazo de R$ 75.000,00 e distribui R$ 22.000,00 em dividendos, sem declaração anterior. Sem outras operações, calcule o novo PL.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 388000,
        "calculo": "410000 - 22000",
        "explicacao": "O empréstimo aumenta ativo e passivo igualmente; não entra na conta do PL. Digite 410.000 − 22.000 = **R$ 388.000,00**. Só a distribuição de dividendos altera o PL nesta questão. Fonte: Simulado geral, Q11."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Comprar a van faz o ativo desaparecer?",
      "texto": "Marta compra uma van de entregas por R$ 80.000,00 à vista, pagando imediatamente. Saem R$ 80.000,00 do caixa, no AC, e entram R$ 80.000,00 em imobilizado, no ANC. **O ativo total não muda:** dinheiro virou veículo. O PL também não muda. A compra apenas troca a forma de um recurso da empresa. Nesta operação, considere somente a compra, sem juros nem outros gastos.",
      "diagrama": {
        "tipo": "fluxo",
        "etapas": [
          "Caixa no AC",
          "Compra da van à vista",
          "Van no imobilizado do ANC"
        ],
        "nota": "O valor sai do AC e entra no ANC; a compra mantém o ativo total e o PL."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Ao vender, quanto entra no circulante?",
      "texto": "Um veículo está registrado por R$ 1.000,00: esse é seu [[valor contábil|Valor pelo qual o bem está registrado no balanço.]]. Marta o vende à vista por R$ 1.200,00. O caixa recebe R$ 1.200,00, não R$ 1.000,00. Se o AC inicial era R$ 2.000,00, passa a R$ 3.200,00. Logo, **AC final = AC inicial + valor recebido**. O ANC perde o valor contábil; a diferença positiva é ganho e aumenta o PL. Diferença negativa é perda e reduz o PL.",
      "atencao": "Se a venda for pelo valor contábil, não há ganho nem perda: só troca de ANC por AC. Se o preço for diferente, o AC ainda sobe pelo recebimento inteiro."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tem AC de R$ 180.000,00. Vende à vista, pelo valor contábil, um veículo registrado no imobilizado por R$ 22.000,00. Calcule o novo ativo circulante.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 202000,
        "calculo": "180000 + 22000",
        "explicacao": "AC final = AC inicial + valor recebido. Digite 180.000 + 22.000 = **R$ 202.000,00**. O mesmo valor sai do ANC: ativo total e PL permanecem iguais. Fonte: Simulado geral, Q12."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "numero",
        "enunciado": "Uma empresa tem AC de R$ 260.000,00. Vende um equipamento do imobilizado, com valor contábil de R$ 30.000,00, recebendo R$ 34.500,00 à vista. Calcule o novo ativo circulante.",
        "unidade": "R$",
        "casas": 2,
        "resposta": 294500,
        "calculo": "260000 + 34500",
        "explicacao": "AC final = AC inicial + valor recebido. Digite 260.000 + 34.500 = **R$ 294.500,00**. Os R$ 30.000,00 saem do ANC. O ganho é 34.500 − 30.000 = R$ 4.500,00, mas o AC recebe o preço inteiro. Fonte: Simulado geral, Q13."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "associar",
        "enunciado": "Associe cada conta ao grupo do balanço. Considere o prazo informado.",
        "pares": [
          [
            "Caixa",
            "Ativo circulante (AC)"
          ],
          [
            "Máquinas usadas no negócio",
            "ANC — Imobilizado"
          ],
          [
            "Marca comprada",
            "ANC — Intangível"
          ],
          [
            "Fornecedores a pagar em 60 dias",
            "Passivo circulante (PC)"
          ],
          [
            "Empréstimo a pagar integralmente em três anos",
            "Passivo não circulante (PNC)"
          ],
          [
            "Capital social",
            "Patrimônio líquido (PL)"
          ]
        ],
        "explicacao": "Caixa já é dinheiro. Máquinas e marca comprada são usadas por mais tempo, mas só a máquina tem forma física. Fornecedores e empréstimos separam-se pelo vencimento. Capital social representa investimento dos sócios."
      }
    },
    {
      "tipo": "conceito",
      "titulo": "Tudo que parece valioso entra no ativo?",
      "texto": "A loja ficou conhecida, mas Marta não pode escolher um valor para sua marca e acrescentá-lo ao ativo. A **marca criada internamente** não é registrada como ativo: sua avaliação seria subjetiva. Uma marca comprada pode entrar, pois há um valor de aquisição. Também não se mantém no ativo algo sem benefício futuro: mercadoria estragada sem perspectiva de venda ou um **título incobrável**, valor a receber cujas possibilidades de cobrança foram esgotadas.",
      "atencao": "Estoque apenas parado não é necessariamente perdido. A exclusão aqui trata de mercadoria deteriorada, sem possibilidade de venda."
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "escolha",
        "enunciado": "Qual item não deve ser reconhecido no ativo de uma empresa?",
        "opcoes": [
          "Marca comprada de um concorrente",
          "Direito de usar uma van por leasing financeiro",
          "Marca criada e fortalecida pela própria empresa",
          "Valor a receber de cliente com pagamento esperado"
        ],
        "correta": 2,
        "explicacao": "A marca criada internamente não entra no ativo, mesmo que seja conhecida. A marca comprada tem valor de aquisição; o leasing permite reconhecer o direito de uso; o valor a receber tem benefício esperado."
      }
    },
    {
      "tipo": "pratica",
      "exercicio": {
        "tipo": "multipla",
        "enunciado": "Quais eventos alteram o PL? Marque todos. Considere cada evento isoladamente, sem juros nem outros gastos.",
        "opcoes": [
          "Receber empréstimo bancário",
          "Receber aporte dos sócios como capital social",
          "Comprar uma van à vista",
          "Registrar prejuízo do período",
          "Declarar dividendos pela primeira vez"
        ],
        "corretas": [
          1,
          3,
          4
        ],
        "explicacao": "Aporte aumenta o PL; prejuízo e dividendos declarados o reduzem. Empréstimo aumenta ativo e passivo juntos. Compra da van à vista troca caixa por imobilizado, mantendo o ativo total e o PL."
      }
    },
    {
      "tipo": "desafio",
      "exercicio": {
        "tipo": "aberta",
        "cena": "Marta, dona da loja, tem PL de R$ 300.000,00. Antes de aprovar as operações, quer saber se ficará mais rica: receberá R$ 100.000,00 de empréstimo, a pagar integralmente em três anos, comprará uma van de R$ 80.000,00 à vista e declarará e pagará R$ 20.000,00 de dividendos. Não houve declaração anterior. Há dinheiro e lucros acumulados suficientes; desconsidere juros e outras operações.",
        "enunciado": "Explique a Marta o efeito das operações no balanço e encontre o PL final.",
        "passos": [
          {
            "pergunta": "O recebimento do empréstimo muda o PL?",
            "comeco": "O empréstimo…"
          },
          {
            "pergunta": "A compra da van muda o ativo total?",
            "comeco": "Na compra da van…"
          },
          {
            "pergunta": "Qual será o PL depois da distribuição dos dividendos?",
            "comeco": "O PL final será…"
          },
          {
            "pergunta": "O que você diria a Marta sobre ficar mais rica com essas operações?",
            "comeco": "Marta, receber dinheiro emprestado…"
          }
        ],
        "dica": "Acompanhe o recurso e sua contrapartida: empréstimo traz dívida; compra troca dinheiro por van; distribuição retira parte dos lucros dos sócios.",
        "contas": [
          {
            "conta": "300000 - 20000",
            "resultado": "280.000,00"
          }
        ],
        "resposta_comentada": "**Passo 1.** Não. O empréstimo aumenta caixa (AC) e dívida (PNC) em R$ 100.000,00 cada. O PL permanece igual.\n\n**Passo 2.** Não. Saem R$ 80.000,00 do caixa, no AC, e entra uma van de R$ 80.000,00 no imobilizado, no ANC. O ativo total e o PL permanecem iguais.\n\n**Passo 3.** PL final = 300.000 − 20.000 = **R$ 280.000,00**. A declaração dos dividendos reduz o PL; o pagamento não o reduz novamente.\n\n**Passo 4.** Marta, o empréstimo traz dinheiro e obrigação de devolver. A van muda a forma do ativo. A distribuição reduz a parcela dos sócios mantida na empresa; essas operações não aumentam o PL."
      }
    },
    {
      "tipo": "resumo",
      "pontos": [
        "O balanço é uma fotografia de uma data: ativo mostra aplicações; passivo e PL mostram origens. Ativo = passivo + PL.",
        "Ativo exige controle e benefício econômico; marca criada internamente não entra, e itens sem benefício futuro não permanecem registrados.",
        "AC e PC usam o limite de 12 meses. O ANC reúne realizável a longo prazo, investimentos, imobilizado e intangível. Ordene o ativo por liquidez e as dívidas por exigibilidade.",
        "Aportes e lucros aumentam o PL; prejuízos e dividendos declarados o reduzem. Empréstimo, compra de ativo e pagamento só do principal de dívida não alteram o PL.",
        "Na venda de imobilizado à vista, o AC aumenta pelo valor recebido. O valor contábil sai do ANC; ganho ou perda altera o PL."
      ],
      "glossario": [
        {
          "termo": "BP",
          "def": "Balanço patrimonial: posição dos bens, direitos, obrigações e PL em uma data."
        },
        {
          "termo": "PL",
          "def": "Patrimônio líquido: ativo menos passivo; pode ser negativo."
        },
        {
          "termo": "AC e ANC",
          "def": "Ativo circulante e não circulante: dinheiro e recursos de até 12 meses separados dos recursos de longo prazo."
        },
        {
          "termo": "PC e PNC",
          "def": "Passivo circulante e não circulante: dívidas que vencem em até 12 meses separadas das que vencem depois."
        },
        {
          "termo": "Liquidez",
          "def": "Rapidez de conversão de um bem ou direito em dinheiro."
        },
        {
          "termo": "Exigibilidade",
          "def": "Prazo em que uma obrigação pode ser cobrada."
        },
        {
          "termo": "Dividendos",
          "def": "Lucros destinados aos sócios; reduzem o PL na declaração."
        },
        {
          "termo": "Valor contábil",
          "def": "Valor do bem registrado no balanço, que pode diferir do preço de venda."
        }
      ]
    }
  ]
};
