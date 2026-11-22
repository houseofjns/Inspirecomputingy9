/* Client-side exam practice engine. This is a learning/assessment aid, not tamper-proof proctoring. */
(function(){
 const DURATION=60*60, PASS_MARK=50;
 const sectionNames={A:'Multiple Choice',B:'Fill in the Blanks',C:'Two-Column Matching',D:'Short Questions',E:'Long Questions / Essays'};
 const normal=s=>String(s??'').toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu,' ').trim().replace(/\s+/g,' ');
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const shuffle=a=>[...a].sort(()=>Math.random()-.5);
 let host=null, unit=null, questions=[], answers={}, index=0, student='', timer=null, active=false, deadline=0, lockedCount=0, fsWarning=false;
 function aliasFor(term){
  const map={'World Wide Web (WWW)':['WWW','World Wide Web'],'Float / real':['float','real','real number'],'Peer-to-peer (P2P)':['P2P','peer to peer'],'Most significant bit (MSB)':['MSB'],'Least significant bit (LSB)':['LSB'],'PDF':['Portable Document Format'],'IDE':['Integrated Development Environment'],'Web browser':['browser'],'Bit':['binary digit'],'Denary':['decimal'],'Integer division':['floor division'],'Modulus':['remainder'],'IP address':['Internet Protocol address'],'LAN':['Local Area Network'],'WAN':['Wide Area Network'],'Ethernet':['wired LAN technology'],'Access point':['wireless access point'],'4G / 5G':['4G','5G'],'Storyboard':['visual plan'],'Target audience':['audience'],'House style':['consistent style'],'Master slide':['slide master'],'Pseudocode':['pseudo code'],'Flowchart':['flow chart'],'Boolean':['bool'],'Integer':['int'],'Character':['char'],'Newline':['line break'],'Concatenation':['join strings','joining strings'],'Turtle graphics':['turtle drawing']};
  return [term,...(Array.isArray(map[term])?map[term]:[])];
 }
 function makeQuestions(u){
  const t=u.terms, q=[];
  // A: 30 distinct concept-definition multiple choice items (1 mark each).
  for(let i=0;i<30;i++){
   const concept=t[i], opts=shuffle([concept[0],t[(i+4)%30][0],t[(i+11)%30][0],t[(i+19)%30][0]]);
   q.push({id:`A${i+1}`,section:'A',mark:1,type:'mcq',prompt:`Which term matches this description?\n${concept[1]}`,answer:concept[0],options:opts,explanation:`${concept[0]} — ${concept[2]}`});
  }
  // B: 20 unique fill-in prompts, accepted term spellings are normalised.
  for(let i=0;i<20;i++){
   const concept=t[(i+5)%30];
   q.push({id:`B${i+1}`,section:'B',mark:1,type:'text',prompt:`Complete the statement with the correct technical term: “${concept[1]}”`,answer:concept[0],acceptable:aliasFor(concept[0]),explanation:`${concept[0]} — ${concept[2]}`});
  }
  // C: 20 matching definitions, each answered separately to preserve forward-only navigation.
  for(let i=0;i<20;i++){
   const concept=t[(i+10)%30];
   q.push({id:`C${i+1}`,section:'C',mark:1,type:'match',prompt:'Match the description in Column A with the correct term in Column B.',description:concept[1],answer:concept[0],options:shuffle(t.map(x=>x[0])),explanation:`${concept[0]} — ${concept[2]}`});
  }
  // D: 10 short responses; one mark for a relevant defining idea.
  for(let i=0;i<10;i++){
   const concept=t[(i+20)%30];
   const keys=concept[1].toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>4).slice(0,4);
   q.push({id:`D${i+1}`,section:'D',mark:1,type:'short',prompt:`In one or two sentences, explain “${concept[0]}”.`,answer:concept[1],keywords:keys.length?keys:[concept[0].toLowerCase()],explanation:`${concept[0]} — ${concept[2]}`});
  }
  // E: four essay tasks, each worth 5 marks and flagged for teacher review.
  u.essays.forEach((e,i)=>q.push({id:`E${i+1}`,section:'E',mark:5,type:'essay',prompt:e[0],answer:e[1],criteria:e[2],explanation:'Marks are awarded for the key points in the model answer. Automated keyword marking is provisional; teacher review is recommended.'}));
  return q;
 }
 function setHost(el,u){host=el;unit=u;document.body.classList.add('exam-mode');questions=makeQuestions(u);answers={};index=0;lockedCount=0;active=false;student='';showLogin();}
 function showLogin(){
  host.innerHTML=`<div class="exam-intro panel"><div class="exam-seal">J&amp;S <span>ASSESSMENT</span></div><div class="section-kicker">UNIT ${unit.id} · 60 MINUTES · 100 MARKS</div><h2>Secure Unit Examination</h2><p class="mm">တစ်နာရီကြာ Unit စာမေးပွဲ</p><p>This independent paper contains <b>84 questions</b> across five sections. You must answer or skip each question before moving forward. Once you continue, that question is locked.</p><div class="exam-breakdown"><div><b>30</b><span>MCQ</span></div><div><b>20</b><span>Blanks</span></div><div><b>20</b><span>Matching</span></div><div><b>10</b><span>Short</span></div><div><b>4</b><span>Essays</span></div></div><div class="exam-notice"><b>Important exam rules</b><ul><li>Time limit: 60 minutes. The paper auto-submits when time expires.</li><li>Questions move forward only. Previous questions cannot be reopened during the exam.</li><li>Correct answers and explanations are hidden until submission.</li><li>Fullscreen and refresh warnings are browser-level deterrents only.</li></ul><p class="mm">မေးခွန်းတစ်ခုကို Next နှိပ်ပြီးသွားပါက ပြန်ပြင်၍မရပါ။ အချိန်ကုန်လျှင် အလိုအလျောက် Submit လုပ်မည်။</p></div><div class="exam-login-overlay"><div class="exam-login-modal"><div class="modal-title"><span>STUDENT VERIFICATION</span><b>Candidate Login</b><small class="mm">ကျောင်းသား အမည်နှင့် စကားဝှက်</small></div><form id="exam-login-form" class="exam-login"><label>Student name / ကျောင်းသားအမည်<input id="exam-student-name" autocomplete="name" required maxlength="80" placeholder="Enter your full name" value="${esc(window.HJS_PORTAL_STUDENT||'')}"></label><label>Exam password / စာမေးပွဲ Password<input id="exam-password" type="password" autocomplete="off" required placeholder="Enter exam password"></label><div id="login-error" class="form-error" aria-live="polite"></div><button class="btn btn-gold btn-wide" type="submit">Verify &amp; Start Examination <span>→</span></button></form></div></div><div class="client-security-note">This offline version runs in the browser. It cannot prevent developer-tools access or guarantee device-level lockdown. For high-stakes exams, use a managed exam platform.</div><button id="exam-back" class="text-button">← Return to learning</button></div>`;
  host.querySelector('#exam-login-form').addEventListener('submit',beginExam);
  host.querySelector('#exam-back').onclick=()=>window.HJS_APP?.openUnit(unit.id,'overview');
 }
 function beginExam(ev){
  ev.preventDefault();
  const name=host.querySelector('#exam-student-name').value.trim();
  const pass=host.querySelector('#exam-password').value;
  const error=host.querySelector('#login-error');
  if(!name||!pass){error.textContent='Enter both your name and the exam password.';return;}
  if(pass!=='HJS2026'){error.textContent='The exam password is incorrect. Please try again.';return;}
  student=name;
  // requestFullscreen is invoked directly during the submit gesture, before rendering the exam.
  let fsPromise=null;
  try { if(document.documentElement.requestFullscreen) fsPromise=document.documentElement.requestFullscreen(); } catch(e) { fsPromise=Promise.reject(e); }
  active=true; fsWarning=false; deadline=Date.now()+DURATION*1000; index=0;lockedCount=0;answers={};
  window.addEventListener('beforeunload',beforeLeave);
  history.pushState({hjsExam:true},'','#unit-exam');
  if(fsPromise && typeof fsPromise.catch==='function') fsPromise.catch(()=>showFsNotice('Fullscreen could not be enabled by this browser. You may continue without fullscreen.',false));
  renderQuestion(); startTimer();
  if(!document.documentElement.requestFullscreen)showFsNotice('This browser or device does not support the Fullscreen API. The exam will continue with browser-level navigation warnings only.',false);
 }
 function beforeLeave(e){if(active){e.preventDefault();e.returnValue='Your exam is in progress. Leaving may end your attempt.';return e.returnValue;}}
 function popGuard(){if(!active)return;history.pushState({hjsExam:true},'','#unit-exam');showFsNotice('Browser navigation was blocked. Continue using the Next Question control.',false);}
 function showFsNotice(msg,requireReturn=true){
  if(!host)return; fsWarning=!!requireReturn;
  let old=host.querySelector('.exam-warning');
  if(old)old.remove();
  const n=document.createElement('div');n.className='exam-warning';n.innerHTML=`<div><strong>Exam attention</strong><p>${esc(msg)}</p><button class="btn btn-gold" id="reenter-fullscreen">${requireReturn?'Return to fullscreen':'Continue exam'}</button></div>`;
  host.prepend(n);
  const nextNow=host.querySelector('#exam-next');if(nextNow)nextNow.disabled=!!requireReturn;
  const b=n.querySelector('#reenter-fullscreen');
  b.onclick=()=>{if(!requireReturn){n.remove();fsWarning=false;const next=host?.querySelector('#exam-next');if(next)next.disabled=false;return;}try{const p=document.documentElement.requestFullscreen?.();if(p?.catch)p.catch(()=>{showFsNotice('Fullscreen was not enabled. Please use the browser menu or device controls.',false);});if(!document.documentElement.requestFullscreen){showFsNotice('Fullscreen is unavailable on this browser. You may continue.',false);}}catch(e){showFsNotice('Fullscreen is unavailable on this browser. You may continue.',false);}};
 }
 document.addEventListener('fullscreenchange',()=>{if(active&&!document.fullscreenElement)showFsNotice('You exited fullscreen during the exam. Please return to fullscreen. The browser requires a user action to re-enter.');else if(active&&document.fullscreenElement){fsWarning=false;host?.querySelector('.exam-warning')?.remove();const next=host?.querySelector('#exam-next');if(next)next.disabled=false;}});
 window.addEventListener('popstate',popGuard);
 function startTimer(){clearInterval(timer);tick();timer=setInterval(tick,250);}
 function tick(){if(!active)return;const left=Math.max(0,Math.ceil((deadline-Date.now())/1000));const el=host.querySelector('#exam-clock');if(el)el.textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;if(left<=0)submit(true);}
 function saveAnswer(value){answers[questions[index].id]=value;}
 function renderQuestion(){
  if(!active)return;
  const q=questions[index];
  const sectionCount=questions.filter(x=>x.section===q.section).length;
  const qNum=Number(q.id.slice(1));
  let control='';
  if(q.type==='mcq')control=`<div class="exam-options">${q.options.map((o,i)=>`<label class="exam-option"><input type="radio" name="exam-answer" value="${esc(o)}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></label>`).join('')}</div>`;
  else if(q.type==='match')control=`<div class="matching-columns"><div class="matching-head"><span>COLUMN A · DESCRIPTION</span><span>COLUMN B · MATCHING TERM</span></div><div class="matching-row"><div class="matching-description">${esc(q.description)}</div><label class="matching-choice"><select id="exam-answer" class="exam-select"><option value="">Choose a term…</option>${q.options.map(o=>`<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select></label></div></div>`;
  else if(q.type==='text')control=`<label class="exam-answer-label">Your answer<input id="exam-answer" type="text" maxlength="160" autocomplete="off" placeholder="Type the technical term"></label>`;
  else control=`<label class="exam-answer-label">Your response<textarea id="exam-answer" rows="5" maxlength="2500" placeholder="Write your answer here…"></textarea></label>`;
  const current=answers[q.id]||'';
  host.innerHTML=`<div class="exam-live"><div class="exam-live-top"><div><div class="section-kicker">UNIT ${unit.id} · ${esc(unit.title.toUpperCase())}</div><h2>Unit Examination</h2><div class="candidate">Candidate: <b>${esc(student)}</b></div></div><div class="timer-card"><span>TIME REMAINING</span><strong id="exam-clock">60:00</strong></div></div><div class="exam-progress-row"><div class="progress-track"><span style="width:${((index+1)/84)*100}%"></span></div><div><b>Question ${index+1}</b> of 84 <span>· ${lockedCount} locked</span></div></div><div class="exam-section-label"><span>SECTION ${q.section}</span><b>${sectionNames[q.section]}</b><span>${q.mark} ${q.mark===1?'mark':'marks'}</span></div><article class="exam-question-card"><div class="question-meta">QUESTION ${qNum} · SECTION ${q.section}</div><h3>${esc(q.prompt).replace(/\n/g,'<br>')}</h3>${control}<div class="exam-help mm">အဖြေကို ရွေးချယ်/ရိုက်ထည့်ပြီး Next Question ကိုနှိပ်ပါ။ ကျော်သွားပါကလည်း ဤမေးခွန်းကို Lock လုပ်မည်။</div><div class="exam-navigation"><span class="lock-note"> <i class="lock-dot"></i> Forward only · no backtracking</span><button id="exam-next" class="btn btn-gold" ${fsWarning?'disabled':''}>${index===83?'Submit final answer':'Next Question'} <span>→</span></button></div></article><div class="exam-privacy-line">Answers and explanations are hidden until submission.</div></div>`;
  if(q.type==='mcq'){
   host.querySelectorAll('input[name="exam-answer"]').forEach(inp=>{if(inp.value===current)inp.checked=true;inp.onchange=()=>saveAnswer(inp.value);});
  }else{const el=host.querySelector('#exam-answer');if(el){el.value=current;el.addEventListener('input',()=>saveAnswer(el.value));}}
  host.querySelector('#exam-next').onclick=()=>{if(fsWarning)return;const value=getCurrentValue(q);saveAnswer(value);lockedCount++;if(index===83){submit(false);return;}index++;renderQuestion();};
 }
 function getCurrentValue(q){if(q.type==='mcq')return host.querySelector('input[name="exam-answer"]:checked')?.value||'';return host.querySelector('#exam-answer')?.value?.trim()||'';}
 function grade(q,answer){
  const a=normal(answer);
  if(!a)return {marks:0,status:'unanswered'};
  if(q.section==='A'||q.section==='B'||q.section==='C'){
   const accepted=q.acceptable||[q.answer];const ok=accepted.some(v=>normal(v)===a);
   return {marks:ok?q.mark:0,status:ok?'correct':'incorrect'};
  }
  if(q.section==='D'){
   const ok=(q.keywords||[]).some(k=>a.includes(normal(k)));
   return {marks:ok?1:0,status:ok?'correct':'incorrect'};
  }
  let marks=0;const hit=[];
  for(const k of q.criteria||[]){if(a.includes(normal(k))){marks++;hit.push(k);}}
  return {marks:Math.min(5,marks),status:marks>=5?'correct':'incorrect',hit};
 }
 function submit(auto){
  if(!active)return;active=false;clearInterval(timer);timer=null;window.removeEventListener('beforeunload',beforeLeave);
  try{if(document.fullscreenElement)document.exitFullscreen?.();}catch(e){}
  const sections={A:0,B:0,C:0,D:0,E:0};let total=0;const reviewed=questions.map(q=>{const response=answers[q.id]??'';const g=grade(q,response);sections[q.section]+=g.marks;total+=g.marks;return {...q,response,grade:g};});
  const pct=Math.round(total);const passed=pct>=PASS_MARK;
  const result={student,unit:unit.id,title:unit.title,total,percentage:pct,passed,sections,auto,completedAt:new Date().toISOString()};
  try{const progress=JSON.parse(localStorage.getItem('hjsProgress')||'{}');progress.exam=Array.from(new Set([...(progress.exam||[]),unit.id]));localStorage.setItem('hjsProgress',JSON.stringify(progress));}catch(e){}
  try{const history=JSON.parse(localStorage.getItem('hjsExamResults')||'[]');history.unshift(result);localStorage.setItem('hjsExamResults',JSON.stringify(history.slice(0,30)));}catch(e){}
  renderResults(result,reviewed);
 }
 function renderResults(result,reviewed){
  document.body.classList.remove('exam-mode');
  const statusText=result.passed?'PASS':'NEEDS MORE REVISION';
  const rows=Object.entries(result.sections).map(([k,v])=>`<div class="result-section-row"><div><b>Section ${k}</b><span>${sectionNames[k]}</span></div><strong>${v}/${k==='E'?20:k==='D'?10: k==='A'?30:20}</strong><div class="mini-track"><i style="width:${(v/(k==='E'?20:k==='D'?10:k==='A'?30:20))*100}%"></i></div></div>`).join('');
  const cards=reviewed.map((q,i)=>{
   const g=q.grade,cls=g.status==='correct'?'correct':g.status==='unanswered'?'unanswered':'incorrect';
   const studentAnswer=q.response?esc(q.response):'Not answered';
   return `<article class="review-card ${cls}"><div class="review-top"><div><span class="review-id">${q.id}</span><span class="review-section">SECTION ${q.section}</span></div><span class="status-tag ${cls}">${g.status==='correct'?'Correct':g.status==='unanswered'?'Unanswered': 'Incorrect'}</span></div><h4>${esc(q.prompt).replace(/\n/g,'<br>')}${q.description?`<br><small>Column A: ${esc(q.description)}</small>`:''}</h4><div class="review-answer-grid"><div><small>YOUR ANSWER</small><p>${studentAnswer}</p></div><div><small>${q.section==='E'?'MODEL ANSWER':'CORRECT ANSWER'}</small><p>${esc(q.answer)}</p></div></div><div class="review-mark-line"><b>Marks awarded: ${g.marks}/${q.mark}</b>${q.section==='E'?'<span class="teacher-review-tag">Teacher review recommended</span>':''}</div><p class="review-explain">${esc(q.explanation)}</p>${q.section==='E'?`<div class="essay-criteria"><b>Marking points found: ${g.marks}/5</b><span>${(q.criteria||[]).map(k=>`${(g.hit||[]).includes(k)?'✓':'○'} ${esc(k)}`).join(' · ')}</span></div>`:''}</article>`;
  }).join('');
  host.innerHTML=`<div class="results-page"><div class="result-hero panel"><div class="section-kicker">UNIT ${unit.id} · EXAMINATION REPORT</div><div class="result-hero-grid"><div><h2>Examination complete</h2><p class="mm">စာမေးပွဲရလဒ်</p><p>Candidate: <b>${esc(result.student)}</b></p><p>${result.auto?'The timer reached zero and the paper was submitted automatically.':'Your final answer was submitted and the paper is now locked.'}</p><span class="result-status ${result.passed?'pass':'fail'}">${statusText}</span></div><div class="score-ring large"><strong>${result.total}<small>/100</small></strong><span>${result.percentage}%</span></div></div></div><div class="results-overview"><div class="panel"><div class="section-kicker">PERFORMANCE</div><h3>Section breakdown</h3>${rows}<div class="pass-note">Pass threshold used: ${PASS_MARK}/100. Essay scores are provisional keyword marks and should be checked by a teacher.</div></div><div class="panel result-summary"><div class="section-kicker">REVIEW GUIDE</div><h3>Question diagnostics</h3><div class="legend-row"><span class="status-dot green"></span> Correct <b>${reviewed.filter(x=>x.grade.status==='correct').length}</b></div><div class="legend-row"><span class="status-dot red"></span> Incorrect <b>${reviewed.filter(x=>x.grade.status==='incorrect').length}</b></div><div class="legend-row"><span class="status-dot grey"></span> Unanswered <b>${reviewed.filter(x=>x.grade.status==='unanswered').length}</b></div><button class="btn btn-outline btn-wide" onclick="window.print()">Print result report</button><button class="btn btn-gold btn-wide" id="exam-return">Return to learning</button></div></div><div class="review-heading"><div><div class="section-kicker">ANSWER REVIEW</div><h2>Question-by-question review</h2><p class="mm">ကျောင်းသားအဖြေ၊ အဖြေမှန်နှင့် အမှတ်ခွဲခြမ်းစိတ်ဖြာမှု</p></div><span class="review-count">84 questions</span></div><div class="review-filter"><button class="filter-chip active" data-filter="all">All 84</button><button class="filter-chip" data-filter="incorrect">Incorrect</button><button class="filter-chip" data-filter="unanswered">Unanswered</button><button class="filter-chip" data-filter="correct">Correct</button></div><div class="review-list">${cards}</div><div class="result-footer"><p>Automated marking is intended for practice and diagnostic feedback. Short and essay answers may need teacher judgement for equivalent wording.</p><button id="exam-retry" class="btn btn-gold">Retake this unit examination</button></div></div>`;
  host.querySelector('#exam-return').onclick=()=>window.HJS_APP?.openUnit(unit.id,'overview');
  host.querySelector('#exam-retry').onclick=()=>setHost(host,unit);
  host.querySelectorAll('.filter-chip').forEach(b=>b.onclick=()=>{host.querySelectorAll('.filter-chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');host.querySelectorAll('.review-card').forEach(c=>{c.hidden=b.dataset.filter!=='all'&&!c.classList.contains(b.dataset.filter);});});
 }
 window.HJS_EXAM={open:setHost,questionsFor:makeQuestions};
})();
