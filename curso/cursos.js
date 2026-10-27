// The courses that share this platform. The URL picks one (index.html?curso=people); the first
// one is the default. Each course has its own lessons folder (with indice.js and aula-NN.js) and its
// own progress key, so XP, streaks and progress never mix.
window.CURSOS = [
  { id: "contabilidade", titulo: "Contabilidade Gerencial em 1 dia", resumo: "Matemática financeira, demonstrações, indicadores, capital de giro e tributos, com exercícios no estilo da prova e um simulado final.", marca: "R$", pasta: "contabilidade/aulas/", progresso: "progresso-contabilidade" },
  { id: "people", titulo: "People Skills para a AV1", resumo: "Autoconhecimento, valores, motivação, perfis, as 3 perguntas do cérebro e effectuation, com as questões do simulado e a sua folha de consulta.", marca: "Ψ", pasta: "people/aulas/", progresso: "progresso-people" }
];
