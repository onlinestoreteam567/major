import { createSlice } from '@reduxjs/toolkit';
import { createProduct } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const createProductSlice = createSlice({
  name: 'createProduct',
  initialState: {
    response: '',
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(createProduct.pending, handlePending)
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(createProduct.rejected, handleRejected),
});

export const createProductReducer = createProductSlice.reducer;
