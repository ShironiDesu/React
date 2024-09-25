import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Guest",
      role: "guest",
    },
    users: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    EditUser: (state, action) => {
      const { name, newData } = action.payload;

      const index = state.users.findIndex((user) => user.name === name);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...newData };

        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
    loadFromLocaleStorage: (state, action) => {
      const savedUsers = JSON.parse(localStorage.getItem("users"));
      if (savedUsers) {
        state.users = savedUsers;
      }
    },
  },
});

export const { login, addUser, loadFromLocaleStorage, EditUser } =
  userReducer.actions;
export default userReducer.reducer;
