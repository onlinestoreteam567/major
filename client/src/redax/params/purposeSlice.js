import { createSlice } from '@reduxjs/toolkit';
import { fetchTypes } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const typesSlice = createSlice({
  name: 'types',
  initialState: {
    types: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.pending, handlePending)
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.types = action.payload;
      })
      .addCase(fetchTypes.rejected, handleRejected);
  },
});

export const typesReducer = typesSlice.reducer;
