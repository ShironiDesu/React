import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTests: [], // Список всех тестов
  currentTest: null, // Текущий выбранный тест для прохождения
  history: [], // История прохождения тестов
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    addTest: (state, action) => {
      state.allTests.push(action.payload);
      localStorage.setItem("tests", JSON.stringify(state.allTests)); // Сохраняем в localStorage
    },
    setCurrentTest: (state, action) => {
      state.currentTest = state.allTests.find((test) => {
        return test.id === action.payload;
      });
    },
    submitTestResult: (state, action) => {
      state.history.push(action.payload);
      localStorage.setItem("history", JSON.stringify(state.history)); // Сохраняем в localStorage
    },
    loadTestsFromStorage: (state) => {
      const savedTests = JSON.parse(localStorage.getItem("tests"));
      if (savedTests) {
        state.allTests = savedTests;
      }
      const savedHistory = JSON.parse(localStorage.getItem("history"));
      if (savedHistory) {
        state.history = savedHistory;
      }
    },
  },
});

export const {
  addTest,
  setCurrentTest,
  submitTestResult,
  loadTestsFromStorage,
} = testsSlice.actions;

export default testsSlice.reducer;
