import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const TELEGRAM_BOT_COOPERATION_ENDPOINT = import.meta.env.VITE_TYPE_ENDPOINT;

export const postCooperationRequest = createAsyncThunk('cooperationRequest/post', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${TELEGRAM_BOT_COOPERATION_ENDPOINT}/`, formData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
