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
    console.error('Error in deleting banner:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const createBanner = createAsyncThunk('banner/create', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${BANNER_ENDPOINT}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Product created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in creating banner:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const getBannerById = createAsyncThunk('banner/getById', async (id, thunkAPI) => {
  try {
    const endpoint = `${BANNER_ENDPOINT}/${id}`;
    const { data } = await apiClient.get(endpoint);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editBanner = createAsyncThunk('banner/edit', async ({ formData, id }, thunkAPI) => {
  try {
    const response = await apiClient.patch(`${BANNER_ENDPOINT}/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Product edited:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in editing banner:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
