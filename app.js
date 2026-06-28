
const STORE_KEY = 'albanischTrainerStateV1';
let deferredPrompt;
const defaultState = { currentSessionId: 1, currentExerciseIndex: 0, answers: {}, showSolutions: {}, completed: {}, topicStatus: {}, notes: {} };
let state = loadState();

function loadState(){ try { return {...defaultState, ...JSON.parse(localStorage.getItem(STORE_KEY)||'{}')}; } catch { return {...defaultState}; } }
function saveState(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function $(id){ return document.getElementById(id); }
function app(html){ $('app').innerHTML = html; window.scrollTo({top:0,behavior:'smooth'}); }
function currentSession(){ return SESSIONS.find(s=>s.id===state.currentSessionId) || SESSIONS[0]; }
function progressFor(session){ const total=session.exercises.length; const done=(state.completed[session.id]||[]).length; return Math.round(done/total*100); }
function esc(s){ return String(s??'').replace(/[&<>"]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }
function norm(s){ return String(s||'').trim().toLowerCase().replace(/[.!?]/g,'').replace(/\s+/g,' '); }

function routeHome(){
 const s=currentSession(); const p=progressFor(s); const ex=s.exercises[state.currentExerciseIndex] || s.exercises[0];
 app(`<section class="card"><h2>Weiterlernen</h2><p class="muted">Aktuelle Sitzung</p><h3>${esc(s.title)}</h3><div class="progress"><div class="bar" style="width:${p}%"></div></div><p>${p}% abgeschlossen · nächste Übung: <b>${esc(ex.title)}</b></p><div class="row"><button onclick="openSession(${s.id}, ${state.currentExerciseIndex})">Weiterlernen</button><button class="secondary" onclick="routeSessions()">Andere Sitzung</button></div></section>
 <section class="card"><h2>So nutzt du die App</h2><ol><li>Sitzung öffnen und Aufgaben bearbeiten.</li><li>Du kannst jederzeit schließen: Antworten und Position bleiben gespeichert.</li><li>Mit „Lösungen anzeigen“ vergleichst du deine Antworten.</li><li>Freie Sätze werden nicht KI-korrigiert, sondern mit Musterlösungen verglichen.</li></ol></section>
 <section class="card"><h2>Vokabeldaten</h2><p>Geladen: <b>${VOCAB.length}</b> Einträge aus deiner Excel-Datei.</p></section>`);
}
function routeSessions(){
 app(`<h2>Sitzungen</h2>${SESSIONS.map(s=>`<section class="card"><div class="space"><div><h3>${esc(s.title)}</h3><p class="muted">Wdh.: ${esc(s.review)}</p>${s.tags.map(t=>`<span class="pill">${esc(t)}</span>`).join('')}</div><b>${progressFor(s)}%</b></div><div class="progress"><div class="bar" style="width:${progressFor(s)}%"></div></div><div class="row" style="margin-top:12px"><button onclick="openSession(${s.id},0)">Start/Öffnen</button><button class="secondary" onclick="resetSession(${s.id})">Sitzung zurücksetzen</button></div></section>`).join('')}`);
}
function routeTopics(){
 app(`<h2>Grammatikthemen</h2>${TOPICS.map(t=>`<section class="card topic"><div class="space"><div><b>${t.id}. ${esc(t.title)}</b><p class="muted">${esc(t.focus)}</p><p class="small">${esc(t.examples)}</p></div><select onchange="setTopicStatus(${t.id},this.value)"><option value="offen" ${getTopicStatus(t.id)==='offen'?'selected':''}>offen</option><option value="gelernt" ${getTopicStatus(t.id)==='gelernt'?'selected':''}>gelernt</option><option value="wiederholen" ${getTopicStatus(t.id)==='wiederholen'?'selected':''}>wiederholen</option><option value="schwierig" ${getTopicStatus(t.id)==='schwierig'?'selected':''}>schwierig</option></select></div><textarea placeholder="Notiz zu diesem Thema" oninput="setNote(${t.id},this.value)">${esc(state.notes[t.id]||'')}</textarea></section>`).join('')}`);
}
function routeVocab(){
 const lessons=[...new Set(VOCAB.map(v=>v.lesson))];
 app(`<section class="card"><h2>Vokabeln</h2><input id="vsearch" placeholder="Suche Deutsch oder Albanisch…" oninput="filterVocab()"><p class="muted">${VOCAB.length} Vokabeln · ${lessons.length} Lektionen</p></section><section id="vocabList"></section>`);
 filterVocab();
}
function filterVocab(){
 const q=norm($('vsearch')?.value||'');
 const found=VOCAB.filter(v=>!q || norm(v.de).includes(q) || norm(v.sq).includes(q)).slice(0,120);
 $('vocabList').innerHTML = found.map(v=>`<div class="card"><b>${esc(v.sq)}</b><br><span>${esc(v.de)}</span><p class="muted small">${esc(v.lesson)}</p></div>`).join('') || '<div class="card">Nichts gefunden.</div>';
}
function getTopicStatus(id){ return state.topicStatus[id] || 'offen'; }
function setTopicStatus(id,val){ state.topicStatus[id]=val; saveState(); }
function setNote(id,val){ state.notes[id]=val; saveState(); }
function resetSession(id){ if(!confirm('Diese Sitzung wirklich zurücksetzen?')) return; delete state.completed[id]; Object.keys(state.answers).forEach(k=>{ if(k.startsWith(id+':')) delete state.answers[k]; }); saveState(); routeSessions(); }
function openSession(id, exIndex){ state.currentSessionId=id; state.currentExerciseIndex=exIndex||0; saveState(); renderExercise(); }
function renderExercise(){
 const s=currentSession(); const idx=state.currentExerciseIndex; const ex=s.exercises[idx]; const p=progressFor(s);
 let body = `<section class="card"><div class="space"><button class="secondary" onclick="routeSessions()">← Sitzungen</button><span class="muted">${idx+1}/${s.exercises.length}</span></div><h2>${esc(s.title)}</h2><div class="progress"><div class="bar" style="width:${p}%"></div></div></section>`;
 body += `<section class="card"><h3 class="exercise-title">${esc(ex.title)}</h3>${renderExerciseBody(s,ex)}</section>`;
 body += `<section class="card"><div class="row"><button class="secondary" onclick="prevExercise()">Zurück</button><button onclick="markAndNext()">Erledigt & weiter</button><button class="secondary" onclick="toggleSolutions('${ex.id}')">${state.showSolutions[ex.id]?'Lösungen ausblenden':'Lösungen anzeigen'}</button></div></section>`;
 app(body);
}
function key(s,ex,i){ return `${s.id}:${ex.id}:${i}`; }
function renderExerciseBody(s,ex){
 if(ex.type==='info') return ex.html;
 if(ex.context) var ctx=`<div class="context">${esc(ex.context)}</div>`; else var ctx='';
 if(ex.type==='tf') return ctx + ex.items.map((it,i)=>`<div class="item"><p>${i+1}. ${esc(it.s)}</p><select onchange="answer('${key(s,ex,i)}',this.value)"><option value="">– auswählen –</option><option value="po" ${state.answers[key(s,ex,i)]==='po'?'selected':''}>po</option><option value="jo" ${state.answers[key(s,ex,i)]==='jo'?'selected':''}>jo</option></select>${solutionBlock(ex,it.a,i,state.answers[key(s,ex,i)])}</div>`).join('');
 if(ex.type==='cloze') return ex.items.map((it,i)=>`<div class="item"><p>${i+1}. ${esc(it.q)}</p><input value="${esc(state.answers[key(s,ex,i)]||'')}" oninput="answer('${key(s,ex,i)}',this.value)">${solutionBlock(ex,it.a,i,state.answers[key(s,ex,i)])}</div>`).join('');
 if(ex.type==='text') return ex.items.map((it,i)=>`<div class="item"><p>${i+1}. ${esc(it)}</p><textarea oninput="answer('${key(s,ex,i)}',this.value)">${esc(state.answers[key(s,ex,i)]||'')}</textarea>${solutionBlock(ex,(ex.solutions||[])[i],i,state.answers[key(s,ex,i)])}</div>`).join('');
 if(ex.type==='match') return `<p>Verbinde sinnvoll. Schreibe ganze Sätze in die Felder.</p><div class="grid"><div>${ex.left.map((x,i)=>`<div class="item"><b>${i+1}.</b> ${esc(x)}</div>`).join('')}</div><div>${ex.right.map((x,i)=>`<div class="item"><b>${String.fromCharCode(65+i)}.</b> ${esc(x)}</div>`).join('')}</div></div>` + ex.left.map((_,i)=>`<div class="item"><p>Satz ${i+1}</p><input value="${esc(state.answers[key(s,ex,i)]||'')}" oninput="answer('${key(s,ex,i)}',this.value)">${solutionBlock(ex,ex.solutions[i],i,state.answers[key(s,ex,i)])}</div>`).join('');
 if(ex.type==='dialog') return `<div class="context">${ex.lines.map(l=>esc(l)).join('<br>')}</div>` + ex.solutions.map((sol,i)=>`<div class="item"><p>Deine Antwort ${i+1}</p><textarea oninput="answer('${key(s,ex,i)}',this.value)">${esc(state.answers[key(s,ex,i)]||'')}</textarea>${solutionBlock(ex,sol,i,state.answers[key(s,ex,i)])}</div>`).join('');
 return '<p>Übungstyp noch nicht unterstützt.</p>';
}
function solutionBlock(ex, sol, i, user){
 if(!state.showSolutions[ex.id]) return '';
 let status=''; if(user && sol && ['tf','cloze'].includes(ex.type)){ status = norm(user)===norm(sol) ? '<p class="correct">✓ wahrscheinlich richtig</p>' : '<p class="wrong">✗ bitte vergleichen</p>'; }
 return `<div class="solution">${status}<b>Musterlösung:</b> ${esc(sol||'individuell')}</div>`;
}
function answer(k,val){ state.answers[k]=val; saveState(); }
function toggleSolutions(id){ state.showSolutions[id]=!state.showSolutions[id]; saveState(); renderExercise(); }
function prevExercise(){ if(state.currentExerciseIndex>0){ state.currentExerciseIndex--; saveState(); renderExercise(); } }
function markAndNext(){ const s=currentSession(); const done=new Set(state.completed[s.id]||[]); done.add(s.exercises[state.currentExerciseIndex].id); state.completed[s.id]=[...done]; if(state.currentExerciseIndex < s.exercises.length-1) state.currentExerciseIndex++; saveState(); renderExercise(); }

$('homeBtn').onclick=routeHome; $('sessionsBtn').onclick=routeSessions; $('topicsBtn').onclick=routeTopics; $('vocabBtn').onclick=routeVocab;
window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); deferredPrompt=e; $('installBtn').classList.remove('hidden'); });
$('installBtn').onclick=async()=>{ if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt=null; $('installBtn').classList.add('hidden'); } };
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./service-worker.js'); }
routeHome();
