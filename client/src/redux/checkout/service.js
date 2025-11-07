import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PAYMENTS_CREATE_INVOICE_ENDPOINT = import.meta.env.VITE_PAYMENTS_CREATE_INVOICE_ENDPOINT;
const PAYMENTS_STATUS_ENDPOINT = import.meta.env.VITE_PAYMENTS_STATUS_ENDPOINT;

export const createInvoice = createAsyncThunk('payment/createInvoice', async (formData, thunkAPI) => {
  try {
    const response = await apiClient.post(`${PAYMENTS_CREATE_INVOICE_ENDPOINT}`, formData);
    console.log('Invoice created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in creating invoice:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const checkInvoiceStatus = createAsyncThunk('payment/checkInvoiceStatus', async (id, thunkAPI) => {
  try {
    const endpoint = `${PAYMENTS_STATUS_ENDPOINT}${id}`;
    const { data } = await apiClient.get(endpoint);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
