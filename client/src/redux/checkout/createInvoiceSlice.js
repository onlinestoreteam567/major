import { createSlice } from '@reduxjs/toolkit';
import { createInvoice } from './service';

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

const createInvoiceSlice = createSlice({
  name: 'createInvoice',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(createInvoice.pending, handlePending)
      .addCase(createInvoice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(createInvoice.rejected, handleRejected),
});

export const createInvoiceReducer = createInvoiceSlice.reducer;
