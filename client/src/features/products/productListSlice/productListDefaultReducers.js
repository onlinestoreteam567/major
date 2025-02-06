import { fetchProductList } from '@services/ProductListService';

export const productListDefaultReducers = (builder) => {
  builder
    .addCase(fetchProductList.pending, (state) => {
      if (state.currentFetchType !== 'default') return;
      state.status = 'loading';
    })
    .addCase(fetchProductList.fulfilled, (state, action) => {
      if (state.currentFetchType !== 'default') return;
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(fetchProductList.rejected, (state, action) => {
      if (state.currentFetchType !== 'default') return;
      state.status = 'failed';
      state.error = action.payload;
    });
};
