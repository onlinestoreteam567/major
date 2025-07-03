import { createSlice } from '@reduxjs/toolkit';
import { getPromocodeById } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const promocodeByIdSlice = createSlice({
  name: 'promocodeById',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getPromocodeById.pending, handlePending)
      .addCase(getPromocodeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(getPromocodeById.rejected, handleRejected),
});

export const promocodeByIdReducer = promocodeByIdSlice.reducer;
