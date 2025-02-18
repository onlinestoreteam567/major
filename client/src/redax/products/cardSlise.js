import { createSlice } from '@reduxjs/toolkit';
import { getProductById } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const poductIdSlice = createSlice({
  name: 'productId',
  initialState: {
    productId: {},
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getProductById.pending, handlePending)
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.productId = action.payload;
      })
      .addCase(getProductById.rejected, handleRejected),
});

export const productIdReducer = poductIdSlice.reducer;
