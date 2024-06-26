import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiBookSlice = createApi({
  reducerPath: "apiBookSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    headers: {
      "Content-type": "application/json",
      "bearer": "Bearer " + JSON.parse(localStorage.session).token,
    },
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
    addBookMatters: builder.mutation({
      query: (payload) => ({
        url: "/books/matters",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Book"],
    }),
    getBookMatters: builder.query({
      query: (payload) => "/books/" + payload + "/matters",
      providesTags: ["Book"],
    }),
    invalidatesTags: ["Book"],
  }),
});
export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useAddBookMattersMutation,
  useGetBookMattersQuery,
} = apiBookSlice;
