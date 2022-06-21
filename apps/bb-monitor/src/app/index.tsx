import React from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from './redux/providers/theme-provider';
import PersistProvider from './redux/providers/persist-provider';
import { store } from './redux/store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createFirestoreInstance } from 'redux-firestore';
import App from './app';
import { createRoot } from 'react-dom/client';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import AuthIsLoaded from './components/auth/AuthIsLoaded/main';

const firebaseConfig = {
  apiKey: 'AIzaSyCZPmW8V577EGxMxjk8goLxoM_0oNNWBpQ',
  authDomain: 'bb-monitor-1c7e0.firebaseapp.com',
  projectId: 'bb-monitor-1c7e0',
  storageBucket: 'bb-monitor-1c7e0.appspot.com',
  messagingSenderId: '859903613258',
  appId: '1:859903613258:web:4525d9467b984e2bb689b3',
  measurementId: 'G-7XSEVVCXEX',
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <PersistProvider>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </PersistProvider>
  </Provider>
);
