import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSchoolSlice = createApi({
  reducerPath: "apiSchoolSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["School"],
  endpoints: (builder) => ({
    getSchools: builder.query({
      query: () => "/schools",
      providesTags: ["School"],
    }),
    getSchool: builder.query({
      query: (payload) => "/schools/" + payload.id,
      providesTags: ["School"],
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
      invalidatesTags: ["School"],
    }),
  }),
});
export const { useGetSchoolsQuery, useGetSchoolQuery, useAddSchoolMutation } =
  apiSchoolSlice;
