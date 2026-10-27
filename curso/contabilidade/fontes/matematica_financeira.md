---
name: link_contabilidade_matematica_financeira
description: Matemática Financeira da disciplina Contabilidade Gerencial da Link School of Business (Explorers D, 2026): valor do dinheiro no tempo, juros simples (J = C·i·n) e compostos (VF = VP(1+i)^n), valor presente e futuro, taxas proporcionais, equivalentes (QUERO/TENHO), nominais com capitalização e efetivas, taxa acumulada, inflação e Efeito Fisher (real × nominal), como fazer cada conta na calculadora científica. Traz as 40 questões da lista, as 20 da pré-aula 01, os exercícios dos slides e as Q1–9 do simulado geral, com gabarito comentado, mais exercícios inéditos. Use quando alguém perguntar sobre juros, montante, capital, conversão de taxas, inflação ou taxa real, ou pedir explicação, exercício, revisão ou simulado de matemática financeira para a AV1 de Contabilidade Gerencial da Link.
---

# Matemática Financeira — Contabilidade Gerencial (Link)

> **Materiais locais (pasta `materiais/` desta skill):** `Aula 02 - Matemática Financeira.md` (slides, 45 p.), `Aula 02 - Matemática Financeira - Lista de Exercícios.md` (40 questões de múltipla escolha com gabarito), `01 - Pré-Aula - Matemática Financeira - Gabarito.md` (20 questões resolvidas), `Lista de Exercícios_Contabilidade Gerencial.md` (simulado geral; Q1–9 são deste tema). Originais em `/Users/theo/Documents/Projetos/Link/Contabilidade/` (PDFs em `/Users/theo/Documents/Projetos/Link/`).
> **Exercícios:** `exercicios.md` (92 questões do material + 20 inéditas ✍️, com gabarito comentado).
> **Legenda:** 📘 vem do material do curso · ➕ complemento externo (ajuda a entender, mas não é o que o curso afirma) · ⚠️ divergência, erro do material ou pegadinha · ✍️ resolução ou exercício elaborado por Claude (não oficial).

**Como usar esta skill:** em pergunta de prova, responda pela versão 📘 (fórmulas e convenções dos slides). Use ➕ para dar intuição ou aprofundar, sempre sinalizando que é complemento. Quando o gabarito oficial estiver errado, mostre o resultado certo e diga o que o gabarito marca (seção 7). Para sessões de estudo, siga o protocolo da seção 9. A AV1 é **sem consulta**: as fórmulas da seção 4 precisam estar memorizadas.

---

## 1. Onde o tema entra no curso

📘 **Aulas 2, 3 e 4 do plano de aula** (14/08, 20/08 e 21/08/2026), todas com o tema "Matemática Financeira" e o mesmo objetivo de aprendizagem: *compreender o valor do dinheiro no tempo e aplicar cálculos financeiros para decisões gerenciais*. Competências: C2.H1 (analisar informações financeiras e gerenciais para apoiar o planejamento e a performance) e C5.H1 (integrar fatores quantitativos e qualitativos). Referência: Assaf Neto, *Matemática financeira: edição universitária* (2023). No plano de ensino, o tópico aparece como "Juros, valor presente, sistemas de capitalização e taxas".

📘 **Peso na prova.** É o **maior bloco do simulado geral**: 9 das 32 questões (Q1–9 — juros simples, Fisher, juros compostos e taxa acumulada). Além disso, há a Pré-aula 01 (20 questões) e uma lista própria de 40 questões. A AV1 é a Aula 23, em 26/10/2026, individual e sem consulta (peso 40% da nota).
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

📘 Matemática financeira é o **estudo do valor do dinheiro no tempo**. R$ 1.000 hoje não valem o mesmo que R$ 1.000 daqui a um ano, e por isso só se pode comparar, somar ou subtrair valores que estejam **na mesma data**. O objetivo é analisar e comparar fluxos de entrada e de saída de dinheiro que acontecem em momentos diferentes.

📘 Os **juros** são a recompensa por adiar uma entrada financeira (ou o preço de antecipar um consumo). Eles induzem as pessoas a adiar o consumo e, assim, permitem a formação de poupança. Uma taxa de juros precisa remunerar três coisas:
1. a **perda de poder de compra** (inflação);
2. o **adiamento do consumo** (custo de oportunidade);
3. a **incerteza em relação ao futuro** (risco).

📘 Existem dois jeitos de os juros se formarem ao longo do tempo (os **regimes de capitalização**): no **simples**, os juros incidem só sobre o capital inicial e crescem em linha reta; no **composto**, os juros de cada período são incorporados ao capital e passam a render juros também ("juros sobre juros"), e o crescimento é exponencial. Quase toda a prova de matemática financeira se resume a: (1) identificar o regime, (2) colocar taxa e prazo na mesma unidade, (3) aplicar a fórmula certa e (4) converter taxas (proporcional, equivalente, nominal, acumulada, real).

---

## 3. O conteúdo, explicado

### 3.1 Taxa de juros: percentual e unitária
📘 Taxa de juros é o coeficiente que determina o valor dos juros, isto é, a remuneração do capital. **Sempre se refere a uma unidade de tempo** (mês, semestre, ano…).
- **Taxa percentual:** valor dos juros para cada centésima parte do capital. Exemplo do slide: R$ 1.000 a 20% ao ano rendem 1.000/100 × 20 = **R$ 200** ("para cada 100 reais, ganho de 20").
- **Taxa unitária:** é a que entra nas fórmulas: 20% = 0,20; 2,5% = 0,025; 0,8% = 0,008.

➕ Abreviações de período: a.d. (ao dia), a.m. (ao mês), a.b. (ao bimestre), a.t. (ao trimestre), a.q. (ao quadrimestre), a.s. (ao semestre), a.a. (ao ano).

### 3.2 Fluxo de caixa e linha do tempo
📘 Os movimentos de dinheiro em momentos diferentes formam um **fluxo de caixa**: um conjunto de entradas e saídas no tempo. No diagrama, **seta para cima = entrada**, **seta para baixo = saída** (exemplo do slide: entradas de 200 nos anos 1, 2 e 3 e saída de 700 no ano 4).
➕ Ao montar a conta, pense no sentido do dinheiro: quem aplica tem uma saída hoje (VP) e uma entrada no futuro (VF).

### 3.3 Unidade de tempo: taxa e prazo SEMPRE na mesma unidade
📘 Nas fórmulas, **prazo e taxa devem estar na mesma unidade de tempo**. Escolha uma unidade e converta tudo para ela. Exemplo do slide: fundo com 2% ao mês por 2 anos → use 2% a.m. e **24 meses**.

Tabela de conversão (➕ convenção comercial, usada em todos os exercícios do curso):

| 1 ano = | 2 semestres | 3 quadrimestres | 4 trimestres | 6 bimestres | 12 meses | 360 dias |
| --- | --- | --- | --- | --- | --- | --- |
| 1 mês = 30 dias | 1 bimestre = 2 meses | 1 trimestre = 3 meses | 1 semestre = 6 meses | "1 ano e 11 meses" = 23 meses | "1 ano e 3 meses" = 15 meses | |

⚠️ O jeito de converter depende do regime: **no simples converte-se a taxa proporcionalmente** (multiplica/divide); **no composto converte-se pela taxa equivalente** (potência). Alternativa sempre válida: converter o **prazo** para a unidade da taxa (ex.: 6 meses = 0,5 ano) — no composto isso funciona com expoente fracionário.

### 3.4 Juros simples (capitalização simples)
📘 **Definição.** Comporta-se como uma **progressão aritmética**: os juros crescem de forma **linear**, porque incidem **só sobre o capital inicial**. Se os juros não forem pagos ao fim de cada período, eles **não são remunerados** — só o capital emprestado rende.

📘 **Quadro do slide** — empréstimo de R$ 1.000, 5 anos, 10% a.a. simples:

| Ano | Saldo inicial | Juros | Saldo final | Crescimento |
| --- | --- | --- | --- | --- |
| Início do ano 1 | — | — | 1.000 | — |
| Fim do ano 1 | 1.000 | 1.000 × 0,1 = 100 | 1.100 | 100 |
| Fim do ano 2 | 1.100 | 100 | 1.200 | 100 |
| Fim do ano 3 | 1.200 | 100 | 1.300 | 100 |
| Fim do ano 4 | 1.300 | 100 | 1.400 | 100 |
| Fim do ano 5 | 1.400 | 100 | 1.500 | 100 |

📘 **Fórmulas** (C = capital inicial, i = taxa unitária, n = nº de períodos, J = juros, M = montante):
- **J = C · i · n** → isolando: C = J/(i·n); i = J/(C·n); n = J/(C·i)
- **M = C + J = C · (1 + i · n)** → isolando: C = M/(1 + i·n); i = (M/C − 1)/n; n = (M/C − 1)/i

📘 **Onde se usa:** dívidas de curtíssimo prazo — desconto de duplicatas, cartão de crédito, cheque especial, multas — e produtos com variação cambial. Mais comum em países de moeda forte (EUA); no Brasil, pela história de inflação alta, usa-se menos que o composto.

📘 **Exemplos dos slides:**
- R$ 80.000 a 2,5% a.m. durante 1 trimestre: J = 80.000 × 0,025 × 3 = **R$ 6.000**.
- Quanto aplicar hoje a 1% a.m. simples para ter R$ 5.000 em 2 anos? 5.000 = C(1 + 0,01 × 24) → C = 5.000/1,24 = **R$ 4.032,26**.
- R$ 40.000 por 1 ano e 11 meses a 0,5% a.m.: M = 40.000 × (1 + 0,005 × 23) = 40.000 × 1,115 = **R$ 44.600**.
- Taxa mensal simples que triplica um capital em 1 ano: 3 = 1 × (1 + 12i) → 12i = 2 → i = **16,67% a.m.** (truque: use C = 1 e M = 3).

### 3.5 Juros compostos (capitalização composta)
📘 **Definição.** Incorpora ao capital os juros já acumulados ("juros sobre juros"). Os juros de cada período incidem sobre o saldo do **início daquele período**, que já inclui os juros anteriores; por isso o crescimento é **exponencial**.

📘 **Quadro do slide** — R$ 1.000, 5 anos, 10% a.a. composto:

| Ano | Saldo inicial | Juros | Saldo final |
| --- | --- | --- | --- |
| Fim do ano 1 | 1.000 | 100 | 1.100 |
| Fim do ano 2 | 1.100 | 1.100 × 0,1 = 110 | 1.210 |
| Fim do ano 3 | 1.210 | 121 | 1.331 |
| Fim do ano 4 | 1.331 | 133,10 | 1.464,10 |
| Fim do ano 5 | 1.464,10 | 146,41 | 1.610,51 |

Compare: no simples o saldo final era 1.500; no composto, 1.610,51.

📘 **Fórmulas** (VP = valor presente = capital; VF = valor futuro = montante):
- **VF = VP · (1 + i)^n** (capitalizar: levar para o futuro)
- **VP = VF / (1 + i)^n** (descontar: trazer para o presente)
- ➕ isolando a taxa: **i = (VF/VP)^(1/n) − 1**; isolando o prazo: **n = ln(VF/VP) / ln(1 + i)**.
- Juros: **J = VF − VP**.

📘 Construção do slide (1.000 a 10% a.m.): 1º mês 1.000 × 1,10 = 1.100; 2º mês 1.000 × 1,10 × 1,10 = 1.210; 3º mês 1.000 × 1,10³ = 1.331; generalizando, VF = VP(1 + i)^n. (⚠️ o slide escreve "+ (1 + 0,10)" no 3º mês; é "×".)

📘 **Onde se usa:** na maioria dos produtos de investimento e de dívida de médio e longo prazo no Brasil.

📘 **Não há simetria na variação:** se uma ação cai 10%, uma alta de 10% não a devolve ao preço anterior (100 → 90 → 99). ✍️ Para voltar, precisa subir 1/0,9 − 1 = 11,11%.

📘 **Exemplos dos slides:**
- Quanto depositar hoje, a 1,7% a.m., para ter R$ 27.500 em 1 ano? VP = 27.500/1,017¹² = **R$ 22.463,70**.
- Resgate de R$ 1.200 aplicados 8 meses a 3,5% a.m.: VF = 1.200 × 1,035⁸ = 1.200 × 1,316809 = **R$ 1.580,17**.
- R$ 40.000 por 1 ano e 3 meses a 3% a.m.: VF = 40.000 × 1,03¹⁵ = 40.000 × 1,558 = **R$ 62.318,70** (o slide arredonda para 62.319).

### 3.6 Dinâmica temporal: simples × composto
📘 Três fatos que caem em questão teórica:
1. **No 1º período os dois regimes dão o mesmo resultado** — em operações de um único período de juros, o regime é indiferente.
2. **Acima de 1 período o composto supera o simples**, e a diferença cresce quanto maior o número de períodos (curva exponencial × reta).
3. **Em períodos fracionados (menos de 1 período), o simples supera o composto.**

✍️ Exemplo numérico (R$ 10.000 a 5% a.m.):

| Prazo | Juros simples | Juros compostos | Quem rende mais |
| --- | --- | --- | --- |
| 0,5 mês | 250,00 | 246,95 | simples |
| 1 mês | 500,00 | 500,00 | iguais |
| 12 meses | 6.000,00 | 7.958,56 | composto |

### 3.7 Taxas proporcionais (regime simples)
📘 Duas taxas são **proporcionais** quando seus valores formam uma proporção com os tempos a que se referem (na mesma unidade): i/i' = n/n'. Exemplo: 18% a.a. e 1,5% a.m. são proporcionais, porque 18/1,5 = 12/1.

📘 Fórmula rápida: **i_k = i / k**, em que k é o número de subperíodos contidos no período da taxa original. Para ir do período menor ao maior, multiplica: 2% a.t. → 2% × 4 = 8% a.a.

📘 Exemplos dos slides: 30% a.a. → 30/12 = **2,5% a.m.**; 0,08% a.d. → 0,08 × 30 = **2,4% a.m.**; 8% a.t. → 8 × 4 = **32% a.a.**; 24% a.a. → **2% a.m.**; 2% a.t. → **8% a.a.**

⚠️ **No regime simples, taxa proporcional = taxa equivalente.** Por isso a lista e a pré-aula às vezes dizem "taxa equivalente" em questões de juros simples (lista Q12–13, pré-aula Q10): é só dividir ou multiplicar.

### 3.8 Taxas equivalentes (regime composto)
📘 Duas taxas são **equivalentes** quando, aplicadas ao **mesmo capital** durante o **mesmo prazo**, produzem o **mesmo juro (mesmo montante)**. Exemplo do slide: R$ 2.000 a 4% a.m. por 6 meses e a 12,5% a.t. por 2 trimestres dão ambos cerca de R$ 2.531 → "4% a.m. e 12,5% a.t. são equivalentes" (⚠️ aproximação; ver seção 7).

📘 Por ser capitalização exponencial, a equivalente é uma **média geométrica**:
- **i_q = (1 + i)^(1/q) − 1**, q = número de períodos de capitalização contidos no período da taxa dada (do maior para o menor).
- **1 + i_maior = (1 + i_menor)^n**, n = número de períodos menores contidos no maior.
- **Regra QUERO/TENHO:** **i_QUERO = (1 + i_TENHO)^(QUERO/TENHO) − 1** — no expoente, divide-se o período da taxa que você QUER pelo período da taxa que você TEM (na mesma unidade).

📘 Exemplos dos slides:
- 10,3826% a.s. → mensal: (1,103826)^(1/6) − 1 = **1,66% a.m.** (indiferente render 1,66% a.m. ou 10,38% a.s.).
- 1% a.m. → anual: 1,01^(12/1) − 1 = **12,68% a.a.** (maior que 12%, a proporcional).
- 58% a.a. → mensal: 1,58^(1/12) − 1 = **3,89% a.m.**
- 13% a.t. → anual: 1,13^4 − 1 = **63,05% a.a.**
- 10% a.a. → 10 dias: 1,10^(10/360) − 1 = **0,27% em 10 dias**.

➕ Intuição: a equivalente composta **anual é sempre maior** que a proporcional (porque os juros mensais rendem juros), e a equivalente **mensal é sempre menor** que a proporcional (30% a.a. → 2,21% a.m. equivalente, contra 2,5% proporcional).

### 3.9 Taxa nominal × taxa efetiva (capitalização)
📘 Quando o enunciado diz "**x% ao ano, capitalizados mensalmente**" (ou trimestralmente), a taxa anual é **nominal**: o período da taxa (ano) é diferente do período em que os juros são de fato incorporados (mês). O procedimento do curso tem **dois passos**:
1. **Proporcional (simples):** divide a nominal pelo nº de períodos de capitalização → taxa efetiva do período de capitalização (48% a.a. cap. mensal → 48/12 = 4% a.m.).
2. **Equivalente (composta):** a partir dessa taxa efetiva, converte para o período pedido (4% a.m. → bimestral: 1,04² − 1 = **8,16% a.b.**).

📘 Exemplos resolvidos no material: 24% a.a. cap. trimestral → 6% a.t. → semestral 1,06² − 1 = **12,36%**; 24% a.a. cap. mensal → 2% a.m. → R$ 40.000 por 2 meses = 41.616 → juros **R$ 1.616**; 36% a.a. cap. mensal → 3% a.m. → semestral 1,03⁶ − 1 = **19,41%**; 84% a.a. cap. mensal → 7% a.m. → 2 meses 1,07² − 1 = **14,49% ≈ 14,5%**; 12% a.a. cap. mensal → 1% a.m. → juros de 3 meses sobre 20.000 = **R$ 606,02**.

➕ A **taxa efetiva anual** é sempre maior que a nominal: 12% a.a. cap. trimestral → 3% a.t. → (1,03)⁴ − 1 = 12,55% a.a. efetivos.

### 3.10 Taxa de juros acumulada
📘 Quando as taxas variam período a período, a taxa do período inteiro **não é a soma**: some 1 a cada taxa, **multiplique** tudo e subtraia 1:
**(1 + i_acum) = (1 + i₁)(1 + i₂)(1 + i₃)…(1 + iₙ)**

📘 Exemplos dos slides: seis taxas mensais 1,2%; 0,9%; 1%; 1,1%; 0,95%; 0,85% → 1,06152 − 1 = **6,15% ao semestre**. Inflação de 4 meses 1,2%; 0,95%; 1,7%; 1,4% → 1,05353 − 1 = **5,35% no quadrimestre**. Petróleo sobe 2,3% e depois 3,5% sobre o preço já reajustado → 1,023 × 1,035 − 1 = **5,88% no mês**.

⚠️ Taxa negativa entra como (1 − i): +2%, −1%, +3% → 1,02 × 0,99 × 1,03 − 1 = 4,01% (e não 4%).

### 3.11 Inflação e Efeito Fisher
📘 O **Efeito Fisher** (Irving Fisher, 1867–1947) é a relação entre retorno **real**, retorno **nominal** e **inflação**:
**(1 + i_nominal) = (1 + i_real) × (1 + i_inflação)** ⇔ **(1 + i_real) = (1 + i_nominal) / (1 + i_inflação)**

📘 Abrindo a fórmula: **i_nominal = i_real + i_inflação + i_real × i_inflação**. A nominal tem três componentes: a taxa real, a inflação e a compensação de que os ganhos reais também perdem valor com a inflação. Esse terceiro termo costuma ser pequeno e, na prática, a aproximação **i_nominal ≈ i_real + i_inflação** é usada — ⚠️ mas **na prova, use a fórmula exata** (as questões e gabaritos usam a divisão/multiplicação).

📘 Exemplos dos slides: nominal 15,5% e inflação 5% → 1,155/1,05 − 1 = **10% real**; nominal 14% e inflação 7% → 1,14/1,07 − 1 = **6,54% real** (a aproximação daria 7%); real 5% e nominal 12% → inflação = 1,12/1,05 − 1 = **6,67%**.

➕ Taxa real negativa: se a aplicação rende menos que a inflação (nominal 4%, inflação 5%), real = 1,04/1,05 − 1 = −0,95% — o dinheiro perdeu poder de compra.

### 3.12 Calculadora científica (a da prova)
O aluno usa **calculadora científica** na AV1. Toda conta do curso sai com quatro recursos: a tecla de potência (`xʸ`, `^` ou `yˣ`, conforme o modelo), parênteses, a tecla `ln` e a memória (`Ans`, ou `STO`/`RCL`). Os trechos de HP12C que aparecem nos slides originais (pasta `materiais/`) não se aplicam: ignore.

| Conta | Como digitar | Resultado |
| --- | --- | --- |
| Montante composto VF = 1.200 × 1,035⁸ | `1200 × 1.035 ^ 8 =` | 1.580,17 |
| Valor presente VP = 27.500 / 1,017¹² | `27500 ÷ 1.017 ^ 12 =` (ou `27500 × 1.017 ^ (−12) =`) | 22.463,70 |
| Taxa equivalente mensal de 58% a.a. | `1.58 ^ (1 ÷ 12) − 1 =` | 0,0389 → 3,89% a.m. |
| Taxa equivalente de 10 dias a 10% a.a. | `1.1 ^ (10 ÷ 360) − 1 =` | 0,0027 → 0,27% |
| Taxa acumulada (1,2%; 0,95%; 1,7%; 1,4%) | `1.012 × 1.0095 × 1.017 × 1.014 − 1 =` | 0,0535 → 5,35% |
| Taxa real (Fisher) | `1.14 ÷ 1.07 − 1 =` | 0,0654 → 6,54% |
| Taxa composta a partir de VP e VF | `(1580.17 ÷ 1200) ^ (1 ÷ 8) − 1 =` | 0,035 → 3,5% |
| Prazo composto n = ln(VF/VP) / ln(1 + i) | `ln(1610.51 ÷ 1000) ÷ ln(1.1) =` | 5 períodos |

Cuidados com a calculadora científica:
- **Expoente fracionário sempre entre parênteses:** `1.58 ^ 1 ÷ 12` dá 0,1317 (eleva a 1 e depois divide), e não 1,0389.
- **Digite a taxa como fator** (1,035) em vez de usar a tecla `%`, que se comporta diferente em cada modelo.
- **Não arredonde no meio da conta:** use `Ans` ou a memória e arredonde só o resultado final (R$ com 2 casas, % com 2 casas). É por arredondar o fator que o gabarito do simulado Q6 dá 28.701,80 em vez de 28.701,57.
- **Separador decimal:** a calculadora usa ponto (1.035), e a prova escreve vírgula (1,035).
- Confira a ordem de grandeza: montante maior que o capital; taxa equivalente mensal menor que a anual.

📘 Os slides também mostram as funções do Excel (`=VP(1,7%;12;;-27500)` e `=VF(3,5%;8;;-1200)`). Servem para o dia a dia, não para a prova.

➕ Tabela de potências para conferir de cabeça se o resultado da calculadora faz sentido:

| Fator | Valor | Fator | Valor | Fator | Valor |
| --- | --- | --- | --- | --- | --- |
| 1,01² | 1,0201 | 1,02⁶ | 1,126162 | 1,05² | 1,1025 |
| 1,01³ | 1,030301 | 1,02¹² | 1,268242 | 1,05³ | 1,157625 |
| 1,01¹² | 1,126825 | 1,03² | 1,0609 | 1,06² | 1,1236 |
| 1,02² | 1,0404 | 1,03³ | 1,092727 | 1,07² | 1,1449 |
| 1,02³ | 1,061208 | 1,03⁶ | 1,194052 | 1,1² / 1,1³ / 1,1⁴ | 1,21 / 1,331 / 1,4641 |
| 1,04² | 1,0816 | 1,04³ | 1,124864 | 1,2² | 1,44 |

---

## 4. Fórmulas — folha de cola

| Fórmula | Quando usar | Interpretação |
| --- | --- | --- |
| J = C · i · n | juros simples | juros lineares, só sobre o capital |
| M = C · (1 + i · n) | montante simples | C = M/(1 + i·n); i = (M/C − 1)/n; n = (M/C − 1)/i |
| M = C + J | sempre | montante = capital + juros |
| VF = VP · (1 + i)^n | montante composto | capitalizar (levar ao futuro) |
| VP = VF / (1 + i)^n | valor presente composto | descontar (trazer ao presente) |
| i = (VF/VP)^(1/n) − 1 | achar taxa composta | ➕ |
| n = ln(VF/VP) / ln(1 + i) | achar prazo composto | ➕ tecla `ln` da calculadora científica |
| i_k = i / k | taxa proporcional (simples) | divide/multiplica pelo nº de subperíodos |
| i_QUERO = (1 + i_TENHO)^(QUERO/TENHO) − 1 | taxa equivalente (composta) | potência, nunca divisão |
| nominal → (÷ nº de capitalizações) → equivalente | "x% a.a. capitalizados mensalmente/trimestralmente" | 2 passos: proporcional, depois equivalente |
| (1 + i_acum) = Π(1 + i_k) | taxas que variam período a período; inflação acumulada | multiplica, não soma |
| (1 + i_nom) = (1 + i_real)(1 + i_infl) | Efeito Fisher | real = nominal "descontada" a inflação |
| i_nom = i_real + i_infl + i_real·i_infl | Fisher aberto | aproximação i_nom ≈ i_real + i_infl (não usar na prova) |

---

## 5. Exemplos resolvidos passo a passo

### 5.0 Mapa de decisão — como reconhecer o tipo de questão ✍️
1. O enunciado fala em **"juros simples"** ou "capitalização simples"? → J = C·i·n / M = C(1 + i·n); conversão de taxa por **proporção**.
2. Fala em **"juros compostos"**, "capitalização composta", "capitalizados mensalmente"? → VF = VP(1 + i)^n; conversão por **equivalência**.
3. Pede "taxa **proporcional**"? → divide/multiplica. Pede "taxa **equivalente**" em compostos? → potência QUERO/TENHO.
4. Aparece "**ao ano, capitalizada mensalmente/trimestralmente**"? → taxa nominal: divide primeiro, depois potência.
5. Aparecem **várias taxas seguidas** (meses diferentes, aumentos sucessivos)? → taxa acumulada: multiplica os fatores.
6. Aparecem **inflação** e "taxa real"/"ganho real"? → Fisher: divide os fatores.
7. Antes de calcular: **taxa e prazo na mesma unidade?** Pede **juros** ou **montante**? (Pegadinha clássica.)

### 5.1 Juros simples — achar o prazo (pré-aula Q3)
R$ 3.000 a 1,2% a.m. simples; resgate de R$ 3.540. Juros = 3.540 − 3.000 = 540. 540 = 3.000 × 0,012 × n → 540 = 36n → **n = 15 meses**.

### 5.2 Juros simples com unidades diferentes (lista Q3)
Capital aplicado 4 bimestres a 6% a.t. simples, juros de R$ 1.920. Converter tudo para mês: 4 bimestres = 8 meses; 6% a.t. = 2% a.m. (proporcional). 1.920 = C × 0,02 × 8 = 0,16C → **C = R$ 12.000**.

### 5.3 Juros compostos — montante (simulado Q7)
R$ 18.500 a 3,5% a.m. por 6 meses: VF = 18.500 × 1,035⁶ = 18.500 × 1,229255 = **R$ 22.741,22**.

### 5.4 Juros compostos — capital (lista Q26)
Montante R$ 2.122,42 após 3 meses a 2% a.m.: VP = 2.122,42/1,02³ = 2.122,42/1,061208 = **R$ 2.000,00**.

### 5.5 Prazo em unidade diferente (lista Q29)
R$ 500.000, 2 anos, 10% **ao semestre**: 2 anos = 4 semestres → VF = 500.000 × 1,1⁴ = 500.000 × 1,4641 = **R$ 732.050**. (Erro comum: usar n = 2 → 605.000.)

### 5.6 Taxa nominal (lista Q24)
R$ 20.000 a 12% a.a. com capitalização mensal, pagos após 3 meses. Passo 1: 12%/12 = 1% a.m. Passo 2: VF = 20.000 × 1,01³ = 20.606,02 → **juros = R$ 606,02**.

### 5.7 Taxa equivalente (lista Q36 e Q39)
2% a.m. → anual: 1,02¹² − 1 = **26,82% a.a.** (não 24%). 5% a.m. → trimestral: 1,05³ − 1 = **15,76% a.t.** (não 15%).

### 5.8 Taxa acumulada (simulado Q8)
1,5%; 2,0%; 0,8%; 1,2%; 2,1% → 1,015 × 1,02 × 1,008 × 1,012 × 1,021 − 1 = **7,83%** (a soma daria 7,6%).

### 5.9 Fisher (simulado Q4 e Q5)
Nominal 12% em 4 meses, inflação 6% → real = 1,12/1,06 − 1 = **5,66%** (não 6%). Real 8% no trimestre, inflação 3% → nominal = 1,08 × 1,03 − 1 = **11,24%** (não 11%).

---

## 6. Armadilhas e pegadinhas de prova ⚠️

1. **Juros × montante.** Leia o que se pede: "valor dos juros" (J) ou "valor a resgatar/pagar", "quitação" (M). Lista Q25 e Q28, pré-aula Q15 e Q19 testam exatamente isso.
2. **Unidade de tempo.** "4 bimestres a 6% a.t.", "2 anos a 10% a.s.", "1 ano e 11 meses" — converta antes de tudo.
3. **Converter taxa no composto dividindo.** 12% a.a. composto ≠ 1% a.m. equivalente (é 0,949% a.m.); 2% a.m. ≠ 24% a.a. composto (é 26,82%). Dividir/multiplicar só vale no simples **ou** como 1º passo de uma taxa nominal.
4. **Nominal × efetiva.** "24% a.a. capitalizados trimestralmente" NÃO é 24% efetivos: é 6% a.t. efetivos (= 26,25% a.a. efetivos).
5. **Somar taxas acumuladas.** Sempre multiplique os fatores (1 + i). Com taxa negativa, o fator é (1 − i).
6. **Fisher aproximado.** Real ≠ nominal − inflação. Use divisão de fatores. Alternativas "armadilha" costumam trazer o valor aproximado (ex.: 6% em vez de 5,66%).
7. **Assimetria.** Queda de X% seguida de alta de X% não volta ao ponto inicial (−10% e +10% = −1%).
8. **Período fracionário.** Abaixo de 1 período o simples rende mais que o composto; em 1 período são iguais.
9. **Taxa simples: "triplicar"/"dobrar".** Use C = 1: dobrar → M = 2; triplicar → M = 3. Dobrar a 4% a.m. simples → 2 = 1 + 0,04n → n = 25 meses.
10. **Comparar taxas simples de períodos diferentes** (lista Q16): leve todas para a mesma base (ex.: anual) antes de comparar: 7% a.b. = 42% a.a. é a maior.
11. **Percentual × unitária.** Na fórmula, 1,8% = 0,018 (não 0,18). Erro de casa decimal derruba a questão inteira.
12. **Arredondamento.** Arredonde só no fim; fatores arredondados geram diferenças de centavos (ver simulado Q6 na seção 7) — em múltipla escolha, marque a alternativa mais próxima.

---

## 7. Divergências e erros encontrados no material ⚠️

| Onde | O que o material diz | O certo |
| --- | --- | --- |
| Lista MatFin Q28 | Pede "o valor correspondente aos juros" e o gabarito marca **a) R$ 96.800** | R$ 96.800 é o **montante** (80.000 × 1,1²). Os juros são **R$ 16.800**, que não está entre as alternativas. Na prova: se pedir juros, responda J = M − C. |
| Pré-aula 01 Q11 | Enunciado: 10 meses; resolução usa n = 2 → R$ 5.202,00 | Para 10 meses: 5.000 × 1,02¹⁰ = **R$ 6.094,97**. (R$ 5.202 seria o montante de 2 meses.) |
| Pré-aula 01 Q15 | Pede "montante de juros"; a resolução calcula M = R$ 2.809 e J = R$ 309 | Os **juros** são **R$ 309**; o montante é R$ 2.809. |
| Pré-aula 01 Q6 | Escreve "(0,08 */2) * (3 * 3)" | Significa (0,08/2) × (3 × 3) = 4% a.m. × 9 meses. |
| Pré-aula 01 Q9 | "0,0,6 * 4" | 0,06 × 4 = 24% a.a. |
| Lista MatFin Q38 | Gabarito "44$" | **44%** (1,2² − 1). |
| Lista MatFin Q11 | Alternativas c e e repetem "214%" | Erro de digitação; a resposta é b) 120%. |
| Lista Q12, Q13 e pré-aula Q10 | Chamam de "equivalente" uma conversão em juros simples | Em juros simples, equivalente = proporcional (divide/multiplica). |
| Slides p.17 | "1.000 × (1 + 0,10) × (1 + 0,10) + (1 + 0,10) = 1.331" | O "+" é "×": 1.000 × 1,10³ = 1.331. |
| Slides p.31 | "4% a.m. e 12,5% a.t. são taxas equivalentes" (ambos FV ≈ R$ 2.531) | Aproximação: 2.000 × 1,04⁶ = 2.530,64 e 2.000 × 1,125² = 2.531,25. A equivalente exata de 4% a.m. é 1,04³ − 1 = **12,49% a.t.** |
| Slides p.24 | VF = 40.000 × 1,558 = 62.319 | Valor exato 40.000 × 1,03¹⁵ = 62.318,70 (o slide arredonda). |
| Simulado Q6 | Gabarito R$ 28.701,80 | Exato: 25.000 × 1,028⁵ = **R$ 28.701,57** (diferença de arredondamento do fator). |
| Simulado Q9 | Gabarito 6,04% | Exato: 1,01 × 1,018 × 1,022 × 1,009 − 1 = **6,03%** (6,0257%). |

---

## 8. Como o tema se conecta aos outros

- `link_contabilidade_estrutura_conceitual`: bases de mensuração — o **valor em uso** é o **valor presente** dos fluxos de caixa futuros de um ativo (VP = Σ VF/(1 + i)^n).
- `link_contabilidade_dre` e `link_contabilidade_indicadores_estrutura_liquidez`: os juros de empréstimos viram **despesa financeira** na DRE; a capacidade de pagá-los é a **cobertura de juros** (EBIT / despesas financeiras).
- `link_contabilidade_balanco_patrimonial`: o prazo da dívida (curto × longo) e o custo de cada fonte; "maior prazo, maior risco, maior custo".
- `link_contabilidade_capital_de_giro`: financiar o ciclo de caixa com dinheiro oneroso custa juros — por isso reduzir o CCC gera valor.
- `link_contabilidade_analise_vertical_horizontal` e `link_contabilidade_rentabilidade`: comparar crescimento/margem com a inflação (IPCA) é aplicar Fisher (ganho real).
- `link_contabilidade_revisao_geral`: formulário completo e simulado geral.

---

## 9. Protocolo para sessões de estudo

- **Modo EXPLICAR:** comece pela intuição (o dinheiro tem valor no tempo; juros remuneram inflação, oportunidade e risco), depois a fórmula, depois um exemplo dos slides, depois a pegadinha correspondente da seção 6. Para conversão de taxas, sempre pergunte primeiro: "simples ou composto?".
- **Modo EXERCITAR:** pegue uma questão por vez do `exercicios.md` (ou crie uma nova no mesmo estilo), **espere a resposta do aluno**, corrija mostrando a memória de cálculo completa (fórmula → substituição → resultado → unidade), explique por que as alternativas erradas atraem, registre acertos/erros por subtema (simples, compostos, proporcional, equivalente, nominal, acumulada, Fisher) e volte nos subtemas errados.
- **Modo SIMULADO:** bloco de N questões (sugestão: as 9 do simulado geral + 6 inéditas, ~30 min), sem feedback até o fim; depois, nota, tempo e diagnóstico por subtema, com as fórmulas a revisar.
- Sempre exija **memória de cálculo** e a **unidade** do resultado (% a.m., R$, meses). A prova é **sem consulta**: ao fim de cada sessão, peça para o aluno reescrever de memória a folha de cola da seção 4.
- Para conferir contas durante a sessão, use `python3 -I -c '...'`; nunca invente valores.
