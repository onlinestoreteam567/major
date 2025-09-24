import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const USERS_ENDPOINT = import.meta.env.VITE_USERS_ENDPOINT;

export const fetchUsers = createAsyncThunk('users/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await apiClient.get(USERS_ENDPOINT);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteUser = createAsyncThunk('users/delete', async (id, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${USERS_ENDPOINT}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error in deleting partner:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
