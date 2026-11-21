/* Calendrier du GDR SciLog (page /calendrier/).
 * Lit les évènements préparés par layouts/calendrier/section.html,
 * affiche une vue mensuelle ou la liste des évènements à venir, et filtre
 * par type, groupe thématique et défi.
 *
 * Les filtres sont repris dans l'adresse de la page
 * (?types=reunion,appel&gt=lvp&defi=ipp) pour pouvoir partager un lien
 * filtré, et peuvent être mémorisés dans le navigateur.
 */
(function () {
  'use strict';

  var dataEl = document.getElementById('cal-data');
  var app = document.getElementById('cal-app');
  if (!dataEl || !app) return;

  var data;
  try {
    data = JSON.parse(dataEl.textContent);
  } catch (e) {
    return; // la liste de secours reste affichée
  }

  var TYPES = data.types || {};
  var GROUPES = data.groupes || {};
  var DEFIS = data.defis || {};
  var STORAGE_KEY = 'scilog-calendrier-filtres';
  var MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
    'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  var JOURS = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];

  // ---------------------------------------------------------------
  //  Évènements
  // ---------------------------------------------------------------

  // "2026-11-16" ou "2026-11-16T10:00" -> Date locale (pas de décalage UTC).
  function parseDate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/.exec(String(s || ''));
    if (!m) return null;
    return {
      date: new Date(+m[1], +m[2] - 1, +m[3], m[4] ? +m[4] : 0, m[5] ? +m[5] : 0),
      hasTime: !!m[4]
    };
  }

  function dayKey(d) {
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  var events = (data.evenements || []).map(function (raw, i) {
    var debut = parseDate(raw.debut);
    if (!debut) return null;
    var fin = parseDate(raw.fin);
    if (fin && fin.date < debut.date) fin = null;
    return {
      id: 'cal-ev-' + i,
      titre: raw.titre || 'Sans titre',
      type: TYPES[raw.type] ? raw.type : 'autre',
      debut: debut.date,
      fin: fin ? fin.date : null,
      hasTime: debut.hasTime,
      finHasTime: fin ? fin.hasTime : false,
      lieu: raw.lieu || '',
      visio: raw.visio || '',
      lien: raw.lien || '',
      description: raw.description || '',
      groupes: [].concat(raw.groupes || []),
      defis: [].concat(raw.defis || [])
    };
  }).filter(Boolean).sort(function (a, b) { return a.debut - b.debut; });

  // Dernier jour (inclus) d'un évènement.
  function lastDay(ev) {
    return startOfDay(ev.fin || ev.debut);
  }

  // Terminé avant aujourd'hui.
  function isPast(ev) {
    return lastDay(ev) < startOfDay(new Date());
  }

  // ---------------------------------------------------------------
  //  État des filtres
  // ---------------------------------------------------------------

  // Ordre d'affichage des types (les données YAML arrivent triées par nom).
  var ORDRE = ['reunion', 'conference', 'soutenance', 'appel'];
  var typeKeys = Object.keys(TYPES).sort(function (a, b) {
    var ia = ORDRE.indexOf(a), ib = ORDRE.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b);
  });
  if (events.some(function (e) { return e.type === 'autre'; })) typeKeys.push('autre');

  var state = {
    types: typeKeys.slice(), // types cochés
    gts: [],                 // vide = tous
    defis: [],               // vide = tous
    view: 'mois',
    month: startOfDay(new Date())
  };
  state.month.setDate(1);

  function splitParam(v) {
    return v ? v.split(',').filter(Boolean) : [];
  }

  function loadState() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = ['types', 'gt', 'defi', 'vue'].some(function (k) { return params.has(k); });
    var saved = null;
    try { saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 'null'); } catch (e) { /* ignoré */ }
    document.getElementById('cal-remember').checked = !!saved;

    var src = fromUrl
      ? { types: params.has('types') ? splitParam(params.get('types')) : null, gts: splitParam(params.get('gt')), defis: splitParam(params.get('defi')), view: params.get('vue') }
      : saved || {};

    if (Array.isArray(src.types)) {
      state.types = src.types.filter(function (t) { return typeKeys.indexOf(t) !== -1; });
    }
    if (Array.isArray(src.gts)) state.gts = src.gts.filter(function (g) { return g in GROUPES; });
    if (Array.isArray(src.defis)) state.defis = src.defis.filter(function (d) { return d in DEFIS; });
    if (src.view === 'liste' || src.view === 'mois') state.view = src.view;
  }

  function saveState() {
    var params = new URLSearchParams();
    if (state.types.length !== typeKeys.length) params.set('types', state.types.join(','));
    if (state.gts.length) params.set('gt', state.gts.join(','));
    if (state.defis.length) params.set('defi', state.defis.join(','));
    if (state.view !== 'mois') params.set('vue', state.view);
    var qs = params.toString();
    window.history.replaceState(null, '', window.location.pathname + (qs ? '?' + qs : '') + window.location.hash);

    try {
      if (document.getElementById('cal-remember').checked) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
          types: state.types, gts: state.gts, defis: state.defis, view: state.view
        }));
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) { /* stockage indisponible : on ignore */ }
  }

  function intersects(a, b) {
    return a.some(function (x) { return b.indexOf(x) !== -1; });
  }

  function matches(ev) {
    if (state.types.indexOf(ev.type) === -1) return false;
    if (state.gts.length && !intersects(ev.groupes, state.gts)) return false;
    if (state.defis.length && !intersects(ev.defis, state.defis)) return false;
    return true;
  }

  // ---------------------------------------------------------------
  //  Petits utilitaires d'affichage
  // ---------------------------------------------------------------

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') node.textContent = attrs[k];
      else if (k === 'className') node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function formatTime(d) {
    return d.getHours() + 'h' + pad(d.getMinutes());
  }

  function formatDay(d) {
    return d.getDate() + (d.getDate() === 1 ? 'er' : '') + ' ' + MOIS[d.getMonth()] + ' ' + d.getFullYear();
  }

  function formatWhen(ev) {
    var s = formatDay(ev.debut);
    if (ev.hasTime) s += ', ' + formatTime(ev.debut);
    if (ev.fin) {
      if (dayKey(ev.fin) === dayKey(ev.debut)) {
        if (ev.finHasTime) s += ' – ' + formatTime(ev.fin);
      } else {
        s += ' → ' + formatDay(ev.fin);
        if (ev.finHasTime) s += ', ' + formatTime(ev.fin);
      }
    }
    return s;
  }

  function typeLabel(t) {
    return TYPES[t] || 'Autres';
  }

  function tagLabels(ev) {
    var tags = ev.groupes.map(function (g) { return 'GT ' + (GROUPES[g] || g); })
      .concat(ev.defis.map(function (d) { return 'Défi ' + (DEFIS[d] || d); }));
    return tags;
  }

  // ---------------------------------------------------------------
  //  Filtres
  // ---------------------------------------------------------------

  function checkbox(name, value, label, checked, swatchType) {
    var input = el('input', { type: 'checkbox', name: name, value: value });
    input.checked = checked;
    return el('label', { className: 'cal-check' }, [
      input,
      swatchType ? el('span', { className: 'cal-swatch cal-type-' + swatchType, 'aria-hidden': 'true' }) : null,
      el('span', { text: label })
    ]);
  }

  function renderFilters() {
    var typesBox = document.getElementById('cal-types');
    typesBox.textContent = '';
    typeKeys.forEach(function (t) {
      typesBox.appendChild(checkbox('type', t, typeLabel(t), state.types.indexOf(t) !== -1, t));
    });

    [['cal-gts', 'gt', GROUPES, state.gts], ['cal-defis', 'defi', DEFIS, state.defis]].forEach(function (cfg) {
      var box = document.getElementById(cfg[0]);
      box.textContent = '';
      Object.keys(cfg[2]).sort(function (a, b) {
        return cfg[2][a].localeCompare(cfg[2][b], 'fr');
      }).forEach(function (k) {
        box.appendChild(checkbox(cfg[1], k, cfg[2][k], cfg[3].indexOf(k) !== -1));
      });
    });
    updateCounts();
  }

  function updateCounts() {
    document.getElementById('cal-gt-count').textContent = state.gts.length ? '(' + state.gts.length + ')' : '(tous)';
    document.getElementById('cal-defi-count').textContent = state.defis.length ? '(' + state.defis.length + ')' : '(tous)';
  }

  app.querySelector('.cal-filters').addEventListener('change', function (e) {
    var t = e.target;
    if (t.id === 'cal-remember') { saveState(); return; }
    if (t.type !== 'checkbox') return;
    var key = { type: 'types', gt: 'gts', defi: 'defis' }[t.name];
    if (!key) return;
    var list = state[key].filter(function (v) { return v !== t.value; });
    if (t.checked) list.push(t.value);
    state[key] = list;
    updateCounts();
    update();
  });

  document.getElementById('cal-reset').addEventListener('click', function () {
    state.types = typeKeys.slice();
    state.gts = [];
    state.defis = [];
    renderFilters();
    update();
  });

  // ---------------------------------------------------------------
  //  Vue mensuelle
  // ---------------------------------------------------------------

  function renderMonth(list) {
    var grid = document.getElementById('cal-grid');
    var year = state.month.getFullYear();
    var month = state.month.getMonth();
    var title = MOIS[month] + ' ' + year;
    document.getElementById('cal-month-title').textContent = title.charAt(0).toUpperCase() + title.slice(1);

    var first = new Date(year, month, 1);
    var offset = (first.getDay() + 6) % 7; // lundi = 0
    var gridStart = new Date(year, month, 1 - offset);
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var weeks = Math.ceil((offset + daysInMonth) / 7);
    var gridEnd = new Date(year, month, 1 - offset + weeks * 7 - 1);
    var todayKey = dayKey(new Date());

    // Évènements par jour (un évènement sur plusieurs jours apparaît chaque jour).
    var byDay = {};
    list.forEach(function (ev) {
      var d = startOfDay(ev.debut < gridStart ? gridStart : ev.debut);
      var end = lastDay(ev) > gridEnd ? gridEnd : lastDay(ev);
      for (; d <= end; d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)) {
        (byDay[dayKey(d)] = byDay[dayKey(d)] || []).push(ev);
      }
    });

    grid.textContent = '';
    var table = el('table', { className: 'cal-table' });
    var head = el('tr');
    JOURS.forEach(function (j) { head.appendChild(el('th', { scope: 'col', text: j })); });
    table.appendChild(el('thead', {}, [head]));
    var body = el('tbody');

    for (var w = 0; w < weeks; w++) {
      var row = el('tr');
      for (var i = 0; i < 7; i++) {
        var day = new Date(year, month, 1 - offset + w * 7 + i);
        var key = dayKey(day);
        var classes = ['cal-day'];
        if (day.getMonth() !== month) classes.push('cal-day--other');
        if (key === todayKey) classes.push('cal-day--today');
        var cell = el('td', { className: classes.join(' ') }, [
          el('span', { className: 'cal-day-num', text: String(day.getDate()) })
        ]);
        // Les jours des mois voisins restent vides : le détail est sous la grille.
        if (day.getMonth() === month) (byDay[key] || []).forEach(function (ev) {
          var label = (ev.hasTime && dayKey(ev.debut) === key ? formatTime(ev.debut) + ' ' : '') + ev.titre;
          cell.appendChild(el('a', {
            className: 'cal-pill cal-type-' + ev.type + (isPast(ev) ? ' cal-pill--past' : ''),
            href: '#' + ev.id,
            title: ev.titre + ' (' + formatWhen(ev) + ')',
            text: label
          }));
        });
        row.appendChild(cell);
      }
      body.appendChild(row);
    }
    table.appendChild(body);
    grid.appendChild(table);
  }

  // ---------------------------------------------------------------
  //  Liste détaillée
  // ---------------------------------------------------------------

  function renderList(list, emptyText) {
    var box = document.getElementById('cal-list');
    box.textContent = '';
    if (!list.length) {
      box.appendChild(el('p', { className: 'cal-empty', text: emptyText }));
      return;
    }
    var ul = el('ul', { className: 'cal-events' });
    list.forEach(function (ev) {
      var titleNode = ev.lien
        ? el('a', { href: ev.lien, text: ev.titre })
        : el('span', { text: ev.titre });
      var meta = [typeLabel(ev.type)].concat(tagLabels(ev)).join(' · ');

      var where = null;
      if (ev.lieu || ev.visio) {
        where = el('p', { className: 'cal-event-where' }, [
          ev.lieu ? document.createTextNode(ev.lieu) : null,
          ev.lieu && ev.visio ? document.createTextNode(' - ') : null,
          ev.visio ? el('a', { href: ev.visio, target: '_blank', rel: 'noopener', text: 'lien visio' }) : null
        ]);
      }

      ul.appendChild(el('li', { className: 'cal-event', id: ev.id }, [
        el('p', { className: 'cal-event-when' }, [
          el('strong', { text: formatWhen(ev) }),
          isPast(ev) ? el('span', { className: 'cal-past', text: 'passé' }) : null,
          document.createTextNode(' - ' + meta)
        ]),
        el('p', { className: 'cal-event-title' }, [titleNode]),
        where,
        ev.description ? el('p', { className: 'cal-event-desc', text: ev.description }) : null,
        isPast(ev) ? null : addToCalendar(ev)
      ]));
    });
    box.appendChild(ul);
  }

  // ---------------------------------------------------------------
  //  Export iCalendar (tout le calendrier filtré, ou un seul évènement)
  // ---------------------------------------------------------------

  function slugify(s) {
    return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // Fin effective : fin horaire (1 h par défaut) ou lendemain du dernier jour
  // (les agendas attendent une fin exclusive pour les journées entières).
  function endOf(ev) {
    if (ev.hasTime) {
      return ev.fin && ev.finHasTime ? ev.fin : new Date(ev.debut.getTime() + 3600 * 1000);
    }
    var last = lastDay(ev);
    return new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1);
  }

  function descriptionOf(ev) {
    return [ev.description, ev.visio ? 'Visio : ' + ev.visio : '', ev.lien].filter(Boolean).join('\n');
  }

  function download(filename, list) {
    var blob = new Blob([buildIcs(list)], { type: 'text/calendar;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = el('a', { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function icsEscape(s) {
    return String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');
  }

  function icsDate(d) {
    return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
  }

  function icsDateTime(d) {
    return icsDate(d) + 'T' + pad(d.getHours()) + pad(d.getMinutes()) + '00';
  }

  // Les lignes iCalendar sont limitées à 75 octets (UTF-8) : on replie les longues.
  var encoder = new TextEncoder();
  function fold(line) {
    var out = [];
    var cur = '';
    var bytes = 0;
    Array.from(line).forEach(function (ch) {
      var n = encoder.encode(ch).length;
      if (bytes + n > 74) {
        out.push(cur);
        cur = ' ';
        bytes = 1;
      }
      cur += ch;
      bytes += n;
    });
    out.push(cur);
    return out.join('\r\n');
  }

  function buildIcs(list) {
    var now = new Date();
    var stamp = now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate()) +
      'T' + pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + 'Z';
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//GDR SciLog//Calendrier//FR',
      'CALSCALE:GREGORIAN', 'X-WR-CALNAME:GDR SciLog'];
    list.forEach(function (ev) {
      lines.push('BEGIN:VEVENT');
      // UID stable (date + titre) pour qu'un nouvel import mette à jour au lieu de dupliquer.
      lines.push('UID:' + icsDate(ev.debut) + '-' + slugify(ev.titre) + '@gdr-scilog.cnrs.fr');
      lines.push('DTSTAMP:' + stamp);
      if (ev.hasTime) {
        lines.push('DTSTART;TZID=Europe/Paris:' + icsDateTime(ev.debut));
        lines.push('DTEND;TZID=Europe/Paris:' + icsDateTime(endOf(ev)));
      } else {
        lines.push('DTSTART;VALUE=DATE:' + icsDate(ev.debut));
        lines.push('DTEND;VALUE=DATE:' + icsDate(endOf(ev)));
      }
      lines.push('SUMMARY:' + icsEscape(ev.titre));
      var desc = descriptionOf(ev);
      if (desc) lines.push('DESCRIPTION:' + icsEscape(desc));
      if (ev.lieu) lines.push('LOCATION:' + icsEscape(ev.lieu));
      if (ev.lien) lines.push('URL:' + ev.lien);
      lines.push('CATEGORIES:' + icsEscape(typeLabel(ev.type)));
      lines.push('END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.map(fold).join('\r\n') + '\r\n';
  }

  document.getElementById('cal-ics').addEventListener('click', function () {
    download('gdr-scilog.ics', events.filter(matches));
  });

  // ---------------------------------------------------------------
  //  « Ajouter à mon agenda » pour un évènement
  // ---------------------------------------------------------------

  // Heure de Paris (telle qu'écrite dans le YAML) -> instant UTC, quel que
  // soit le fuseau du visiteur. Utilisé pour Outlook.
  var parisFmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris', hourCycle: 'h23',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
  });
  function parisToUtc(d) {
    var wall = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
    var p = {};
    parisFmt.formatToParts(new Date(wall)).forEach(function (x) { p[x.type] = +x.value; });
    var offset = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute) - wall;
    return new Date(wall - offset);
  }

  function isoDate(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  function googleUrl(ev) {
    var dates = ev.hasTime
      ? icsDateTime(ev.debut) + '/' + icsDateTime(endOf(ev))
      : icsDate(ev.debut) + '/' + icsDate(endOf(ev));
    var params = new URLSearchParams({ action: 'TEMPLATE', text: ev.titre, dates: dates });
    if (ev.hasTime) params.set('ctz', 'Europe/Paris');
    if (descriptionOf(ev)) params.set('details', descriptionOf(ev));
    if (ev.lieu) params.set('location', ev.lieu);
    return 'https://calendar.google.com/calendar/render?' + params.toString();
  }

  function outlookUrl(ev) {
    var params = new URLSearchParams({ path: '/calendar/action/compose', rru: 'addevent', subject: ev.titre });
    if (ev.hasTime) {
      params.set('startdt', parisToUtc(ev.debut).toISOString());
      params.set('enddt', parisToUtc(endOf(ev)).toISOString());
    } else {
      params.set('allday', 'true');
      params.set('startdt', isoDate(ev.debut));
      params.set('enddt', isoDate(endOf(ev)));
    }
    if (descriptionOf(ev)) params.set('body', descriptionOf(ev));
    if (ev.lieu) params.set('location', ev.lieu);
    return 'https://outlook.office.com/calendar/0/deeplink/compose?' + params.toString();
  }

  function addToCalendar(ev) {
    var ics = el('a', { href: '#', text: 'fichier .ics' });
    ics.addEventListener('click', function (e) {
      e.preventDefault();
      download(slugify(ev.titre) + '.ics', [ev]);
    });
    return el('p', { className: 'cal-event-add' }, [
      document.createTextNode('Ajouter à mon agenda : '),
      el('a', { href: googleUrl(ev), target: '_blank', rel: 'noopener', text: 'Google Agenda' }),
      document.createTextNode(', '),
      el('a', { href: outlookUrl(ev), target: '_blank', rel: 'noopener', text: 'Outlook' }),
      document.createTextNode(', '),
      ics
    ]);
  }

  // ---------------------------------------------------------------
  //  Navigation et rendu
  // ---------------------------------------------------------------

  function update() {
    var list = events.filter(matches);
    var isMonth = state.view === 'mois';

    app.querySelectorAll('[data-view]').forEach(function (b) {
      var active = b.getAttribute('data-view') === state.view;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.getElementById('cal-nav').hidden = !isMonth;
    document.getElementById('cal-grid').hidden = !isMonth;

    if (isMonth) {
      renderMonth(list);
      var mStart = state.month;
      var mEnd = new Date(mStart.getFullYear(), mStart.getMonth() + 1, 0);
      renderList(list.filter(function (ev) {
        return startOfDay(ev.debut) <= mEnd && lastDay(ev) >= mStart;
      }), 'Aucun évènement ce mois-ci avec les filtres choisis.');
    } else {
      var today = startOfDay(new Date());
      renderList(list.filter(function (ev) { return lastDay(ev) >= today; }),
        'Aucun évènement à venir avec les filtres choisis.');
    }
    saveState();
  }

  function shiftMonth(n) {
    state.month = new Date(state.month.getFullYear(), state.month.getMonth() + n, 1);
    update();
  }

  document.getElementById('cal-prev').addEventListener('click', function () { shiftMonth(-1); });
  document.getElementById('cal-next').addEventListener('click', function () { shiftMonth(1); });
  document.getElementById('cal-today').addEventListener('click', function () {
    var t = new Date();
    state.month = new Date(t.getFullYear(), t.getMonth(), 1);
    update();
  });
  app.querySelectorAll('[data-view]').forEach(function (b) {
    b.addEventListener('click', function () {
      state.view = b.getAttribute('data-view');
      update();
    });
  });

  loadState();
  renderFilters();
  update();
  app.hidden = false;
  var fallback = document.getElementById('cal-fallback');
  if (fallback) fallback.hidden = true;
})();
