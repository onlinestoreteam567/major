import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

export const fetchSwitch = createAsyncThunk('filters/fetchSwitch', async (switchsStatus, { rejectWithValue }) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/?${switchsStatus}=true`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
