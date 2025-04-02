import { createSlice } from '@reduxjs/toolkit';
import { deleteBanner } from './service';

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

const bannerDeleteSlice = createSlice({
  name: 'bannerDelete',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(deleteBanner.pending, handlePending)
      .addCase(deleteBanner.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 204;
      })
      .addCase(deleteBanner.rejected, handleRejected),
});

export const bannerDeleteReducer = bannerDeleteSlice.reducer;
