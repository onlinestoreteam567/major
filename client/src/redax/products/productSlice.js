import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './servise';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProduct.pending, handlePending)
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, handleRejected),
});

export const productReducer = productSlice.reducer;
