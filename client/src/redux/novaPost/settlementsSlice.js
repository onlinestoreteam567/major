import { createSlice } from '@reduxjs/toolkit';
import { fetchSettlements } from './service';

const handlePending = (state) => {
  state.isLoading = true;
  state.isShowNothing = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isShowNothing = false;
};

const settlementsSlice = createSlice({
  name: 'settlements',
  initialState: {
    settlements: [],
    isLoading: false,
    error: null,
    isShowNothing: false,
  },
  reducers: {
    clearSettlements: (state) => {
      state.settlements = [];
      state.isLoading = false;
      state.error = null;
      state.isShowNothing = false;
    },
    setIsShowNothing: (state, action) => {
      state.isShowNothing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettlements.pending, handlePending)
      .addCase(fetchSettlements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.settlements = action.payload;
        if (action.payload && action.payload.length === 0) {
          state.isShowNothing = true;
        } else {
          state.isShowNothing = false;
        }
      })
      .addCase(fetchSettlements.rejected, handleRejected);
  },
});

export const { clearSettlements, setIsShowNothing } = settlementsSlice.actions;
export const settlementsReducer = settlementsSlice.reducer;
