import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductListService from '@services/ProductListService';

export const fetchProductList = createAsyncThunk('productList/fetchProductList', async (_, { rejectWithValue }) => {
  try {
    return await ProductListService.getProductList();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

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
