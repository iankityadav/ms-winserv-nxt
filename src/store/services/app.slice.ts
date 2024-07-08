import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} as any,
};

const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});
