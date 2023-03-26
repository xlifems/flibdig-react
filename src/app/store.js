import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../features/user/userSlice";
import { apiSlice } from "../features/user/apiSlice";

import studentReducer from "../features/student/studentSlice";
import { apiStudentSlice } from "../features/student/apiStudentSlice";

import { apiSchoolSlice } from "../features/shool/apiSchoolSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    student: studentReducer,
    [apiStudentSlice.reducerPath]: apiStudentSlice.reducer,
    [apiSchoolSlice.reducerPath]: apiSchoolSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(apiStudentSlice.middleware)
      .concat(apiSchoolSlice.middleware),
});

setupListeners(store.dispatch);
export default store;
