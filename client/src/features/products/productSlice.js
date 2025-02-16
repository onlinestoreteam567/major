// import { createSlice } from '@reduxjs/toolkit';
// import { fetchProduct } from '@../servicesold/productService';

// const productSlice = createSlice({
//   name: 'product',
//   initialState: {
//     card: {},
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProduct.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchProduct.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.card = action.payload;
//       })
//       .addCase(fetchProduct.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default productSlice.reducer;
