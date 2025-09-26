import { createSlice } from '@reduxjs/toolkit';
import { userById } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userByIdSlice = createSlice({
  name: 'userById',
  initialState: {
    userById: {},
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(userById.pending, handlePending)
      .addCase(userById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userById = action.payload;
      })
      .addCase(userById.rejected, handleRejected),
});

export const userByIdReducer = userByIdSlice.reducer;
