import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

// *** PARAMS ***

export const fetchBestSellers = createAsyncThunk('bests/fetchBestSellers', async (_, thunkAPI) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/?is_best_seller=true`;
    const { data } = await apiClient.get(endpoint);
    // console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const setId = 8;

export const fetchSets = createAsyncThunk('sets/fetchSets', async (_, thunkAPI) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/?type_category=${setId}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// **** PRODUCTS ***

export const fetchProductsAll = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await apiClient.get(PRODUCT_LIST_ENDPOINT);
    return data;
  } catch (error) {
    // console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByTypes = createAsyncThunk('products/getByTypes', async (id, thunkAPI) => {
  try {
    const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?type_category=${id}`);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByCategory = createAsyncThunk('products/getByCategory', async (id, thunkAPI) => {
  try {
    const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?purpose_category=${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByStatus = createAsyncThunk('products/getByStatus', async (params, thunkAPI) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/?${params}=true`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByPrice = createAsyncThunk('products/getByPrice', async (min, max, thunkAPI) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/?price_min=${min}&price_max=${max}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// *** PRODUCT_ID ***

export const getProductById = createAsyncThunk('products/getById', async (id, thunkAPI) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/${id}`;
    const { data } = await apiClient.get(endpoint);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const REVIEW_ENDPOINT = import.meta.env.VITE_REVIEW_ENDPOINT;

export const addReviewById = createAsyncThunk('products/addReview', async ({ id, newReview }, thunkAPI) => {
  console.log(id, newReview);
  try {
    const endpoint = `${REVIEW_ENDPOINT}/${id}/reviews`;
    const { data } = await apiClient.post(endpoint, newReview);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getFitCategory = createAsyncThunk('products/getFitCategory', async (id, thunkAPI) => {
  try {
    const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?purpose_category=${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
