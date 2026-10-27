---
name: link_contabilidade_analise_vertical_horizontal
description: Análise Vertical, Análise Horizontal e Variação Monetária da disciplina Contabilidade Gerencial da Link School of Business (Explorers D, 2026): AV (base ativo total no BP, receita líquida na DRE), AH (inclusive de indicadores, quedas e bases negativas), variação em R$; roteiro de análise de empresa real a partir do modelo de negócio; origem dos lucros e efeito das margens; comparação temporal, setorial e com a inflação; documentos de companhia aberta (DFP, ITR, release, apresentação institucional); exemplos Apple, Pré-aula 05 e hands-on X/X+1. Traz todas as questões do material e as Q22–24 do simulado geral, com gabarito comentado, mais inéditas. Use quando alguém perguntar sobre AV, AH, variação monetária ou análise de balanço e DRE de empresa real, ou pedir exercício ou simulado para a AV1 de Contabilidade Gerencial da Link.
---

# Análise Vertical, Horizontal e Variação Monetária — Contabilidade Gerencial (Link)

> **Materiais locais (pasta `materiais/` desta skill):** `Aula Análise Vertical, Horizontal e Variação Monetária.md` (slides, 28 p.), `Aula - Demonstração de Resultado do Exercício - analise.md` (slides, 45 p.: roteiro de análise, origem do lucro, margens, julgamento, hands-on X/X+1), `05 - Pré-Aula - Balanço Patrimonial e DRE - Gabarito.md` (análise resolvida de empresa real), `Lista de Exercícios_Contabilidade Gerencial.md` (simulado geral; Q22–24 são deste tema). Originais em `/Users/theo/Documents/Projetos/Link/Contabilidade/` (o arquivo `... - analise (1).md` é cópia idêntica do `... - analise.md`).
> **Exercícios:** `exercicios.md` (24 questões/itens do material + 15 inéditas ✍️, com gabarito comentado).
> **Legenda:** 📘 vem do material do curso · ➕ complemento externo (ajuda a entender, mas não é o que o curso afirma) · ⚠️ divergência, erro do material ou pegadinha de prova · ✍️ resolução ou exercício elaborado por Claude (não oficial).

**Como usar esta skill:** em pergunta de prova, responda pela versão 📘 (fórmulas e bases do curso: AV sobre o Ativo Total no BP e sobre a Receita Líquida na DRE; AH = atual/anterior − 1). Use ➕ para aprofundar. Na prova, cálculo de AV/AH vale pouco se não vier com **interpretação**: sempre feche com uma frase dizendo o que o número significa. Para sessões de estudo, siga o protocolo da seção 9.

---

## 1. Onde o tema entra no curso

📘 **Aula 11 — Análise Qualitativa Crítica: Análise Horizontal e Vertical (17/09/2026).** Objetivo: *avaliar criticamente a DRE e a qualidade do lucro*. Competências C2.H1, C4.H1 (relacionar e utilizar indicadores para avaliar a performance estratégica), C5.H1.
📘 O tema é a ferramenta de trabalho das aulas de **empresa real**: Aula 12 (18/09) e Aula 14 (25/09) — *Análise de Estrutura de Demonstrações Financeiras – Empresa Referência* (objetivo: analisar e criticar a performance financeira detalhadamente; analisar fatores qualitativos; avaliar tendências e padrões de desempenho) — e Aula 19 (15/10) — *Análise de Índices e Performance Financeira – Empresa Referência* (interpretar resultados financeiros reais). A Pré-aula 05 é o exercício resolvido dessa competência. Referência: Martins, Diniz e Miranda (2020).

**Peso no simulado geral:** Q22–24 = **3 de 32 questões (≈9%)** — uma AH, uma AV de BP e uma AV de DRE em dois anos. Mas AV/AH aparecem dentro de qualquer questão discursiva de análise (a Pré-aula 05 inteira é isso).

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

📘 "A análise financeira vai além dos números absolutos." Saber que uma empresa tem R$ 851 milhões em caixa não diz nada sozinho: é muito ou pouco? Em relação a quê? Cresceu ou caiu? As três ferramentas transformam números soltos em informação:
- **Análise Vertical (AV)** — *quanto cada conta representa do total* (em %), num mesmo período. Mostra a **estrutura** (composição): onde a empresa aplica seus recursos, como se financia, quanto de cada real vendido vira custo, despesa e lucro.
- **Análise Horizontal (AH)** — *quanto cada conta evoluiu em relação ao período anterior* (em %). Mostra a **tendência** (crescimento, estagnação, declínio).
- **Variação Monetária (VM)** — *quanto cada conta evoluiu em R$*. Mostra a **magnitude** do impacto financeiro (um +200% sobre uma conta pequena pode valer menos que +10% sobre uma conta gigante).

📘 E a análise começa **antes** dos números: qual é o modelo de negócio? Um varejista tem muito estoque; uma empresa de transporte, muito imobilizado; uma de reciclagem/infraestrutura, ativos fixos pesados. A AV só faz sentido comparada com o que o modelo de negócio pede, com o passado da própria empresa e com os concorrentes.

📘 O objetivo de aprendizagem declarado na aula: **avaliar relatórios reais para elaborar diagnósticos financeiros** e **interpretar a qualidade da comunicação das empresas ao mercado** — ou seja, checar se a narrativa da gestão bate com os números.

---

## 3. O conteúdo, explicado

### 3.1 Por que olhar com lupa: o caso do risco sacado (fornecedores-confirming)
📘 A aula abre com manchetes sobre a **Greensill Capital** (colapso de uma empresa sustentada por dívida, NYT 2021) e sobre o **risco sacado da Americanas** (Valor: retomada do risco sacado no valor de R$ 56 milhões; CNN: bancos conheciam a operação) — exemplos para discutir **transparência contábil e financiamento de fornecedores**.

➕ **O que é risco sacado / confirming / forfait:** o banco antecipa ao fornecedor o valor que a empresa lhe deve; a empresa passa a pagar o banco depois, às vezes com prazo maior e juros embutidos. Economicamente, virou **dívida financeira (onerosa)**. Se a empresa continua mostrando esse valor dentro de "Fornecedores", a AV do passivo engana: a dívida bancária parece menor, o passivo operacional parece maior, e indicadores de endividamento e capital de giro ficam maquiados. Em janeiro de 2023 a Americanas anunciou "inconsistências contábeis" da ordem de R$ 20 bilhões ligadas a esse tipo de operação. Lição para a análise: **ler as notas explicativas e classificar o passivo pela sua natureza (oneroso × operacional), não só pelo nome da conta.**

### 3.2 Parte I do roteiro — o modelo de negócio
📘 Antes de calcular qualquer índice:
1. O que a empresa faz?
2. Quem são seus maiores concorrentes?
3. Após análise de segmento, quais são as principais tendências desse core business nos próximos 5 anos?

### 3.3 Análise Vertical (AV)
📘 **Definição:** avalia a **composição** dos demonstrativos, identificando quais contas representam a maior parte do ativo, do passivo e da DRE. Analisa a **relação entre contas**, **em um mesmo ano**, para avaliar a **representatividade** de cada conta/rubrica.

📘 **Fórmula (slide):** `AV = Subconta / Total do Ativo × 100`.
- No **BP**, a base é o **Ativo Total** (= Passivo + PL total). 📘 Interpretação: identifica **concentração de ativos** (fixos × circulantes) e **de passivos** (curto × longo prazo).
- Na **DRE**, a base é a **Receita Líquida** (📘 simulado Q24: CMV / RL). Cada linha vira "centavos por real vendido": a AV do lucro bruto é a margem bruta, a AV do EBIT é a margem operacional, a AV do lucro líquido é a margem líquida (ver `link_contabilidade_rentabilidade`).

📘 **Exemplo (Apple):** caixa de US$ 54,7 bi e ativo total de US$ 359,2 bi → AV = 54,7 / 359,2 × 100 = **15,2%**. Pergunta do slide: *o que significa a Apple apresentar um caixa de 15,2% do ativo total?* ✍️ Que de cada US$ 100 aplicados nos ativos, US$ 15 estão em dinheiro disponível: alta liquidez e folga financeira, mas também recurso "parado" que rende pouco — por isso a pergunta seguinte do analista é o que a empresa faz com esse caixa (investe, paga dívida, devolve aos acionistas?).

### 3.4 Análise Horizontal (AH)
📘 **Definição:** examina a **evolução** dos itens ao longo de diferentes períodos (Ano 1 × Ano 2, variação temporal); permite identificar **crescimento, estagnação ou declínio** de receitas, custos, despesas e lucros.

📘 **Fórmula:** `Variação % = (Valor do período atual / Valor do período anterior − 1) × 100`.

📘 **Interpretação:**
- **Crescimento sustentado** → indica expansão saudável.
- **Quedas consecutivas** → pode indicar problemas financeiros.
- **Padrões irregulares** → exigem investigação sobre sazonalidade ou eventos extraordinários.

📘 **Exemplo (Apple):** caixa de US$ 65,2 bi (3T24) para US$ 54,7 bi (3T25): (54,7 / 65,2 − 1) × 100 = **−16,1%** (⚠️ o slide escreve "16,1%" sem o sinal; é uma **queda**). O slide pergunta o que a diminuição pode indicar e aponta para uma notícia do Yahoo Finance (link "apples-704-billion-decade-long…"). ✍️ Leitura: queda de caixa não é automaticamente ruim — numa empresa que gera muito caixa operacional, ela pode refletir **devolução de caixa aos acionistas** (recompra de ações, dividendos), pagamento de dívidas ou investimentos. Só a DFC e o release dizem qual foi o caso.

📘 **AH de indicadores** (DRE-análise, "comparação temporal"): faça AH também sobre margens e índices, numa coluna ao lado: `Variação do indicador = (Indicador Ano 2 / Indicador Ano 1 − 1) × 100`. ⚠️ Não confunda com **pontos percentuais**: margem de 31,9% → 46,2% é **+14,3 p.p.** (diferença) ou **+44,8%** (AH da margem).

### 3.5 Variação Monetária (VM)
📘 Análise no horizonte de tempo do **impacto financeiro**: quanto cada conta evoluiu **em R$**. `VM = Valor ano 2 − Valor ano 1` (ex.: Estoques ano 2 − Estoques ano 1).

✍️ Por que precisa das duas (AH e VM): na Pré-aula 05, o **Caixa** cresceu +194% (maior AH) e o **Imobilizado** +125,6%, mas em reais o Imobilizado subiu R$ 1,2 bilhão contra R$ 562 milhões do caixa. "A conta que mais variou" depende do critério — diga sempre qual está usando.

### 3.6 Resumo das três ferramentas (slide p.16)

| Ferramenta | Racional | Indicador | Exemplo |
| --- | --- | --- | --- |
| Análise Vertical | Quanto cada conta representa do total | % | Caixa / Ativo Total |
| Análise Horizontal | Quanto cada conta evoluiu em relação ao período anterior | % | [(Estoques ano 2 / Estoques ano 1) − 1] × 100 |
| Variação Monetária | Quanto cada conta evoluiu em relação ao período anterior | R$ | Estoques ano 2 − Estoques ano 1 |

📘 Em resumo: analisar as demonstrações quanto às **características (distribuição)** — AV — e à **evolução** — AH e VM.

### 3.7 Parte II do roteiro — decisões de investimento e financiamento
📘 Perguntas para o BP:
1. De que forma a empresa **distribui** seu conjunto de investimentos (ativos)? → AV do ativo.
2. O total de investimentos (ativo) **cresceu** no último período? → AH do ativo total.
3. De que forma esses investimentos evoluíram? Parece ser uma evolução **saudável, dado o modelo de negócio**? → AH/VM por conta.
4. Como a empresa está **financiando** seus ativos: recursos de terceiros (passivos) ou próprios (PL)? → AV do passivo e do PL.
5. Dentro dos passivos, como está a composição **circulante × não circulante**? E a composição de contas **onerosas** (empréstimos, financiamentos, debêntures)? → AV do passivo; separar dívida onerosa.
6. Ao longo do último período, **como a empresa parece ter financiado seu crescimento**? → compare a VM do ativo com as VMs do passivo e do PL.

✍️ Truque da pergunta 6: ΔAtivo = ΔPassivo + ΔPL. Se o ativo cresceu 300 e o passivo 250, **83% do crescimento foi financiado por terceiros**.

### 3.8 Parte III do roteiro — rentabilidade (DRE)
📘 (DRE-análise, slide p.15):
1. Qual a **origem** dos lucros líquidos de cada ano?
2. A origem dos lucros parece ser **sustentável**?
3. Houve crescimento das receitas? Em qual percentual?
4. Há sinais de ganho de **força competitiva**?
5. Qual foi o comportamento da **Margem EBITDA**?
6. Como os **itens financeiros** impactaram o crescimento do lucro líquido?
7. Como os **itens fiscais** impactaram o crescimento do lucro líquido?
8. Houve crescimento da **margem líquida**?
9. A empresa conseguiu atingir os **objetivos dos acionistas**?

📘 Perguntas complementares durante a análise (slide p.16):
10. Quanto a empresa gerou de lucro ou prejuízo? 11. Onde aparece o lucro ou prejuízo no PL? 12. Quanto pagou de dividendos? 13. Quais as maiores receitas? 14. Quais as maiores despesas? 15. Quanto é a variação de caixa na DFC? 16. Onde encontro essa variação no BP? 17. As atividades operacionais estão positivas ou negativas, e quanto? 18. E as de investimento? 19. E as de financiamento?

✍️ Onde achar: 10 → última linha da DRE; 11 → PL do BP (lucros/prejuízos acumulados, reservas) e DMPL; 12 → DMPL e DFC (financiamento); 13–14 → AV da DRE e notas explicativas; 15 → DFC (aumento/redução líquida de caixa); 16 → variação de Caixa e Equivalentes entre os dois BPs; 17–19 → totais de cada atividade na DFC (ver `link_contabilidade_fluxo_de_caixa`).

### 3.9 Origem dos lucros
📘 A DRE é cortada em quatro "fontes" de resultado:

| Bloco da DRE | Origem |
| --- | --- |
| Receita líquida − custos − despesas operacionais = **Lucro operacional (EBIT)** | **Operacional** |
| Ganhos/perdas fora do objeto do negócio (ex.: venda de imobilizado) | **Não operacional** |
| Receitas financeiras − despesas financeiras | **Financeira** |
| IR e CSLL | **Fiscal** |
| = Lucro líquido | soma das quatro |

Lucro sustentável é o que vem da **operação** (ver qualidade do lucro em `link_contabilidade_fluxo_de_caixa`). Se o lucro cresceu por causa de um ganho não operacional ou de um efeito fiscal, o crescimento não se repete.

### 3.10 Evolução dos lucros e efeito das margens
📘 Tabela de trabalho (slides p.27 e p.43): coluna de **Var %** (AH) para Receita líquida, Lucro bruto, Lucro operacional, itens não operacionais, financeiros e fiscais e lucro líquido, e coluna de **efeito das margens** (como cada margem mudou). A lógica: se o lucro bruto cresce menos que a receita, a **margem bruta caiu** (custos subiram mais que as vendas); se o EBIT cai enquanto a receita sobe, as despesas operacionais "comeram" o ganho; se o LL cresce menos que o EBIT, o resultado financeiro ou o IR pesaram.

✍️ **Aplicação ao hands-on X → X+1 (DRE-análise, slides p.40–44; valores verificados):**

| Linha | X | X+1 | AH (Var %) | AV X | AV X+1 | Efeito |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Receita bruta | 84.000 | 100.800 | +20,00% | | | volume +16,67%, preço +2,86% |
| (−) PIS + COFINS (9,25%) | (7.770) | (9.324) | +20,00% | | | |
| Receita líquida | 76.230 | 91.476 | **+20,00%** | 100% | 100% | |
| (−) CPV | (35.000) | (46.000) | +31,43% | 45,91% | 50,29% | custo unitário 29,17 → 32,86 (+12,65%) |
| Lucro bruto | 41.230 | 45.476 | **+10,30%** | 54,09% | 49,71% | margem bruta −4,37 p.p. |
| (−) Despesas operacionais | (10.000) | (15.000) | +50,00% | 13,12% | 16,40% | |
| (−) Depreciação | 0 | (10.000) | — | 0% | 10,93% | equipamento comprado em X |
| Lucro operacional (EBIT) | 31.230 | 20.476 | **−34,43%** | 40,97% | 22,38% | margem operacional −18,58 p.p. |
| EBITDA | 31.230 | 30.476 | −2,41% | 40,97% | 33,32% | margem EBITDA −7,65 p.p. |
| (−) Juros (financeiro) | (5.000) | (7.500) | +50,00% (piora) | 6,56% | 8,20% | dívida maior |
| LAIR | 26.230 | 12.976 | −50,53% | 34,41% | 14,19% | |
| (−) IR/CS 34% (fiscal) | (8.918,20) | (4.411,84) | −50,53% | 11,70% | 4,82% | o IR cai junto com o LAIR |
| Lucro líquido | 17.311,80 | 8.564,16 | **−50,53%** | 22,71% | 9,36% | margem líquida −13,35 p.p. |

Diagnóstico ✍️: a receita cresceu 20%, mas o lucro líquido caiu pela metade. Por quê? (1) o CPV cresceu mais que a receita (+31,4% × +20%) — o custo unitário subiu 12,65% e o preço só 2,86% → **perda de margem bruta**, sinal de **perda de força competitiva** ou de pressão de custos; (2) a nova **depreciação** (10.000) e as despesas operacionais +50% derrubaram o EBIT (−34%); (3) os **juros** subiram 50%. O efeito fiscal foi proporcional (alíquota fixa). Origem do lucro em X+1: operacional 20.476 − financeiro 7.500 − fiscal 4.411,84 = 8.564,16, sem itens não operacionais. ROE caiu de 6,92% para 3,17% (ver `link_contabilidade_rentabilidade`).

### 3.11 Julgamento de análise: três lentes
📘 Depois de calcular, o julgamento precisa considerar:
1. **Comparação temporal** — a empresa melhorou ou piorou ao longo do tempo? Faça **AH sobre os indicadores** para entender *por que* o indicador foi melhor ou pior.
2. **Benchmarking setorial** — como os números se comparam aos concorrentes? Ex. do slide: comparar a **Boa Safra** com sua principal concorrente, a **SLC Agrícola**, nas margens, rentabilidade, alavancagem e giro de ativos — qual das duas vem ganhando em lucratividade e entrega de performance?
3. **Impacto de fatores externos** — mudanças econômicas, taxa de juros e inflação afetam os índices? Compare com um indicador de mercado de forte correlação, como o **IPCA** (inflação ao consumidor). O slide afirma: se o IPCA anual for 4,5% e a margem bruta 10%, a empresa "está à frente da inflação" e tem ganho real. ⚠️ Ver seção 7: o rigor pede comparar **crescimento** (AH) com inflação, via Fisher.

➕ **AH real × nominal:** receita cresceu 4% num ano de IPCA 4,5% → crescimento real = 1,04 / 1,045 − 1 = **−0,48%**: em termos reais, a empresa vendeu menos (ver `link_contabilidade_matematica_financeira`, Efeito Fisher).

### 3.12 Documentos de uma empresa de capital aberto
📘 Empresas abertas divulgam relatórios periódicos para dar transparência ao mercado:
- **DFP (Demonstrações Financeiras Padronizadas)** — **anual**; inclui **BP, DRE, DFC, DMPL e Notas Explicativas**; **auditado** por empresa independente; enviado à **CVM** e à **B3**; segue o **IFRS**.
- **ITR (Informações Trimestrais)** — **trimestral**; versões simplificadas das DFPs; dados auditados ou não, mas **revisados** por auditoria independente.
- **Release de Resultados** — documento de comunicação que destaca os principais resultados financeiros e operacionais; resumo executivo com **comentários da administração**; traz Receita, EBITDA, margens, lucro; pode conter **guidance** (projeções) e fatores de risco.
- **Apresentação Institucional** — material visual e estratégico para investidores, clientes e stakeholders: gráficos, KPIs, visão de longo prazo, inovações e tendências.

📘 Para uma visão completa: **DFP/ITR → dados auditados; Release → contexto e insights da gestão; Apresentação → estratégia de longo prazo.**

📘 **Exercício prático da turma:** escolher uma empresa da B3, analisar os três documentos e responder: o desempenho financeiro está alinhado com o que a empresa comunica? Existe diferença entre os números e a narrativa da gestão? Como a estratégia impacta a análise financeira?

📘 **Hands-on — passo a passo:** acessar `investsite.com.br` (ou o site de RI); buscar pelo ticker — exemplos do slide: Track&Field (TFCO4), Assaí (ASAI3), Raia Drogasil (RADL3), Unicasa (UCAS3), M. Dias Branco (MDIA3), Ambev (ABEV3), Grupo Mateus (GMAT3); baixar as informações e a DFP. Perguntas do hands-on de BP: 1. data das demonstrações; 2. relatório de auditoria; 3. quais DFs a empresa divulga; 4. total de ativos; 5. maiores ativos; 6. total de passivos; 7. maiores passivos; 8. PL; 9. maiores contas de PL; 10. principais alterações do Ativo; 11. do Passivo; 12. do PL.

### 3.13 Exemplo completo resolvido no material: Pré-aula 05 (empresa de reciclagem, R$ mil)
📘 Ativo Total 2025 = 4.293.945 (AC 1.345.247 = 31,3%; ANC 2.948.698 = 68,7%).
- **AV do ativo 2025:** Imobilizado 2.168.539 (50,5%), Caixa 851.334 (19,8%), Intangível 490.998 (11,4%) → mais de 80% do ativo; modelo **capital intensivo**.
- **AH do ativo 2023→2025:** Imobilizado +125,6% (+R$ 1,2 bi), Caixa +194,1%, Contas a Receber +53,0%.
- **AV do passivo 2025 (sobre o total do lado direito, 4.293.945):** Empréstimos NC 1.943.929 (45,3%), Outras obrigações C 245.202 (5,7%), Outras obrigações NC 214.129 (5,0%).
- **AH do passivo:** Empréstimos NC +80,0%, Empréstimos C +291,5%, Fornecedores +144,9%.
- **Sócios × terceiros 2025:** PL 1.551.637 (36,1%) × terceiros 2.742.308 (63,9%); o PL mais que dobrou desde 2023 (744.593; +108,4%).
- **DRE 2023→2025:** Receita 776.276 → 1.050.340 (+35,3%); Resultado bruto +95,9% (margem bruta 31,9% → 46,2%); EBIT +63,4% (despesas operacionais −57.957 → −175.312); Lucro líquido 50.167 → 73.962 (+47,4%), mas **estagnado entre 2024 (74.476) e 2025 (73.962)** porque o resultado financeiro piorou de −170.770 para −213.082.
- **Conclusão do gabarito:** opera cada vez melhor, mas está cada vez mais alavancada; margem líquida ≈ 7,0%; investidor "moderadamente otimista", monitorando dívida e juros.

---

## 4. Fórmulas — folha de cola

| Fórmula | Quando usar | Interpretação |
| --- | --- | --- |
| AV (BP) = Conta / Ativo Total × 100 | Composição do BP num ano | % dos recursos aplicados (ou captados) naquela conta |
| AV (DRE) = Linha / Receita Líquida × 100 | Composição da DRE | Centavos de cada R$ 1 vendido; AV do LB/EBIT/LL = margens |
| AH = (Atual / Anterior − 1) × 100 | Evolução entre períodos | Crescimento (+) ou queda (−) percentual |
| VM = Atual − Anterior | Evolução em R$ | Magnitude do impacto financeiro |
| AH de indicador = (Indicador 2 / Indicador 1 − 1) × 100 | Comparação temporal de margens/índices | Variação relativa do indicador |
| Δ em p.p. = Indicador 2 − Indicador 1 | Margens e percentuais | Diferença absoluta entre percentuais |
| ➕ AH acumulada = (1 + AH₁)(1 + AH₂)… − 1 | Vários períodos | Como taxa acumulada |
| ➕ Número-índice = Valor do ano / Valor do ano-base × 100 | AH de base fixa | Evolução contra um ano de referência |
| ➕ Crescimento real = (1 + AH nominal) / (1 + inflação) − 1 | Comparar com IPCA | Ganho ou perda real (Fisher) |
| ΔAtivo = ΔPassivo + ΔPL | Parte II, pergunta 6 | Quem financiou o crescimento |

---

## 5. Exemplos resolvidos passo a passo

**5.1 AH (simulado Q22, 📘):** RL de 480.000 para 552.000 → (552.000 / 480.000 − 1) × 100 = **15,0%**. VM = +72.000.

**5.2 AV de BP (simulado Q23, 📘):** AC 210.000 / AT 700.000 = **30,0%** → 70% do ativo está no longo prazo.

**5.3 AV de DRE em dois anos (simulado Q24, 📘):** CMV/RL = 180.000/300.000 = **60%** e 240.000/400.000 = **60%** → a participação do CMV **ficou igual**. ⚠️ O CMV em reais cresceu 33,3% (VM +60.000), na mesma proporção da receita: AV igual não significa conta parada.

**5.4 AV de BP completo (✍️):** Caixa 50.000; Clientes 120.000; Estoques 80.000; Imobilizado 400.000; Intangível 50.000 (AT 700.000). AV: Caixa 7,14%; Clientes 17,14%; Estoques 11,43%; **AC 35,71%**; Imobilizado 57,14%; Intangível 7,14%; **ANC 64,29%**. Do outro lado: Fornecedores 90.000 (12,86%); Empréstimos CP 60.000 (8,57%); Empréstimos LP 200.000 (28,57%); PL 350.000 (50%). Leitura: metade financiada por terceiros; dívida onerosa = 37,14% do total.

**5.5 Hands-on X/X+1 (✍️):** ver tabela da seção 3.10.

**5.6 Pré-aula 05 (📘):** ver seção 3.13 e `exercicios.md` (E6–E14).

---

## 6. Armadilhas e pegadinhas de prova ⚠️

1. **Base errada.** AV de BP é sobre o **Ativo Total** (ou o total do lado direito, que é igual); AV de DRE é sobre a **Receita Líquida** — não sobre a receita bruta, nem sobre o lucro.
2. **Sinal da AH.** Queda = AH **negativa** (Apple: −16,1%). Escreva o sinal e diga "queda".
3. **AH sobre base negativa** (resultado financeiro, prejuízo): −50 → −80 dá "+60%" pela fórmula, mas significa **piora** (despesa líquida 60% maior). De prejuízo para lucro (−20 → +30), a AH (−250%) **não tem sentido**: use a VM (+50) e descreva ("reverteu prejuízo").
4. **p.p. × %.** Margem 10% → 12% = **+2 p.p.** = **+20%** de AH. Leia o que o enunciado pede.
5. **AV igual ≠ conta constante** (Q24): ambos cresceram na mesma proporção.
6. **AH alta sobre base pequena** pode ser irrelevante em R$ — complemente com VM e AV.
7. **"Passivo total"** muda de sentido conforme o material: na Pré-aula 05 é o total do lado direito (Passivo + PL = Ativo Total); na aula de indicadores é só PC + PNC (capital de terceiros). Confira a base antes de dividir.
8. **AH de vários anos:** AH anual de 15% e 15% não soma 30%; acumulada = 1,15 × 1,15 − 1 = **32,25%**.
9. **Crescimento nominal × real:** receita +4% com inflação de 4,5% é **queda real**.
10. **Número sem interpretação perde ponto.** Feche com "isso indica que…", ligando ao modelo de negócio.
11. **Receita sobe e lucro cai** → procure a causa por linha (AH e AV de CPV, despesas, financeiro, fiscal), como no hands-on.

---

## 7. Divergências e erros encontrados no material ⚠️

- **Slides AV/AH p.14 (Apple):** a variação do caixa (65,2 → 54,7) é **−16,1%**; o slide escreve "16,1%" sem sinal, embora o texto fale em "diminuição".
- **Slide DRE-análise p.25 (IPCA):** compara uma **margem** (nível, 10%) com a **inflação** (variação, 4,5%) e conclui que a empresa está "à frente da inflação". São grandezas diferentes: o rigor pede comparar a **AH** (crescimento nominal de receita/lucro) com a inflação do período (Fisher). Na prova, se a pergunta reproduzir o slide, responda como o slide, mas acrescente a ressalva.
- **Pré-aula 05, uso de "Passivo Total":** a AV do passivo usa como base o total do lado direito (4.293.945 = Passivo + PL), não o capital de terceiros (2.742.308). Os percentuais estão certos para essa base.
- **Pré-aula 05, item 1.2:** "as três rubricas que mais variaram" mistura critérios — o Caixa tem a maior AH (+194,1%), mas o texto destaca o Imobilizado pelo valor absoluto (+R$ 1,2 bi). Diga sempre se o critério é AH (%) ou VM (R$).
- **Pré-aula 05, item 3.4:** usa números de 2024 (lucro 74.476; resultado financeiro −170.770 e −213.082) que não aparecem na tabela do gabarito; vêm das demonstrações completas, que não estão no material.
- **Hands-on X/X+1:** não tem gabarito no material; resolução ✍️ na seção 3.10. Em X não há depreciação informada, embora o equipamento tenha sido comprado em X (supõe-se que começou a depreciar em X+1).

---

## 8. Como o tema se conecta aos outros

- `link_contabilidade_balanco_patrimonial`: AV do BP = leitura das decisões de investimento (ativo) e financiamento (passivo + PL); circulante × não circulante.
- `link_contabilidade_dre`: AV da DRE; origem do lucro (operacional, financeiro, fiscal).
- `link_contabilidade_rentabilidade`: as AVs do lucro bruto, EBIT, EBITDA e LL **são** as margens; AH das margens e do ROE explica a evolução da performance; DuPont.
- `link_contabilidade_fluxo_de_caixa`: perguntas 15–19 do roteiro; qualidade do lucro.
- `link_contabilidade_indicadores_estrutura_liquidez`: participação de terceiros, composição do endividamento e imobilização do PL são AVs "prontas" do passivo.
- `link_contabilidade_capital_de_giro`: AH de clientes, estoques e fornecedores alimenta a variação da NIG.
- `link_contabilidade_matematica_financeira`: AH acumulada e crescimento real (Fisher).

---

## 9. Protocolo para sessões de estudo

- **Modo EXPLICAR:** comece pela pergunta "esse número é muito ou pouco?", mostre as três ferramentas com o exemplo Apple (AV 15,2%; AH −16,1%), depois a tabela-resumo do slide p.16, depois a leitura de uma empresa real (Pré-aula 05) e o diagnóstico do hands-on X/X+1.
- **Modo EXERCITAR:** uma questão por vez do `exercicios.md` (ou nova no mesmo estilo). Espere a resposta do aluno. Corrija conta **e** interpretação (uma questão sem frase de interpretação vale meio ponto). Registre acertos/erros por subtema (AV de BP, AV de DRE, AH, VM, p.p. × %, interpretação, roteiro de análise) e volte nos erros com uma questão nova.
- **Modo SIMULADO:** bloco de N questões (ex.: 3 no peso do simulado geral — 1 AH, 1 AV de BP, 1 AV de DRE — mais 1 discursiva curta de interpretação) sem feedback; correção no fim com nota e diagnóstico.
- **Sempre** exigir memória de cálculo, sinal e base. A prova é **sem consulta**: peça para o aluno escrever de memória as três fórmulas e as bases (Ativo Total / Receita Líquida) antes de começar.
