import { createSlice } from '@reduxjs/toolkit';
import { postCooperationRequest } from './service';

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

const createCooperationRequest = createSlice({
  name: 'createCooperationRequest',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCreateCooperationRequest: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(postCooperationRequest.pending, handlePending)
      .addCase(postCooperationRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(postCooperationRequest.rejected, handleRejected),
});

export const { clearCreateCooperationRequest } = createCooperationRequest.actions;
export const createCooperationRequestReducer = createCooperationRequest.reducer;
