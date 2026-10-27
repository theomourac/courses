---
name: link_contabilidade_fluxo_de_caixa
description: Demonstração dos Fluxos de Caixa (DFC) da disciplina Contabilidade Gerencial da Link School of Business (Explorers D, 2026): lucro × caixa e qualidade do lucro; competência × caixa; objetivo da DFC; atividades operacionais, de investimento e de financiamento e como classificar transações; itens que não mexem no caixa (depreciação, provisões, vendas a prazo); método direto × indireto e ajustes por capital de giro; leitura de FCO, FCI e FCF em cenários de recessão; conciliação com o caixa do balanço. Traz as questões da pré-aula 04, as Q17–21 do simulado geral e os exercícios dos slides, com gabarito comentado, mais inéditas. Use quando alguém perguntar sobre DFC, caixa × lucro, método indireto ou classificação de atividades, ou precisar calcular caixa operacional ou saldo de caixa para a AV1 de Contabilidade Gerencial da Link.
---

# Demonstração dos Fluxos de Caixa (DFC) — Contabilidade Gerencial (Link)

> **Materiais locais (pasta `materiais/` desta skill):** `Aula 06 - Demonstração de Fluxo de Caixa.md` (slides, 26 p.), `04 - Pré-Aula - DFC - Gabarito.md` (10 questões resolvidas), `Lista de Exercícios_Contabilidade Gerencial.md` (simulado geral; Q17–21 são deste tema). Originais em `/Users/theo/Documents/Projetos/Link/Contabilidade/`; PDFs em `/Users/theo/Documents/Projetos/Link/` (a página 24 do PDF da Aula 06 traz a DRE e a DFC da Acrilex, ilegíveis na conversão em texto).
> **Exercícios:** `exercicios.md` (19 questões/itens do material + 15 inéditas ✍️, com gabarito comentado).
> **Legenda:** 📘 vem do material do curso · ➕ complemento externo (ajuda a entender, mas não é o que o curso afirma) · ⚠️ divergência, erro do material ou pegadinha de prova · ✍️ resolução ou exercício elaborado por Claude (não oficial).

**Como usar esta skill:** em pergunta de prova, responda pela versão 📘 (as classificações e convenções do curso — por exemplo, juros recebidos de aplicação = **operacional**, como no gabarito do simulado). Use ➕ para aprofundar (CPC 03, alternativas de classificação), sempre dizendo que é complemento. Para sessões de estudo, siga o protocolo da seção 9. A prova (AV1) é **sem consulta**: as regras de sinal do método indireto e a lista do que entra em cada atividade precisam estar decoradas.

---

## 1. Onde o tema entra no curso

📘 **Aula 10 — Demonstração de Fluxo de Caixa (11/09/2026).** Objetivo de aprendizagem: *interpretar a DFC para avaliar a saúde financeira*. Competências: C2.H1 (analisar informações financeiras e gerenciais), C2.H2 (compreender o papel da contabilidade gerencial na tomada de decisão), C5.H1 (integrar fatores quantitativos e qualitativos). Referência: Martins, Diniz e Miranda, *Análise avançada das demonstrações contábeis* (2020).

O tema também fecha as Aulas 8–9 (*DRE e Qualidade do Lucro*): a qualidade do lucro só se valida olhando o caixa. E reaparece nas análises de empresa real (Aulas 12, 14 e 19), nas perguntas 15–19 do roteiro de análise ("Quanto é a variação de caixa na DFC? Onde encontro essa variação no BP? As atividades operacionais/de investimento/de financiamento estão positivas ou negativas, e quanto?").

**Peso no simulado geral:** Q17–21 = **5 de 32 questões (≈16%)** — duas de classificação de atividades, uma de método indireto e duas de competência × caixa. É um dos blocos mais "baratos" de pontuar se as regras estiverem decoradas.

**Mapa das 11 skills da disciplina:**

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

📘 **Lucro não é caixa.** A DRE é feita em regime de competência: registra a receita quando a venda acontece e a despesa quando o recurso é consumido, haja ou não dinheiro entrando ou saindo. Por isso uma empresa pode ser lucrativa e quebrar por falta de caixa (vendeu muito a prazo, encheu o estoque, pagou fornecedor antes de receber do cliente), ou dar prejuízo contábil e ter caixa sobrando (depreciação alta, que não sai do caixa). A DFC existe para responder a pergunta que a DRE não responde: **o que aconteceu com o dinheiro?** Gera caixa? Como gera? Onde consome?

📘 Se o Balanço é a **fotografia** (posição em uma data) e a DRE mede o **desempenho econômico** do período, a DFC é o **filme** do caixa: parte do saldo inicial, soma as entradas, tira as saídas e chega ao saldo final — que é exatamente a conta Caixa e Equivalentes do Balanço de fechamento. Ela separa os movimentos em três "gavetas" que contam a história do negócio: **operar** (o dia a dia que gera receita), **investir** (comprar e vender ativos de longo prazo) e **financiar** (pegar e devolver dinheiro de credores e sócios). Uma empresa saudável, via de regra, gera caixa na operação e usa esse caixa para investir e remunerar/pagar financiadores; quando a operação queima caixa e a empresa vende ativos e toma dívida para cobrir o buraco, o filme é de alerta.

---

## 3. O conteúdo, explicado

### 3.1 As três visões das demonstrações e suas conexões
📘 O curso abre todas as aulas de demonstrações com o mesmo quadro:

| Visão | Perguntas | Demonstração |
| --- | --- | --- |
| Posição patrimonial e financeira | Onde se investe? Como se financia? Qual a capacidade de pagar os passivos? | Balanço Patrimonial |
| Eficiência e desempenho econômico | Dá lucro ou prejuízo? Quanto é o faturamento? O resultado é operacional ou financeiro? | DRE |
| **Mutações na posição financeira** | **O que acontece com o caixa? Gera caixa? Como gera e onde consome?** | **DFC** |

📘 **Conexões:** a DFC concilia o saldo inicial de caixa + fluxos de operação, investimento e financiamento = saldo final, que é a conta **Caixa (e equivalentes) do BP**. A DRE chega ao lucro líquido, que vai para o **resultado acumulado no PL** do BP. No método indireto, a DFC começa justamente pelo lucro líquido da DRE e usa as variações das contas do BP — as três demonstrações se amarram.

### 3.2 Qualidade do lucro (o conceito e a validação)
📘 O lucro como número absoluto tem menos utilidade do que como métrica relativa/comparativa. **Lucro de qualidade**, via de regra, apresenta:
- natureza **operacional** (vem da atividade-fim);
- **consistência** ao longo de uma linha do tempo extensa;
- **pouco efeito de eventos não recorrentes**;
- relação com **políticas contábeis conservadoras e realistas**;
- **relevância comparativa ao custo de oportunidade** (o lucro supera o que o capital renderia em outra aplicação).

📘 **Sinalização de problemas** — desconfie quando o lucro:
- vem de atividades de **investimento ou financiamento** (excede a operação);
- é **inconsistente e imprevisível**, o que tira acurácia do valuation;
- vem de **eventos não recorrentes** (venda de ativos, efeitos tributários, créditos etc.);
- nasce de **políticas contábeis agressivas** e desconectadas da realidade.

📘 **Fluxo de caixa como base de valor:** "geração de caixa como base para obtenção do valor terminal e de mercado" — empresas valem pelo caixa que geram, não pelo lucro contábil.

➕ **Teste prático de qualidade:** compare o **FCO com o lucro líquido** ao longo de vários anos. Se o lucro sobe e o FCO não acompanha (ou fica negativo), o lucro está "preso" em clientes e estoques ou depende de itens não caixa — sinal amarelo. FCO consistentemente ≥ lucro líquido costuma indicar lucro de boa qualidade (a depreciação, que é despesa sem saída de caixa, ajuda a explicar FCO > LL).

### 3.3 Regime de competência × regime de caixa
📘 **Competência:** receitas e despesas/custos são reconhecidos em função do **fato gerador**, independentemente de recebimento ou pagamento.
- Fato gerador da **receita**: transferência dos produtos; serviço prestado; acréscimo de juros pelo tempo decorrido.
- Fato gerador da **despesa**: uso ou consumo de bens ou serviços.

📘 **Caixa:** receitas e despesas são reconhecidas em função de seus **recebimentos ou pagamentos**.

📘 Na Aula 03 (Estrutura Conceitual): competência "reflete eventos no período em que ocorrem, mesmo que as transações se efetivem em períodos distintos" — é a base da **DRE**; caixa "reflete exclusivamente as transações efetuadas" — é a base da **DFC**.

**Regra de ouro para exercícios de competência × caixa (estilo Q20–21 do simulado):**
1. **Competência:** receita = valor total vendido no período (à vista + a prazo); custo = **custo das unidades vendidas** (não o das compradas!). Lucro = receita − custo − despesas incorridas.
2. **Caixa:** entradas = só o que foi **recebido** no período; saídas = só o que foi **pago** no período (incluindo compra de estoque à vista, mesmo que a mercadoria não tenha sido vendida).
3. No longo prazo (quando tudo é recebido e pago) **lucro acumulado = caixa acumulado** — a diferença é só de **tempo** (exemplo do slide p.25: R$ 4.500 nos dois regimes ao fim de fevereiro).

### 3.4 O objetivo da DFC
📘 NBC TG 03 (R2) (equivalente ao ➕ CPC 03): as informações sobre fluxo de caixa proporcionam aos usuários uma base para avaliar a **capacidade de a entidade gerar caixa e equivalentes de caixa**, bem como suas **necessidades de utilização** desses fluxos; as decisões econômicas exigem avaliar essa capacidade, **a época** de sua ocorrência e o **grau de certeza** de sua geração.

📘 Esquema do "filme": **Entradas (+) − Saídas (−) ± Saldos e ajustes = Fluxo de caixa líquido.**

➕ "Equivalentes de caixa" = aplicações de curtíssimo prazo, de alta liquidez, conversíveis em montante conhecido de caixa e com risco insignificante de mudança de valor (tipicamente vencimento de até 3 meses na aquisição). Por isso aplicar o caixa num CDB de liquidez diária **não** é saída de caixa na DFC (é troca dentro de "caixa e equivalentes").

### 3.5 As três atividades
📘 Definições do curso (slide p.12):
- **Atividades operacionais:** as **principais atividades geradoras de receita** da entidade e **outras atividades que não são de investimento nem de financiamento** (é a "gaveta residual").
- **Atividades de investimento:** referentes à **aquisição e venda de ativos de longo prazo** e de outros investimentos não incluídos nos equivalentes de caixa.
- **Atividades de financiamento:** as que resultam em **mudanças no tamanho e na composição do capital próprio e do capital de terceiros** da entidade.

📘 **Exemplos operacionais (slide p.13):** recebimentos pela venda de mercadorias e serviços; recebimentos de royalties, honorários, comissões e outras receitas; pagamentos a fornecedores de mercadorias e serviços; pagamentos a empregados; recebimentos e pagamentos de seguradora (prêmios e sinistros); pagamentos ou restituição de **impostos sobre a renda** (salvo se identificáveis com investimento/financiamento); recebimentos e pagamentos de contratos mantidos para negociação imediata ou venda futura.

📘 **Exemplos de investimento (slide p.14):** pagamentos para aquisição de **ativo imobilizado, intangível e outros ativos de longo prazo**; recebimentos pela **venda** desses ativos; pagamentos para aquisição de **participações societárias**; recebimentos pela venda de participações; **adiantamentos e empréstimos feitos a terceiros**; recebimentos pela liquidação desses adiantamentos/empréstimos concedidos.

📘 **Exemplos de financiamento (slide p.15):** caixa recebido pela **emissão de ações** ou outros instrumentos patrimoniais; pagamentos a investidores para **adquirir ou resgatar ações** da entidade; caixa recebido por **debêntures, empréstimos, notas promissórias**, hipotecas e outros empréstimos de curto e longo prazo; **amortização de empréstimos e financiamentos**; pagamentos do arrendatário para reduzir passivo de **arrendamento mercantil financeiro**.

📘 O fluxograma do slide p.18 resume: **operações** = mão de obra, matéria-prima, produção, despesas, impostos, vendas, cobrança de clientes; **investimentos** = compra e venda de imobilizado; **financiamentos** = captação e restituição de empréstimos, emissão e recompra de ações, **pagamento de dividendos**.

### 3.6 Tabela de classificação (decore)

| Transação | Atividade | Fonte / observação |
| --- | --- | --- |
| Recebimento de clientes | Operacional | 📘 simulado Q17d |
| Pagamento a fornecedores | Operacional | 📘 Q17a |
| Pagamento de salários / funcionários | Operacional | 📘 Q18b; pré-aula Q6 |
| Pagamento de impostos (IR, ICMS etc.) | Operacional | 📘 slide p.13; pré-aula Q10 |
| Pagamento de aluguel, energia, despesas do dia a dia | Operacional | 📘 (atividade principal/residual) |
| **Recebimento de juros sobre aplicações financeiras** | **Operacional** | 📘 gabarito Q18d ⚠️ (ver 6) |
| Compra de terreno, máquina, veículo, software | Investimento | 📘 Q18a; slide p.14 |
| Venda de máquina/veículo/equipamento do imobilizado | Investimento | 📘 Q17b; pré-aula Q9 e Q10 |
| Compra/venda de participação societária (ações de outra empresa) | Investimento | 📘 pré-aula Q6 (iii) |
| Empréstimo **concedido** a terceiros e seu recebimento | Investimento | 📘 slide p.14 |
| Captação de empréstimo bancário (curto ou longo prazo) | Financiamento | 📘 Q17e; pré-aula Q10 |
| Amortização (pagamento do principal) de empréstimo | Financiamento | 📘 Q18c; pré-aula Q6 (ii) |
| Emissão de ações / aumento de capital em dinheiro | Financiamento | 📘 Q18e |
| Pagamento de dividendos | Financiamento | 📘 Q17c; slide p.18 |
| Recompra de ações próprias | Financiamento | 📘 slide p.15 |
| Emissão de debêntures | Financiamento | 📘 slide p.15 |
| Depreciação, amortização, provisões | **Não é caixa** (não entra no método direto; é ajuste no indireto) | 📘 pré-aula Q3, Q8, Q9 |
| Venda a prazo ainda não recebida / compra a prazo ainda não paga | **Não é caixa** no período | 📘 pré-aula Q4, Q8 |

➕ **Zonas cinzentas do CPC 03** (o curso não entra nelas): juros **pagos** e juros/dividendos **recebidos** podem ser classificados como operacionais ou como financiamento/investimento, desde que de forma consistente; **dividendos pagos** podem ir em financiamento (mais comum) ou operacional. Na prova, siga o curso: dividendos pagos → financiamento; juros recebidos de aplicação → operacional. Se cair "juros pagos de empréstimo", ✍️ a resposta mais segura é dizer **operacional** (padrão CPC 03 para não financeiras, mantendo coerência com o lucro líquido que já desconta os juros) **ou** financiamento, justificando — e mencionar a opção do CPC.

### 3.7 O que NÃO mexe no caixa
📘 Pré-aula 04 (Q3, Q4, Q5, Q8, Q9) é praticamente toda sobre isto. **Não alteram o caixa:**
- **depreciação** do imobilizado e **amortização** do intangível (despesas "não caixa" — reduzem o lucro, não o dinheiro);
- **constituição de provisões** (contingências, devedores duvidosos);
- **reconhecimento de receita a prazo** ainda não recebida (vira Clientes/Duplicatas a Receber);
- compra a prazo ainda não paga (vira Fornecedores);
- a parte **financiada** de uma compra de ativo (pré-aula Q9: veículo de R$ 20.000 com 50% à vista → só R$ 10.000 saem do caixa).

**Alteram o caixa:** pagamento de fornecedores, recebimento de clientes, compra de veículo à vista, pagamento de principal de empréstimo, recebimento de empréstimo, pagamento de dividendos, aumento de capital em dinheiro, venda de ativo à vista.

### 3.8 Lendo os sinais: o "perfil" dos três fluxos
📘 Os slides p.19–20 comparam duas empresas em três cenários (condições normais, recessão branda, recessão intensa):

**Empresa 1 (slide p.19)** — operação forte:

| Fluxo | Normal | Recessão branda | Recessão intensa |
| --- | ---: | ---: | ---: |
| FCO | 500 | 350 | 50 |
| FCI | −200 | −120 | 50 |
| FCF | −50 | −100 | −80 |
| FCT (variação total) | 250 | 130 | 20 |

**Empresa 2 (slide p.20)** — operação fraca:

| Fluxo | Normal | Recessão branda | Recessão intensa |
| --- | ---: | ---: | ---: |
| FCO | 30 | −150 | −500 |
| FCI | −150 | 30 | 300 |
| FCF | 150 | 100 | 100 |
| FCT (variação total) | 30 | −20 | −100 |

✍️ **Leitura:**
- **Empresa 1** gera caixa na operação em todos os cenários. Em tempos normais, usa o FCO para **investir** (FCI −200) e **pagar financiadores** (FCF −50) e ainda sobra caixa (+250). Na recessão, reduz investimento e, no cenário intenso, até vende algum ativo (FCI +50), mas continua pagando dívidas/dividendos (FCF negativo) e o caixa total não fica negativo. Perfil **resiliente/madura**.
- **Empresa 2** depende de financiamento desde o cenário normal (FCO só 30, investimento de 150 bancado por FCF +150). Na recessão, a operação **queima caixa** (−150, −500); a empresa passa a **vender ativos** (FCI +30, +300) e **tomar dinheiro** (FCF +100) e mesmo assim o caixa cai (−20, −100). Perfil **frágil/em deterioração**: "come" o patrimônio para sobreviver.

✍️ **Tabela-resumo de sinais** (FCO, FCI, FCF):

| FCO | FCI | FCF | Leitura típica |
| :---: | :---: | :---: | --- |
| + | − | − | Madura e saudável: a operação paga os investimentos e remunera/amortiza financiadores |
| + | − | + | Operação gera caixa, mas o crescimento (investimento) pede capital adicional |
| − | − | + | Startup/expansão: queima caixa operando e investindo, bancada por sócios/credores |
| + | + | − | Desinvestindo e pagando dívida: reestruturação, desalavancagem ou encolhimento |
| − | + | + | **Alerta**: vende ativos e toma dívida para cobrir a operação que consome caixa |
| − | + | − | Alerta grave: vende ativos para cobrir a operação e ainda precisa pagar credores |

### 3.9 Método direto
📘 Divulga as **principais classes de recebimentos e pagamentos brutos**. Parte do saldo de caixa do período anterior, soma as entradas e subtrai as saídas ocorridas. Muitos o chamam de **"verdadeiro fluxo de caixa"**, porque mostra todos os recebimentos e pagamentos que efetivamente mudaram as disponibilidades.

Formato típico (FCO pelo direto):
```
(+) Recebimentos de clientes
(−) Pagamentos a fornecedores
(−) Pagamentos a empregados
(−) Pagamentos de impostos e outras despesas
(=) Caixa líquido das atividades operacionais
```

➕ Para montar o direto a partir de DRE + BP: **Recebimento de clientes = Receita − Δ Clientes** (se Clientes aumentou, recebeu menos do que vendeu); **Pagamento a fornecedores = Compras − Δ Fornecedores** (se Fornecedores aumentou, pagou menos do que comprou). Compras = Estoque final + CMV − Estoque inicial (fórmula da aula de capital de giro).

### 3.10 Método indireto
📘 Parte do **lucro líquido (ou prejuízo)** e o ajusta por: (i) **transações que não envolvem caixa** (depreciação, amortização, provisões); (ii) **diferimentos e apropriações por competência** — as variações de ativo e passivo circulantes operacionais (clientes, estoques, fornecedores, salários e impostos a pagar), **excluindo as disponibilidades**, cuja variação é o que se quer explicar; (iii) itens de receita/despesa associados a fluxos de **investimento ou financiamento** (ex.: ganho na venda de imobilizado). Também é chamado de **fluxo de caixa no sentido amplo**. 📘 Pré-aula 04 Q1: o direto "demonstra entradas e saídas reais de caixa"; o indireto "ajusta o lucro líquido por variações do capital de giro".

**Regras de sinal (decore):**
```
  Lucro líquido do exercício
+ Depreciação e amortização (e outras despesas que não saem do caixa, como provisões)
− Ganho na venda de imobilizado  /  + Perda na venda de imobilizado   (➕ o valor da venda vai inteiro para o FCI)
− Aumento de ATIVO operacional (clientes, estoques, despesas antecipadas)   → "o dinheiro ficou preso"
+ Redução de ATIVO operacional                                              → "o dinheiro foi liberado"
+ Aumento de PASSIVO operacional (fornecedores, salários, impostos a pagar)  → "deixei de pagar = caixa ficou comigo"
− Redução de PASSIVO operacional                                            → "paguei mais do que reconheci"
= Caixa líquido das atividades operacionais (FCO)
```
Mnemônico ✍️: **ativo e caixa andam em sentidos opostos; passivo e caixa andam juntos.**

📘 **Exemplo do slide p.23 — os dois métodos chegam ao mesmo número:**

| Método direto | | Método indireto | |
| --- | ---: | --- | ---: |
| Recebimento de vendas | 40.000 | Lucro líquido do exercício | 32.680 |
| Pagamentos | — | (+) Redução de estoque | 7.000 |
| | | (−) Aumento de clientes | (10.000) |
| | | (+) Aumento de passivo | 10.320 |
| **Caixa líq. ativ. operacionais** | **40.000** | **Caixa líq. ativ. operacionais** | **40.000** |
| Investimento / Financiamento | — | Investimento / Financiamento | — |
| Variação do caixa | 40.000 | Variação do caixa | 40.000 |
| Saldo inicial | 20.000 | Saldo inicial | 20.000 |
| Saldo final | 60.000 | Saldo final | 60.000 |

Conta: 32.680 + 7.000 − 10.000 + 10.320 = **40.000**. Lição: o método muda a **apresentação** do FCO, nunca o valor; investimento e financiamento são iguais nos dois.

📘 **Exemplo do simulado (Q19):** LL 70.000; Duplicatas a Receber **aumentou** 15.000 (−); Estoques **diminuiu** 8.000 (+); Fornecedores **aumentou** 10.000 (+); depreciação 12.000 (+). FCO = 70.000 − 15.000 + 8.000 + 10.000 + 12.000 = **R$ 85.000**.

### 3.11 Conciliação final
📘 **Variação do caixa = FCO + FCI + FCF** e **Saldo final = Saldo inicial + Variação** = Caixa e Equivalentes no BP de fechamento. Toda questão de "saldo final de caixa" (pré-aula Q9) se resolve com: saldo inicial + entradas efetivas − saídas efetivas, ignorando depreciação e partes a prazo/financiadas.

### 3.12 Relatório real: Acrilex
📘 O slide p.24 reproduz a DRE e a DFC (método indireto) da Acrilex em R$ mil, 2010 × 2009: lucro, ajustes sem caixa, variações de ativos e passivos, investimentos e financiamentos. A imagem é de baixa resolução; os valores só podem ser lidos no PDF original (p.24). O ponto didático: numa DFC real pelo indireto, a primeira linha é o lucro do exercício, seguida dos ajustes que não são caixa (depreciação etc.) e das variações do capital de giro, exatamente como nas regras da seção 3.10.

---

## 4. Fórmulas — folha de cola

| Fórmula | Quando usar | Interpretação |
| --- | --- | --- |
| Variação do caixa = FCO + FCI + FCF | Toda DFC | Soma das três gavetas |
| Saldo final = Saldo inicial + Variação do caixa | Conciliação com o BP | Saldo final = Caixa e Equivalentes do BP |
| FCO (direto) = recebimentos operacionais − pagamentos operacionais | Lista de entradas e saídas reais | "Verdadeiro fluxo de caixa" |
| FCO (indireto) = LL + D&A (+ outras despesas não caixa) − ↑AC operacional + ↓AC operacional + ↑PC operacional − ↓PC operacional (∓ ganhos/perdas de investimento) | Dado LL + variações do BP | Explica por que caixa ≠ lucro |
| ➕ Recebimento de clientes = Receita − ΔClientes | Montar o direto a partir de DRE + BP | Se Clientes cresce, recebeu menos que vendeu |
| ➕ Pagamento a fornecedores = Compras − ΔFornecedores | Idem | Se Fornecedores cresce, pagou menos que comprou |
| Compras = EF + CMV − EI | Quando só se tem CMV e estoques | (aula de capital de giro) |
| Lucro (competência) = receita do período − custo **do que foi vendido** − despesas incorridas | Competência × caixa | Fato gerador |
| Caixa do período = recebido − pago (inclui compra à vista de estoque não vendido) | Competência × caixa | Movimento efetivo |

---

## 5. Exemplos resolvidos passo a passo

### 5.1 Competência × caixa do slide p.25 (✍️ resolução; o slide não traz gabarito)
Dados: em janeiro, compra de R$ 6.000 em mercadorias, paga à vista; venda em janeiro de R$ 4.000 dessas mercadorias (custo) por R$ 7.000, recebendo 50% à vista e 50% em 30 dias; em fevereiro, o restante do estoque (custo R$ 2.000) é vendido à vista por R$ 3.500.

| | Janeiro | Fevereiro | Acumulado |
| --- | ---: | ---: | ---: |
| **DRE — visão econômica (competência)** | | | |
| Receita | 7.000 | 3.500 | |
| (−) Custo | (4.000) | (2.000) | |
| **Lucro** | **3.000** | **1.500** | **4.500** |
| **Visão financeira (caixa)** | | | |
| Entradas de caixa | 3.500 | 7.000 (3.500 de jan. + 3.500 à vista) | |
| (−) Saídas de caixa | (6.000) | 0 | |
| **Fluxo de caixa** | **−2.500** | **+7.000** | **4.500** |

Lição: em janeiro a empresa **lucra R$ 3.000 e queima R$ 2.500 de caixa** (pagou todo o estoque, recebeu só metade de uma venda). Ao fim de fevereiro, lucro acumulado = caixa acumulado = R$ 4.500: competência e caixa diferem no **tempo**, não no total.

### 5.2 Simulado Q20 (📘)
Compra de R$ 12.000 em mercadorias à vista; vende 60% delas por R$ 10.800, recebendo 40% à vista e o restante em 30 dias.
- Custo do que foi vendido = 60% × 12.000 = 7.200. **Competência:** 10.800 − 7.200 = **R$ 3.600**.
- **Caixa:** −12.000 (compra inteira paga) + 40% × 10.800 = 4.320 → **R$ −7.680**.

### 5.3 Simulado Q21 (📘)
Venda de R$ 25.000 (custo R$ 16.000), 30% à vista e o restante em 60 dias. **Competência:** 25.000 − 16.000 = **R$ 9.000**. **Caixa no mês:** 30% × 25.000 = **R$ 7.500** (o custo não é saída de caixa neste mês — o estoque já estava pago antes).

### 5.4 Saldo final de caixa — Pré-aula 04 Q9 (📘)
Saldo inicial 25.000. Vendas de 90.000 (60% à vista = 54.000; a prazo 36.000, recebidos 75% = 27.000); compras de 48.000 (pagos 70% = 33.600); salários 14.500; depreciação 3.000 (**não é caixa**); veículo de 20.000 com 50% à vista (saída 10.000; o resto é financiado); venda de equipamento à vista 8.000.
Entradas = 54.000 + 27.000 + 8.000 = 89.000. Saídas = 33.600 + 14.500 + 10.000 = 58.100. **Saldo final = 25.000 + 89.000 − 58.100 = R$ 55.900.**

### 5.5 Separando por atividade — Pré-aula 04 Q10 (📘)
Operacional: 85.000 − 38.000 − 22.000 − 7.500 = **17.500**. Investimento: 9.000 − 18.000 = **−9.000**. Financiamento: 25.000 − 10.000 = **15.000**. Maior movimentação líquida positiva: **operacional, R$ 17.500**. Variação total = +23.500.

---

## 6. Armadilhas e pegadinhas de prova ⚠️

1. **Depreciação não é saída de caixa.** Em "saldo final de caixa", ignore-a. No indireto, ela **soma** ao lucro.
2. **Custo das vendas ≠ compras.** Na competência, desconta-se o custo do que foi **vendido**; no caixa, sai o que foi **pago** (Q20: competência usa 7.200, caixa usa 12.000).
3. **Venda a prazo:** entra 100% na receita (competência), só a parte recebida no caixa.
4. **Compra de ativo financiada:** só a entrada à vista é saída de caixa (pré-aula Q9). A dívida nova não é "entrada de caixa" se o banco pagou direto ao vendedor (➕ transação não caixa).
5. **Sinais do indireto invertidos** — o erro mais comum. Aumento de **ativo** = **subtrai**; aumento de **passivo** = **soma**.
6. **Venda de imobilizado é investimento**, não operacional, mesmo com ganho. ➕ No indireto, o ganho incluído no lucro deve ser retirado do FCO (senão é contado duas vezes).
7. **Juros recebidos de aplicações = operacional** no gabarito do curso (Q18d). Não marque investimento.
8. **Dividendos pagos = financiamento** (Q17c); **amortização de empréstimo = financiamento** (Q18c), mesmo sendo "pagamento".
9. **Empréstimo concedido** a terceiros é investimento; empréstimo **obtido** é financiamento.
10. **"Qual não altera o caixa?"**: procure depreciação, amortização, provisão, receita/compra a prazo (pré-aula Q3, Q8).
11. **Método direto × indireto:** mudam só a apresentação do **FCO**; FCI, FCF e variação total são idênticos.
12. **Saldo final da DFC = Caixa do BP final**, não o lucro e não o PL.
13. **Lucro positivo com FCO negativo** é possível (crescimento com aumento de clientes/estoques); **prejuízo com FCO positivo** também (depreciação alta, redução de capital de giro).
14. **Aplicação financeira de curtíssimo prazo** (equivalente de caixa) não é saída de caixa na DFC (➕).

---

## 7. Divergências e erros encontrados no material ⚠️

- **Slide p.25 sem gabarito** — resolução ✍️ na seção 5.1 (lucro e caixa acumulados de R$ 4.500).
- **Pré-aula 04 Q1** — a resposta diz que o indireto "ajusta o lucro líquido por variações do capital de giro". Está incompleta: o slide p.22 inclui também os ajustes por **itens que não envolvem caixa** (depreciação, amortização, provisões) e por itens de investimento/financiamento. Em prova discursiva, cite os dois tipos de ajuste.
- **Simulado Q18d** — juros recebidos de aplicações classificados como **operacional**. ➕ O CPC 03 permite operacional **ou** investimento (escolha de política). Na prova, responda operacional.
- **Slide p.24 (Acrilex)** — valores ilegíveis na versão em texto; consultar o PDF original.

---

## 8. Como o tema se conecta aos outros

- `link_contabilidade_estrutura_conceitual`: regimes de competência × caixa e o papel de cada demonstração (Q20–21 também valem lá).
- `link_contabilidade_dre`: o lucro líquido é o ponto de partida do indireto; depreciação e amortização (D&A) aparecem na DRE e voltam somadas na DFC; EBITDA é a "proxy" de caixa operacional antes do capital de giro.
- `link_contabilidade_balanco_patrimonial`: as variações das contas do BP alimentam o indireto; o saldo final da DFC = Caixa do BP.
- `link_contabilidade_capital_de_giro`: **impacto no fluxo de caixa = − Variação da NIG** — exatamente a parte "variações de ativo/passivo operacional" do método indireto. Aumento da NIG consome caixa; redução gera caixa.
- `link_contabilidade_indicadores_estrutura_liquidez`: liquidez imediata usa o caixa que a DFC explica.
- `link_contabilidade_analise_vertical_horizontal`: perguntas 15–19 do roteiro de análise de empresa real (variação de caixa e sinais dos três fluxos).
- `link_contabilidade_rentabilidade`: margem EBITDA como medida de geração de caixa operacional.

---

## 9. Protocolo para sessões de estudo

- **Modo EXPLICAR:** comece pela intuição (lucro × caixa, o "filme"), depois as três gavetas com exemplos do dia a dia, depois as regras do indireto, e feche com o exemplo do slide p.23 mostrando que direto e indireto dão o mesmo FCO.
- **Modo EXERCITAR:** uma questão por vez do `exercicios.md` (ou uma nova no mesmo estilo). Espere a resposta do aluno antes de corrigir. Corrija mostrando a memória de cálculo e o porquê da classificação. Registre acertos/erros por subtema (classificação, itens não caixa, indireto, competência × caixa, interpretação) e volte nos subtemas errados com uma questão nova.
- **Modo SIMULADO:** bloco de N questões (ex.: 5, no peso do simulado geral: 2 de classificação, 1 de indireto, 2 de competência × caixa) sem feedback; correção no fim com nota e diagnóstico por subtema.
- **Sempre** exigir memória de cálculo e o sinal de cada ajuste. A prova é **sem consulta**: peça ao aluno para reescrever de memória as regras de sinal do indireto e a tabela de classificação antes de começar a sessão.
