function configuredValue(value) {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : null;
}

export function readSupabaseConfig(environment = import.meta.env) {
  const url = configuredValue(environment.VITE_SUPABASE_URL);
  const publishableKey = configuredValue(environment.VITE_SUPABASE_PUBLISHABLE_KEY);

  if (!url && !publishableKey) return null;
  if (!url || !publishableKey) {
    throw new Error('Both VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are required.');
  }

  const parsedUrl = new URL(url);
  if (parsedUrl.protocol !== 'https:' && parsedUrl.hostname !== 'localhost') {
    throw new Error('VITE_SUPABASE_URL must use HTTPS outside local development.');
  }

  return { url, publishableKey };
}

let clientPromise;

export function getSupabaseClient(environment = import.meta.env) {
  const config = readSupabaseConfig(environment);
  if (!config) return null;

  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) => createClient(config.url, config.publishableKey, {
    auth: {
      autoRefreshToken: true,
      detectSessionInUrl: true,
      persistSession: true,
    },
    }));
  }

  return clientPromise;
}
