import { createSlice } from '@reduxjs/toolkit';
import { editBanner } from './service';

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

const bannerEdit = createSlice({
  name: 'bannerEdit',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    clearBannerEditState: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(editBanner.pending, handlePending)
      .addCase(editBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(editBanner.rejected, handleRejected),
});

export const { clearBannerEditState } = bannerEdit.actions;
export const bannerEditReducer = bannerEdit.reducer;
