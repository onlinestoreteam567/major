import { createSlice } from '@reduxjs/toolkit';
import { deletePurpose } from './service';

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

const purposeDeleteSlice = createSlice({
  name: 'purposeDelete',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(deletePurpose.pending, handlePending)
      .addCase(deletePurpose.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 204;
      })
      .addCase(deletePurpose.rejected, handleRejected),
});

export const purposeDeleteReducer = purposeDeleteSlice.reducer;
