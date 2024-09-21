import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likeReducer from "./likeSlice";

import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};
const likePersistConfig = {
  key: "like",
  version: 1,
  storage,
};

const cartPersistedReducer = persistReducer(persistConfig, cartReducer);

const likePersistedReducer = persistReducer(likePersistConfig, likeReducer);

export const store = configureStore({
  reducer: {
    cart: cartPersistedReducer,
    like: likePersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
