import { createSlice } from '@reduxjs/toolkit';
import { editUser } from './service';

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

const userEditSlice = createSlice({
  name: 'userEdit',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearEditUserState: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(editUser.pending, handlePending)
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(editUser.rejected, handleRejected),
});
export const { clearEditUserState } = userEditSlice.actions;
export const userEditReducer = userEditSlice.reducer;
