import { createSlice } from '@reduxjs/toolkit';
import { getPartnerById } from './service';

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

const partnerByIdSlice = createSlice({
  name: 'partnerById',
  initialState: {
    partner: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getPartnerById.pending, handlePending)
      .addCase(getPartnerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.partner = action.payload;
      })
      .addCase(getPartnerById.rejected, handleRejected),
});

export const partnerByIdReducer = partnerByIdSlice.reducer;
