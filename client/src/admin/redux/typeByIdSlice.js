import { createSlice } from '@reduxjs/toolkit';
import { getTypeCategoryById } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const typeByIdSlice = createSlice({
  name: 'typeById',
  initialState: {
    categoryId: {},
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getTypeCategoryById.pending, handlePending)
      .addCase(getTypeCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoryId = action.payload;
      })
      .addCase(getTypeCategoryById.rejected, handleRejected),
});

export const typeByIdReducer = typeByIdSlice.reducer;
