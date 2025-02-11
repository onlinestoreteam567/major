import { createSlice } from '@reduxjs/toolkit';
import { productListDefaultReducers } from './builders/productListDefaultReducers';
import { productListWithParamsReducers } from './builders/productListWithParamsReducers';
import { productListSwitchReducer } from './builders/productListSwitchReducer';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setFetchType: (state, action) => {
      state.currentFetchType = action.payload;
    },
  },
  extraReducers: (builder) => {
    productListSwitchReducer(builder);
    productListDefaultReducers(builder);
    productListWithParamsReducers(builder);
  },
});

export default productListSlice.reducer;
