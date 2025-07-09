import { createSlice } from '@reduxjs/toolkit';
import { editPurpose } from './service';

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

const purposeEditSlice = createSlice({
  name: 'purposeEdit',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearEditPurposeState: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(editPurpose.pending, handlePending)
      .addCase(editPurpose.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(editPurpose.rejected, handleRejected),
});

export const { clearEditPurposeState } = purposeEditSlice.actions;
export const purposeEditReducer = purposeEditSlice.reducer;
