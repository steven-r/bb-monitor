import { configureStore, combineReducers, CombinedState } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import eventReducer, { EvenState } from './slices/event';
import uiReducer, { UIState } from './slices/ui';
import chatUISlice from './slices/chat-ui';
import { UIState as ChatUIState } from './slices/chat-ui';
import { firestoreReducer, FirestoreReducer } from 'redux-firestore';
import { actionTypes, firebaseReducer, FirebaseReducer } from "react-redux-firebase";

// Optional: If you use the user profile option
interface Profile {
  name: string;
  email: string;
}

const persistConfig: PersistConfig<CombinedState<RootState>, any, any, any> = {
  key: 'bb-monitor',
  version: 1,
  storage,
  debug: true,
  blacklist: [ 'firebase', 'firestore' ]
};

export interface RootState {
    events: EvenState,
    ui: UIState,
    chatUI: ChatUIState,
    firebase: FirebaseReducer.Reducer<Profile>,
    firestore: FirestoreReducer.Reducer
}

export const rootReducer = combineReducers<RootState>({
  events: eventReducer,
  ui: uiReducer,
  chatUI: chatUISlice,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: rootReducer,
// });
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, actionTypes.LOGIN],
      },
    }),
});

export const persistor = persistStore(store);

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
