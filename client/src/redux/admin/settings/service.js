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

export const userCreate = createAsyncThunk('user/create', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${USERS_ENDPOINT}registration/`, formData);
    console.log('User created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in creating product:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const editUser = createAsyncThunk('user/edit', async ({ formData, id }, thunkAPI) => {
  try {
    const response = await apiClient.patch(`${USERS_ENDPOINT}${id}/`, formData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const userById = createAsyncThunk('user/byId', async (id, thunkAPI) => {
  try {
    const endpoint = `${USERS_ENDPOINT}${id}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
