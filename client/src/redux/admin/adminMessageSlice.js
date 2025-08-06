import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: null,
  onClear: null,
};

const adminMessageSlice = createSlice({
  name: 'adminMessage',
  initialState,
  reducers: {
    setAdminMessage: (state, action) => {
      state.message = action.payload.message;
      state.onClear = action.payload.onClear || null;
    },
    clearAdminMessage: (state) => {
      state.message = null;
      state.onClear = null;
    },
  },
});

export const { setAdminMessage, clearAdminMessage } = adminMessageSlice.actions;
export const adminMessageSliceReducer = adminMessageSlice.reducer;
