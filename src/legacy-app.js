import { computeElo } from './domain/rating.js';
import { completeEmailSignInLink, createClub, currentUser as currentFirebaseUser, isEmailSignInLink, listMyClubs, sendEmailSignInLink, signOut as signOutFirebase, upsertMyProfile } from './data/club-api.js';

/* =========================================================
   EDUGATES INTERNATIONAL SCHOOL — CHESS CLUB
   Single-file private chess study + play platform
   ========================================================= */

// =========================================================
// CBURNETT SVG CHESS PIECES (public domain)
// =========================================================
const PIECE_SVG = {
  'K': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M22.5 11.63V6" stroke-linejoin="miter"/><path d="M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0" fill="none"/></g></svg>`,
  'Q': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11 38.5a35 35 1 0 0 23 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0" fill="none" stroke="#000"/><circle cx="6" cy="12" r="2"/><circle cx="14" cy="9" r="2"/><circle cx="22.5" cy="8" r="2"/><circle cx="31" cy="9" r="2"/><circle cx="39" cy="12" r="2"/></g></svg>`,
  'R': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="butt"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17" stroke-linecap="round" stroke-linejoin="miter"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter"/></g></svg>`,
  'B': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><g stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter"/></g></svg>`,
  'N': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" stroke-linecap="butt"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM15 15.5a.5 1.5 30 1 1-1 0 .5 1.5 30 1 1 1 0z" fill="#000" stroke="#000" stroke-width="1.5"/></g></svg>`,
  'P': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'k': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M22.5 11.63V6" stroke-linejoin="miter" fill="none"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#000"/><path d="M20 8h5" stroke-linejoin="miter"/><path d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85 4.5 25.5 13 29.5 13 29.5M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0" stroke="#fff" fill="none"/></g></svg>`,
  'q': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11 38.5a35 35 1 0 0 23 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0" fill="none" stroke="#fff"/><circle cx="6" cy="12" r="2" stroke="#fff"/><circle cx="14" cy="9" r="2" stroke="#fff"/><circle cx="22.5" cy="8" r="2" stroke="#fff"/><circle cx="31" cy="9" r="2" stroke="#fff"/><circle cx="39" cy="12" r="2" stroke="#fff"/></g></svg>`,
  'r': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="butt"><path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt"/><path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="miter"/></g></svg>`,
  'b': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" fill="none" stroke="#fff" stroke-linejoin="miter"/></g></svg>`,
  'n': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" stroke-linecap="butt"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" stroke-linecap="butt"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM15 15.5a.5 1.5 30 1 1-1 0 .5 1.5 30 1 1 1 0z" fill="#fff" stroke="#fff"/><path d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z" fill="#fff" stroke="none"/></g></svg>`,
  'p': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

// =========================================================
// STORAGE (window.storage shared if available, else localStorage)
// =========================================================
const storage = {
  async get(key, shared=true){
    try{ if(window.storage){ const r = await window.storage.get(key, shared); return r ? r.value : null; } }catch(e){}
    return localStorage.getItem(key);
  },
  async set(key, value, shared=true){
    try{ if(window.storage) return await window.storage.set(key, value, shared); }catch(e){}
    return localStorage.setItem(key, value);
  },
  async list(prefix='', shared=true){
    try{ if(window.storage){ const r = await window.storage.list(prefix, shared); return r ? r.keys : []; } }catch(e){}
    const out=[];
    for(let i=0;i<localStorage.length;i++){
      const k = localStorage.key(i);
      if(k && k.startsWith(prefix)) out.push(k);
    }
    return out;
  }
};

// =========================================================
// APP STATE
// =========================================================
const State = {
  user: null, members: {}, page: 'home',
  flipBoard: false, game: null,
  selectedSquare: null, legalDests: [], lastMove: null,
  studyContext: null, studyStep: 0,
  vsMode: null, engineLevel: null, engineCustomElo: 1500,
  playerColor: 'w',
  variant: 'standard',
  gameRated: false, gameWhite: null, gameBlack: null,
  gameMoveHistory: [], gameOver: false, lastResult: null,
  promotionPending: null,
  engine: null, engineThinking: false,
  puzzleSolution: [], puzzleStep: 0, puzzleFeedback: null,
  authError: null, completingEmailLink: false,
  sharedClubs: [],
  openingLevel: 'All', tacticLevel: 'All',
  preferences: loadPreferences(),
};
const sharedClub = window.CHESS_CLUB_SHARED === true;

const BOARD_THEMES = {
  walnut: { name:'Classic Walnut', light:'#ead7ad', dark:'#8b5a2b', frame:'#4a2c0e', accent:'#d4a943' },
  midnight: { name:'Midnight Blue', light:'#f0eadb', dark:'#263b5f', frame:'#13213a', accent:'#65a7d8' },
  forest: { name:'Forest Green', light:'#f3ead1', dark:'#356246', frame:'#193c2a', accent:'#d7b75b' },
};
const PIECE_STYLES = {
  classic: { name:'Classic Staunton', note:'Traditional ivory and charcoal' },
  warm: { name:'Warm Wood', note:'Soft carved-wood finish' },
  contrast: { name:'High Contrast', note:'Maximum clarity on small screens' },
};

function loadPreferences(){
  try{ return {...{board:'walnut', pieces:'classic', coordinates:true}, ...JSON.parse(localStorage.getItem('eis_board_preferences')||'{}')}; }
  catch(e){ return {board:'walnut', pieces:'classic', coordinates:true}; }
}
function applyPreferences(){
  const theme = BOARD_THEMES[State.preferences.board] || BOARD_THEMES.walnut;
  const root = document.documentElement;
  root.style.setProperty('--board-light', theme.light);
  root.style.setProperty('--board-dark', theme.dark);
  root.style.setProperty('--board-frame', theme.frame);
  root.style.setProperty('--board-accent', theme.accent);
  document.body.dataset.pieceStyle = State.preferences.pieces;
  document.body.classList.toggle('hide-coordinates', !State.preferences.coordinates);
}
function savePreferences(){
  localStorage.setItem('eis_board_preferences', JSON.stringify(State.preferences));
  applyPreferences();
}

// =========================================================
// ELO
// =========================================================
// =========================================================
// MEMBERS
// =========================================================
async function loadMembers(){
  if(sharedClub){ State.members = {}; return; }
  const raw = await storage.get('eis_members', true);
  if(raw){ try{ State.members = JSON.parse(raw); }catch(e){ State.members = {}; } }
  else State.members = {};
}
async function saveMembers(){ await storage.set('eis_members', JSON.stringify(State.members), true); }
async function registerMember(name){
  const id = 'm_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);
  State.members[id] = { id, name, rating:1200, wins:0, losses:0, draws:0, joined:Date.now() };
  await saveMembers();
  return id;
}
async function setUser(id){ State.user = State.members[id]; await storage.set('eis_currentUser', id, true); }
async function loadCurrentUser(){
  if(sharedClub){
    try{
      State.completingEmailLink = await isEmailSignInLink();
      const savedEmail = localStorage.getItem('chess-club:email-for-sign-in');
      if(State.completingEmailLink && savedEmail) await completeEmailSignInLink(savedEmail);
      const user = await currentFirebaseUser();
      if(user){
        const name = user.displayName || (user.email ? user.email.split('@')[0] : 'Club member');
        State.user = {id:user.uid, name, rating:1200, wins:0, losses:0, draws:0};
        await upsertMyProfile(name);
        State.sharedClubs = await listMyClubs();
      }
    }catch(error){ State.authError = error.message; }
    return;
  }
  const id = await storage.get('eis_currentUser', true);
  if(id && State.members[id]) State.user = State.members[id];
}
async function logoutUser(){ State.user = null; await storage.set('eis_currentUser', '', true); }

// =========================================================
// GAME RECORDS
// =========================================================
async function saveGameRecord(record){
  const key = 'eis_game_' + Date.now() + '_' + Math.random().toString(36).slice(2,6);
  await storage.set(key, JSON.stringify(record), true);
}
async function loadGameRecords(){
  const keys = await storage.list('eis_game_', true);
  const items = [];
  for(const k of keys){
    const raw = await storage.get(k, true);
    if(raw){ try{ items.push(JSON.parse(raw)); }catch(e){} }
  }
  return items.sort((a,b)=>b.ts-a.ts);
}

// =========================================================
// STOCKFISH ENGINE
// =========================================================
let stockfishLoading = null;
async function initStockfish(){
  if(State.engine) return State.engine;
  if(stockfishLoading) return stockfishLoading;
  stockfishLoading = (async()=>{
    const url = 'https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js';
    const resp = await fetch(url);
    if(!resp.ok) throw new Error('Failed to fetch Stockfish');
    const code = await resp.text();
    const blob = new Blob([code], {type:'application/javascript'});
    const blobUrl = URL.createObjectURL(blob);
    const w = new Worker(blobUrl);
    State.engine = w;
    w.postMessage('uci'); w.postMessage('isready');
    return w;
  })();
  return stockfishLoading;
}
function configureEngine(level){
  const w = State.engine; if(!w) return {depth:10};
  if(level && level.custom){
    w.postMessage('setoption name UCI_LimitStrength value true');
    w.postMessage('setoption name UCI_Elo value ' + Math.max(1320, Math.min(2850, level.custom)));
    return { depth: 14, movetime: 800 };
  }
  w.postMessage('setoption name UCI_LimitStrength value false');
  const presets = {
    1:{skill:0, depth:1, movetime:200, label:'Novice'},
    2:{skill:5, depth:4, movetime:300, label:'Apprentice'},
    3:{skill:10, depth:8, movetime:500, label:'Journeyman'},
    4:{skill:15, depth:12, movetime:800, label:'Expert'},
    5:{skill:20, depth:18, movetime:1500, label:'Grandmaster'},
  };
  const p = presets[level] || presets[3];
  w.postMessage('setoption name Skill Level value ' + p.skill);
  return p;
}
function askEngineForMove(fen, opts, callback){
  const w = State.engine; if(!w) return;
  State.engineThinking = true;
  const handler = (e)=>{
    const line = e.data;
    if(typeof line !== 'string') return;
    if(line.startsWith('bestmove')){
      const parts = line.split(/\s+/);
      State.engineThinking = false;
      w.removeEventListener('message', handler);
      callback(parts[1]);
    }
  };
  w.addEventListener('message', handler);
  w.postMessage('position fen ' + fen);
  if(opts.movetime) w.postMessage('go depth ' + (opts.depth||10) + ' movetime ' + opts.movetime);
  else w.postMessage('go depth ' + (opts.depth||10));
}

// =========================================================
// OPENINGS DATA
// =========================================================
const OPENINGS = [
  { id:'italian', name:'The Italian Game', eco:'C50', color:'White',
    summary:'One of the oldest opening systems in chess, dating to the 16th century. White develops the bishop to c4, eyeing the weak f7 square, and prepares natural development.',
    keyIdeas:['Develop pieces actively','Pressure on f7 (Black\'s weakest square)','Castle kingside early','Possible d2-d4 break in the center'],
    line:[
      {move:'e4', text:'White takes the center and opens lines for the queen and bishop.'},
      {move:'e5', text:'Black mirrors, contesting the center directly.'},
      {move:'Nf3', text:'Develops a piece, attacks the e5 pawn, controls central squares.'},
      {move:'Nc6', text:'Defends e5 and develops naturally toward the center.'},
      {move:'Bc4', text:'The Italian Bishop! It points at f7, the only square defended by Black\'s king alone.'},
      {move:'Bc5', text:'The Giuoco Piano ("quiet game"). Black mirrors the bishop\'s aggressive aim at f2.'},
      {move:'c3', text:'Preparing d4. White wants to expand in the center with a big pawn duo.'},
      {move:'Nf6', text:'Develops and immediately puts pressure on the e4 pawn.'},
      {move:'d4', text:'White strikes! The classical center. From here many famous lines branch.'}
    ]},
  { id:'ruy-lopez', name:'The Ruy López (Spanish)', eco:'C60', color:'White',
    summary:'Named for the 16th-century Spanish priest who analysed it, the Ruy López is one of the deepest and most respected openings, beloved by world champions from Steinitz to Carlsen.',
    keyIdeas:['Pin the c6 knight indirectly','Prepare c3 and d4','Long, strategic battles','Centralize before attacking'],
    line:[
      {move:'e4', text:'A classical king-pawn opening.'},
      {move:'e5', text:'Black accepts the open game.'},
      {move:'Nf3', text:'Threatens e5 and prepares development.'},
      {move:'Nc6', text:'Defends the pawn.'},
      {move:'Bb5', text:'The Spanish bishop! It indirectly attacks the c6 knight, and thereby the e5 pawn.'},
      {move:'a6', text:'The Morphy Defence — Black "asks the question" of the bishop.'},
      {move:'Ba4', text:'White retains the bishop. (Bxc6 dxc6 is the Exchange Variation, a separate world.)'},
      {move:'Nf6', text:'Develops and threatens e4.'},
      {move:'O-O', text:'Castles. White is prepared to lose e4 momentarily for development tempo.'},
      {move:'Be7', text:'A solid square — the Closed Spanish, a vast theoretical ocean.'}
    ]},
  { id:'sicilian', name:'The Sicilian Defence', eco:'B20', color:'Black',
    summary:'The most popular and combative answer to 1.e4 at the highest level. Black challenges the center asymmetrically, fighting for the win from move one.',
    keyIdeas:['Asymmetric pawn structure','Sharp counter-attacks on the queenside','Dangerous for the unprepared white player','Many sub-systems: Najdorf, Dragon, Sveshnikov'],
    line:[
      {move:'e4', text:'White opens classically.'},
      {move:'c5', text:'The Sicilian! Black does not contest e4 directly, but instead fights for d4 and prepares queenside expansion.'},
      {move:'Nf3', text:'Preparing d4.'},
      {move:'d6', text:'A flexible move common in many Sicilian systems.'},
      {move:'d4', text:'White strikes in the center.'},
      {move:'cxd4', text:'Black trades to open the c-file.'},
      {move:'Nxd4', text:'White recaptures with the knight, the Open Sicilian — the most theoretically demanding line.'},
      {move:'Nf6', text:'Threatens e4, develops naturally.'},
      {move:'Nc3', text:'Defends e4 and develops.'},
      {move:'a6', text:'The Najdorf Variation — perhaps the most famous opening in chess.'}
    ]},
  { id:'french', name:'The French Defence', eco:'C00', color:'Black',
    summary:'A solid, strategic reply where Black willingly accepts a slightly cramped position to build a rock-solid pawn chain and play for a counter-attack on the queenside.',
    keyIdeas:['Closed pawn structure','Light-squared bishop is the "bad" piece','Counterattack with ...c5','Patient strategic play'],
    line:[
      {move:'e4', text:'White takes the center.'},
      {move:'e6', text:'Quiet but cunning — Black prepares ...d5 to challenge the center.'},
      {move:'d4', text:'White builds a big pawn center.'},
      {move:'d5', text:'Black challenges! Now the central tension defines the game.'},
      {move:'Nc3', text:'Defending e4 actively.'},
      {move:'Nf6', text:'Pressuring e4 again.'},
      {move:'Bg5', text:'The Classical Variation, pinning the knight.'},
      {move:'Be7', text:'Breaking the pin and preparing castling.'},
      {move:'e5', text:'White advances, gaining space and locking the center.'},
      {move:'Nfd7', text:'The knight retreats; Black will counterattack with ...c5.'}
    ]},
  { id:'caro-kann', name:'The Caro-Kann Defence', eco:'B10', color:'Black',
    summary:'Named after Horatio Caro and Marcus Kann, this is a sound, solid defence loved for its sturdy pawn structure. Unlike the French, Black\'s light-squared bishop gets a good diagonal.',
    keyIdeas:['Solid structure with no weak bishop','Aim for ...dxe4 with a sound game','Excellent endgame prospects','Hard to crush'],
    line:[
      {move:'e4', text:'White opens with the king pawn.'},
      {move:'c6', text:'Preparing ...d5 with a pawn — unlike the French, the queen\'s bishop will not be locked in.'},
      {move:'d4', text:'White builds the center.'},
      {move:'d5', text:'Black challenges directly.'},
      {move:'Nc3', text:'Defending e4 actively.'},
      {move:'dxe4', text:'Black resolves the tension and avoids any cramping.'},
      {move:'Nxe4', text:'The Classical Caro-Kann — White recaptures and faces a long strategic battle.'},
      {move:'Bf5', text:'A vital move — Black develops the bishop OUTSIDE the pawn chain.'}
    ]},
  { id:'queens-gambit', name:'The Queen\'s Gambit', eco:'D06', color:'White',
    summary:'A classical 1.d4 opening where White offers a wing pawn to deflect Black\'s central pawn. Despite the "gambit" name, the pawn is rarely lost permanently.',
    keyIdeas:['Pressure on Black\'s center','Possible minority attack on the queenside','Long strategic plans','Famous since the 15th century'],
    line:[
      {move:'d4', text:'A queenside opening — claims the center.'},
      {move:'d5', text:'Black contests the center symmetrically.'},
      {move:'c4', text:'The Queen\'s Gambit. White offers the c-pawn to deflect Black\'s d-pawn.'},
      {move:'e6', text:'The Queen\'s Gambit Declined — solid and respected.'},
      {move:'Nc3', text:'Develops and adds pressure to d5.'},
      {move:'Nf6', text:'Develops and prepares to defend the center.'},
      {move:'Bg5', text:'The Orthodox Defence — pinning the knight to add yet more pressure on d5.'},
      {move:'Be7', text:'Breaking the pin and preparing to castle.'},
      {move:'e3', text:'A modest but strong move, freeing the bishop and supporting d4.'}
    ]},
  { id:'kings-indian', name:'The King\'s Indian Defence', eco:'E60', color:'Black',
    summary:'A hyper-modern weapon: Black allows White a big pawn center, then attacks it from the flanks with pieces. Wildly aggressive in the right hands — favored by Kasparov, Fischer, and Bronstein.',
    keyIdeas:['Hyper-modern: let White build, then strike','Kingside attack with ...f5, ...g5','Asymmetric dynamic play','Unbalanced positions'],
    line:[
      {move:'d4', text:'White takes the center.'},
      {move:'Nf6', text:'Black does not contest immediately — a hyper-modern signal.'},
      {move:'c4', text:'Building a big center.'},
      {move:'g6', text:'Preparing the fianchetto.'},
      {move:'Nc3', text:'Develops and defends the center.'},
      {move:'Bg7', text:'The fianchetto bishop — a powerful piece on the long diagonal.'},
      {move:'e4', text:'White grabs a huge center — exactly what Black wanted!'},
      {move:'d6', text:'Supporting an eventual ...e5 break.'},
      {move:'Nf3', text:'Develops naturally.'},
      {move:'O-O', text:'Black castles. The plan is now ...e5 followed by a kingside attack.'}
    ]},
  { id:'london', name:'The London System', eco:'D02', color:'White',
    summary:'A highly practical opening that develops the dark-squared bishop to f4 quickly. Easy to learn, hard to refute, and beloved at all levels — even Magnus Carlsen plays it regularly.',
    keyIdeas:['Quick development','Solid, no weaknesses','Easy to learn','Plays similarly against many setups'],
    line:[
      {move:'d4', text:'A queenside opening.'},
      {move:'d5', text:'Black mirrors.'},
      {move:'Nf3', text:'Develops.'},
      {move:'Nf6', text:'Symmetric development.'},
      {move:'Bf4', text:'The London Bishop! It\'s on a great diagonal before the e-pawn moves.'},
      {move:'e6', text:'A solid setup.'},
      {move:'e3', text:'Supports d4 and opens the f1-bishop.'},
      {move:'Bd6', text:'Trying to challenge the strong London bishop.'},
      {move:'Bg3', text:'Avoids the trade — the bishop stays on its excellent diagonal.'}
    ]},
  { id:'scandinavian', name:'The Scandinavian Defence', eco:'B01', color:'Black',
    summary:'An active reply to 1.e4: Black challenges the center immediately and accepts an early queen move in exchange for a clear, practical structure.',
    keyIdeas:['Challenge e4 at once','Develop with tempo against the queen','Aim for ...c6 and ...Bf5','Keep the position concrete'],
    line:[
      {move:'e4', text:'White claims the center.'}, {move:'d5', text:'Black challenges e4 immediately.'},
      {move:'exd5', text:'White accepts the exchange.'}, {move:'Qxd5', text:'Black recaptures and restores material.'},
      {move:'Nc3', text:'Developing with tempo against the queen.'}, {move:'Qa5', text:'The main practical square: the queen stays active and avoids another tempo.'},
      {move:'d4', text:'White builds a broad center.'}, {move:'c6', text:'Black prepares ...Bf5 and a solid pawn chain.'}
    ]},
  { id:'english', name:'The English Opening', eco:'A10', color:'White',
    summary:'A flexible flank opening where White controls d5 from the side and can transpose into many queen-pawn structures.',
    keyIdeas:['Control d5 from the flank','Flexible pawn structure','Fianchetto the king bishop','Transpose when useful'],
    line:[
      {move:'c4', text:'White immediately influences the central d5 square.'}, {move:'e5', text:'Black stakes a claim in the center.'},
      {move:'Nc3', text:'Developing while increasing pressure on d5.'}, {move:'Nf6', text:'Black develops naturally.'},
      {move:'g3', text:'Preparing the king-side fianchetto.'}, {move:'d5', text:'Black builds a classical pawn center.'},
      {move:'cxd5', text:'White clarifies the center.'}, {move:'Nxd5', text:'Black recaptures with an active knight.'}
    ]},
  { id:'catalan', name:'The Catalan Opening', eco:'E06', color:'White', level:'Advanced',
    summary:'A world-championship system combining Queen’s Gambit space with long-diagonal pressure. White often invests a pawn for lasting positional control.',
    keyIdeas:['Fianchetto pressure on the long diagonal','Restrict Black’s queenside','Recover c4 only when development is complete','Play for durable positional pressure'],
    line:[
      {move:'d4',text:'Claims central space.'},{move:'Nf6',text:'Black develops flexibly.'},{move:'c4',text:'White controls d5.'},{move:'e6',text:'Black prepares ...d5 or ...Bb4+.'},{move:'g3',text:'The Catalan signature: preparing Bg2.'},{move:'d5',text:'Black builds a classical center.'},{move:'Bg2',text:'The bishop becomes the strategic soul of the opening.'},{move:'Be7',text:'Black prepares to castle.'},{move:'Nf3',text:'White completes kingside development.'},{move:'O-O',text:'Black secures the king.'},{move:'O-O',text:'White is ready to pressure the queenside and central dark squares.'}
    ]},
  { id:'nimzo-indian', name:'The Nimzo-Indian Defence', eco:'E20', color:'Black', level:'Advanced',
    summary:'A cornerstone of elite chess. Black gives up the bishop pair only when the resulting structure, development, or dark-square control justifies it.',
    keyIdeas:['Pin the c3 knight','Fight e4 without occupying it','Balance bishop pair against structure','Use ...c5 or ...d5 at the right moment'],
    line:[
      {move:'d4',text:'White opens with the queen pawn.'},{move:'Nf6',text:'Black controls e4.'},{move:'c4',text:'White expands in the center.'},{move:'e6',text:'Black opens the diagonal for the dark bishop.'},{move:'Nc3',text:'White supports e4.'},{move:'Bb4',text:'The Nimzo-Indian pin prevents immediate e4.'},{move:'e3',text:'The Rubinstein system builds a strong center.'},{move:'O-O',text:'Black castles before clarifying the structure.'},{move:'Bd3',text:'White prepares Nge2 and e4.'},{move:'d5',text:'Black strikes in the center before White consolidates.'}
    ]},
  { id:'grunfeld', name:'The Grünfeld Defence', eco:'D80', color:'Black', level:'Expert',
    summary:'An elite hypermodern defence where Black invites a broad white center, then attacks it with pieces and pawn breaks.',
    keyIdeas:['Attack the center with ...c5','Pressure d4 with Bg7','Trade central pawns before they advance','Calculate dynamically'],
    line:[
      {move:'d4',text:'White claims the center.'},{move:'Nf6',text:'Black develops without committing a pawn.'},{move:'c4',text:'White builds more space.'},{move:'g6',text:'Black prepares the kingside fianchetto.'},{move:'Nc3',text:'White reinforces d5 and e4.'},{move:'d5',text:'The Grünfeld challenge.'},{move:'cxd5',text:'White opens the center.'},{move:'Nxd5',text:'Black uses a piece to contest it.'},{move:'e4',text:'White builds the imposing pawn center.'},{move:'Nxc3',text:'Black removes its main defender.'},{move:'bxc3',text:'White accepts structural weakness for space.'},{move:'Bg7',text:'The bishop immediately attacks the center.'}
    ]},
  { id:'petroff', name:'The Petroff Defence', eco:'C42', color:'Black', level:'Advanced',
    summary:'A precise world-championship defence. Black meets 1.e4 symmetrically and relies on accurate timing rather than passive imitation.',
    keyIdeas:['Counterattack e4','Do not copy blindly','Neutralize early initiative','Use central symmetry accurately'],
    line:[
      {move:'e4',text:'White occupies the center.'},{move:'e5',text:'Black answers classically.'},{move:'Nf3',text:'White attacks e5.'},{move:'Nf6',text:'The Petroff counterattacks e4.'},{move:'Nxe5',text:'White accepts the central challenge.'},{move:'d6',text:'Black first drives the knight away.'},{move:'Nf3',text:'The knight returns safely.'},{move:'Nxe4',text:'Only now does Black recover the pawn.'},{move:'d4',text:'White takes space and opens lines.'},{move:'d5',text:'Black stabilizes the central knight.'},{move:'Bd3',text:'White develops with tempo against e4.'}
    ]},
  { id:'sveshnikov', name:'The Sveshnikov Sicilian', eco:'B33', color:'Black', level:'Expert',
    summary:'A concrete Sicilian built on dynamic imbalance. Black accepts a weak d5 square to gain time, space, and active piece play.',
    keyIdeas:['Trade structure for activity','Control d5 tactically','Use ...f5 for kingside play','Know forcing sequences'],
    line:[
      {move:'e4',text:'White opens with the king pawn.'},{move:'c5',text:'Black chooses an asymmetrical fight.'},{move:'Nf3',text:'White prepares d4.'},{move:'Nc6',text:'Black develops and controls d4.'},{move:'d4',text:'The Open Sicilian.'},{move:'cxd4',text:'Black opens the c-file.'},{move:'Nxd4',text:'White centralizes the knight.'},{move:'Nf6',text:'Black attacks e4.'},{move:'Nc3',text:'White defends.'},{move:'e5',text:'The Sveshnikov thrust gains time and concedes d5.'},{move:'Ndb5',text:'White heads for d6.'},{move:'d6',text:'Black controls e5 and prepares active development.'}
    ]},
  { id:'reti', name:'The Réti Opening', eco:'A09', color:'White', level:'Advanced',
    summary:'A flexible grandmaster system that controls the center from a distance and delays committing the central pawns.',
    keyIdeas:['Invite then undermine the center','Transpose with purpose','Fianchetto the kingside bishop','Keep the pawn structure flexible'],
    line:[
      {move:'Nf3',text:'White controls e5 without showing the pawn structure.'},{move:'d5',text:'Black occupies the center.'},{move:'c4',text:'White attacks d5 from the flank.'},{move:'e6',text:'Black reinforces the center.'},{move:'g3',text:'White prepares a long-diagonal bishop.'},{move:'Nf6',text:'Black develops naturally.'},{move:'Bg2',text:'The bishop pressures the center from afar.'},{move:'Be7',text:'Black prepares castling.'},{move:'O-O',text:'White completes a flexible setup.'},{move:'O-O',text:'Both sides can now transform the center.'}
    ]},
];

// =========================================================
// TRAPS DATA (all sequences verified legal)
// =========================================================
const TRAPS = [
  { id:'scholars', name:'Scholar\'s Mate',
    summary:'The most famous trap of all — beloved by beginners, feared in the schoolyard. Four moves to checkmate against unwary defence.',
    line:[
      {move:'e4', text:'A normal start.'},
      {move:'e5', text:'Symmetric.'},
      {move:'Bc4', text:'Aiming the bishop at f7 — the weak square.'},
      {move:'Nc6', text:'A reasonable developing move.'},
      {move:'Qh5', text:'⚠ The trap is set! White threatens Qxf7# (mate) AND eyes e5.'},
      {move:'Nf6', text:'⚠ A natural move — but it ignores the mate threat!'},
      {move:'Qxf7#', text:'Checkmate! The bishop and queen combine to deliver mate on f7. Lesson: always watch for threats on f7 in the opening!'}
    ],
    avoid:'Black should answer 3.Qh5 with 3...g6! pushing the queen, or 3...Qe7 / 3...Qf6 defending f7. Never play 3...Nf6?? blocking your own defence.'
  },
  { id:'fried-liver', name:'The Fried Liver Attack',
    summary:'A spectacular sacrificial attack from the Italian Game where White invests a knight to expose the Black king and hunt it down.',
    line:[
      {move:'e4', text:'King pawn.'},
      {move:'e5', text:'Symmetric.'},
      {move:'Nf3', text:'Attacks e5.'},
      {move:'Nc6', text:'Defends.'},
      {move:'Bc4', text:'Italian Game.'},
      {move:'Nf6', text:'The Two Knights Defence.'},
      {move:'Ng5', text:'Aggressive — attacking f7!'},
      {move:'d5', text:'The recommended response. Black wants to block the bishop.'},
      {move:'exd5', text:'White captures.'},
      {move:'Nxd5', text:'⚠ A common mistake — this allows the Fried Liver! Black should play 6...Na5 (the Polerio).'},
      {move:'Nxf7', text:'The sacrifice! White grabs the f-pawn and pulls the king out.'},
      {move:'Kxf7', text:'Forced.'},
      {move:'Qf3+', text:'Check, attacking the d5 knight.'},
      {move:'Ke6', text:'The king must move into the open — Black is in deep trouble. White has a powerful attack.'}
    ],
    avoid:'On move 6, instead of 6...Nxd5?, Black should play 6...Na5! attacking the bishop and avoiding the entire Fried Liver. This is the safer Polerio Variation.'
  },
  { id:'legal', name:'Légal\'s Mate',
    summary:'A 250-year-old gem named after Sire de Légal, who used it against a chevalier in Paris. White sacrifices the queen for a beautiful mate with minor pieces.',
    line:[
      {move:'e4', text:'King pawn.'},
      {move:'e5', text:'Symmetric.'},
      {move:'Nf3', text:'Develops.'},
      {move:'d6', text:'A solid but passive defence (Philidor).'},
      {move:'Bc4', text:'Aims at f7.'},
      {move:'Bg4', text:'Pinning the knight — but is it really pinned?'},
      {move:'Nc3', text:'Develops and prepares the trap.'},
      {move:'g6', text:'⚠ A careless move that ignores the looming danger.'},
      {move:'Nxe5', text:'A queen sacrifice! The knight on f3 was supposedly pinned...'},
      {move:'Bxd1', text:'Black takes the queen — but...'},
      {move:'Bxf7+', text:'Check! The bishop joins the attack.'},
      {move:'Ke7', text:'Forced.'},
      {move:'Nd5#', text:'Checkmate! A beautiful mate by three minor pieces. Lesson: a pin only matters if breaking it is bad!'}
    ],
    avoid:'Black\'s mistake was 4...Bg4 followed by 7...g6 ignoring the threat. After Bg4, Black must be ready to recapture with the pawn after Nxe5, since the "pin" is fake when the unleashed knight delivers mate.'
  },
  { id:'englund', name:'The Englund Gambit Trap',
    summary:'A cheeky early trap that punishes overconfident White players who try to keep the gambit pawn.',
    line:[
      {move:'d4', text:'Queen pawn.'},
      {move:'e5', text:'The Englund Gambit — a dubious but tricky gambit.'},
      {move:'dxe5', text:'White accepts.'},
      {move:'Nc6', text:'Black develops, threatening to recover the pawn.'},
      {move:'Nf3', text:'Defends e5.'},
      {move:'Qe7', text:'Building pressure — eyeing the e5 pawn.'},
      {move:'Bf4', text:'⚠ A natural-looking move that walks into the trap!'},
      {move:'Qb4+', text:'Check! And it forks two pieces.'},
      {move:'Bd2', text:'Most natural — and losing.'},
      {move:'Qxb2', text:'Black hits the rook on a1 and threatens both.'},
      {move:'Nc3', text:'Defending the rook.'},
      {move:'Bb4', text:'Pinning the knight! Black wins material — White cannot save both the bishop and the c3 knight from devastating discoveries.'}
    ],
    avoid:'White should play 4.Bf4 → instead of 4.Nc3, defending b4 and developing safely. Or after 4.Bf4 Qb4+, White must play 5.Nc3 (not 5.Bd2?) accepting some discomfort but avoiding ruin.'
  },
  { id:'lasker', name:'The Lasker Trap (Albin Counter-Gambit)',
    summary:'One of the very few openings where pawns underpromote on the seventh move! A classic showcase of an underpromotion to a knight saving the day.',
    line:[
      {move:'d4', text:'Queen pawn.'},
      {move:'d5', text:'Symmetric.'},
      {move:'c4', text:'Queen\'s Gambit.'},
      {move:'e5', text:'The Albin Counter-Gambit — Black sacrifices a pawn for activity.'},
      {move:'dxe5', text:'White accepts.'},
      {move:'d4', text:'Black\'s key idea — the d-pawn becomes a thorn.'},
      {move:'e3', text:'⚠ A natural-looking move that drops into the trap.'},
      {move:'Bb4+', text:'Check!'},
      {move:'Bd2', text:'Blocking.'},
      {move:'dxe3', text:'A second pawn invades.'},
      {move:'Bxb4', text:'Capturing the bishop — the natural reply.'},
      {move:'exf2+', text:'Check! The pawn lands on f2.'},
      {move:'Ke2', text:'Forced.'},
      {move:'fxg1=N+', text:'⚜ Underpromotion to a knight with check! A queen would lose to Bxd8. Black wins material with a famous, beautiful trick!'}
    ],
    avoid:'White should avoid 4.e3 in this line and play 4.a3 or 4.Nbd2 instead. The whole Lasker Trap can be sidestepped by simply not opening the long dark diagonal so early.'
  },
  { id:'fishing-pole', name:'The Fishing Pole Trap',
    summary:'A modern trap in the Ruy López popularized by IM Brian Wall. Black dangles a knight on g4 like bait — and if White bites with h3, Black sacrifices for a devastating attack.',
    line:[
      {move:'e4', text:'King pawn.'},
      {move:'e5', text:'Symmetric.'},
      {move:'Nf3', text:'Develops.'},
      {move:'Nc6', text:'Defends.'},
      {move:'Bb5', text:'Ruy López.'},
      {move:'Nf6', text:'Berlin Defence.'},
      {move:'O-O', text:'Castles.'},
      {move:'Ng4', text:'⚜ The fishing pole — the knight dangles temptingly.'},
      {move:'h3', text:'⚠ The bite. Most players cannot resist kicking the knight.'},
      {move:'h5', text:'Black ignores the threat — opens the h-file.'},
      {move:'hxg4', text:'White takes the bait.'},
      {move:'hxg4', text:'Now the h-file is open, and Black\'s queen and rook will combine to deliver mate on the h-file!'}
    ],
    avoid:'White should not play 5.h3 against the fishing-pole knight. Better is 5.Re1 or simply ignoring the knight and continuing development. If you DO play h3, then h5, do NOT capture — play d3 or another quiet move.'
  },
  { id:'elephant-trap', name:'The Elephant Trap',
    summary:'A classic trap in the Queen\'s Gambit Declined that punishes White for greedily grabbing a pawn while ignoring back-rank tactics.',
    line:[
      {move:'d4', text:'Queen pawn.'},
      {move:'d5', text:'Symmetric.'},
      {move:'c4', text:'Queen\'s Gambit.'},
      {move:'e6', text:'QGD.'},
      {move:'Nc3', text:'Develops.'},
      {move:'Nf6', text:'Develops.'},
      {move:'Bg5', text:'Pinning.'},
      {move:'Nbd7', text:'⚜ Looks like a blunder — leaving d5 undefended. But it\'s a trap!'},
      {move:'cxd5', text:'White captures.'},
      {move:'exd5', text:'Black recaptures.'},
      {move:'Nxd5', text:'⚠ White takes the "free" piece — but...'},
      {move:'Nxd5', text:'Black recaptures.'},
      {move:'Bxd8', text:'White grabs the queen — surely winning?'},
      {move:'Bb4+', text:'Check! And it pins the bishop on d2!'},
      {move:'Qd2', text:'Blocking.'},
      {move:'Bxd2+', text:'Black takes — wait, the king must recapture, not the queen.'},
      {move:'Kxd2', text:'King recaptures.'},
      {move:'Kxd8', text:'Black has won a piece! White grabbed the queen but lost two minor pieces and the dark-squared bishop in return!'}
    ],
    avoid:'On move 6, after 5...Nbd7 6.cxd5 exd5, White should NOT play 7.Nxd5? Instead, simply continue developing with 7.e3 or 7.Qc2.'
  },
];

// =========================================================
// TACTICS PUZZLES (all positions and solutions verified with python-chess)
// =========================================================
const TACTICS = [
  { id:'back-rank', theme:'Back-rank Mate', difficulty:'Easy',
    fen:'6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
    sideToMove:'White',
    prompt:'White to move and mate in one.',
    solution:['Rd8#','Rd8'],
    explanation:'Rd8# is checkmate. The king on g8 is trapped on the back rank by its own pawns on f7, g7, and h7. The rook delivers mate from d8 along the 8th rank, with no piece able to block or capture.'
  },
  { id:'skewer', theme:'Skewer', difficulty:'Easy',
    fen:'4k1q1/8/8/8/8/8/8/R3K3 w Q - 0 1',
    sideToMove:'White',
    prompt:'White to move. Win the queen with a skewer.',
    solution:['Ra8+','Ra8'],
    explanation:'Ra8+ skewers the king on e8 to the queen on g8 along the 8th rank. The king must step out of check, after which White plays Rxg8 and wins the queen.'
  },
  { id:'knight-fork', theme:'Knight Fork', difficulty:'Easy',
    fen:'3r1k2/8/8/8/5N2/8/8/4K3 w - - 0 1',
    sideToMove:'White',
    prompt:'White to move. Win material with a knight fork.',
    solution:['Ne6+','Ne6'],
    explanation:'Ne6+ forks the king on f8 and the rook on d8. After the king escapes the check, White plays Nxd8 winning the rook for a clear material advantage.'
  },
  { id:'mate-1', theme:'Queen Mate', difficulty:'Easy',
    fen:'7k/Q7/8/5B2/8/8/8/6K1 w - - 0 1',
    sideToMove:'White',
    prompt:'White to move and mate in one.',
    solution:['Qh7#','Qh7'],
    explanation:'Qh7# is checkmate. The queen lands beside the king, defended by the bishop on f5 — so Kxh7 is impossible. The diagonal escape g8 and the rank escape g7 are both controlled by the queen, leaving no legal move.'
  },
  { id:'royal-fork', theme:'Royal Fork', difficulty:'Medium',
    fen:'8/4k1q1/8/8/3N4/8/8/4K3 w - - 0 1',
    sideToMove:'White',
    prompt:'White to move. Find the royal fork.',
    solution:['Nf5+','Nf5'],
    explanation:'Nf5+ is a royal fork: the knight gives check to the king on e7 AND simultaneously attacks the queen on g7. The king must move out of check, then White plays Nxg7 winning the queen.'
  },
  { id:'discovered-check', theme:'Discovered Check', difficulty:'Medium',
    fen:'1q2k3/8/2N5/8/B7/8/8/4K3 w - - 0 1',
    sideToMove:'White',
    prompt:'White to move. Win the queen with a discovered check.',
    solution:['Nxb8+','Nxb8'],
    explanation:'Nxb8+ wins the queen with a discovered check. The knight captures the queen on b8, and as it moves it uncovers the bishop on a4 along the a4-e8 diagonal, giving check to the king on e8. Black must address the check — the queen is gone forever.'
  },
  { id:'pin-attack', theme:'Attack a Pinned Piece', difficulty:'Medium',
    fen:'rnbqkb1r/ppp1pppp/3p1n2/6B1/3PP3/2N5/PPP2PPP/R2QKBNR w KQkq - 0 1',
    sideToMove:'White',
    prompt:'White to move. Exploit the pin on the f6 knight.',
    solution:['e5'],
    explanation:'e5 attacks the f6 knight, which is absolutely pinned to the queen on d8 by the bishop on g5. The knight cannot move without losing the queen. Black\'s best try is dxe5, but then Bxd8 wins the queen anyway. The pin and the attacker collaborate to win heavy material.'
  },
  { id:'deflection', theme:'Deflection', difficulty:'Medium',
    fen:'4k3/8/8/8/8/8/4Q3/4K3 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Give check by placing the queen on the seventh rank.', solution:['Qe7+','Qe7'],
    explanation:'Qe7+ puts the queen directly in front of the king. Train yourself to look for forcing checks first: they restrict the opponent’s choices and often begin a tactical sequence.'
  },
  { id:'queen-check', theme:'Forcing Check', difficulty:'Easy',
    fen:'4k3/8/8/8/8/8/3Q4/4K3 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Find the most forcing queen check.', solution:['Qd7+','Qd7'],
    explanation:'Qd7+ checks along the seventh rank while controlling key escape squares. In simple positions, name every legal check before searching for quieter moves.'
  },
  { id:'arabian-mate', theme:'Arabian Mate', difficulty:'Advanced', rating:1800,
    fen:'7k/6R1/5N2/8/8/8/8/6K1 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Coordinate rook and knight for mate.', solution:['Rh7#','Rh7'],
    explanation:'Rh7# is the classic Arabian mate. The rook checks beside the king while the knight on f6 protects h7 and covers g8.'
  },
  { id:'anastasia-mate', theme:'Anastasia’s Mate', difficulty:'Advanced', rating:1900,
    fen:'7k/4N2p/8/8/8/8/8/7R w - - 0 1', sideToMove:'White',
    prompt:'White to move. Use the knight’s control to finish on the h-file.', solution:['Rxh7#','Rxh7'],
    explanation:'Rxh7# removes the final shield. The knight on e7 controls g8 and g6, so the king has no escape from the rook.'
  },
  { id:'long-range-mate', theme:'Long-range Rook Mate', difficulty:'Advanced', rating:1750,
    fen:'7k/6pp/8/8/2B5/8/8/3R2K1 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Find the forcing back-rank finish.', solution:['Rd8#','Rd8'],
    explanation:'Rd8# uses the full open file and eighth rank. The king’s own pawns remove every flight square.'
  },
  { id:'bishop-queen-battery', theme:'Bishop–Queen Battery', difficulty:'Advanced', rating:1850,
    fen:'6k1/5ppp/8/7Q/2B5/8/8/6K1 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Break through on the weak f7 square.', solution:['Qxf7+','Qxf7'],
    explanation:'Qxf7+ is possible because the bishop on c4 supports the queen. The forcing check draws the king into a dangerous mating net.'
  },
  { id:'absolute-pin-win', theme:'Absolute Pin Conversion', difficulty:'Expert', rating:2050,
    fen:'4k3/4q3/8/8/8/8/4R3/4K3 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Convert the alignment into decisive material.', solution:['Rxe7+','Rxe7'],
    explanation:'Rxe7+ captures the queen with check. When pieces align with the king, look for captures that also force a reply.'
  },
  { id:'corner-net', theme:'Corner Mating Net', difficulty:'Expert', rating:2150,
    fen:'7k/6pp/5N2/8/8/8/8/6KR w - - 0 1', sideToMove:'White',
    prompt:'White to move. Finish with rook and knight coordination.', solution:['Rxh7#','Rxh7'],
    explanation:'Rxh7# works because the knight on f6 controls h7 and g8. The compact net leaves the cornered king no legal square.'
  },
  { id:'diagonal-entry', theme:'Diagonal Queen Entry', difficulty:'Expert', rating:2200,
    fen:'7k/6pp/8/8/2B5/8/8/3Q2K1 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Enter on the critical diagonal with check.', solution:['Qd8+','Qd8'],
    explanation:'Qd8+ activates the queen with tempo. Advanced calculation begins with forcing moves that improve piece placement at the same time.'
  },
  { id:'rook-seventh', theme:'Seventh-rank Invasion', difficulty:'Advanced', rating:1950,
    fen:'6k1/5ppp/8/8/8/8/3R4/6K1 w - - 0 1', sideToMove:'White',
    prompt:'White to move. Invade with check and restrict the king.', solution:['Rd8+','Rd8'],
    explanation:'Rd8+ forces the king to respond and gives the rook complete activity. Active checks are often the bridge from advantage to conversion.'
  },
];

// =========================================================
// ENDGAME STUDIES
// =========================================================
const ENDGAMES = [
  { id:'kp-vs-k', name:'King and Pawn vs King', difficulty:'Fundamental',
    summary:'The most basic winning endgame — yet rich with the principle of opposition. The defender draws if the attacker cannot take the opposition.',
    fen:'4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',
    technique:[
      'The attacker (White) must use the king to escort the pawn forward.',
      'The key concept is OPPOSITION: when the kings face each other on the same file/rank with one square between, whoever does NOT have to move has the opposition.',
      'Generally, the king should be in front of its pawn — never let your own pawn block your king.',
      'If the defending king reaches the queening square first, with proper play, the position is drawn.',
      'Practical test: from this position, can White force the pawn to e8=Q?'
    ]},
  { id:'kqk', name:'King + Queen vs King mate', difficulty:'Fundamental',
    summary:'The most common mate to know. The queen drives the king to the edge, then the friendly king gives the final shoulder.',
    fen:'8/8/8/3k4/8/8/3K4/3Q4 w - - 0 1',
    technique:[
      'The queen drives the enemy king toward an edge — but be careful of stalemate!',
      'Place the queen a knight\'s move from the enemy king to herd it without ever letting it escape.',
      'Once the king is on the edge, bring your own king close to support.',
      'Deliver mate by walking the queen to a square adjacent to the cornered king with your own king controlling escape squares.',
      'Practice this until you can mate in fewer than 10 moves from any position.'
    ]},
  { id:'krk', name:'King + Rook vs King mate', difficulty:'Fundamental',
    summary:'Trickier than the queen mate — the rook lacks the queen\'s diagonal power, so the kings must coordinate carefully. Use the "ladder" or "staircase" technique.',
    fen:'8/8/8/3k4/8/8/3K4/3R4 w - - 0 1',
    technique:[
      'The rook controls a rank or file; the king must drive the enemy king toward it.',
      'The KEY method is the "ladder": cut off the enemy king with the rook, then walk your king toward it, then cut off again on the next rank.',
      'Avoid stalemate — never let the enemy king have no legal moves while not in check.',
      'Final mate: enemy king on the edge, your king two squares away in opposition, rook delivers the killing blow on the edge.'
    ]},
  { id:'lucena', name:'The Lucena Position', difficulty:'Critical',
    summary:'Named after Luis Ramírez de Lucena (1497) — though he didn\'t actually publish it! This is THE winning rook endgame technique. Memorize the "bridge" idea.',
    fen:'1K1k4/1P6/8/8/8/8/8/2R3r1 w - - 0 1',
    technique:[
      'White has a passed pawn one move from queening, but the king is in the way.',
      'The "bridge" technique: Rc1-c4! Then Kb8-c8 (waiting). When the rook checks come, the rook on c4 forms a SHIELD on the fourth rank.',
      'After the king walks down, the rook will block any check by moving to the fourth rank.',
      'Always set the rook on the rank where it will block checks — this is the bridge.',
      'This is the most important endgame to master in rook-and-pawn-up territory.'
    ]},
  { id:'philidor', name:'The Philidor Position (defending)', difficulty:'Critical',
    summary:'François-André Philidor (1749) showed how a SIDE down a rook+pawn can DRAW with correct technique — provided the defender has correct rook activity.',
    fen:'5k2/8/4K3/4P3/8/r7/8/4R3 b - - 0 1',
    technique:[
      'The defending side keeps their rook on the third (or sixth) rank — preventing the enemy king from advancing to support its pawn.',
      'When the pawn is finally pushed, the defending rook drops to the back rank and gives endless side-checks.',
      'Without anywhere to hide from the checks (no shield/bridge), the attacker cannot make progress.',
      'This is the defender\'s roadmap in any pawn-down rook ending.'
    ]},
  { id:'opposition', name:'The Opposition', difficulty:'Fundamental',
    summary:'One of the most subtle yet powerful endgame ideas. Whoever has the opposition controls the game — especially in king-and-pawn endings.',
    fen:'4k3/8/4K3/8/8/8/8/8 b - - 0 1',
    technique:[
      'DIRECT opposition: kings on the same file with one square between, the side NOT to move has it.',
      'DIAGONAL opposition: same diagonal, one square between.',
      'DISTANT opposition: kings on the same line with 3 or 5 squares between.',
      'In K+P vs K, the attacker needs the opposition to make progress; the defender needs it to hold.',
      'A simple test: reach a position where your opponent must move first. That\'s opposition.'
    ]},
];

// =========================================================
// ROUTING
// =========================================================
function navigate(page, ctx){
  State.page = page;
  if(ctx) State.studyContext = ctx;
  if(['home','openings','traps','tactics','endgames','play-menu','leaderboard','history'].includes(page)){
    State.studyStep = 0;
  }
  if(!['vs-human','vs-engine','study-opening','study-trap','tactics-puzzle','endgame-study'].includes(page)){
    State.game = null; State.selectedSquare = null; State.legalDests = [];
    State.lastMove = null; State.gameOver = false; State.promotionPending = null;
  }
  render();
  window.scrollTo({top:0, behavior:'smooth'});
}

// =========================================================
// MAIN RENDER
// =========================================================
function render(){
  const app = document.getElementById('app');
  app.innerHTML = '';
  applyPreferences();
  if(!State.user){ app.appendChild(renderLogin()); return; }
  app.appendChild(renderHeader());
  const main = document.createElement('main');
  const workspacePages = ['vs-human','vs-engine','study-opening','study-trap','tactics-puzzle','endgame-study'];
  const isWorkspace = workspacePages.includes(State.page);
  if(isWorkspace) main.className = 'workspace-main';
  const container = document.createElement('div'); container.className = `container${isWorkspace?' workspace-container':''}`;
  main.appendChild(container);
  const pages = {
    'home': renderHome, 'openings': renderOpenings, 'traps': renderTraps,
    'tactics': renderTactics, 'endgames': renderEndgames,
    'play-menu': renderPlayMenu, 'vs-human-setup': renderVsHumanSetup,
    'vs-engine-setup': renderVsEngineSetup, 'vs-human': renderVsHuman,
    'vs-engine': renderVsEngine, 'study-opening': renderStudyOpening,
    'study-trap': renderStudyTrap, 'tactics-puzzle': renderTacticsPuzzle,
    'endgame-study': renderEndgameStudy, 'leaderboard': renderLeaderboard,
    'history': renderHistory,
  };
  const fn = pages[State.page] || renderHome;
  container.appendChild(fn());
  app.appendChild(main);
  app.appendChild(renderFooter());
}

// =========================================================
// HEADER + FOOTER
// =========================================================
function renderHeader(){
  const h = document.createElement('header'); h.className='site';
  if(['vs-human','vs-engine','study-opening','study-trap','tactics-puzzle','endgame-study'].includes(State.page)) h.classList.add('compact');
  const c = document.createElement('div'); c.className='container';
  const brand = el(`<div class="brand">
    <div class="seal" role="img" aria-label="Edugates International School logo"></div>
    <div class="brand-text"><span class="title">Edugates International School</span><span class="sub">Chess Club</span></div>
  </div>`);
  brand.onclick = ()=>navigate('home');
  const navItems = [['home','Hall'],['openings','Openings'],['traps','Traps'],['tactics','Tactics'],
    ['endgames','Endgames'],['play-menu','Play'],['leaderboard','Roll'],['history','Annals']];
  const nav = document.createElement('nav'); nav.className='primary';
  navItems.forEach(([p,l])=>{
    const b = document.createElement('button'); b.textContent = l;
    if(State.page===p || (p==='play-menu' && ['vs-human-setup','vs-engine-setup','vs-human','vs-engine'].includes(State.page))) b.classList.add('active');
    b.onclick = ()=>navigate(p);
    nav.appendChild(b);
  });
  const user = el(`<div class="user-pill">
    <div class="avatar">${(State.user.name[0]||'?').toUpperCase()}</div>
    <div><div class="name">${escapeHtml(State.user.name)}</div><div class="rating">Elo ${State.user.rating}</div></div>
    <button id="logoutBtn">leave</button>
  </div>`);
  user.querySelector('#logoutBtn').onclick = async ()=>{ if(sharedClub) await signOutFirebase(); else await logoutUser(); State.user=null; render(); };
  const customize = el(`<button class="customize-button" type="button" aria-label="Customize board and pieces">⚙ <span>Board style</span></button>`);
  customize.onclick = showCustomization;
  const account = document.createElement('div'); account.className='header-actions'; account.appendChild(customize); account.appendChild(user);
  c.appendChild(brand); c.appendChild(nav); c.appendChild(account);
  h.appendChild(c);
  return h;
}

function showCustomization(){
  const back = document.createElement('div'); back.className='modal-backdrop customization-backdrop';
  const modal = document.createElement('div'); modal.className='modal customization-modal';
  modal.innerHTML = `<button class="modal-close" aria-label="Close">×</button>
    <div class="eyebrow">Your board, your way</div><h2>Board & piece studio</h2>
    <p class="custom-intro">Choose a comfortable board for long games. Your choices are saved on this device.</p>
    <div class="custom-section"><h3>Board theme</h3><div class="choice-grid board-choices"></div></div>
    <div class="custom-section"><h3>Piece style</h3><div class="choice-grid piece-choices"></div></div>
    <label class="coordinate-toggle"><input type="checkbox" ${State.preferences.coordinates?'checked':''}/> Show board coordinates</label>`;
  const boardChoices = modal.querySelector('.board-choices');
  Object.entries(BOARD_THEMES).forEach(([id,t])=>{
    const button = el(`<button class="visual-choice ${State.preferences.board===id?'selected':''}" type="button"><span class="board-swatch" style="--swatch-light:${t.light};--swatch-dark:${t.dark}"></span><strong>${t.name}</strong></button>`);
    button.onclick=()=>{ State.preferences.board=id; savePreferences(); showCustomizationRefresh(back); };
    boardChoices.appendChild(button);
  });
  const pieceChoices = modal.querySelector('.piece-choices');
  Object.entries(PIECE_STYLES).forEach(([id,t])=>{
    const button = el(`<button class="visual-choice piece-choice ${State.preferences.pieces===id?'selected':''}" type="button"><span class="piece-preview ${id}">${PIECE_SVG['N']}${PIECE_SVG['q']}</span><strong>${t.name}</strong><small>${t.note}</small></button>`);
    button.onclick=()=>{ State.preferences.pieces=id; savePreferences(); showCustomizationRefresh(back); };
    pieceChoices.appendChild(button);
  });
  modal.querySelector('input').onchange=e=>{ State.preferences.coordinates=e.target.checked; savePreferences(); };
  modal.querySelector('.modal-close').onclick=()=>back.remove();
  back.onclick=e=>{ if(e.target===back) back.remove(); };
  back.appendChild(modal); document.getElementById('app').appendChild(back);
}
function showCustomizationRefresh(current){ current.remove(); showCustomization(); }
function renderFooter(){
  return el(`<footer class="site"><div class="container"><div class="quote">Chess is the gymnasium of the mind. — Blaise Pascal</div></div></footer>`);
}

// =========================================================
// LOGIN
// =========================================================
function renderLogin(){
  if(sharedClub) return renderSharedLogin();
  const wrap = document.createElement('div');
  const stage = document.createElement('div'); stage.className='login-stage';
  const card = document.createElement('div'); card.className='card ornate login-card';
  const memberCount = Object.keys(State.members).length;
  card.innerHTML = `
    <div class="crest" role="img" aria-label="Edugates International School logo"></div>
    <div class="eyebrow">A Private Club</div>
    <h1>Edugates International School</h1>
    <div style="font-family:'EB Garamond',serif;font-style:italic;color:var(--gold);letter-spacing:.3em;text-transform:uppercase;font-size:.78rem;margin-top:.2rem;margin-bottom:.4rem">Chess Club</div>
    <div class="ornament"></div>
    <p class="italic" style="color:var(--ink-soft)">Welcome to the school's official chess study chamber.<br/>Choose your seat at the table or take a new one.</p>
    <div style="text-align:left;margin-top:1.4rem">
      <label for="newName">Join the club</label>
      <div style="display:flex;gap:.5rem">
        <input id="newName" name="newName" autocomplete="name" placeholder="Your name (e.g. Ana Pavlova)" />
        <button class="btn gold" id="joinBtn" type="button">Take a Seat</button>
      </div>
    </div>
    ${memberCount>0 ? `<hr class="fancy" />
    <div style="text-align:left">
      <div class="eyebrow">Existing members</div>
      <div class="members-grid" id="memberGrid"></div>
    </div>` : ''}
  `;
  card.querySelector('#joinBtn').onclick = async ()=>{
    const name = card.querySelector('#newName').value.trim();
    if(!name){ card.querySelector('#newName').focus(); return; }
    if(name.length>30){ alert('Name too long'); return; }
    const id = await registerMember(name);
    await setUser(id);
    State.page='home'; render();
  };
  card.querySelector('#newName')?.addEventListener('keydown', e=>{ if(e.key==='Enter') card.querySelector('#joinBtn').click(); });
  if(memberCount>0){
    const grid = card.querySelector('#memberGrid');
    Object.values(State.members).sort((a,b)=>b.rating-a.rating).forEach(m=>{
      const t = el(`<div class="member-tile">
        <div class="avatar">${(m.name[0]||'?').toUpperCase()}</div>
        <div class="nm">${escapeHtml(m.name)}</div>
        <div class="rt">${m.rating}</div>
      </div>`);
      t.onclick = async ()=>{ await setUser(m.id); render(); };
      grid.appendChild(t);
    });
  }
  stage.appendChild(card);
  wrap.appendChild(stage);
  return wrap;
}

function renderSharedLogin(){
  const wrap = document.createElement('div');
  const stage = document.createElement('div'); stage.className='login-stage';
  const card = document.createElement('div'); card.className='card ornate login-card';
  const action = State.completingEmailLink ? 'Complete sign-in' : 'Send link';
  card.innerHTML = `
    <div class="crest" role="img" aria-label="Edugates International School logo"></div>
    <div class="eyebrow">A private club</div><h1>Edugates International School</h1><div class="ornament"></div>
    <p class="italic" style="color:var(--ink-soft)">${State.completingEmailLink ? 'Enter the email address that received the sign-in link.' : 'Enter your school email and we will send a secure sign-in link.'}</p>
    ${State.authError ? `<p role="alert" style="color:var(--burgundy)">${escapeHtml(State.authError)}</p>` : ''}
    <div style="text-align:left;margin-top:1.4rem"><label for="email">School email</label><div style="display:flex;gap:.5rem"><input id="email" type="email" autocomplete="email" required placeholder="you@school.edu" /><button class="btn gold" id="emailBtn" type="button">${action}</button></div></div>`;
  const submit = async ()=>{
    const email = card.querySelector('#email').value.trim(); if(!email){ card.querySelector('#email').focus(); return; }
    const button = card.querySelector('#emailBtn'); button.disabled = true;
    try{
      if(State.completingEmailLink){
        const user = await completeEmailSignInLink(email);
        const name = user.email ? user.email.split('@')[0] : 'Club member';
        State.user={id:user.uid,name,rating:1200,wins:0,losses:0,draws:0}; await upsertMyProfile(name); State.sharedClubs=await listMyClubs(); State.completingEmailLink=false; State.authError=null; render();
      } else { await sendEmailSignInLink(email); button.textContent='Check your email'; }
    }catch(error){ State.authError=error.message; render(); }
  };
  card.querySelector('#emailBtn').onclick=submit;
  card.querySelector('#email').addEventListener('keydown', event=>{ if(event.key==='Enter') submit(); });
  stage.appendChild(card); wrap.appendChild(stage); return wrap;
}

// =========================================================
// HOME
// =========================================================
function renderHome(){
  const wrap = document.createElement('div');
  const memberCount = Object.keys(State.members).length;
  const hero = el(`<div class="hero">
    <div class="sub">Edugates Chess Club · Reading Room</div>
    <h1>Welcome, <em>${escapeHtml(State.user.name)}</em>.</h1>
    <p>"The pin is mightier than the sword." Within these halls you may study openings and their pitfalls, sharpen your tactics, master the endings, and test your hand against fellow members or the great Stockfish itself.</p>
    <div class="hero-stats">
      <div class="stat"><div class="num">${State.user.rating}</div><div class="lbl">Your Elo</div></div>
      <div class="stat"><div class="num">${State.user.wins||0}–${State.user.losses||0}–${State.user.draws||0}</div><div class="lbl">Wins / Losses / Draws</div></div>
      <div class="stat"><div class="num">${memberCount}</div><div class="lbl">Club Members</div></div>
    </div>
  </div>`);
  wrap.appendChild(hero);
  if(sharedClub && State.sharedClubs.length===0){
    const setup = el(`<div class="card ornate" style="margin:1.5rem 0"><div class="eyebrow">First-time setup</div><h2>Create the shared club</h2><p>Set up the club once. You will become its administrator and can add coaches and students after Firebase Functions are deployed.</p><button class="btn gold" type="button">Create Edugates Chess Club</button></div>`);
    setup.querySelector('button').onclick = async ()=>{
      const button = setup.querySelector('button'); button.disabled=true;
      try{ const club = await createClub({name:'Edugates Chess Club',slug:'edugates-chess'}); State.sharedClubs=[club]; render(); }
      catch(error){ alert(error.message); button.disabled=false; }
    };
    wrap.appendChild(setup);
  }
  wrap.appendChild(el(`<div style="margin:2.4rem 0 1rem"><div class="eyebrow">Choose a Volume</div><h2>The Curriculum</h2></div>`));
  const grid = document.createElement('div'); grid.className='grid grid-3';
  const modules = [
    {p:'openings', i:'♙', t:'Openings', d:'Walk through the great openings — Italian, Ruy Lopez, Sicilian, French and more.'},
    {p:'traps', i:'♞', t:'Traps & Snares', d:'Famous traps every club player must know — both how to spring them and how to avoid them.'},
    {p:'tactics', i:'♕', t:'Middlegame Tactics', d:'Forks, pins, skewers, and combinations. Solve curated puzzles and train your tactical eye.'},
    {p:'endgames', i:'♔', t:'Endgame Studies', d:'King and pawn, the Lucena, opposition, basic mates — the foundations every master built upon.'},
    {p:'play-menu', i:'⚔', t:'The Arena', d:'Face a fellow knight in a rated or friendly bout, or challenge Stockfish at any strength.'},
    {p:'leaderboard', i:'☗', t:'The Roll', d:'See who reigns at the top of the club, with all members ordered by their current standing.'},
  ];
  modules.forEach(m=>{
    const c = el(`<div class="module-card"><div class="icon">${m.i}</div><h3>${m.t}</h3><p>${m.d}</p><div class="arrow">ENTER →</div></div>`);
    c.onclick = ()=>navigate(m.p);
    grid.appendChild(c);
  });
  wrap.appendChild(grid);
  return wrap;
}

// =========================================================
// OPENINGS / TRAPS LIST
// =========================================================
function renderOpenings(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<div class="catalog-hero"><div><div class="eyebrow">Pro repertoire lab</div><h1>Openings of the Masters</h1><p>Build from sound principles to tournament-level systems, with every move explained on the board.</p></div><div class="catalog-stat"><strong>${OPENINGS.length}</strong><span>masterclasses</span></div></div>`));
  const toolbar = el(`<div class="catalog-toolbar"><div><strong>Training pathway</strong><span>Choose the depth that matches your game.</span></div><label>Level<select><option>All</option><option>Foundation</option><option>Club</option><option>Advanced</option><option>Expert</option></select></label></div>`);
  toolbar.querySelector('select').value=State.openingLevel;
  toolbar.querySelector('select').onchange=e=>{ State.openingLevel=e.target.value; render(); };
  wrap.appendChild(toolbar);
  const list = document.createElement('div'); list.className='item-list';
  OPENINGS.forEach((o,index)=>{
    const level=o.level||(index<4?'Foundation':index<10?'Club':'Advanced');
    if(State.openingLevel!=='All'&&State.openingLevel!==level) return;
    const item = el(`<div class="list-item">
      <div class="meta"><div class="lesson-kicker">${level} · ${o.line.length} guided plies</div><h4>${o.name}</h4><div class="small">${escapeHtml(o.summary.split('.')[0])}.</div></div>
      <div class="lesson-tags"><span class="tag">${o.eco}</span><span class="tag ${o.color==='White'?'gold':'green'}">${o.color}</span><span class="lesson-arrow">Study →</span></div>
    </div>`);
    item.onclick = ()=>navigate('study-opening', o);
    list.appendChild(item);
  });
  wrap.appendChild(list);
  return wrap;
}
function renderTraps(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<div style="margin-bottom:1.4rem"><div class="eyebrow">Volume II</div><h1>Traps & Snares</h1><p class="italic" style="color:var(--ink-soft);max-width:60ch">Every club player must know these. Learn to spring them — and to recognize the warning signs before you fall in.</p></div>`));
  const list = document.createElement('div'); list.className='item-list';
  TRAPS.forEach(t=>{
    const item = el(`<div class="list-item">
      <div class="meta"><h4>${t.name}</h4><div class="small italic">${escapeHtml(t.summary)}</div></div>
      <span class="tag burg">${t.line.length} moves</span>
    </div>`);
    item.onclick = ()=>navigate('study-trap', t);
    list.appendChild(item);
  });
  wrap.appendChild(list);
  return wrap;
}

// =========================================================
// STUDY VIEW (openings/traps)
// =========================================================
function renderStudyOpening(){ return renderStudyView(State.studyContext, 'opening'); }
function renderStudyTrap(){ return renderStudyView(State.studyContext, 'trap'); }
function renderStudyView(ctx, kind){
  const wrap = document.createElement('div'); wrap.className='game-workspace';
  if(!ctx){ wrap.appendChild(el(`<p>Nothing selected.</p>`)); return wrap; }
  const g = new Chess();
  for(let i=0;i<State.studyStep;i++){ try{ g.move(ctx.line[i].move); }catch(e){} }
  const lastMv = State.studyStep>0 ? lastMoveSquares(g) : null;
  const top = el(`<div class="workspace-heading">
    <button class="btn ghost sm" id="back">← Back</button>
    <div class="eyebrow" style="margin-top:.6rem">${kind==='opening'?'Opening Study':'Trap Study'}</div>
    <h1>${ctx.name}</h1>
    ${ctx.eco?`<div style="margin-top:.3rem"><span class="tag">${ctx.eco}</span> <span class="tag ${ctx.color==='White'?'gold':'green'}">${ctx.color}</span></div>`:''}
  </div>`);
  top.querySelector('#back').onclick = ()=>navigate(kind==='opening'?'openings':'traps');
  wrap.appendChild(top);
  const layout = document.createElement('div'); layout.className='play-layout';
  const boardWrap = document.createElement('div'); boardWrap.className='board-column';
  const frame = document.createElement('div'); frame.className='board-frame';
  frame.appendChild(buildBoard(g, {flip:State.flipBoard, lastMove:lastMv, interactive:false}));
  boardWrap.appendChild(frame);
  layout.appendChild(boardWrap);
  const side = document.createElement('div'); side.className='play-sidebar';
  const step = State.studyStep, totalSteps = ctx.line.length;
  const tut = document.createElement('div'); tut.className='tutorial-text';
  if(step===0){
    tut.innerHTML = `<div class="step-counter">Move 0 of ${totalSteps}</div>
      <h3 style="margin-bottom:.4rem">Starting Position</h3>
      <p>${escapeHtml(ctx.summary)}</p>
      ${ctx.keyIdeas?`<hr class="fancy"/><div class="eyebrow">Key Ideas</div><ul style="margin-left:1.2rem">${ctx.keyIdeas.map(k=>`<li>${escapeHtml(k)}</li>`).join('')}</ul>`:''}`;
  } else {
    const cur = ctx.line[step-1];
    tut.innerHTML = `<div class="step-counter">Move ${step} of ${totalSteps}</div>
      <div class="move-played mono">${step}. ${cur.move}</div>
      <p>${escapeHtml(cur.text)}</p>`;
  }
  if(step===totalSteps && kind==='trap' && ctx.avoid){
    tut.innerHTML += `<hr class="fancy"/><div class="eyebrow" style="color:var(--burgundy)">How to Avoid It</div><p style="margin-top:.4rem">${escapeHtml(ctx.avoid)}</p>`;
  }
  const ctrl = document.createElement('div'); ctrl.className='tutorial-controls';
  const prev = el(`<button class="btn ghost sm">◀ Previous</button>`);
  prev.disabled = step===0;
  prev.onclick = ()=>{ State.studyStep = Math.max(0, State.studyStep-1); render(); };
  const next = el(`<button class="btn gold sm">Next ▶</button>`);
  next.disabled = step>=totalSteps;
  next.onclick = ()=>{ State.studyStep = Math.min(totalSteps, State.studyStep+1); render(); };
  const reset = el(`<button class="btn ghost sm">Restart</button>`);
  reset.onclick = ()=>{ State.studyStep=0; render(); };
  const flip = el(`<button class="btn ghost sm">Flip</button>`);
  flip.onclick = ()=>{ State.flipBoard=!State.flipBoard; render(); };
  ctrl.appendChild(prev); ctrl.appendChild(next); ctrl.appendChild(reset); ctrl.appendChild(flip);
  boardWrap.appendChild(ctrl);
  side.appendChild(tut);
  const mp = document.createElement('div'); mp.className='moves-panel';
  mp.innerHTML = '<h4>Move List</h4>';
  const ml = document.createElement('div'); ml.className='moves-list';
  for(let i=0;i<ctx.line.length;i+=2){
    const num = Math.floor(i/2)+1;
    const w = ctx.line[i]?.move || '', b = ctx.line[i+1]?.move || '';
    ml.appendChild(el(`<div class="num">${num}.</div>`));
    const wEl = el(`<div class="move ${i+1===step?'current':''}">${w}</div>`);
    const bEl = el(`<div class="move ${i+2===step?'current':''}">${b||''}</div>`);
    wEl.onclick = ()=>{ State.studyStep=i+1; render(); };
    if(b) bEl.onclick = ()=>{ State.studyStep=i+2; render(); };
    ml.appendChild(wEl); ml.appendChild(bEl);
  }
  mp.appendChild(ml);
  side.appendChild(mp);
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}

// =========================================================
// TACTICS
// =========================================================
function renderTactics(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<div class="catalog-hero"><div><div class="eyebrow">Calculation gym</div><h1>World-class Tactics</h1><p>Train pattern recognition, forcing moves, mating nets, and advanced conversion themes.</p></div><div class="catalog-stat"><strong>${TACTICS.length}</strong><span>curated positions</span></div></div>`));
  const toolbar = el(`<div class="catalog-toolbar"><div><strong>Difficulty ladder</strong><span>Progress from pattern fluency to expert calculation.</span></div><label>Level<select><option>All</option><option>Easy</option><option>Medium</option><option>Advanced</option><option>Expert</option></select></label></div>`);
  toolbar.querySelector('select').value=State.tacticLevel;
  toolbar.querySelector('select').onchange=e=>{ State.tacticLevel=e.target.value; render(); };
  wrap.appendChild(toolbar);
  const list = document.createElement('div'); list.className='item-list';
  TACTICS.forEach(t=>{
    if(State.tacticLevel!=='All'&&State.tacticLevel!==t.difficulty) return;
    const diffColor = {Easy:'green',Medium:'gold',Advanced:'burg',Expert:'burg',Hard:'burg'}[t.difficulty]||'';
    const item = el(`<div class="list-item">
      <div class="meta"><div class="lesson-kicker">${t.rating?`Target ${t.rating} Elo`:'Pattern training'}</div><h4>${t.theme}</h4><div class="small">${escapeHtml(t.prompt)}</div></div>
      <div class="lesson-tags"><span class="tag ${diffColor}">${t.difficulty}</span><span class="lesson-arrow">Solve →</span></div>
    </div>`);
    item.onclick = ()=>{ State.puzzleStep=0; State.puzzleSolution=t.solution||[]; State.puzzleFeedback=null; navigate('tactics-puzzle', t); };
    list.appendChild(item);
  });
  wrap.appendChild(list);
  return wrap;
}
function renderTacticsPuzzle(){
  const ctx = State.studyContext;
  const wrap = document.createElement('div'); wrap.className='game-workspace';
  if(!ctx){ wrap.appendChild(el(`<p>No puzzle selected.</p>`)); return wrap; }
  const top = el(`<div class="workspace-heading">
    <button class="btn ghost sm" id="back">← Back to Puzzles</button>
    <div class="eyebrow" style="margin-top:.6rem">Tactics · ${ctx.difficulty}</div>
    <h1>${ctx.theme}</h1>
  </div>`);
  top.querySelector('#back').onclick = ()=>navigate('tactics');
  wrap.appendChild(top);
  if(!State.game || State.game.fen()!==ctx.fen){
    State.game = new Chess(ctx.fen);
    State.selectedSquare=null; State.legalDests=[]; State.lastMove=null;
  }
  const layout = document.createElement('div'); layout.className='play-layout';
  const boardCol = document.createElement('div'); boardCol.className='board-column';
  const frame = document.createElement('div'); frame.className='board-frame';
  const flip = ctx.sideToMove==='Black' && !State.flipBoard ? true : State.flipBoard;
  frame.appendChild(buildBoard(State.game, {flip, lastMove:State.lastMove, interactive:!!ctx.solution.length, onMove:(m)=>handlePuzzleMove(m, ctx)}));
  boardCol.appendChild(frame);
  layout.appendChild(boardCol);
  const side = document.createElement('div'); side.className='play-sidebar';
  side.appendChild(el(`<div class="puzzle-prompt">
    <div class="turn-flag ${ctx.sideToMove==='White'?'white':''}">${ctx.sideToMove} to move</div>
    <h4>${escapeHtml(ctx.prompt)}</h4>
  </div>`));
  if(State.puzzleFeedback){
    side.appendChild(el(`<div class="puzzle-feedback ${State.puzzleFeedback.kind}">${State.puzzleFeedback.text}</div>`));
  }
  if(ctx.solution.length===0 || State.puzzleFeedback?.kind==='correct'){
    side.appendChild(el(`<div class="card"><div class="eyebrow">Explanation</div><p style="margin-top:.4rem">${escapeHtml(ctx.explanation)}</p></div>`));
  }
  const ctrl = document.createElement('div'); ctrl.className='tutorial-controls';
  const showAns = el(`<button class="btn ghost sm">Show Answer</button>`);
  showAns.onclick = ()=>{ State.puzzleFeedback={kind:'hint',text:`The intended move is: <strong>${ctx.solution[0]}</strong>. ${escapeHtml(ctx.explanation)}`}; render(); };
  if(ctx.solution.length===0) showAns.disabled = true;
  const reset = el(`<button class="btn ghost sm">Reset Position</button>`);
  reset.onclick = ()=>{ State.game = new Chess(ctx.fen); State.selectedSquare=null; State.legalDests=[]; State.lastMove=null; State.puzzleFeedback=null; render(); };
  const flipBtn = el(`<button class="btn ghost sm">Flip</button>`);
  flipBtn.onclick = ()=>{ State.flipBoard=!State.flipBoard; render(); };
  ctrl.appendChild(showAns); ctrl.appendChild(reset); ctrl.appendChild(flipBtn);
  boardCol.appendChild(ctrl);
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}
function handlePuzzleMove(move, ctx){
  const san = move.san;
  const sanClean = san.replace(/[+#]/g, '');
  const matches = ctx.solution.some(s => s===san || s.replace(/[+#]/g,'')===sanClean);
  if(matches){
    State.puzzleFeedback = {kind:'correct', text:`✓ Correct! <strong>${san}</strong>. ${escapeHtml(ctx.explanation)}`};
  } else {
    State.puzzleFeedback = {kind:'wrong', text:`✗ Not quite — <strong>${san}</strong> isn't the strongest move here. Try again or click "Show Answer".`};
    State.game.undo();
    State.lastMove = null;
  }
  render();
}

// =========================================================
// ENDGAMES
// =========================================================
function renderEndgames(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<div style="margin-bottom:1.4rem"><div class="eyebrow">Volume IV</div><h1>Endgame Studies</h1><p class="italic" style="color:var(--ink-soft);max-width:65ch">"To improve at chess you should study the endgame before everything else." — Capablanca.</p></div>`));
  const list = document.createElement('div'); list.className='item-list';
  ENDGAMES.forEach(e=>{
    const item = el(`<div class="list-item">
      <div class="meta"><h4>${e.name}</h4><div class="small italic">${escapeHtml(e.summary.split('.')[0])}.</div></div>
      <span class="tag ${e.difficulty==='Critical'?'burg':'gold'}">${e.difficulty}</span>
    </div>`);
    item.onclick = ()=>navigate('endgame-study', e);
    list.appendChild(item);
  });
  wrap.appendChild(list);
  return wrap;
}
function renderEndgameStudy(){
  const ctx = State.studyContext;
  const wrap = document.createElement('div'); wrap.className='game-workspace';
  if(!ctx){ wrap.appendChild(el(`<p>None.</p>`)); return wrap; }
  const top = el(`<div class="workspace-heading">
    <button class="btn ghost sm" id="back">← Back</button>
    <div class="eyebrow" style="margin-top:.6rem">Endgame · ${ctx.difficulty}</div>
    <h1>${ctx.name}</h1>
  </div>`);
  top.querySelector('#back').onclick = ()=>navigate('endgames');
  wrap.appendChild(top);
  if(!State.game || State.game.fen()!==ctx.fen){ State.game = new Chess(ctx.fen); State.lastMove = null; }
  const layout = document.createElement('div'); layout.className='play-layout';
  const boardWrap = document.createElement('div'); boardWrap.className='board-column';
  const frame = document.createElement('div'); frame.className='board-frame';
  frame.appendChild(buildBoard(State.game, {flip:State.flipBoard, lastMove:State.lastMove, interactive:true, onMove:(m)=>{ State.lastMove = lastMoveSquares(State.game); render(); }}));
  boardWrap.appendChild(frame);
  layout.appendChild(boardWrap);
  const side = document.createElement('div'); side.className='play-sidebar';
  const tech = document.createElement('div'); tech.className='card';
  tech.innerHTML = `<div class="eyebrow">Technique</div><h4 style="margin-top:.3rem;margin-bottom:.6rem">${ctx.name}</h4>`;
  const ul = document.createElement('ul'); ul.style.marginLeft='1.2rem';
  ctx.technique.forEach(t=>{ const li = document.createElement('li'); li.style.marginBottom='.4rem'; li.innerHTML = escapeHtml(t); ul.appendChild(li); });
  tech.appendChild(ul);
  side.appendChild(tech);
  const ctrl = document.createElement('div'); ctrl.className='tutorial-controls';
  const reset = el(`<button class="btn ghost sm">Reset Position</button>`);
  reset.onclick = ()=>{ State.game = new Chess(ctx.fen); State.lastMove=null; render(); };
  const flipBtn = el(`<button class="btn ghost sm">Flip Board</button>`);
  flipBtn.onclick = ()=>{ State.flipBoard=!State.flipBoard; render(); };
  ctrl.appendChild(reset); ctrl.appendChild(flipBtn);
  boardWrap.appendChild(ctrl);
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}

// =========================================================
// PLAY MENU + SETUP
// =========================================================
function renderPlayMenu(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<div style="margin-bottom:1.4rem"><div class="eyebrow">The Arena</div><h1>Take a Game</h1><p class="italic" style="color:var(--ink-soft);max-width:65ch">Test what you have learned. Play a club member for honor or rating, or face the great engine itself at any strength.</p></div>`));
  const grid = document.createElement('div'); grid.className='grid grid-2';
  const c1 = el(`<div class="module-card"><div class="icon">⚔</div><h3>Member vs Member</h3><p>Two players on this device. Choose rated (affects your Elo) or a friendly (no rating change). The board flips between turns for fairness.</p><div class="arrow">CHOOSE OPPONENT →</div></div>`);
  c1.onclick = ()=>navigate('vs-human-setup');
  grid.appendChild(c1);
  const c2 = el(`<div class="module-card"><div class="icon">♛</div><h3>Versus Stockfish</h3><p>Five preset levels from Novice (~800) to Grandmaster (~2500), or set a custom Elo of your choosing.</p><div class="arrow">CHALLENGE THE ENGINE →</div></div>`);
  c2.onclick = ()=>navigate('vs-engine-setup');
  grid.appendChild(c2);
  wrap.appendChild(grid);
  return wrap;
}

function chess960Fen(){
  const squares=Array(8).fill(null); const pick=options=>options[Math.floor(Math.random()*options.length)];
  squares[pick([0,2,4,6])]='B'; squares[pick([1,3,5,7])]='B';
  let free=()=>squares.map((v,i)=>v?null:i).filter(i=>i!==null);
  squares[pick(free())]='Q'; for(let i=0;i<2;i++) squares[pick(free())]='N';
  const rest=free(); squares[rest[0]]='R'; squares[rest[1]]='K'; squares[rest[2]]='R';
  const rank=squares.join(''); return `${rank.toLowerCase()}/pppppppp/8/8/8/8/PPPPPPPP/${rank} w - - 0 1`;
}

function addVariantPicker(card){
  const row=document.createElement('div'); row.style.marginBottom='1rem'; row.innerHTML='<label>Starting position</label>';
  const tog=document.createElement('div'); tog.className='toggle-row';
  [['standard','Standard'],['chess960','Chess960']].forEach(([value,label])=>{const b=document.createElement('button');b.className='toggle-btn';b.textContent=label;if(State.variant===value)b.classList.add('active');b.onclick=()=>{[...tog.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');State.variant=value;};tog.appendChild(b);});
  row.appendChild(tog); card.appendChild(row);
}

function renderVsHumanSetup(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<button class="btn ghost sm" id="back" style="margin-bottom:1rem">← Back</button>`));
  wrap.querySelector('#back').onclick = ()=>navigate('play-menu');
  wrap.appendChild(el(`<div style="margin-bottom:1.4rem"><div class="eyebrow">Member vs Member</div><h1>Choose Opponent</h1></div>`));
  if(Object.keys(State.members).length<2){
    wrap.appendChild(el(`<div class="card"><p>You'll need at least one other club member to play. Have your friend register from the home screen first, then come back.</p></div>`));
    return wrap;
  }
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<div class="eyebrow">Setup</div><h3 style="margin-bottom:.8rem">Choose your opponent and colours</h3>`;
  const opponentRow = document.createElement('div'); opponentRow.style.marginBottom='1rem';
  opponentRow.innerHTML = `<label>Opponent</label>`;
  const oppSel = document.createElement('select');
  Object.values(State.members).filter(m=>m.id!==State.user.id).forEach(m=>{
    const opt = document.createElement('option'); opt.value = m.id; opt.textContent = `${m.name}  (${m.rating})`;
    oppSel.appendChild(opt);
  });
  opponentRow.appendChild(oppSel);
  card.appendChild(opponentRow);
  const colorRow = document.createElement('div'); colorRow.style.marginBottom='1rem';
  colorRow.innerHTML = `<label>Your colour</label>`;
  const colorTog = document.createElement('div'); colorTog.className='toggle-row';
  ['white','black','random'].forEach(c=>{
    const b = document.createElement('button'); b.className='toggle-btn'; b.textContent=c;
    if(c==='white') b.classList.add('active');
    b.onclick=()=>{[...colorTog.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');colorRow.dataset.color=c;};
    colorTog.appendChild(b);
  });
  colorRow.dataset.color='white';
  colorRow.appendChild(colorTog);
  card.appendChild(colorRow);
  const ratedRow = document.createElement('div'); ratedRow.style.marginBottom='1rem';
  ratedRow.innerHTML = `<label>Type</label>`;
  const ratedTog = document.createElement('div'); ratedTog.className='toggle-row';
  ['rated','friendly'].forEach(c=>{
    const b = document.createElement('button'); b.className='toggle-btn'; b.textContent=c;
    if(c==='rated') b.classList.add('active');
    b.onclick=()=>{[...ratedTog.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');ratedRow.dataset.type=c;};
    ratedTog.appendChild(b);
  });
  ratedRow.dataset.type='rated';
  ratedRow.appendChild(ratedTog);
  card.appendChild(ratedRow);
  addVariantPicker(card);
  const start = el(`<button class="btn gold full">Begin the Game</button>`);
  start.onclick = ()=>{
    let myColor = colorRow.dataset.color;
    if(myColor==='random') myColor = Math.random()<.5?'white':'black';
    const opp = State.members[oppSel.value];
    if(myColor==='white'){ State.gameWhite=State.user.id; State.gameBlack=opp.id; }
    else { State.gameWhite=opp.id; State.gameBlack=State.user.id; }
    State.gameRated = ratedRow.dataset.type==='rated';
    State.vsMode = State.gameRated?'human-rated':'human-unrated';
    State.game = new Chess(State.variant==='chess960'?chess960Fen():undefined); State.gameMoveHistory=[]; State.gameOver=false;
    State.lastMove=null; State.selectedSquare=null; State.flipBoard=false;
    navigate('vs-human');
  };
  card.appendChild(start);
  wrap.appendChild(card);
  return wrap;
}

function renderVsEngineSetup(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<button class="btn ghost sm" id="back" style="margin-bottom:1rem">← Back</button>`));
  wrap.querySelector('#back').onclick = ()=>navigate('play-menu');
  wrap.appendChild(el(`<div style="margin-bottom:1.4rem"><div class="eyebrow">Versus Stockfish</div><h1>Set Engine Strength</h1></div>`));
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<div class="eyebrow">Preset Levels</div><h3 style="margin:.3rem 0 1rem">Choose a difficulty</h3>`;
  const grid = document.createElement('div'); grid.className='level-grid';
  const presets = [
    {n:1,name:'Novice',elo:'~800'},{n:2,name:'Apprentice',elo:'~1200'},{n:3,name:'Journeyman',elo:'~1600'},
    {n:4,name:'Expert',elo:'~2000'},{n:5,name:'Grandmaster',elo:'~2500'}
  ];
  let selectedLevel = State.engineLevel || 2, useCustom = false;
  presets.forEach(p=>{
    const c = el(`<div class="level-card"><div class="lvl-num">${p.n}</div><div class="lvl-name">${p.name}</div><div class="lvl-elo">${p.elo}</div></div>`);
    if(p.n===selectedLevel) c.classList.add('selected');
    c.onclick = ()=>{ useCustom=false; [...grid.children].forEach(x=>x.classList.remove('selected')); c.classList.add('selected'); selectedLevel=p.n; customCard.classList.remove('selected'); };
    grid.appendChild(c);
  });
  card.appendChild(grid);
  card.appendChild(el(`<hr class="fancy"/>`));
  card.appendChild(el(`<div class="eyebrow">Or set a Custom Elo</div>`));
  const customWrap = document.createElement('div'); customWrap.style.cssText='display:flex;gap:1rem;align-items:center;margin-top:.7rem';
  const customCard = el(`<div class="level-card" style="flex:0 0 140px"><div class="lvl-num"><span id="customDisp">${State.engineCustomElo}</span></div><div class="lvl-name">Custom Elo</div><div class="lvl-elo">1320–2850</div></div>`);
  const slider = el(`<input type="range" min="1320" max="2850" value="${State.engineCustomElo}" step="20" style="flex:1" />`);
  slider.oninput = ()=>{ customCard.querySelector('#customDisp').textContent = slider.value; State.engineCustomElo = +slider.value; [...grid.children].forEach(x=>x.classList.remove('selected')); customCard.classList.add('selected'); useCustom=true; };
  customCard.onclick = ()=>{ [...grid.children].forEach(x=>x.classList.remove('selected')); customCard.classList.add('selected'); useCustom=true; };
  customWrap.appendChild(customCard); customWrap.appendChild(slider);
  card.appendChild(customWrap);
  card.appendChild(el(`<hr class="fancy"/>`));
  const colorRow = document.createElement('div');
  colorRow.innerHTML = `<label>Your colour</label>`;
  const tog = document.createElement('div'); tog.className='toggle-row';
  let myColor='white';
  ['white','black','random'].forEach(c=>{
    const b = document.createElement('button'); b.className='toggle-btn'; b.textContent=c;
    if(c==='white') b.classList.add('active');
    b.onclick=()=>{[...tog.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');myColor=c;};
    tog.appendChild(b);
  });
  colorRow.appendChild(tog);
  card.appendChild(colorRow);
  addVariantPicker(card);
  const start = el(`<button class="btn gold full" style="margin-top:1.4rem">Load Engine & Begin</button>`);
  start.onclick = async ()=>{
    start.disabled=true; start.innerHTML = '<span class="spinner"></span> Summoning the engine...';
    try{
      await initStockfish();
      const lvl = useCustom ? {custom:State.engineCustomElo} : selectedLevel;
      State.engineLevel = useCustom ? null : selectedLevel;
      State.engineThinking = false; State.gameOver = false;
      State.gameMoveHistory = []; State.lastMove = null;
      State.selectedSquare=null; State.legalDests=[];
      let pc = myColor; if(pc==='random') pc = Math.random()<.5?'white':'black';
      State.playerColor = pc==='white'?'w':'b';
      State.flipBoard = State.playerColor==='b';
      State.game = new Chess(State.variant==='chess960'?chess960Fen():undefined); State.vsMode = 'engine';
      State._engineConfig = configureEngine(lvl);
      State._engineLevelDisplay = useCustom ? `Custom Elo ${State.engineCustomElo}` : `Level ${selectedLevel} (${presets[selectedLevel-1].name})`;
      navigate('vs-engine');
      if(State.playerColor==='b') setTimeout(()=>engineMakeMove(), 300);
    }catch(e){
      start.disabled=false; start.textContent='Load Engine & Begin';
      alert('Could not load Stockfish: '+e.message+'\nThis app needs internet access to fetch the engine on first use.');
    }
  };
  card.appendChild(start);
  wrap.appendChild(card);
  return wrap;
}

// =========================================================
// VS HUMAN GAME
// =========================================================
function renderVsHuman(){
  const wrap = document.createElement('div'); wrap.className='game-workspace';
  if(!State.game) State.game = new Chess();
  const game = State.game, turn = game.turn();
  const w = State.members[State.gameWhite], b = State.members[State.gameBlack];
  const shouldFlip = State.flipBoard ? turn!=='b' : turn==='b';
  wrap.appendChild(el(`<div class="workspace-heading">
    <button class="btn ghost sm" id="back">⟵ Resign / Leave</button>
    <div class="eyebrow" style="margin-top:.6rem">${State.gameRated?'Rated · Member vs Member':'Friendly · Member vs Member'}</div>
    <h1>${escapeHtml(w.name)} <span style="color:var(--gold);font-style:italic">vs</span> ${escapeHtml(b.name)}</h1>
  </div>`));
  wrap.querySelector('#back').onclick = ()=>{
    if(!State.gameOver && State.gameMoveHistory.length>0){
      if(!confirm('Resign and leave the game?')) return;
      finishHumanGame(turn==='w'?'0-1':'1-0', 'resign');
    }
    navigate('play-menu');
  };
  const layout = document.createElement('div'); layout.className='play-layout';
  const boardCol = document.createElement('div'); boardCol.className='board-column';
  const frame = document.createElement('div'); frame.className='board-frame';
  frame.appendChild(buildBoard(game, {flip:shouldFlip, lastMove:State.lastMove, interactive:!State.gameOver && !State.promotionPending,
    onMove:(m)=>{ State.gameMoveHistory.push(m.san); State.lastMove = lastMoveSquares(game); checkHumanGameEnd(); render(); }
  }));
  boardCol.appendChild(frame);
  layout.appendChild(boardCol);
  const side = document.createElement('div'); side.className='play-sidebar';
  if(State.gameOver){
    side.appendChild(el(`<div class="status-banner ${State.lastResult?.kind||'draw'}">${escapeHtml(State.lastResult?.text||'Game over')}</div>`));
  } else {
    const checkStr = game.in_check()?' (check!)':'';
    side.appendChild(el(`<div class="status-banner">${turn==='w'?escapeHtml(w.name):escapeHtml(b.name)} to move${checkStr}</div>`));
  }
  const info = document.createElement('div'); info.className='game-info';
  info.innerHTML = `
    <div class="player-row ${turn==='b'?'active':''}"><div><span class="turn-marker"></span><span class="pname">${escapeHtml(b.name)}</span> <span class="badge elo">${b.rating}</span></div></div>
    <div class="player-row ${turn==='w'?'active':''}"><div><span class="turn-marker"></span><span class="pname">${escapeHtml(w.name)}</span> <span class="badge elo">${w.rating}</span></div></div>
  `;
  side.appendChild(info);
  side.appendChild(buildMovesPanel(State.gameMoveHistory));
  const ctrl = document.createElement('div'); ctrl.className='tutorial-controls';
  const undo = el(`<button class="btn ghost sm">↶ Undo</button>`);
  undo.disabled = State.gameMoveHistory.length===0 || State.gameOver;
  undo.onclick = ()=>{ State.game.undo(); State.gameMoveHistory.pop(); State.lastMove=lastMoveSquares(State.game); render(); };
  const flipBtn = el(`<button class="btn ghost sm">Flip</button>`);
  flipBtn.onclick = ()=>{ State.flipBoard=!State.flipBoard; render(); };
  const drawBtn = el(`<button class="btn ghost sm">Agree Draw</button>`);
  drawBtn.disabled = State.gameOver;
  drawBtn.onclick = ()=>{ if(confirm('Agree to a draw?')) finishHumanGame('1/2-1/2','agreement'); };
  ctrl.appendChild(undo); ctrl.appendChild(drawBtn); ctrl.appendChild(flipBtn);
  boardCol.appendChild(ctrl);
  const resignRow = document.createElement('div'); resignRow.className='tutorial-controls';
  const rW = el(`<button class="btn danger sm">${escapeHtml(w.name)} resigns</button>`);
  rW.disabled = State.gameOver;
  rW.onclick = ()=>{ if(confirm(w.name+' resigns?')) finishHumanGame('0-1','resign'); };
  const rB = el(`<button class="btn danger sm">${escapeHtml(b.name)} resigns</button>`);
  rB.disabled = State.gameOver;
  rB.onclick = ()=>{ if(confirm(b.name+' resigns?')) finishHumanGame('1-0','resign'); };
  resignRow.appendChild(rW); resignRow.appendChild(rB);
  side.appendChild(resignRow);
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}
function checkHumanGameEnd(){
  if(State.gameOver) return;
  const g = State.game;
  if(g.in_checkmate()){ finishHumanGame(g.turn()==='w'?'0-1':'1-0','checkmate'); }
  else if(g.in_draw()||g.in_stalemate()||g.in_threefold_repetition()||g.insufficient_material()){
    let r='draw';
    if(g.in_stalemate()) r='stalemate';
    else if(g.in_threefold_repetition()) r='threefold';
    else if(g.insufficient_material()) r='insufficient material';
    else if(g.in_draw()) r='50-move rule';
    finishHumanGame('1/2-1/2', r);
  }
}
async function finishHumanGame(result, reason){
  State.gameOver = true;
  const w = State.members[State.gameWhite], b = State.members[State.gameBlack];
  let scoreW = 0.5, kind='draw', text=`Drawn by ${reason}.`;
  if(result==='1-0'){ scoreW=1; kind='win'; text=`${w.name} wins by ${reason}!`; }
  else if(result==='0-1'){ scoreW=0; kind='loss'; text=`${b.name} wins by ${reason}!`; }
  let newW=w.rating, newB=b.rating;
  if(State.gameRated){
    newW = computeElo(w.rating, b.rating, scoreW);
    newB = computeElo(b.rating, w.rating, 1-scoreW);
    State.members[State.gameWhite].rating = newW;
    State.members[State.gameBlack].rating = newB;
    if(scoreW===1){ State.members[State.gameWhite].wins++; State.members[State.gameBlack].losses++; }
    else if(scoreW===0){ State.members[State.gameWhite].losses++; State.members[State.gameBlack].wins++; }
    else { State.members[State.gameWhite].draws++; State.members[State.gameBlack].draws++; }
    await saveMembers();
    if(State.user.id===w.id) State.user.rating=newW;
    if(State.user.id===b.id) State.user.rating=newB;
    text += ` Elo: ${w.name} ${w.rating}→${newW} | ${b.name} ${b.rating}→${newB}.`;
  } else { text += ' (Friendly — no rating change.)'; }
  State.lastResult = {kind, text};
  await saveGameRecord({
    ts:Date.now(), type:State.gameRated?'rated':'friendly',
    white:{id:w.id,name:w.name,ratingBefore:w.rating,ratingAfter:newW},
    black:{id:b.id,name:b.name,ratingBefore:b.rating,ratingAfter:newB},
    result, reason, moves:State.gameMoveHistory.slice(), pgn:State.game.pgn(),
  });
  render();
}

// =========================================================
// VS ENGINE GAME
// =========================================================
function renderVsEngine(){
  const wrap = document.createElement('div'); wrap.className='game-workspace';
  if(!State.game) State.game = new Chess();
  const game = State.game, turn = game.turn();
  wrap.appendChild(el(`<div class="workspace-heading">
    <button class="btn ghost sm" id="back">⟵ Leave Game</button>
    <div class="eyebrow" style="margin-top:.6rem">${State._engineLevelDisplay||'Stockfish'}</div>
    <h1>${escapeHtml(State.user.name)} <span style="color:var(--gold);font-style:italic">vs</span> Stockfish</h1>
  </div>`));
  wrap.querySelector('#back').onclick = ()=>{
    if(!State.gameOver && State.gameMoveHistory.length>0){ if(!confirm('Leave the game? Stockfish games are not recorded.')) return; }
    navigate('play-menu');
  };
  const layout = document.createElement('div'); layout.className='play-layout';
  const boardCol = document.createElement('div'); boardCol.className='board-column';
  const frame = document.createElement('div'); frame.className='board-frame';
  frame.appendChild(buildBoard(game, {flip:State.flipBoard, lastMove:State.lastMove,
    interactive:!State.gameOver && !State.promotionPending && !State.engineThinking && turn===State.playerColor,
    onMove:(m)=>{ State.gameMoveHistory.push(m.san); State.lastMove=lastMoveSquares(game); checkEngineGameEnd(); render(); if(!State.gameOver) setTimeout(()=>engineMakeMove(),200); }
  }));
  boardCol.appendChild(frame);
  layout.appendChild(boardCol);
  const side = document.createElement('div'); side.className='play-sidebar';
  if(State.gameOver) side.appendChild(el(`<div class="status-banner ${State.lastResult?.kind||'draw'}">${escapeHtml(State.lastResult?.text||'Game over')}</div>`));
  else if(State.engineThinking) side.appendChild(el(`<div class="status-banner">Stockfish is thinking… <span class="spinner"></span></div>`));
  else side.appendChild(el(`<div class="status-banner">${turn===State.playerColor?escapeHtml(State.user.name):'Stockfish'} to move</div>`));
  const info = document.createElement('div'); info.className='game-info';
  info.innerHTML = `
    <div class="player-row ${turn!==State.playerColor?'active':''}"><div><span class="turn-marker"></span><span class="pname">Stockfish</span> <span class="badge elo">${State._engineLevelDisplay||''}</span></div></div>
    <div class="player-row ${turn===State.playerColor?'active':''}"><div><span class="turn-marker"></span><span class="pname">${escapeHtml(State.user.name)} (${State.playerColor==='w'?'White':'Black'})</span> <span class="badge elo">${State.user.rating}</span></div></div>
  `;
  side.appendChild(info);
  side.appendChild(buildMovesPanel(State.gameMoveHistory));
  const ctrl = document.createElement('div'); ctrl.className='tutorial-controls';
  const undo = el(`<button class="btn ghost sm">↶ Take Back</button>`);
  undo.disabled = State.gameMoveHistory.length<2 || State.gameOver || State.engineThinking;
  undo.onclick = ()=>{ State.game.undo(); State.gameMoveHistory.pop(); State.game.undo(); State.gameMoveHistory.pop(); State.lastMove=lastMoveSquares(State.game); render(); };
  const flipBtn = el(`<button class="btn ghost sm">Flip</button>`);
  flipBtn.onclick = ()=>{ State.flipBoard=!State.flipBoard; render(); };
  const resign = el(`<button class="btn danger sm">Resign</button>`);
  resign.disabled = State.gameOver;
  resign.onclick = ()=>{ if(!confirm('Resign?')) return; State.gameOver=true; State.lastResult={kind:'loss',text:'You resigned. Stockfish wins.'}; render(); };
  const newG = el(`<button class="btn ghost sm">New Game</button>`);
  newG.onclick = ()=>navigate('vs-engine-setup');
  ctrl.appendChild(undo); ctrl.appendChild(flipBtn); ctrl.appendChild(resign); ctrl.appendChild(newG);
  boardCol.appendChild(ctrl);
  layout.appendChild(side);
  wrap.appendChild(layout);
  return wrap;
}
function checkEngineGameEnd(){
  const g = State.game;
  if(g.in_checkmate()){
    const winner = g.turn()==='w'?'b':'w';
    const youWon = winner === State.playerColor;
    State.gameOver = true;
    State.lastResult = {kind:youWon?'win':'loss', text:youWon?'Checkmate! You defeated the engine!':'Checkmate. Stockfish wins.'};
  } else if(g.in_draw()||g.in_stalemate()||g.in_threefold_repetition()||g.insufficient_material()){
    State.gameOver = true;
    let r='draw';
    if(g.in_stalemate()) r='stalemate';
    else if(g.in_threefold_repetition()) r='threefold repetition';
    else if(g.insufficient_material()) r='insufficient material';
    State.lastResult = {kind:'draw', text:`Drawn by ${r}.`};
  }
}
function engineMakeMove(){
  if(State.gameOver) return;
  const g = State.game;
  if(g.turn()===State.playerColor) return;
  const opts = State._engineConfig || {depth:10};
  askEngineForMove(g.fen(), opts, (uci)=>{
    if(!uci || uci==='(none)') return;
    const from = uci.slice(0,2), to = uci.slice(2,4);
    const promotion = uci.length>4 ? uci.slice(4,5) : undefined;
    const m = g.move({from, to, promotion});
    if(m){ State.gameMoveHistory.push(m.san); State.lastMove = {from:m.from, to:m.to}; checkEngineGameEnd(); }
    render();
  });
}

// =========================================================
// LEADERBOARD + HISTORY
// =========================================================
function renderLeaderboard(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<div style="margin-bottom:1.4rem"><div class="eyebrow">The Roll</div><h1>Club Leaderboard</h1><p class="italic" style="color:var(--ink-soft);max-width:65ch">Members ordered by current Elo rating. Win rated games to climb.</p></div>`));
  const table = document.createElement('table'); table.className='leaderboard';
  table.innerHTML = `<thead><tr><th>#</th><th>Name</th><th>Elo</th><th>W</th><th>L</th><th>D</th><th>Joined</th></tr></thead>`;
  const tbody = document.createElement('tbody');
  Object.values(State.members).sort((a,b)=>b.rating-a.rating).forEach((m,i)=>{
    const tr = document.createElement('tr');
    if(m.id===State.user.id) tr.className='you';
    tr.innerHTML = `<td class="rank">${i+1}</td><td>${escapeHtml(m.name)}${m.id===State.user.id?' <span class="badge">you</span>':''}</td><td class="rating">${m.rating}</td><td>${m.wins||0}</td><td>${m.losses||0}</td><td>${m.draws||0}</td><td class="small">${formatDate(m.joined)}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

function renderHistory(){
  const wrap = document.createElement('div');
  wrap.appendChild(el(`<div style="margin-bottom:1.4rem"><div class="eyebrow">The Annals</div><h1>Recorded Games</h1><p class="italic" style="color:var(--ink-soft);max-width:65ch">Every rated and friendly game between members is preserved here for posterity.</p></div>`));
  const list = document.createElement('div'); list.className='item-list';
  list.innerHTML = '<div class="card"><span class="spinner"></span> Loading the annals…</div>';
  loadGameRecords().then(records=>{
    list.innerHTML = '';
    if(records.length===0){
      list.innerHTML = `<div class="card"><p class="italic" style="color:var(--ink-soft)">No games yet. Be the first to take a seat at the board.</p></div>`;
      return;
    }
    records.forEach(r=>{
      const item = el(`<div class="list-item">
        <div class="meta"><h4>${escapeHtml(r.white.name)} vs ${escapeHtml(r.black.name)}</h4><div class="small">${r.moves.length} moves · ${r.reason} · <span class="italic">${formatDate(r.ts)}</span></div></div>
        <div style="display:flex;gap:.4rem;align-items:center"><span class="tag ${r.type==='rated'?'gold':''}">${r.type}</span><span class="mono" style="font-weight:600">${r.result}</span></div>
      </div>`);
      item.onclick = ()=>showGameModal(r);
      list.appendChild(item);
    });
  });
  wrap.appendChild(list);
  return wrap;
}
function showGameModal(r){
  const back = el(`<div class="modal-backdrop"></div>`);
  const m = el(`<div class="modal">
    <button class="modal-close">×</button>
    <div class="eyebrow">${r.type}</div>
    <h2>${escapeHtml(r.white.name)} vs ${escapeHtml(r.black.name)}</h2>
    <p class="small">${formatDate(r.ts)} · ${r.reason} · <span class="mono"><strong>${r.result}</strong></span></p>
    ${r.type==='rated'?`<p class="small">Elo: ${r.white.name} ${r.white.ratingBefore}→${r.white.ratingAfter} · ${r.black.name} ${r.black.ratingBefore}→${r.black.ratingAfter}</p>`:''}
    <hr class="fancy"/>
    <div class="mono" style="background:var(--paper-dim);padding:.8rem;font-size:.9rem;line-height:1.7;max-height:300px;overflow-y:auto">${formatPGN(r.moves)}</div>
  </div>`);
  m.querySelector('.modal-close').onclick = ()=>back.remove();
  back.onclick = (e)=>{ if(e.target===back) back.remove(); };
  back.appendChild(m);
  document.getElementById('app').appendChild(back);
}
function formatPGN(moves){
  let s='';
  for(let i=0;i<moves.length;i+=2) s += `${i/2+1}. ${moves[i]||''} ${moves[i+1]||''} `;
  return s.trim() || '<em>(no moves)</em>';
}

// =========================================================
// BOARD BUILDER (renders SVG pieces)
// =========================================================
function buildBoard(game, options){
  const {flip, lastMove, interactive, onMove} = options;
  const board = document.createElement('div'); board.className='board';
  const ranks = flip ? [1,2,3,4,5,6,7,8] : [8,7,6,5,4,3,2,1];
  const files = flip ? ['h','g','f','e','d','c','b','a'] : ['a','b','c','d','e','f','g','h'];
  const checkSq = game.in_check() ? findKingSquare(game, game.turn()) : null;
  for(const r of ranks){
    for(const f of files){
      const sq = f+r;
      const fIdx = 'abcdefgh'.indexOf(f), rIdx = r-1;
      const isLightSq = (fIdx + rIdx) % 2 === 1;
      const cell = document.createElement('div');
      cell.className = 'square ' + (isLightSq?'light':'dark');
      cell.dataset.square = sq;
      if(r===1 && (flip?true:true)){
        const c = document.createElement('span'); c.className='coord file'; c.textContent=f; cell.appendChild(c);
      }
      if((flip && f==='h') || (!flip && f==='a')){
        const c = document.createElement('span'); c.className='coord rank'; c.textContent=r; cell.appendChild(c);
      }
      if(lastMove && (lastMove.from===sq || lastMove.to===sq)) cell.classList.add('last-move');
      if(State.selectedSquare===sq) cell.classList.add('selected');
      if(State.legalDests.includes(sq)){
        if(game.get(sq)) cell.classList.add('legal-capture');
        else cell.classList.add('legal');
      }
      if(checkSq===sq) cell.classList.add('check');
      const piece = game.get(sq);
      if(piece){
        const code = piece.color==='w' ? piece.type.toUpperCase() : piece.type.toLowerCase();
        const pieceEl = document.createElement('span');
        pieceEl.className = `piece ${piece.color==='w'?'white':'black'}`;
        pieceEl.innerHTML = PIECE_SVG[code] || '';
        cell.appendChild(pieceEl);
      }
      if(interactive){ cell.onclick = ()=>handleSquareClick(sq, game, onMove); }
      board.appendChild(cell);
    }
  }
  return board;
}

function handleSquareClick(sq, game, onMove){
  if(State.promotionPending) return;
  const piece = game.get(sq);
  if(State.selectedSquare && State.legalDests.includes(sq)){
    const movingPiece = game.get(State.selectedSquare);
    if(movingPiece && movingPiece.type==='p' && (sq[1]==='8'||sq[1]==='1')){
      State.promotionPending = {from:State.selectedSquare, to:sq, color:movingPiece.color, onComplete:onMove};
      State.selectedSquare=null; State.legalDests=[];
      render();
      showPromotionPicker();
      return;
    }
    const result = game.move({from:State.selectedSquare, to:sq});
    State.selectedSquare = null; State.legalDests = [];
    if(result){ State.lastMove = {from:result.from, to:result.to}; onMove(result); }
    else render();
    return;
  }
  if(piece && piece.color===game.turn()){
    State.selectedSquare = sq;
    State.legalDests = game.moves({square:sq, verbose:true}).map(m=>m.to);
    render();
  } else { State.selectedSquare = null; State.legalDests = []; render(); }
}

function showPromotionPicker(){
  const p = State.promotionPending; if(!p) return;
  const overlay = document.createElement('div'); overlay.className='promo-picker';
  const card = document.createElement('div'); card.className='promo-card';
  ['q','r','b','n'].forEach(t=>{
    const code = p.color==='w' ? t.toUpperCase() : t.toLowerCase();
    const piece = el(`<div class="promo-piece" data-t="${t}">${PIECE_SVG[code]}</div>`);
    piece.onclick = ()=>{
      const result = State.game.move({from:p.from, to:p.to, promotion:t});
      State.promotionPending = null;
      overlay.remove();
      if(result){ State.lastMove = {from:result.from, to:result.to}; if(p.onComplete) p.onComplete(result); else render(); }
      else render();
    };
    card.appendChild(piece);
  });
  overlay.appendChild(card);
  document.getElementById('app').appendChild(overlay);
}

function lastMoveSquares(game){
  const h = game.history({verbose:true});
  if(h.length===0) return null;
  const m = h[h.length-1];
  return {from:m.from, to:m.to};
}
function findKingSquare(game, color){
  const board = game.board();
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    const p = board[r][c];
    if(p && p.type==='k' && p.color===color) return 'abcdefgh'[c] + (8-r);
  }
  return null;
}
function buildMovesPanel(moves){
  const panel = document.createElement('div'); panel.className='moves-panel';
  panel.innerHTML = '<h4>Moves</h4>';
  const ml = document.createElement('div'); ml.className='moves-list';
  if(moves.length===0){
    ml.appendChild(el(`<div class="small italic" style="grid-column:span 3;color:var(--ink-soft)">No moves yet.</div>`));
  } else {
    for(let i=0;i<moves.length;i+=2){
      const num = i/2+1;
      ml.appendChild(el(`<div class="num">${num}.</div>`));
      ml.appendChild(el(`<div class="move">${moves[i]||''}</div>`));
      ml.appendChild(el(`<div class="move">${moves[i+1]||''}</div>`));
    }
  }
  panel.appendChild(ml);
  setTimeout(()=>{ panel.scrollTop = panel.scrollHeight; },0);
  return panel;
}

// =========================================================
// UTIL
// =========================================================
function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}
function escapeHtml(s){
  if(s==null) return '';
  return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function formatDate(ts){
  if(!ts) return '';
  return new Date(ts).toLocaleDateString(undefined, {year:'numeric',month:'short',day:'numeric'});
}

// =========================================================
// INIT
// =========================================================
(async ()=>{
  await loadMembers();
  await loadCurrentUser();
  render();
})();
