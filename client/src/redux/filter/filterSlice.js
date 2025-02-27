import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  type: null,
  status: null,
  price: { min: 1, max: 999 },
  sorting: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.type = null;
      state.status = null;
      state.price = initialState.price;
      state.sorting = null;
    },
    setType: (state, action) => {
      const typeId = action.payload;

      if (state.type === null) {
        state.type = [typeId];
      } else if (state.type.includes(typeId)) {
        state.type = state.type.filter((id) => id !== typeId);
      } else {
        state.type = [...state.type, typeId];
      }

      state.category = null;
      state.status = null;
      state.price = initialState.price;
      state.sorting = null;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
      state.category = null;
      state.type = null;
      state.price = initialState.price;
      state.sorting = null;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
      state.category = null;
      state.type = null;
      state.status = null;
      state.sorting = null;
    },
    resetFilter: (state) => {
      state.status = null;
      state.category = null;
      state.type = null;
      state.price = initialState.price;
      state.sorting = null;
    },
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
  },
});
export const { setCategory, setType, setStatus, setPrice, resetFilter, setSorting } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
