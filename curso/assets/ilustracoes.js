(function () {
  'use strict';
  var C = window.CursoApp;
  var cast = {
    mentora: {
      name: 'Lia',
      label: 'Lia, programadora experiente, de óculos e com um notebook',
      drawing: '<circle cx="48" cy="57" r="43" fill="var(--agent-bg)"/>' +
        '<path d="M20 65V37Q18 12 46 12Q74 12 72 39V69Z" fill="var(--text)"/>' +
        '<path d="M18 104V85Q22 68 47 68Q75 68 78 87V104Z" fill="var(--agent-ink)"/>' +
        '<path d="M38 64V75Q47 82 56 75V63" fill="var(--warm-soft)" stroke="var(--warm)" stroke-width="2"/>' +
        '<path d="M27 36Q40 35 48 23Q55 34 66 36V52Q65 71 47 72Q29 70 27 52Z" fill="var(--warm-soft)"/>' +
        '<path d="M28 27Q30 20 39 18M59 20Q66 25 67 32" fill="none" stroke="var(--muted)" stroke-width="4" stroke-linecap="round"/>' +
        '<g fill="none" stroke="var(--text)" stroke-width="2"><rect x="29" y="41" width="15" height="12" rx="4"/><rect x="50" y="41" width="15" height="12" rx="4"/><path d="M44 45H50"/></g>' +
        '<circle cx="37" cy="47" r="2" fill="var(--text)"/><circle cx="57" cy="47" r="2" fill="var(--text)"/>' +
        '<path d="M47 49L45 56H48M40 62Q47 67 55 61" fill="none" stroke="var(--warm)" stroke-width="2" stroke-linecap="round"/>' +
        '<path d="M22 88L31 96M74 88L66 96" stroke="var(--warm-soft)" stroke-width="8" stroke-linecap="round"/>' +
        '<path d="M24 78H73L69 103H28Z" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/>' +
        '<path d="M41 86L36 91L41 96M55 86L60 91L55 96M51 84L46 98" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>' +
        '<path d="M20 104H77" stroke="var(--text)" stroke-width="4" stroke-linecap="round"/>'
    },
    dona: {
      name: 'Marta',
      label: 'Marta, dona da loja, preocupada com os números no celular',
      drawing: '<circle cx="46" cy="57" r="43" fill="var(--warm-soft)"/>' +
        '<path d="M16 101V85Q18 69 43 69Q68 69 73 87L77 105H17Z" fill="var(--warm)"/>' +
        '<path d="M34 68V77Q43 85 52 77V66" fill="var(--warm-soft)" stroke="var(--warm)" stroke-width="2"/>' +
        '<circle cx="27" cy="22" r="13" fill="var(--text)"/>' +
        '<path d="M20 57V40Q18 17 43 16Q70 17 67 43L64 68L20 66Z" fill="var(--text)"/>' +
        '<path d="M25 39Q39 37 45 26Q51 36 61 39V51Q61 71 44 73Q26 70 25 52Z" fill="var(--warm-soft)"/>' +
        '<path d="M29 44L37 40M49 40L57 43" fill="none" stroke="var(--text)" stroke-width="3" stroke-linecap="round"/>' +
        '<ellipse cx="34" cy="49" rx="2" ry="3" fill="var(--text)"/><ellipse cx="53" cy="49" rx="2" ry="3" fill="var(--text)"/>' +
        '<path d="M43 49L41 56H44M37 64Q43 59 50 63M29 55L33 56M53 56L57 54" fill="none" stroke="var(--warm)" stroke-width="2" stroke-linecap="round"/>' +
        '<circle cx="24" cy="58" r="3" fill="var(--warm)"/><circle cx="62" cy="58" r="3" fill="var(--warm)"/>' +
        '<path d="M27 86L46 96L69 83" fill="none" stroke="var(--warm-soft)" stroke-width="9" stroke-linecap="round"/>' +
        '<g transform="rotate(12 75 72)"><rect x="64" y="53" width="24" height="37" rx="5" fill="var(--surface)" stroke="var(--text)" stroke-width="3"/>' +
        '<path d="M70 60H81M70 67H78M70 72H76" stroke="var(--warm)" stroke-width="3" stroke-linecap="round"/><circle cx="76" cy="83" r="2" fill="var(--text)"/></g>' +
        '<path d="M70 87L72 79" stroke="var(--warm-soft)" stroke-width="7" stroke-linecap="round"/>' +
        '<path d="M77 34L83 29M81 42H89" stroke="var(--warm)" stroke-width="3" stroke-linecap="round"/>'
    },
    voce: {
      name: 'Você',
      label: 'Você, analista, com expressão atenta e um caderno de anotações',
      drawing: '<circle cx="48" cy="57" r="43" fill="var(--accent-soft)"/>' +
        '<path d="M16 105V88Q18 70 47 70Q76 70 79 88V105Z" fill="var(--accent)"/>' +
        '<path d="M38 65V76Q47 84 56 76V65" fill="var(--warm-soft)" stroke="var(--warm)" stroke-width="2"/>' +
        '<path d="M24 39Q21 18 47 17Q71 17 71 40L67 57H28Z" fill="var(--text)"/>' +
        '<path d="M29 37Q43 37 51 28Q57 35 65 37V54Q63 72 47 73Q30 71 28 53Z" fill="var(--warm-soft)"/>' +
        '<path d="M32 43Q36 41 40 43M53 43Q58 40 62 42" fill="none" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>' +
        '<ellipse cx="36" cy="49" rx="2" ry="3" fill="var(--text)"/><ellipse cx="58" cy="49" rx="2" ry="3" fill="var(--text)"/>' +
        '<path d="M47 49L45 56H48M41 62Q47 66 54 61" fill="none" stroke="var(--warm)" stroke-width="2" stroke-linecap="round"/>' +
        '<g transform="rotate(-9 57 89)"><rect x="37" y="76" width="42" height="31" rx="4" fill="var(--surface)" stroke="var(--text)" stroke-width="2"/>' +
        '<path d="M45 77V105M51 84H70M51 91H70M51 98H62" stroke="var(--accent)" stroke-width="2"/>' +
        '<path d="M35 82H40M35 91H40M35 100H40" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/></g>' +
        '<path d="M27 91L39 98M76 92L70 87" fill="none" stroke="var(--warm-soft)" stroke-width="8" stroke-linecap="round"/>' +
        '<path d="M67 85L77 71" stroke="var(--warm)" stroke-width="4" stroke-linecap="round"/>'
    },
    agente: {
      name: 'Agente',
      label: 'Agente, assistente em forma de bloco arredondado flutuante, sorrindo',
      drawing: '<circle cx="48" cy="57" r="43" fill="var(--agent-bg)"/>' +
        '<ellipse cx="48" cy="98" rx="24" ry="4" fill="var(--line)"/>' +
        '<path d="M22 36Q48 25 73 36Q82 53 73 79Q48 90 22 79Q13 56 22 36Z" fill="var(--agent-ink)"/>' +
        '<rect x="25" y="43" width="46" height="30" rx="12" fill="var(--agent-bg)"/>' +
        '<path d="M34 54Q37 49 40 54M55 54Q58 49 61 54M41 62Q48 70 55 62" fill="none" stroke="var(--agent-ink)" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M74 15V27M68 21H80M15 78V86M11 82H19" stroke="var(--warm)" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="21" cy="27" r="3" fill="var(--accent)"/>'
    }
  };
  function character(who) { return Object.prototype.hasOwnProperty.call(cast, who) ? cast[who] : null; }
  function avatar(who) {
    var person = character(who); if (!person) return '';
    return '<svg class="cast-avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 112" width="96" height="112" role="img" aria-label="' + C.esc(person.label) + '" focusable="false">' + person.drawing + '</svg>';
  }
  function comic(lines, part) {
    if (!Array.isArray(lines)) return '';
    var turns = lines.map(function (line) {
      var person = character(line.quem);
      // The assistant only joins the story once the learner builds it, in Part B.
      if (!person || (line.quem === 'agente' && ['B', 'C', 'D'].indexOf(part) < 0)) return '';
      return '<li class="comic-turn speaker-' + line.quem + '">' + avatar(line.quem) + '<div class="comic-dialogue"><p class="comic-name">' + person.name + '</p><div class="comic-bubble">' + C.rich(line.fala) + '</div></div></li>';
    }).join('');
    return turns ? '<ol class="comic" aria-label="' + (C.curso.id === 'leetcode' ? 'Conversa com a mentora' : 'Conversa na loja') + '">' + turns + '</ol>' : '';
  }
  function numberBR(value) {
    if (typeof value === 'number') return Number.isFinite(value) ? value : null;
    var text = String(value == null ? '' : value).trim().replace(/\u2212/g, '-').replace(/R\$/g, '').replace(/[\s\u00a0]/g, '').replace(/%$/, '');
    if (!/^[+-]?(?:\d{1,3}(?:\.\d{3})+|\d+)(?:,\d+)?$/.test(text)) return null;
    var number = Number(text.replace(/\./g, '').replace(',', '.'));
    return Number.isFinite(number) ? number : null;
  }
  function chart(config, tables) {
    if (!config) return '';
    var table = (tables || {})[config.tabela];
    if (!table || !Array.isArray(table.linhas) || !Array.isArray(table.colunas)) return '';
    var labelColumn = typeof config.rotulo === 'number' ? config.rotulo : table.colunas.indexOf(config.rotulo);
    var valueColumn = typeof config.valor === 'number' ? config.valor : table.colunas.indexOf(config.valor);
    if (!Number.isInteger(labelColumn) || !Number.isInteger(valueColumn) || labelColumn < 0 || valueColumn < 0 || labelColumn >= table.colunas.length || valueColumn >= table.colunas.length) return '';
    var rows = table.linhas.map(function (row, i) {
      var raw = row[valueColumn];
      return {label:row[labelColumn], value:numberBR(raw), text:typeof raw === 'number' ? raw.toLocaleString('pt-BR') : String(raw == null ? 'Sem valor' : raw), highlighted:(config.destaque || []).indexOf(i) >= 0};
    });
    var positive = 0, negative = 0, room = 1;
    rows.forEach(function (row) {
      if (row.value !== null) { positive = Math.max(positive, row.value); negative = Math.max(negative, -row.value); }
      room = Math.max(room, row.text.length);
    });
    var extent = positive + negative || 1, origin = negative / extent * 100;
    return '<figure class="story-chart' + (negative ? ' has-negative' : '') + '" style="--chart-value-room:' + Math.min(room + 2, 18) + 'ch"><figcaption>' + C.esc(table.titulo) + '</figcaption><p class="chart-unit">' + C.esc(table.colunas[valueColumn]) + '</p><ul class="chart-rows">' + rows.map(function (row) {
      var width = Math.abs(row.value || 0) / extent * 100, start = row.value < 0 ? origin - width : origin, end = row.value < 0 ? start : origin + width;
      return '<li class="chart-row' + (row.highlighted ? ' is-highlighted' : '') + '"><div class="chart-row-label">' + C.esc(row.label) + (row.highlighted ? '<span class="chart-highlight">Em destaque</span>' : '') + '</div><div class="chart-track"><span class="chart-zero" aria-hidden="true" style="left:' + origin + '%"></span><span class="chart-bar" aria-hidden="true" style="left:' + start + '%;width:' + width + '%"></span><span class="chart-value' + (row.value < 0 ? ' is-negative' : '') + '" style="left:' + end + '%">' + C.esc(row.text) + (row.value === null ? '<span class="sr-only">: sem valor numérico para a barra</span>' : '') + '</span></div></li>';
    }).join('') + '</ul>' + (config.nota ? '<div class="chart-note">' + C.rich(config.nota) + '</div>' : '') + '</figure>';
  }
  function scene(text) {
    if (!text) return '';
    var marta = /\bmarta\b/i.test(text);
    return '<div class="challenge-scene' + (marta ? ' with-marta' : '') + '">' + (marta ? avatar('dona') : '') + '<aside class="callout scene"><strong>A situação</strong>' + C.rich(text) + '</aside></div>';
  }
  window.CursoIlustracoes = {avatar:avatar, comic:comic, chart:chart, scene:scene, numberBR:numberBR};
}());
