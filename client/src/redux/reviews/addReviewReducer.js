import { createSlice } from '@reduxjs/toolkit';
import { addReviewById } from '@redux/products/service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// Define the initial state outside the slice for easy re-use
const initialState = {
  response: null,
  isLoading: false,
  error: null,
};

const addReviewSlice = createSlice({
  name: 'addReview',
  initialState, // Use the defined initial state here
  reducers: {
    // Add a new reducer to reset the state
    resetAddReviewState: () => {
      return initialState;
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
