import { createSlice } from "@reduxjs/toolkit";
import { appConfig } from "../services/api.endpoint";

const initialState = {
  user: {},
  token: "",
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
  extraReducers: (builder) => {
    builder.addMatcher(
      appConfig.endpoints.getUserDetail.matchFulfilled,
      (state, action) => {
        console.log(action);
        state.user = action.payload;
      }
    );
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectToken = (state: any) => state.auth.token;

export default authSlice.reducer;
