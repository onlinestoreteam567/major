import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const VITE_AUTH_TOKEN_ENDPOINT = import.meta.env.VITE_AUTH_TOKEN_ENDPOINT;
const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;
const CATEGORY_ENDPOINT = import.meta.env.VITE_CATEGORY_ENDPOINT;
const TYPE_ENDPOINT = import.meta.env.VITE_TYPE_ENDPOINT;

export const fetchAuthToken = createAsyncThunk('auth/fetchToken', async ({ email, password }, thunkAPI) => {
  try {
    const { data } = await apiClient.post(VITE_AUTH_TOKEN_ENDPOINT, { email, password });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const createProduct = createAsyncThunk('createProduct/post', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${PRODUCT_LIST_ENDPOINT}/`, formData, {
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

export const editProduct = createAsyncThunk('product/edit', async ({ formData, id }, thunkAPI) => {
  // Receive an object with formData and id
  try {
    const response = await apiClient.patch(`${PRODUCT_LIST_ENDPOINT}/${id}/`, formData, {
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
