import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import eventReducer, { EvenState } from './slices/event';
import uiReducer, { UIState } from './slices/ui';
import chatUISlice from './slices/chat-ui';
import { UIState as ChatUIState } from './slices/chat-ui';


const persistConfig = {
  key: 'bb-monitor',
  version: 1,
  storage,
  debug: true,
};

export interface RootState {
    events: EvenState,
    ui: UIState,
    chatUI: ChatUIState,
}

export const rootReducer = combineReducers<RootState>({
  events: eventReducer,
  ui: uiReducer,
  chatUI: chatUISlice,
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
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
