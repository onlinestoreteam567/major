import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductListService from '@services/ProductListService';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (_, { rejectWithValue }) => {
  try {
    return await ProductListService.getProductListById(_);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    card: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.card = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
