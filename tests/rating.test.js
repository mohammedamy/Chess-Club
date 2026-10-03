import { describe, expect, it } from 'vitest';
import { computeElo } from '../src/domain/rating.js';

describe('computeElo', () => {
  it('does not change equal ratings after a draw', () => {
    expect(computeElo(1200, 1200, 0.5)).toBe(1200);
  });

  it('rewards an upset more than an expected win', () => {
    expect(computeElo(1000, 1400, 1) - 1000).toBeGreaterThan(
      computeElo(1400, 1000, 1) - 1400,
    );
  });

  it('rejects invalid scores', () => {
    expect(() => computeElo(1200, 1200, 0.25)).toThrow(RangeError);
  });
});
