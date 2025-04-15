import { createSlice } from '@reduxjs/toolkit';
import { getPurposeCategoryById } from '../../admin/redux/service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const purposeCategoryByIdSlice = createSlice({
  name: 'purposeById',
  initialState: {
    categoryId: {},
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getPurposeCategoryById.pending, handlePending)
      .addCase(getPurposeCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categoryId = action.payload;
      })
      .addCase(getPurposeCategoryById.rejected, handleRejected),
});

export const purposeCategoryByIdReducer = purposeCategoryByIdSlice.reducer;
