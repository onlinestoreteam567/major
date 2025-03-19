import { createSlice } from '@reduxjs/toolkit';
import { deleteType } from './service';

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

const typeDeleteSlice = createSlice({
  name: 'typeDelete',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(deleteType.pending, handlePending)
      .addCase(deleteType.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 204;
      })
      .addCase(deleteType.rejected, handleRejected),
});

export const typeDeleteReducer = typeDeleteSlice.reducer;
