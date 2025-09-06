import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CONTACTS_ENDPOINT = import.meta.env.VITE_CONTACTS_ENDPOINT;

export const contactsEdit = createAsyncThunk('contacts/edit', async ({ formData, id }, thunkAPI) => {
  try {
    console.log('id inside ' + id);

    const response = await apiClient.patch(`${CONTACTS_ENDPOINT}${id}/`, formData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
