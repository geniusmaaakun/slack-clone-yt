import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';

//redux

export const store = configureStore({
  reducer: {
    counter: appReducer,
  },
});
