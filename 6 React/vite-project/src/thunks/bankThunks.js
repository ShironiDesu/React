import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk("slices/bankSlice", async () => {
  const response = await fetch("https://dummyjson.com/users/1");
  const data = await response.json();

  return data;
});
