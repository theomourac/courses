// Índice do curso "Contabilidade Gerencial em 1 dia". As aulas ficam em aula-NN.js, nesta pasta.
// pronta: true só depois que a aula NN passa no verificador (curso/tools/check_aula_ctb.py) e na revisão.
// A aula 10 (capital de giro) saiu da trilha: o tema não cai na prova. Ela fica em ../fora-do-curso/.
window.CURSO = {
  titulo: "Contabilidade Gerencial em 1 dia",
  subtitulo: "Tudo o que cai na AV1, com exercícios no estilo da prova e um simulado no fim.",
  partes: [
    { id: "A", nome: "Matemática financeira" },
    { id: "B", nome: "As demonstrações" },
    { id: "C", nome: "Análise das demonstrações" },
    { id: "D", nome: "Tributos e simulado" }
  ],
  aulas: [
    { n: "01", parte: "A", titulo: "Juros simples e compostos", resumo: "Capital, juros, montante e valor presente, com a conta feita na calculadora científica.", pronta: true },
    { n: "02", parte: "A", titulo: "Taxas e inflação", resumo: "Taxa proporcional, equivalente, nominal, acumulada e a taxa real pelo Efeito Fisher.", pronta: true },
    { n: "03", parte: "B", titulo: "A contabilidade que decide", resumo: "CPC 00: usuários, competência e caixa, características da informação, princípios e elementos.", pronta: true },
    { n: "04", parte: "B", titulo: "Balanço patrimonial", resumo: "Ativo, passivo e PL, circulante e não circulante, e o que mexe ou não no patrimônio.", pronta: true },
    { n: "05", parte: "B", titulo: "DRE: do faturamento ao lucro", resumo: "A escada da DRE, deduções, EBIT, EBITDA, LAIR, IR e CSLL e o lucro líquido.", pronta: true },
    { n: "06", parte: "B", titulo: "Lucro não é caixa", resumo: "DFC: as três atividades, o que não mexe no caixa e o método direto.", pronta: true },
    { n: "07", parte: "C", titulo: "Análise vertical e horizontal", resumo: "Quanto cada conta pesa, quanto cresceu e de onde veio o lucro.", pronta: true },
    { n: "08", parte: "C", titulo: "Rentabilidade e margens", resumo: "Margens, ROA e ROE: quanto sobra de cada venda e quanto rendem o negócio e o sócio.", pronta: true },
    { n: "09", parte: "C", titulo: "Liquidez", resumo: "Capacidade de pagar no curto prazo: liquidez corrente, seca e imediata.", pronta: true },
    { n: "11", parte: "D", titulo: "Tributos e regimes", resumo: "Impostos, MEI, Simples, Lucro Presumido, Lucro Real e qual regime compensa.", pronta: true },
    { n: "12", parte: "D", titulo: "Simulado final", resumo: "Questões no estilo da prova, de todos os temas, e o que revisar antes da AV1.", pronta: true }
  ]
};
