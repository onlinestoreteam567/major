import { createSlice } from '@reduxjs/toolkit';
import { verifyAuthToken } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const verifyTokenSlice = createSlice({
  name: 'verifyToken',
  initialState: {
    isVerified: null,
    isLoading: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyAuthToken.pending, handlePending)
      .addCase(verifyAuthToken.fulfilled, (state) => {
        state.isVerified = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verifyAuthToken.rejected, handleRejected);
  },
});

export const verifyTokenReducer = verifyTokenSlice.reducer;
