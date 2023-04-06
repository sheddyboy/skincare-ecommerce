import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";
import { UserProps } from "../../model";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.token;
      token && headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<{ user: UserProps; token: string }, UserProps>({
      query: (body) => ({
        url: "/users/signup",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<
      { user: UserProps; token: string },
      Pick<UserProps, "email" | "password">
    >({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
    verifyToken: builder.mutation<{ id: string }, { token: string }>({
      query: (body) => ({
        url: "/users/verify",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useVerifyTokenMutation } =
  authApi;
