import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  type: null,
  status: null,
  price: { min: 100, max: 999 },
};
//   name: 'filter',
//   initialState,
//   reducers: {
//     setCategory: (state, action) => {
//       return {
//         ...initialState,
//         category: action.payload,
//       };
//     },
//     setType: (state, action) => {
//       return {
//         ...initialState,
//         type: action.payload,
//         // state.type = action.payload.type;
//       };
//     },
//     setStatus: (state, action) => {
//       return {
//         ...initialState,
//         status: action.payload,
//       };
//     },
//     setPrice: (state, action) => {
//       return {
//         ...initialState,
//         price: action.payload,
//       };
//     },
//     resetFilter: (state, action) => {
//       return {
//         ...initialState,
//       };
//     },
//   },
// });

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.type = null;
      state.status = null;
      state.price = initialState.price;
    },
    setType: (state, action) => {
      state.type = action.payload;
      state.category = null;
      state.status = null;
      state.price = initialState.price;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      state.category = null;
      state.type = null;
      state.price = initialState.price;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
      state.category = null;
      state.type = null;
      state.status = null;
    },
    resetFilter: (state) => {
      state.status = null;
      state.category = null;
      state.type = null;
      state.price = initialState.price;
    },
  },
});
export const { setCategory, setType, setStatus, setPrice, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
