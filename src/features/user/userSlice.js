import { createSlice } from "@reduxjs/toolkit";
import { get } from "../../helper/api.js";

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    session: null,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    signIn: (state, action) => {
      state.session = { ...state.session, ...action.payload };
    },
    getStudents: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const getUsersAsync = (data) => async (dispatch) => {
  try {
    const response = await get({
      path: "http://localhost:3000/api/users",
    });
    dispatch(getStudents(response.data[0]));
  } catch (err) {
    throw new Error(err);
  }
};

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, signIn, getStudents } =
  userSlice.actions;

export default userSlice.reducer;
