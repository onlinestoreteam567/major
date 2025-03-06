import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const VITE_AUTH_TOKEN_ENDPOINT = import.meta.env.VITE_AUTH_TOKEN_ENDPOINT;
const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

export const fetchAuthToken = createAsyncThunk('auth/fetchToken', async ({ email, password }, thunkAPI) => {
  try {
    const { data } = await apiClient.post(VITE_AUTH_TOKEN_ENDPOINT, { email, password });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const createProduct = createAsyncThunk('createProduct/post', async (formData, { rejectWithValue }) => {
  try {
    const response = await apiClient.post(`${PRODUCT_LIST_ENDPOINT}/`, formData);
    console.log('Product created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    return rejectWithValue(error.response?.data || error.message);
  }
});
