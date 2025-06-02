import { createSlice } from '@reduxjs/toolkit';
import { uploadImage } from './service';

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

const uploadImageSlice = createSlice({
  name: 'uploadImage',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(uploadImage.pending, handlePending)
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(uploadImage.rejected, handleRejected),
});

export const uploadImageReducer = uploadImageSlice.reducer;
