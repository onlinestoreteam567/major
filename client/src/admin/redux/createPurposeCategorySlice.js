import { createSlice } from '@reduxjs/toolkit';
import { createPurposeCategory } from './service';

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

const createPurposeCategorySlice = createSlice({
  name: 'createPurposeCategory',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(createPurposeCategory.pending, handlePending)
      .addCase(createPurposeCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(createPurposeCategory.rejected, handleRejected),
});

export const createPurposeCategoryReducer = createPurposeCategorySlice.reducer;
