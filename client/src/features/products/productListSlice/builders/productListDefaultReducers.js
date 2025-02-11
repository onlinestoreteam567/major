import { fetchProductList } from '@services/ProductListService';

export const productListDefaultReducers = (builder) => {
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
};
