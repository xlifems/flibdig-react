import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiBookSlice = createApi({
  reducerPath: "apiBookSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Book"],
    }),
    getBook: builder.query({
      query: (payload) => "/books/" + payload.id,
      providesTags: ["Book"],
    }),
    addBook: builder.mutation({
      query: (payload) => ({
        url: "/books",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});
export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation } =
  apiBookSlice;
