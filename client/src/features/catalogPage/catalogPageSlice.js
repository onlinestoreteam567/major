import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialState: true,
};

const catalogPageSlice = createSlice({
  name: 'initialStateCatalogPage',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.initialState = true;
    },
    setFalse: (state) => {
      state.initialState = false;
    },
  },
});

export const { setTrue, setFalse } = catalogPageSlice.actions;
export default catalogPageSlice.reducer;
