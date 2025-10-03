import { createSlice } from '@reduxjs/toolkit';
import { getBannerById } from './service';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.slide = null;
};

const handleRejected = (state, action) => {
  state.slide = null;
  state.isLoading = false;
  state.error = action.payload;
};

const bannerByIdSlice = createSlice({
  name: 'bannerById',
  initialState: {
    slide: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearBannerByIdState: (state) => {
      state.slide = null;
      state.isLoading = false;
      state.error = null;
    },
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

export const { clearBannerByIdState } = bannerByIdSlice.actions;
export const bannerByIdReducer = bannerByIdSlice.reducer;
