import { createSlice } from '@reduxjs/toolkit';
import {
  reviewsByProductId,
  deleteReview,
  approveReview,
  reviewsGetAll,
  reviewsGetByStatus,
  reviewsGetLatest,
} from './service';

const initialState = {
  reviews: [],
  filteredReviews: [],
  isLoading: false,
  error: null,
  isFetchedAllReviews: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.isFetchedAllReviews = false;
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
  reducers: {
    filterReviewByName: (state, action) => {
      console.log(`action.payload is ${action.payload}`);

      if (action.payload) {
        console.log(action.payload);

        const searchTerm = action.payload.toLowerCase();
        state.filteredReviews = state.reviews.filter((review) =>
          review.product_name.toLowerCase().includes(searchTerm)
        );
      } else {
        state.filteredReviews = state.reviews;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(reviewsGetAll.pending, handlePending)
      .addCase(reviewsGetAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
        state.filteredReviews = action.payload;
        state.isFetchedAllReviews = true;
      })
      .addCase(reviewsGetAll.rejected, handleRejected)

      .addCase(reviewsGetByStatus.pending, handlePending)
      .addCase(reviewsGetByStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(reviewsGetByStatus.rejected, handleRejected)

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

      .addCase(reviewsGetLatest.pending, handlePending)
      .addCase(reviewsGetLatest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(reviewsGetLatest.rejected, handleRejected),
});

export const { filterReviewByName } = ReviewsSlice.actions;
export const reviewReducer = ReviewsSlice.reducer;
