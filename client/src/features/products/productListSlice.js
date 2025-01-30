import { createSlice } from '@reduxjs/toolkit';
import { fetchProductList } from '@services/ProductListService';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default productListSlice.reducer;
