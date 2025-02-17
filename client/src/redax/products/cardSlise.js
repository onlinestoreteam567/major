import { createSlice } from '@reduxjs/toolkit';
import { getProductById, getProductsByCategory } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const poductIdSlice = createSlice({
  name: 'productId',
  initialState: {
    productId: {},
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getProductById.pending, handlePending)
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.productId = action.payload;
      })
      .addCase(getProductById.rejected, handleRejected)

      .addCase(getProductsByCategory.pending, handlePending)
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProductsByCategory.rejected, handleRejected),
});

export const productIdReducer = poductIdSlice.reducer;
