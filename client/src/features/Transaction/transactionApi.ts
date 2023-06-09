import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetTransactionProps, initiateTransactionProps } from "model";

const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    initiateTransaction: builder.mutation<
      initiateTransactionProps,
      { email: string; amount: number }
    >({
      query: (body) => ({
        url: "/transaction",
        method: "POST",
        body,
      }),
    }),
    getTransaction: builder.query<GetTransactionProps, { ref: string }>({
      query: ({ ref }) => `/transaction/verify/${ref}`,
    }),
  }),
});

export const { useInitiateTransactionMutation, useGetTransactionQuery } =
  transactionApi;
export default transactionApi;
