import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSchoolSlice = createApi({
  reducerPath: "apiSchoolSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getSchools: builder.query({
      query: () => "/schools",
      providesTags: ["Post"],
    }),
    getSchool: builder.query({
      query: (payload) => "/schools/" + payload.id,
      providesTags: ["Post"],
    }),
    addSchool: builder.mutation({
      query: (payload) => ({
        url: "/schools",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
export const { useGetSchoolsQuery, useGetSchoolQuery, useAddSchoolMutation } =
  apiSchoolSlice;
