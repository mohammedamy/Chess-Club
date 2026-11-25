let sharedAudioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const Ctor = window.AudioContext || window.webkitAudioContext;
  if (!Ctor) return null;
  if (!sharedAudioCtx) {
    try {
      sharedAudioCtx = new Ctor();
    } catch {
      return null;
    }
  }
  if (sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

function playTone(ctx, { freq, endFreq = null, duration = 0.08, type = 'sine', gain = 0.14, delay = 0 }) {
  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  if (endFreq != null) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, endFreq), now + duration);
  }
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.exponentialRampToValueAtTime(gain, now + 0.008);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.01);
}

/**
 * Plays crisp, lightweight synthesized Web Audio chess feedback without external assets.
 */
export function playChessSound(kind = 'move', enabled = true) {
  if (!enabled) return false;
  const ctx = getAudioContext();
  if (!ctx) return false;

  try {
    switch (kind) {
      case 'capture':
        playTone(ctx, { freq: 340, endFreq: 130, duration: 0.075, type: 'triangle', gain: 0.18 });
        playTone(ctx, { freq: 520, endFreq: 240, duration: 0.055, type: 'sine', gain: 0.09, delay: 0.015 });
        break;
      case 'check':
        playTone(ctx, { freq: 660, endFreq: 520, duration: 0.11, type: 'triangle', gain: 0.16 });
        playTone(ctx, { freq: 880, endFreq: 740, duration: 0.12, type: 'sine', gain: 0.1, delay: 0.055 });
        break;
      case 'castle':
        playTone(ctx, { freq: 240, endFreq: 150, duration: 0.06, type: 'triangle', gain: 0.14 });
        playTone(ctx, { freq: 290, endFreq: 180, duration: 0.06, type: 'triangle', gain: 0.14, delay: 0.075 });
        break;
      case 'promote':
        playTone(ctx, { freq: 523.25, duration: 0.07, type: 'sine', gain: 0.12 });
        playTone(ctx, { freq: 783.99, duration: 0.12, type: 'sine', gain: 0.14, delay: 0.06 });
        break;
      case 'gameEnd':
        playTone(ctx, { freq: 392, duration: 0.12, type: 'triangle', gain: 0.13 });
        playTone(ctx, { freq: 523.25, duration: 0.18, type: 'sine', gain: 0.14, delay: 0.09 });
        break;
      case 'puzzleCorrect':
        playTone(ctx, { freq: 523.25, duration: 0.08, type: 'sine', gain: 0.13 });
        playTone(ctx, { freq: 659.25, duration: 0.12, type: 'sine', gain: 0.14, delay: 0.07 });
        break;
      case 'puzzleWrong':
        playTone(ctx, { freq: 210, endFreq: 145, duration: 0.14, type: 'sawtooth', gain: 0.09 });
        break;
      case 'lowTime':
        playTone(ctx, { freq: 740, duration: 0.07, type: 'sine', gain: 0.09 });
        break;
      case 'move':
      default:
        playTone(ctx, { freq: 220, endFreq: 120, duration: 0.055, type: 'triangle', gain: 0.15 });
        break;
    }
    return true;
  } catch {
    return false;
  }
}

export function soundForMove(moveObj, gameAfterMove) {
  if (gameAfterMove && typeof gameAfterMove.game_over === 'function' && gameAfterMove.game_over()) {
    return 'gameEnd';
  }
  if (gameAfterMove && typeof gameAfterMove.in_check === 'function' && gameAfterMove.in_check()) {
    return 'check';
  }
  if (moveObj?.promotion) return 'promote';
  if (moveObj?.flags?.includes('k') || moveObj?.flags?.includes('q')) return 'castle';
  if (moveObj?.captured) return 'capture';
  return 'move';
}
