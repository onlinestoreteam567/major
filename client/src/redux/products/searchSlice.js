import { createSlice } from '@reduxjs/toolkit';
import { getSearch } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.searchResults = [];
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getSearch.pending, handlePending)
      .addCase(getSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.searchResults = action.payload;
      })
      .addCase(getSearch.rejected, handleRejected),
});

export const searchReducer = searchSlice.reducer;
