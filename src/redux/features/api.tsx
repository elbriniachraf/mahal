'use client';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "./auth/authSlice";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/',
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
  
      if (localStorage.getItem("authToken")) {
        headers.set("authorization", `Bearer ${localStorage.getItem("authToken")}`);
      }
      
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loadUser: builder.query({
      query: () => { return {url: 'users/me', credentials: "include" as const}  },
      async onQueryStarted(arg, { queryFulfilled, dispatch }){
        try{
          const result = await queryFulfilled;
          console.log(result);
          dispatch(userLoggedIn({user: result.data}))
        }catch(err: any){
          console.log(err);
        } 
      }
    })
  })
})

export const { useLoadUserQuery } = apiSlice;