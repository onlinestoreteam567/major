import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const TYPE_ENDPOINT = import.meta.env.VITE_TYPE_ENDPOINT;

export const fetchTypes = createAsyncThunk('types/fetchTypes', async (_, thunkAPI) => {
  try {
    const { data } = await apiClient.get(TYPE_ENDPOINT);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const CATEGORY_ENDPOINT = import.meta.env.VITE_CATEGORY_ENDPOINT;

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, thunkAPI) => {
  try {
    const { data } = await apiClient.get(CATEGORY_ENDPOINT);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
