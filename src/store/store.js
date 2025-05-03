import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
export const store = configureStore({
  reducers: {
    counterRed: counterReducer,
  },
});
