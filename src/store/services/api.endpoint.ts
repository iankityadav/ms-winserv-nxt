import { apiSlice } from "./api.slice";
import qs from "qs";

export const appConfig = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: (payload: any) => ({
        url: "/token",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        method: "POST",
        body: qs.stringify(payload),
      }),
      transformResponse(response: any) {
        console.log(response);
        return response;
      },
    }),
    signup: builder.query({
      query: (payload: any) => ({
        url: "/signup",
        method: "POST",
        body: payload,
      }),
      transformResponse(response: any) {
        console.log(response);
        return response;
      },
    }),
    getUserDetail: builder.query({
      query: (payload: any) => ({
        url: "/users/me",
        method: "GET",
      }),
      transformResponse(response: any) {
        console.log(response);
        return response;
      },
    }),
  }),
});

export const {
  useLazyLoginQuery,
  useLazySignupQuery,
  useLazyGetUserDetailQuery,
} = appConfig;
