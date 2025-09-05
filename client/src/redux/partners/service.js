import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PARTNERS_ENDPOINT = import.meta.env.VITE_PARTNERS_ENDPOINT;

export const fetchPartners = createAsyncThunk('partners/getPartners', async (_, thunkAPI) => {
  try {
    const { data } = await apiClient.get(PARTNERS_ENDPOINT);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deletePartner = createAsyncThunk('partner/delete', async (id, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${PARTNERS_ENDPOINT}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error in deleting partner:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const createPartner = createAsyncThunk('partner/create', async (values, thunkAPI) => {
  try {
    const response = await apiClient.post(PARTNERS_ENDPOINT, values);
    console.log('Partner created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in creating partner:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const getPartnerById = createAsyncThunk('partner/getById', async (id, thunkAPI) => {
  try {
    const endpoint = `${PARTNERS_ENDPOINT}${id}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editPartner = createAsyncThunk('partner/edit', async ({ formData, id }, thunkAPI) => {
  try {
    const response = await apiClient.patch(`${PARTNERS_ENDPOINT}${id}/`, formData);
    console.log('edited:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in editing :', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
