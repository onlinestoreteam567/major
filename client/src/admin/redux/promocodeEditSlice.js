import { createSlice } from '@reduxjs/toolkit';
import { editPromocode } from './service';

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

const promocodeEdit = createSlice({
  name: 'promocodeEdit',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(editPromocode.pending, handlePending)
      .addCase(editPromocode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(editPromocode.rejected, handleRejected),
});

export const promocodeEditReducer = promocodeEdit.reducer;
