import { createSlice } from '@reduxjs/toolkit';
import { createTypeCategory } from './service';

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

const createTypeCategorySlice = createSlice({
  name: 'createTypeCategory',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(createTypeCategory.pending, handlePending)
      .addCase(createTypeCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(createTypeCategory.rejected, handleRejected),
});

export const createTypeCategoryReducer = createTypeCategorySlice.reducer;
