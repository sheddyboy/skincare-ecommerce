import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductProps } from "../../model";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductProps[], void>({
      query: () => "/api/products",
    }),
    getSingleProduct: builder.query<ProductProps, string>({
      query: (slug) => `/api/products/${slug}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;

export default productApi;
