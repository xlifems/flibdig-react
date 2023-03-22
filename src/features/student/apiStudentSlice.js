import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiStudentSlice = createApi({
  reducerPath: 'apiStudentSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => '/students',
      providesTags: ['Student'],
    }),
   /*  addNewPost: builder.mutation({
      query: (payload) => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }), */
  }),
})
export const { useGetStudentsQuery } = apiStudentSlice