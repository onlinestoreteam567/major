import { createSlice } from '@reduxjs/toolkit';
import { fetchPromocode } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.response = null;
};

const promocodeSlice = createSlice({
  name: 'promocode',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPromocode.pending, handlePending)
      .addCase(fetchPromocode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(fetchPromocode.rejected, handleRejected),
});

export const promocodeReducer = promocodeSlice.reducer;
