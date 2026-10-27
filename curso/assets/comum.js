(function () {
  'use strict';
  var memory = {}, available = true, bridge = null, initialized = false, callbacks = [];
  // Several courses share the platform (curso/cursos.js). The URL picks one (?curso=leetcode); no
  // parameter is the analyst course, whose storage key stays 'progresso' (progress already saved
  // there keeps working). Each course keeps its own progress, XP and streak.
  var COURSES = window.CURSOS || [{id:'agente', pasta:'aulas/', progresso:'progresso'}];
  var COURSE = COURSES.filter(function (c) { return c.id === new URLSearchParams(location.search).get('curso'); })[0] || COURSES[0];
  function storageKey(key) { return key === 'progresso' ? COURSE.progresso : key; }
  function link(page, aula, courseId) {
    var target = COURSES.filter(function (c) { return c.id === courseId; })[0] || COURSE;
    var q = [];
    if (target !== COURSES[0]) q.push('curso=' + encodeURIComponent(target.id));
    if (aula !== undefined) q.push('aula=' + encodeURIComponent(aula));
    return page + (q.length ? '?' + q.join('&') : '');
  }
  // Permanent progress: curso/tools/servidor.py keeps it in a local SQLite file. The served course
  // talks to it same-origin; the course opened from disk talks to it on localhost:8765.
  var API = location.protocol === 'file:' ? 'http://localhost:8765/api/' : /^https?:$/.test(location.protocol) ? 'api/' : null;
  var pushTimer = null, synced = false;
  function read(key, fallback) {
    key = storageKey(key);
    if (Object.prototype.hasOwnProperty.call(memory, key)) return memory[key];
    try { var raw = localStorage.getItem('curso.' + key); return raw === null ? fallback : JSON.parse(raw); }
    catch (_) { available = false; return Object.prototype.hasOwnProperty.call(memory, key) ? memory[key] : fallback; }
  }
  function write(key, value) {
    key = storageKey(key);
    memory[key] = value;
    try { localStorage.setItem('curso.' + key, JSON.stringify(value)); }
    catch (_) { available = false; notice(); }
    if (bridge) bridge.contentWindow.postMessage({courseStorage:'write', key:key, value:value}, '*');
    if (synced && (key === COURSE.progresso || key === 'tema')) { clearTimeout(pushTimer); pushTimer = setTimeout(push, 600); }
  }
  function push() {
    clearTimeout(pushTimer); pushTimer = null;
    if (!API || !window.fetch) return;
    try { fetch(API + 'progresso', {method:'PUT', headers:{'Content-Type':'application/json'}, keepalive:true, body:(function () { var b = {tema:read('tema', null)}; b[COURSE.progresso] = read('progresso', {}); return JSON.stringify(b); }())}).catch(function () {}); } catch (_) {}
  }
  // The furthest progress of each lesson wins: completed, then more answers, then a later card.
  function rank(l) { l = l || {}; return [l.completed ? 1 : 0, Object.keys(l.answers || {}).length, l.pos || 0]; }
  function further(a, b) { var x = rank(a), y = rank(b); for (var i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i] ? a : b; return a; }
  function merge(local, remote) {
    local = local && typeof local === 'object' ? local : {}; remote = remote && typeof remote === 'object' ? remote : {};
    var out = {}, k;
    for (k in remote) out[k] = remote[k];
    for (k in local) out[k] = local[k];
    var la = local.lessons || {}, ra = remote.lessons || {}; out.lessons = {};
    Object.keys(ra).concat(Object.keys(la)).forEach(function (n) { out.lessons[n] = la[n] && ra[n] ? further(la[n], ra[n]) : la[n] || ra[n]; });
    var days = (local.days || []).concat(remote.days || []);
    out.days = days.filter(function (d, i) { return days.indexOf(d) === i; }).sort();
    out.unlock = !!(local.unlock || remote.unlock);
    return out;
  }
  function syncThen(done) {
    if (!API || !window.fetch) { done(); return; }
    var finished = false, timer = setTimeout(finish, 2500);
    function finish() { if (finished) return; finished = true; clearTimeout(timer); done(); }
    fetch(API + 'progresso').then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (!j || finished) { finish(); return; }
      var merged = merge(read('progresso', {}), j[COURSE.progresso] || {});
      memory[COURSE.progresso] = merged; synced = true; write('progresso', merged);
      if (j.tema && read('tema', null) === null) write('tema', j.tema);
      if (JSON.stringify(merged) !== JSON.stringify(j[COURSE.progresso])) push();
      finish();
    }).catch(finish);
  }
  window.addEventListener('pagehide', function () { if (pushTimer) push(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden && pushTimer) push(); });
  function notice() {
    var el = document.getElementById('storage-notice');
    if (el && !available) { el.hidden = false; el.textContent = 'Não foi possível confirmar o salvamento neste navegador. Você pode fazer a aula, mas o progresso pode se perder ao fechar ou recarregar.'; }
  }
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function inline(text) {
    return esc(text).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]|`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*/g, function (_, term, def, code, bold, italic) {
      if (term) return '<span class="term-wrap"><button type="button" class="term" aria-expanded="false" aria-label="Definição de ' + term + '">' + term + '</button><span class="definition" role="tooltip">' + def + '</span></span>';
      if (code) return '<code>' + code + '</code>';
      if (bold) return '<strong>' + bold + '</strong>';
      return '<em>' + italic + '</em>';
    });
  }
  function rich(text) {
    return String(text || '').split(/\n\s*\n/).map(function (block) {
      var lines = block.split('\n'), out = '', inList = false;
      lines.forEach(function (line) {
        if (/^- /.test(line)) { if (!inList) out += '<ul>'; inList = true; out += '<li>' + inline(line.slice(2)) + '</li>'; }
        else { if (inList) out += '</ul>'; inList = false; out += '<p>' + inline(line) + '</p>'; }
      });
      return out + (inList ? '</ul>' : '');
    }).join('');
  }
  function day(date) { return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'); }
  function streak(days) {
    var d = new Date(), n = 0;
    if (days.indexOf(day(d)) < 0) d.setDate(d.getDate() - 1);
    while (days.indexOf(day(d)) >= 0) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function state() {
    var data = read('progresso', {});
    if (!data || typeof data !== 'object' || Array.isArray(data)) data = {};
    if (!data.lessons || typeof data.lessons !== 'object') data.lessons = {};
    if (!Array.isArray(data.days)) data.days = [];
    return data;
  }
  function unlocked(n, data) {
    if (n === '00') return true;
    var i = window.CURSO.aulas.findIndex(function (a) { return a.n === n; });
    return i >= 0 && window.CURSO.aulas[i].pronta && (data.unlock || (data.lessons[n] || {}).completed || i === 0 || !!(data.lessons[window.CURSO.aulas[i - 1].n] || {}).completed);
  }
  function ready(callback) { if (initialized) callback(); else callbacks.push(callback); }
  // The course index (window.CURSO) is loaded for the course in the URL, then progress is synced.
  function loadIndex(done) {
    var tag = document.createElement('script'); tag.src = COURSE.pasta + 'indice.js';
    tag.onload = done; tag.onerror = done; document.head.appendChild(tag);
  }
  function start() { loadIndex(function () { syncThen(initialize); }); }
  function initialize() {
    if (initialized) return;
    initialized = true;
    var savedTheme = read('tema', null);
    if (savedTheme === 'dark' || savedTheme === 'light') document.documentElement.dataset.theme = savedTheme;
    document.querySelectorAll('.theme-toggle').forEach(function (button) {
      var dark = document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
      button.setAttribute('aria-label', dark ? 'Ativar modo claro' : 'Ativar modo escuro');
    });
    document.querySelectorAll('a[href="index.html"]').forEach(function (a) { a.setAttribute('href', link('index.html')); });
    document.documentElement.dataset.curso = COURSE.id;
    document.title = (document.body.classList.contains('player-page') ? 'Sua aula' : 'Sua trilha') + ' · ' + COURSE.titulo;
    callbacks.splice(0).forEach(function (callback) { callback(); });
    notice();
  }
  var theme = read('tema', null);
  if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.theme-toggle').forEach(function (button) {
      function label() { var dark = document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches); button.setAttribute('aria-label', dark ? 'Ativar modo claro' : 'Ativar modo escuro'); }
      label();
      button.addEventListener('click', function () {
        var dark = document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.dataset.theme = dark ? 'light' : 'dark'; write('tema', dark ? 'light' : 'dark'); label();
      });
    });
    // A stable file URL centralizes storage even when the browser isolates each HTML file.
    if (location.protocol === 'file:') {
      var frame = document.createElement('iframe'); frame.hidden = true; frame.title = 'Progresso local'; frame.src = 'assets/progresso.html';
      var timeout = setTimeout(function () { available = false; start(); }, 1800);
      window.addEventListener('message', function (event) {
        if (event.source !== frame.contentWindow || !event.data) return;
        if (event.data.courseStorage === 'storage-error') { available = false; notice(); return; }
        if (event.data.courseStorage !== 'snapshot') return;
        if (initialized) return;
        clearTimeout(timeout);
        if (event.data.available) {
          bridge = frame;
          ['progresso', 'tema'].forEach(function (key) {
            var sk = storageKey(key);
            var value = Object.prototype.hasOwnProperty.call(event.data.values, sk) ? event.data.values[sk] : read(key, null);
            if (value !== null) write(key, value);
          });
        } else { available = false; }
        start();
      });
      frame.onerror = start;
      document.body.appendChild(frame);
    } else start();
  });
  document.addEventListener('click', function (event) {
    var target = event.target.closest('.term');
    document.querySelectorAll('.term[aria-expanded="true"]').forEach(function (el) { if (el !== target) el.setAttribute('aria-expanded', 'false'); });
    if (target) target.setAttribute('aria-expanded', target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') document.querySelectorAll('.term').forEach(function (el) { el.setAttribute('aria-expanded', 'false'); el.blur(); }); });
  window.CursoApp = {api:API, merge:merge, curso:COURSE, cursos:COURSES, link:link, read:read, write:write, esc:esc, inline:inline, rich:rich, day:day, streak:streak, state:state, unlocked:unlocked, ready:ready};
}());
