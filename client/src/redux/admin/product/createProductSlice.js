import { createSlice } from '@reduxjs/toolkit';
import { createProduct } from './service';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.response = null;
};

const handleRejected = (state, action) => {
  state.response = null;
  state.isLoading = false;
  state.error = action.payload;
};

const createProductSlice = createSlice({
  name: 'createProduct',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCreateProductState: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
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
export const { clearCreateProductState } = createProductSlice.actions;
export const createProductReducer = createProductSlice.reducer;
