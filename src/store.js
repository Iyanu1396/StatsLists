import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./features/authentication/authenticationSlice";
import userDataReducer from "./features/userData/userDataSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    userData: userDataReducer,
  },
});
