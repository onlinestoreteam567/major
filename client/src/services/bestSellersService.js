import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductListService from '@services/ProductListService';

export const fetchBestSellers = createAsyncThunk('bestSellers/fetchBestSellers', async (_, { rejectWithValue }) => {
  try {
    return await ProductListService.getProductList({ is_best_seller: true });
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
