import { createSlice } from '@reduxjs/toolkit';
import { contactsEdit } from './service';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.response = null;
};

const handleRejected = (state, action) => {
  state.response = null;
  state.isLoading = false;
  state.error = action.payload;
};

const contactsEditSlice = createSlice({
  name: 'contactsEdit',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearEditContactsSlice: (state) => {
      state.response = null;
      state.isLoading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(contactsEdit.pending, handlePending)
      .addCase(contactsEdit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      })
      .addCase(contactsEdit.rejected, handleRejected),
});

export const { clearEditContactsSlice } = contactsEditSlice.actions;
export const contactsEditReducer = contactsEditSlice.reducer;
