import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TreatmentProps } from "../../model";

const treatmentApi = createApi({
  reducerPath: "treatmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getTreatment: builder.query<TreatmentProps[], void>({
      query: () => "/treatments",
    }),
    getSingleTreatment: builder.query<TreatmentProps, string>({
      query: (slug) => `/treatments/${slug}`,
    }),
  }),
});

export const { useGetTreatmentQuery, useGetSingleTreatmentQuery } =
  treatmentApi;

export default treatmentApi;
