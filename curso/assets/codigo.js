(function () {
  'use strict';
  var C = window.CursoApp;
  var offline = location.protocol === 'file:' || !C.api || !window.fetch;
  var sessions = new WeakMap();
  var serverHelp = 'Para rodar código, abra pelo servidor: uv run python curso/tools/servidor.py → http://localhost:8765';
  var verdicts = {
    aceito:['Aceito', 'Accepted'], passou:['Passou nos exemplos', 'Run: all sample tests passed'],
    errado:['Resposta errada', 'Wrong Answer'], lento:['Tempo excedido', 'Time Limit Exceeded'],
    erro:['Erro de execução', 'Runtime Error'], sintaxe:['Erro de sintaxe', 'Compile Error'],
    estrutura:['Faltou a estrutura', 'Solution class or method not found']
  };
  // Tokenize the original text once; never run replacements over generated markup.
  function highlight(source) {
    var pattern = /#[^\n]*|(?:[rRuUbBfF]{0,2})(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(?:False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b|\b(?:0[xX][\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g;
    var text = String(source), cursor = 0, html = '', match;
    while ((match = pattern.exec(text))) {
      var token = match[0], kind = token[0] === '#' ? 'comment' : /["']/.test(token) ? 'string' : /^\d/.test(token) ? 'number' : 'keyword';
      html += C.esc(text.slice(cursor, match.index)) + '<span class="py-' + kind + '">' + C.esc(token) + '</span>';
      cursor = pattern.lastIndex;
    }
    return html + C.esc(text.slice(cursor));
  }
  // Values as Python prints them (True, None, 'texto'), on one line, like the LeetCode console.
  function py(v) {
    if (v === null) return 'None';
    if (v === true) return 'True';
    if (v === false) return 'False';
    if (typeof v === 'string') return "'" + v.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
    if (Array.isArray(v)) return '[' + v.map(py).join(', ') + ']';
    if (typeof v === 'object') return '{' + Object.keys(v).map(function (k) { return py(k) + ': ' + py(v[k]); }).join(', ') + '}';
    return String(v);
  }
  function cut(text) { return text.length > 400 ? text.slice(0, 400) + ' …' : text; }
  function value(v) { return v === undefined ? 'Não informado' : typeof v === 'string' ? v : cut(py(v)); }
  // Argument names from the LeetCode signature in the starter code: def metodo(self, a: List[int], b)
  function names(e) {
    var m = new RegExp('def\\s+' + (e.metodo || '') + '\\s*\\(self\\s*,?([^)]*)\\)').exec(e.inicial || ''); if (!m) return [];
    var out = [], depth = 0, cur = '';
    m[1].split('').forEach(function (ch) { if (ch === '[' || ch === '(') depth++; if (ch === ']' || ch === ')') depth--; if (ch === ',' && depth === 0) { out.push(cur); cur = ''; } else cur += ch; });
    out.push(cur);
    return out.map(function (part) { return part.split(/[:=]/)[0].trim(); }).filter(Boolean);
  }
  function args(entrada, e) {
    if (!Array.isArray(entrada) || e.modo === 'saida') return value(entrada);
    var ns = names(e);
    return cut(entrada.map(function (v, i) { return (ns[i] ? ns[i] + ' = ' : '') + py(v); }).join(', '));
  }
  function block(source, label, python) {
    return '<div class="code-block"><div class="code-caption">' + C.esc(label || 'Python') + '</div><pre tabindex="0" role="region" aria-label="' + C.esc(label || 'Código Python') + '"><code>' + (python === false ? C.esc(value(source)) : highlight(source)) + '</code></pre></div>';
  }
  function snippet(item) {
    return (item.codigo !== undefined ? block(item.codigo) : '') + (item.saida !== undefined ? block(item.saida, 'Saída', false) : '');
  }
  function problem(p) {
    if (!p) return '';
    var link = /^https:\/\/leetcode\.com\/problems\//.test(p.link || '') ? '<a class="problem-link" href="' + C.esc(p.link) + '" target="_blank" rel="noopener">Abrir no LeetCode <span class="sr-only">(nova aba)</span>↗</a>' : '';
    return '<section class="code-problem" aria-label="Problema do LeetCode"><p class="eyebrow">LEETCODE · ' + C.esc(p.numero) + '</p><h2>' + C.esc(p.titulo) + '</h2>' + link + C.rich(p.descricao) + (p.exemplos || []).map(function (ex, i) {
      return '<section class="problem-example"><h3>Exemplo ' + (i + 1) + '</h3>' + block(ex.entrada, 'Entrada', false) + block(ex.saida, 'Saída', false) + C.rich(ex.explicacao) + '</section>';
    }).join('') + ((p.restricoes || []).length ? '<h3>Restrições</h3><ul>' + p.restricoes.map(function (r) { return '<li>' + C.inline(r) + '</li>'; }).join('') + '</ul>' : '') + '</section>';
  }
  function errorHTML(error) {
    if (!error) return '';
    if (typeof error === 'string') return '<p>' + C.esc(error) + '</p>';
    var frames = error.onde || (error.linha ? [{linha:error.linha, codigo:error.codigo}] : []);
    return '<div class="code-error"><p><strong>' + C.esc(error.tipo || 'Erro') + '</strong>: ' + C.esc(error.mensagem) + '</p>' + frames.map(function (f) {
      return block(f.codigo || '', 'Linha ' + f.linha + (error.coluna ? ' · coluna ' + error.coluna : ''));
    }).join('') + '</div>';
  }
  function testHTML(t, index, e) {
    var hiddenSummary = t.oculto && !Object.prototype.hasOwnProperty.call(t, 'entrada') && !t.erro;
    return '<section class="code-test' + (t.ok ? '' : ' test-failed') + '"><h3>' + (t.ok ? '✓ ' : '✗ Caso que falhou · ') + (t.oculto ? 'Teste oculto' : 'Teste ' + (index + 1)) + '</h3>' + (hiddenSummary ? '<p>' + (t.ok ? 'Passou.' : 'Não passou. Veja o caso abaixo.') + '</p>' :
      block(t.entrada !== undefined ? args(t.entrada, e) : t.stdin || '(sem entrada)', 'Entrada', false) + block(t.esperado, 'Esperado', false) + block(t.obtido, 'Obtido', false) + block(t.prints !== undefined ? t.prints || '(nada)' : e.modo === 'saida' ? t.obtido || '(nada)' : 'Não informado pelo servidor', 'O que foi impresso', false) + errorHTML(t.erro)) + '</section>';
  }
  function resultHTML(r, e) {
    if (!r) return '';
    var names = verdicts[r.veredito] || ['Resultado', ''];
    var html = '<div class="code-verdict ' + (r.veredito === 'aceito' || r.veredito === 'passou' ? 'verdict-ok' : 'verdict-failed') + '"><h2>' + C.esc(r.titulo || names[0]) + '<small> · ' + C.esc(r.leetcode || names[1]) + '</small></h2>' + C.rich(r.detalhe) + (r.total !== undefined ? '<p>' + C.esc(r.passaram) + ' de ' + C.esc(r.total) + ' testes passaram.</p>' : '') + '</div>';
    var shownFailure = false;
    html += errorHTML(r.erro) + (r.testes || []).map(function (t, i) {
      if (t.oculto && !t.ok && r.falha && r.falha.oculto) { t = Object.assign({}, t, r.falha); shownFailure = true; }
      return testHTML(t, i, e);
    }).join('');
    if (r.falha && r.falha.oculto && !shownFailure) html += testHTML(r.falha, 0, e);
    if (r.desempenho) {
      var d = r.desempenho, limit = d.limite_s === undefined ? (e.desempenho || {}).limite_s : d.limite_s;
      html += '<section class="code-test' + (d.ok ? '' : ' test-failed') + '"><h3>' + (d.ok ? '✓ ' : '✗ ') + 'Teste de desempenho</h3><p><strong>' + (d.segundos == null ? 'Tempo não concluído' : C.esc(d.segundos) + ' s') + '</strong> × limite de ' + C.esc(limit) + ' s</p><p>Tamanho da entrada: ' + (d.tamanho ? C.esc(Object.keys(d.tamanho).map(function (k) { return k + ': ' + d.tamanho[k]; }).join(' · ')) : 'não informado pelo servidor') + '</p>' + (d.estado === 'errado' ? block(d.esperado, 'Esperado', false) + block(d.obtido, 'Obtido', false) : '') + errorHTML(d.erro) + '</section>';
    }
    if (r.veredito === 'passou' && e.modo !== 'saida') html += '<p class="callout">Os exemplos passaram. Agora use <strong>Enviar</strong> para conferir os casos ocultos e o desempenho.</p>';
    return html;
  }
  function accepted(a) { return a.acceptedCode !== undefined && a.acceptedCode === a.codigo; }
  function canContinue(a) { return accepted(a) || offline; }
  function render(e, a) {
    if (a.codigo === undefined) a.codigo = e.inicial || '';
    if (!a.hints) a.hints = [];
    return snippet(e) + problem(e.problema) + '<div class="code-workbench"><div class="code-controls"></div><div class="code-results" aria-live="polite" aria-atomic="false" aria-label="Resultado da execução"></div><div class="code-learning" aria-live="polite"></div></div>';
  }
  function post(endpoint, payload) {
    if (offline) return Promise.reject({offline:true});
    var controller = new AbortController(), timer = setTimeout(function () { controller.abort(); }, endpoint === 'executar' ? 45000 : 150000);
    return fetch(C.api + endpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:controller.signal}).then(function (r) {
      if (!r.ok) throw {offline:r.status === 403 || r.status === 404 || r.status === 405, message:'O servidor não respondeu ao pedido (' + r.status + '). Tente novamente.'};
      return r.json();
    }).catch(function (err) {
      if (err && (err.name === 'TypeError' || err.name === 'SyntaxError')) throw {offline:true};
      throw err;
    }).finally(function () { clearTimeout(timer); });
  }
  function bind(root, e, a, ctx) {
    var controls = root.querySelector('.code-controls'), results = root.querySelector('.code-results'), learning = root.querySelector('.code-learning');
    var session = sessions.get(a) || {busy:'', notice:''}, confirmReference = false;
    sessions.set(a, session);
    function payload(extra) { return Object.assign({}, ctx.payload, {codigo:a.codigo}, extra); }
    function button(id, label, style, disabled) { return '<button type="button" id="' + id + '" class="button ' + (style || 'secondary') + '"' + (disabled ? ' disabled' : '') + '>' + label + '</button>'; }
    function on(id, handler) { var el = root.querySelector('#' + id); if (el) el.onclick = handler; }
    function draw(focusId) {
      if (!ctx.isCurrent()) return;
      var busy = session.busy, notice = session.notice;
      var passed = accepted(a), refAllowed = passed || offline || (a.failed || 0) >= 3;
      controls.innerHTML = '<div class="editor-heading"><label class="field-label" for="code-editor">Seu código <span>· Python 3</span></label><span class="small">Salvo enquanto você digita</span></div><div class="code-editor-frame"><pre class="line-numbers" aria-hidden="true"></pre><textarea id="code-editor" aria-describedby="code-help" aria-label="Seu código Python" wrap="off" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="20000"' + (busy ? ' readonly' : '') + '>' + C.esc(a.codigo) + '</textarea></div><p class="input-help" id="code-help">Tab: 4 espaços · Shift+Tab: recuar · Enter: manter recuo · Ctrl/Cmd+Enter: rodar · Esc e Tab: sair do editor.</p><div class="code-toolbar">' + button('code-run', busy === 'executar' ? 'Rodando…' : 'Rodar', 'secondary', !!busy || offline) + (e.modo !== 'saida' ? button('code-submit', busy === 'enviar' ? 'Enviando…' : 'Enviar', 'primary', !!busy || offline) : '') + '</div>' + button('code-reset', 'Restaurar o código inicial', 'code-text-button', !!busy) + (offline ? '<p class="notice">' + C.esc(serverHelp) + '</p><p class="small muted">Você pode consultar a solução e continuar; não há XP sem execução aceita.</p>' : '');
      results.innerHTML = (busy ? '<p class="grading-status">' + ({executar:'Rodando os exemplos…', enviar:'Conferindo os testes e o desempenho…', dica:'Preparando a próxima dica…', revisar:'Revisando seu código…'}[busy]) + '</p>' : '') + (notice ? '<p class="notice">' + C.esc(notice) + '</p>' : '') + '<p class="small muted code-result-stale"' + (a.resultCode !== undefined && a.resultCode !== a.codigo ? '' : ' hidden') + '>Resultado da versão anterior. Rode o código atualizado.</p>' + resultHTML(a.result, e);
      learning.innerHTML = (!e.sem_dicas ? '<section class="code-hints"><h2>Dicas, um passo de cada vez</h2>' + a.hints.map(function (h, i) { return '<div class="callout"><strong>Dica ' + (i + 1) + ' de 3</strong>' + C.rich(h) + '</div>'; }).join('') + (a.hints.length < 3 ? button('code-hint', 'Pedir uma dica · ' + (a.hints.length + 1) + '/3', 'secondary', !!busy) : '<p class="small muted">Você já abriu os três degraus.</p>') + '</section>' : '') + (passed ? '<section class="code-explanation"><h2>Por que funciona</h2>' + C.rich(e.explicacao) + (e.complexidade ? '<p class="complexity"><strong>Referência:</strong> tempo ' + C.esc(e.complexidade.tempo) + ' · espaço ' + C.esc(e.complexidade.espaco) + '</p>' : '') + button('code-review', 'Revisar meu código', 'secondary', !!busy || offline) + '<div class="code-review" aria-live="polite">' + (a.review && a.reviewCode === a.codigo ? [['bom','O que ficou bom'],['melhorar','O que melhorar'],['tempo','Tempo'],['espaco','Espaço'],['porque','Por quê']].map(function (field) { return '<h3>' + field[1] + '</h3>' + C.rich(a.review[field[0]]); }).join('') : '') + '</div></section>' : '') + (refAllowed ? button('code-reference', a.referenceOpen ? 'Ocultar a solução de referência' : 'Ver a solução de referência', 'secondary', !!busy) : '<p class="reference-gate">A solução de referência abre após o aceite ou três ' + (e.modo === 'saida' ? 'execuções' : 'envios') + ' sem sucesso (' + (a.failed || 0) + '/3).</p>') + (confirmReference ? '<div class="reference-confirm" role="group" aria-label="Confirmar abertura da referência"><p>Ver a referência entrega a solução. Quer abri-la agora?</p>' + button('code-reference-confirm', 'Sim, ver a referência') + button('code-reference-cancel', 'Continuar tentando') + '</div>' : '') + (a.referenceOpen && refAllowed ? '<section class="reference-solution"><h2>Solução de referência · somente leitura</h2>' + block(e.referencia || '') + '</section>' : '');
      var editor = controls.querySelector('#code-editor'), lines = controls.querySelector('.line-numbers'), escapeTab = false;
      editor.value = a.codigo;
      function lineNumbers() { lines.textContent = a.codigo.split('\n').map(function (_, i) { return i + 1; }).join('\n'); lines.scrollTop = editor.scrollTop; }
      function input() {
        var wasAccepted = accepted(a);
        a.codigo = editor.value; lineNumbers(); ctx.save(); ctx.onChange();
        results.querySelector('.code-result-stale').hidden = a.resultCode === undefined || a.resultCode === a.codigo;
        if (wasAccepted && !accepted(a)) { var start = editor.selectionStart, end = editor.selectionEnd, top = editor.scrollTop, left = editor.scrollLeft; draw('code-editor'); var next = controls.querySelector('#code-editor'); next.setSelectionRange(start, end); next.scrollTop = top; next.scrollLeft = left; }
      }
      lineNumbers(); editor.addEventListener('input', input);
      editor.addEventListener('scroll', function () { lines.scrollTop = editor.scrollTop; });
      editor.addEventListener('keydown', function (event) {
        if (event.isComposing) return;
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); run(false); return; }
        if (event.key === 'Escape') { escapeTab = true; return; }
        if (event.key === 'Tab' && escapeTab) { escapeTab = false; return; }
        escapeTab = false;
        if (busy || event.ctrlKey || event.metaKey || event.altKey) return;
        if (event.key !== 'Tab' && event.key !== 'Enter') return;
        event.preventDefault();
        edit(editor, event.key, event.shiftKey); input();
      });
      on('code-run', function () { run(false); }); on('code-submit', function () { run(true); });
      on('code-reset', function () { a.codigo = e.inicial || ''; ctx.save(); draw('code-editor'); });
      on('code-hint', hint); on('code-review', review);
      on('code-reference', function () {
        if (!a.referenceOpen && !passed && !offline) confirmReference = true;
        else a.referenceOpen = !a.referenceOpen;
        ctx.save(); draw(confirmReference ? 'code-reference-cancel' : 'code-reference');
      });
      on('code-reference-confirm', function () { a.referenceOpen = true; confirmReference = false; ctx.save(); draw('code-reference'); });
      on('code-reference-cancel', function () { confirmReference = false; draw('code-reference'); });
      ctx.onChange();
      if (focusId) { var focus = root.querySelector('#' + focusId); if (focus) focus.focus({preventScroll:true}); }
    }
    function failed(err) {
      if (err && err.offline) offline = true;
      session.notice = offline ? 'Execução indisponível. Você pode ver a referência e continuar.' : err && err.message || 'Não foi possível concluir agora. Tente novamente.';
    }
    function run(submit) {
      if (session.busy || offline) return;
      var code = a.codigo;
      session.busy = submit ? 'enviar' : 'executar'; session.notice = ''; draw();
      post('executar', payload({envio:submit})).then(function (r) {
        if (!r || !verdicts[r.veredito]) throw new Error('O servidor devolveu um resultado inválido. Tente novamente.');
        a.result = r; a.resultCode = code;
        var passed = e.modo === 'saida' ? r.veredito === 'passou' || r.veredito === 'aceito' : submit && r.veredito === 'aceito';
        if (passed) { a.acceptedCode = code; if (!a.awarded) ctx.award(a.failed ? 5 : 10); }
        else if ((submit || e.modo === 'saida') && r.veredito !== 'passou') a.failed = (a.failed || 0) + 1;
      }).catch(failed).finally(function () { session.busy = ''; ctx.save(); session.draw(submit ? 'code-submit' : 'code-run'); });
    }
    function hint() {
      if (session.busy || e.sem_dicas || a.hints.length >= 3) return;
      var level = a.hints.length + 1;
      session.busy = 'dica'; session.notice = ''; draw();
      post('dica', payload({nivel:level})).then(function (r) {
        if (!r || typeof r.dica !== 'string' || !r.dica.trim()) throw new Error();
        a.hints.push(r.dica);
      }).catch(function () { a.hints.push((e.dicas || [])[level - 1] || 'Releia os exemplos e compare cada passo com o resultado esperado.'); }).finally(function () { session.busy = ''; ctx.save(); session.draw('code-hint'); });
    }
    function review() {
      if (session.busy || !accepted(a) || offline) return;
      var code = a.codigo; session.busy = 'revisar'; session.notice = ''; draw();
      post('revisar', payload()).then(function (r) {
        if (!r || !['bom','melhorar','tempo','espaco','porque'].every(function (k) { return typeof r[k] === 'string'; })) throw new Error('A revisão não respondeu. Tente novamente.');
        a.review = r; a.reviewCode = code;
      }).catch(failed).finally(function () { session.busy = ''; ctx.save(); session.draw('code-review'); });
    }
    session.draw = draw; draw();
  }
  // Works on selected lines as well as a single caret, preserving the selection.
  function edit(editor, key, shift) {
    var text = editor.value, start = editor.selectionStart, end = editor.selectionEnd, lineStart = text.lastIndexOf('\n', start - 1) + 1;
    if (key === 'Enter') {
      var before = text.slice(lineStart, start), indent = (before.match(/^[ \t]*/) || [''])[0];
      if (/:\s*$/.test(before)) indent += '    ';
      editor.setRangeText('\n' + indent, start, end, 'end'); return;
    }
    if (!shift && start === end) { editor.setRangeText('    ', start, end, 'end'); return; }
    var last = start !== end && text[end - 1] === '\n' ? end - 1 : end;
    var finish = text.indexOf('\n', last);
    if (finish < 0) finish = text.length;
    var chunk = text.slice(lineStart, finish), removedFirst = 0, delta = 0;
    var replacement = chunk.split('\n').map(function (line, i) {
      var count = shift ? (line.match(/^(?: {1,4}|\t)/) || [''])[0].length : 0;
      if (!i) removedFirst = count;
      delta += shift ? -count : 4;
      return shift ? line.slice(count) : '    ' + line;
    }).join('\n');
    editor.setRangeText(replacement, lineStart, finish, 'preserve');
    var nextStart = Math.max(lineStart, start + (shift ? -removedFirst : 4));
    editor.setSelectionRange(nextStart, Math.max(nextStart, end + delta));
  }
  window.CursoCodigo = {snippet:snippet, render:render, bind:bind, canContinue:canContinue, accepted:accepted};
}());
