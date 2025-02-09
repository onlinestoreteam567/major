import { createSlice } from '@reduxjs/toolkit';

const lngSlice = createSlice({
  name: 'language',
  initialState: {
    lng: 'uk',
  },
  reducers: {
    setLanguage(state, action) {
      state.lng = action.payload;
    },
  },
});

export const languageReducer = lngSlice.reducer;
