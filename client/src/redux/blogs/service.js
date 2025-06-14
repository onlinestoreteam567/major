import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BLOGS_ENDPOINT = import.meta.env.VITE_BLOGS_ENDPOINT;

export const uploadImage = createAsyncThunk('blog/uploadImage', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${BLOGS_ENDPOINT}images/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('uploadImage created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in uploadImage:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
