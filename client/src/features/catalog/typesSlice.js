// import { createSlice } from '@reduxjs/toolkit';
// import { fetchTypes } from '@../servicesold/TypeService';

// const typesSlice = createSlice({
//   name: 'types',
//   initialState: {
//     types: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTypes.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTypes.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.types = action.payload;
//       })
//       .addCase(fetchTypes.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default typesSlice.reducer;
