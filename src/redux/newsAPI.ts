import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INews } from "helpers/interfaces";

const { REACT_APP_BASE_URL1 } = process.env;
const BASE_URL = `${REACT_APP_BASE_URL1}`;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["News"],
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({
    getNews: builder.query<INews[] | undefined, void>({
      query: () => `/posts`,
      providesTags: ["News"],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
