import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { IUserResponse, userApi } from "./userApi";
import type { RootState } from "redux/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  name: string | null;
  email: string | null;
  password: string | null;
}

interface IState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
}

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
        (state: IState, { payload }: PayloadAction<IUserResponse>) => {
          state.token = null;
          state.user.name = null;
          state.user.email = null;
          state.user.password = null;
          state.isLoggedIn = false;
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

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

// export const { logInUser, logOutUser, getUser } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state?.auth?.user;
export default authSlice.reducer;
