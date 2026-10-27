window.CursoApp.ready(function () {
  'use strict';
  var C = window.CursoApp, data = C.state(), course = window.CURSO;
  document.querySelector('.brand-mark').textContent = C.curso.marca;
  document.getElementById('brand-title').textContent = C.curso.titulo;
  document.getElementById('course-title').textContent = course.titulo || C.curso.titulo;
  document.getElementById('course-subtitle').textContent = course.subtitulo || C.curso.resumo;
  document.getElementById('course-picker').innerHTML = C.cursos.map(function (c) {
    var active = c.id === C.curso.id;
    return '<a class="course-choice' + (active ? ' is-current' : '') + '" href="' + C.esc(C.link('index.html', undefined, c.id)) + '"' + (active ? ' aria-current="page"' : '') + '><span class="course-symbol" aria-hidden="true">' + C.esc(c.marca) + '</span><span><small>' + (active ? 'CURSO ATUAL' : 'EXPLORAR CURSO') + '</small><strong>' + C.esc(c.titulo) + '</strong></span></a>';
  }).join('');
  function render() {
    var xp = Object.values(data.lessons).reduce(function (sum, lesson) { return sum + (lesson.xp || 0); }, 0);
    var today = data.days.indexOf(C.day(new Date())) >= 0, days = C.streak(data.days);
    document.getElementById('stats').innerHTML = '<div><span class="stat-symbol" aria-hidden="true">↗</span><strong>' + days + ' <small>' + (days === 1 ? 'dia' : 'dias') + '</small></strong><span>de sequência</span></div><div><span class="stat-symbol" aria-hidden="true">✦</span><strong>' + xp + ' <small>XP</small></strong><span>conquistados</span></div><div><span class="stat-symbol" aria-hidden="true">' + (today ? '✓' : '◎') + '</span><strong>' + (today ? '1' : '0') + '<small> / 1 aula</small></strong><span>meta do dia</span></div>';
    var next = course.aulas.find(function (a) { return C.unlocked(a.n, data) && !(data.lessons[a.n] || {}).completed; });
    var demo = data.lessons['00'] || {}, resume = document.getElementById('resume');
    if (next) resume.innerHTML = '<div><p class="eyebrow">' + (data.lessons[next.n] ? 'CONTINUE DE ONDE PAROU' : 'SEU PRÓXIMO PASSO') + '</p><h2>' + C.esc(next.titulo) + '</h2></div><a class="button primary" href="' + C.link('aula.html', next.n) + '">' + (data.lessons[next.n] ? 'Continuar aula' : 'Começar aula') + ' <span aria-hidden="true">→</span></a>';
    else if (course.aulas.every(function (a) { return a.pronta && (data.lessons[a.n] || {}).completed; })) resume.innerHTML = '<p class="eyebrow">TRILHA CONCLUÍDA</p><h2>Agora, o próximo passo é seu.</h2><p>Você concluiu ' + C.esc(course.titulo || C.curso.titulo) + '. Consulte seus resultados nas aulas abaixo.</p>';
    else resume.innerHTML = '<div><p class="eyebrow">EXPERIMENTE O FORMATO</p><h2>Uma comparação, vários aprendizados.</h2><p>A trilha está sendo preparada. Na aula de demonstração, você já pode praticar todos os formatos.</p></div><a class="button primary" href="' + C.link('aula.html', '00') + '">' + (demo.completed ? 'Ver resultado da demonstração' : demo.queue ? 'Continuar demonstração' : 'Experimentar uma aula') + '<span aria-hidden="true">→</span></a>';
    document.getElementById('unlock').checked = !!data.unlock;
    document.getElementById('trail').innerHTML = course.partes.map(function (part, p) {
      var lessons = course.aulas.filter(function (a) { return a.parte === part.id; });
      var complete = lessons.filter(function (a) { return (data.lessons[a.n] || {}).completed; }).length;
      return '<section class="unit"><div class="unit-heading"><span class="unit-number">0' + (p + 1) + '</span><div><h3>' + C.esc(part.nome) + '</h3><p>' + complete + ' de ' + lessons.length + ' aulas concluídas</p></div></div><ol class="path">' + lessons.map(function (a) {
        var progress = data.lessons[a.n] || {}, can = C.unlocked(a.n, data);
        var status = !a.pronta ? 'Em breve' : progress.completed ? 'Concluída' : !can ? 'Bloqueada' : progress.queue ? 'Em andamento' : 'Disponível';
        var kind = !a.pronta || !can ? 'locked' : progress.completed ? 'done' : 'ready';
        var inner = '<span class="node" aria-hidden="true">' + (progress.completed && a.pronta ? '✓' : a.n) + '</span><span class="lesson-text"><span class="lesson-status">' + status + '</span><strong>' + C.esc(a.titulo) + '</strong><span class="lesson-summary">' + C.esc(a.resumo) + '</span></span>';
        return '<li class="path-item ' + kind + '">' + (can ? '<a href="' + C.link('aula.html', a.n) + '" class="lesson-link">' + inner + '</a>' : '<div class="lesson-link" aria-disabled="true">' + inner + '</div>') + '</li>';
      }).join('') + '</ol></section>';
    }).join('');
  }
  document.getElementById('unlock').addEventListener('change', function (event) { data.unlock = event.target.checked; C.write('progresso', data); render(); });
  render();
});
