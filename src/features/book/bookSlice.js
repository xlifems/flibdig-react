import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    selectedBook: null,
  },
  reducers: {
    selectBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectBook } = bookSlice.actions;

export default bookSlice.reducer;
