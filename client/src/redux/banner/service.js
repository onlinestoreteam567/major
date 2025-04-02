import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BANNER_ENDPOINT = import.meta.env.VITE_BANNER_ENDPOINT;

export const fetchBanner = createAsyncThunk('banner/getBanner', async (id, thunkAPI) => {
  try {
    const { data } = await apiClient.get(BANNER_ENDPOINT);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
