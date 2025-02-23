import { createSlice } from '@reduxjs/toolkit';

import {
  fetchProductsAll,
  getProductsByCategory,
  getProductsByPrice,
  getProductsByStatus,
  getProductsByTypes,
} from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productSlice = createSlice({
  name: 'products',

  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchProductsAll.pending, handlePending)
      .addCase(fetchProductsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProductsAll.rejected, handleRejected)

      .addCase(getProductsByTypes.pending, handlePending)
      .addCase(getProductsByTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProductsByTypes.rejected, handleRejected)

      .addCase(getProductsByCategory.pending, handlePending)
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProductsByCategory.rejected, handleRejected)

      .addCase(getProductsByStatus.pending, handlePending)
      .addCase(getProductsByStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProductsByStatus.rejected, handleRejected)

      .addCase(getProductsByPrice.pending, handlePending)
      .addCase(getProductsByPrice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProductsByPrice.rejected, handleRejected),
});

export const { setProducts } = productSlice.actions;
export const productsReducer = productSlice.reducer;
