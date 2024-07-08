import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../auth/auth.slice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URI,
  prepareHeaders: (headers, { getState }) => {
    const token = selectToken(getState());
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
