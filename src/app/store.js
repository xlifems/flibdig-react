import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../features/user/userSlice";
import { apiSlice } from "../features/user/apiSlice";

import studentReducer from "../features/student/studentSlice";
import { apiStudentSlice } from "../features/student/apiStudentSlice";

import { apiSchoolSlice } from "../features/shool/apiSchoolSlice";
import { apiBookSlice } from "../features/book/apiBookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    student: studentReducer,
    [apiStudentSlice.reducerPath]: apiStudentSlice.reducer,
    [apiSchoolSlice.reducerPath]: apiSchoolSlice.reducer,
    [apiBookSlice.reducerPath]: apiBookSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(apiStudentSlice.middleware)
      .concat(apiSchoolSlice.middleware)
      .concat(apiBookSlice.middleware)
});

setupListeners(store.dispatch);
export default store;
