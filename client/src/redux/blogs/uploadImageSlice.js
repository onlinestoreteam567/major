import { createSlice } from '@reduxjs/toolkit';
import { uploadImage } from './service';

const initialState = {
  uploadedImage: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.uploadedImage = null;
};

const handleRejected = (state, action) => {
  state.uploadedImage = null;
  state.isLoading = false;
  state.error = action.payload;
};

const uploadImageSlice = createSlice({
  name: 'uploadImage',
  initialState,
  reducers: {
    clearUploadedImage: (state) => {
      state.uploadedImage = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(uploadImage.pending, handlePending)
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.uploadedImage = action.payload.image[0].url;
      })
      .addCase(uploadImage.rejected, handleRejected),
});

export const { clearUploadedImage } = uploadImageSlice.actions;
export const uploadImageReducer = uploadImageSlice.reducer;
