import { createSlice } from '@reduxjs/toolkit';
import { fetchProductList } from './servise';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const listSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProductList.pending, handlePending)
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProductList.rejected, handleRejected),

  // .addCase(getFilterList.pending, handlePending)
  // .addCase(getFilterList.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.products = action.payload;
  // })
  // .addCase(getFilterList.rejected, handleRejected),
});

export const productsReducer = listSlice.reducer;
