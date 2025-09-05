import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const TYPE_ENDPOINT = import.meta.env.VITE_TYPE_ENDPOINT;

export const createTypeCategory = createAsyncThunk('createTypeCategory/post', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${TYPE_ENDPOINT}/`, formData);
    console.log('Product created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in creating product:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const getTypeCategoryById = createAsyncThunk('typeCategory/getById', async (id, thunkAPI) => {
  try {
    const endpoint = `${TYPE_ENDPOINT}/${id}`;
    const { data } = await apiClient.get(endpoint);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editType = createAsyncThunk('type/edit', async ({ formData, id }, thunkAPI) => {
  try {
    const response = await apiClient.patch(`${TYPE_ENDPOINT}/${id}/`, formData);
    console.log('edited:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in editing :', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const deleteType = createAsyncThunk('type/delete', async (id, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${TYPE_ENDPOINT}/${id}/`);

    console.log('type deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in deleting type:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
