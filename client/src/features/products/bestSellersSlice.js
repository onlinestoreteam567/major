import { createSlice } from '@reduxjs/toolkit';
import { fetchBestSellers } from '@services/bestSellersService';

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
