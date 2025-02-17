import { createSlice } from '@reduxjs/toolkit';
import { fetchSets } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setsSlice = createSlice({
  name: 'sets',
  initialState: {
    sets: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSets.pending, handlePending)
      .addCase(fetchSets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.sets = action.payload;
      })
      .addCase(fetchSets.rejected, handleRejected);
  },
});

export const setsReducer = setsSlice.reducer;
