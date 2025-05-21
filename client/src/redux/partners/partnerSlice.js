import { createSlice } from '@reduxjs/toolkit';
import { fetchPartners } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    partners: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPartners.pending, handlePending)
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.partners = action.payload;
      })
      .addCase(fetchPartners.rejected, handleRejected),
});

export const partnersReducer = partnersSlice.reducer;
