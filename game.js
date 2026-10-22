(() => {
"use strict";
const SAVE_KEY = "legionesUmbralSaveV2";
const rarityOrder = {"Común":1,"Raro":2,"Épico":3,"Legendario":4};
const rarityColors = {"Común":"#b2bacd","Raro":"#73c3ff","Épico":"#c29aff","Legendario":"#f2ca73"};
const glyphs = ["⚔","➶","✧","🛡","☄","♜","✦","☯","⛨","⌁","⚡","❖","♢","☼","✺","♧","⟁","☽","♆","♛","⟡","◈","⛓","⚒"];
const units = [
{id:"u001",name:"Guardia del Alba",faction:"Reinos",rarity:"Común",role:"Defensor",hp:120,atk:15,def:22,spd:7,ability:"Sin habilidad especial.",glyph:"🛡"},
{id:"u002",name:"Lancero Gris",faction:"Reinos",rarity:"Común",role:"Asalto",hp:85,atk:22,def:12,spd:11,ability:"Sin habilidad especial.",glyph:"⚔"},
{id:"u003",name:"Exploradora",faction:"Frontera",rarity:"Común",role:"Tirador",hp:72,atk:21,def:9,spd:15,ability:"Sin habilidad especial.",glyph:"➶"},
{id:"u004",name:"Mecánico de Campo",faction:"Tecnomantes",rarity:"Común",role:"Apoyo",hp:88,atk:12,def:13,spd:10,ability:"Sin habilidad especial.",glyph:"⚒"},
{id:"u005",name:"Recluta Umbrío",faction:"Umbral",rarity:"Común",role:"Asalto",hp:90,atk:18,def:13,spd:10,ability:"Sin habilidad especial.",glyph:"☽"},
{id:"u006",name:"Dron de Reconocimiento",faction:"Tecnomantes",rarity:"Común",role:"Tirador",hp:65,atk:19,def:8,spd:16,ability:"Sin habilidad especial.",glyph:"⌁"},
{id:"u007",name:"Guardia de Bronce",faction:"Forjados",rarity:"Común",role:"Defensor",hp:135,atk:13,def:25,spd:5,ability:"Sin habilidad especial.",glyph:"⛨"},
{id:"u008",name:"Adepto Astral",faction:"Astrales",rarity:"Común",role:"Apoyo",hp:75,atk:17,def:10,spd:13,ability:"Sin habilidad especial.",glyph:"✧"},
{id:"u009",name:"Arquera de Cristal",faction:"Astrales",rarity:"Raro",role:"Tirador",hp:88,atk:28,def:12,spd:17,ability:"Flecha precisa: inflige un 35% de daño adicional cada tercer ataque.",glyph:"➶"},
{id:"u010",name:"Bastión Mecánico",faction:"Tecnomantes",rarity:"Raro",role:"Defensor",hp:175,atk:17,def:30,spd:5,ability:"Blindaje reactivo: reduce un 12% el daño recibido.",glyph:"⛨"},
{id:"u011",name:"Médica de Vanguardia",faction:"Reinos",rarity:"Raro",role:"Apoyo",hp:105,atk:13,def:16,spd:12,ability:"Primeros auxilios: cura al aliado más herido cada 3 turnos.",glyph:"✚"},
{id:"u012",name:"Sabueso de Fase",faction:"Umbral",rarity:"Raro",role:"Asalto",hp:100,atk:29,def:12,spd:16,ability:"Cazador: causa un 20% más de daño a enemigos por debajo del 35% de vida.",glyph:"☄"},
{id:"u013",name:"Artillera Nómada",faction:"Frontera",rarity:"Raro",role:"Tirador",hp:95,atk:30,def:11,spd:10,ability:"Salva explosiva: cada 4 turnos golpea a dos enemigos.",glyph:"⚡"},
{id:"u014",name:"Monje del Velo",faction:"Astrales",rarity:"Raro",role:"Apoyo",hp:112,atk:19,def:18,spd:12,ability:"Meditación: gana 5 de defensa al comenzar el combate.",glyph:"☯"},
{id:"u015",name:"Gladiador de Chatarra",faction:"Forjados",rarity:"Raro",role:"Asalto",hp:125,atk:27,def:18,spd:8,ability:"Contraataque: devuelve parte del daño recibido.",glyph:"⚒"},
{id:"u016",name:"Tejedora de Runas",faction:"Astrales",rarity:"Épico",role:"Apoyo",hp:130,atk:24,def:21,spd:13,ability:"Velo rúnico: protege al aliado con menos vida con un escudo.",glyph:"✺"},
{id:"u017",name:"Coloso de Obsidiana",faction:"Umbral",rarity:"Épico",role:"Defensor",hp:245,atk:25,def:37,spd:4,ability:"Muro viviente: reduce un 20% todo el daño recibido.",glyph:"♜"},
{id:"u018",name:"Cazadora del Vacío",faction:"Umbral",rarity:"Épico",role:"Asalto",hp:145,atk:39,def:18,spd:17,ability:"Marca del vacío: el primer golpe debilita la defensa rival.",glyph:"☄"},
{id:"u019",name:"Fénix de Circuitos",faction:"Tecnomantes",rarity:"Épico",role:"Apoyo",hp:140,atk:27,def:19,spd:14,ability:"Reinicio: una vez por combate revive con un 20% de vida.",glyph:"♆"},
{id:"u020",name:"Caballero del Eclipse",faction:"Reinos",rarity:"Épico",role:"Asalto",hp:175,atk:36,def:26,spd:10,ability:"Corte crepuscular: cada 3 ataques golpea a todos los enemigos.",glyph:"⚔"},
{id:"u021",name:"Oráculo Estelar",faction:"Astrales",rarity:"Épico",role:"Tirador",hp:125,atk:41,def:15,spd:15,ability:"Visión futura: comienza el combate con un 15% más de velocidad.",glyph:"✧"},
{id:"u022",name:"Titán de la Forja",faction:"Forjados",rarity:"Legendario",role:"Defensor",hp:330,atk:38,def:48,spd:6,ability:"Corazón de magma: al caer por debajo del 40% de vida, golpea a todos los enemigos y obtiene un escudo.",glyph:"♜"},
{id:"u023",name:"Serafín del Umbral",faction:"Astrales",rarity:"Legendario",role:"Apoyo",hp:225,atk:39,def:31,spd:17,ability:"Renacer celestial: revive al primer aliado caído con un 35% de vida.",glyph:"✦"},
{id:"u024",name:"Vanguardia Omega",faction:"Tecnomantes",rarity:"Legendario",role:"Asalto",hp:245,atk:56,def:27,spd:16,ability:"Sobrecarga omega: cada 3 turnos ejecuta un ataque devastador a dos objetivos.",glyph:"⚡"},
{id:"u025",name:"Centinela del Umbral",faction:"Umbral",rarity:"Legendario",role:"Defensor",hp:310,atk:42,def:44,spd:9,ability:"Eclipse total: cada 4 turnos debilita el ataque enemigo.",glyph:"☽"},
{id:"u026",name:"Ráfaga de la Frontera",faction:"Frontera",rarity:"Épico",role:"Asalto",hp:138,atk:44,def:16,spd:18,ability:"Emboscada: el primer ataque inflige un 50% más de daño.",glyph:"⚔"},
{id:"u027",name:"Herrera Ancestral",faction:"Forjados",rarity:"Épico",role:"Apoyo",hp:155,atk:22,def:28,spd:11,ability:"Temple de acero: cada 3 turnos otorga +8 DEF al aliado más herido.",glyph:"⚒"},
{id:"u028",name:"Arconte de Reinos",faction:"Reinos",rarity:"Legendario",role:"Asalto",hp:260,atk:48,def:34,spd:12,ability:"Juicio real: cada 4 turnos golpea al enemigo más fuerte con 25% extra.",glyph:"♛"}
];
const commanders = [
{id:"c001",name:"Alicia, la Estratega",rarity:"Común",glyph:"♙",passive:"Todas las unidades aliadas reciben un 5% más de defensa.",desc:"Una líder paciente que convierte la disciplina en supervivencia.",effect:"def",value:.05},
{id:"c002",name:"Darian, Guardián del Paso",rarity:"Común",glyph:"⛨",passive:"Las unidades aliadas comienzan con 8 puntos adicionales de vida efectiva.",desc:"Veterano de incontables defensas en la frontera.",effect:"hp",value:.06},
{id:"c003",name:"Nix, Chispa Rebelde",rarity:"Raro",glyph:"⚡",passive:"Las unidades aliadas reciben un 6% más de velocidad.",desc:"Su estrategia consiste en golpear primero y no detenerse.",effect:"spd",value:.06},
{id:"c004",name:"Mara, Maestra de Campo",rarity:"Raro",glyph:"✚",passive:"Las curaciones y los escudos aliados son un 12% más potentes.",desc:"Mantiene unida a la legión cuando todo parece perdido.",effect:"support",value:.12},
{id:"c005",name:"Gorvak, Señor de la Guerra",rarity:"Épico",glyph:"♜",passive:"Al bajar del 50% de vida, las unidades aliadas infligen un 12% más de daño.",desc:"Un estratega brutal que convierte la adversidad en furia.",effect:"lowhp",value:.12},
{id:"c006",name:"Ilyra, Oráculo del Velo",rarity:"Épico",glyph:"☽",passive:"Todas las unidades aliadas comienzan con un escudo equivalente al 8% de su vida máxima.",desc:"Sus visiones revelan el instante exacto en que debe alzarse una defensa.",effect:"shield",value:.08},
{id:"c007",name:"Aurelia, Emperatriz Celestial",rarity:"Legendario",glyph:"♛",passive:"Al comenzar el combate, todas las unidades aliadas reciben un escudo del 15% de su vida máxima.",desc:"Su presencia transforma a una tropa dispersa en una fuerza imparable.",effect:"shield",value:.15},
{id:"c008",name:"K-0R, Arquitecto de Mundos",rarity:"Legendario",glyph:"⟁",passive:"Las unidades aliadas infligen un 10% más de daño y reciben un 5% menos.",desc:"Una inteligencia ancestral que calcula miles de futuros posibles.",effect:"all",value:.10},
{id:"c009",name:"Vespera, Señora de la Frontera",rarity:"Épico",glyph:"➶",passive:"Las unidades de Asalto y Tirador reciben un 10% más de ataque.",desc:"Caza con precisión en terrenos abiertos.",effect:"offense",value:.10}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const deep = v => JSON.parse(JSON.stringify(v));
const todayKey = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`};
const defaultSave = () => ({credits:650,ownedUnits:["u001","u002","u003","u004","u005","u006","u007","u008"],ownedCommanders:["c001","c002"],squad:["u001","u002","u003","u004","u005","u006","u007","u008"],commander:"c001",wins:0,losses:0,packs:1,pity:0,history:[],shopDate:"",shopItems:[],purchasedToday:[],unitLevels:{},unitXp:{},campaignStage:1,campaignCleared:[],missionsDate:"",missions:[],missionProgress:{},missionClaimed:[],stats:{damageDealt:0,damageTaken:0,packsOpened:0,gachaPulls:0,shopBuys:0,stagesCleared:0,unitUses:{},winStreak:0,bestStreak:0},settings:{animations:true,reducedMotion:false,soundEnabled:true,soundVolume:0.55,musicEnabled:false,battleSpeed:1,haptics:true}});
let save = loadSave(), currentRarity="all", deferredInstall=null, battleRunning=false;
let battleSkip=false, battleMode="arena";

const factionSynergy={"Reinos":{name:"Disciplina real",desc:"+8% DEF",apply:(u)=>{u.def=Math.round(u.def*1.08)}},"Frontera":{name:"Emboscada nómada",desc:"+10% ATQ +6% VEL",apply:(u)=>{u.atk=Math.round(u.atk*1.1);u.spd=Math.round(u.spd*1.06)}},"Tecnomantes":{name:"Red de circuitos",desc:"+8% ATQ +escudo 6%",apply:(u)=>{u.atk=Math.round(u.atk*1.08);u.shield=Math.round((u.maxHp||u.hp)*0.06)}},"Umbral":{name:"Sombra compartida",desc:"+12% daño a enemigos <40% PV",apply:(u)=>{u._voidBonus=true}},"Forjados":{name:"Muralla de forja",desc:"+12% DEF",apply:(u)=>{u.def=Math.round(u.def*1.12)+4}},"Astrales":{name:"Coro estelar",desc:"+8% VEL",apply:(u)=>{u.spd=Math.round(u.spd*1.08);u._healBonus=1.1}}};
const campaignStages=[{id:1,name:"Puesto de vigilancia",boss:false,scale:0.85,reward:{credits:80,xp:15},desc:"Patrulla enemiga."},{id:2,name:"Puente de ceniza",boss:false,scale:0.95,reward:{credits:100,xp:20},desc:"Cruce bajo fuego."},{id:3,name:"Capitán de la Guardia",boss:true,scale:1.15,reward:{credits:180,xp:40,pack:1},desc:"Jefe del valle."},{id:4,name:"Bosque umbrío",boss:false,scale:1.05,reward:{credits:110,xp:25},desc:"Sombras entre árboles."},{id:5,name:"Ruinas tecnomantes",boss:false,scale:1.12,reward:{credits:130,xp:28},desc:"Máquinas activas."},{id:6,name:"Coloso de hierro",boss:true,scale:1.3,reward:{credits:250,xp:55,pack:1},desc:"Centinela forjado."},{id:7,name:"Cañón de cristal",boss:false,scale:1.2,reward:{credits:150,xp:32},desc:"Ecos astrales."},{id:8,name:"Campamento nómada",boss:false,scale:1.25,reward:{credits:160,xp:35},desc:"Emboscada."},{id:9,name:"Torre del Oráculo",boss:false,scale:1.35,reward:{credits:180,xp:40},desc:"Fuego desde las alturas."},{id:10,name:"Señor del Umbral",boss:true,scale:1.55,reward:{credits:400,xp:80,pack:2},desc:"Jefe final."}];
const missionPool=[{id:"m_win3",type:"wins",target:3,reward:{credits:90},label:"Gana 3 combates"},{id:"m_win5",type:"wins",target:5,reward:{credits:140},label:"Gana 5 combates"},{id:"m_pack1",type:"packs",target:1,reward:{credits:70},label:"Abre 1 sobre"},{id:"m_pack2",type:"packs",target:2,reward:{credits:120},label:"Abre 2 sobres"},{id:"m_gacha3",type:"gacha",target:3,reward:{credits:100},label:"Realiza 3 invocaciones"},{id:"m_shop1",type:"shop",target:1,reward:{credits:60},label:"Compra en la tienda"},{id:"m_stage1",type:"stages",target:1,reward:{credits:110},label:"Supera 1 etapa"},{id:"m_synergy",type:"synergyWin",target:1,reward:{credits:100},label:"Gana con sinergia activa"}];
function getActiveSynergy(){const counts={};save.squad.map(unit).filter(Boolean).forEach(u=>{counts[u.faction]=(counts[u.faction]||0)+1});return Object.entries(counts).filter(([,n])=>n>=3).map(([f,n])=>({faction:f,count:n,...factionSynergy[f]}))}
function unitLevel(id){return save.unitLevels[id]||1}
function unitXp(id){return save.unitXp[id]||0}
function xpForLevel(lv){return 40+lv*25}
function scaledStats(u){const lv=unitLevel(u.id);const mult=1+(lv-1)*0.04;return{...u,hp:Math.round(u.hp*mult),atk:Math.round(u.atk*mult),def:Math.round(u.def*mult),spd:Math.round(u.spd*(1+(lv-1)*0.02))}}
function addUnitXp(id,amount){if(!save.ownedUnits.includes(id))return;save.unitXp[id]=(save.unitXp[id]||0)+amount;let lv=unitLevel(id);while(lv<10&&save.unitXp[id]>=xpForLevel(lv)){save.unitXp[id]-=xpForLevel(lv);lv++;save.unitLevels[id]=lv;toast(`${unit(id)?.name||"Unidad"} sube a nivel ${lv}!`)}if(lv>=10)save.unitXp[id]=0}
function haptic(pattern){if(!save.settings.haptics||!navigator.vibrate)return;try{navigator.vibrate(pattern)}catch{}}
function ensureMissions(){if(save.missionsDate===todayKey()&&Array.isArray(save.missions)&&save.missions.length)return;const pool=[...missionPool].sort(()=>Math.random()-0.5);save.missions=pool.slice(0,3).map(m=>m.id);save.missionProgress={};save.missionClaimed=[];save.missionsDate=todayKey();persist()}
function bumpMission(type,amount=1){ensureMissions();save.missions.forEach(id=>{const m=missionPool.find(x=>x.id===id);if(!m||m.type!==type)return;save.missionProgress[id]=Math.min(m.target,(save.missionProgress[id]||0)+amount)})}
function claimMission(id){const m=missionPool.find(x=>x.id===id);if(!m||save.missionClaimed.includes(id))return;if((save.missionProgress[id]||0)<m.target)return toast("Misión incompleta.");save.missionClaimed.push(id);save.credits+=m.reward.credits||0;persist();SFX.buy();haptic([30,40,30]);toast(`Misión completada: +${m.reward.credits} créditos`);renderMissions();renderHome()}


/* ── Motor de sonidos procedurales (Web Audio API, sin archivos externos) ── */
const SFX = (() => {
  let ctx = null, master = null, unlocked = false;
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = save.settings.soundVolume ?? 0.55;
      master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    unlocked = true;
    return ctx;
  }
  function vol() {
    if (!master) return;
    master.gain.value = (save.settings.soundEnabled !== false) ? (save.settings.soundVolume ?? 0.55) : 0;
  }
  function tone(freq, type, dur, gain, when, slideTo) {
    if (!ensure() || save.settings.soundEnabled === false) return;
    vol();
    const t0 = (when ?? 0) + ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain || 0.15, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(master);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  }
  function noise(dur, gain, when, filterFreq) {
    if (!ensure() || save.settings.soundEnabled === false) return;
    vol();
    const t0 = (when ?? 0) + ctx.currentTime;
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const g = ctx.createGain();
    const f = ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = filterFreq || 1200;
    g.gain.setValueAtTime(gain || 0.12, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t0); src.stop(t0 + dur + 0.02);
  }
  return {
    unlock: () => { ensure(); vol(); },
    setVolume: (v) => { if (save.settings) save.settings.soundVolume = v; vol(); },
    ui: () => { tone(520, "triangle", 0.06, 0.08); tone(780, "sine", 0.05, 0.05, 0.04); },
    click: () => tone(440, "square", 0.04, 0.05),
    nav: () => { tone(360, "sine", 0.05, 0.06); tone(540, "sine", 0.06, 0.04, 0.03); },
    buy: () => { tone(660, "triangle", 0.08, 0.1); tone(880, "sine", 0.12, 0.08, 0.06); tone(1100, "sine", 0.1, 0.05, 0.14); },
    pack: () => {
      noise(0.18, 0.1, 0, 800);
      tone(200, "sawtooth", 0.15, 0.08, 0.02, 90);
      tone(600, "triangle", 0.2, 0.1, 0.12);
      tone(900, "sine", 0.25, 0.08, 0.22);
    },
    gacha: () => {
      for (let i = 0; i < 5; i++) tone(400 + i * 90, "sine", 0.08, 0.07, i * 0.05);
      tone(1200, "triangle", 0.3, 0.12, 0.28);
    },
    battleStart: () => {
      tone(180, "sawtooth", 0.25, 0.12, 0, 90);
      noise(0.2, 0.08, 0.05, 600);
      tone(320, "square", 0.15, 0.08, 0.18);
      tone(480, "triangle", 0.2, 0.1, 0.28);
    },
    hit: () => { noise(0.06, 0.09, 0, 1800); tone(160, "square", 0.05, 0.07); },
    heal: () => { tone(520, "sine", 0.12, 0.08); tone(780, "sine", 0.15, 0.06, 0.06); },
    ability: () => { tone(300, "sawtooth", 0.1, 0.09, 0, 500); tone(700, "triangle", 0.15, 0.08, 0.08); },
    death: () => { tone(220, "sawtooth", 0.2, 0.1, 0, 60); noise(0.15, 0.07, 0.05, 400); },
    win: () => {
      [523, 659, 784, 1046].forEach((f, i) => tone(f, "triangle", 0.22, 0.1, i * 0.12));
      tone(1318, "sine", 0.4, 0.08, 0.5);
    },
    lose: () => {
      tone(400, "sawtooth", 0.25, 0.1, 0, 180);
      tone(280, "sawtooth", 0.3, 0.08, 0.2, 90);
      noise(0.25, 0.06, 0.15, 300);
    },
    toast: () => tone(700, "sine", 0.08, 0.05),
    error: () => { tone(180, "square", 0.1, 0.08); tone(120, "square", 0.12, 0.06, 0.08); },
    rarity: (r) => { const n = rarityOrder[r]||1; if(n>=4){for(let i=0;i<6;i++)tone(500+i*120,"triangle",0.15,0.1,i*0.07);tone(1400,"sine",0.5,0.12,0.4)} else if(n>=3){tone(600,"triangle",0.12,0.1);tone(900,"sine",0.18,0.1,0.1);tone(1200,"sine",0.25,0.08,0.22)} else if(n>=2){tone(520,"sine",0.1,0.08);tone(780,"sine",0.12,0.06,0.08)} else tone(400,"sine",0.08,0.05); },
    setMusic: (on) => { save.settings.musicEnabled=on; }
  };
})();
/* ── fin SFX ── */
function loadSave(){try{const raw=localStorage.getItem(SAVE_KEY);if(!raw)return defaultSave();const s=JSON.parse(raw);const d=defaultSave();return {...d,...s,settings:{...d.settings,...(s.settings||{})},stats:{...d.stats,...(s.stats||{})},unitLevels:{...d.unitLevels,...(s.unitLevels||{})},unitXp:{...d.unitXp,...(s.unitXp||{})}}}catch{return defaultSave()}}
function persist(){localStorage.setItem(SAVE_KEY,JSON.stringify(save));renderHeader()}
function unit(id){return units.find(u=>u.id===id)}
function commander(id){return commanders.find(c=>c.id===id)}
function ownedUnitList(){return save.ownedUnits.map(unit).filter(Boolean)}
function rarityClass(r){return "rarity-"+r}
function glyphColor(r){return rarityColors[r]||"#a18aff"}
function toast(msg){const el=document.createElement("div");el.className="toast";el.textContent=msg;$("#toastRegion").append(el);SFX.toast();setTimeout(()=>el.remove(),3200)}
function navigate(view){$$(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${view}`));$$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));if(view==="home")renderHome();if(view==="collection")renderCollection();if(view==="commanders")renderCommanders();if(view==="shop")renderShop();if(view==="packs")renderPacks();if(view==="gacha")renderGacha();if(view==="battle")renderBattle();if(view==="campaign")renderCampaign();if(view==="missions")renderMissions();if(view==="stats")renderStats();SFX.nav();window.scrollTo({top:0,behavior:"smooth"})}
function showDialog(html){$("#resultContent").innerHTML=html;$("#resultDialog").showModal()}
function cardGlyph(u){return `<div class="unit-glyph" style="--unit-color:${glyphColor(u.rarity)}">${u.glyph||glyphs[0]}</div>`}
function miniCard(u){return `<div class="mini-unit" style="--unit-color:${glyphColor(u.rarity)}">${cardGlyph(u)}<strong title="${u.name}">${u.name}</strong><small>${u.rarity}</small></div>`}
function renderHeader(){ $("#credits").textContent=save.credits.toLocaleString("es-ES");$("#collectionCount").textContent=save.ownedUnits.length;$("#playerLevel").textContent=`${save.wins>=20?"Veterano":save.wins>=8?"Soldado":"Recluta"} · Nivel ${1+Math.floor(save.wins/5)}`; }
function renderHome(){
  $("#ownedUnitsStat").textContent=save.ownedUnits.length;$("#ownedCommandersStat").textContent=save.ownedCommanders.length;$("#winsStat").textContent=save.wins;$("#packsStat").textContent=save.packs;
  const squad=save.squad.map(unit).filter(Boolean);$("#homeSquad").innerHTML=squad.length?squad.map(miniCard).join(""):'<div class="empty-state">Elige unidades en tu colección.</div>';
  const c=commander(save.commander);$("#homeCommander").innerHTML=c?`<div class="commander-badge">${c.glyph}</div><div><strong>${c.name}</strong><small>${c.rarity} · ${c.passive}</small></div>`:"";
  ensureShop();const first=unit(save.shopItems.find(x=>x.type==="unit")?.id)||units[8];$("#homeShopPreview").innerHTML=`<div class="daily-preview">${cardGlyph(first)}<div><strong>${first.name}</strong><small>${first.rarity} · ${first.role}</small></div><div class="price">${shopPrice(first)} ◈</div></div>`;
  const syn=getActiveSynergy();const synEl=$("#homeSynergy");if(synEl)synEl.innerHTML=syn.length?syn.map(s=>`<div class="synergy-chip"><strong>${s.faction}</strong> ${s.name} (${s.count})</div>`).join(""):'<div class="muted small">3+ unidades de la misma facción activan sinergia.</div>';
  ensureMissions();const mBox=$("#homeMissions");if(mBox)mBox.innerHTML=save.missions.map(id=>{const m=missionPool.find(x=>x.id===id);const prog=save.missionProgress[id]||0;return `<div class="mission-mini"><strong>${m.label}</strong><span>${Math.min(prog,m.target)}/${m.target}</span></div>`}).join("");
  updateCountdown();
}
function ensureShop(){if(save.shopDate!==todayKey()||!Array.isArray(save.shopItems)||!save.shopItems.length){let seed=Number(todayKey().replaceAll("-",""));const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};const pool=units.filter(u=>u.rarity!=="Común");const selected=[];while(selected.length<5){const u=pool[Math.floor(rand()*pool.length)];if(!selected.some(x=>x.id===u.id))selected.push({type:"unit",id:u.id})}const cp=commanders.filter(c=>!save.ownedCommanders.includes(c.id));if(cp.length)selected.push({type:"commander",id:cp[Math.floor(rand()*cp.length)].id});save.shopDate=todayKey();save.shopItems=selected;save.purchasedToday=[];persist()}}
function shopPrice(u){return ({ "Común":120,"Raro":260,"Épico":620,"Legendario":1400}[u.rarity]||250)}
function renderShop(){ensureShop();$("#dailyShop").innerHTML=save.shopItems.map((item,i)=>{const obj=item.type==="unit"?unit(item.id):commander(item.id);if(!obj)return"";const price=item.type==="unit"?shopPrice(obj):({ "Común":180,"Raro":400,"Épico":850,"Legendario":1800}[obj.rarity]||400);const bought=save.purchasedToday.includes(i);return `<article class="shop-item" style="--unit-color:${glyphColor(obj.rarity)}">${item.type==="unit"?cardGlyph(obj):`<div class="commander-badge">${obj.glyph}</div>`}<div><h3>${obj.name}</h3><small>${item.type==="unit"?obj.role+" · ":"Comandante · "}${obj.rarity}</small><div class="shop-price">${price.toLocaleString("es-ES")} ◈</div></div><button data-buy-shop="${i}" ${bought||save.credits<price?"disabled":""}>${bought?"Comprado":save.credits<price?"Sin créditos":"Reclutar"}</button></article>`}).join("")||'<div class="empty-state">Vuelve mañana para nuevas ofertas.</div>';$("#shopCountdown").textContent=countdownText()}
function buyShop(index){ensureShop();const item=save.shopItems[index];if(!item||save.purchasedToday.includes(index))return;const obj=item.type==="unit"?unit(item.id):commander(item.id);const price=item.type==="unit"?shopPrice(obj):({"Común":180,"Raro":400,"Épico":850,"Legendario":1800}[obj.rarity]||400);if(save.credits<price){SFX.error();return toast("No tienes suficientes créditos.")}if(item.type==="unit"){if(save.ownedUnits.includes(obj.id))return toast("Ya tienes esta unidad.");save.ownedUnits.push(obj.id);if(save.squad.length<8)save.squad.push(obj.id)}else{if(save.ownedCommanders.includes(obj.id))return toast("Ya tienes este comandante.");save.ownedCommanders.push(obj.id)}save.credits-=price;save.purchasedToday.push(index);persist();renderShop();renderHome();save.stats.shopBuys=(save.stats.shopBuys||0)+1;bumpMission("shop");SFX.buy();haptic(25);toast(`${obj.name} se ha unido a tu colección.`)}
function renderCollection(){const search=$("#unitSearch").value.trim().toLowerCase();let list=ownedUnitList().filter(u=>(currentRarity==="all"||u.rarity===currentRarity)&&(!search||`${u.name} ${u.faction} ${u.role}`.toLowerCase().includes(search)));$("#collectionFilterCount").textContent=`Mostrando ${list.length} de ${save.ownedUnits.length} unidades`;$("#collectionHeaderCount").textContent=save.ownedUnits.length;$("#selectedCount").textContent=`${save.squad.length}/8`;$("#unitCollection").innerHTML=list.length?list.map(u=>{const selected=save.squad.includes(u.id);return `<article class="unit-card ${selected?"selected":""}" style="--unit-color:${glyphColor(u.rarity)}"><div class="unit-card-art"><span class="rarity-chip">${u.rarity}</span><span class="owned-chip">✓</span><span class="big-glyph">${u.glyph}</span></div><div class="unit-card-body"><h3>${u.name}</h3><small>${u.faction} · ${u.role}</small><div class="unit-stats"><span><b>PV</b>${u.hp}</span><span><b>ATQ</b>${u.atk}</span><span><b>DEF</b>${u.def}</span><span><b>VEL</b>${u.spd}</span></div><div class="unit-ability">${u.ability}</div></div><div class="unit-card-footer"><button data-toggle-squad="${u.id}">${selected?"✓ En escuadrón":"Añadir al escuadrón"}</button></div></article>`}).join(""):'<div class="empty-state no-units">No se encontraron unidades con esos filtros.</div>';renderBattleFormation()}
function toggleSquad(id){if(save.squad.includes(id)){save.squad=save.squad.filter(x=>x!==id);SFX.click();toast("Unidad retirada del escuadrón.")}else{if(save.squad.length>=8){SFX.error();return toast("Tu escuadrón ya tiene 8 unidades.")}save.squad.push(id);SFX.ui();toast("Unidad añadida al escuadrón.")}persist();renderCollection();renderHome()}
function renderBattleFormation(){const arr=save.squad.map(unit).filter(Boolean);$("#battleFormation").innerHTML=Array.from({length:8},(_,i)=>{const u=arr[i];return u?`<div class="formation-slot" style="--unit-color:${glyphColor(u.rarity)}">${cardGlyph(u)}<div><strong>${i+1}. ${u.name}</strong><small>${u.role} · ${u.rarity}</small></div></div>`:`<div class="formation-slot"><div class="unit-glyph">＋</div><div><strong>Espacio ${i+1}</strong><small>Vacío · añade una unidad</small></div></div>`}).join("")}
function renderCommanders(){const active=commander(save.commander);$("#activeCommanderFeature").innerHTML=active?`<div class="commander-portrait">${active.glyph}</div><div><div class="eyebrow">COMANDANTE ACTIVO · ${active.rarity.toUpperCase()}</div><h2>${active.name}</h2><p>${active.desc}</p><div class="passive-box">✦ <strong>Pasiva:</strong> ${active.passive}</div></div>`:"";$("#commanderCollection").innerHTML=save.ownedCommanders.map(id=>commander(id)).filter(Boolean).map(c=>`<article class="commander-card ${c.id===save.commander?"active-commander":""}"><div class="commander-badge" style="color:${glyphColor(c.rarity)}">${c.glyph}</div><div><h3>${c.name}</h3><small style="color:${glyphColor(c.rarity)}">${c.rarity} · Comandante</small><p>${c.passive}</p><button data-select-commander="${c.id}" ${c.id===save.commander?"disabled":""}>${c.id===save.commander?"En servicio":"Elegir comandante"}</button></div></article>`).join("")}
function selectCommander(id){if(!save.ownedCommanders.includes(id))return;save.commander=id;persist();renderCommanders();renderHome();toast(`${commander(id).name} está al mando.`)}
function weightedRarity(table){const n=Math.random();let sum=0;for(const [r,p] of table){sum+=p;if(n<sum)return r}return table[table.length-1][0]}
function pullUnit(forceRare=false,guaranteeEpic=false){let rarity=weightedRarity(guaranteeEpic?[["Raro",.68],["Épico",.27],["Legendario",.05]]:[["Común",.60],["Raro",.27],["Épico",.10],["Legendario",.03]]);if(forceRare&&rarity==="Común")rarity=weightedRarity([["Raro",.75],["Épico",.22],["Legendario",.03]]);if(save.pity>=9&&rarityOrder[rarity]<3)rarity=weightedRarity([["Épico",.9],["Legendario",.1]]);const pool=units.filter(u=>u.rarity===rarity);const got=pool[Math.floor(Math.random()*pool.length)];if(rarityOrder[rarity]>=3)save.pity=0;else save.pity++;return got}
function addUnit(id){if(!save.ownedUnits.includes(id)){save.ownedUnits.push(id);if(save.squad.length<8)save.squad.push(id);return true}return false}
function renderGacha(){$("#pityCounter").textContent=`${save.pity}/10`;$("#gachaResults").hidden=true}
function doPull(count){const cost=count===10?900:100;if(save.credits<cost){SFX.error();return toast("No tienes suficientes créditos.")}save.credits-=cost;const got=[];for(let i=0;i<count;i++)got.push(pullUnit(count===10&&i===9));if(count===10&&!got.some(u=>rarityOrder[u.rarity]>=2)){got[9]=pullUnit(true)}got.forEach(u=>addUnit(u.id));save.history.unshift({kind:"gacha",date:new Date().toLocaleString("es-ES"),units:got.map(u=>u.id)});save.history=save.history.slice(0,12);persist();renderGacha();$("#pityCounter").textContent=`${save.pity}/10`;$("#gachaResults").hidden=false;$("#gachaResults").innerHTML=`<h3>✦ Invocación completada</h3><p class="muted">Has reclutado ${got.length} ${got.length===1?"unidad":"unidades"}. Los duplicados no generan una copia adicional en la colección.</p><div class="result-items">${got.map(u=>`<div class="result-item" style="--unit-color:${glyphColor(u.rarity)}">${cardGlyph(u)}<strong>${u.name}</strong><small>${u.rarity}</small></div>`).join("")}</div>`;SFX.gacha();try{const best=got.reduce((a,b)=>rarityOrder[b.rarity]>rarityOrder[a.rarity]?b:a,got[0]);SFX.rarity?.(best.rarity);haptic(rarityOrder[best.rarity]>=3?[40,30,80]:20);save.stats.gachaPulls=(save.stats.gachaPulls||0)+count;bumpMission("gacha",count)}catch{}toast(`Invocación completada: ${got.length} ${got.length===1?"unidad":"unidades"}.`);renderHome()}
function renderPacks(){$("#packInventoryCount").textContent=`${save.packs} ${save.packs===1?"sobre":"sobres"}`;$("#openPackLabel").textContent=save.packs?`(${save.packs})`:"";$("#openPackBtn").disabled=save.packs<1;$("#packHistory").innerHTML=save.history.length?save.history.map(h=>`<div class="history-item"><div class="unit-glyph">▣</div><div><strong>${h.kind==="pack"?"Sobre abierto":"Gachapón"}</strong><small>${h.date} · ${h.units.length} reclutamientos</small></div><span class="rarity-text">${h.units.map(id=>unit(id)?.name||"").filter(Boolean).slice(0,2).join(", ")}</span></div>`).join(""):'<div class="empty-state">Todavía no has abierto ningún sobre.</div>'}
function openPack(){if(save.packs<1){SFX.error();return toast("No tienes sobres. Compra uno o gana un combate.")}save.packs--;const got=[pullUnit(),pullUnit(),pullUnit()];got.forEach(u=>addUnit(u.id));save.history.unshift({kind:"pack",date:new Date().toLocaleString("es-ES"),units:got.map(u=>u.id)});save.history=save.history.slice(0,12);persist();renderPacks();SFX.pack();try{const best=got.reduce((a,b)=>rarityOrder[b.rarity]>rarityOrder[a.rarity]?b:a,got[0]);SFX.rarity?.(best.rarity);haptic(rarityOrder[best.rarity]>=3?[50,40,80]:30);save.stats.packsOpened=(save.stats.packsOpened||0)+1;bumpMission("packs")}catch{}showDialog(`<div class="eyebrow">RECLUTAMIENTO COMPLETADO</div><h2>¡Nuevas fuerzas!</h2><p>El sobre contenía estas tres unidades. Las unidades duplicadas no añaden una copia adicional.</p><div class="result-items">${got.map(u=>`<div class="result-item" style="--unit-color:${glyphColor(u.rarity)}">${cardGlyph(u)}<strong>${u.name}</strong><small>${u.rarity}</small></div>`).join("")}</div><button class="primary-button full-width" onclick="document.querySelector('#resultDialog').close()">Continuar</button>`);renderHome()}
function buyPack(){if(save.credits<250){SFX.error();return toast("No tienes suficientes créditos.")}save.credits-=250;save.packs++;persist();renderPacks();SFX.buy();toast("Has comprado un sobre estándar.")}
function countdownText(){const n=new Date(),next=new Date(n);next.setHours(24,0,0,0);let s=Math.max(0,Math.floor((next-n)/1000));const h=String(Math.floor(s/3600)).padStart(2,"0");s%=3600;const m=String(Math.floor(s/60)).padStart(2,"0");const sec=String(s%60).padStart(2,"0");return `${h}:${m}:${sec}`}
function updateCountdown(){const el=$("#shopCountdown");if(el)el.textContent=countdownText();const h=$("#dailyReset");if(h)h.textContent=`Renovación en ${countdownText()}`}
function renderBattle(){renderBattleFormation();const c=commander(save.commander);$("#allyCommanderName").textContent=c?c.name:"Sin comandante";$("#allyBattleRoster").innerHTML=save.squad.map(unit).filter(Boolean).map(u=>battleUnitHTML(u,false)).join("");$("#enemyBattleRoster").innerHTML=makeEnemy().map(u=>battleUnitHTML(u,true)).join("");$("#battleStatus").textContent="ESPERANDO ÓRDENES";$("#battleLog").innerHTML='<span class="log-dot"></span> Tu escuadrón espera en la arena. Pulsa iniciar cuando estés listo.';$("#startBattleBtn").disabled=battleRunning;$("#startBattleBtn").textContent="⚔  Iniciar combate"}
function makeEnemy(){return Array.from({length:8},(_,i)=>{const pool=units.filter(u=>rarityOrder[u.rarity]<=((save.wins<3)?2:save.wins<8?3:4));const base=pool[(Math.floor(Math.random()*pool.length))];const scale=1+Math.min(save.wins,20)*.025;return {...base,id:"e"+i,name:base.name,hp:Math.round(base.hp*scale),maxHp:Math.round(base.hp*scale),atk:Math.round(base.atk*scale),def:Math.round(base.def*scale),currentHp:Math.round(base.hp*scale),alive:true,turns:0,shield:0}})}
function battleUnitHTML(u,enemy){return `<div class="battle-unit" data-battle-id="${u.id}" style="--unit-color:${glyphColor(u.rarity)}"><div class="unit-glyph">${u.glyph}</div><strong>${u.name}</strong><div class="hp-track"><div class="hp-fill" style="width:100%"></div></div><small>${u.hp} PV</small></div>`}
function logBattle(msg){$("#battleLog").innerHTML=`<span class="log-dot"></span>${msg}`}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function startBattleCampaign(stage){battleMode="campaign";window.__campaignStage=stage;startBattle()}
async function startBattle(){if(battleRunning)return;if(!save.squad.length){SFX.error();return toast("Añade al menos una unidad a tu escuadrón.")}battleRunning=true;battleSkip=false;$("#startBattleBtn").disabled=true;if($("#skipBattleBtn"))$("#skipBattleBtn").hidden=false;$("#battleStatus").textContent="COMBATE EN CURSO";SFX.battleStart();haptic(40);const c=commander(save.commander);let allies=save.squad.map(id=>unit(id)).filter(Boolean).map(u=>({...deep(u),maxHp:u.hp,currentHp:u.hp,alive:true,turns:0,shield:0}));let enemies=makeEnemy();const passive=c?.effect;
  allies.forEach(a=>{if(passive==="def"||passive==="all")a.def=Math.round(a.def*(1+(passive==="all"?.05:.05)));if(passive==="hp")a.maxHp=Math.round(a.maxHp*1.06),a.currentHp=a.maxHp;if(passive==="spd")a.spd=Math.round(a.spd*1.06);if(passive==="shield")a.shield=Math.round(a.maxHp*c.value);if(passive==="all")a.atk=Math.round(a.atk*1.1)});
  const syns=getActiveSynergy();syns.forEach(s=>allies.filter(a=>a.faction===s.faction).forEach(a=>s.apply(a)));if(syns.length)logBattle(`Sinergia: ${syns.map(s=>s.name).join(", ")}`);const synEl=$("#battleSynergy");if(synEl)synEl.innerHTML=syns.map(s=>`<span class="synergy-pill">${s.faction}: ${s.name}</span>`).join(" ");
  const refresh=()=>{[...allies,...enemies].forEach(u=>{const el=document.querySelector(`[data-battle-id="${u.id}"]`);if(!el)return;el.classList.toggle("defeated",!u.alive);const fill=el.querySelector(".hp-fill");if(fill)fill.style.width=`${Math.max(0,u.currentHp/u.maxHp*100)}%`;const sm=el.querySelector("small");if(sm)sm.textContent=`${Math.max(0,Math.ceil(u.currentHp))} PV${u.shield?` +${u.shield} esc.`:""}`})};
  // Ensure the exact battle roster is rendered before simulation starts.
  $("#allyBattleRoster").innerHTML=allies.map(u=>battleUnitHTML(u,false)).join("");$("#enemyBattleRoster").innerHTML=enemies.map(u=>battleUnitHTML(u,true)).join("");refresh();
  if(passive==="shield"){logBattle(`${c.name}: escudos activados. ¡Comienza el combate!`)}else{logBattle(`¡Comienza el combate! ${c?c.name+" lidera la formación.":"No hay comandante asignado."}`)}
  if(save.settings.animations&&!battleSkip)await sleep(Math.max(40,500/(save.settings.battleSpeed||1)));
  let turn=0;
  while(allies.some(u=>u.alive)&&enemies.some(u=>u.alive)&&turn<120){turn++;const queue=[...allies.filter(u=>u.alive),...enemies.filter(u=>u.alive)].sort((a,b)=>b.spd-a.spd+((Math.random()-.5)*1.5));for(const actor of queue){if(!actor.alive)continue;const friendly=allies.includes(actor),targets=friendly?enemies:allies;const living=targets.filter(t=>t.alive);if(!living.length)break;actor.turns++;
      if(friendly&&actor.role==="Apoyo"&&actor.turns%3===0){const wounded=allies.filter(a=>a.alive&&a.currentHp<a.maxHp*.8).sort((a,b)=>a.currentHp/a.maxHp-b.currentHp/b.maxHp)[0];if(wounded){const heal=Math.round(wounded.maxHp*.13*(c?.effect==="support"?1.12:1));wounded.currentHp=Math.min(wounded.maxHp,wounded.currentHp+heal);logBattle(`${actor.name} restaura ${heal} PV a ${wounded.name}.`);SFX.heal();refresh();if(save.settings.animations&&!battleSkip)await sleep(Math.max(30,260/(save.settings.battleSpeed||1)));continue}}
      let target=living.sort((a,b)=>a.currentHp/a.maxHp-b.currentHp/b.maxHp)[0];if(actor.ability.includes("cada 3 turnos")&&actor.turns%3===0){const dmg=Math.round(actor.atk*1.25);living.forEach(t=>dealDamage(t,dmg));logBattle(`${actor.name} libera una técnica de área: ${dmg} de daño a los rivales.`)}
      else{let mult=1;if(actor.rarity==="Legendario")mult=1.12;if(actor.ability.includes("cada 3 turnos")&&actor.turns%3===0)mult=1.5;if(friendly&&passive==="all")mult*=1.1;if(friendly&&passive==="lowhp"&&actor.currentHp<actor.maxHp*.5)mult*=1.12;if(actor.ability.includes("35% de daño adicional")&&actor.turns%3===0)mult*=1.35;if(actor.ability.includes("20% más de daño")&&target.currentHp<target.maxHp*.35)mult*=1.2;let dmg=Math.max(2,Math.round(actor.atk*mult-target.def*.32));if(target.ability?.includes("reduce un 20%"))dmg=Math.round(dmg*.8);if(target.ability?.includes("reduce un 12%"))dmg=Math.round(dmg*.88);dealDamage(target,dmg);logBattle(`${actor.name} golpea a ${target.name} e inflige ${dmg} de daño.`)}
      if(actor.ability.includes("cada 3 turnos")&&actor.turns%3===0){} 
      if(actor.ability.includes("una vez por combate")&&actor.currentHp<=0&&!actor.revived){actor.revived=true;actor.alive=true;actor.currentHp=Math.round(actor.maxHp*.2);logBattle(`${actor.name} se reinicia y vuelve al combate.`)}
      refresh();if(save.settings.animations&&!battleSkip)await sleep(Math.max(30,240/(save.settings.battleSpeed||1)));if(!allies.some(u=>u.alive)||!enemies.some(u=>u.alive))break;
    }}
  function dealDamage(target,dmg){let left=dmg;if(target.shield>0){const used=Math.min(target.shield,left);target.shield-=used;left-=used}target.currentHp-=left;if(target.currentHp<=0){target.currentHp=0;target.alive=false;SFX.death()}else{SFX.hit()}}
  const won=allies.some(u=>u.alive)&&!enemies.some(u=>u.alive);
  const stage=window.__campaignStage;window.__campaignStage=null;
  if(won){save.wins++;save.stats.winStreak=(save.stats.winStreak||0)+1;save.stats.bestStreak=Math.max(save.stats.bestStreak||0,save.stats.winStreak);bumpMission("wins");const syns2=getActiveSynergy();if(syns2.length)bumpMission("synergyWin");
    save.squad.forEach(id=>addUnitXp(id,stage? (stage.reward.xp||20):18));
    if(battleMode==="campaign"&&stage){save.credits+=stage.reward.credits;if(stage.reward.pack)save.packs+=stage.reward.pack;if(!save.campaignCleared.includes(stage.id)){save.campaignCleared.push(stage.id);save.stats.stagesCleared=(save.stats.stagesCleared||0)+1;bumpMission("stages");if(stage.id>=save.campaignStage)save.campaignStage=stage.id+1}logBattle(`¡Etapa superada! +${stage.reward.credits} créditos.`);}
    else{save.credits+=120;save.packs++;logBattle("¡Victoria! Has ganado 120 créditos y un sobre de unidades.");}
    SFX.win();haptic([40,50,40,50,100]);
  }else{save.losses++;save.stats.winStreak=0;save.squad.forEach(id=>addUnitXp(id,8));
    if(battleMode==="campaign"){save.credits+=20;logBattle("Derrota en campaña.");}else{save.credits+=35;logBattle("Derrota. Recibes 35 créditos por participar; ajusta tu formación y vuelve a intentarlo.");}
    SFX.lose();haptic([80,40,80]);
  }
  battleMode="arena";
  if($("#skipBattleBtn"))$("#skipBattleBtn").hidden=true;persist();$("#battleStatus").textContent=won?"VICTORIA":"DERROTA";$("#startBattleBtn").disabled=false;$("#startBattleBtn").textContent="↻  Volver a combatir";battleRunning=false;renderHome();renderBattleFormation();showDialog(`<div class="eyebrow">${won?"VICTORIA EN LA ARENA":"LA LEGIÓN HA CAÍDO"}</div><h2>${won?"¡Combate ganado!":"Derrota honorable"}</h2><p>${won?"Tu legión ha superado al rival. Has recibido 120 créditos y un sobre estándar.":"El rival ha vencido esta vez. Recibes 35 créditos de consolación. Prueba otra combinación de unidades o un comandante diferente."}</p><div class="result-items"><div class="result-item"><div class="unit-glyph">◈</div><strong>+${won?120:35} créditos</strong><small>Recompensa</small></div>${won?'<div class="result-item"><div class="unit-glyph">▣</div><strong>+1 sobre</strong><small>Reclutamiento</small></div>':""}</div><button class="primary-button full-width" onclick="document.querySelector('#resultDialog').close()">Continuar</button>`)}

function renderCampaign(){const el=$("#campaignMap");if(!el)return;el.innerHTML=campaignStages.map(st=>{const cleared=save.campaignCleared.includes(st.id);const unlocked=st.id<=save.campaignStage;return `<article class="campaign-node ${cleared?"cleared":""} ${unlocked?"unlocked":"locked"} ${st.boss?"boss":""}"><div class="node-num">${st.boss?"★":st.id}</div><div class="node-body"><h3>${st.name}</h3><p>${st.desc}</p><small>${st.reward.credits} ◈${st.reward.pack?` · ${st.reward.pack} sobre(s)`:""} · ${st.reward.xp} XP</small></div><button data-campaign="${st.id}" ${!unlocked||battleRunning?"disabled":""}>${cleared?"Repetir":unlocked?"Combatir":"Bloqueado"}</button></article>`}).join("");const p=$("#campaignProgress");if(p)p.textContent=`${save.campaignCleared.length}/${campaignStages.length} etapas`}
function renderMissions(){ensureMissions();const el=$("#missionsList");if(!el)return;el.innerHTML=save.missions.map(id=>{const m=missionPool.find(x=>x.id===id);const prog=save.missionProgress[id]||0;const done=prog>=m.target;const claimed=save.missionClaimed.includes(id);return `<article class="mission-card ${done?"done":""} ${claimed?"claimed":""}"><div><strong>${m.label}</strong><div class="mission-bar"><div style="width:${Math.min(100,prog/m.target*100)}%"></div></div><small>${Math.min(prog,m.target)}/${m.target}</small></div><div class="mission-reward">+${m.reward.credits} ◈</div><button data-claim-mission="${id}" ${!done||claimed?"disabled":""}>${claimed?"Reclamada":done?"Reclamar":"En curso"}</button></article>`}).join("")}
function renderStats(){const el=$("#statsGrid");if(!el)return;const st=save.stats||{};const uses=Object.entries(st.unitUses||{}).sort((a,b)=>b[1]-a[1]).slice(0,5);el.innerHTML=`<article class="stat-card"><div class="stat-icon green">⚔</div><div><small>VICTORIAS</small><strong>${save.wins}</strong><span>Derrotas: ${save.losses}</span></div></article><article class="stat-card"><div class="stat-icon gold">🔥</div><div><small>RACHA</small><strong>${st.winStreak||0}</strong><span>Mejor: ${st.bestStreak||0}</span></div></article><article class="stat-card"><div class="stat-icon violet">💥</div><div><small>DAÑO</small><strong>${(st.damageDealt||0).toLocaleString("es-ES")}</strong><span>Recibido: ${(st.damageTaken||0).toLocaleString("es-ES")}</span></div></article><article class="stat-card"><div class="stat-icon blue">▣</div><div><small>SOBRES</small><strong>${st.packsOpened||0}</strong><span>Invocaciones: ${st.gachaPulls||0}</span></div></article><article class="stat-card"><div class="stat-icon gold">🗺</div><div><small>CAMPAÑA</small><strong>${st.stagesCleared||0}</strong><span>${save.campaignCleared?.length||0}/10 etapas</span></div></article><article class="stat-card"><div class="stat-icon violet">◈</div><div><small>TIENDA</small><strong>${st.shopBuys||0}</strong><span>Unidades: ${save.ownedUnits.length}</span></div></article>`;const top=$("#statsTopUnits");if(top)top.innerHTML=uses.length?uses.map(([id,n])=>{const u=unit(id);return u?`<div class="mini-unit" style="--unit-color:${glyphColor(u.rarity)}">${cardGlyph(u)}<strong>${u.name}</strong><small>${n} combates · Nv.${unitLevel(id)}</small></div>`:""}).join(""):'<div class="muted">Sin datos aún.</div>'}
function setBattleSpeed(n){save.settings.battleSpeed=n;persist();$$("[data-speed]").forEach(b=>b.classList.toggle("active",Number(b.dataset.speed)===n));SFX.click()}

function bindEvents(){
  const unlockAudio=()=>{SFX.unlock();document.removeEventListener("pointerdown",unlockAudio);document.removeEventListener("keydown",unlockAudio)};document.addEventListener("pointerdown",unlockAudio,{once:true});document.addEventListener("keydown",unlockAudio,{once:true});
  document.addEventListener("click",e=>{const nav=e.target.closest("[data-view]");if(nav){e.preventDefault();navigate(nav.dataset.view);return}const buy=e.target.closest("[data-buy-shop]");if(buy){buyShop(Number(buy.dataset.buyShop));return}const toggle=e.target.closest("[data-toggle-squad]");if(toggle){toggleSquad(toggle.dataset.toggleSquad);return}const select=e.target.closest("[data-select-commander]");if(select){selectCommander(select.dataset.selectCommander);return}
    const claim=e.target.closest("[data-claim-mission]");if(claim){claimMission(claim.dataset.claimMission);return}
    const camp=e.target.closest("[data-campaign]");if(camp){const st=campaignStages.find(s=>s.id===Number(camp.dataset.campaign));if(st){navigate("battle");startBattleCampaign(st)}return}
    const spd=e.target.closest("[data-speed]");if(spd){setBattleSpeed(Number(spd.dataset.speed));return}
  });
  $$("#rarityFilters button").forEach(b=>b.addEventListener("click",()=>{$$("#rarityFilters button").forEach(x=>x.classList.toggle("active",x===b));currentRarity=b.dataset.rarity;renderCollection()}));
  $("#unitSearch").addEventListener("input",renderCollection);$("#startBattleBtn").addEventListener("click",startBattle);$("#openPackBtn").addEventListener("click",openPack);$("#buyPackBtn").addEventListener("click",buyPack);$("#pullOneBtn").addEventListener("click",()=>doPull(1));$("#pullTenBtn").addEventListener("click",()=>doPull(10));
  $("#settingsBtn").addEventListener("click",()=>{$("#animationsToggle").checked=save.settings.animations;$("#reducedMotionToggle").checked=save.settings.reducedMotion;$("#soundToggle").checked=save.settings.soundEnabled!==false;if($("#musicToggle"))$("#musicToggle").checked=!!save.settings.musicEnabled;if($("#hapticsToggle"))$("#hapticsToggle").checked=save.settings.haptics!==false;const vol=Math.round((save.settings.soundVolume??0.55)*100);$("#volumeSlider").value=vol;$("#volumeLabel").textContent=vol+"%";$("#settingsDialog").showModal()});$("#closeSettings").addEventListener("click",()=>$("#settingsDialog").close());$("#closeResult").addEventListener("click",()=>$("#resultDialog").close());
  $("#animationsToggle").addEventListener("change",e=>{save.settings.animations=e.target.checked;persist()});$("#reducedMotionToggle").addEventListener("change",e=>{save.settings.reducedMotion=e.target.checked;document.body.classList.toggle("reduce-motion",e.target.checked);persist()});
  $("#soundToggle").addEventListener("change",e=>{save.settings.soundEnabled=e.target.checked;persist();SFX.unlock();if(e.target.checked)SFX.ui()});
  $("#volumeSlider").addEventListener("input",e=>{const v=Number(e.target.value)/100;save.settings.soundVolume=v;$("#volumeLabel").textContent=Math.round(v*100)+"%";SFX.setVolume(v);persist()});
  $("#exportSaveBtn").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(save,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="legiones-del-umbral-partida.json";a.click();URL.revokeObjectURL(a.href);toast("Exportación de partida preparada.")});
  $("#resetGameBtn").addEventListener("click",()=>{if(confirm("¿Seguro que quieres reiniciar la partida? Se perderá el progreso local.")){save=defaultSave();persist();renderAll();$("#settingsDialog").close();toast("Partida reiniciada.")}});
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;$("#installBtn").hidden=false});$("#installBtn").addEventListener("click",async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;$("#installBtn").hidden=true});
}
function renderAll(){renderHeader();renderHome();renderBattle();renderCollection();renderCommanders();renderShop();renderPacks();renderGacha();renderCampaign();renderMissions();renderStats();document.body.classList.toggle("reduce-motion",save.settings.reducedMotion);$$("[data-speed]").forEach(b=>b.classList.toggle("active",Number(b.dataset.speed)===(save.settings.battleSpeed||1)))}
function init(){ensureShop();bindEvents();renderAll();if("serviceWorker"in navigator&&location.protocol!=="file:")navigator.serviceWorker.register("./sw.js").catch(()=>{});setInterval(()=>{const old=save.shopDate;ensureShop();if(old!==save.shopDate){renderShop();renderHome();toast("La tienda diaria se ha renovado.")}updateCountdown()},1000)}
init();
})();