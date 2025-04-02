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

export const deleteBanner = createAsyncThunk('banner/delete', async (id, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${BANNER_ENDPOINT}/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error in deleting type:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
