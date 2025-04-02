import { createSlice } from '@reduxjs/toolkit';
import { fetchBanner } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    slides: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBanner.pending, handlePending)
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.slides = action.payload;
      })
      .addCase(fetchBanner.rejected, handleRejected),
});

export const bannerReducer = bannerSlice.reducer;
