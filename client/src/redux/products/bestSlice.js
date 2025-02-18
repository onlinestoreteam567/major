import { createSlice } from '@reduxjs/toolkit';
import { fetchBestSellers } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const bestSellerSlice = createSlice({
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

export const bestSellerReducer = bestSellerSlice.reducer;
