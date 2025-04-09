import { createSlice } from '@reduxjs/toolkit';
import { reviewsByProductId } from './service';

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
  state.reviews = [];
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
      .addCase(reviewsByProductId.rejected, handleRejected),
});

export const reviewReducer = ReviewsSlice.reducer;
