import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './greeting/greetingSlice';

export const store = configureStore({
  reducer: {
    greeting: greetReducer,
  },
});

export default store;
