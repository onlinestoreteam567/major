import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductListService from '@services/ProductListService';

// Thunk for fetching best sellers (delegates API logic to the service)
export const fetchBestSellers = createAsyncThunk('bestSellers/fetchBestSellers', async (_, { rejectWithValue }) => {
  try {
    return await ProductListService.getProductList({ is_best_seller: true });
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice definition
const bestSellersSlice = createSlice({
  name: 'bestSellers',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBestSellers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBestSellers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBestSellers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default bestSellersSlice.reducer;
