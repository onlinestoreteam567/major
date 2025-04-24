import { createSlice } from '@reduxjs/toolkit';
import { fetchWarehouses } from './service';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const warehousesSlice = createSlice({
  name: 'warehouses',
  initialState: {
    warehouses: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearWarehouses: (state) => {
      state.warehouses = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWarehouses.pending, handlePending)
      .addCase(fetchWarehouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.warehouses = action.payload;
      })
      .addCase(fetchWarehouses.rejected, handleRejected);
  },
});

export const { clearWarehouses } = warehousesSlice.actions;
export const warehousesReducer = warehousesSlice.reducer;
