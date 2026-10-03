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

The current persistence adapter still falls back to browser-local storage. Shared student accounts, club data, and server-authoritative ratings are the next foundation milestone.

## Shared-club backend

The first Supabase migration lives in `supabase/migrations/`. It defines club-scoped profiles, memberships, games, an immutable rating ledger, and learning progress. Every exposed table has Row Level Security enabled. Browser clients may only update their own profile and learning records; a trusted server or Edge Function must create clubs, manage membership, and write games or rating events.

Copy `.env.example` to `.env.local` and add the project's URL and **publishable** key to activate the shared client. The service role and secret keys must remain in server-only Supabase secrets; they must never be added to Vite environment files.

To validate the database locally, install Docker Desktop or Podman, then run:

```sh
supabase start
supabase test db
```
