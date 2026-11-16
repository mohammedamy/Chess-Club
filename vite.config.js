import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ENGINE_ASSETS = [
  { name: 'stockfish-19-lite-single.js', contentType: 'text/javascript; charset=utf-8' },
  { name: 'stockfish-19-lite-single.wasm', contentType: 'application/wasm' },
  { name: 'stockfish-19-asm.js', contentType: 'text/javascript; charset=utf-8' },
];

function resolveEngineFile(filename) {
  const candidates = [
    path.join(__dirname, 'node_modules/stockfish/bin', filename),
    path.join(__dirname, 'node_modules/stockfish/src', filename),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error(`Missing Stockfish asset: ${filename}`);
}

function stockfishEnginePlugin() {
  return {
    name: 'stockfish-engine-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const cleanPath = (req.url || '').split('?')[0];
        const match = ENGINE_ASSETS.find((asset) => cleanPath.endsWith(`/engine/${asset.name}`));
        if (!match) return next();
        try {
          const filePath = resolveEngineFile(match.name);
          const data = fs.readFileSync(filePath);
          res.statusCode = 200;
          res.setHeader('Content-Type', match.contentType);
          res.setHeader('Cache-Control', 'public, max-age=3600');
          res.end(data);
        } catch (err) {
          next(err);
        }
      });
    },
    generateBundle() {
      for (const asset of ENGINE_ASSETS) {
        const filePath = resolveEngineFile(asset.name);
        this.emitFile({
          type: 'asset',
          fileName: `engine/${asset.name}`,
          source: fs.readFileSync(filePath),
        });
      }
    },
  };
}

export default defineConfig({
  // Relative assets keep the site deployable to GitHub Pages or any subdirectory.
  base: './',
  plugins: [stockfishEnginePlugin()],
});
