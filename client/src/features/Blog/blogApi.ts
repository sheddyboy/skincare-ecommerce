import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogProps } from "../../model";

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogProps[], void>({
      query: () => "/blogs",
    }),
    getSingleBlog: builder.query<BlogProps, string>({
      query: (slug) => `/blogs/${slug}`,
    }),
  }),
});
export const { useGetBlogsQuery, useGetSingleBlogQuery } = blogApi;

export default blogApi;
