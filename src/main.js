import './styles.css';
import { Chess } from 'chess.js';
import { readFirebaseConfig } from './data/firebase.js';

// The first migration step keeps the existing UI code functional while moving
// its dependency off a public CDN and into the application bundle.
window.Chess = Chess;
document.documentElement.dataset.clubMode = readFirebaseConfig() ? 'shared' : 'local';

await import('./legacy-app.js');
