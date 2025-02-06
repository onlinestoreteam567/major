import { createSlice } from '@reduxjs/toolkit';
import { productListDefaultReducers } from './productListDefaultReducers';
import { productListWithParamsReducers } from './productListWithParamsReducers';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    currentFetchType: 'default', // 'default' | 'withParams'
  },
  reducers: {
    setFetchType: (state, action) => {
      state.currentFetchType = action.payload;
    },
  },
  extraReducers: (builder) => {
    productListDefaultReducers(builder);
    productListWithParamsReducers(builder);
  },
});

export const { setFetchType, restoreItemsFromSaved } = productListSlice.actions;
export default productListSlice.reducer;
