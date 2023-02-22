import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "redux/store";

const { REACT_APP_BASE_URL1 } = process.env;
const BASE_URL = `${REACT_APP_BASE_URL1}`;

export interface INews {
  title: string;
  body: string;
  id: string;
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["News"],
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({
    getNews: builder.query<INews[], void>({
      query: () => `/posts`,
      providesTags: ["News"],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
