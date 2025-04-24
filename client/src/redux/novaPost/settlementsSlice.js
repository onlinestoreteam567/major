import { createSlice } from '@reduxjs/toolkit';
import { fetchSettlements } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const settlementsSlice = createSlice({
  name: 'settlements',
  initialState: {
    settlements: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearSettlements: (state) => {
      state.settlements = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettlements.pending, handlePending)
      .addCase(fetchSettlements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.settlements = action.payload;
      })
      .addCase(fetchSettlements.rejected, handleRejected);
  },
});

export const { clearSettlements } = settlementsSlice.actions;
export const settlementsReducer = settlementsSlice.reducer;
