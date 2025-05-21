import { createSlice } from '@reduxjs/toolkit';
import { deletePartner } from './service';

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

const partnerDeleteSlice = createSlice({
  name: 'partnerDelete',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(deletePartner.pending, handlePending)
      .addCase(deletePartner.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 204;
      })
      .addCase(deletePartner.rejected, handleRejected),
});

export const partnerDeleteReducer = partnerDeleteSlice.reducer;
