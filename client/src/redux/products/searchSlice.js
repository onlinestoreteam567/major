import { createSlice } from '@reduxjs/toolkit';
import { getSearch } from './service';

const handlePending = (state) => {
  state.isLoading = true;
  state.searchResults = [];
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = null;
    },
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

export const { clearSearchResults } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
