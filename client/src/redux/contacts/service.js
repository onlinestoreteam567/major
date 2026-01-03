// import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsList from '@backend/contacts.json';

// const CONTACTS_ENDPOINT = import.meta.env.VITE_CONTACTS_ENDPOINT;

export const fetchContacts = createAsyncThunk('contacts/getPartners', async (_, thunkAPI) => {
  try {
    return contactsList;
    // const { data } = await apiClient.get(CONTACTS_ENDPOINT);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
