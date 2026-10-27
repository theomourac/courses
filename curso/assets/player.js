window.CursoApp.ready(function () {
  'use strict';
  var C = window.CursoApp, I = window.CursoIlustracoes, Code = window.CursoCodigo, data = C.state(), main = document.getElementById('player'), actions = document.getElementById('actions');
  var n = new URLSearchParams(location.search).get('aula') || '00', lesson, s, reviewing = false, grader = false, grading = false, lastTick = Date.now(), wasVisible = !document.hidden;
  function error(title, message) {
    main.innerHTML = '<section class="card"><p class="eyebrow">UM PASSO ATRÁS</p><h1>' + C.esc(title) + '</h1><p>' + C.esc(message) + '</p><a class="button primary" href="' + C.link('index.html') + '">Voltar à trilha</a></section>';
    actions.innerHTML = ''; document.getElementById('progress-label').textContent = 'Aula indisponível';
  }
  if (!/^\d{2}$/.test(n)) { error('Não encontramos essa aula.', 'Escolha uma aula na trilha para continuar.'); return; }
  var entry = window.CURSO.aulas.find(function (a) { return a.n === n; });
  if (n !== '00' && (!entry || !entry.pronta || !C.unlocked(n, data))) {
    error(entry && !entry.pronta ? 'Esta aula está em preparação.' : 'Esta aula ainda não está liberada.', 'Volte à trilha para ver seu próximo passo. Você também pode usar “Liberar todas” para pular entre as aulas prontas.'); return;
  }
  var script = document.createElement('script'); script.src = C.curso.pasta + 'aula-' + n + '.js';
  script.onerror = function () { error('Não foi possível abrir a aula.', 'Confira se a pasta aulas está junto dos arquivos da plataforma.'); };
  script.onload = function () {
    lesson = (window.CURSO_AULAS || {})[n];
    if (!lesson || !Array.isArray(lesson.cartoes) || !lesson.cartoes.length) { error('Esta aula precisa de um ajuste.', 'O arquivo não contém os cartões esperados.'); return; }
    document.title = lesson.titulo + ' · ' + C.curso.titulo;
    s = data.lessons[n];
    if (!s || !Array.isArray(s.queue) || !s.answers) s = data.lessons[n] = {queue:lesson.cartoes.map(function (_, i) { return i; }), pos:0, answers:{}, xp:0, seconds:0, completed:false, removidos:(lesson.cartoes_removidos || []).length || undefined};
    migrate();
    document.getElementById('lesson-label').textContent = (n === '00' ? 'Demonstração' : 'Aula ' + n);
    save(); render();
    // Automatic grading of open answers: available when the course runs on curso/tools/servidor.py.
    if (C.api && window.fetch) fetch(C.api + 'saude').then(function (r) { return r.ok ? r.json() : null; }).then(function (j) { grader = !!(j && j.ok); if (grader && s && !s.completed && current().tipo === 'desafio') { if (answer().iaErro) render(false); else renderActions(); } }).catch(function () {});
  };
  document.head.appendChild(script);
  function tick() { var now = Date.now(); if (s && !s.completed && wasVisible) s.seconds += Math.min(60, (now - lastTick) / 1000); lastTick = now; wasVisible = !document.hidden; }
  function save() { tick(); C.write('progresso', data); }
  // A lesson that lost cards lists, per edit, the positions removed ("cartoes_removidos", counted in the card
  // list before that edit). Progress saved before an edit moves to the new positions, keeping the learner on
  // the same card, instead of pointing at other cards or past the end.
  function migrate() {
    var edits = lesson.cartoes_removidos || [];
    edits.slice(s.removidos || 0).forEach(function (gone) {
      function to(i) { i = +i; return gone.indexOf(i) >= 0 ? -1 : i - gone.filter(function (g) { return g < i; }).length; }
      function byCard(o) { var out = {}; Object.keys(o).forEach(function (k) { if (to(k) >= 0) out[to(k)] = o[k]; }); return out; }
      var queue = [], pos = -1;
      s.queue.forEach(function (i, j) { if (j === s.pos) pos = queue.length; if (to(i) >= 0) queue.push(to(i)); });
      s.queue = queue; s.pos = pos < 0 ? queue.length : pos;
      ['answers', 'chat', 'codes'].forEach(function (k) { if (s[k]) s[k] = byCard(s[k]); });
    });
    if (edits.length) s.removidos = edits.length;
  }
  document.addEventListener('visibilitychange', function () { save(); lastTick = Date.now(); });
  window.addEventListener('pagehide', save);
  setInterval(function () { if (s && !s.completed) save(); }, 15000);
  function shuffled(length) {
    var arr = Array.from({length:length}, function (_, i) { return i; });
    for (var i = length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
    if (length > 1 && arr.every(function (v, k) { return v === k; })) arr.push(arr.shift());
    return arr;
  }
  function current() { return lesson.cartoes[s.queue[s.pos]]; }
  function answer() {
    if (current().exercicio && current().exercicio.tipo === 'codigo') {
      if (!s.codes) s.codes = {};
      var cardId = s.queue[s.pos];
      if (!s.codes[cardId]) s.codes[cardId] = {};
      return s.codes[cardId];
    }
    var id = s.pos; // per position: the first 'cartoes.length' positions are the cards themselves
    if (!s.answers[id]) s.answers[id] = {attempts:0, selected:[], text:'', pairs:{}, order:[]};
    return s.answers[id];
  }
  function table(id) {
    var t = (lesson.tabelas || {})[id]; if (!t) return '';
    return '<div class="table-wrap" tabindex="0" role="region" aria-label="' + C.esc(t.titulo) + '"><table><caption>' + C.esc(t.titulo) + '</caption><thead><tr>' + t.colunas.map(function (v, i) { return '<th scope="col" class="' + ((t.numericas || []).indexOf(i) >= 0 ? 'numeric' : '') + '">' + C.esc(v) + '</th>'; }).join('') + '</tr></thead><tbody>' + t.linhas.map(function (row) { return '<tr>' + row.map(function (v, i) { return '<td class="' + ((t.numericas || []).indexOf(i) >= 0 ? 'numeric' : '') + '">' + C.esc(v) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }
  function render(focus) {
    if (s.completed && !reviewing) { completion(); return; }
    if (s.pos >= s.queue.length) { if (s.completed) { reviewing = false; completion(); } else finish(); return; }
    var card = current(), a = answer(), e = card.exercicio, retry = s.pos >= lesson.cartoes.length;
    document.getElementById('progress').value = Math.round(s.pos / s.queue.length * 100);
    document.getElementById('progress-label').textContent = (s.pos + 1) + ' de ' + s.queue.length;
    var labels = {abertura:'Seu ponto de partida',conceito:'Entenda o método',pratica:'Sua vez de praticar',agente:'Do método ao agente',desafio:'Leve para a prática',resumo:'Guarde o essencial'};
    var html = '<section class="card ' + (card.tipo === 'agente' ? 'agent-card' : '') + '"><p class="eyebrow">' + (retry ? 'VAMOS REVISAR · ' : '') + labels[card.tipo] + '</p>';
    var title = card.titulo || (card.tipo === 'resumo' ? 'Você já sabe o que observar.' : e ? e.enunciado : lesson.titulo);
    html += '<h1 tabindex="-1" id="card-title"' + (title.length > 70 ? ' class="long-title"' : '') + '>' + C.inline(title) + '</h1>';
    html += I.comic(card.quadrinho, lesson.parte);
    if (card.tipo === 'abertura') html += '<p class="lesson-duration">Aula ' + n + ' <span aria-hidden="true">·</span> Cerca de ' + C.esc(lesson.minutos) + ' minutos</p>';
    html += C.rich(card.texto) + Code.snippet(card);
    html += window.CursoDiagramas.render(card.diagrama, lesson.tabelas);
    var graph = I.chart(card.grafico, lesson.tabelas), tableIds = [];
    if (graph) html += graph;
    [card.grafico && card.grafico.tabela, card.tabela, card.tipo === 'desafio' && e.tabela].forEach(function (id) { if (id && tableIds.indexOf(id) < 0) tableIds.push(id); });
    if (graph) html += '<details class="chart-table"><summary>Ver a tabela</summary>' + tableIds.map(table).join('') + '</details>';
    else if (card.tabela || (card.grafico && card.grafico.tabela)) html += table(card.tabela || card.grafico.tabela);
    if (card.exemplo) html += '<aside class="callout"><strong>' + (C.curso.id === 'agente' ? 'Na loja' : 'Na prática') + '</strong>' + C.rich(card.exemplo) + '</aside>';
    if (card.atencao) html += '<aside class="callout attention"><strong>Atenção ao detalhe</strong>' + C.rich(card.atencao) + '</aside>';
    if (card.arquivos) html += '<div class="file-list"><p class="eyebrow">ONDE A REGRA VIVE</p>' + card.arquivos.map(function (path) { return '<div><span aria-hidden="true">↳</span> <code>' + C.esc(path) + '</code></div>'; }).join('') + '</div>';
    if (e && e.tipo === 'codigo') html += (card.titulo ? C.rich(e.enunciado) : '') + Code.render(e, a);
    else if (card.tipo === 'pratica') html += (card.titulo ? C.rich(e.enunciado) : '') + Code.snippet(e) + exercise(e, a);
    if (card.tipo === 'desafio' && e.tipo !== 'codigo') {
      html += Code.snippet(e);
      html += I.scene(e.cena);
      var challengeTable = graph || e.tabela === card.tabela ? '' : table(e.tabela);
      if (e.passos) {
        html += challengeTable + '<ol class="challenge-steps">' + e.passos.map(function (st, i) {
          return '<li class="challenge-step"><p class="step-label">Passo ' + (i + 1) + ' de ' + e.passos.length + '</p><label class="field-label" for="step-' + i + '">' + C.inline(st.pergunta) + '</label>' + (st.comeco ? '<p class="step-start">Um jeito de começar: <em>' + C.inline(st.comeco) + '</em></p>' : '') + '<textarea id="step-' + i + '" class="step-answer" data-step="' + i + '" rows="3" placeholder="Escreva com suas palavras."' + (a.revealed || grading ? ' readonly' : '') + '>' + C.esc((a.texts || [])[i] || '') + '</textarea>' + stepFeedback(a, i) + '</li>';
        }).join('') + '</ol><p class="input-help">Responda cada passo com pelo menos uma frase curta. Tudo fica salvo enquanto você escreve.</p>';
      } else html += challengeTable + '<label class="field-label" for="free-answer">Sua resposta</label><textarea id="free-answer" rows="5" placeholder="Escreva seu raciocínio em pelo menos uma frase." ' + (a.revealed ? 'readonly' : '') + '>' + C.esc(a.text) + '</textarea><p class="input-help" id="sentence-help">Escreva uma frase com pelo menos 4 palavras. Sua resposta fica salva enquanto você escreve.</p>';
      if (e.dica) html += '<details class="hint"><summary>Precisa de uma dica?</summary>' + C.rich(e.dica) + '</details>';
      if (grading) html += '<p class="grading-status" role="status">Corrigindo suas respostas… isso leva até um minuto.</p>';
      if (a.revealed && a.ia) html += '<div class="grading-summary"><p class="eyebrow">CORREÇÃO AUTOMÁTICA</p><p><strong>' + C.esc(a.ia.avaliacao) + '.</strong> ' + C.esc(a.ia.resumo) + '</p><p class="small">Corrigido por um modelo de IA a partir da resposta comentada. Se discordar, ajuste a avaliação abaixo.</p></div>';
      if (a.revealed && a.iaErro) html += '<p class="callout attention">A correção automática não respondeu agora. Compare com a resposta comentada e avalie você mesmo.' + (grader && e.passos && !grading ? ' <button id="regrade" class="button secondary">Tentar a correção de novo</button>' : '') + '</p>';
      if (a.revealed) html += '<div class="model-answer"><p class="eyebrow">RESPOSTA COMENTADA</p>' + C.rich(e.resposta_comentada) + '</div><fieldset class="self-rating"><legend>' + (a.ia ? 'Sua avaliação' : 'Como foi para você?') + '</legend>' + ['Acertei','Acertei em parte','Ainda não'].map(function (v, i) { return '<button class="option rating ' + (a.rating === i ? 'selected' : '') + '" data-rating="' + i + '" aria-pressed="' + (a.rating === i) + '">' + v + '</button>'; }).join('') + '</fieldset>';
    }
    if (card.tipo === 'resumo') {
      html += '<ul class="takeaways">' + (card.pontos || []).map(function (p) { return '<li><span aria-hidden="true">✓</span><div>' + C.inline(p) + '</div></li>'; }).join('') + '</ul><div class="glossary"><p class="eyebrow">SEU VOCABULÁRIO</p><dl>' + (card.glossario || []).map(function (g) { return '<dt>' + C.esc(g.termo) + '</dt><dd>' + C.rich(g.def) + '</dd>'; }).join('') + '</dl></div>';
      if (s.queue.length > lesson.cartoes.length) html += '<p class="callout">Antes de concluir, você vai rever os exercícios que merecem mais uma tentativa.</p>';
    }
    main.innerHTML = html + '</section>';
    renderActions(); bind(); askSync();
    if (focus !== false) { document.getElementById('card-title').focus({preventScroll:true}); window.scrollTo(0, 0); }
  }
  function exercise(e, a) {
    var disabled = a.feedback ? ' disabled' : '', html = '';
    if (e.tipo === 'escolha' || e.tipo === 'multipla') {
      html = '<p class="instruction">' + (e.tipo === 'multipla' ? 'Você pode escolher mais de uma opção.' : 'Escolha uma opção.') + '</p><div class="options">';
      html += e.opcoes.map(function (v, i) { return '<button class="option ' + (a.selected.indexOf(i) >= 0 ? 'selected' : '') + '" data-choice="' + i + '" aria-pressed="' + (a.selected.indexOf(i) >= 0) + '"' + disabled + '><span class="option-key" aria-hidden="true">' + (i + 1) + '</span><span>' + C.inline(v) + '</span></button>'; }).join('') + '</div>';
    } else if (e.tipo === 'completar') {
      html = '<p class="fill-sentence">' + C.inline(e.frase) + '</p><label class="field-label" for="fill-answer">A palavra que falta</label><input id="fill-answer" type="text" autocomplete="off" value="' + C.esc(a.text) + '"' + disabled + '>';
    } else if (e.tipo === 'numero') {
      var unit = e.unidade || '', casas = typeof e.casas === 'number' ? e.casas : 2;
      html = '<label class="field-label" for="number-answer">Sua resposta</label><div class="number-field">' + (unit === 'R$' ? '<span class="number-unit">R$</span>' : '') + '<input id="number-answer" type="text" inputmode="decimal" autocomplete="off" value="' + C.esc(a.text) + '"' + disabled + '>' + (unit && unit !== 'R$' ? '<span class="number-unit">' + C.esc(unit) + '</span>' : '') + '</div><p class="input-help">Faça a conta na calculadora e digite só o número' + (casas ? ', com ' + casas + (casas > 1 ? ' casas decimais' : ' casa decimal') : '') + '. Use vírgula nos decimais (ex.: 1.234,56).</p>';
    } else if (e.tipo === 'ordenar') {
      if (!a.shuffled) { a.shuffled = shuffled(e.itens.length); save(); }
      html = '<p class="instruction">Toque nos passos na ordem certa. Para desfazer, toque no passo escolhido.</p><ol class="ordered-slots">' + a.order.map(function (v, i) { return '<li><button class="option selected" data-remove="' + i + '"' + disabled + '><span class="option-key">' + (i + 1) + '</span><span>' + C.inline(e.itens[v]) + '</span><span class="remove-label" aria-label="Remover">×</span></button></li>'; }).join('') + '</ol>';
      if (!a.order.length) html += '<div class="empty-slot">1. Escolha o primeiro passo abaixo</div>';
      html += '<div class="options">' + a.shuffled.filter(function (v) { return a.order.indexOf(v) < 0; }).map(function (v, i) { return '<button class="option" data-order="' + v + '" data-shortcut="' + (i + 1) + '"' + disabled + '><span class="option-key" aria-hidden="true">' + (i + 1) + '</span><span>' + C.inline(e.itens[v]) + '</span></button>'; }).join('') + '</div>';
    } else if (e.tipo === 'associar') {
      if (!a.shuffled) { a.shuffled = shuffled(e.pares.length); save(); }
      html = '<p class="instruction">Escolha uma situação à esquerda e sua leitura à direita. Toque de novo à esquerda para refazer o par.</p><div class="pair-grid"><div><p class="column-label">Situação</p>' + e.pares.map(function (p, i) { var paired = a.pairs[i] !== undefined; return '<button class="option pair ' + (a.left === i ? 'selected' : paired ? 'paired' : '') + '" data-left="' + i + '" aria-pressed="' + (a.left === i) + '"' + disabled + '><span class="pair-number">' + (i + 1) + '</span><span>' + C.inline(p[0]) + '</span>' + (paired ? '<span class="sr-only">Par ' + (i + 1) + ' formado</span>' : '') + '</button>'; }).join('') + '</div><div><p class="column-label">Leitura</p>' + a.shuffled.map(function (v) { var key = Object.keys(a.pairs).find(function (k) { return a.pairs[k] === v; }); return '<button class="option pair ' + (key !== undefined ? 'paired' : '') + '" data-right="' + v + '"' + disabled + '><span class="pair-number">' + (key !== undefined ? Number(key) + 1 : '·') + '</span><span>' + C.inline(e.pares[v][1]) + '</span></button>'; }).join('') + '</div></div><p class="input-help" role="status">' + Object.keys(a.pairs).length + ' de ' + e.pares.length + ' pares formados' + (a.left !== undefined ? '. Agora escolha a leitura para a situação ' + (a.left + 1) + '.' : '.') + '</p>';
    }
    return html;
  }
  function ready() {
    var card = current(), a = answer(), e = card.exercicio;
    if (e && e.tipo === 'codigo') return Code.canContinue(a);
    if (card.tipo === 'desafio') {
      if (grading) return false;
      if (a.revealed) return a.rating !== undefined;
      if (e.passos) return e.passos.every(function (_, i) { return words((a.texts || [])[i]) >= 3; });
      return words(a.text) >= 4;
    }
    if (card.tipo !== 'pratica' || a.feedback) return true;
    if (e.tipo === 'escolha' || e.tipo === 'multipla') return a.selected.length > 0;
    if (e.tipo === 'completar') return a.text.trim().length > 0;
    if (e.tipo === 'numero') return numberCandidates(a.text).length > 0;
    if (e.tipo === 'ordenar') return a.order.length === e.itens.length;
    if (e.tipo === 'associar') return Object.keys(a.pairs).length === e.pares.length;
    return false;
  }
  function words(t) { return ((t || '').trim().match(/[\p{L}\p{N}]+/gu) || []).length; }
  // A typed number may come as 1.234,56 (pt-BR), 1234.56 or 1,234.56: every reading that makes sense
  // is a candidate, and the expected value decides ("1.580" can be 1,58 or 1 580).
  function numberCandidates(text) {
    var t = String(text || '').replace(/[−–]/g, '-').replace(/R\$|%/g, '').replace(/[\s ]/g, ''), out = [];
    if (!/^[+-]?[\d.,]*\d[\d.,]*$/.test(t)) return out;
    function add(v) { if (Number.isFinite(v) && out.indexOf(v) < 0) out.push(v); }
    var commas = (t.match(/,/g) || []).length, dots = (t.match(/\./g) || []).length;
    if (/^[+-]?\d{1,3}(,\d{3})+(\.\d+)?$/.test(t)) add(Number(t.replace(/,/g, '')));
    if (commas === 1) add(Number(t.replace(/\./g, '').replace(',', '.')));
    else if (!commas && dots > 1) add(Number(t.replace(/\./g, '')));
    else if (!commas) { add(Number(t)); if (/^[+-]?\d{1,3}\.\d{3}$/.test(t)) add(Number(t.replace('.', ''))); }
    return out;
  }
  function numberCorrect(e, text) {
    var target = Number(e.resposta), casas = typeof e.casas === 'number' ? e.casas : 2;
    var tol = (typeof e.tolerancia === 'number' ? e.tolerancia : Math.max(Math.pow(10, -casas), Math.abs(target) * 0.001)) + 1e-9;
    return numberCandidates(text).some(function (v) { return Math.abs(v - target) <= tol || (e.unidade === '%' && Math.abs(v * 100 - target) <= tol); });
  }
  function stepFeedback(a, i) {
    var f = a.ia && a.ia.passos && a.ia.passos[i]; if (!f) return '';
    var label = {certo:'✓ Certo', parcial:'◐ Em parte', faltou:'✗ Faltou'}[f.veredito] || f.veredito;
    return '<p class="step-feedback v-' + C.esc(f.veredito) + '"><strong>' + label + '.</strong> ' + C.esc(f.comentario) + '</p>';
  }
  function grade(a, e) {
    grading = true; render(false);
    var k = s.queue[s.pos], done = false;
    function finish(res) {
      if (done) return; done = true; grading = false;
      if (res && res.passos) { a.ia = res; a.rating = ['Acertei','Acertei em parte','Ainda não'].indexOf(res.avaliacao); delete a.iaErro; } else a.iaErro = true;
      a.revealed = true; if (!a.awarded) { a.awarded = 20; s.xp += 20; }
      save(); render(false); var first = main.querySelector('.step-feedback') || main.querySelector('.model-answer'); if (first) first.scrollIntoView({block:'center'});
    }
    fetch(C.api + 'corrigir', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({curso:C.curso.id, aula:n, cartao:k, respostas:e.passos.map(function (_, i) { return (a.texts || [])[i] || ''; })})})
      .then(function (r) { return r.ok ? r.json() : null; }).then(finish).catch(function () { finish(null); });
    setTimeout(function () { finish(null); }, 150000);
  }
  function renderActions() {
    if (current().exercicio && current().exercicio.tipo === 'codigo') {
      actions.className = 'actions';
      actions.innerHTML = '<div class="nav-row">' + (s.pos > 0 ? '<button id="back" class="button secondary back" aria-label="Voltar ao cartão anterior">← Voltar</button>' : '') + '<button id="primary" class="button primary"' + (!ready() ? ' disabled' : '') + '>Continuar →</button></div>' + (!Code.accepted(answer()) ? '<button id="code-skip" class="button code-text-button">Pular por agora</button><p class="small muted">O exercício volta no fim da aula, com seu código salvo.</p>' : '');
      document.getElementById('primary').onclick = advance;
      if (s.pos > 0) document.getElementById('back').onclick = back;
      var skip = document.getElementById('code-skip');
      if (skip) skip.onclick = function () {
        var id = s.queue[s.pos];
        if (s.queue.indexOf(id, s.pos + 1) < 0) s.queue.push(id);
        s.pos++; save(); render();
      };
      return;
    }
    var card = current(), a = answer(), retrying = card.tipo === 'pratica' && a.feedback && !a.feedback.correct && !a.gaveUp, label = card.tipo === 'pratica' && !a.feedback ? 'Verificar' : retrying ? 'Tentar de novo' : card.tipo === 'desafio' && !a.revealed ? (grading ? 'Corrigindo…' : grader && card.exercicio.passos ? 'Corrigir minhas respostas' : 'Ver resposta comentada') : 'Continuar';
    var feedback = a.feedback && card.tipo === 'pratica';
    actions.className = 'actions' + (feedback ? a.feedback.correct ? ' success' : ' failure' : '');
    actions.innerHTML = (feedback ? '<div class="feedback" role="status"><strong>' + (a.feedback.correct ? 'Isso!' : 'Quase…') + '</strong>' + (retrying ? '<p>Ainda não. Revise sua resposta e tente de novo, ou veja a resposta comentada.</p><button id="give-up" class="button secondary">Ver a resposta</button>' : C.rich(card.exercicio.explicacao) + (!a.feedback.correct ? '<p class="small">Você vai tentar de novo no fim da aula.</p>' : '')) + '</div>' : '<p class="keyboard-help">Teclado: Enter ou → avança · ← volta · 1–5 escolhe</p>') + '<div class="nav-row">' + (s.pos > 0 ? '<button id="back" class="button secondary back" aria-label="Voltar ao cartão anterior"><span aria-hidden="true">←</span><span class="back-label">Voltar</span></button>' : '') + '<button id="primary" class="button primary"' + (!ready() ? ' disabled' : '') + '>' + label + '<span aria-hidden="true">→</span></button></div>';
    document.getElementById('primary').addEventListener('click', advance);
    var giveUp = document.getElementById('give-up');
    if (giveUp) giveUp.addEventListener('click', function () {
      // seeing the answer sends the exercise back to the end of the lesson
      a.gaveUp = true; if (s.queue.indexOf(s.queue[s.pos], s.pos + 1) < 0) s.queue.push(s.queue[s.pos]);
      save(); render(false); document.getElementById('primary').focus();
    });
    if (s.pos > 0) document.getElementById('back').addEventListener('click', back);
  }
  function bind() {
    var a = answer(), card = current(), e = card.exercicio;
    var regrade = document.getElementById('regrade');
    if (regrade) regrade.onclick = function () { grade(a, e); };
    if (e && e.tipo === 'codigo') {
      var root = main.querySelector('.code-workbench'), position = s.pos;
      Code.bind(root, e, a, {
        payload:{curso:C.curso.id, aula:n, cartao:s.queue[s.pos]}, save:save,
        isCurrent:function () { return s.pos === position && main.contains(root); },
        onChange:renderActions,
        award:function (xp) { if (!a.awarded) { a.awarded = card.tipo === 'desafio' ? 20 : xp; s.xp += a.awarded; } }
      });
      return;
    }
    main.querySelectorAll('[data-choice]').forEach(function (button) { button.onclick = function () { var i = Number(button.dataset.choice); if (e.tipo === 'escolha') a.selected = [i]; else if (a.selected.indexOf(i) < 0) a.selected.push(i); else a.selected = a.selected.filter(function (v) { return v !== i; }); save(); render(false); main.querySelector('[data-choice="' + i + '"]').focus(); }; });
    main.querySelectorAll('[data-order]').forEach(function (button) { button.onclick = function () { a.order.push(Number(button.dataset.order)); save(); render(false); focusOption(); }; });
    main.querySelectorAll('[data-remove]').forEach(function (button) { button.onclick = function () { a.order.splice(Number(button.dataset.remove), 1); save(); render(false); focusOption(); }; });
    main.querySelectorAll('[data-left]').forEach(function (button) { button.onclick = function () { a.left = Number(button.dataset.left); delete a.pairs[a.left]; save(); render(false); main.querySelector('[data-left="' + a.left + '"]').focus(); }; });
    main.querySelectorAll('[data-right]').forEach(function (button) { button.onclick = function () { if (a.left === undefined) return; var v = Number(button.dataset.right); Object.keys(a.pairs).forEach(function (k) { if (a.pairs[k] === v) delete a.pairs[k]; }); a.pairs[a.left] = v; delete a.left; save(); render(false); main.querySelector('[data-right="' + v + '"]').focus(); }; });
    main.querySelectorAll('[data-rating]').forEach(function (button) { button.onclick = function () { a.rating = Number(button.dataset.rating); save(); render(false); main.querySelector('[data-rating="' + a.rating + '"]').focus(); }; });
    main.querySelectorAll('[data-step]').forEach(function (box) { box.addEventListener('input', function () { if (!a.texts) a.texts = []; a.texts[Number(box.dataset.step)] = box.value; save(); document.getElementById('primary').disabled = !ready(); }); });
    var input = document.getElementById('fill-answer') || document.getElementById('number-answer') || document.getElementById('free-answer');
    if (input) input.addEventListener('input', function () { a.text = input.value; save(); document.getElementById('primary').disabled = !ready(); });
  }
  function focusOption() { var el = main.querySelector('[data-order]') || document.getElementById('primary'); el.focus(); }
  function normalize(text) { return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLocaleLowerCase('pt-BR').replace(/\s+/g, ' '); }
  function advance() {
    if (!s || (s.completed && !reviewing) || !ready()) return;
    var card = current(), a = answer(), e = card.exercicio;
    if (e && e.tipo === 'codigo') { s.pos++; save(); render(); return; }
    if (card.tipo === 'pratica' && a.feedback && !a.feedback.correct && !a.gaveUp) {
      delete a.feedback; save(); render(false);
      var field = main.querySelector('#number-answer, #fill-answer, .option:not([disabled])'); if (field) field.focus();
      return;
    }
    if (card.tipo === 'pratica' && !a.feedback) {
      var correct = false;
      if (e.tipo === 'escolha') correct = a.selected[0] === e.correta;
      if (e.tipo === 'multipla') correct = a.selected.length === e.corretas.length && e.corretas.every(function (v) { return a.selected.indexOf(v) >= 0; });
      if (e.tipo === 'completar') correct = e.aceitas.some(function (v) { return normalize(v) === normalize(a.text); });
      if (e.tipo === 'numero') correct = numberCorrect(e, a.text);
      if (e.tipo === 'ordenar') correct = a.order.every(function (v, i) { return v === i; });
      if (e.tipo === 'associar') correct = e.pares.every(function (_, i) { return a.pairs[i] === i; });
      a.attempts++; a.feedback = {correct:correct};
      if (correct && !a.awarded) { a.awarded = a.attempts === 1 && s.pos < lesson.cartoes.length ? 10 : 5; s.xp += a.awarded; }
      save(); render(false); document.getElementById('primary').focus(); return;
    }
    if (card.tipo === 'desafio' && !a.revealed && grader && e.passos) { if (!grading) grade(a, e); return; }
    if (card.tipo === 'desafio' && !a.revealed) { a.revealed = true; if (!a.awarded) { a.awarded = 20; s.xp += 20; } save(); render(false); main.querySelector('.model-answer').scrollIntoView({block:'start'}); return; }
    s.pos++; save(); render();
  }
  function back() {
    if (!s || s.pos <= 0) return;
    s.pos--; save(); render();
  }
  function finish() { tick(); s.completed = true; s.finished = new Date().toISOString(); var today = C.day(new Date()); if (data.days.indexOf(today) < 0) data.days.push(today); save(); completion(); }
  function completion() {
    document.getElementById('progress').value = 100; document.getElementById('progress-label').textContent = 'Concluída';
    var practices = lesson.cartoes.filter(function (c) { return c.tipo === 'pratica'; }).length;
    var first = Object.values(s.answers).concat(Object.values(s.codes || {})).filter(function (a) { return a.awarded === 10; }).length;
    var seconds = Math.round(s.seconds), time = Math.floor(seconds / 60) + 'min ' + String(seconds % 60).padStart(2, '0') + 's';
    main.innerHTML = '<section class="card completion"><div class="completion-badge" aria-hidden="true">✓</div><p class="eyebrow">MAIS UM PASSO NA SUA TRILHA</p><h1 tabindex="-1" id="card-title">Aula concluída.<br>Conhecimento em prática.</h1><p>' + C.esc(lesson.titulo) + '</p><div class="stats result-stats"><div><strong>+' + s.xp + '</strong><span>XP nesta aula</span></div><div><strong>' + first + '/' + practices + '</strong><span>de primeira</span></div><div><strong>' + time + '</strong><span>tempo na aula</span></div></div><div class="callout"><strong>Sua meta do dia está completa.</strong><p>Uma aula de cada vez. Você está construindo autonomia.</p></div><button class="button secondary" id="copy">Copiar minhas respostas</button><p id="copy-status" class="small" role="status"></p><textarea id="copy-fallback" aria-label="Suas respostas para copiar manualmente" readonly hidden></textarea><button class="button secondary" id="review">Rever a aula</button></section>';
    actions.className = 'actions';
    var i = window.CURSO.aulas.findIndex(function (a) { return a.n === n; }), next = window.CURSO.aulas[i + 1];
    actions.innerHTML = next && n !== '00' && C.unlocked(next.n, data) ? '<a class="button primary" href="' + C.link('aula.html', next.n) + '">Próxima aula →</a><a class="text-link" href="' + C.link('index.html') + '">Voltar à trilha</a>' : '<a class="button primary" href="' + C.link('index.html') + '">Voltar à trilha <span aria-hidden="true">→</span></a>';
    document.getElementById('copy').onclick = copyAnswers; document.getElementById('review').onclick = function () { reviewing = true; s.pos = 0; save(); render(); }; document.getElementById('card-title').focus({preventScroll:true});
  }
  function copyAnswers() {
    var text = 'Aula ' + n + ' — ' + lesson.titulo + '\n\n' + lesson.cartoes.map(function (card, id) {
      if (card.exercicio && card.exercicio.tipo === 'codigo') { var code = (s.codes || {})[id] || {}; return card.exercicio.enunciado + '\n\nMeu código:\n' + (code.codigo || '(sem código)') + '\n\nResultado: ' + (code.result && code.result.titulo || 'Não executado'); }
      if (card.tipo !== 'desafio') return ''; var a = s.answers[id] || {};
      var ex = card.exercicio, mine = ex.passos ? ex.passos.map(function (st, i) { var f = a.ia && a.ia.passos && a.ia.passos[i]; return 'Passo ' + (i + 1) + ': ' + st.pergunta + '\n' + ((a.texts || [])[i] || '(sem resposta)') + (f ? '\nCorreção automática: ' + f.veredito + ' — ' + f.comentario : ''); }).join('\n\n') : (a.text || '(sem resposta)');
      return ex.enunciado + '\n\nMinhas respostas:\n' + mine + '\n\nMinha avaliação: ' + (['Acertei','Acertei em parte','Ainda não'][a.rating] || 'Não informada');
    }).filter(Boolean).join('\n\n---\n\n');
    function fallback() {
      var area = document.getElementById('copy-fallback'); area.hidden = false; area.value = text; area.focus(); area.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (_) {}
      document.getElementById('copy-status').textContent = ok ? 'Respostas copiadas. Você já pode colar no chat de correção.' : 'Selecione e copie o texto abaixo para levar ao chat de correção.';
      if (ok) area.hidden = true;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { document.getElementById('copy-status').textContent = 'Respostas copiadas. Você já pode colar no chat de correção.'; }).catch(fallback); else fallback();
  }
  // Side chat: questions about the card on screen, answered by a tutor model that sees the card and the
  // lesson (curso/tools/servidor.py, api/perguntar). The conversation is kept per card in the progress.
  var ask = document.createElement('aside'), asking = false;
  ask.id = 'ask-panel'; ask.className = 'ask-panel'; ask.hidden = true; ask.setAttribute('aria-label', 'Dúvidas sobre esta tela');
  ask.innerHTML = '<div class="ask-head"><div><p class="eyebrow">TIRE UMA DÚVIDA</p><p class="ask-about" id="ask-about"></p></div><button class="icon-button" id="ask-close" aria-label="Fechar as dúvidas">×</button></div><div class="ask-log" id="ask-log" aria-live="polite"></div><form class="ask-form" id="ask-form"><label class="sr-only" for="ask-input">Sua pergunta</label><textarea id="ask-input" rows="3" placeholder="Pergunte sobre esta tela. Ex.: por que divide por 1,03?"></textarea><button class="button primary" id="ask-send" type="submit">Enviar</button><p class="input-help">Enter envia · Shift+Enter quebra a linha</p></form>';
  document.body.appendChild(ask);
  var toggle = document.getElementById('ask-toggle');
  function cardKey() { return String(s.queue[s.pos]); }
  function chatLog() { if (!s.chat) s.chat = {}; if (!s.chat[cardKey()]) s.chat[cardKey()] = []; return s.chat[cardKey()]; }
  function learnerAnswer() {
    var card = current(), e = card.exercicio, a = answer();
    if (!e) return {texto:'', respondido:false};
    if (e.tipo === 'codigo') return {texto:a.codigo || '', respondido:!!a.result};
    if (card.tipo === 'desafio') return {texto:(e.passos || []).map(function (st, i) { return 'Passo ' + (i + 1) + ': ' + ((a.texts || [])[i] || ''); }).join('\n') || a.text || '', respondido:!!a.revealed};
    var t = '';
    if (e.tipo === 'escolha' || e.tipo === 'multipla') t = a.selected.map(function (i) { return e.opcoes[i]; }).join(' | ');
    else if (e.tipo === 'ordenar') t = a.order.map(function (i) { return e.itens[i]; }).join(' → ');
    else if (e.tipo === 'associar') t = Object.keys(a.pairs).map(function (k) { return e.pares[k][0] + ' = ' + e.pares[a.pairs[k]][1]; }).join(' | ');
    else t = a.text || '';
    return {texto:t, respondido:!!a.feedback};
  }
  function askSync() {
    if (!s || ask.hidden || s.pos >= s.queue.length) return;
    var card = current();
    document.getElementById('ask-about').textContent = 'Sobre: ' + (card.titulo || (card.exercicio && card.exercicio.enunciado) || lesson.titulo);
    var log = chatLog();
    document.getElementById('ask-log').innerHTML = (log.length ? '' : '<p class="ask-empty">Pergunte qualquer coisa sobre o que está nesta tela: um termo, uma conta, por que sua resposta deu diferente. O professor vê o cartão e a sua resposta.</p>') +
      log.map(function (m) { return '<div class="ask-msg ask-' + (m.quem === 'aluno' ? 'me' : 'tutor') + '"><p class="ask-who">' + (m.quem === 'aluno' ? 'Você' : 'Professor') + '</p>' + (m.quem === 'aluno' ? '<p>' + C.esc(m.texto) + '</p>' : C.rich(m.texto)) + '</div>'; }).join('') +
      (asking ? '<p class="ask-wait" role="status">Pensando… pode levar até um minuto.</p>' : '');
    var box = document.getElementById('ask-log'); box.scrollTop = box.scrollHeight;
    document.getElementById('ask-send').disabled = asking;
  }
  function askOpen(open) {
    ask.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('ask-open', open);
    if (open) { askSync(); document.getElementById('ask-input').focus(); } else toggle.focus();
  }
  toggle.addEventListener('click', function () { askOpen(ask.hidden); });
  document.getElementById('ask-close').addEventListener('click', function () { askOpen(false); });
  ask.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { askOpen(false); return; }
    if (event.key === 'Enter' && event.target.id === 'ask-input' && !event.shiftKey) { event.preventDefault(); document.getElementById('ask-form').requestSubmit(); }
  });
  document.getElementById('ask-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('ask-input'), q = input.value.trim();
    if (!q || asking || !s) return;
    var log = chatLog(), key = s.queue[s.pos], previous = log.slice(), mine = learnerAnswer();
    log.push({quem:'aluno', texto:q}); input.value = ''; save();
    if (!C.api || !window.fetch) { log.push({quem:'professor', texto:'Para conversar com o professor, abra o curso pelo servidor (http://localhost:8765).'}); save(); askSync(); return; }
    asking = true; askSync();
    fetch(C.api + 'perguntar', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({curso:C.curso.id, aula:n, cartao:key, pergunta:q, historico:previous, resposta_aluno:mine.texto, respondido:mine.respondido})})
      .then(function (r) { return r.json().catch(function () { return {}; }); })
      .then(function (j) { log.push({quem:'professor', texto:j.resposta || ('Não consegui responder agora' + (j.erro ? ' (' + j.erro + ')' : '') + '. Tente de novo.')}); })
      .catch(function () { log.push({quem:'professor', texto:'Não consegui falar com o servidor. Confira se ele está ligado e tente de novo.'}); })
      .then(function () { asking = false; save(); askSync(); });
  });
  document.addEventListener('keydown', function (event) {
    if (event.target.closest && event.target.closest('#ask-panel, #ask-toggle')) return;
    if (!s || (s.completed && !reviewing) || event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
    var tag = event.target.tagName;
    if (tag === 'TEXTAREA') return;
    if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && tag !== 'INPUT') { event.preventDefault(); if (event.key === 'ArrowLeft') back(); else advance(); return; }
    if (event.key === 'Enter') {
      if (event.target.closest('.code-workbench, #code-skip')) return;
      if (event.target.closest('a, summary, .theme-toggle, .term')) return;
      event.preventDefault(); advance();
    }
    if (/^[1-5]$/.test(event.key) && tag !== 'INPUT') {
      var a = answer(), e = current().exercicio, k = Number(event.key) - 1, el;
      if (!e || a.feedback) return;
      if (e.tipo === 'associar') el = a.left === undefined ? main.querySelectorAll('[data-left]')[k] : main.querySelectorAll('[data-right]')[k];
      else el = main.querySelector('[data-choice="' + k + '"]') || main.querySelector('[data-shortcut="' + (k + 1) + '"]') || main.querySelector('[data-rating="' + k + '"]');
      if (el) { event.preventDefault(); el.click(); }
    }
  });
});
