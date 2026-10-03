import { describe, expect, it } from 'vitest';
import { getSupabaseClient, readSupabaseConfig } from '../src/data/supabase.js';

describe('Supabase client configuration', () => {
  it('stays disabled until public project settings are provided', () => {
    expect(readSupabaseConfig({})).toBeNull();
    expect(getSupabaseClient({})).toBeNull();
  });

  it('rejects partial configuration', () => {
    expect(() => readSupabaseConfig({ VITE_SUPABASE_URL: 'https://club.supabase.co' })).toThrow(
      'Both VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are required.',
    );
  });

  it('loads a browser client only for a configured project', async () => {
    const client = await getSupabaseClient({
      VITE_SUPABASE_URL: 'https://club.supabase.co',
      VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_example',
    });
    expect(client).toBeDefined();
  });
});
