import { fetchProductListWithParams } from '@services/ProductListService';

export const productListWithParamsReducers = (builder) => {
  builder
    .addCase(fetchProductListWithParams.pending, (state) => {
      if (state.currentFetchType !== 'withParams') return;
      state.status = 'loading';
    })
    .addCase(fetchProductListWithParams.fulfilled, (state, action) => {
      if (state.currentFetchType !== 'withParams') return;
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(fetchProductListWithParams.rejected, (state, action) => {
      if (state.currentFetchType !== 'withParams') return;
      state.status = 'failed';
      state.error = action.payload;
    });
};
