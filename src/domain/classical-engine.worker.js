import { searchClassicalPosition } from './classical-engine.js';

let activeAbort = false;

self.addEventListener('message', (event) => {
  const { id, type, fen, options } = event.data || {};
  if (type === 'stop') {
    activeAbort = true;
    return;
  }
  if (type !== 'search') return;

  activeAbort = false;
  try {
    const result = searchClassicalPosition(fen, {
      ...(options || {}),
      shouldAbort: () => activeAbort,
      onProgress: (snapshot) => {
        self.postMessage({ id, type: 'progress', snapshot });
      },
    });
    self.postMessage({ id, type: 'done', result });
  } catch (err) {
    self.postMessage({
      id,
      type: 'error',
      message: err instanceof Error ? err.message : String(err || 'Worker search error'),
    });
  }
});
