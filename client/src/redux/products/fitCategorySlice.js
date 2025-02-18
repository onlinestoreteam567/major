import { createSlice } from '@reduxjs/toolkit';
import { getFitCategory } from './service';

const handlePending = (state) => {
  state.isLoading = true;
  state.fitCategory = [];
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fitCategorySlice = createSlice({
  name: 'fitCategory',
  initialState: {
    fitCategory: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    clearFitCategory: (state) => {
      state.fitCategory = [];
      state.error = null;
      state.isLoading = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFitCategory.pending, handlePending)
      .addCase(getFitCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.fitCategory = action.payload;
      })
      .addCase(getFitCategory.rejected, handleRejected);
  },
});

export const { clearFitCategory } = fitCategorySlice.actions;
export const fitCategoryReducer = fitCategorySlice.reducer;
