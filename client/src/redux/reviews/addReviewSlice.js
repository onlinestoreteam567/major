import { createSlice } from '@reduxjs/toolkit';
import { addReviewById } from '@redux/products/service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  response: null,
  isLoading: false,
  error: null,
};

const addReviewSlice = createSlice({
  name: 'addReview',
  initialState,
  reducers: {
    resetAddReviewState: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addReviewById.pending, handlePending)
      .addCase(addReviewById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.response = 'Review added successfully';
      })
      .addCase(addReviewById.rejected, handleRejected),
});

export const { resetAddReviewState } = addReviewSlice.actions;
export const addReviewReducer = addReviewSlice.reducer;
