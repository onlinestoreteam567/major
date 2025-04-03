import { createSlice } from '@reduxjs/toolkit';
import { getBannerById } from './service';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.response = null;
};

const handleRejected = (state, action) => {
  state.response = null;
  state.isLoading = false;
  state.error = action.payload;
};

const bannerByIdSlice = createSlice({
  name: 'bannerById',
  initialState: {
    slide: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getBannerById.pending, handlePending)
      .addCase(getBannerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.slide = action.payload;
      })
      .addCase(getBannerById.rejected, handleRejected),
});

export const bannerByIdReducer = bannerByIdSlice.reducer;
