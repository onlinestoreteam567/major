// import { createSlice } from '@reduxjs/toolkit';
// import { fetchSets } from '../../servicesold/SetsService';

// const setsSlice = createSlice({
//   name: 'sets',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSets.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchSets.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchSets.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default setsSlice.reducer;
