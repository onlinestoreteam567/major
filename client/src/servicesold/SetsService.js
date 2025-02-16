// import apiClient from '@config/apiClient';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

// const setId = 8;

// export const fetchSets = createAsyncThunk('sets/fetchSets', async (_, { rejectWithValue }) => {
//   try {
//     const endpoint = `${PRODUCT_LIST_ENDPOINT}/?type_category=${setId}`;
//     const { data } = await apiClient.get(endpoint);
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });
