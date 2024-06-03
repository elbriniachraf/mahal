'use client';
import { apiSlice } from "../api";
import { userLoggedIn, userLoggedOut } from "./authSlice";

type RegistrationResponse = {
  message: string;
}
type RegistrationData = {}

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: 'register',
        method: 'POST',
        body: data,
      })
    }),
    login: builder.mutation({
      query: ({email, password}) => ({
        url: 'login',
        method: 'POST',
        body: {email, password},
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }){
        try{
          const result = await queryFulfilled;
          dispatch(userLoggedIn({user: result.data.user}))
        }catch(err: any){
          console.log(err);
        } 
      }
    }),
    // loginSocial: builder.mutation({
    //   query: ({email, name, avatar}) => ({
    //     url: 'users/social-auth',
    //     method: 'POST',
    //     body: {email, name, avatar},
    //     credentials: "include" as const 
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }){
    //     try{
    //       const result = await queryFulfilled;
    //       dispatch(userLoggedIn({user: result.data.user}))
    //     }catch(err: any){
    //       console.log(err);
    //     } 
    //   }
    // }),
    // logOut: builder.query({
    //   query: () => { return {url: 'users/logout', credentials: "include" as const}  },
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }){
    //     console.log('first')
    //     try{
    //       const result = await queryFulfilled;
    //       dispatch(userLoggedOut(result))
    //     }catch(err: any){
    //       console.log(err);
    //     } 
    //   }
    // }),
  })
})

export const { useLoginMutation, useRegisterMutation } = authApi;