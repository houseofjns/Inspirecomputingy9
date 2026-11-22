/* Independent formative quiz engine. Correct feedback is intentionally available here. */
window.HJS_QUIZZES = {
 render(container, unit) {
  let order = unit.terms.slice(0,10).map((t,i)=>({t,i}));
  const makeOptions = (termIndex) => {
   const bank=unit.terms, correct=bank[termIndex][0];
   const candidates=[bank[(termIndex+3)%bank.length][0],bank[(termIndex+9)%bank.length][0],bank[(termIndex+17)%bank.length][0]];
   return [...new Set([correct,...candidates])].sort(()=>Math.random()-.5);
  };
  let current=0, score=0, picked=null, answered=false, done=false;
  const draw=()=>{
   if(done){
    container.innerHTML=`<div class="panel quiz-result"><div class="eyebrow">KNOWLEDGE CHECK · UNIT ${unit.id}</div><h2>Quiz complete</h2><div class="score-ring"><strong>${score}/10</strong><span>Correct</span></div><p>You answered ${score} of 10 questions correctly.</p><p class="mm">မေးခွန်း ၁၀ ခုအနက် ${score} ခု မှန်ကန်စွာ ဖြေဆိုခဲ့သည်။</p><button class="btn btn-gold" id="quiz-retry">Try again</button> <button class="btn btn-outline" id="quiz-close">Back to unit</button></div>`;
    container.querySelector('#quiz-retry').onclick=()=>{current=0;score=0;picked=null;answered=false;done=false;order=unit.terms.slice(0,10).map((t,i)=>({t,i})).sort(()=>Math.random()-.5);draw();};
    container.querySelector('#quiz-close').onclick=()=>window.HJS_APP?.openUnit(unit.id,'overview');
    return;
   }
   const {t,i}=order[current]; const options=makeOptions(i); const correct=t[0];
   container.innerHTML=`<div class="panel quiz-panel"><div class="section-kicker">KNOWLEDGE CHECK · UNIT ${unit.id}</div><div class="quiz-head"><div><h2>Practice quiz</h2><p class="mm">လေ့ကျင့်ခန်းမေးခွန်း</p></div><div class="quiz-count">${current+1}<span>/10</span></div></div><div class="progress-track"><span style="width:${(current/10)*100}%"></span></div><div class="question-card"><div class="question-meta">QUESTION ${current+1} · MULTIPLE CHOICE</div><h3>Which term matches this description?</h3><p>${t[1]}</p><p class="mm">အထက်ပါရှင်းလင်းချက်နှင့် ကိုက်ညီသော ဝေါဟာရကို ရွေးပါ။</p><div class="quiz-options">${options.map((op,n)=>`<button class="quiz-option" data-value="${encodeURIComponent(op)}"><span>${String.fromCharCode(65+n)}</span>${op}</button>`).join('')}</div><div id="quiz-feedback" class="quiz-feedback ${answered?'show':''}"></div><div class="quiz-actions"><span>Score: <b>${score}</b>/10</span><button class="btn btn-gold" id="quiz-next" ${!answered?'disabled':''}>${current===9?'See result':'Next question'} <span>→</span></button></div></div></div>`;
   container.querySelectorAll('.quiz-option').forEach(btn=>btn.onclick=()=>{
    if(answered)return; picked=decodeURIComponent(btn.dataset.value); answered=true;
    const correctNow=picked===correct; if(correctNow)score++;
    container.querySelectorAll('.quiz-option').forEach(b=>{const val=decodeURIComponent(b.dataset.value);if(val===correct)b.classList.add('is-correct');else if(val===picked)b.classList.add('is-wrong');b.disabled=true;});
    const fb=container.querySelector('#quiz-feedback');fb.classList.add('show',correctNow?'good':'bad');
    fb.innerHTML=`<strong>${correctNow?'Correct!':'Not quite.'}</strong><p>${correctNow?'ကောင်းပါတယ်။ အဖြေမှန်ပါသည်။':'အဖြေမှန်မှာ '+escapeHTML(correct)+' ဖြစ်သည်။'}</p><p>${t[2]}</p>`;
    container.querySelector('#quiz-next').disabled=false;container.querySelector('.quiz-actions b').textContent=score;
   });
   container.querySelector('#quiz-next').onclick=()=>{if(!answered)return;current++;picked=null;answered=false;if(current>=10)done=true;draw();};
  };
  draw();
 }
};
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
