# Edugates Chess Club

An educational chess club for Edugates International School. Students can study curated openings, traps, tactics, and endgames, then play a member on the same device or challenge Stockfish.

## Development

Requires Node.js 22 or later.

```sh
npm install
npm run dev
```

## Verification

```sh
npm run validate:content
npm test
npm run build
```

`validate:content` checks every opening and trap move, every tactical solution, and each endgame FEN. The GitHub Actions workflow runs the same checks for pull requests and pushes to `main`.

## Project layout

- `src/main.js` starts the app and bundles chess.js locally.
- `src/legacy-app.js` contains the existing interface during the migration from the original single HTML file.
- `src/styles.css` contains the existing visual system.
- `src/domain/` contains testable chess-domain logic.
- `scripts/validate-content.js` validates the curriculum data.

## Deployment

`npm run build` generates the static site in `dist/`. Vite uses relative asset paths, so the result can be deployed to GitHub Pages or another static host under a subdirectory.

The app continues to work with browser-local storage until Firebase is configured. When it is configured, the Firebase client is loaded only for shared-club use.

## Shared-club backend

Firebase provides the shared-club foundation:

- Firebase Authentication supports passwordless email-link sign-in.
- Cloud Firestore stores profiles, clubs, memberships, games, progress, and puzzle attempts.
- `firestore.rules` gives students access only to their own learning records; coaches and administrators can view club activity. The browser cannot create clubs, change memberships, write games, or change ratings.
- Cloud Functions create clubs, add members, and record coach-verified games. Game recording validates the PGN where the ending can be checked automatically, then applies both Elo updates in one Firestore transaction.

Copy `.env.example` to `.env.local` and paste the four values from Firebase Console's **Project settings → Your apps → SDK setup and configuration**. Firebase web configuration is public; Firestore Security Rules and Cloud Functions protect the data.

After creating a Firebase project, deploy the shared backend with the Firebase CLI:

```sh
npx firebase-tools login
npx firebase-tools use --add
npx firebase-tools deploy --only firestore:rules,functions
```

For local backend testing, run `npx firebase-tools emulators:start --only auth,firestore,functions`.
