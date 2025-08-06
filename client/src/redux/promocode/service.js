import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PROMOCODE_ENDPOINT = import.meta.env.VITE_PROMOCODE_ENDPOINT;

export const fetchPromocode = createAsyncThunk('promocode/fetchPromocode', async (code, thunkAPI) => {
  try {
    const endpoint = `${PROMOCODE_ENDPOINT}/validate/`;
    const promocode = { code };
    const { data } = await apiClient.post(endpoint, promocode);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const promocodeGetByStatus = createAsyncThunk('promocode/getByStatus', async (status, thunkAPI) => {
  try {
    const endpoint = `${PROMOCODE_ENDPOINT}/?is_active=${status}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
