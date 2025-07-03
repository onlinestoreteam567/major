import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CATEGORY_ENDPOINT = import.meta.env.VITE_CATEGORY_ENDPOINT;

export const getPurposeCategoryById = createAsyncThunk('purposeCategory/getById', async (id, thunkAPI) => {
  try {
    const endpoint = `${CATEGORY_ENDPOINT}/${id}`;
    const { data } = await apiClient.get(endpoint);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createPurposeCategory = createAsyncThunk('createPurposeCategory/post', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${CATEGORY_ENDPOINT}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Product created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in creating product:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const editPurpose = createAsyncThunk('purpose/edit', async ({ formData, id }, thunkAPI) => {
  try {
    const response = await apiClient.patch(`${CATEGORY_ENDPOINT}/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Product edited:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in editing product:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const deletePurpose = createAsyncThunk('purpose/delete', async (id, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${CATEGORY_ENDPOINT}/${id}/`);

    console.log('purpose deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in deleting purpose:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
