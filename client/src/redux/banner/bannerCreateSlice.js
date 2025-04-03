import { createSlice } from '@reduxjs/toolkit';
import { createBanner } from './service';

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

const bannerCreateSlice = createSlice({
  name: 'bannerCreate',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(createBanner.pending, handlePending)
      .addCase(createBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(createBanner.rejected, handleRejected),
});

export const bannerCreateReducer = bannerCreateSlice.reducer;
