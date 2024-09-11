import { createSlice } from "@reduxjs/toolkit";

import { fetchUserData } from "../../thunks/bankThunks";
const initialState = {
  balance: 1000,
  transaction: [],
  user: {
    name: "",
    id: null,
  },
  loading: false,
  error: null,
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
      state.transaction.push({
        type: "deposit",
        amount: action.payload,
        date: new Date().toLocaleString(),
      });
    },
    withdraw: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
        state.transaction.push({
          type: "withdraw",
          amount: action.payload,
          date: new Date().toLocaleString(),
        });
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.loading = false;

          state.user.name = action.payload.user;
          state.user.ip = action.payload.ip;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Ошибка при загрузке данных";
        });
    },
  },
});
export const { deposit, withdraw } = bankSlice.actions;
export default bankSlice.reducer;
