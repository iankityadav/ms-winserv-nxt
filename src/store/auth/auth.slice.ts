import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    logOut: () => initialState,
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectToken = (state: any) => state.auth.token;

export default authSlice.reducer;
