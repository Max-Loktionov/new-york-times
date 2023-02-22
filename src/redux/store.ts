import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistedReducer } from "redux/user/authSlice";
import { userApi } from "redux/user/userApi";
import { newsApi } from "redux/newsAPI";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,

    [userApi.reducerPath]: userApi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    newsApi.middleware,
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
