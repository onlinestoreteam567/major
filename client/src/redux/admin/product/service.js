import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

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

export const deleteProduct = createAsyncThunk('product/delete', async (id, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${PRODUCT_LIST_ENDPOINT}/${id}/`);
    console.log('product deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in deleting product:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
