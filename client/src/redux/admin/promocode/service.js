import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PROMOCODE_ENDPOINT = import.meta.env.VITE_PROMOCODE_ENDPOINT;

export const fetchAllPromocodes = createAsyncThunk('promocode/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await apiClient.get(PROMOCODE_ENDPOINT);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createPromocode = createAsyncThunk('promocode/post', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${PROMOCODE_ENDPOINT}/`, formData);
    console.log('Promocode created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in creating product:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const getPromocodeById = createAsyncThunk('promocode/getById', async (id, thunkAPI) => {
  try {
    const endpoint = `${PROMOCODE_ENDPOINT}/${id}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editPromocode = createAsyncThunk('promocode/edit', async ({ formData, id }, thunkAPI) => {
  try {
    const response = await apiClient.patch(`${PROMOCODE_ENDPOINT}/${id}/`, formData);
    console.log('edited:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in editing :', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const deletePromocode = createAsyncThunk('promocode/delete', async (id, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${PROMOCODE_ENDPOINT}/${id}/`);

    console.log('type deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in deleting type:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
