import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const adminReviewsSearchSlice = createSlice({
  name: 'adminReviewsSearch',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
    clearSearch: (state) => {
      state.value = '';
    },
  },
});

export const { setSearch, clearSearch } = adminReviewsSearchSlice.actions;
export const adminReviewsSearchReducer = adminReviewsSearchSlice.reducer;
