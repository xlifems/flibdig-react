import { createSlice } from "@reduxjs/toolkit";
import { get } from "../../helper/api.js";

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
      path: "http://localhost:3000/api/students",
    });
    dispatch(setStudents(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

// Action creators are generated for each case reducer function
export const { setStudents } =
  studentSlice.actions;

export default studentSlice.reducer;
