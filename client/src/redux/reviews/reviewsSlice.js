import { createSlice } from '@reduxjs/toolkit';
import { reviewsByProductId, deleteReview, approveReview, rejectReview } from './service';

const initialState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const ReviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(reviewsByProductId.pending, handlePending)
      .addCase(reviewsByProductId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(reviewsByProductId.rejected, handleRejected)

      .addCase(deleteReview.pending, handlePending)
      .addCase(deleteReview.fulfilled, handleFulfilled)
      .addCase(deleteReview.rejected, handleRejected)

      .addCase(approveReview.pending, handlePending)
      .addCase(approveReview.fulfilled, handleFulfilled)
      .addCase(approveReview.rejected, handleRejected)

      .addCase(rejectReview.pending, handlePending)
      .addCase(rejectReview.fulfilled, handleFulfilled)
      .addCase(rejectReview.rejected, handleRejected),
});

export const reviewReducer = ReviewsSlice.reducer;
