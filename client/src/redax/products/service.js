import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

export const fetchBestSellers = createAsyncThunk('bestSellers/fetchBestSellers', async (_, { rejectWithValue }) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/?is_best_seller=true`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id, { rejectWithValue }) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/${id}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchProductList = createAsyncThunk('productList/fetchProductList', async (_, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get(PRODUCT_LIST_ENDPOINT);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
