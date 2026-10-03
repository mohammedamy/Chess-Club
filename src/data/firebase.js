function configuredValue(value) {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : null;
}

export function readFirebaseConfig(environment = import.meta.env) {
  const config = {
    apiKey: configuredValue(environment.VITE_FIREBASE_API_KEY),
    authDomain: configuredValue(environment.VITE_FIREBASE_AUTH_DOMAIN),
    projectId: configuredValue(environment.VITE_FIREBASE_PROJECT_ID),
    appId: configuredValue(environment.VITE_FIREBASE_APP_ID),
  };

  const configuredValues = Object.values(config).filter(Boolean).length;
  if (configuredValues === 0) return null;
  if (configuredValues !== Object.keys(config).length) {
    throw new Error('VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, and VITE_FIREBASE_APP_ID are required.');
  }

  return config;
}

let servicesPromise;

export function getFirebaseServices(environment = import.meta.env) {
  const config = readFirebaseConfig(environment);
  if (!config) return null;

  if (!servicesPromise) {
    servicesPromise = Promise.all([
      import('firebase/app'),
      import('firebase/auth'),
      import('firebase/firestore'),
      import('firebase/functions'),
    ]).then(([appModule, authModule, firestoreModule, functionsModule]) => {
      const app = appModule.initializeApp(config);
      return {
        app,
        auth: authModule.getAuth(app),
        authModule,
        db: firestoreModule.getFirestore(app),
        firestoreModule,
        functions: functionsModule.getFunctions(app),
        functionsModule,
      };
    });
  }

  return servicesPromise;
}
