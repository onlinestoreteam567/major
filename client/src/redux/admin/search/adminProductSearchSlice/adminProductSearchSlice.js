import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const adminProductSearchSlice = createSlice({
  name: 'adminProductSearch',
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

export const { setSearch, clearSearch } = adminProductSearchSlice.actions;
export const adminProductSearchReducer = adminProductSearchSlice.reducer;
