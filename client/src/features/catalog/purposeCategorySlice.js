// import { createSlice } from '@reduxjs/toolkit';
// import { fetchPurposeCategories } from '@../servicesold/PurposeCategoryService';

// const purposeCategorySlice = createSlice({
//   name: 'purposeCategory',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPurposeCategories.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPurposeCategories.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchPurposeCategories.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default purposeCategorySlice.reducer;
