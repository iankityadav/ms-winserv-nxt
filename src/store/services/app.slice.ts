import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const {} = appSlice;
