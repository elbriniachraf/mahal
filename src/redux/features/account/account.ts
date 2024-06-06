'use client';
import { apiSlice } from "../api";

const accountApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccountDetails: builder.query<any, void>({
      query: () => 'userDetails'
    })
  })
})

export const { useGetAccountDetailsQuery } = accountApi;