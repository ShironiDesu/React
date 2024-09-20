import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './features/tests/testsSlice';

export const store = configureStore({
  reducer: {
    tests: testsReducer,
  },
});
