'use client';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userRegestration: (state, action) => {
      // state
    },
    userLoggedIn: (state, { payload }) => {
      // state.token = payload.
      state.user = payload.user;
    },
    userLoggedOut: (state, { payload }) => {
      state.token = null
      state.user = null;
    }
  }
})

export const { userLoggedIn, userLoggedOut, userRegestration } = authSlice.actions;
export default authSlice.reducer;