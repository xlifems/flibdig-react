import { createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../helper/api.js";
import Student from "../../models/Student.js";

export const studentSlice = createSlice({
  name: "counter",
  initialState: {
    students: [],
  },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const getStudentsAsync = (data) => async (dispatch) => {
  try {
    const response = await get({
      path: "/students",
    });
    dispatch(setStudents(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getStudentsPagination = (data) => async (dispatch) => {
  try {
    const response = await post({
      path: "/students/pagination",
      data: data,
    });

    dispatch(setStudents(response.data.data));
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const addStudent = (data) => async (dispatch) => {
  try {
    const response = await post({
      path: "/students",
      data: data,
    });

    dispatch(getStudentsAsync());
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const updateStudent = (data) => async (dispatch) => {
  try {
    const response = await post({
      path: `/students/${data.id}`,
      data: data,
    });

    dispatch(getStudentsAsync());
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    const response = await post({
      path: `/students/${id}`,
      data: {},
    });

    dispatch(getStudentsAsync());
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCertificate = (id) => async (dispatch) => {
  try {
    const response = await post({
      path: `/certificate/student/pdf`,
      data: { student_id: id },
    });

    var hiddenElement = document.createElement("a");
    var url = window.URL || window.webkitURL;
    var blobPDF = url.createObjectURL(response.data);
    hiddenElement.href = blobPDF;
    hiddenElement.target = "_blank";
    hiddenElement.download = `${id}_report.pdf`;
    hiddenElement.click();
    return { data: blobPDF };

    return response;
  } catch (err) {
    throw new Error(err);
  }
};

// Action creators are generated for each case reducer function
export const { setStudents } = studentSlice.actions;

export default studentSlice.reducer;
