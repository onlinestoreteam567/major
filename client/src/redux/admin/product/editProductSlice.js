import { createSlice } from '@reduxjs/toolkit';
import { editProduct } from './service';

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

const editProductSlice = createSlice({
  name: 'createProduct',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearEditProductState: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(editProduct.pending, handlePending)
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(editProduct.rejected, handleRejected),
});

export const { clearEditProductState } = editProductSlice.actions;
export const editProductReducer = editProductSlice.reducer;
