import { describe, expect, it } from 'vitest';
import { getFirebaseServices, readFirebaseConfig } from '../src/data/firebase.js';

describe('Firebase client configuration', () => {
  it('stays disabled until public project settings are provided', () => {
    expect(readFirebaseConfig({})).toBeNull();
    expect(getFirebaseServices({})).toBeNull();
  });

  it('rejects partial configuration', () => {
    expect(() => readFirebaseConfig({ VITE_FIREBASE_PROJECT_ID: 'chess-club' })).toThrow(
      'VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, and VITE_FIREBASE_APP_ID are required.',
    );
  });

  it('reads the Firebase web configuration', () => {
    expect(readFirebaseConfig({
      VITE_FIREBASE_API_KEY: 'example',
      VITE_FIREBASE_AUTH_DOMAIN: 'chess-club.firebaseapp.com',
      VITE_FIREBASE_PROJECT_ID: 'chess-club',
      VITE_FIREBASE_APP_ID: '1:123:web:example',
    })).toEqual({
      apiKey: 'example',
      authDomain: 'chess-club.firebaseapp.com',
      projectId: 'chess-club',
      appId: '1:123:web:example',
    });
  });
});
