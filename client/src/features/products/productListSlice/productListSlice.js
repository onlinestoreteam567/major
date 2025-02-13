import { createSlice } from '@reduxjs/toolkit';
import { productListDefaultReducers } from './builders/productListDefaultReducers';
import { productListWithParamsReducers } from './builders/productListWithParamsReducers';
import { productListSwitchReducer } from './builders/productListSwitchReducer';
import { productListPurposeCategory } from './builders/productListPurposeCategory';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    productListSwitchReducer(builder);
    productListPurposeCategory(builder);
    productListDefaultReducers(builder);
    productListWithParamsReducers(builder);
  },
});

export default productListSlice.reducer;
