import { createSlice } from '@reduxjs/toolkit';
import { checkInvoiceStatus } from './service';

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

const checkInvoiceStatusSlice = createSlice({
  name: 'checkInvoiceStatus',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(checkInvoiceStatus.pending, handlePending)
      .addCase(checkInvoiceStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(checkInvoiceStatus.rejected, handleRejected),
});

export const checkInvoiceStatusReducer = checkInvoiceStatusSlice.reducer;
