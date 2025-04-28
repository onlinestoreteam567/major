import { createSlice } from '@reduxjs/toolkit';
import { getProductsByViewedProductsIds } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const viewedProductsSlice = createSlice({
  name: 'viewedProducts',
  initialState: {
    viewedProducts: [],
    fechedViewedProducts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addViewedProduct: (state, action) => {
      const productId = action.payload;
      if (!state.viewedProducts.includes(productId)) {
        state.viewedProducts.push(productId);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProductsByViewedProductsIds.pending, handlePending)
      .addCase(getProductsByViewedProductsIds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.fechedViewedProducts = action.payload;
      })
      .addCase(getProductsByViewedProductsIds.rejected, handleRejected),
});

export const { addViewedProduct } = viewedProductsSlice.actions;
export const viewedProductsReducer = viewedProductsSlice.reducer;
