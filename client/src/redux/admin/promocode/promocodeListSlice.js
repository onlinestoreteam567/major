import { createSlice } from '@reduxjs/toolkit';
import { fetchPromocode } from './service';
import { promocodeGetByStatus } from '@redux/promocode/service';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.response = null;
  state.isFetchedAllPromocodes = false;
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
    isFetchedAllPromocodes: false,
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
        state.isFetchedAllPromocodes = true;
      })
      .addCase(fetchPromocode.rejected, handleRejected)
      .addCase(promocodeGetByStatus.pending, handlePending)
      .addCase(promocodeGetByStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(promocodeGetByStatus.rejected, handleRejected),
});

export const promocodeListReducer = promocodeListSlice.reducer;
