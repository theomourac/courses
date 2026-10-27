---
name: link_contabilidade_indicadores_estrutura_liquidez
description: Indicadores de Estrutura, Solvência e Liquidez da disciplina Contabilidade Gerencial da Link School of Business (Explorers D, 2026): liquidez corrente, seca e imediata; endividamento geral, solvência geral, grau de endividamento e cobertura de juros; dívida onerosa, composição do endividamento, participação de capital de terceiros (limiar 3) e imobilização do PL (limiar 2); relações entre os índices; passivo a descoberto e PL negativo; efeito de transações nos índices; hands-on Renner, M. Dias Branco e TOTVS. Traz as questões da pré-aula 07 (com gabarito elaborado) e do simulado geral, com gabarito comentado, mais inéditas. Use quando alguém perguntar sobre liquidez, solvência, endividamento ou estrutura de capital, ou precisar calcular e interpretar esses índices a partir de um balanço para a AV1 de Contabilidade Gerencial da Link.
---

# Indicadores de Estrutura, Solvência e Liquidez — Contabilidade Gerencial (Link)

> **Materiais locais (pasta `materiais/` desta skill):** `Aula 08 - Indicadores Financeiros de Estrutura, Solvência e Liquidez.md` (slides, 27 páginas), `07 - Pré-Aula - Indicador de estrutura.md` (14 questões — **sem gabarito no material**), `Lista de Exercícios_Contabilidade Gerencial.md` (simulado geral; Q25–26 são deste tema). Originais em `/Users/theo/Documents/Projetos/Link/Contabilidade/` (PDFs em `/Users/theo/Documents/Projetos/Link/`).
> **Exercícios:** `exercicios.md` (16 questões do material + 16 inéditas, com gabarito comentado).
> **Legenda:** 📘 vem do material do curso · ➕ complemento externo (ajuda a entender, mas não é o que o curso afirma) · ⚠️ divergência, erro do material ou pegadinha de prova · ✍️ resolução ou exercício elaborado por Claude (não oficial).

**Como usar esta skill:** em pergunta de prova, responda pela versão 📘 (fórmulas e parâmetros do slide). Use ➕ para aprofundar. Toda resposta numérica deve vir com memória de cálculo **e** interpretação ("quanto maior, menor o risco…"). Para a classificação das contas do balanço, carregue `link_contabilidade_balanco_patrimonial`; para o lado do retorno (ROE, alavancagem da DuPont), `link_contabilidade_rentabilidade`. Em sessão de estudo, siga o protocolo da seção 9.

---

## 1. Onde o tema entra no curso

📘 **Plano de aula (Explorers D):**
- **Aula 15 — 01/10/26 — Índices Financeiros de Estrutura, Solvência e Liquidez.** Objetivo: "Analisar indicadores de solvência e liquidez." Competências: C4.H1 (relacionar e utilizar indicadores diversos para avaliar a performance estratégica), C2.H1 (analisar informações financeiras e gerenciais), C6.H1 (olhar crítico e propositivo). Referência: Martins, Diniz e Miranda, *Análise avançada das demonstrações contábeis* (2020).
- Reaplicado na **Aula 19 (15/10)** — análise de índices e performance de uma empresa referência.
- 📘 **Plano de ensino:** "Índices de estrutura de capital e capacidade de pagamento" e "Aplicação prática de índices e análise de performance".
- **Peso no simulado geral:** Q25 (liquidez corrente e seca) e Q26 (liquidez corrente, seca e imediata) — 2 de 32 questões. A Pré-aula 07 traz 14 questões (6 conceituais + 8 de cálculo) — é o melhor termômetro do estilo da prova para este tema.
- **Prova AV1:** 26/10/2026, individual, **sem consulta** (40% da nota) → memorize as fórmulas da seção 4.

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

**Onde a aula se encaixa.** Depois de medir quanto a empresa **ganha** (Aula 13, rentabilidade), o curso mede quanto ela **aguenta**: se consegue pagar as contas do curto prazo (liquidez), se o patrimônio cobre as dívidas (solvência) e quanto do negócio depende de dinheiro de terceiros (estrutura). A aula seguinte (capital de giro) aprofunda o curto prazo separando operação de tesouraria.

---

## 2. A ideia central

📘 O ponto de partida é o balanço de qualquer pessoa ou empresa: **ativos** são bens e direitos, **passivos** são obrigações presentes e o **patrimônio líquido** é Ativos − Passivos. Na empresa, o passivo é **capital de terceiros** e o PL é **capital dos sócios**. Os indicadores desta aula comparam esses blocos para responder três perguntas:

| Bloco | Pergunta | Índices |
| --- | --- | --- |
| **Liquidez** | Consigo pagar o que vence nos próximos 12 meses com o que vira dinheiro nos próximos 12 meses? | Corrente, Seca, Imediata |
| **Solvência** | No longo prazo, meus bens e direitos cobrem todas as minhas dívidas? Meu lucro paga os juros? | Endividamento Geral, Solvência Geral, Grau de Endividamento, Cobertura de Juros |
| **Estrutura** | Quanto do negócio é financiado por terceiros, com que prazo e a que custo? Quanto do capital próprio está "preso" em ativos de longo prazo? | Composição do Endividamento, Participação de Capital de Terceiros, Imobilização do PL |

📘 A regra de ouro do slide: **endividamento eleva o risco**, porque coloca obrigações com data definida; e o **endividamento oneroso** (empréstimos, financiamentos, debêntures) é ainda mais arriscado, porque gera despesas financeiras que reduzem o resultado.

➕ Rentabilidade e risco andam juntos: a mesma dívida que aumenta o ROE (via alavancagem — `link_contabilidade_rentabilidade`) piora os índices desta aula. A análise completa olha os dois lados.

---

## 3. O conteúdo, explicado

### 3.1 As contas que alimentam os índices
📘 Principais contas do Balanço (slide p.3), com a fronteira de **12 meses** (realização/exigibilidade em até 12 meses = circulante; após 12 meses = não circulante; PL sem prazo de vencimento):

| Grupo | Principais contas |
| --- | --- |
| Ativo circulante | Caixa e aplicações financeiras; estoques; contas a receber; adiantamento de despesas; outros ativos circulantes |
| Ativo não circulante | Realizável a longo prazo; investimentos; imobilizado; intangível |
| Passivo circulante | Fornecedores; empréstimos e financiamentos; obrigações sociais e trabalhistas; obrigações fiscais; outros passivos circulantes |
| Passivo não circulante | Fornecedores; empréstimos e financiamentos |
| Patrimônio líquido | Capital social; reservas |

📘 Os **empréstimos e financiamentos** (no PC e no PNC) são as **fontes onerosas** de capital de terceiros; capital social e reservas são **fontes internas** (capital dos sócios).

### 3.2 Índices de liquidez
📘 Avaliam a **capacidade de pagamento** da empresa frente às suas obrigações — de grande importância para a continuidade da empresa. Para os três: **quanto MAIOR o índice, MENOR o risco.**

**a) Liquidez Corrente (LC) = Ativo Circulante / Passivo Circulante**
📘 Indica quanto a empresa tem a receber no curto prazo para cada unidade monetária que deve no mesmo período.
- 📘 **LC > 1:** menor risco; capacidade adequada de pagamento no curto prazo.
- 📘 **LC < 1:** maior risco; possível dependência de capital externo ou de giro rápido dos ativos para pagar as obrigações.

**b) Liquidez Seca (LS) = (Ativo Circulante − Estoques) / Passivo Circulante**
📘 Mesmo significado da corrente, mas **não conta com a realização dos estoques** (eles não são considerados recebíveis imediatos — precisam primeiro ser vendidos e depois recebidos).
- 📘 **LS > 1:** consegue pagar o curto prazo com os ativos mais líquidos.
- 📘 **LS < 1:** possível dependência da venda de estoques ou de novas receitas.

**c) Liquidez Imediata (LI) = (Caixa + Aplicações Financeiras) / Passivo Circulante**
📘 Indica se a empresa tem dinheiro em caixa para liquidar, **no ato**, todas as obrigações de curto prazo.
- 📘 **LI > 1:** cobre as obrigações sem converter outros ativos.
- 📘 **LI < 1:** possível dependência de recebimentos futuros ou crédito. ➕ Na prática, LI bem abaixo de 1 é o normal — ninguém mantém caixa igual a todo o PC; o índice é útil para comparar empresas do mesmo setor e acompanhar tendência.

➕ **Leitura conjunta LC × LS:** a distância entre elas mostra **quanto a liquidez depende dos estoques**. LC 2,0 com LS 0,5 = a folga é "estoque" (que pode estar encalhado). Empresas sem estoque (serviços, software) têm LS ≈ LC.

### 3.3 Índices de solvência
📘 **Solvência** é a capacidade de cumprir as obrigações financeiras de **longo prazo** — saldar dívidas e compromissos futuros mesmo diante de desafios, garantindo a continuidade e a saúde financeira. É usada por investidores, credores, gestores e analistas para avaliar sustentabilidade e risco de insolvência; protege contra riscos, orienta decisões estratégicas e melhora a governança. (O slide ilustra com um radar comparando três empresas em cobertura de juros, dívida/EBITDA, PL/ativos e endividamento total, sem tabela de valores.)

**a) Endividamento Geral (EG) = (Passivo Circulante + Passivo Não Circulante) / Ativo Total**
📘 Proporção do ativo que está comprometida com dívidas. **Quanto MENOR, melhor.**
- 📘 **EG > 1:** a empresa está com **passivo a descoberto**, apresentando **situação patrimonial negativa** (dívidas maiores que todos os bens e direitos → PL negativo).

**b) Solvência Geral (SG) = Ativo Total / (Passivo Circulante + Passivo Não Circulante)**
📘 Capacidade de pagamento tomando como base o ativo total. **Quanto MAIOR, melhor.**
- 📘 **SG < 1:** passivo a descoberto, situação patrimonial negativa.
- ➕ É o **inverso** do endividamento geral: SG = 1 / EG.

**c) Grau de Endividamento (GE) = (Passivo Circulante + Passivo Não Circulante) / Patrimônio Líquido**
📘 Mede o quanto a empresa está endividada **em relação ao capital próprio**. **Quanto MENOR, melhor.** Empresas com baixo grau têm menor risco financeiro, maior capacidade de financiamento futuro e mais estabilidade em crises; empresas altamente alavancadas sofrem mais em recessões ou quedas de receita, especialmente com custos financeiros elevados.

**d) Cobertura de Juros (CJ) = EBIT (Lucro Operacional) / Despesas Financeiras**
📘 Capacidade de pagar os **juros** da dívida (também chamada ICR — *interest coverage ratio*). **Quanto MAIOR, melhor.** Índice elevado = solidez (paga as despesas financeiras sem comprometer significativamente o lucro); cobertura baixa = dificuldade para tomar novas dívidas e risco de inadimplência em crises.
- ➕ **CJ < 1:** o lucro operacional **não paga nem os juros** — LAIR negativo.
- ➕ Leitura em "vezes": CJ = 8 → o EBIT paga os juros 8 vezes.

### 3.4 Índices de estrutura
📘 Ao analisar o endividamento, observe (slide p.19):
- **Liquidez/prazo** (quando a dívida vence);
- **Estrutura de endividamento** (curto × longo; oneroso × não oneroso);
- **Capacidade de manter as dívidas** → Cobertura de Juros;
- **Prazo para cumprir a dívida em relação ao potencial de geração de caixa** → Alavancagem do EBITDA.

**a) Composição do Endividamento (CE) = Passivo Circulante / (PC + PNC)**
📘 Proporção das obrigações de **curto prazo** no passivo total. Valores **elevados** = maior dependência de dívidas de curto prazo → maior risco de liquidez. Índice **mais baixo** = maior parcela da dívida no longo prazo, menos pressão financeira imediata.

**b) Participação de Capital de Terceiros (PCT) = (PC + PNC) / Patrimônio Líquido**
📘 Quanto a empresa depende de passivos em relação ao PL — crucial para avaliar alavancagem financeira e risco de endividamento excessivo. Maior participação de PL = estrutura mais sólida e menor vulnerabilidade a crises de crédito.
- 📘 **PCT > 3:** elevada dependência externa, possíveis maiores despesas financeiras e risco.
- 📘 **PCT < 3:** menor dependência de financiadores e maior resistência a flutuações.
- ⚠️ No slide, a fórmula da PCT é **idêntica** à do Grau de Endividamento. ➕ Muitos livros expressam a PCT em % (×100) e consideram "acima de 100%" (PCT > 1) como mais dívida que capital próprio; o limiar 3 é o **parâmetro ilustrativo do curso** — na prova, use o do slide.

**c) Imobilização do Patrimônio Líquido (IPL) = Ativo Não Circulante / Patrimônio Líquido**
📘 Quanto do PL está comprometido com ativos não circulantes (longo prazo: imobilizado, intangível…).
- 📘 **IPL > 2:** imobilização elevada, maior comprometimento em ativos fixos e menor liquidez.
- 📘 **IPL < 2:** imobilização moderada, maior flexibilidade financeira.
- ➕ Leitura clássica: se IPL > 1, o PL não basta para financiar o ANC e parte dele é financiada por terceiros (idealmente de longo prazo). ➕ Muitos autores calculam com (Investimentos + Imobilizado + Intangível) no numerador, sem o RLP; o curso usa o ANC inteiro.

**d) Alavancagem do EBITDA** ➕ (citada no slide sem fórmula)
➕ Mercado usa **Dívida Líquida / EBITDA**, com Dívida Líquida = empréstimos e financiamentos (CP + LP) − caixa e aplicações. Lê-se "em quantos anos de EBITDA a empresa pagaria a dívida". Referência informal de mercado: até ~2–3x é confortável para empresas maduras; acima disso, atenção.

### 3.5 Relações entre os índices (➕ atalhos que o slide não mostra, mas saem da equação A = P + PL)
- **SG = 1 / EG.** EG 0,60 ↔ SG 1,67.
- **MPL (alavancagem da DuPont) = AT / PL = 1 + PCT.** PCT 1,5 ↔ MPL 2,5.
- **EG = PCT / (1 + PCT)** e **PCT = EG / (1 − EG).** EG 0,60 → PCT = 0,60/0,40 = 1,5.
- **EG > 1 ⇔ SG < 1 ⇔ PL < 0** (passivo a descoberto). Com PL negativo, GE, PCT e IPL ficam **negativos e sem interpretação**.
- **LC ≥ LS ≥ LI** sempre (cada uma tira mais coisa do numerador). Se der o contrário, há erro de conta.

### 3.6 Como os eventos mexem nos índices (➕ pegadinhas clássicas)
- **Pagar fornecedor com caixa** reduz AC e PC no mesmo valor: se LC > 1, a LC **sobe**; se LC < 1, **cai**; se LC = 1, fica igual.
- **Comprar estoque a prazo** aumenta AC (estoque) e PC (fornecedor) no mesmo valor: a LC se aproxima de 1 e a **LS cai** (o numerador da seca não aumenta).
- **Captar empréstimo de longo prazo** em dinheiro: AC sobe e PC não muda → **LC sobe**; mas o passivo total sobe → **EG sobe**. Liquidez melhora "comprada" com endividamento.
- **Prejuízo** reduz o PL → GE, PCT e IPL **sobem**.
- **Aumento de capital em dinheiro** (aporte dos sócios): AC e PL sobem → LC sobe, EG cai, PCT cai.

### 3.7 Hands-on da aula: Renner, M. Dias Branco e TOTVS
📘 A atividade prática propõe calcular os indicadores dessas três empresas (dados nas demonstrações públicas — `investsite.com.br` ou site de RI; ver `link_contabilidade_analise_vertical_horizontal`). O material não traz números.
➕ O que esperar de cada modelo de negócio (para orientar a interpretação, não para a prova):
- **Renner (varejo de moda):** estoques e recebíveis de cartão relevantes → diferença grande entre LC e LS.
- **M. Dias Branco (indústria de alimentos):** fábricas e marcas → ANC pesado (IPL mais alto), estoques de trigo/insumos.
- **TOTVS (software):** quase sem estoque → LS ≈ LC; ativo intangível relevante (aquisições, desenvolvimento).

---

## 4. Fórmulas — folha de cola

| Índice | Fórmula | Melhor quando | Parâmetro do slide |
| --- | --- | --- | --- |
| Liquidez Corrente | AC / PC | maior | > 1 menor risco; < 1 maior risco |
| Liquidez Seca | (AC − Estoques) / PC | maior | > 1 paga sem vender estoque |
| Liquidez Imediata | (Caixa + Aplicações) / PC | maior | > 1 paga "no ato" |
| Endividamento Geral | (PC + PNC) / AT | menor | > 1 passivo a descoberto |
| Solvência Geral | AT / (PC + PNC) | maior | < 1 passivo a descoberto |
| Grau de Endividamento | (PC + PNC) / PL | menor | — |
| Cobertura de Juros | EBIT / Despesas Financeiras | maior | ➕ < 1 não paga os juros |
| Composição do Endividamento | PC / (PC + PNC) | menor (menos pressão no curto prazo) | — |
| Participação de Capital de Terceiros | (PC + PNC) / PL | menor | > 3 elevada; < 3 menor dependência |
| Imobilização do PL | ANC / PL | menor | > 2 elevada; < 2 moderada |
| ➕ Dívida Líquida / EBITDA | (Empréstimos CP + LP − Caixa − Aplicações) / EBITDA | menor | ➕ mercado: ~2–3x |
| ➕ Atalhos | SG = 1/EG; MPL = 1 + PCT; PCT = EG/(1 − EG) | | |

**Mnemônico:** os índices de **liquidez** usam **PC** no denominador (curto prazo); os de **endividamento** usam **PC + PNC** (todo o capital de terceiros) no numerador ou denominador; os de **estrutura sobre o sócio** usam **PL** no denominador.

---

## 5. Exemplos resolvidos passo a passo

### 5.1 Pré-aula 07 — cálculos (✍️ gabarito elaborado; o material não traz)
Dados: AC 480.000; PC 240.000; Estoques 150.000; Caixa e equivalentes 60.000.
- LC = 480.000 / 240.000 = **2,00** → R$ 2,00 de AC para cada R$ 1,00 de PC.
- LS = (480.000 − 150.000) / 240.000 = 330.000 / 240.000 = **1,375** (≈ 1,38) → paga o PC mesmo sem vender estoque.
- LI = 60.000 / 240.000 = **0,25** → o caixa cobre 25% do PC hoje.

Passivo total 900.000; Ativo total 1.500.000; PL 600.000 (= 1.500.000 − 900.000):
- EG = 900.000 / 1.500.000 = **0,60 (60%)** → < 1: **não** há situação patrimonial negativa.
- SG = 1.500.000 / 900.000 = **1,67** → ativos cobrem 1,67 vez as dívidas.
- PCT = 900.000 / 600.000 = **1,50** → R$ 1,50 de terceiros para cada R$ 1,00 próprio; < 3 pelo parâmetro do slide.
- CJ = 200.000 / 25.000 = **8,0x** → o EBIT paga os juros 8 vezes: folga confortável.
- IPL = 700.000 / 500.000 = **1,40** → < 2: imobilização moderada (➕ mas > 1: parte do ANC é financiada por terceiros).

### 5.2 Simulado geral, Q25 e Q26 📘
- Q25: AC 150.000 (estoques 45.000), PC 100.000 → LC = **1,50**; LS = 105.000/100.000 = **1,05**.
- Q26: AC 320.000 (estoques 90.000; caixa 25.000; aplicações de liquidez imediata 15.000), PC 200.000 → LC = **1,60**; LS = 230.000/200.000 = **1,15**; LI = 40.000/200.000 = **0,20**.

### 5.3 Balanço completo — todos os índices de uma vez (✍️ Empresa Beta, R$ mil)

| Ativo | | Passivo + PL | |
| --- | ---: | --- | ---: |
| Caixa | 40 | Fornecedores | 150 |
| Aplicações financeiras | 60 | Salários e encargos | 40 |
| Clientes | 180 | Impostos a recolher | 30 |
| Estoques | 220 | Empréstimos CP | 180 |
| **Ativo Circulante** | **500** | **Passivo Circulante** | **400** |
| Realizável a LP | 50 | Empréstimos LP | 350 |
| Investimentos | 30 | **Passivo Não Circulante** | **350** |
| Imobilizado | 520 | Capital social | 350 |
| Intangível | 100 | Reservas | 100 |
| **Ativo Não Circulante** | **700** | **Patrimônio Líquido** | **450** |
| **Ativo Total** | **1.200** | **Total** | **1.200** |

DRE: EBIT 150; despesas financeiras 60.

| Índice | Conta | Resultado | Leitura |
| --- | --- | ---: | --- |
| LC | 500/400 | 1,25 | > 1: paga o curto prazo com folga pequena |
| LS | (500 − 220)/400 | 0,70 | < 1: depende de vender estoque |
| LI | (40 + 60)/400 | 0,25 | caixa cobre 25% do PC |
| EG | 750/1.200 | 0,625 | 62,5% do ativo financiado por terceiros |
| SG | 1.200/750 | 1,60 | ativos cobrem 1,6 vez as dívidas |
| GE = PCT | 750/450 | 1,67 | < 3 (parâmetro do slide): dependência moderada |
| CJ | 150/60 | 2,5x | EBIT paga os juros 2,5 vezes — folga apertada |
| CE | 400/750 | 53,3% | mais da metade da dívida vence em 12 meses |
| IPL | 700/450 | 1,56 | < 2: moderada (➕ > 1: parte do ANC com dinheiro de terceiros) |
| ➕ MPL | 1.200/450 | 2,67 | = 1 + PCT |
| ➕ Dívida onerosa | 180 + 350 | 530 | 70,7% do passivo total é oneroso |

**Diagnóstico ✍️:** liquidez corrente aceitável, mas sustentada por estoques (LS 0,70); endividamento relevante e majoritariamente oneroso, com metade no curto prazo; cobertura de juros de 2,5x é sensível a uma queda de resultado. Risco moderado, com atenção ao curto prazo e ao custo da dívida.

---

## 6. Armadilhas e pegadinhas de prova

- ⚠️ **Liquidez usa só o circulante** (AC e PC). Não coloque PNC nem ANC nos índices de liquidez.
- ⚠️ **Liquidez Seca tira apenas os estoques** (convenção do curso). ➕ Alguns autores também tiram despesas antecipadas — não faça isso na prova, a menos que o enunciado peça.
- ⚠️ **Liquidez Imediata = caixa + aplicações de liquidez imediata**, não inclui clientes nem estoques. Se o enunciado der "Caixa e Equivalentes", use esse valor.
- ⚠️ **Endividamento Geral usa Passivo exigível (PC + PNC)** — nunca some o PL ao numerador. O "Passivo Total" de alguns balanços publicados já inclui o PL; leia o enunciado.
- ⚠️ **EG > 1 / SG < 1 = passivo a descoberto = PL negativo.** Essa é a interpretação esperada (Pré-aula 07, Q4).
- ⚠️ **Sentido "bom":** liquidez, solvência geral e cobertura de juros → **maior é melhor**; endividamento geral, grau de endividamento, composição, PCT e IPL → **menor é melhor** (menos risco).
- ⚠️ **Composição do endividamento alta** = dívida concentrada no **curto** prazo (pior), não no longo.
- ⚠️ **Grau de Endividamento e PCT** têm a mesma fórmula no slide; não estranhe se a prova chamar pelos dois nomes.
- ⚠️ **Limiares do slide** (> 1, > 3, > 2) são parâmetros ilustrativos do curso — cite-os como tal e complemente com comparação setorial.
- ⚠️ **LC alta não garante pagamento**: estoque encalhado ou clientes inadimplentes inflam o AC.
- ⚠️ **Transações que "melhoram" o índice** (seção 3.6): pagar fornecedor com caixa aumenta a LC quando ela é > 1; captar empréstimo LP melhora a LC mas piora o endividamento.
- ⚠️ Índices em **"vezes"** (LC 1,25; CJ 2,5x) ou em **%** (EG 62,5%, CE 53,3%) — as duas formas são aceitas; mantenha a coerência.

---

## 7. Divergências e erros encontrados no material

1. ⚠️ **Pré-aula 07 sem gabarito** no material → gabarito ✍️ elaborado e conferido em Python (seção 5.1 e `exercicios.md`): 1 b, 2 b, 3 c, 4 b, 5 b, 6 a; 7 LC = 2,00; 8 LS = 1,375; 9 LI = 0,25; 10 EG = 0,60 (não é negativa); 11 SG = 1,67; 12 PCT = 1,50; 13 CJ = 8,0x; 14 IPL = 1,40.
2. ⚠️ **Grau de Endividamento e Participação de Capital de Terceiros** aparecem com a **mesma fórmula** (PC + PNC) / PL. O curso trata como dois nomes/lentes para o mesmo cálculo: o primeiro enfatiza o risco de endividamento; o segundo, a dependência de financiadores (com o parâmetro 3).
3. ⚠️ **Parâmetros ilustrativos** (PCT 3 e IPL 2) diferem dos usuais em livros (➕ PCT em torno de 1/100% e IPL em torno de 1/100%). Na prova, use os do slide.
4. ⚠️ **Alavancagem do EBITDA** é citada no slide p.19 sem fórmula; a fórmula de mercado (Dívida Líquida/EBITDA) é complemento ➕.
5. ⚠️ **Simulado geral, Q26:** a definição de Liquidez Imediata aparece no próprio enunciado ("Caixa + Aplicações Financeiras, dividido pelo Passivo Circulante") — igual à do slide.

---

## 8. Como o tema se conecta aos outros

- **`link_contabilidade_balanco_patrimonial`**: classificação circulante × não circulante (12 meses), capital próprio × de terceiros, passivo a descoberto — os índices só fazem sentido com o BP bem classificado.
- **`link_contabilidade_rentabilidade`**: alavancagem (AT/PL) da DuPont = 1 + PCT. Mais dívida pode aumentar o ROE e piorar os índices desta aula: retorno × risco.
- **`link_contabilidade_dre`**: EBIT e despesas financeiras da cobertura de juros; EBITDA da alavancagem do EBITDA.
- **`link_contabilidade_capital_de_giro`**: CGL = AC − PC é a versão "em R$" da liquidez corrente (LC > 1 ⇔ CGL > 0); a separação ACO/ACF e PCO/PCF refina a análise do curto prazo.
- **`link_contabilidade_analise_vertical_horizontal`**: AV do passivo (quanto da estrutura é PC, PNC, PL) e AH da dívida ao longo do tempo; roteiro para buscar as demonstrações da empresa referência.
- **`link_contabilidade_fluxo_de_caixa`**: captação e amortização de empréstimos aparecem no fluxo de financiamento; geração de caixa operacional é o que paga a dívida.
- **`link_contabilidade_revisao_geral`**: formulário completo e simulados que misturam todos os temas.

---

## 9. Protocolo para sessões de estudo

- **Modo EXPLICAR:** comece pelo balanço (bens e direitos × obrigações), depois "consigo pagar o curto prazo?" (LC → LS → LI, tirando cada vez mais coisa do numerador), depois "e o longo prazo?" (EG/SG), "quanto dependo de terceiros?" (GE/PCT, CE) e "quanto do meu capital está imobilizado?" (IPL). Use a tabela "melhor quando" da seção 4.
- **Modo EXERCITAR:** uma questão por vez do `exercicios.md` (ou nova no mesmo estilo), espere a resposta, corrija mostrando conta, sentido (maior/menor é melhor) e parâmetro do slide; registre acertos/erros por subtema (liquidez, solvência, estrutura, interpretação, efeito de transações) e volte nos erros com variação.
- **Modo SIMULADO:** bloco de N questões (sugestão: 8 — 2 conceituais, 4 de cálculo a partir de um balanço, 1 de interpretação de limiares, 1 pegadinha de transação) sem feedback; correção no fim com nota e diagnóstico.
- **Sempre:** exigir memória de cálculo e a frase de interpretação. Como a prova é sem consulta, peça que o aluno escreva de memória as 10 fórmulas da seção 4 antes de começar, e confira.
- Sinalize ⚠️ quando o aluno cair numa armadilha da seção 6 e cite qual.
