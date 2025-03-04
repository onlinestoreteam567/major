import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthToken } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthToken.pending, handlePending)
      .addCase(fetchAuthToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
      })
      .addCase(fetchAuthToken.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
