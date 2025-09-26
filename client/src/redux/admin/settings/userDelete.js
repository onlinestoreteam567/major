import { createSlice } from '@reduxjs/toolkit';
import { deleteUser } from './service';

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

const userDeleteSlice = createSlice({
  name: 'userDelete',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(deleteUser.pending, handlePending)
      .addCase(deleteUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 204;
      })
      .addCase(deleteUser.rejected, handleRejected),
});

export const userDeleteReducer = userDeleteSlice.reducer;
