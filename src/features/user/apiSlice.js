import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/students',
      providesTags: ['Post'],
    }),
    addNewPost: builder.mutation({
      query: (payload) => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})
export const { useGetPostsQuery, useAddNewPostMutation } = apiSlice