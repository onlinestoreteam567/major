import { createSlice } from '@reduxjs/toolkit';
import { editType } from './service';

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

const typeEditSlice = createSlice({
  name: 'purposeEdit',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(editType.pending, handlePending)
      .addCase(editType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(editType.rejected, handleRejected),
});

export const typeEditReducer = typeEditSlice.reducer;
