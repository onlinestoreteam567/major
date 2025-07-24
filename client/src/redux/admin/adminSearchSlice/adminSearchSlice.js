import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const adminSearchSlice = createSlice({
  name: 'search',
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

export const { setSearch, clearSearch } = adminSearchSlice.actions;
export const adminSearchReducer = adminSearchSlice.reducer;
