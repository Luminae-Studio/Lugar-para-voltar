// game-core.js — Sistema central compartilhado entre as fases de Lugar para Voltar

// ── AUDIO ──────────────────────────────────────────────────────────────────
var AC = new (window.AudioContext || window.webkitAudioContext)();
document.addEventListener('click', function(){ if(AC.state==='suspended') AC.resume(); });
document.addEventListener('keydown', function(){ if(AC.state==='suspended') AC.resume(); });

function playSound(type) {
  try {
    var g = AC.createGain(); g.connect(AC.destination);
    var o = AC.createOscillator(); o.connect(g);
    var now = AC.currentTime;
    // ── Fase 1 — Halloween ─────────────────────────────────────────────────
    if(type==='shoot'){
      o.type='square'; o.frequency.setValueAtTime(440,now); o.frequency.exponentialRampToValueAtTime(110,now+0.1);
      g.gain.setValueAtTime(0.15,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.12);
      o.start(); o.stop(now+0.12);
    } else if(type==='sword'){
      o.type='sawtooth'; o.frequency.setValueAtTime(880,now); o.frequency.exponentialRampToValueAtTime(180,now+0.16);
      g.gain.setValueAtTime(0.2,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.18);
      o.start(); o.stop(now+0.18);
    } else if(type==='magic'){
      o.type='sine'; o.frequency.setValueAtTime(180,now); o.frequency.exponentialRampToValueAtTime(880,now+0.22);
      g.gain.setValueAtTime(0.18,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.26);
      o.start(); o.stop(now+0.26);
    } else if(type==='hit'){
      o.type='sawtooth'; o.frequency.setValueAtTime(140,now); o.frequency.exponentialRampToValueAtTime(55,now+0.09);
      g.gain.setValueAtTime(0.13,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.1);
      o.start(); o.stop(now+0.1);
    } else if(type==='die'){
      o.type='square'; o.frequency.setValueAtTime(280,now); o.frequency.exponentialRampToValueAtTime(35,now+0.45);
      g.gain.setValueAtTime(0.18,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.48);
      o.start(); o.stop(now+0.48);
    } else if(type==='enigma_ok'){
      [523,659,784].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.13;
        gg.gain.setValueAtTime(0.16,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.2);
        oo.start(t); oo.stop(t+0.2);
      });
    } else if(type==='enigma_fail'){
      o.type='square'; o.frequency.setValueAtTime(200,now); o.frequency.exponentialRampToValueAtTime(90,now+0.28);
      g.gain.setValueAtTime(0.18,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.3);
      o.start(); o.stop(now+0.3);
    } else if(type==='victory'){
      [523,659,784,1047].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.16;
        gg.gain.setValueAtTime(0.18,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.32);
        oo.start(t); oo.stop(t+0.32);
      });
    // ── Fase 2 — Carnaval ──────────────────────────────────────────────────
    } else if(type==='punch'){
      o.type='square'; o.frequency.setValueAtTime(200,now); o.frequency.exponentialRampToValueAtTime(60,now+0.08);
      g.gain.setValueAtTime(0.22,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.1);
      o.start(); o.stop(now+0.1);
    } else if(type==='kick'){
      o.type='sawtooth'; o.frequency.setValueAtTime(300,now); o.frequency.exponentialRampToValueAtTime(50,now+0.12);
      g.gain.setValueAtTime(0.25,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.14);
      o.start(); o.stop(now+0.14);
    } else if(type==='special'){
      [200,300,500,700].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.04;
        gg.gain.setValueAtTime(0.18,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.18);
        oo.start(t); oo.stop(t+0.2);
      });
    } else if(type==='combo'){
      o.type='sine'; o.frequency.setValueAtTime(480,now); o.frequency.exponentialRampToValueAtTime(720,now+0.1);
      g.gain.setValueAtTime(0.14,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.15);
      o.start(); o.stop(now+0.15);
    } else if(type==='word_place'){
      o.type='sine'; o.frequency.setValueAtTime(600,now); o.frequency.exponentialRampToValueAtTime(800,now+0.07);
      g.gain.setValueAtTime(0.12,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.1);
      o.start(); o.stop(now+0.1);
    // ── Fase 3 — A Conversa ────────────────────────────────────────────────
    } else if(type==='jump'){
      o.type='sine'; o.frequency.setValueAtTime(320,now); o.frequency.exponentialRampToValueAtTime(640,now+0.13);
      g.gain.setValueAtTime(0.13,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.15);
      o.start(); o.stop(now+0.15);
    } else if(type==='jump2'){
      o.type='sine'; o.frequency.setValueAtTime(500,now); o.frequency.exponentialRampToValueAtTime(900,now+0.1);
      g.gain.setValueAtTime(0.1,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.12);
      o.start(); o.stop(now+0.12);
    } else if(type==='land'){
      o.type='square'; o.frequency.setValueAtTime(100,now); o.frequency.exponentialRampToValueAtTime(55,now+0.07);
      g.gain.setValueAtTime(0.08,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.09);
      o.start(); o.stop(now+0.09);
    } else if(type==='spike'){
      o.type='square'; o.frequency.setValueAtTime(280,now); o.frequency.exponentialRampToValueAtTime(70,now+0.09);
      g.gain.setValueAtTime(0.18,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.11);
      o.start(); o.stop(now+0.11);
    } else if(type==='key'){
      [880,1100,1320].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.08;
        gg.gain.setValueAtTime(0.14,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.18);
        oo.start(t); oo.stop(t+0.18);
      });
    } else if(type==='door'){
      [523,659,784,1047,1319].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.12;
        gg.gain.setValueAtTime(0.16,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.25);
        oo.start(t); oo.stop(t+0.25);
      });
    // ── Fase 4 — O Namoro ──────────────────────────────────────────────────
    } else if(type==='explode'){
      [180,120,80].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sawtooth'; oo.frequency.value=f;
        var t=now+i*0.05;
        gg.gain.setValueAtTime(0.18,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.2);
        oo.start(t); oo.stop(t+0.25);
      });
    } else if(type==='shield'){
      o.type='sine'; o.frequency.setValueAtTime(600,now); o.frequency.exponentialRampToValueAtTime(300,now+0.15);
      g.gain.setValueAtTime(0.12,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.18);
      o.start(); o.stop(now+0.18);
    } else if(type==='bomb'){
      [100,150,200,300].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sawtooth'; oo.frequency.value=f;
        var t=now+i*0.04;
        gg.gain.setValueAtTime(0.22,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.3);
        oo.start(t); oo.stop(t+0.35);
      });
    } else if(type==='code_ok'){
      [523,659,784].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.1;
        gg.gain.setValueAtTime(0.15,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.2);
        oo.start(t); oo.stop(t+0.2);
      });
    } else if(type==='code_fail'){
      o.type='square'; o.frequency.setValueAtTime(200,now); o.frequency.exponentialRampToValueAtTime(80,now+0.25);
      g.gain.setValueAtTime(0.16,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.28);
      o.start(); o.stop(now+0.28);
    // ── Fase 5 — A Casa ────────────────────────────────────────────────────
    } else if(type==='quiz_ok'){
      [523,659,784].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.1;
        gg.gain.setValueAtTime(0.14,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.2);
        oo.start(t); oo.stop(t+0.2);
      });
    } else if(type==='quiz_fail'){
      o.type='square'; o.frequency.setValueAtTime(200,now); o.frequency.exponentialRampToValueAtTime(80,now+0.28);
      g.gain.setValueAtTime(0.16,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.3);
      o.start(); o.stop(now+0.3);
    } else if(type==='note'){
      o.type='sine'; o.frequency.setValueAtTime(800,now); o.frequency.exponentialRampToValueAtTime(1000,now+0.08);
      g.gain.setValueAtTime(0.1,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.12);
      o.start(); o.stop(now+0.12);
    // ── Fase 6 — A Aliança ─────────────────────────────────────────────────
    } else if(type==='step'){
      o.type='square'; o.frequency.setValueAtTime(80,now);
      g.gain.setValueAtTime(0.04,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.06);
      o.start(); o.stop(now+0.06);
    } else if(type==='hide'){
      o.type='sine'; o.frequency.setValueAtTime(400,now); o.frequency.exponentialRampToValueAtTime(200,now+0.1);
      g.gain.setValueAtTime(0.1,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.12);
      o.start(); o.stop(now+0.12);
    } else if(type==='alert'){
      o.type='square'; o.frequency.setValueAtTime(880,now);
      o.frequency.setValueAtTime(440,now+0.1); o.frequency.setValueAtTime(880,now+0.2);
      g.gain.setValueAtTime(0.2,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.35);
      o.start(); o.stop(now+0.35);
    } else if(type==='pass'){
      [523,659,784].forEach(function(f,i){
        var oo=AC.createOscillator(), gg=AC.createGain();
        oo.connect(gg); gg.connect(AC.destination);
        oo.type='sine'; oo.frequency.value=f;
        var t=now+i*0.1;
        gg.gain.setValueAtTime(0.14,t); gg.gain.exponentialRampToValueAtTime(0.001,t+0.2);
        oo.start(t); oo.stop(t+0.2);
      });
    } else if(type==='flower'){
      o.type='sine'; o.frequency.setValueAtTime(660,now); o.frequency.exponentialRampToValueAtTime(1320,now+0.15);
      g.gain.setValueAtTime(0.15,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.2);
      o.start(); o.stop(now+0.2);
    } else if(type==='wrong'){
      o.type='square'; o.frequency.setValueAtTime(200,now); o.frequency.exponentialRampToValueAtTime(80,now+0.28);
      g.gain.setValueAtTime(0.16,now); g.gain.exponentialRampToValueAtTime(0.001,now+0.3);
      o.start(); o.stop(now+0.3);
    }
  } catch(e) {}
}

// ── FADE ───────────────────────────────────────────────────────────────────
var _fadeEl = null;
function _ensureFadeEl() {
  if (!_fadeEl) {
    _fadeEl = document.createElement('div');
    _fadeEl.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#000;pointer-events:none;z-index:9999;opacity:0;transition:opacity 0.5s;';
    document.body.appendChild(_fadeEl);
  }
  return _fadeEl;
}
function fadeOut(cb) {
  var el = _ensureFadeEl();
  el.style.opacity = '1';
  setTimeout(cb || function(){}, 500);
}
function fadeIn(cb) {
  var el = _ensureFadeEl();
  el.style.opacity = '0';
  setTimeout(cb || function(){}, 500);
}

// ── PARTICLES ──────────────────────────────────────────────────────────────
var particles = [];
function burst(x, y, color, n, sp) {
  for(var i=0;i<n;i++){
    var a=Math.random()*Math.PI*2, s=Math.random()*sp+1;
    particles.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,r:Math.random()*4+2,life:28+Math.random()*18,maxLife:46,color:color});
  }
}

// ── SCREENS ────────────────────────────────────────────────────────────────
var screenEl = document.getElementById('screen');
function showScreen(html) {
  screenEl.classList.remove('hidden');
  document.getElementById('screen-content').innerHTML = html;
}
function hideScreen() {
  screenEl.classList.add('hidden');
}
function showMessage(text, dur) {
  var m = document.getElementById('message-box');
  m.innerHTML = text; m.style.display = 'block';
  clearTimeout(showMessage._t);
  showMessage._t = setTimeout(function(){ m.style.display='none'; }, dur);
}

// ── INPUT ──────────────────────────────────────────────────────────────────
var keys = {};
var mouse = { x: 0, y: 0, down: false };
window.addEventListener('keydown', function(e){ keys[e.code]=true; if(e.code==='Space') e.preventDefault(); });
window.addEventListener('keyup', function(e){ keys[e.code]=false; });
(function(){
  var _c = document.getElementById('c');
  _c.addEventListener('mousemove', function(e){ mouse.x=e.clientX; mouse.y=e.clientY; });
  _c.addEventListener('mousedown', function(){ mouse.down=true; });
  _c.addEventListener('mouseup',   function(){ mouse.down=false; });
})();

// ── HUD ────────────────────────────────────────────────────────────────────
function updateHealthBar() {
  document.getElementById('health-bar').style.width = Math.max(0, player.hp/player.maxHp*100) + '%';
}

// ── GLOBALS ────────────────────────────────────────────────────────────────
var score = 0;
var gameState = 'intro';
