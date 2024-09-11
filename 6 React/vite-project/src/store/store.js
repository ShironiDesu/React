import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./slices/bankSlice";

export const store = configureStore({
  reducer: {
    bank: bankSlice,
  },
});
