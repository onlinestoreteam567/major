import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const NOVA_POST_SETTLEMENTS_ENDPOINT = import.meta.env.VITE_NOVA_POST_SETTLEMENTS_ENDPOINT;

export const fetchSettlements = createAsyncThunk('novapost/fetchSettlements', async (city, thunkAPI) => {
  try {
    const { data } = await apiClient.get(`${NOVA_POST_SETTLEMENTS_ENDPOINT}?query=${city}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
