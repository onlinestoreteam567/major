import { createSlice } from '@reduxjs/toolkit';
import { createPromocode } from './service';

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

const promocodeCreateSlice = createSlice({
  name: 'promocodeCreate',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(createPromocode.pending, handlePending)
      .addCase(createPromocode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(createPromocode.rejected, handleRejected),
});

export const promocodeCreateReducer = promocodeCreateSlice.reducer;
