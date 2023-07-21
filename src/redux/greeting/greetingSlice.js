import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/api/random_greeting');
    const data = await response.json();
    return data;
  },
);

const initialState = {
  message: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers(builder) {
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      const data = action.payload.greeting;
      return { ...state, message: data };
    });
  },
});

export default greetingSlice.reducer;

export const { actions } = greetingSlice;
