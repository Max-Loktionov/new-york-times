import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userApi } from "./userApi";
import type { RootState } from "redux/store";
import { IUser, IState } from "helpers/interfaces";
import type {
  MiddlewareAPI,
  Middleware,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  token: null,
  isLoggedIn: false,
} as IState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.logInUser.matchFulfilled,
        (
          state: IState,
          {
            payload: { user, token },
          }: PayloadAction<{ user: IUser; token: string }>
        ) => {
          state.user = user;
          state.token = token;
          state.isLoggedIn = true;
        }
      )

      .addMatcher(
        userApi.endpoints.logOutUser.matchFulfilled,
        (state: IState) => {
          state.user = initialState.user;
          state.isLoggedIn = false;
          state.token = null;
        }
      )
      .addMatcher(
        userApi.endpoints.getUser.matchFulfilled,
        (state: IState, { payload }: PayloadAction<IUser>) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      );
  },
});

/**
 * Log a warning and show a notification!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      if (!api) return;
      return Notify.failure(
        ` ${action.error.message} - error in async action`,
        {
          timeout: 6000,
          fontSize: "18px",
        }
      );
    }

    return next(action);
  };

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const selectCurrentUser = (state: RootState) => state?.auth?.user;
export default authSlice.reducer;
