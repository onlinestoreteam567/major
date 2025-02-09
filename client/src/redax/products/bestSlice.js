import { createSlice } from '@reduxjs/toolkit';
import { fetchBestSellers } from './servise';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const bestsSlice = createSlice({
  name: 'bests',
  initialState: {
    bests: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBestSellers.pending, handlePending)
      .addCase(fetchBestSellers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.bests = action.payload;
      })
      .addCase(fetchBestSellers.rejected, handleRejected),
});

export const bestsReducer = bestsSlice.reducer;
