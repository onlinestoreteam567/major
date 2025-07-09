import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const VITE_AUTH_TOKEN_ENDPOINT = import.meta.env.VITE_AUTH_TOKEN_ENDPOINT;

export const fetchAuthToken = createAsyncThunk('auth/fetchToken', async ({ email, password }, thunkAPI) => {
  try {
    const { data } = await apiClient.post(VITE_AUTH_TOKEN_ENDPOINT, { email, password });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
