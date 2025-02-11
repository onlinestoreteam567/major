import { fetchProductListWithParams } from '@services/ProductListService';

export const productListWithParamsReducers = (builder) => {
  builder
    .addCase(fetchProductListWithParams.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProductListWithParams.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(fetchProductListWithParams.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
};
