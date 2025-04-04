import { createSlice } from '@reduxjs/toolkit';
import { fetchPromocode } from './service';

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

const promocodeListSlice = createSlice({
  name: 'promocodeList',
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

export const promocodeListReducer = promocodeListSlice.reducer;
