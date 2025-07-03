import { createSlice } from '@reduxjs/toolkit';
import { deleteProduct } from './service';

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

const productDeleteSlice = createSlice({
  name: 'productDelete',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(deleteProduct.pending, handlePending)
      .addCase(deleteProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 204;
      })
      .addCase(deleteProduct.rejected, handleRejected),
});

export const productDeleteReducer = productDeleteSlice.reducer;
