import * as React from 'react';

// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Auth, getAuth, User as FirebaseUser } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCEF_MuEjv1ZtT7DXbhItKmaesIv0Hya2M',
	authDomain: 'bb-monitor-735e3.firebaseapp.com',
	projectId: 'bb-monitor-735e3',
	storageBucket: 'bb-monitor-735e3.appspot.com',
	messagingSenderId: '29224568393',
	appId: '1:29224568393:web:cbf7b902d882cfd5d02198',
	measurementId: 'G-6QESG5HWZ2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
const auth = getAuth(app);
const store = getFirestore(app);

type User = FirebaseUser | null;
type ContextState = {
	app: FirebaseApp;
	user: User;
	isAuthenticated: boolean;
	auth: Auth;
	store: Firestore;
};

const FirebaseContext = React.createContext<ContextState | undefined>(undefined);

type IFirebaseProviderProps = {};

const FirebaseProvider: React.FC<React.PropsWithChildren<IFirebaseProviderProps>> = ({
	children,
}) => {
	const [user, setUser] = React.useState<User>(null);

	React.useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(setUser);
		return unsubscribe;
	}, []);

	return (
		<FirebaseContext.Provider
			value={{ app, user, auth, store, isAuthenticated: user?.emailVerified || false }}>
			{children}
		</FirebaseContext.Provider>
	);
};

function useFirebaseSel<T>(selector: (context: ContextState) => T): T {
	const context = React.useContext(FirebaseContext);
	if (context === undefined) {
		throw new Error('useFirebaseAuth must be used within a FirebaseAuthProvider');
	}
	return selector(context);
}

function useFirebase(): ContextState {
	return useFirebaseSel<ContextState>((c) => c);
}

function useFirebaseApp(): FirebaseApp {
	return useFirebaseSel<FirebaseApp>((context) => context.app);
}

function useFirebaseUser(ignoreEmailVerification = false): User | null {
	const user = useFirebaseSel<User>((context) => context.user);
	if (!ignoreEmailVerification && !user?.emailVerified) {
		return null;
	}
	return user;
}

function useFirebaseAuth(): Auth {
	return useFirebaseSel<Auth>((context) => context.auth);
}

export { FirebaseProvider, useFirebase, useFirebaseAuth, useFirebaseUser, useFirebaseApp };
