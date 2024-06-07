'use client';
import { apiSlice } from "../api";

const accountApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccountDetails: builder.query<any, { headers: any }>({
      query: ({ headers }) => ({
        url: 'userDetails',
        headers: headers,
      }),
    }),
  }),
});

export const { useGetAccountDetailsQuery } = accountApi;
