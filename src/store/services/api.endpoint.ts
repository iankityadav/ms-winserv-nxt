import { apiSlice } from "./api.slice";

export const appConfig = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: (payload: any) => ({
        url: "/login",
        method: "POST",
        body: payload,
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
  }),
});

export const { useLazyLoginQuery, useLazySignupQuery } = appConfig;
