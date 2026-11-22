/* House of J&S · rich worksheet answer presentation
 * Formats the supplied answer-key text into readable lesson and question cards.
 * It deliberately does not include scanned Workbook/Answer PDF pages.
 */
(function () {
  'use strict';
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);
  const clean = (line) => String(line || '').replace(/\f/g, '').replace(/[\t ]+/g, ' ').trim();
  const empty = (line) => !clean(line);
  const isBinaryRow = (line) => /^[01](?:\s+[01]){2,}$/.test(clean(line));
  const isNumericRow = (line) => /^\d+(?:[.,]\d+)?$/.test(clean(line));
  const isQuestionStart = (lines, index) => {
    const line = clean(lines[index]);
    if (!/^\d{1,2}$/.test(line)) return false;
    const n = Number(line);
    if (n < 1 || n > 20) return false;
    let j = index + 1;
    while (j < lines.length && empty(lines[j])) j++;
    if (j >= lines.length) return false;
    const next = clean(lines[j]);
    if (/^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Average|Lowest|Highest|Potential total|Annual target|Members needed)$/i.test(next)) return false;
    if (isNumericRow(next) || isBinaryRow(next)) return false;
    if (/^(Question\s+Answer|Notes(?:\s*\/\s*Marks)?|Inspire Computing|Workbook Year)/i.test(next)) return false;
    if (!/[A-Za-z\u1000-\u109F•●▪◦✓×=]/.test(next)) return false;
    const bulletOrCode = /^(?:[•●▪◦o]\s*|[-–]\s+|Include\b|Required:|Shape\s*\d+|Start:|End:|Line \d+:|See:|print\(|input\(|if\s|for\s|while\s|import\s|def\s)/i.test(next);
    const tableHeading = /^(?:Original string|Statement|Scenario|Command$|Description$|File$|Word$|Power$|Binary$|Colour$|Month$|Name$|ID$|Date$|Type$|Algorithm$|Decimal$|Denary$|Value$|Question$|Activity$|Option$|Item$|Product$|Data$|Category$|Time to download)/i.test(next);
    if (bulletOrCode || tableHeading || next.length >= 24) return true;
    let p = index - 1;
    while (p >= 0 && empty(lines[p])) p--;
    const previous = p >= 0 ? clean(lines[p]) : '';
    // A real question may have a short answer heading (for example a table title),
    // but isolated spreadsheet row labels and month names are not question IDs.
    return previous.length >= 24 && !isNumericRow(previous) && !isBinaryRow(previous) && !/^[A-Z]$/.test(previous);
  };
  const headingMarker = (line) => /^(Question\s+Answer(?:\(s\))?|Question\s+Key points to look for in answer|Question\s+Key points)$/i.test(clean(line));

  function splitRaw(raw) {
    const lines = String(raw || '').replace(/\r/g, '').split('\n').map(clean);
    // Remove only the printed PDF page number at the very top, never a worksheet question number.
    const firstContent = lines.findIndex(Boolean);
    if (firstContent >= 0 && firstContent < 3 && /^\d{1,3}$/.test(lines[firstContent])) lines.splice(firstContent, 1);
    const markers = [];
    lines.forEach((line, i) => { if (headingMarker(line)) markers.push(i); });
    let main = lines;
    let quick = [];
    if (markers.length >= 2) {
      const last = markers[markers.length - 1];
      main = lines.slice(0, last);
      quick = lines.slice(last + 1);
    } else if (markers.length === 1) {
      // A single header generally introduces the main answer table.
      main = lines.slice(markers[0] + 1);
    }
    main = main.filter((line, i) => {
      if (!line) return true;
      if (/^Inspire Computing Workbook Year\s*\d+/i.test(line)) return false;
      return true;
    });
    return { main, quick };
  }

  function parseQuickAnswers(lines) {
    const answers = [];
    for (let i = 0; i < lines.length; i++) {
      const match = clean(lines[i]).match(/^(\d+)_Q(\d+)$/i);
      if (!match) continue;
      let j = i + 1;
      while (j < lines.length && empty(lines[j])) j++;
      if (j < lines.length) answers.push({ q: `Q${match[2]}`, value: clean(lines[j]) });
    }
    return answers;
  }

  function splitQuestions(lines) {
    const starts = [];
    let expected = 1;
    // Workbook exercise questions are sequential. Requiring this sequence avoids
    // treating numeric cells inside spreadsheet/RLE/binary tables as question IDs.
    for (let i = 0; i < lines.length; i++) {
      if (!isQuestionStart(lines, i)) continue;
      const number = Number(clean(lines[i]));
      if (number < expected) continue;
      starts.push(i);
      expected = number + 1;
    }
    if (!starts.length) {
      const content = lines.filter(Boolean);
      return content.length ? [{ number: null, lines: content }] : [];
    }
    const blocks = [];
    for (let i = 0; i < starts.length; i++) {
      const from = starts[i];
      const to = i + 1 < starts.length ? starts[i + 1] : lines.length;
      const body = lines.slice(from + 1, to).filter(Boolean);
      blocks.push({ number: clean(lines[from]), lines: body });
    }
    return blocks;
  }

  function renderSpecialTable(lines) {
    const commandAt = lines.findIndex(x => /^Command$/i.test(clean(x)));
    const descriptionAt = lines.findIndex((x, i) => i > commandAt && /^Description$/i.test(clean(x)));
    if (commandAt >= 0 && descriptionAt === commandAt + 1) {
      const data = lines.slice(descriptionAt + 1);
      const rows = [];
      for (let i = 0; i + 1 < data.length; i += 2) rows.push([data[i], data[i + 1]]);
      if (rows.length) return `<div class="answer-table-shell"><div class="answer-table-title">Python Turtle command reference</div><div class="answer-table-scroll"><table class="answer-data-table"><thead><tr><th>Command</th><th>Meaning / Description</th></tr></thead><tbody>${rows.map(r => `<tr><td><code>${esc(r[0])}</code></td><td>${esc(r[1])}</td></tr>`).join('')}</tbody></table></div></div>`;
    }
    const rleAt = lines.findIndex(x => /^Original string$/i.test(clean(x)));
    if (rleAt >= 0 && lines[rleAt + 1] && /Size in/.test(lines[rleAt + 1])) {
      const headers = lines.slice(rleAt, rleAt + 4);
      const data = lines.slice(rleAt + 4);
      const rows = [];
      for (let i = 0; i < data.length;) {
        if (/^Total file size$/i.test(data[i])) {
          rows.push([data[i], data[i + 1] || '', data[i + 2] || '', '']);
          break;
        }
        if (i + 3 < data.length) { rows.push(data.slice(i, i + 4)); i += 4; }
        else { rows.push(data.slice(i)); break; }
      }
      return `<div class="answer-table-shell"><div class="answer-table-title">Run Length Encoding · Worked data</div><div class="answer-table-scroll"><table class="answer-data-table"><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${Array.from({length:4},(_,i)=>`<td>${esc(r[i]||'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
    }
    const bandwidthAt = lines.findIndex(x => /^File$/i.test(clean(x)));
    if (bandwidthAt >= 0 && lines.slice(bandwidthAt + 1, bandwidthAt + 4).some(x => /Bandwidth/i.test(x))) {
      const headers = lines.slice(bandwidthAt, bandwidthAt + 4);
      const data = lines.slice(bandwidthAt + 4);
      const rows = [];
      for (let i = 0; i + 3 < data.length; i += 4) rows.push(data.slice(i, i + 4));
      if (rows.length) return `<div class="answer-table-shell"><div class="answer-table-title">Internet bandwidth · Download time comparison</div><div class="answer-table-scroll"><table class="answer-data-table"><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(v => `<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
    }
    return '';
  }

  function formatBody(lines) {
    const specialTable = renderSpecialTable(lines);
    if (specialTable) return specialTable;
    const out = [];
    let bullets = [];
    let code = [];
    let binary = [];
    const flushBullets = () => {
      if (!bullets.length) return;
      out.push(`<ul class="answer-points">${bullets.map(x => { const codeItem = codeLike(x); return `<li>${codeItem ? `<code class="answer-inline-code">${esc(x)}</code>` : esc(x)}</li>`; }).join('')}</ul>`);
      bullets = [];
    };
    const flushCode = () => {
      if (!code.length) return;
      out.push(`<div class="answer-code-box"><div class="answer-code-head"><span>EXAMPLE / CALCULATION</span><b>Code &amp; working</b></div><pre><code>${esc(code.join('\n'))}</code></pre></div>`);
      code = [];
    };
    const flushBinary = () => {
      if (!binary.length) return;
      out.push(`<div class="answer-binary-card"><span class="answer-mini-label">BINARY / PIXEL DATA</span><div class="answer-binary-grid">${binary.map(row => `<div class="answer-binary-row">${clean(row).split(/\s+/).map(bit => `<i class="bit-${bit}">${bit}</i>`).join('')}</div>`).join('')}</div></div>`);
      binary = [];
    };
    const codeLike = (line) => /^(print\(|input\(|if\s|elif\s|else:|for\s|while\s|def\s|import\s|from\s|return\b|[A-Za-z_]\w*\s*=)|\b(sort|reverse|range|len|int|str|float)\s*\(/.test(line) || /\b(FD|BK|LT|RT|PU|PD|pencolor|pensize)\s*\(/i.test(line);

    lines.map(clean).filter(Boolean).forEach((line) => {
      const bullet = line.match(/^(?:[•●▪◦o]\s*|[-–]\s+)(.+)$/);
      if (isBinaryRow(line)) { flushBullets(); flushCode(); binary.push(line); return; }
      flushBinary();
      if (bullet) { flushCode(); bullets.push(bullet[1]); return; }
      if (/^(?:✓|✔|✗|✘|\u2713|\u2714)/.test(line)) { flushBullets(); flushCode(); out.push(`<p class="answer-mark-line">${esc(line)}</p>`); return; }
      if (codeLike(line) || (/^[\w().,'"\[\] +\-*/%:=<>!]+$/.test(line) && /[=();\[\]]/.test(line) && line.length < 150)) {
        flushBullets(); code.push(line); return;
      }
      flushBullets(); flushCode();
      if (/^(?:Shape\s*\d+|Start:|End:|Fill colour:|Line \d+:|File size\s*=|Output\s*=)/i.test(line)) {
        out.push(`<div class="answer-fact-row"><span>${esc(line.split(':')[0].split('=')[0])}</span><b>${esc(line.includes(':') ? line.slice(line.indexOf(':') + 1).trim() : line)}</b></div>`);
      } else if (/^(?:Rule (?:one|two|three|four)|[0-9]+\s*[+×*/=-]|\d+\s*[×x]\s*\d+)/i.test(line) || /(?:=|×|÷)\s*\d/.test(line)) {
        out.push(`<div class="answer-calculation"><span>WORKED ANSWER</span><code>${esc(line)}</code></div>`);
      } else {
        out.push(`<p class="answer-paragraph">${esc(line)}</p>`);
      }
    });
    flushBinary(); flushBullets(); flushCode();
    return out.join('');
  }

  function renderQuickKey(lines) {
    const answers = parseQuickAnswers(lines);
    if (!answers.length) return '';
    return `<section class="answer-quickkey"><div class="answer-subhead"><div><span class="answer-mini-label">PLENARY QUICK QUIZ</span><h4>Quick Quiz Answer Key</h4><p class="mm">အမြန်စစ်ဆေးမေးခွန်းများ၏ အဖြေမှန်</p></div><span class="answer-key-count">${answers.length} answers</span></div><div class="answer-quick-grid">${answers.map(a => `<article class="answer-quick-item"><span>${esc(a.q)}</span><b>${esc(a.value)}</b></article>`).join('')}</div></section>`;
  }

  function renderEntry(key, entry, options = {}) {
    const { main, quick } = splitRaw(entry.raw);
    const questions = splitQuestions(main);
    const title = entry.title || 'Workbook answer section';
    const quizCount = parseQuickAnswers(quick).length;
    const label = key.replace(/_/g, ' · ');
    const content = questions.map(q => `<article class="answer-question-card ${q.number ? '' : 'answer-general-card'}"><div class="answer-question-number">${q.number ? `Q${esc(q.number)}` : 'KEY POINTS'}</div><div class="answer-question-content"><div class="answer-question-top"><b>${q.number ? `Question ${esc(q.number)}` : 'Model answer points'}</b><span>Verified answer guide</span></div>${formatBody(q.lines)}</div></article>`).join('');
    return `<div class="answer-entry-body"><div class="answer-entry-banner"><div class="answer-entry-icon">✓</div><div><span class="answer-mini-label">WORKBOOK ANSWER SHEET</span><h3>${esc(title)}</h3><p class="mm">သင်ခန်းစာအလိုက် Workbook အဖြေညွှန်ကြားချက်</p></div><div class="answer-entry-meta"><b>${questions.length}</b><span>answer groups</span></div></div><div class="answer-question-list">${content || '<p class="answer-empty-note">No extractable answer text was found for this lesson.</p>'}</div>${renderQuickKey(quick)}<div class="answer-source-note"><b>Study note:</b> These are answer points extracted from the supplied answer sheet. Match each question number with the corresponding Workbook exercise. Where the key gives several acceptable points, use the points relevant to the question.<p class="mm">ဤအဖြေများသည် ပေးထားသော Answer Sheet မှ ထုတ်ယူထားသည့် အဖြေညွှန်ချက်များဖြစ်သည်။ မေးခွန်းနံပါတ်တူ Workbook လေ့ကျင့်ခန်းနှင့် တွဲဖက်လေ့လာပါ။</p></div></div>`;
  }

  function lessonCard(key, entry, index) {
    const text = `${key} ${entry.title || ''} ${entry.raw || ''}`.toLowerCase();
    const quizCount = (entry.raw.match(/\d+_Q\d+/g) || []).length;
    return `<details class="answer-detail answer-detail-rich" data-answer-search="${esc(text)}"><summary><span class="answer-lesson-code">${esc(key.replace(/_/g, ' · '))}</span><b>${esc(entry.title || 'Workbook answer section')}</b><span class="answer-lesson-count">${quizCount ? `${quizCount} quiz answers` : 'Answer guide'}</span><i>＋</i></summary>${renderEntry(key, entry)}</details>`;
  }

  function renderGlobal(data) {
    const units = Array.from({ length: 6 }, (_, i) => i + 1).map(id => ({
      id,
      entries: data.filter(([key]) => key.startsWith(`U${id}_`))
    })).filter(unit => unit.entries.length);
    const totalQuiz = data.reduce((sum, [, v]) => sum + (v.raw.match(/\d+_Q\d+/g) || []).length, 0);
    return `<section class="answer-page-hero"><div class="answer-page-hero-copy"><span class="eyebrow">WORKBOOK SUPPORT · YEAR 9</span><h1>Worksheet Answer Guide</h1><p class="mm">Workbook လေ့ကျင့်ခန်း အဖြေများနှင့် ရှင်းလင်းချက်များ</p><p>Browse verified answer points by unit and lesson. Open a lesson to see the question-by-question answer cards, worked calculations, code examples and quick-quiz key.</p></div><div class="answer-hero-seal"><span>HJS</span><b>ANSWER<br>LIBRARY</b></div></section><div class="answer-stat-grid"><div class="answer-stat-card"><span>UNITS</span><b>${units.length}</b><small>Learning units</small></div><div class="answer-stat-card"><span>LESSONS</span><b>${data.length}</b><small>Answer sections</small></div><div class="answer-stat-card"><span>QUICK QUIZ</span><b>${totalQuiz}</b><small>Answer entries</small></div></div><div class="answer-tools-panel"><div><label for="answer-filter">Find a worksheet answer</label><p class="mm">Lesson သို့မဟုတ် အဖြေကို ရှာဖွေပါ</p></div><input id="answer-filter" type="search" placeholder="Search lesson, question or answer…"><span class="answer-search-hint">Search by topic or answer</span></div><div class="answer-unit-groups">${units.map((unit, i) => `<section class="answer-unit-group"><div class="answer-unit-heading"><div class="answer-unit-number">${String(unit.id).padStart(2, '0')}</div><div><span>INSPIRE COMPUTING · YEAR 9</span><h2>Unit ${unit.id}</h2><p>${unit.entries.length} answer sections</p></div><div class="answer-unit-mark">${['▧','◫','▦','▤','{ }','⌘'][unit.id - 1]}</div></div><div class="answer-unit-lessons">${unit.entries.map(([key, entry], idx) => lessonCard(key, entry, idx)).join('')}</div></section>`).join('')}</div><div class="answer-page-footer"><span>HOUSE OF J&amp;S COMPUTER TRAINING CENTER</span><b>LEARN · PRACTISE · ACHIEVE</b></div>`;
  }

  window.HJS_ANSWER_RENDERER = {
    renderEntry,
    renderLessonCard: lessonCard,
    renderGlobal
  };
})();
