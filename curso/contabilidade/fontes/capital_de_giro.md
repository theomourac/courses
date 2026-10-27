---
name: link_contabilidade_capital_de_giro
description: Gestão de Capital de Giro da disciplina Contabilidade Gerencial da Link School of Business (Explorers D, 2026): capital de giro líquido (CGL = AC − PC); contas operacionais (ACO, PCO) e financeiras (ACF, PCF); necessidade de investimento em giro (NIG = ACO − PCO); saldo em tesouraria (ST); CGL = NIG + ST; variação da NIG e impacto no caixa; gestão equilibrada, conservadora, agressiva e muito agressiva; prazos médios (PME, PMR, PMP), compras = EF + CMV − EI, ciclo operacional e ciclo de caixa. Traz as questões da pré-aula 08 e os exemplos dos slides, com gabarito comentado, mais inéditas. Use quando alguém perguntar sobre capital de giro, NIG, saldo em tesouraria, prazos médios ou ciclos, ou precisar classificar contas de giro e calcular NIG, CGL, ST ou ciclos para a AV1 de Contabilidade Gerencial da Link.
---

# Gestão de Capital de Giro — Contabilidade Gerencial (Link)

> **Materiais locais (pasta `materiais/` desta skill):** `Análise de Capital de Giro.md` (slides, 38 p.) e `08 - Pré-Aula - Capital de giro - Gabarito.md` (8 questões resolvidas). Originais em `/Users/theo/Documents/Projetos/Link/Contabilidade/` (PDFs em `/Users/theo/Documents/Projetos/Link/`).
> **Exercícios:** `exercicios.md` — 13 itens do material (8 da Pré-aula 08 + 5 exemplos dos slides) + 18 inéditos ✍️, com gabarito comentado.
> **Legenda:** 📘 vem do material do curso · ➕ complemento externo (ajuda a entender, mas não é o que o curso afirma) · ⚠️ divergência, erro do material ou pegadinha · ✍️ resolução ou exercício elaborado por Claude (não oficial).

**Como usar esta skill:** em pergunta de prova, responda pela versão 📘 (fórmulas e convenções dos slides: 365 dias, caixa e aplicações como financeiros, impacto no caixa = − ΔNIG). Use ➕ só para explicar ou aprofundar, deixando claro que é complemento. Para sessões de estudo, siga o protocolo da seção 9. Toda resposta numérica deve vir com memória de cálculo.

---

## 1. Onde o tema entra no curso

📘 **Aulas do plano (turma Explorers D):**

| Aula | Data | Tema | Objetivo de aprendizagem |
| --- | --- | --- | --- |
| 16 | 02/10/26 | Gestão de Capital de Giro | Analisar e criticar a performance financeira detalhadamente |
| 17 | 08/10/26 | Gestão de Capital de Giro | idem |
| 18 | 09/10/26 | Gestão de Capital de Giro **QUIZ** | idem |

Competências: C2.H1 (analisar informações financeiras e gerenciais para apoiar o planejamento), C5.H1 (integrar fatores quantitativos e qualitativos), C6.H1 (olhar crítico e propositivo). Referência do plano: MÁLAGA, *Análise de demonstrativos financeiros e da performance empresarial* (2017). A ementa fala em "prazos de recebimento e de pagamento; ciclo operacional e financeiro; gestão de capital".

**Peso na prova:** ⚠️ nenhuma das 32 questões do simulado geral (`Lista de Exercícios_Contabilidade Gerencial`) é de capital de giro — o simulado só cobre a vizinha liquidez (Q25–26). Mas o tema ocupou **três aulas e um quiz** e está na ementa: trate como conteúdo provável da AV1 (sem consulta). Os tipos de questão mais prováveis são os da Pré-aula 08: calcular CGL, classificar contas, calcular NIG e sua variação, ciclos e compras.

**Mapa das 11 skills de Contabilidade Gerencial:**

| Skill | Tema | Aulas do plano |
| --- | --- | --- |
| `link_contabilidade_revisao_geral` | Hub: mapa do curso, formulário completo, simulado geral (32 questões) e simulados inéditos, estratégia de prova | todas |
| `link_contabilidade_matematica_financeira` | Juros simples e compostos, taxas proporcionais, equivalentes, nominais, acumuladas, inflação e Efeito Fisher | 2–4 |
| `link_contabilidade_estrutura_conceitual` | CPC 00, usuários, características qualitativas, princípios, elementos, mensuração, competência × caixa, visão das demonstrações | 1, 5 |
| `link_contabilidade_balanco_patrimonial` | Ativo, Passivo, PL, equação patrimonial, circulante × não circulante, origens × aplicações, plano de contas | 6–7 |
| `link_contabilidade_dre` | Estrutura da DRE, deduções, CPV/CMV, despesas, EBIT, EBITDA, resultado financeiro, LALUR, IR/CSLL, lucro líquido, ligação com o PL | 8–9 |
| `link_contabilidade_fluxo_de_caixa` | DFC: qualidade do lucro, atividades operacionais/investimento/financiamento, método direto e indireto, competência × caixa na prática | 10 |
| `link_contabilidade_analise_vertical_horizontal` | AV, AH, variação monetária, origem dos lucros, documentos de RI (DFP, ITR, release), roteiro de análise de empresa real | 11–12, 14, 19 |
| `link_contabilidade_rentabilidade` | Margens (bruta, operacional, líquida, EBITDA), ROA, ROE, giro do ativo, alavancagem (MPL), DuPont | 13 |
| `link_contabilidade_indicadores_estrutura_liquidez` | Liquidez corrente/seca/imediata, endividamento geral, solvência geral, grau de endividamento, cobertura de juros, composição do endividamento, PCT, imobilização do PL | 15 |
| `link_contabilidade_capital_de_giro` | CGL, ACO/PCO/ACF/PCF, NIG, saldo em tesouraria, tipos de gestão, PME/PMR/PMP, ciclo operacional e de caixa | 16–18 |
| `link_contabilidade_tributacao` | Tributo, espécies, principais tributos, MEI, Simples, Lucro Presumido, Lucro Real, elisão × sonegação, reforma tributária (IBS/CBS/IS), Bella Café | 21 |

---

## 2. A ideia central

📘 Lucro não paga conta; caixa paga. Uma empresa que compra estoque, paga o fornecedor e só recebe do cliente semanas depois precisa **financiar o intervalo** entre a saída e a entrada de dinheiro. Esse dinheiro "preso" na operação (em estoques e em contas a receber) é o **investimento em giro**. Parte dele é financiada automaticamente por quem dá prazo à empresa (fornecedores, empregados que recebem no fim do mês, governo que recebe o imposto depois); o que sobra — a **NIG** — precisa vir de recursos próprios ou de credores financeiros, que cobram juros.

📘 A gestão de capital de giro trata do **impacto das estratégias operacionais nas contas de curto prazo e na liquidez**: o objetivo é escolher prazos, estoques e formas de financiamento que "garantam" liquidez (situação financeira) **criando valor** (situação econômica) para os acionistas. Há um dilema permanente: folga de giro dá segurança mas custa retorno (dinheiro parado); aperto de giro dá retorno mas aumenta o risco de faltar caixa.

📘 O raciocínio do curso tem três camadas, que se somam numa identidade só:
- **CGL** (quanto de recurso de longo prazo está bancando o curto prazo) = AC − PC;
- **NIG** (quanto a operação pede de financiamento) = ACO − PCO;
- **ST** (como a empresa está fechando a conta no curto prazo: sobra aplicada ou dívida onerosa) = ACF − PCF;
- e **CGL = NIG + ST**. Comparar CGL com NIG diz se a gestão é equilibrada, conservadora ou agressiva.

Os **prazos médios** (PME, PMR, PMP) e os **ciclos** (operacional e de caixa) explicam *por que* a NIG tem o tamanho que tem: quanto mais dias o dinheiro fica preso em estoque e em clientes, e menos dias de prazo o fornecedor dá, maior a NIG.

---

## 3. O conteúdo, explicado

### 3.1 O que é capital de giro
📘 "O capital de giro representa os recursos financeiros que uma empresa necessita para manter suas operações no curto prazo." Ele financia compra de estoque, pagamento de fornecedores, folha e demais obrigações de curto prazo.

📘 **Fórmula básica:** `Capital de Giro (Líquido) = Ativo Circulante − Passivo Circulante`.

📘 **Exemplo do slide (comércio):** uma empresa que comercializa mercadorias precisa financiar a compra do estoque. Se vende a prazo, paga primeiro o estoque e recebe depois; nesse intervalo precisa de capital (próprio ou de terceiros) para manter a operação "girando".

📘 O capital de giro **não é só dinheiro em caixa**: é uma avaliação de quanto sobra ou falta de liquidez no curto prazo. Aparece nas contas como recursos em caixa, valores em conta corrente, vendas a prazo a receber, investimentos de alta liquidez ou de vencimento curto e outros ativos de curto prazo.

### 3.2 Diferenças setoriais
📘 O nível de investimento em cada conta de giro **varia de empresa para empresa e de setor para setor**. Exemplo do slide: o **Grupo Casas Bahia** (varejo) tem, por natureza, alta proporção de estoques no ativo total; a **Viação Cometa** (transporte rodoviário) tem estoque relativamente baixo — sua lucratividade vem do bom uso de veículos e equipamentos (ativo não circulante), não do giro de mercadorias.

➕ Outros padrões típicos: supermercados e varejo alimentar costumam ter **NIG negativa** (vendem à vista ou no cartão, giram estoque rápido e pagam fornecedor a prazo); indústrias de bens de capital e construtoras têm ciclos longos e NIG alta; empresas de software por assinatura recebem antecipado (receitas antecipadas = passivo operacional) e podem ter NIG negativa.

### 3.3 Por que a gestão de giro importa
📘 **Custo de oportunidade:** dinheiro investido em estoques, recebíveis e caixa parado poderia pagar dívidas, remunerar sócios (dividendos) ou ir para outros projetos.

📘 **Capital de giro e valor da firma:** o giro altera o valor da empresa porque mexe no **fluxo de caixa livre** (o que sobra para pagar juros e principal aos credores e dividendos/recompras aos sócios). **"Quanto maior a necessidade de capital de giro líquido de uma empresa, menor será a sua capacidade de transformar lucro em fluxo de caixa operacional."**

📘 A variação da NIG afeta diretamente (slide p.16):
- a capacidade de transformar **potencial de caixa operacional (EBITDA)** em **caixa operacional efetivo (FCO)**;
- a **rentabilidade (ROE)** — capital preso no giro precisa ser financiado, e esse financiamento custa.

➕ É exatamente o ajuste de capital de giro do **método indireto da DFC**: FCO ≈ lucro + depreciação − aumento de ativos operacionais + aumento de passivos operacionais ≈ lucro + depreciação − ΔNIG (ver `link_contabilidade_fluxo_de_caixa`).

### 3.4 Contas operacionais (cíclicas) × financeiras
📘 Para avaliar o giro, é preciso **classificar as contas circulantes em operacionais (cíclicas) e financeiras**, para entender quais investimentos e financiamentos a operação origina.

| Grupo | Definição (📘) | Exemplos (📘 slide p.12) |
| --- | --- | --- |
| **ACO** — Ativo Circulante Operacional | Bens e direitos com relação direta com a atividade operacional; investimentos demandados pela operação; variam com o volume de negócios e com o ciclo operacional | Contas a receber (clientes), Estoques, Despesas antecipadas |
| **PCO** — Passivo Circulante Operacional | Obrigações com relação direta com a operação; credores operacionais que fornecem insumos para o giro; variam com o volume de negócios e o ciclo | Fornecedores, Salários a pagar, Impostos a pagar, Receitas antecipadas (adiantamento de clientes) |
| **ACF** — Ativo Circulante Financeiro | Bens e direitos sem relação direta com o ciclo operacional; investimentos financeiros; variam com a conjuntura e com o risco de liquidez que os gestores aceitam; **rendem juros** | Excesso de caixa, Bancos, Aplicações financeiras |
| **PCF** — Passivo Circulante Financeiro | Obrigações sem relação direta com o ciclo; credores financeiros que não participam da operação; **onerosos** (exigem juros ou cupons) | Empréstimos, Financiamentos, Debêntures, Dividendos a pagar |

📘 **Convenção do caixa:** o slide p.13 admite um "caixa operacional" dentro do ACO **"se for possível estimar"**. Na prática do curso (Pré-aula 08, Q4), **Caixa e Aplicações Financeiras entram como ACF**. Regra de prova: caixa = financeiro, a menos que o enunciado fale explicitamente em "caixa operacional" ou "caixa mínimo operacional".

➕ Atalho mental: pergunte "essa conta **nasce sozinha** quando a empresa vende e compra mais (é espontânea, não cobra juros)?" → operacional. "Essa conta resulta de uma **decisão de aplicar ou captar dinheiro** (rende ou cobra juros)?" → financeira.

➕ Nomenclatura do **Modelo Fleuriet** (origem dessa análise no Brasil): ativo/passivo **cíclico** (= operacional), ativo/passivo **errático** (= financeiro), **NCG** (= NIG), **CDG** (= CGL) e **T** (saldo de tesouraria = ST).

### 3.5 Capital de Giro Líquido (CGL)
📘 `CGL = Ativo Circulante − Passivo Circulante`.

📘 **Exemplo do slide (p.11 e p.18):** AC = $1.000; PC = $600 → **CGL = $400**. No diagrama do balanço, o ativo total é $2.000 (AC 1.000 + ANC 1.000) e o lado direito tem PC $600 e **recursos de longo prazo $1.400** (PNC + PL). O ativo está associado a **retorno**; o passivo + PL, a **custo**.

✍️ Leitura do diagrama: os recursos de longo prazo (1.400) bancam todo o ANC (1.000) e ainda sobram 400 aplicados no circulante. Por isso **CGL > 0 = recursos de longo prazo financiando ativos de curto prazo**. Equivalência útil: `CGL = (PNC + PL) − ANC = 1.400 − 1.000 = 400` (mesmo resultado, porque AC + ANC = PC + PNC + PL).

📘 **Interpretação (slide p.18):**
- **CGL > 0:** mais ativos que passivos de curto prazo → paga as dívidas de curto prazo com folga, maior liquidez e menor risco; **porém pode significar baixo retorno** (dinheiro "parado" em vez de investido em oportunidades mais lucrativas).
- **CGL < 0:** mais passivos que ativos de curto prazo → depende de fontes externas para cobrir obrigações; maior risco financeiro; pode indicar **estratégia agressiva** de financiamento (mais capital de terceiros para alavancar investimentos e buscar retorno maior).

➕ CGL > 0 é o mesmo que **Liquidez Corrente > 1** (AC/PC > 1). Ver `link_contabilidade_indicadores_estrutura_liquidez`.

### 3.6 Necessidade de Investimento em Giro (NIG)
📘 `NIG (ou NCG) = ACO − PCO`. Sinônimos no slide: NIG = Necessidade de Investimento em Giro; NCG = Necessidade de Capital de Giro; NWC = *Net Working Capital*; "necessidade de recursos onerosos para a operação".

📘 Definição: **"saldo de investimento, parcela dos investimentos em capital de giro demandados pela operação não cobertos pelos financiamentos automáticos/espontâneos da operação."** A NIG positiva existe porque a atividade operacional, o ciclo de caixa e o volume de negócios **criam fluxos de saída mais rápidos que os de entrada**.

📘 **NIG positiva (exposição de capital de giro):** ACO > PCO. Parte dos ativos operacionais **não é financiada espontaneamente** pelos passivos operacionais → a operação precisa de recursos onerosos no dia a dia. **Com crescimento**, tudo mais constante, a NIG **aumenta e consome caixa** e/ou recursos onerosos.

📘 **NIG negativa (sem exposição):** ACO < PCO. **Todos** os ativos operacionais são financiados espontaneamente pelos passivos operacionais, e ainda sobra recurso operacional não oneroso financiando outros ativos → **a operação é fonte de recursos**. Com crescimento, a NIG fica mais negativa e **gera caixa**.

📘 **Investimento em capital de giro = variação da NIG:** `ΔNIG = NIG(t) − NIG(t−1)`.
- **Aumento da NIG consome caixa; redução da NIG gera caixa.**
- **Impacto no fluxo de caixa = − ΔNIG.**

📘 **Exemplo do slide p.17 (contas de giro inicial × final):**

| Ativo operacional | Inicial | Final | Passivo operacional | Inicial | Final |
| --- | ---: | ---: | --- | ---: | ---: |
| Clientes | 7.000 | 8.500 | Fornecedores | 4.000 | 5.000 |
| Estoques | 5.500 | 7.500 | Salários a pagar | 2.800 | 3.000 |
| | | | Impostos a pagar | 2.000 | 2.500 |
| **ACO** | **12.500** | **16.000** | **PCO** | **8.800** | **10.500** |

- NIG inicial = 12.500 − 8.800 = **3.700**; NIG final = 16.000 − 10.500 = **5.500**.
- ΔNIG = 5.500 − 3.700 = **1.800** → **impacto no caixa = −1.800** (a operação consumiu 1.800 de caixa).
- ⚠️ A tabela do slide também lista Caixa (2.000 → 2.400), Aplicações (500 → 600) e Empréstimos (1.500 → 1.600), **mas os totais operacionais não os incluem** (são ACF e PCF). ✍️ Se quiser completar: ST inicial = 2.500 − 1.500 = 1.000; ST final = 3.000 − 1.600 = 1.400; CGL inicial = 3.700 + 1.000 = 4.700; CGL final = 5.500 + 1.400 = 6.900.

### 3.7 Saldo em Tesouraria (ST)
📘 `ST = Ativo Circulante Financeiro − Passivo Circulante Financeiro`. Representa os **recursos financeiros líquidos** disponíveis — indicador crítico de liquidez imediata e capacidade de pagamento.

📘 **ST positivo:** CGL > NIG → há excedente em caixa ou aplicações de curto prazo → **gestão conservadora**, menor risco e **menor rentabilidade**.
📘 **ST negativo:** CGL < NIG → a empresa precisa de **financiamento de curto prazo** (oneroso, com juros) para operar → **gestão agressiva**, maior risco, dependência de capital externo.

### 3.8 A identidade que amarra tudo: CGL = NIG + ST
📘 Separando o circulante em operacional e financeiro:

```
CGL = AC − PC = (ACO + ACF) − (PCO + PCF) = (ACO − PCO) + (ACF − PCF) = NIG + ST
```

Logo: `NIG = CGL − ST` e `ST = CGL − NIG`. Leitura do slide p.20–21:
- **CGL > 0:** recursos de **longo prazo** aplicados no curto prazo;
- **NIG > 0:** recursos investidos na operação (saldo de investimento no dia a dia);
- **ST < 0:** recursos financeiros **onerosos de curto prazo** financiando a operação.

✍️ Interpretação em uma frase: **a NIG é a "conta" que a operação apresenta; o CGL é quanto dela os recursos de longo prazo pagam; o ST é o troco (se positivo) ou o cheque especial (se negativo).**

### 3.9 Os quatro tipos de gestão
📘 **Exemplos numéricos do slide p.22** (NIG fixa em 20; muda só o lado financeiro):

| Gestão | ACO | PCO | ACF | PCF | NIG | CGL | ST |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Equilibrada | 70 | 50 | 20 | 20 | 20 | 20 | 0 |
| Conservadora | 70 | 50 | 35 | 20 | 20 | 35 | 15 |
| Agressiva | 70 | 50 | 15 | 20 | 20 | 15 | −5 |

📘 **Quadro-resumo (slide p.23):**

| Gestão | Condição | Como a NIG é financiada | ST |
| --- | --- | --- | --- |
| **Equilibrada** | NIG = CGL | Toda a NIG com recursos de longo prazo; captação igual à demanda da operação | Nulo |
| **Conservadora** | NIG < CGL | Toda a NIG com recursos de longo prazo; captação **superior** à demanda da operação | Positivo |
| **Agressiva** | NIG > CGL (CGL ≥ 0) | **Parte** da NIG com recursos de curto prazo; captação de longo prazo inferior à demanda | Negativo |
| **Muito agressiva** | **CGL < 0** | **Toda** a NIG com recursos de curto prazo; não há recurso de longo prazo financiando a operação | Negativo |

➕ Risco × retorno: conservadora = mais segura, menos rentável (sobra dinheiro aplicado rendendo pouco); agressiva = mais rentável no curto prazo, mais arriscada (depende de rolar dívida de curto prazo). ➕ Se a NIG cresce ano após ano mais rápido que o CGL, o ST fica cada vez mais negativo — o "**efeito tesoura**" do Modelo Fleuriet, sinal clássico de empresa que cresce acima da sua capacidade de financiamento (*overtrading*).

✍️ Roteiro para classificar (decorar):
1. Calcule NIG e CGL.
2. CGL < 0? → **muito agressiva**.
3. Senão compare: CGL = NIG → **equilibrada**; CGL > NIG → **conservadora**; CGL < NIG → **agressiva**.
4. Confirme pelo sinal do ST (0, +, −).

### 3.10 Prazos médios e ciclos
📘 Toda empresa vive um fluxo contínuo de compras, produção, vendas e recebimentos. Três conceitos (slide p.25):
- **Ciclo Operacional (CO):** tempo total **da compra da matéria-prima/mercadoria até o recebimento das vendas**.
- **Ciclo Financeiro ou Ciclo de Conversão de Caixa (CCC):** intervalo **entre o pagamento aos fornecedores e a entrada de recursos pelas vendas**. (O curso usa "ciclo financeiro", "ciclo de caixa" e "ciclo de conversão de caixa" como sinônimos.)
- **Prazos médios de pagamento e recebimento:** quanto tempo a empresa consegue postergar pagamentos e em quanto tempo recebe dos clientes.

📘 **Linha do tempo (slide p.27 e p.34):** compra da mercadoria → (PME) → venda → (PMR) → recebimento. O pagamento ao fornecedor acontece PMP dias depois da compra. **A necessidade de capital de giro aparece entre o pagamento do fornecedor e o recebimento da venda.**

```
Compra ──── PMP ────► Pagamento ao fornecedor
  │                         (saída de caixa)
  ├──── PME ────► Venda ──── PMR ────► Recebimento (entrada de caixa)
  │◄──────────── Ciclo Operacional = PME + PMR ───────────►│
                  │◄────── Ciclo de Caixa = PME + PMR − PMP ──────►│
```

📘 **Fórmulas dos prazos (resultado em dias corridos, base 365):**

| Prazo | Fórmula 📘 | O que se deseja | Conceito |
| --- | --- | --- | --- |
| **PMR** — Prazo Médio de Recebimento | `Contas a Receber / Receita × 365` | **curto** (receber rápido) | velocidade e **barganha junto aos clientes** |
| **PMP** — Prazo Médio de Pagamento | `Contas a Pagar (Fornecedores) / Compras × 365` | **longo** (pagar depois) | velocidade e **barganha junto aos fornecedores** |
| **PME** — Prazo Médio de Estoque | `Estoques / CMV × 365` | **curto** (estoque enxuto) | velocidade de giro; "carregar estoque tem custo" |

📘 **Compras do período:** `Compras = Estoque Final + CMV − Estoque Inicial`.
✍️ De onde vem: o estoque funciona como uma caixa d'água — `EI + Compras − CMV = EF` → isolando, `Compras = EF + CMV − EI`. Se o estoque cresceu, a empresa comprou **mais** do que vendeu (ao custo).

📘 **Ciclos:** `CO = PME + PMR` e `CCC = PME + PMR − PMP` (= CO − PMP).

📘 **Exemplo do slide (p.35–36):** PMP = 15 dias; PME = 20 dias; PMR = 30 dias.
- CO = 20 + 30 = **50 dias**; CCC = 20 + 30 − 15 = **35 dias**.
- Dos 50 dias do ciclo operacional, nos **15 primeiros** a empresa tem **financiamento automático** (do fornecedor). Nos **35 restantes**, precisa captar recursos de **sócios ou credores financeiros**: toma recursos no 15º dia, paga o fornecedor e "carrega" esse valor no balanço até o 50º dia, quando recebe e devolve aos financiadores.
- Como **o ciclo se repete continuamente** (todo dia começa um novo), a empresa precisa desses recursos **de forma permanente** — é por isso que a NIG é um investimento permanente, não um aperto passageiro.

📘 **O ciclo de caixa (slide p.33)** é a quantidade de dias em que a empresa financia a operação, do pagamento ao fornecedor até o recebimento do cliente; é **proxy para dimensionar o capital de giro**. **Cenário benéfico:** ciclo de caixa e capital de giro (NIG) **negativos**. **Cenário de risco:** ciclo de caixa e NIG **elevados**.

➕ Ponte quantitativa entre ciclo e NIG (aproximação útil): `NIG ≈ (Receita/365) × PMR + (CMV/365) × PME − (Compras/365) × PMP`. Cada dia a mais de PMR prende 1 dia de vendas em clientes; cada dia a mais de PMP libera 1 dia de compras.

➕ Detalhes de cálculo que variam entre livros (use o que o enunciado der): base 360 ou 365 dias (o curso usa **365**); saldo final ou **médio** das contas (o slide usa o saldo, sem média); receita bruta ou líquida no PMR (o slide diz só "Receita"; tecnicamente a bruta é mais coerente, porque clientes incluem os impostos da nota). Declare a escolha na memória de cálculo.

### 3.11 Qualidade de gestão
📘 A qualidade da gestão do fluxo de caixa depende de **registros sistemáticos e organizados**, que permitam **negociar prazos** com clientes e fornecedores. Uma gestão próxima assegura maior capacidade de remunerar os detentores do capital.

✍️ Alavancas para reduzir a NIG e o ciclo de caixa: cobrar mais rápido (reduzir PMR: desconto à vista, cartão, antecipação), girar estoque mais rápido (reduzir PME: compras just-in-time, mix enxuto), alongar fornecedores (aumentar PMP: negociação, volume). ⚠️ Alongar fornecedores além do razoável tem limite ético e de risco — o caso **Americanas (risco sacado)** discutido na aula de AV/AH mostra dívida financeira disfarçada de fornecedor.

---

## 4. Fórmulas — folha de cola

| Fórmula | Quando usar | Interpretação |
| --- | --- | --- |
| `CGL = AC − PC` | sempre que pedirem capital de giro (líquido) | > 0: longo prazo financiando curto prazo (folga, menor risco, menor retorno); < 0: dependência de curto prazo |
| `CGL = (PNC + PL) − ANC` ➕ | quando só tiver o lado longo do balanço | mesmo valor do CGL |
| `NIG = ACO − PCO` | necessidade de capital de giro da operação | > 0: operação consome recursos; < 0: operação é fonte de recursos |
| `ST = ACF − PCF` | saldo em tesouraria | > 0: sobra aplicada (conservador); < 0: dívida onerosa de CP (agressivo) |
| `CGL = NIG + ST` | conferir contas / achar o que falta | identidade sempre válida |
| `ΔNIG = NIG final − NIG inicial` | investimento em giro do período | ΔNIG > 0 consome caixa |
| `Impacto no caixa = − ΔNIG` | efeito do giro no fluxo de caixa | sinal invertido! |
| `PMR = Clientes / Receita × 365` | prazo de recebimento | quanto menor, melhor |
| `PMP = Fornecedores / Compras × 365` | prazo de pagamento | quanto maior, melhor |
| `PME = Estoques / CMV × 365` | prazo de estocagem | quanto menor, melhor |
| `Compras = EF + CMV − EI` | antes do PMP, se não derem compras | estoque subiu → compras > CMV |
| `CO = PME + PMR` | ciclo operacional | compra → recebimento |
| `CCC = PME + PMR − PMP` | ciclo financeiro/de caixa | pagamento ao fornecedor → recebimento; dias que a empresa precisa financiar |
| Gestão: CGL = NIG / CGL > NIG / 0 ≤ CGL < NIG / CGL < 0 | classificar | equilibrada / conservadora / agressiva / muito agressiva |

---

## 5. Exemplos resolvidos passo a passo

**5.1 📘 CGL (slides p.11/18).** AC 1.000, PC 600 → CGL = 400. Com ANC = 1.000 e recursos de longo prazo = 1.400: 1.400 − 1.000 = 400 ✓.

**5.2 📘 NIG e impacto no caixa (slide p.17).** Ver tabela da seção 3.6: NIG 3.700 → 5.500; ΔNIG = +1.800; impacto no caixa = −1.800.

**5.3 📘 Pré-aula 08, Q4 (classificar e calcular).** Caixa 1.800 (ACF), Aplicações 700 (ACF), Clientes 6.200 (ACO), Estoques 4.800 (ACO), Fornecedores 3.500 (PCO), Salários 1.900 (PCO), Impostos 1.600 (PCO), Empréstimos CP 2.000 (PCF).
ACO = 6.200 + 4.800 = 11.000; PCO = 3.500 + 1.900 + 1.600 = 7.000; **NIG = 4.000**.
✍️ Completando: ACF = 2.500; PCF = 2.000; ST = +500; AC = 13.500; PC = 9.000; CGL = 4.500 = 4.000 + 500 ✓ → CGL > NIG → **gestão conservadora**.

**5.4 📘 Pré-aula 08, Q5 (variação).** NIG inicial = 9.000 − 6.200 = 2.800; final = 11.500 − 7.000 = 4.500; ΔNIG = 1.700 → impacto no caixa = **−1.700** (crescimento operacional consumiu caixa).

**5.5 📘 Ciclos (slide p.35 e Pré-aula 08 Q6).** PME 28, PMR 32, PMP 18 → CO = 60; CCC = 42. Os 18 primeiros dias são financiados pelo fornecedor; nos 42 restantes a empresa capta recursos próprios ou de terceiros.

**5.6 ✍️ Do balanço e da DRE até o ciclo de caixa.** Receita 730.000; CMV 438.000; Clientes 120.000; Estoque inicial 40.000; Estoque final 48.000; Fornecedores 44.600.
1. PMR = 120.000 / 730.000 × 365 = **60 dias**.
2. PME = 48.000 / 438.000 × 365 = **40 dias**.
3. Compras = 48.000 + 438.000 − 40.000 = **446.000**.
4. PMP = 44.600 / 446.000 × 365 = **36,5 dias** (⚠️ sobre compras, não sobre CMV).
5. CO = 40 + 60 = **100 dias**; CCC = 100 − 36,5 = **63,5 dias**.

**5.7 ✍️ Caso integrado (R$ mil) — Empresa Delta.**

| Conta | Ano 1 | Ano 2 |
| --- | ---: | ---: |
| Caixa | 50 | 40 |
| Aplicações financeiras | 30 | 10 |
| Clientes | 180 | 240 |
| Estoques | 120 | 160 |
| Fornecedores | 90 | 100 |
| Salários a pagar | 40 | 45 |
| Impostos a pagar | 30 | 35 |
| Empréstimos de curto prazo | 100 | 180 |

| Indicador | Ano 1 | Ano 2 |
| --- | ---: | ---: |
| ACO (clientes + estoques) | 300 | 400 |
| PCO (fornecedores + salários + impostos) | 160 | 180 |
| **NIG** | **140** | **220** |
| ACF (caixa + aplicações) | 80 | 50 |
| PCF (empréstimos CP) | 100 | 180 |
| **ST** | **−20** | **−130** |
| **CGL** (= NIG + ST) | **120** | **90** |
| Liquidez corrente (AC/PC) | 1,46 | 1,25 |
| Tipo de gestão | agressiva (0 < CGL < NIG) | agressiva, piorando |

ΔNIG = 220 − 140 = +80 → a operação consumiu **80** de caixa. Como o CGL caiu (120 → 90), a diferença foi coberta com empréstimo de curto prazo (ST de −20 para −130): é o efeito tesoura ➕. Com Receita 1.460 e CMV 876 no ano 2: Compras = 160 + 876 − 120 = 916; PMR = 60,0 dias; PME = 66,67 dias; PMP = 39,85 dias; CO = 126,67 dias; CCC = 86,82 dias.

---

## 6. Armadilhas e pegadinhas de prova

- ⚠️ **Sinal do impacto no caixa:** NIG **aumentou** → caixa **diminui** (impacto = −ΔNIG). Quem esquece o sinal erra a questão inteira.
- ⚠️ **Caixa e aplicações não entram na NIG** (são ACF), e **empréstimos de curto prazo e dividendos a pagar não entram** (são PCF). Só entram se o enunciado falar em "caixa operacional".
- ⚠️ **Salários, impostos a pagar e adiantamento de clientes são PCO** (financiamento espontâneo, sem juros) — não confunda com dívida financeira.
- ⚠️ **PMP usa Compras, não CMV.** Se o enunciado der EI, EF e CMV, calcule `Compras = EF + CMV − EI` antes.
- ⚠️ **PME usa CMV, não Receita**; **PMR usa Receita, não CMV.**
- ⚠️ **Ciclo operacional não desconta o PMP**; ciclo de caixa sim. CO = PME + PMR; CCC = PME + PMR − PMP.
- ⚠️ **CGL ≠ NIG.** CGL olha todo o circulante; NIG só o operacional. Eles só coincidem na gestão equilibrada (ST = 0).
- ⚠️ **"Muito agressiva" exige CGL < 0**; se CGL ≥ 0 mas menor que a NIG, é só "agressiva".
- ⚠️ **CGL alto não é automaticamente bom:** o slide diz que pode significar dinheiro parado e baixo retorno.
- ⚠️ **NIG negativa não é problema** — é o cenário benéfico (a operação financia a empresa). O risco é NIG e ciclo **elevados**.
- ⚠️ **Lucro contábil ≠ caixa:** empresa lucrativa e crescendo com NIG positiva pode ficar sem caixa (Pré-aula 08 Q2).
- ⚠️ **Reduzir o ciclo de caixa gera caixa** (Pré-aula 08 Q8, alternativa b); aumentar consome.
- ⚠️ Base de dias: o curso usa **365**. Se o enunciado disser 360, use 360.

---

## 7. Divergências e erros encontrados no material

- ⚠️ **Slide p.17:** a legenda diz "Variação NIG = Capital de Giro Líquido Final − Capital de Giro Líquido Inicial"; o correto (e o que a conta faz) é **NIG final − NIG inicial** (5.500 − 3.700 = 1.800). A tabela lista Caixa, Aplicações e Empréstimos, mas os totais "Capital de Giro Op." somam **só** Clientes + Estoques (12.500/16.000) e Fornecedores + Salários + Impostos (8.800/10.500), coerente com a classificação dessas três contas como financeiras.
- ⚠️ **Slide p.13 × Pré-aula 08:** o slide coloca "Caixa operacional\*" no ACO "se for possível estimar"; a Pré-aula classifica Caixa como ACF. Não é contradição: sem estimativa de caixa operacional, caixa vai para o ACF (regra de prova).
- ⚠️ **Slide p.32** (conversão do PDF): mostra apenas "PME + PMR − PMP / 60 Dias / 200 Dias − 30 Dias − 15 Dias", sem enunciado legível; não dá para reconstruir o exemplo com segurança — consultar o PDF original (`/Users/theo/Documents/Projetos/Link/Análise de Capital de Giro.pdf`, p.32) se cair algo parecido.
- ⚠️ **Slide p.33** usa "capital de giro" no sentido de NIG ("ciclo de caixa e capital de giro negativo" = cenário benéfico). Não confundir com CGL negativo, que o slide p.18 trata como risco.
- ⚠️ **Fórmulas de prazo:** o slide não diz se a receita é bruta ou líquida nem se os saldos são médios; usar o que o enunciado der (ver 3.10).

---

## 8. Como o tema se conecta aos outros

- `link_contabilidade_balanco_patrimonial`: o giro é a leitura do **circulante** do BP (ativo por liquidez, passivo por exigibilidade); a relação recursos de longo prazo × ANC explica o CGL.
- `link_contabilidade_indicadores_estrutura_liquidez`: CGL > 0 ⇔ liquidez corrente > 1; liquidez seca tira os estoques (que são ACO); composição do endividamento (PC / passivo total) conversa com o ST negativo.
- `link_contabilidade_fluxo_de_caixa`: no método indireto, as variações de clientes, estoques e fornecedores **são** a ΔNIG; impacto no caixa = −ΔNIG. "Lucro não é caixa" é a mesma lição.
- `link_contabilidade_dre`: Receita e CMV alimentam PMR e PME; despesas financeiras crescem quando o ST fica negativo.
- `link_contabilidade_rentabilidade`: NIG alta aumenta o ativo e derruba o **giro do ativo** e o ROA; financiar a NIG com dívida aumenta a alavancagem.
- `link_contabilidade_analise_vertical_horizontal`: AV mostra o peso de estoques e clientes no ativo (Casas Bahia × Viação Cometa); AH mostra se a NIG cresce mais que a receita.
- `link_contabilidade_matematica_financeira`: o custo de financiar a NIG é juro; prazo concedido ao cliente tem custo de oportunidade.
- `link_contabilidade_revisao_geral`: formulário completo e simulados integrados.

---

## 9. Protocolo para sessões de estudo

- **Modo EXPLICAR:** comece pela intuição (o dinheiro preso entre pagar o fornecedor e receber do cliente), depois a classificação ACO/PCO/ACF/PCF, depois as fórmulas (NIG, ST, CGL = NIG + ST), depois um exemplo numérico da seção 5. Feche com os tipos de gestão e os ciclos. Use a linha do tempo da seção 3.10.
- **Modo EXERCITAR:** proponha **uma questão por vez** do `exercicios.md` (ou nova no mesmo estilo, com números verificados), espere a resposta do aluno, corrija mostrando conta e conceito, registre acertos e erros por subtema (classificação, NIG/ST/CGL, gestão, prazos, ciclos, interpretação) e volte nos subtemas errados com uma questão nova.
- **Modo SIMULADO:** bloco de 6 a 10 questões misturando cálculo e interpretação, **sem feedback** até o fim; depois, nota, gabarito comentado e diagnóstico por subtema.
- **Sempre** exija memória de cálculo e o sinal do impacto no caixa. A prova é **sem consulta**: peça para o aluno escrever de memória a folha de cola da seção 4 antes de começar, e cobre as definições (o que é ACO, o que é NIG negativa, o que é gestão muito agressiva) com as palavras do curso.
