import './styles.css';
import { Chess } from 'chess.js';
import { readFirebaseConfig } from './data/firebase.js';

// The first migration step keeps the existing UI code functional while moving
// its dependency off a public CDN and into the application bundle.
window.Chess = Chess;
window.CHESS_CLUB_SHARED = Boolean(readFirebaseConfig());
document.documentElement.dataset.clubMode = window.CHESS_CLUB_SHARED ? 'shared' : 'local';

await import('./legacy-app.js');
