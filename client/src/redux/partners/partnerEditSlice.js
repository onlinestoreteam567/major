import { createSlice } from '@reduxjs/toolkit';
import { editPartner } from './service';

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

const partnerEdit = createSlice({
  name: 'partnerEdit',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(editPartner.pending, handlePending)
      .addCase(editPartner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(editPartner.rejected, handleRejected),
});

export const partnerEditReducer = partnerEdit.reducer;
