import { createSlice } from '@reduxjs/toolkit';
import { createPartner } from './service';

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

const PartnerCreateSlice = createSlice({
  name: 'partnerCreate',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearPartnerCreateState: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createPartner.pending, handlePending)
      .addCase(createPartner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(createPartner.rejected, handleRejected),
});

export const { clearPartnerCreateState } = PartnerCreateSlice.actions;
export const partnerCreateReducer = PartnerCreateSlice.reducer;
