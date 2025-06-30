import { createSlice } from '@reduxjs/toolkit';

import {
  fetchProductsAll,
  getFilteredProducts,
  getProductsByCategory,
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
    filteredProducts: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    filterProductsByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm) {
        state.filteredProducts = state.products.filter((product) =>
          product.product_name_uk.toLowerCase().includes(searchTerm)
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchProductsAll.pending, handlePending)
      .addCase(fetchProductsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
        state.filteredProducts = action.payload;
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

      .addCase(getFilteredProducts.pending, handlePending)
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getFilteredProducts.rejected, handleRejected),
});

export const { setProducts, filterProductsByName } = productSlice.actions;
export const productsReducer = productSlice.reducer;
