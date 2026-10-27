---
name: link_contabilidade_rentabilidade
description: Índices de Rentabilidade e Performance da disciplina Contabilidade Gerencial da Link School of Business (Explorers D, 2026): rentabilidade como ganho sobre investimento; origem dos lucros; margens bruta, operacional, líquida e EBITDA e como julgá-las (tempo, setor, inflação); ROA, ROE, giro do ativo, alavancagem (multiplicador do PL) e Análise DuPont (ROE = margem × giro × alavancagem; de onde vem o ROE); hands-on X e X+1 resolvido; Fazenda Rio Verde × Talhão Dourado. Traz as questões da pré-aula 06 e do simulado geral sobre o tema, com gabarito comentado, mais inéditas. Use quando alguém perguntar sobre margens, ROA, ROE, giro, alavancagem ou DuPont, ou precisar calcular e interpretar indicadores de performance para a AV1 de Contabilidade Gerencial da Link.
---

# Índices de Rentabilidade e Performance — Contabilidade Gerencial (Link)

> **Materiais locais (pasta `materiais/` desta skill):** `Aula - Demonstração de Resultado do Exercício - analise.md` (slides da aula de análise da DRE, margens e rentabilidade; 45 páginas — a parte de rentabilidade vai da p. 14 à p. 44), `06 - Pré-Aula - Rentabilidade - Gabarito.md`, `Lista de Exercícios_Contabilidade Gerencial.md` (simulado geral; Q27–29 são deste tema). Originais em `/Users/theo/Documents/Projetos/Link/Contabilidade/` (PDFs em `/Users/theo/Documents/Projetos/Link/`). O arquivo `Aula - Demonstração de Resultado do Exercício - analise (1).md` da pasta de origem é cópia idêntica e não foi copiado.
> **Exercícios:** `exercicios.md` (13 questões/atividades do material + 16 inéditas, com gabarito comentado).
> **Legenda:** 📘 vem do material do curso · ➕ complemento externo (ajuda a entender, mas não é o que o curso afirma) · ⚠️ divergência, erro do material ou pegadinha de prova · ✍️ resolução ou exercício elaborado por Claude (não oficial).

**Como usar esta skill:** em pergunta de prova, responda pela versão 📘 (fórmulas e interpretações do curso). Use ➕ para aprofundar ou aplicar. Toda resposta numérica deve vir com memória de cálculo. Para a estrutura da DRE (de onde saem lucro bruto, EBIT, LL) carregue `link_contabilidade_dre`; para endividamento e liquidez, `link_contabilidade_indicadores_estrutura_liquidez`. Em sessão de estudo, siga o protocolo da seção 9.

---

## 1. Onde o tema entra no curso

📘 **Plano de aula (Explorers D):**
- **Aula 13 — 24/09/26 — Índices Financeiros de Rentabilidade e Performance.** Objetivos: "Analisar fatores qualitativos que impactam decisões. Avaliar tendências e padrões de desempenho." Competências: C4.H1 (relacionar e utilizar indicadores diversos para avaliar a performance estratégica), C2.H1 (analisar informações financeiras e gerenciais), C6.H1 (olhar crítico e propositivo).
- Aplicado de novo nas **Aulas 14 (25/09) e 19 (15/10)** — análise de demonstrações e de índices de uma **empresa referência** (empresa real listada na B3).
- 📘 **Plano de ensino:** "Índices de rentabilidade, margem e alavancagem (modelo Dupont)" e "Aplicação prática de índices e análise de performance". Bibliografia da aula: Martins, Diniz e Miranda, *Análise avançada das demonstrações contábeis* (2020).
- **Peso no simulado geral:** Q27 (giro do ativo), Q28 (margem líquida), Q29 (ROE) — 3 de 32 questões (~9%). As margens também aparecem indiretamente em DRE e AV.
- **Prova AV1:** 26/10/2026, individual, **sem consulta** (40% da nota) → as fórmulas precisam estar memorizadas (seção 4).

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

**Onde a aula se encaixa.** O curso faz um caminho: primeiro aprende a **montar** as demonstrações (BP, DRE, DFC), depois a **ler composição e evolução** (AV/AH), e então a **medir desempenho** com índices. Rentabilidade é o bloco que responde "a empresa ganha bem em relação ao que se investiu nela?" — a pergunta que interessa ao dono do capital. O bloco seguinte (Aula 15) mede o outro lado da moeda: risco e capacidade de pagamento.

---

## 2. A ideia central

📘 **Rentabilidade é quanto se ganha em comparação ao que se investiu.** O lucro, sozinho, é um número absoluto e diz pouco: R$ 1 milhão de lucro é ótimo para quem investiu R$ 2 milhões e péssimo para quem investiu R$ 500 milhões. Por isso o curso sempre transforma lucro em **relação**: lucro sobre receita (margens), lucro sobre ativo (ROA), lucro sobre patrimônio líquido (ROE), receita sobre ativo (giro).

📘 A **Análise DuPont** amarra tudo numa única equação: **ROE = Margem Líquida × Giro do Ativo × Alavancagem**. Ela permite responder *de onde vem* o retorno do acionista: de vender com boa margem (eficiência em custos e preço), de vender muito para o tamanho do ativo (produtividade) ou de usar muito capital de terceiros (alavancagem — que aumenta o retorno, mas também o risco).

➕ A pergunta-chave de prova não é só "quanto deu o ROE?", e sim "**o ROE alto é bom ou é arriscado?**". Um ROE que vem de margem e giro é eficiência operacional; um ROE que vem de alavancagem é retorno comprado com dívida.

---

## 3. O conteúdo, explicado

### 3.1 Rentabilidade = ganho ÷ investimento
📘 Fórmula geral: **Rentabilidade = Ganho / Investimento**. O lucro representa quanto a empresa ganhou.

📘 **Exemplo do slide:** uma empresa investiu $ 200 mil e obteve lucro de $ 30 mil no ano → Rentabilidade = 30 / 200 = **0,15 ou 15%** → a empresa ganhou **$ 0,15 para cada $ 1,00 investido**.

Essa frase-modelo ("para cada R$ 1,00 de X, a empresa gerou R$ Y de Z") é a forma esperada de interpretar qualquer índice de rentabilidade na prova.

### 3.2 O roteiro de análise do curso (Parte III — Rentabilidade)
📘 A aula propõe perguntas para analisar uma empresa real (DFP/ITR, release):
1. Qual a origem dos lucros líquidos de cada ano?
2. A origem dos lucros parece ser sustentável?
3. Houve crescimento das receitas? Em qual percentual?
4. Há sinais de ganho de força competitiva?
5. Qual foi o comportamento da Margem EBITDA?
6. Como os itens financeiros impactaram o crescimento do lucro líquido?
7. Como os itens fiscais impactaram o crescimento do lucro líquido?
8. Houve crescimento da margem líquida?
9. A empresa conseguiu atingir os objetivos dos acionistas?

📘 Perguntas complementares da análise (10–19): quanto a empresa gerou de lucro ou prejuízo; onde aparece o lucro/prejuízo no PL; quanto pagou de dividendos; maiores receitas e despesas; variação de caixa na DFC e onde encontrá-la no BP; se as atividades operacionais, de investimento e de financiamento estão positivas ou negativas e em quanto.

➕ Leitura: as perguntas 1–2 são **qualidade do lucro** (ver `link_contabilidade_fluxo_de_caixa`), 3–5 são **força competitiva** (receita e margens), 6–7 separam o que é **operação** do que é **financeiro e fiscal**, 8–9 fecham no **acionista** (margem líquida, ROE).

### 3.3 Origem dos lucros
📘 A DRE é lida em quatro "camadas" de origem do lucro líquido:

| Camada | O que entra | Onde está na DRE |
| --- | --- | --- |
| **Operacional** | Receita − deduções − custos − despesas operacionais | até o Lucro Operacional (EBIT) |
| **Não operacional** | Ganhos/perdas fora do objeto do negócio (ex.: venda de imobilizado) | resultado não operacional |
| **Financeira** | Receitas financeiras − despesas financeiras (juros) | entre EBIT e LAIR |
| **Fiscal** | IR e CSLL | entre LAIR e Lucro Líquido |

**Lucro líquido = Operacional ± Não operacional ± Financeiro − Fiscal.**

📘 Por que importa: lucro **de qualidade** é de natureza operacional e recorrente. Se o lucro de um ano veio principalmente de um ganho não operacional (venda de um terreno) ou de receitas financeiras, ele **não é sustentável** — não se repete no ano seguinte.

### 3.4 Margens — conceitos essenciais
📘 Todas as margens usam a **Receita (Líquida)** no denominador e são expressas em %:

| Margem | Fórmula 📘 | O que mede (📘) |
| --- | --- | --- |
| **Margem Bruta** | Lucro Bruto / Receita × 100 | Eficiência na produção e venda dos produtos, desconsiderando despesas operacionais. **Sinaliza o grau de competitividade** da empresa no mercado. |
| **Margem Operacional** | Lucro Operacional / Receita × 100 | Lucro após custos e despesas operacionais, antes de impostos e despesas financeiras. Indica a **eficiência operacional**: quanto a empresa ganha para cada real vendido. |
| **Margem Líquida** | Lucro Líquido / Receita × 100 | Percentual da receita que **sobra para os acionistas** após todos os custos, impostos e despesas financeiras. |
| **Margem EBITDA** | EBITDA / Receita × 100 | **Capacidade de geração de caixa operacional**, sem considerar estrutura de capital (juros) e impostos. |

📘 EBITDA = Lucro Operacional + Depreciação + Amortização (LAJIDA).

➕ **Como ler a "cascata" de margens.** A distância entre uma margem e a seguinte mostra onde o dinheiro fica:
- Margem bruta → operacional: peso das **despesas operacionais** (vendas, administrativas, depreciação).
- Margem operacional → líquida: peso do **resultado financeiro** (juros) e dos **impostos sobre o lucro**.
- Margem EBITDA − margem operacional = peso da **depreciação e amortização** sobre a receita (empresas com muito imobilizado têm grande diferença).

### 3.5 Como julgar as margens (e qualquer índice)
📘 Depois de calcular, o julgamento precisa considerar três comparações:

1. **Comparação temporal** — a empresa melhorou ou piorou ao longo do tempo? Faça **análise horizontal sobre os próprios indicadores**, numa coluna ao lado: **Variação do indicador = (Indicador Ano 2 / Indicador Ano 1 − 1) × 100.**
2. **Benchmarking setorial** — como os números se comparam aos concorrentes? Exemplo do slide: analisar a **Boa Safra** contra a principal concorrente, **SLC Agrícola**, comparando margens, rentabilidade, alavancagem e giro de ativos, e responder qual das duas vem ganhando em lucratividade e entrega de performance.
3. **Impacto de fatores externos** — mudanças econômicas, juros e inflação afetam os índices? Exemplo do slide: se o **IPCA** anual foi 4,5% e a margem bruta é 10%, a empresa está "à frente da inflação", com ganho real — um aspecto positivo.

➕ Para comparar com a inflação de forma rigorosa, use o Efeito Fisher (`link_contabilidade_matematica_financeira`): um ROE nominal de 12% com IPCA de 4,5% equivale a (1,12 / 1,045) − 1 = **7,18% real**. ⚠️ O exemplo do slide compara margem bruta com inflação de forma ilustrativa; na prova, reproduza o raciocínio do slide se a pergunta for sobre ele.

⚠️ **Variação em pontos percentuais × variação percentual.** Se a margem líquida foi de 10% para 12%, ela subiu **2 pontos percentuais (p.p.)**, mas a variação percentual (AH do indicador) é (12/10 − 1) = **+20%**. Diga sempre qual das duas você está usando.

### 3.6 Evolução dos lucros e efeito das margens
📘 O slide propõe uma tabela para comparar dois períodos:

| Evolução dos lucros e margens | Var % | Efeito das margens |
| --- | --- | --- |
| Variação Receita Líquida | | |
| Variação Lucro Bruto | | |
| Variação Lucro Operacional | | |
| Var. itens não operacionais / financeiros / fiscal | | |
| Var. Lucro Líquido | | |

➕ **A regra de leitura:** se um lucro cresce **mais** que a receita, a margem correspondente **aumentou** (ganho de eficiência); se cresce **menos** (ou cai), a margem **comprimiu**. Exemplo da Pré-aula 05 (empresa de reciclagem, 2023→2025): receita +35,3%, lucro bruto +95,9% (margem bruta de 31,9% para 46,2%), mas o lucro líquido só +47,4% porque o resultado financeiro piorou com o aumento da dívida — "a empresa opera cada vez melhor, mas está cada vez mais alavancada".

### 3.7 ROA — Return on Assets (Retorno sobre o Ativo)
📘 **ROA = Lucro Líquido / Total do Ativo.** Avalia a eficiência da empresa em utilizar seus ativos para gerar lucros: quanto de lucro é obtido **a cada real aplicado nos ativos**.
- 📘 Quanto **maior**, maior a eficácia da gestão na alocação e utilização dos recursos.
- 📘 ROA **baixo** pode sinalizar ativos mal aproveitados, exigindo ações de melhoria.

➕ O ROA olha para **todo** o capital investido (próprio + de terceiros), porque o ativo é financiado pelos dois. Por isso ele mede a rentabilidade **do negócio**, independentemente de quem financiou.

### 3.8 ROE — Return on Equity (Retorno sobre o Patrimônio Líquido)
📘 **ROE = Lucro Líquido / Patrimônio Líquido.** Mede a rentabilidade sob a ótica dos **proprietários/acionistas**: quanto de lucro a empresa obtém **para cada real dos proprietários**.
- 📘 ROE mais elevado sinaliza melhor retorno do capital investido pelos sócios.

➕ O ROE deve ser comparado ao **custo de oportunidade** do sócio (o que ele ganharia num investimento de risco parecido, ou no mínimo a renda fixa). ROE de 8% num país com juros básicos de 12% destrói valor para o acionista, mesmo com lucro positivo.

⚠️ **PL negativo:** se o PL é negativo, o ROE perde sentido (um prejuízo dividido por PL negativo dá um "ROE positivo" absurdo). Nesse caso, diga que o indicador não é interpretável e que a empresa tem passivo a descoberto.

### 3.9 Giro dos Ativos
📘 **Giro dos Ativos = Receita Líquida / Total do Ativo.** Avalia a **produtividade**: quanto em vendas é gerado para cada real aplicado nos ativos — termômetro de eficiência operacional.
- 📘 Giro **mais elevado**: a organização aproveita melhor os recursos para alcançar maior volume de vendas.
- 📘 Giro **baixo**: pode sinalizar necessidade de melhoria na gestão ou na utilização dos recursos.

📘 Frase do gabarito (simulado Q27): "Para cada R$ 1,00 de Ativo, a empresa gerou R$ 1,25 de Receita Líquida no período."

⚠️ O giro é expresso em **"vezes" (x)**, não em %. Giro de 0,64 = 0,64x.

### 3.10 Alavancagem financeira (Multiplicador do PL — MPL)
📘 **Alavancagem Financeira = Ativo Total / Patrimônio Líquido.** Indica o grau de utilização de capital de terceiros na estrutura de capital. Conforme a empresa emite obrigações (dívidas) para financiar operações e projetos, aumenta o risco de insolvência. **Quanto maior o valor, mais endividada a empresa.** Também chamada **Multiplicador do Patrimônio Líquido (MPL)**.

📘 **Valor mínimo = 1**: empresa 100% financiada por capital próprio (Ativo = PL). Ex.: MPL = 2 → metade do ativo é financiada por terceiros.

➕ Relações úteis (pela equação Ativo = Passivo + PL):
- **MPL = 1 + Passivo/PL** (Passivo/PL é a "participação de capital de terceiros" da Aula 15).
- **% do ativo financiado por terceiros = 1 − 1/MPL.** MPL 1,6 → 1 − 0,625 = 37,5% do ativo vem de terceiros.

### 3.11 Análise DuPont
📘 Técnica de análise financeira e de performance que identifica pontos fortes e fracos usando ROA e ROE; desenvolvida pela **DuPont Corporation** (indústria química dos EUA) nos **anos 1920**; aplicável a qualquer setor.

📘 **A decomposição:**

```
ROE = (Lucro Líquido / Receita Líquida) × (Receita Líquida / Ativo) × (Ativo / PL)
    =      Margem Líquida               ×        Giro do Ativo       × Alavancagem (AEC/MPL)
    = Lucro Líquido / PL

ROA = Margem Líquida × Giro do Ativo = Lucro Líquido / Ativo
ROE = ROA × Alavancagem
```

📘 O slide chama a alavancagem também de **AEC — Alavancagem da Estrutura de Capital**: "quanto a empresa aplica em relação ao investimento dos proprietários".

📘 **"O ROE vem do quê?"** — a pergunta do slide: identificar se o ROE é explicado pela **(a) alavancagem**, **(b) margem** ou **(c) giro do ativo**.
- **Margem** = **lucratividade** (eficiência em preço e custos).
- **Giro** = **produtividade** (eficiência no uso dos ativos). O slide resume: "Lucratividade e Produtividade".
- **Alavancagem** = **estrutura de capital** (quanto de dívida multiplica o retorno do sócio).

➕ **Modelos de negócio típicos:**

| Perfil | Margem | Giro | Exemplo |
| --- | --- | --- | --- |
| Margem alta, giro baixo | alta | baixo | joalheria, software, infraestrutura, agronegócio com muita terra |
| Margem baixa, giro alto | baixa | alto | supermercado, atacarejo, distribuidora |
| ROE "comprado" com dívida | qualquer | qualquer | alavancagem alta (MPL 3, 4, 5…) — retorno maior, risco maior |

➕ **Alavancagem só ajuda se a dívida custa menos do que o negócio rende.** Se o custo da dívida (após IR) é menor que o ROA "desalavancado", trocar capital próprio por dívida **aumenta** o ROE; se é maior, **reduz**. Ver exercício ✍️ E28.

### 3.12 Hands-on da aula (períodos X e X+1)
📘 A aula termina com uma atividade: montar a DRE dos períodos X e X+1 (dados na seção 5.3), preencher a **origem do lucro**, a **evolução de receita, lucros e margens** e a **evolução da rentabilidade** (margem, giro, alavancagem, ROE). O material não traz gabarito; a resolução ✍️ completa está na seção 5.3 e no `exercicios.md`.

---

## 4. Fórmulas — folha de cola

| Indicador | Fórmula | Unidade | Interpretação-modelo |
| --- | --- | --- | --- |
| Rentabilidade (geral) | Ganho / Investimento | % | "ganhou R$ 0,15 para cada R$ 1,00 investido" |
| Margem Bruta | Lucro Bruto / Receita Líquida × 100 | % | competitividade; eficiência de produção e venda |
| Margem Operacional | Lucro Operacional (EBIT) / Receita Líquida × 100 | % | eficiência operacional; quanto ganha por real vendido |
| Margem Líquida | Lucro Líquido / Receita Líquida × 100 | % | quanto da receita sobra para o acionista |
| Margem EBITDA | EBITDA / Receita Líquida × 100 | % | geração de caixa operacional sem juros e impostos |
| EBITDA | EBIT + Depreciação + Amortização | R$ | potencial de caixa operacional |
| ROA | Lucro Líquido / Ativo Total | % | lucro por real aplicado no ativo |
| ROE | Lucro Líquido / Patrimônio Líquido | % | lucro por real dos sócios |
| Giro do Ativo | Receita Líquida / Ativo Total | x (vezes) | receita gerada por real de ativo |
| Alavancagem (MPL/AEC) | Ativo Total / Patrimônio Líquido | x (mín. 1) | quanto o ativo é maior que o capital próprio |
| DuPont | ROE = ML × Giro × Alavancagem | % | de onde vem o ROE |
| DuPont (ROA) | ROA = ML × Giro | % | lucratividade × produtividade |
| Variação de indicador | (Indicador ano 2 / Indicador ano 1 − 1) × 100 | % | AH sobre o índice |

**Mnemônico DuPont:** "**M**ais **G**anho **A**o sócio" → **M**argem × **G**iro × **A**lavancagem = ROE.

---

## 5. Exemplos resolvidos passo a passo

### 5.1 Exemplo do slide (rentabilidade geral)
📘 Investimento $ 200 mil, lucro $ 30 mil → 30 / 200 = **15%** → $ 0,15 de lucro para cada $ 1,00 investido.

### 5.2 Pré-aula 06 — Fazenda Rio Verde × Talhão Dourado (R$ mil)
📘 Dados: Rio Verde — AT 2.800.000; PL 1.480.000; RL 1.800.000; LB 630.000; EBIT 340.000; EBITDA 400.000; LL 195.000. Talhão — AT 3.000.000; PL 2.000.000; RL 2.100.000; LB 800.000; EBIT 380.000; EBITDA 450.000; LL 210.000.

| Indicador | Cálculo Rio Verde | Rio Verde | Cálculo Talhão | Talhão |
| --- | --- | --- | --- | --- |
| ROA | 195 / 2.800 | 6,96% (≈ 7,0%) | 210 / 3.000 | 7,00% |
| ROE | 195 / 1.480 | 13,18% | 210 / 2.000 | 10,50% |
| Giro | 1.800 / 2.800 | 0,64x | 2.100 / 3.000 | 0,70x |
| Alavancagem | 2.800 / 1.480 | 1,89x | 3.000 / 2.000 | 1,50x |
| Margem Bruta | 630 / 1.800 | 35,0% | 800 / 2.100 | 38,1% |
| Margem Operacional | 340 / 1.800 | 18,9% | 380 / 2.100 | 18,1% |
| Margem Líquida | 195 / 1.800 | 10,8% | 210 / 2.100 | 10,0% |
| Margem EBITDA | 400 / 1.800 | 22,2% | 450 / 2.100 | 21,4% |

**DuPont:** Rio Verde 10,83% × 0,643 × 1,892 = 13,18%; Talhão 10,0% × 0,70 × 1,50 = 10,5%.

**Leitura correta ✍️ (com a correção ⚠️ do gabarito):**
- **ROA praticamente empatado** (6,96% × 7,00%): as duas extraem quase o mesmo lucro de cada real de ativo.
- **ROE:** Rio Verde 13,2% contra 10,5%. Como o ROA é igual, a diferença vem quase toda da **alavancagem** (1,89 / 1,50 = 1,26; 13,2 / 10,5 = 1,26).
- **Margens:** a Talhão só é melhor na **margem bruta** (38,1% × 35,0%) → produz/compra melhor. A Rio Verde é melhor nas margens **operacional, líquida e EBITDA** → controla melhor as despesas operacionais (despesas operacionais = LB − EBIT: Rio Verde 290 = 16,1% da receita; Talhão 420 = 20,0%). ⚠️ O gabarito diz que a Talhão tem "margens melhores em quase todas as linhas" — pela própria tabela, isso só vale para a margem bruta.
- **Giro:** Talhão gira mais o ativo (0,70 × 0,64), o que compensa sua margem líquida menor e deixa o ROA igual.
- **Conclusão:** a Rio Verde entrega mais ao acionista, mas porque usa mais capital de terceiros (mais risco). A Talhão tem rentabilidade sobre ativos igual, margem bruta melhor, giro maior e estrutura menos endividada — performance operacional equivalente com menos risco.

### 5.3 Hands-on da aula — períodos X e X+1 (✍️ resolução; dados 📘)
📘 **Dados de X:** 1.200 unidades a $ 70; entraram no caixa só $ 40.000 (resto no ano seguinte); PIS 1,65% e COFINS 7,6% sobre as vendas; CPV $ 35.000 (pagos só $ 30.000); investiu $ 100.000 num equipamento; despesas operacionais e com vendas $ 10.000; captou $ 20.000 no banco e pagou juros de $ 5.000; IR/CS 34%; Ativo total $ 400.000; PL $ 250.000.
📘 **Dados de X+1:** 1.400 unidades a $ 72; entraram $ 40.000; PIS/COFINS idem; CPV $ 46.000 (pagos $ 30.000); depreciou $ 10.000 do equipamento; despesas operacionais e com vendas $ 15.000; empréstimo de $ 30.000, juros pagos $ 7.500; IR/CS 34%; Ativo total $ 430.000; PL $ 270.000.

⚠️ **Regime de competência:** entradas e saídas de caixa ($ 40.000 recebidos, $ 30.000 pagos), a compra do equipamento ($ 100.000) e a captação do empréstimo **não entram na DRE**. Só entram receitas e despesas do período (vendas totais, CPV total, depreciação, juros).

| DRE | X | X+1 |
| --- | ---: | ---: |
| Receita Bruta (unid. × preço) | 84.000,00 | 100.800,00 |
| (−) PIS + COFINS (9,25%) | (7.770,00) | (9.324,00) |
| = Receita Líquida | 76.230,00 | 91.476,00 |
| (−) CPV | (35.000,00) | (46.000,00) |
| = Lucro Bruto | 41.230,00 | 45.476,00 |
| (−) Despesas operacionais e com vendas | (10.000,00) | (15.000,00) |
| (−) Depreciação | — | (10.000,00) |
| = Lucro Operacional (EBIT) | 31.230,00 | 20.476,00 |
| EBITDA (EBIT + depreciação) | 31.230,00 | 30.476,00 |
| (−) Despesas financeiras (juros) | (5.000,00) | (7.500,00) |
| = LAIR | 26.230,00 | 12.976,00 |
| (−) IR/CS 34% | (8.918,20) | (4.411,84) |
| = Lucro Líquido | 17.311,80 | 8.564,16 |

**Origem do lucro (X+1):** Operacional 20.476,00 · Não operacional 0 · Financeira −7.500,00 · Fiscal −4.411,84 · **Lucro líquido 8.564,16**. (Em X: 31.230,00 · 0 · −5.000,00 · −8.918,20 · 17.311,80.)

**Margens e rentabilidade:**

| Indicador | X | X+1 | Variação |
| --- | ---: | ---: | --- |
| Margem Bruta | 54,09% | 49,71% | −4,37 p.p. |
| Margem Operacional | 40,97% | 22,38% | −18,58 p.p. |
| Margem EBITDA | 40,97% | 33,32% | −7,65 p.p. |
| Margem Líquida | 22,71% | 9,36% | −13,35 p.p. |
| Giro do Ativo | 0,1906x | 0,2127x | +11,63% |
| Alavancagem (AT/PL) | 1,6000x | 1,5926x | −0,46% |
| ROA | 4,33% | 1,99% | −2,34 p.p. |
| ROE | 6,92% | 3,17% | −3,75 p.p. (AH −54,19%) |

DuPont: X → 22,71% × 0,1906 × 1,60 = 6,92%; X+1 → 9,36% × 0,2127 × 1,5926 = 3,17%.

**Evolução dos lucros (AH):** Receita Líquida **+20,00%**; Lucro Bruto **+10,30%**; Lucro Operacional **−34,43%**; Lucro Líquido **−50,53%**.

**Diagnóstico ✍️:**
1. A receita cresceu 20%, mas o **CPV cresceu 31,43%** → a margem bruta caiu (CPV/RL de 45,91% para 50,29%).
2. O lucro operacional despencou porque entraram **despesas novas**: a depreciação do equipamento ($ 10.000) e despesas operacionais +50% (de 10.000 para 15.000). A margem EBITDA caiu bem menos que a operacional — parte da queda é depreciação (não caixa).
3. Os **juros subiram 50%** (5.000 → 7.500), piorando o resultado financeiro.
4. O item fiscal **ajudou**: com LAIR menor, o IR caiu 50,53%.
5. **De onde caiu o ROE?** Da **margem**: o giro até melhorou (+11,6%) e a alavancagem ficou estável; a margem líquida caiu de 22,71% para 9,36%.

---

## 6. Armadilhas e pegadinhas de prova

- ⚠️ **Denominador das margens é a Receita Líquida**, não a bruta. Margem líquida com receita bruta subestima o índice.
- ⚠️ **ROA usa Ativo Total; ROE usa Patrimônio Líquido.** Trocar os denominadores é o erro mais comum.
- ⚠️ **Giro e alavancagem são "vezes" (x)**, margens e retornos são %.
- ⚠️ **Alavancagem = Ativo / PL** (não Passivo / PL). Passivo/PL é a participação de capital de terceiros (Aula 15). As duas se relacionam: MPL = 1 + Passivo/PL.
- ⚠️ **ROE alto nem sempre é bom**: verifique a alavancagem. ROE alto com MPL alto = retorno com risco.
- ⚠️ **Pontos percentuais × variação percentual** (seção 3.5).
- ⚠️ **Competência:** no hands-on, caixa recebido/pago, compra de equipamento e captação de empréstimo **não** são receita/despesa. Só a depreciação e os juros entram na DRE.
- ⚠️ **Margem EBITDA ≥ margem operacional** sempre (EBITDA soma de volta D&A). Se der menor, você errou o sinal.
- ⚠️ **Lucro que vem de item não operacional** (venda de imobilizado) infla o ROE de um ano mas não é sustentável — a pergunta "a origem dos lucros é sustentável?" espera essa crítica.
- ⚠️ **PL negativo** torna ROE e alavancagem não interpretáveis.
- ⚠️ **ROA "dupla checagem":** ROA = ML × Giro. Se seu ROA calculado direto não bate com o produto, há erro de conta.
- ⚠️ Na DuPont, use **o mesmo lucro (LL) e a mesma receita (RL)** nas três parcelas; misturar EBIT com LL quebra a identidade.

---

## 7. Divergências e erros encontrados no material

1. ⚠️ **Pré-aula 06, Q7 — resposta sugerida.** Diz que a Talhão Dourado tem "margens melhores em quase todas as linhas". Pela própria tabela do gabarito, a Talhão só é melhor na **margem bruta** (38,1% × 35,0%); a Rio Verde é melhor em **margem operacional** (18,9% × 18,1%), **líquida** (10,8% × 10,0%) e **EBITDA** (22,2% × 21,4%). ROA: Rio Verde 6,96% (o gabarito arredonda para 7,0%) × Talhão 7,00%. O restante da resposta (ROE maior da Rio Verde explicado pela alavancagem) está correto.
2. ⚠️ **Pré-aula 06, tabela:** o ROA da Rio Verde aparece como 7,0% (arredondado); o valor com duas casas é 6,96%. A própria resposta sugerida usa 6,96%.
3. ⚠️ **Slide de "fatores externos"** compara margem bruta (10%) com IPCA (4,5%) para concluir "ganho real". ➕ A comparação rigorosa com inflação é feita com retornos (ROE) pelo Efeito Fisher; a margem bruta não é uma taxa de retorno sobre investimento. Na prova, se a pergunta for sobre o slide, reproduza a conclusão do slide.
4. ⚠️ **Hands-on X/X+1 sem gabarito** no material → resolução ✍️ (seção 5.3), conferida em Python.
5. ⚠️ **Slide de alavancagem**: o termo "AEC (alavancagem da estrutura de capital)" e "MPL (multiplicador do PL)" designam o mesmo índice, Ativo / PL.

---

## 8. Como o tema se conecta aos outros

- **`link_contabilidade_dre`**: de onde saem Lucro Bruto, EBIT, EBITDA, LAIR e LL — sem DRE correta não há margem correta.
- **`link_contabilidade_balanco_patrimonial`**: Ativo Total e PL (denominadores do ROA, ROE, giro e alavancagem).
- **`link_contabilidade_analise_vertical_horizontal`**: as margens são a **análise vertical da DRE** (cada lucro ÷ receita líquida); a evolução dos índices é **análise horizontal** dos indicadores.
- **`link_contabilidade_indicadores_estrutura_liquidez`**: a alavancagem da DuPont conversa com endividamento geral, grau de endividamento e cobertura de juros — retorno × risco.
- **`link_contabilidade_capital_de_giro`**: a variação da NIG afeta a capacidade de transformar EBITDA em caixa e afeta o ROE.
- **`link_contabilidade_fluxo_de_caixa`**: qualidade do lucro — lucro operacional e recorrente × lucro de eventos não recorrentes.
- **`link_contabilidade_tributacao`**: o item "fiscal" da origem do lucro; regime tributário muda a margem líquida (Bella Café: 30,22% no Presumido × 19,78% no Real).
- **`link_contabilidade_matematica_financeira`**: Efeito Fisher para comparar retorno com inflação.
- **`link_contabilidade_revisao_geral`**: formulário completo e simulados que misturam todos os temas.

---

## 9. Protocolo para sessões de estudo

- **Modo EXPLICAR:** comece pela pergunta "quanto ganhei em relação ao que investi?"; depois margens (lucro ÷ receita), depois ROA/ROE (lucro ÷ investimento), depois giro e alavancagem, e feche com a DuPont mostrando que tudo se multiplica. Use o exemplo Rio Verde × Talhão para mostrar que ROE alto pode vir de dívida.
- **Modo EXERCITAR:** uma questão por vez do `exercicios.md` (ou nova no mesmo estilo), espere a resposta do aluno, corrija mostrando conta e conceito, registre acertos/erros por subtema (margens, ROA/ROE, giro/alavancagem, DuPont, interpretação) e volte nos erros com uma variação da questão.
- **Modo SIMULADO:** bloco de N questões (sugestão: 8 — 3 de cálculo direto, 2 de DuPont, 2 de interpretação, 1 de comparação de empresas) sem feedback; correção no fim com nota e diagnóstico por subtema.
- **Sempre:** exigir memória de cálculo e a frase de interpretação ("para cada R$ 1,00 de…"). Como a prova é sem consulta, peça para o aluno escrever a folha de cola da seção 4 de memória antes de começar e confira.
- Sinalize ⚠️ quando o aluno cair numa das armadilhas da seção 6 e cite qual.
