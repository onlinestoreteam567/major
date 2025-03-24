import { createSlice } from '@reduxjs/toolkit';
import { deletePromocode } from './service';

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

const promocodeDeleteSlice = createSlice({
  name: 'promocodeDelete',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(deletePromocode.pending, handlePending)
      .addCase(deletePromocode.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 204;
      })
      .addCase(deletePromocode.rejected, handleRejected),
});

export const promocodeDeleteReducer = promocodeDeleteSlice.reducer;
