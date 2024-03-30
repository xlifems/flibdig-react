import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiStudentSlice = createApi({
  reducerPath: "apiStudentSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    headers: {
      "Content-type": "application/json",
      bearer: "Bearer " + JSON.parse(localStorage.session).token,
    },
  }),
  tagTypes: ["Student"],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["Student"],
    }),
    getCertificate: builder.query({
      query: (payload) => `/certificate/student/pdf/${payload}`,
      providesTags: ["Student"],
    }),
    getPDFCertificate: builder.mutation({
      query: (payload) => ({
        url: `/certificate/student/pdf`,
        method: "POST",
        body: payload,
        responseHandler: async (response) => {
          var hiddenElement = document.createElement("a");
          var url = window.URL || window.webkitURL;
          var blobPDF = url.createObjectURL(await response.blob());
          hiddenElement.href = blobPDF;
          hiddenElement.target = "_blank";
          hiddenElement.download = `${payload.student_id}_report.pdf`;
          hiddenElement.click();
          return { data: blobPDF };
        },
        cache: "no-cache",
      }),
      invalidatesTags: ["Student"],
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
});
export const {
  useGetStudentsQuery,
  useGetCertificateQuery,
  useGetPDFCertificateMutation,
} = apiStudentSlice;
