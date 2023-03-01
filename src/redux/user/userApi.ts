import { SerializedError } from "@reduxjs/toolkit";
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "redux/store";
import { IUser } from "helpers/interfaces";

const BASE_URL = `${process.env.REACT_APP_API_URL}/users`;

export interface IUserResponse {
  user: IUser;
  token: string;
  error?: FetchBaseQueryError | SerializedError;
}

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery,
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/current",
    }),

    logInUser: builder.mutation<IUserResponse, IUserRequest>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ["Users"],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUserQuery, useLogInUserMutation, useLogOutUserMutation } =
  userApi;
