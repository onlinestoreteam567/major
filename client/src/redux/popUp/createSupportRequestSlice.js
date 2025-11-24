import { createSlice } from '@reduxjs/toolkit';
import { postSupportRequest } from './service';

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

const createSupportRequest = createSlice({
  name: 'createSupportRequest',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCreateSupportRequest: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(postSupportRequest.pending, handlePending)
      .addCase(postSupportRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(postSupportRequest.rejected, handleRejected),
});

export const { clearCreateSupportRequest } = createSupportRequest.actions;
export const createSupportRequestReducer = createSupportRequest.reducer;
