# Currículo — "Contabilidade Gerencial em 1 dia" (11 aulas, cerca de 5 h; a aula 10 saiu)

Cada ficha diz o que a aula ensina, as práticas (com a fonte e a resposta conferida), as ilustrações e o
desafio. Leia também `curso/contabilidade/BRIEFING-CODEX.md` (formato e regras) e
`curso/contabilidade/aulas/aula-00.js` (o modelo).

**Fontes:** `curso/contabilidade/fontes/<tema>.md` (teoria, armadilhas, erros do material) e
`<tema>-exercicios.md` (enunciados completos e gabarito comentado; procure pela etiqueta
`[Fonte: Simulado geral, Q1]`, `[Fonte: Pré-aula 01, Q5]` etc.). As respostas abaixo já foram
conferidas; use-as no `calculo`, na `resposta` e nas `contas`.

**Ordem das práticas:** intercale com os conceitos (conceito → 2 ou 3 práticas dele → próximo conceito).
As questões oficiais vêm antes das inéditas.

**Contexto zero (BRIEFING §1.1):** a lista de "Conceitos" de cada ficha diz **o que** ensinar, não quantos
cartões usar. Cada item costuma virar 2 ou 3 cartões curtos: a situação concreta com números pequenos,
o nome de cada parte e, só depois, a fórmula letra por letra. Nenhum termo aparece antes de ser
explicado. A ficha da aula 01 mostra o nível de detalhe esperado.

**O que cada aula ainda não pode usar** (nunca antecipe um assunto):

| Aula | Já pode usar |
|---|---|
| 01–02 | juros, taxas e inflação (sem DRE, balanço ou indicadores) |
| 03 | + vocabulário contábil (ativo, passivo, PL, receita, despesa, competência × caixa) |
| 04 | + balanço patrimonial |
| 05 | + DRE |
| 06 | + DFC |
| 07–09 | + análise (AV/AH na 07, rentabilidade na 08, liquidez na 09) |
| 11 | + tributos |
| 12 | tudo |

---

## Parte A — Matemática financeira

### Aula 01 — Juros simples e compostos (30 min)
- **Objetivo:** calcular juros, montante, capital, taxa e prazo em juros simples e compostos, com a
  calculadora científica.
- **Fontes:** `matematica_financeira.md` (seções 3.1–3.6, 3.12, 4 e 6) e `matematica_financeira-exercicios.md`.
- **Abertura:** Marta precisa de R$ 50 mil para reformar a loja e recebeu duas propostas de empréstimo.
  Quer saber qual sai mais barata.
- **Conceitos** (sequência de contexto zero; cada linha é um cartão):
  1. **O que são juros?** Marta pega R$ 1.000 emprestados e, um mês depois, devolve R$ 1.020. Os R$ 20 a
     mais são os juros: o "aluguel" do dinheiro. Por que existem: o dinheiro perde valor com o tempo
     (inflação), quem empresta deixa de usar o dinheiro em outra coisa e corre o risco de não receber.
  2. **Os três nomes:** no exemplo, R$ 1.000 é o *capital* (o valor emprestado ou aplicado no começo),
     R$ 20 são os *juros* e R$ 1.020 é o *montante* (o total no fim = capital + juros).
  3. **O que é percentual e taxa de juros:** "2%" quer dizer 2 em cada 100. A *taxa de juros* diz
     quantos por cento do capital viram juros **em cada período** (2% ao mês = a cada mês, 2% de
     R$ 1.000 = R$ 20). Para fazer conta, 2% vira 0,02 (2 ÷ 100).
  4. **Prazo e unidade de tempo:** o *prazo* é por quanto tempo o dinheiro fica emprestado. A taxa vale
     para um período (mês, ano), então o prazo precisa ser contado no mesmo período: com 2% ao mês por
     2 anos, conte **24 meses**. Explique as siglas a.m. (ao mês), a.a. (ao ano), a.t., a.s.
  5. **Juros simples, mês a mês:** R$ 1.000 a 2% ao mês por 3 meses. Mês 1: +20; mês 2: +20; mês 3:
     +20 → montante 1.060. Os juros são sempre 2% do capital inicial: crescem em linha reta.
  6. **A fórmula dos juros simples, letra por letra:** C = capital (1.000), i = taxa em decimal (0,02),
     n = número de períodos (3), J = juros. J = C × i × n = 1.000 × 0,02 × 3 = 60; M = C + J =
     C × (1 + i × n) = 1.060. Outro exemplo: 80.000 × 0,025 × 3 = 6.000.
  7. **Quando o que falta é a taxa, o prazo ou o capital:** a mesma fórmula, "virada": i = J ÷ (C × n),
     n = J ÷ (C × i), C = J ÷ (i × n), cada uma com um exemplo.
  8. **Juros compostos, mês a mês:** os mesmos R$ 1.000 a 2% ao mês. Mês 1: 2% de 1.000 = 20 → 1.020;
     mês 2: 2% de **1.020** = 20,40 → 1.040,40; mês 3: 2% de 1.040,40 = 20,81 → 1.061,21. Os juros de
     um mês passam a render juros no mês seguinte ("juros sobre juros").
  9. **A fórmula dos compostos:** multiplicar por 1,02 a cada mês é o mesmo que multiplicar por 1,02
     elevado ao número de meses: M = C × (1 + i)^n = 1.000 × 1,02^3 = 1.061,21. Mostre a tabela de
     R$ 1.000 a 10% ao ano por 5 anos: simples 1.100 / 1.200 / 1.300 / 1.400 / 1.500 × compostos
     1.100 / 1.210 / 1.331 / 1.464,10 / 1.610,51.
  10. **Valor presente:** a conta ao contrário: quanto depositar hoje para ter um valor no futuro.
      VP = VF ÷ (1 + i)^n, explicando que VP (valor presente) é o capital e VF (valor futuro) é o
      montante.
  11. **Simples × compostos:** iguais no 1º período; depois o composto cresce mais; em menos de um
      período o simples rende mais. Use um `lado_a_lado` só com palavras já explicadas.
  12. **Na calculadora científica:** `1000 × 1.02 ^ 3 =`; a tecla `^` é "elevado a"; expoente
      fracionário entre parênteses; taxa como fator (1,02), sem a tecla `%`; arredonde só no fim.
- **Práticas (cerca de 12):**
  - `numero`:
    - simulado Q1: juros R$ 5.250,00 e, em outra prática, montante R$ 40.250,00;
    - simulado Q2: R$ 68.640,00;
    - simulado Q3: 3,00% a.m.;
    - pré-aula 01 Q1: prazo de 4 meses (unidade `""`, casas 0);
    - pré-aula 01 Q4: capital R$ 6.000,00;
    - slides: taxa simples para triplicar o capital em 1 ano, 16,67% a.m.;
    - simulado Q6: R$ 28.701,57 (a lista traz 28.701,80 por arredondamento);
    - simulado Q7: R$ 22.741,22;
    - slides: valor presente 27.500 ÷ 1,017^12 = R$ 22.463,70;
  - `escolha`:
    - lista MatFin Q21 (dívida de 1.000 dobrando por 5 anos: R$ 32.000);
    - "em meio período, qual rende mais?" (simples);
  - `associar`: fórmula ↔ o que ela calcula;
  - `completar`: "taxa e prazo na mesma ___ de tempo" (unidade).
- **Ilustrações:** quadrinho; tabela simples × compostos; `lado_a_lado` "Juros simples" ×
  "Juros compostos"; `fluxo` "taxa e prazo → mesma unidade → fórmula → resultado".
- **Desafio:**
  - **Cena:** Marta precisa de R$ 50.000 por 8 meses. O banco A cobra 2% a.m. em juros simples; o banco
    B, 1,9% a.m. em juros compostos. "O B tem a taxa menor, então é melhor, certo?"
  - **Passos:**
    1. montante no banco A: R$ 58.000,00;
    2. montante no banco B: 50.000 × 1,019^8 = R$ 58.125,07;
    3. qual escolher e por quê: o A, R$ 125,07 mais barato, porque no composto os juros rendem juros.
  - **contas:** `50000*(1+0.02*8)` → 58.000,00 · `50000*1.019**8` → 58.125,07 · `58125.07-58000` → 125,07.

### Aula 02 — Taxas e inflação (30 min)
- **Objetivo:** converter taxas (proporcional, equivalente, nominal), acumular taxas e separar ganho
  real de inflação.
- **Fontes:** `matematica_financeira.md` (3.7–3.11) e `matematica_financeira-exercicios.md`.
- **Abertura:** Marta tem dinheiro parado e duas ofertas: um CDB de 12% ao ano e um fundo de 1% ao mês.
  A inflação esperada é de 5% ao ano.
- **Conceitos:**
  1. Proporcional (juros simples): divide ou multiplica (30% a.a. → 2,5% a.m.; 8% a.t. → 32% a.a.).
  2. Equivalente (compostos): `i_quero = (1 + i_tenho)^(quero ÷ tenho) − 1` (1% a.m. → 12,68% a.a.;
     58% a.a. → 3,89% a.m.). Nunca divida uma taxa composta.
  3. Nominal com capitalização: primeiro divide, depois compõe (24% a.a. capitalizados mensalmente →
     2% a.m. → 26,82% a.a.; 48% a.a. cap. mensal → bimestral 8,16%). Use um `fluxo`.
  4. Taxa acumulada: multiplica os fatores (inflação de 1,2%, 0,95%, 1,7% e 1,4% → 5,35%). Somar é o
     erro clássico.
  5. Efeito Fisher: `(1 + nominal) = (1 + real) × (1 + inflação)`. 14% com inflação de 7% → real
     6,54%, não 7%.
- **Práticas (cerca de 12):**
  - `numero`:
    - simulado Q4: real 5,66%;
    - simulado Q5: nominal 11,24%;
    - simulado Q8: acumulada 7,83%;
    - simulado Q9: 6,03% (a lista traz 6,04%);
    - 30% a.a. → 2,50% a.m. proporcional;
    - 58% a.a. → 3,89% a.m. equivalente;
    - lista MatFin Q33: 21,00% a.a.;
    - lista MatFin Q34: 12,36% a.s.;
    - lista MatFin Q36: 26,82% a.a.;
    - lista MatFin Q37: 14,49% em 2 meses;
    - slides: inflação de 6,67% (real 5% e nominal 12%);
  - `escolha`: lista MatFin Q16 (a maior taxa simples: 7% ao bimestre);
  - `associar`: tipo de taxa ↔ regra (proporcional = divide; equivalente = potência; acumulada =
    multiplica; real = divide os fatores).
- **Ilustrações:** quadrinho; `lado_a_lado` "Proporcional (simples)" × "Equivalente (compostos)";
  `fluxo` da taxa nominal.
- **Desafio:**
  - **Cena:** a da abertura.
  - **Passos:**
    1. taxa anual equivalente do fundo: 12,68%;
    2. taxa real do CDB (6,67%) e do fundo (7,32%);
    3. qual escolher e por quê (o fundo, ~0,65 ponto percentual a mais de ganho real).
  - **contas:** `(1.01**12-1)*100` → 12,68 · `(1.12/1.05-1)*100` → 6,67 · `(1.01**12/1.05-1)*100` → 7,32 ·
    `7.32-6.67` → 0,65.

---

## Parte B — As demonstrações

### Aula 03 — A contabilidade que decide (20 min)
- **Objetivo:** reconhecer os usuários, os regimes, as características da informação, os princípios e
  os elementos do CPC 00.
- **Fontes:** `estrutura_conceitual.md` e `estrutura_conceitual-exercicios.md`.
- **Abertura:** Marta pagou a conta de luz da casa dela com o cartão da loja e quer lançar como receita
  de janeiro uma venda que fez em dezembro, porque só recebe em janeiro.
- **Conceitos:**
  1. O que é contabilidade e para quem: gerencial (usuários internos) × financeira (externos:
     investidores, credores, governo).
  2. Competência (o fato gerador; base da DRE) × caixa (entrou ou saiu dinheiro; base da DFC).
  3. Características qualitativas:
     - fundamentais: relevância, materialidade e fidedignidade (completa, neutra, sem erro);
     - de melhoria: comparabilidade, verificabilidade, tempestividade e compreensibilidade.
     Use uma `arvore`.
  4. Princípios: entidade, continuidade, oportunidade, competência e prudência (menor valor para o
     ativo, maior para o passivo).
  5. Elementos: ativo, passivo, PL (A − P), receita e despesa. Bases de mensuração: custo histórico,
     valor atual, valor justo e valor em uso.
  6. As três demonstrações e as perguntas de cada uma; o lucro da DRE vai para o PL do BP e a DFC
     explica o caixa do BP. Use um `fluxo` ou uma tabela.
- **Práticas (cerca de 9):**
  - `escolha`:
    - pré-aula 02 Q1 (comparabilidade);
    - pré-aula 02 Q2 (baterias da Tesla = ativo);
    - gerencial × financeira;
    - prudência;
    - valor em uso;
  - `multipla`: quais são características fundamentais;
  - `associar`:
    - princípio ↔ situação;
    - demonstração ↔ pergunta;
  - `numero`: receita de dezembro pelo regime de competência numa venda a prazo.
- **Ilustrações:** quadrinho; `arvore` das características; `lado_a_lado` "Competência" × "Caixa".
- **Desafio:**
  - **Cena:** Marta vendeu R$ 20.000 a prazo em dezembro (recebe em janeiro) e pagou R$ 1.500 da luz de
    casa com o cartão da loja.
  - **Passos:**
    1. receita de dezembro pela competência e quanto entrou no caixa em dezembro (R$ 20.000 e R$ 0);
    2. a luz de casa é despesa da loja? (não: princípio da entidade);
    3. o recado para Marta.
  - **contas:** dispensável (os números estão na cena).

### Aula 04 — Balanço patrimonial (25 min)
- **Objetivo:** montar e ler um balanço e dizer o que cada evento faz com o ativo circulante e com o PL.
- **Fontes:** `balanco_patrimonial.md` e `balanco_patrimonial-exercicios.md`.
- **Abertura:** Marta vai pegar um empréstimo, comprar uma van e distribuir lucro, e acha que o
  empréstimo "aumenta o patrimônio".
- **Conceitos:**
  1. Fotografia de uma data. Ativo (aplicações, decisões de investimento) × Passivo + PL (origens,
     decisões de financiamento). Use um `lado_a_lado`.
  2. Ativo: bens e direitos sob **controle**, com benefício futuro (o leasing entra). A marca criada
     internamente não entra; estoque deteriorado e título incobrável saem.
  3. `A = P + PL`; capital de terceiros × capital próprio; PL negativo = passivo a descoberto. Exemplo:
     80 milhões de bens + 50 milhões de direitos − 100 milhões de dívidas = PL de 30 milhões.
  4. Circulante (até 12 meses) × não circulante; ativo por liquidez, passivo por exigibilidade; o ANC
     tem realizável a longo prazo, investimentos, imobilizado e intangível. Use uma `arvore`.
  5. O que mexe no PL: aporte, lucro ou prejuízo, dividendos. Não mexem: empréstimo, compra de ativo,
     pagamento de dívida. Venda de imobilizado à vista: o AC sobe pelo valor **recebido**.
- **Práticas (cerca de 11):**
  - `numero`:
    - simulado Q10: R$ 272.000,00;
    - simulado Q11: R$ 388.000,00;
    - simulado Q12: R$ 202.000,00;
    - simulado Q13: R$ 294.500,00;
    - pré-aula 02 Q5: passivo de R$ 1.700.000,00;
    - pré-aula 02 Q7: ativo de R$ 255.000,00;
    - lista BP Q32: PL de R$ 80.000,00;
  - `associar`: conta ↔ grupo (caixa → AC; máquinas → imobilizado; marca comprada → intangível;
    fornecedores → PC; empréstimo de 3 anos → PNC; capital social → PL);
  - `escolha`:
    - pré-aula 02 Q8;
    - marca criada internamente;
  - `multipla`: eventos que mudam o PL.
- **Ilustrações:** quadrinho; `lado_a_lado` Ativo × Passivo + PL; `arvore` dos grupos; tabela do
  balanço de 130 milhões.
- **Desafio:**
  - **Cena:** PL de R$ 300.000. Marta vai captar R$ 100.000 de empréstimo de longo prazo, comprar uma van
    de R$ 80.000 à vista e distribuir R$ 20.000 de dividendos.
  - **Passos:**
    1. o empréstimo muda o PL? (não: ativo +100 mil, passivo +100 mil);
    2. a van muda o ativo total? (não: sai caixa do AC, entra imobilizado no ANC);
    3. novo PL: R$ 280.000;
    4. o recado.
  - **contas:** `300000-20000` → 280.000.

### Aula 05 — DRE: do faturamento ao lucro (30 min)
- **Objetivo:** montar a DRE da receita bruta ao lucro líquido e calcular cada lucro e o EBITDA.
- **Fontes:** `dre.md` e `dre-exercicios.md`.
- **Atenção:** **não** use o exemplo de R$ 100.000 / 68.000 dos slides para o lucro operacional (a soma do
  material está errada: dá 17.600, não 17.000).
- **Abertura:** Marta faturou R$ 200 mil no mês e quer saber quanto sobrou de verdade.
- **Conceitos:**
  1. DRE = desempenho do período, em regime de competência; a escada. Use um `fluxo`.
  2. Receita bruta → deduções (impostos sobre vendas, devoluções, abatimentos, descontos
     incondicionais) → receita líquida. ICMS e IPI na nota: 66.000 + IPI de 33.000 = receita bruta de
     99.000; − ICMS de 11.880 − IPI de 33.000 = receita líquida de 54.120.
  3. CPV/CMV → lucro bruto. Despesas de vendas e administrativas, depreciação e amortização → lucro
     operacional (EBIT). EBITDA = EBIT + depreciação + amortização.
  4. Resultado financeiro (não operacional) → LAIR → IR e CSLL (34% combinado) → lucro líquido. O
     LALUR: lucro real = LAIR + adições − exclusões (10.200 + 200 − 400 = 10.000).
  5. O lucro vai para o PL (lucros acumulados); dividendos saem do PL. Mostre a `cascata` da Comercial
     Alfa (pré-aula 03 Q10): receita bruta 500.000; devoluções −20.000; impostos −60.000; CMV −250.000;
     despesas de vendas −35.000; administrativas −45.000; outras receitas operacionais +5.000;
     resultado financeiro −10.000; IR e CSLL −25.000; lucro líquido 60.000.
- **Práticas (cerca de 12):**
  - `numero`:
    - simulado Q14: lucro bruto 130.000,00; lucro operacional 65.000,00; LAIR 57.000,00;
    - simulado Q15: receita líquida 384.000,00; LAIR 77.000,00;
    - simulado Q16: lucro líquido original 59.400,00 e corrigido 54.120,00;
    - receita líquida da nota com ICMS/IPI: 54.120,00;
    - EBITDA inédito;
    - lucro real do LALUR: 10.000,00;
  - `ordenar`: a escada (até 7 itens);
  - `associar`: despesa ↔ operacional / não operacional (pré-aula 03 Q7);
  - `escolha`: pré-aula 03 Q3 (definições de lucro bruto, operacional e líquido).
- **Ilustrações:** quadrinho; `fluxo` da escada; `cascata` da Comercial Alfa; tabela da nota com
  ICMS/IPI.
- **Desafio:**
  - **Cena:** a loja de Marta no mês: receita bruta 200.000; impostos sobre vendas 30.000; devoluções
    10.000; CMV 90.000; despesas operacionais 40.000 (das quais 5.000 de depreciação); despesas
    financeiras 8.000; IR e CSLL de 34%.
  - **Passos:**
    1. receita líquida (160.000) e lucro bruto (70.000);
    2. EBIT (30.000) e EBITDA (35.000);
    3. LAIR (22.000), IR e CSLL (7.480) e lucro líquido (14.520);
    4. o recado.
  - **contas:** cada um desses números.

### Aula 06 — Lucro não é caixa (DFC) (35 min)
- **Objetivo:** classificar transações nas três atividades e calcular o caixa operacional pelo método
  direto. O método indireto não cai na prova (retorno do Theo): fica fora do curso.
- **Fontes:** `fluxo_de_caixa.md` e `fluxo_de_caixa-exercicios.md`.
- **Abertura:** Marta lucrou R$ 60 mil no ano, mas o caixa só subiu R$ 5 mil. "Cadê o dinheiro?"
- **Conceitos:**
  1. Competência × caixa na prática: o exercício jan/fev dos slides, em tabela (lucro acumulado 4.500 =
     caixa acumulado 4.500, em tempos diferentes).
  2. A DFC: saldo inicial + FCO + FCI + FCF = saldo final (o caixa do BP). Use um `fluxo`.
  3. As três atividades e a tabela de classificação. Convenções do curso: juros recebidos de
     aplicação = operacional; dividendos pagos = financiamento; venda de imobilizado = investimento.
  4. O que não mexe no caixa: depreciação, amortização, provisões, venda a prazo ainda não recebida,
     compra a prazo ainda não paga.
  5. Método direto: FCO = recebimentos operacionais − pagamentos operacionais.
  6. Qualidade do lucro: operacional, recorrente, sem eventos únicos. A tabela dos cenários de recessão
     (slides p.19–20) mostra a empresa saudável × a que vende ativo e toma dívida.
- **Práticas (cerca de 13):**
  - `associar`:
    - simulado Q17;
    - simulado Q18;
  - `numero`:
    - simulado Q20: lucro 3.600,00 e caixa −7.680,00;
    - simulado Q21: lucro 9.000,00 e caixa 7.500,00;
    - pré-aula 04 Q7: FCO 100.000,00;
    - pré-aula 04 Q9: saldo final 55.900,00;
    - pré-aula 04 Q10: operacional 17.500,00;
  - `escolha`: pré-aula 04 Q3, Q5 e Q6;
  - `multipla`: pré-aula 04 Q8.
- **Ilustrações:** quadrinho; tabela jan/fev; `fluxo` da DFC; tabela dos
  cenários.
- **Desafio:**
  - **Cena:** lucro líquido 60.000 (vendas 300.000; custo das mercadorias vendidas 180.000; salários
    40.000; impostos 10.000; depreciação 10.000). Caixa: recebidos de clientes 265.000; pagos a
    fornecedores 190.000; equipamento 30.000 à vista; empréstimo captado 20.000; dividendos pagos 10.000.
  - **Passos:**
    1. FCO pelo método direto (25.000);
    2. FCI (−30.000);
    3. FCF (+10.000);
    4. o recado: 35.000 de vendas ainda a receber, 10.000 pagos viraram estoque, equipamento e dividendos.
  - **contas:** `265000-190000-40000-10000` → 25.000 · `20000-10000` → 10.000 · `25000-30000+10000` → 5.000 ·
    `300000-265000` → 35.000 · `190000-180000` → 10.000.

---

## Parte C — Análise das demonstrações

### Aula 07 — Análise vertical e horizontal (20 min)
- **Objetivo:** calcular AV, AH e variação monetária e dizer de onde veio o lucro.
- **Fontes:** `analise_vertical_horizontal.md` e `analise_vertical_horizontal-exercicios.md`.
- **Abertura:** Marta vendeu 20% mais e o lucro caiu pela metade.
- **Conceitos:**
  1. AV = conta ÷ base × 100 (base: ativo total no BP, receita líquida na DRE). Apple: caixa de 54,7
     sobre ativo de 359,2 = 15,23%.
  2. AH = (atual ÷ anterior − 1) × 100. A queda leva sinal: caixa da Apple de 65,2 para 54,7 = −16,10%.
     Variação monetária = atual − anterior, em R$.
  3. Como ler: AV do CMV igual nos dois anos = custo cresceu na mesma proporção da receita; despesas
     crescendo menos que a receita = ganho de eficiência.
  4. Origem do lucro (operacional, não operacional, financeira, fiscal) e evolução das margens. Mostre
     o `grafico` das AH do hands-on X → X+1: receita líquida +20,00; lucro bruto +10,30; EBIT −34,43;
     lucro líquido −50,53.
  5. Documentos de empresa aberta: DFP (anual, auditada), ITR (trimestral), release e apresentação
     institucional.
- **Práticas (cerca de 10):**
  - `numero`:
    - simulado Q22: 15,00%;
    - simulado Q23: 30,00%;
    - Apple AV 15,23% e AH −16,10% (resposta negativa);
    - variação monetária de estoques, de 5.500 para 7.500: R$ 2.000,00;
    - pré-aula 05: AV do imobilizado 50,50%; AH do caixa 194,15%; margem bruta 2025 46,20%;
  - `escolha`:
    - simulado Q24 (AV do CMV ficou igual: 60% e 60%);
    - origem de um lucro vindo da venda de um imóvel (não operacional);
  - `associar`: documento ↔ descrição.
- **Ilustrações:** quadrinho; `grafico` com barras negativas; tabela X × X+1.
- **Desafio:**
  - **Cena:** a DRE de X e X+1 (hands-on, em tabela): receita líquida 76.230 → 91.476; CPV 35.000 →
    46.000; lucro bruto 41.230 → 45.476; despesas operacionais 10.000 → 15.000; depreciação 0 → 10.000;
    EBIT 31.230 → 20.476; juros 5.000 → 7.500; lucro líquido 17.311,80 → 8.564,16.
  - **Passos:**
    1. AH da receita líquida (+20,00%) e do lucro líquido (−50,53%);
    2. AH do CPV (+31,43%) e a margem bruta (54,09% → 49,71%);
    3. o que mais pesou abaixo do lucro bruto (depreciação nova, despesas +50%, juros +50%);
    4. o recado.
  - **contas:** cada percentual.

### Aula 08 — Rentabilidade e margens (20 min)
Versão de 1 h para as três últimas aulas: margem bruta, operacional e EBITDA viraram um só conceito; saíram
a comparação das margens e a prática do ROA da Rio Verde; o desafio tem 3 passos (alta do ROE e recado juntos).
DuPont (giro e alavancagem) não cai na prova (retorno do Theo); saíram os cartões de giro, alavancagem e
DuPont e a pergunta conceitual sobre rentabilidade.
- **Objetivo:** calcular margens, ROA e ROE e explicar o que cada um mostra.
- **Fontes:** `rentabilidade.md` e `rentabilidade-exercicios.md`.
- **Abertura:** o ROE da loja subiu de 15% para 22% e Marta quer comemorar.
- **Conceitos:**
  1. Rentabilidade = ganho ÷ investimento (30 mil sobre 200 mil = 15%).
  2. Margens bruta, operacional, EBITDA e líquida, todas sobre a receita líquida. Julgue no tempo,
     contra o setor e contra a inflação.
  3. ROA = LL ÷ AT; ROE = LL ÷ PL.
- **Práticas:** simulado Q28 (12,00%) e Q29 (20,00%); rentabilidade 15,00%; Rio Verde: ROA 6,96% e
  ROE 13,18%; `escolha` da pré-aula 06 (margem EBITDA, fórmula do ROA).
- **Ilustrações:** quadrinho; tabela das fazendas; `grafico` das margens.
- **Desafio:**
  - **Cena:** ano 1: LL 60.000, RL 600.000, AT 500.000, PL 400.000. Ano 2: LL 66.000, RL 660.000,
    AT 600.000, PL 300.000 (Marta pegou empréstimo).
  - **Passos:**
    1. ROE de cada ano (15,00% e 22,00%);
    2. margem líquida (10% e 10%) e ROA (12,00% e 11,00%) de cada ano;
    3. o que explica a alta (a margem não mudou e o ROA caiu; o PL caiu, com mais dívida);
    4. o recado.
  - **contas:** cada indicador.

### Aula 09 — Liquidez (15 min)
Versão de 1 h: saíram a segunda prática de LC e o cartão das referências; o desafio tem 2 passos (LC e LS;
o que a LS revela e o recado), sem a liquidez imediata, que fica na prática.
Endividamento e solvência não caem na prova (retorno do Theo); saíram os cartões de EG, SG, PCT,
composição, cobertura de juros, imobilização do PL e alavancagem.
- **Objetivo:** calcular e interpretar a liquidez corrente, seca e imediata.
- **Fontes:** `indicadores_estrutura_liquidez.md` e `indicadores_estrutura_liquidez-exercicios.md`.
- **Abertura:** o banco pediu os índices da loja antes de aprovar o empréstimo.
- **Conceitos:** liquidez corrente (AC ÷ PC), seca ((AC − estoques) ÷ PC) e imediata ((caixa +
  aplicações) ÷ PC). Quanto maior, menor o risco.
- **Práticas:** simulado Q25 e Q26; pré-aula 07 (LC 2,00; LS 1,38; LI 0,25); `associar` liquidez ↔ fórmula.
- **Ilustrações:** quadrinho; tabela das referências de liquidez.
- **Desafio:**
  - **Cena:** AC 240.000 (estoques 100.000; caixa e aplicações 30.000); PC 200.000.
  - **Passos:**
    1. LC (1,20) e LS (0,70);
    2. o que a LS abaixo de 1 quer dizer;
    3. liquidez imediata (0,15);
    4. o recado.
  - **contas:** cada índice.

### Aula 10 — fora do curso
Capital de giro e ciclos não cai na prova (retorno do Theo). A aula saiu da trilha e fica em
`fora-do-curso/aula-10.js`, só como registro; o verificador recusa o tema nas aulas.

---

## Parte D — Tributos e simulado

### Aula 11 — Tributos e regimes (25 min)
Versão de 1 h: saíram espécies e esferas de tributos, Simples (alíquota efetiva), elisão e reforma com
suas práticas; elisão e reforma ficam só no resumo.
Para caber nas 2 h antes da prova, saíram três práticas repetidas: a base da transportadora (Q6), a Q31 e as
duas partes de cálculo da Q32 (a `escolha` da Q32 e o desafio cobrem a comparação).
- **Objetivo:** calcular IRPJ e CSLL no Lucro Presumido e no Lucro Real e escolher o regime.
- **Fontes:** `tributacao.md` e `tributacao-exercicios.md`.
- **Abertura:** o contador perguntou a Marta se a loja fica no Lucro Presumido ou passa para o Real.
- **Conceitos:**
  1. Tributo (CTN art. 3º) e espécies: imposto, taxa e contribuição de melhoria. Esferas: federal
     (IRPJ, CSLL, PIS, COFINS, IPI), estadual (ICMS) e municipal (ISS).
  2. Na DRE: tributos sobre o faturamento são deduções; IR e CSLL vêm depois do LAIR.
  3. Regimes: MEI (até R$ 81 mil; DAS fixo de R$ 80,90), Simples (até R$ 4,8 mi; alíquota efetiva =
     (RBT12 × nominal − parcela) ÷ RBT12 = 5,65%), Presumido (até R$ 78 mi) e Real. Use uma `arvore`.
  4. Lucro Presumido: base = receita × presunção (8% comércio, 16% transporte de passageiros, 32%
     serviços); IRPJ 15% + adicional de 10% sobre a base acima de R$ 20 mil/mês; CSLL 9%; PIS 0,65% e
     COFINS 3%. Exemplo de TI: 200.000 → base 64.000 → R$ 33.060 de tributos.
  5. Lucro Real: IR e CSLL sobre o lucro real (LALUR); PIS 1,65% e COFINS 7,6% com crédito; nas listas,
     "34% combinado". Regra de escolha: margem real abaixo da presumida → o Real tende a compensar.
  6. Elisão (legal) × sonegação (crime); reforma: CBS no lugar de PIS e COFINS, IBS no lugar de ICMS e
     ISS, IS; 2026 teste, 2027 CBS plena, 2033 fim de ICMS e ISS.
- **Práticas (cerca de 13):**
  - `numero`:
    - simulado Q30: 40.800,00;
    - simulado Q31: 14.400,00;
    - simulado Q32: 27.200,00 e 6.000,00;
    - pré-aula 09 Q2: carga de 1,80%;
    - pré-aula 09 Q3: base 12.000,00;
    - pré-aula 09 Q4: IRPJ total 7.600,00 e CSLL 3.456,00;
    - pré-aula 09 Q6: 16.000,00;
    - Simples: alíquota efetiva 5,65%;
  - `escolha`:
    - qual regime na Q32 (Presumido);
    - imposto × taxa × contribuição de melhoria;
    - elisão × sonegação;
  - `associar`:
    - tributo ↔ esfera;
    - novo tributo da reforma ↔ o que substitui.
- **Ilustrações:** quadrinho; `arvore` dos regimes; `lado_a_lado` "Elisão (legal)" × "Sonegação";
  tabela Presumido × Real da Bella Café.
- **Desafio:**
  - **Cena:** a loja (comércio) faturou R$ 1.200.000 no ano e teve LAIR de R$ 30.000.
  - **Passos:**
    1. IR + CSLL no Real (34%: R$ 10.200);
    2. IRPJ no Presumido (8% e 15%: R$ 14.400);
    3. qual regime e por quê (o Real: margem de 2,5% abaixo dos 8% presumidos).
  - **contas:** `30000*0.34` → 10.200 · `1200000*0.08*0.15` → 14.400 · `30000/1200000*100` → 2,5.

### Aula 12 — Simulado final (66 min)
- **Objetivo:** fazer, num só bloco, questões de todos os temas no estilo da prova e saber o que revisar.
- **Fontes:** `revisao_geral-exercicios.md`: Simulado B (B1 a B32) e Simulado D (conceituais), com os
  gabaritos; o caso integrado vem do Simulado C.
- **Abertura:** Marta deseja boa sorte ("hoje quem tem prova é você") e lembra de levar a calculadora.
- **Conceitos (2):**
  1. Como fazer: uma questão por vez, conta no papel, calculadora científica; a nota é **acertos de
     primeira ÷ total × 10**, na tela final; os erros voltam no fim.
  2. As 10 armadilhas que mais derrubam ponto (a seção 7 de `revisao_geral.md`), em lista curta.
- **Práticas (cerca de 36):**
  - B1 a B32, na ordem e com os mesmos números do Simulado B. Quando a questão pede mais de um valor,
    escolha o principal ou divida em duas práticas;
  - B1 a B32 sem a B27 (giro do ativo); conceituais do Simulado D, menos as de capital de giro (D18 e D20)
    e a de endividamento (D14), que não caem;
  - na `explicacao` de cada uma, diga a aula para rever ("Reveja a aula 02").
- **Desafio:**
  - **Tabela:** caso Comercial Horizonte (Simulado C), reduzido a uma tabela com o BP e a DRE de 20X1 e
    20X2.
  - **Passos:**
    1. lucro líquido de 20X2 (59,4 mil);
    2. ROE dos dois anos (17,33% → 13,50%) e o que puxou a queda (a margem);
    3. liquidez corrente (1,75 → 1,48) e seca (1,13 → 0,87): clientes e estoques cresceram com
       empréstimo de curto prazo;
    4. o recado a Marta.
  - **contas:** cada número.
- **Resumo:** como transformar o placar em plano: o que revisar por tema, com o número da aula.
