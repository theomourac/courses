(function () {
  'use strict';
  var C = window.CursoApp, I = window.CursoIlustracoes;
  var names = {fluxo:'Fluxo de etapas', arvore:'Árvore de conceitos', piramide:'Pirâmide de conceitos', lado_a_lado:'Comparação lado a lado', cascata:'Gráfico de ponte', funil:'Funil de etapas'};
  function list(items, className) {
    return '<ul class="' + className + '">' + items.map(function (item) { return '<li>' + C.inline(item) + '</li>'; }).join('') + '</ul>';
  }
  function flow(config) {
    if (!Array.isArray(config.etapas) || !config.etapas.length) return '';
    return '<ol class="diagram-flow' + (config.etapas.length > 4 ? ' is-long' : '') + '">' + config.etapas.map(function (step, i) {
      var highlighted = i === config.destaque;
      return '<li><div class="diagram-box' + (highlighted ? ' diagram-highlight' : '') + '"><span class="diagram-step">' + (i + 1) + (highlighted ? ' · Em destaque' : '') + '</span>' + C.inline(step) + '</div>' + (i < config.etapas.length - 1 ? '<span class="diagram-arrow" aria-hidden="true"></span>' : '') + '</li>';
    }).join('') + '</ol>';
  }
  function tree(config) {
    if (!config.raiz || !Array.isArray(config.ramos) || !config.ramos.length) return '';
    return '<div class="diagram-tree"><div class="diagram-box diagram-root">' + C.inline(config.raiz) + '</div><p class="diagram-coverage"><span>Juntos, os ramos cobrem a raiz.</span></p><ul class="diagram-branches" style="--branches:' + config.ramos.length + '">' + config.ramos.map(function (branch) {
      return '<li class="diagram-branch"><div class="diagram-box">' + C.inline(branch.texto) + '</div>' + (Array.isArray(branch.filhos) && branch.filhos.length ? list(branch.filhos, 'diagram-children') : '') + '</li>';
    }).join('') + '</ul></div>';
  }
  function pyramid(config) {
    if (!Array.isArray(config.niveis) || !config.niveis.length) return '';
    return '<ol class="diagram-pyramid">' + config.niveis.map(function (level, i) {
      var width = config.niveis.length === 1 ? 100 : 60 + 40 * i / (config.niveis.length - 1);
      return '<li class="diagram-box" style="width:' + width + '%"><span class="diagram-step">' + (i === 0 ? 'Topo' : i === config.niveis.length - 1 ? 'Base' : 'Nível ' + (i + 1)) + '</span>' + C.inline(level) + '</li>';
    }).join('') + '</ol>';
  }
  function meaning(title) {
    var text = String(title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    if (/\b(errad[oa]s?|incorret[oa]s?|injust[oa]s?|invalid[oa]s?|inadequad[oa]s?|cuidado|atencao|evite)\b/.test(text)) return 'caution';
    if (/\b(nao|sem)\b/.test(text)) return '';
    return /\b(cert[oa]s?|corret[oa]s?|just[oa]s?|valid[oa]s?|adequad[oa]s?|recomendad[oa]s?)\b/.test(text) ? 'good' : '';
  }
  function comparison(config) {
    if (!config.esquerda || !config.direita) return '';
    return '<div class="diagram-comparison">' + [config.esquerda, config.direita].map(function (side, i) {
      var tone = meaning(side.titulo);
      if ((i === 0 && tone !== 'good') || (i === 1 && tone !== 'caution')) tone = '';
      var mark = tone ? '<span class="diagram-mark" aria-hidden="true">' + (tone === 'good' ? '✓' : '!') + '</span><span class="sr-only">' + (tone === 'good' ? 'Certo: ' : 'Cuidado: ') + '</span>' : '';
      return '<section class="diagram-box diagram-side' + (tone ? ' diagram-' + tone : '') + '"><h2>' + mark + C.inline(side.titulo) + '</h2>' + list(Array.isArray(side.itens) ? side.itens : [], 'diagram-items') + '</section>';
    }).join('') + '</div>';
  }
  function readRows(config, tables) {
    var table = (tables || {})[config.tabela];
    if (!table || !Array.isArray(table.colunas) || !Array.isArray(table.linhas) || !table.linhas.length) return null;
    var label = typeof config.rotulo === 'number' ? config.rotulo : table.colunas.indexOf(config.rotulo);
    var value = typeof config.valor === 'number' ? config.valor : table.colunas.indexOf(config.valor);
    if (![label, value].every(function (column) { return Number.isInteger(column) && column >= 0 && column < table.colunas.length; })) return null;
    var rows = table.linhas.map(function (row) {
      if (!Array.isArray(row)) return {value:null};
      var raw = row[value];
      return {label:row[label], value:I.numberBR(raw), text:typeof raw === 'number' ? raw.toLocaleString('pt-BR', {maximumFractionDigits:20}) : String(raw == null ? '' : raw)};
    });
    return rows.some(function (row) { return row.value === null; }) ? null : {table:table, unit:table.colunas[value], rows:rows};
  }
  function waterfall(data) {
    var rows = data.rows, total = 0, low = 0, high = 0;
    if (rows.length < 2) return '';
    var bars = rows.map(function (row, i) {
      var endpoint = i === 0 || i === rows.length - 1, start = endpoint ? 0 : total;
      var end = endpoint ? row.value : total + row.value;
      total = end; low = Math.min(low, start, end); high = Math.max(high, start, end);
      return {row:row, start:start, end:end, endpoint:endpoint};
    });
    var extent = high - low || 1;
    if (!Number.isFinite(extent) || bars.some(function (bar) { return !Number.isFinite(bar.end); })) return '';
    // Long series use the same cumulative scale horizontally, with a row per part.
    var dense = rows.length > 5 || rows.some(function (row) { return row.text.length > 10 || row.text.length * 7 > 240 / rows.length; });
    return '<p class="diagram-unit">' + C.esc(data.unit) + '</p><ol class="diagram-waterfall' + (dense ? ' is-dense' : '') + '" style="--bar-count:' + rows.length + ';--zero:' + ((0 - low) / extent * 100) + '%">' + bars.map(function (bar, i) {
      var direction = bar.endpoint ? 'total' : bar.row.value > 0 ? 'gain' : bar.row.value < 0 ? 'loss' : 'unchanged';
      var kind = i === 0 ? 'Início' : i === rows.length - 1 ? 'Fim' : bar.row.value > 0 ? 'Aumento' : bar.row.value < 0 ? 'Redução' : 'Sem variação';
      var label = bar.row.text;
      if (!bar.endpoint && bar.row.value > 0 && !/^\s*\+/.test(label)) label = '+' + label;
      return '<li class="waterfall-item waterfall-' + direction + '" style="--bar-start:' + ((Math.min(bar.start, bar.end) - low) / extent * 100) + '%;--bar-size:' + (Math.abs(bar.end - bar.start) / extent * 100) + '%;--bar-end:' + ((bar.end - low) / extent * 100) + '%"><div class="waterfall-value">' + C.esc(label) + '</div><div class="waterfall-track" aria-hidden="true"><span class="waterfall-zero"></span><span class="waterfall-bar"></span>' + (i < bars.length - 1 ? '<span class="waterfall-connector"></span>' : '') + '</div><div class="waterfall-label">' + C.inline(bar.row.label) + '<span class="diagram-step">' + kind + '</span></div></li>';
    }).join('') + '</ol>';
  }
  function funnel(data) {
    var rows = data.rows;
    if (rows.some(function (row, i) { return row.value < 0 || (i > 0 && row.value > rows[i - 1].value); })) return '';
    var maximum = rows[0].value;
    return '<p class="diagram-unit">' + C.esc(data.unit) + '</p><ol class="diagram-funnel">' + rows.map(function (row, i) {
      var previous = i ? rows[i - 1].value : null;
      var rate = !i ? 'Etapa inicial' : previous === 0 ? '% não calculável: etapa anterior igual a zero' : (row.value / previous * 100).toLocaleString('pt-BR', {maximumFractionDigits:1}) + '% da etapa anterior';
      var width = maximum > 0 ? row.value / maximum * 100 : 0;
      return '<li><div class="funnel-label">' + C.inline(row.label) + '</div><div class="funnel-value">' + C.esc(row.text) + '</div><div class="funnel-track" aria-hidden="true"><span class="funnel-bar" style="width:' + width + '%"></span></div><div class="funnel-rate">' + C.esc(rate) + '</div></li>';
    }).join('') + '</ol>';
  }
  function render(config, tables) {
    if (!config || !Object.prototype.hasOwnProperty.call(names, config.tipo)) return '';
    var content = '', title = names[config.tipo];
    if (config.tipo === 'fluxo') content = flow(config);
    if (config.tipo === 'arvore') content = tree(config);
    if (config.tipo === 'piramide') content = pyramid(config);
    if (config.tipo === 'lado_a_lado') content = comparison(config);
    if (config.tipo === 'cascata' || config.tipo === 'funil') {
      var data = readRows(config, tables);
      if (data) { title = data.table.titulo || title; content = config.tipo === 'cascata' ? waterfall(data) : funnel(data); }
    }
    if (!content) content = '<p class="diagram-unavailable">Não foi possível desenhar este diagrama com os dados disponíveis.</p>';
    // A figure, rather than role=img, keeps the real text and nested lists accessible.
    return '<figure class="concept-diagram diagram-' + config.tipo + '" aria-label="' + C.esc(names[config.tipo] + ': ' + (config.nota || title)) + '"><div class="diagram-heading">' + C.esc(title) + '</div>' + content + '<figcaption class="diagram-note">' + C.rich(config.nota) + '</figcaption></figure>';
  }
  window.CursoDiagramas = {render:render};
}());
