import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const REVIEW_ENDPOINT = import.meta.env.VITE_REVIEW_ENDPOINT;

export const reviewsByProductId = createAsyncThunk('reviews/reviewsByProductId', async (id, _, thunkAPI) => {
  try {
    console.log(213132);

    const endpoint = `${REVIEW_ENDPOINT}/${id}/`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
