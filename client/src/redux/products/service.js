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

export const getProductsByTypes = createAsyncThunk('products/getByTypes', async (ids, thunkAPI) => {
  try {
    const typeParam = Array.isArray(ids) && ids.length > 1 ? ids.map((id) => `type=${id}`).join('&') : `type=${ids}`;

    const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?${typeParam}`);

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

export const getFilteredProducts = createAsyncThunk('products/getFiltered', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const filters = state.filter;

    const params = new URLSearchParams();

    if (typeof filters?.price?.min === 'number' && !isNaN(filters.price.min)) {
      params.append('min_price', filters.price.min.toString());
    }
    if (typeof filters?.price?.max === 'number' && !isNaN(filters.price.max) && filters.price.max > 0) {
      params.append('max_price', filters.price.max.toString());
    }

    if (filters?.category) params.append('category', filters.category);
    if (filters?.type) params.append('type', filters.type);
    if (filters?.status) params.append('status', filters.status);

    const queryString = params.toString();
    const endpoint = `${PRODUCT_LIST_ENDPOINT}${queryString ? `?${queryString}` : ''}`;

    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    console.error('Error fetching filtered products:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return thunkAPI.rejectWithValue(message);
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
  // console.log(id, newReview);
  try {
    const endpoint = `${REVIEW_ENDPOINT}/${id}/`;
    const { data } = await apiClient.post(endpoint, newReview);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
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

export const getSearch = createAsyncThunk('products/getSearch', async (query, thunkAPI) => {
  try {
    const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?search=${query}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByIds = createAsyncThunk('products/getProductsByIds', async (ids, thunkAPI) => {
  try {
    console.log(123);

    const idsString = ids.join(',');
    const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?id=${idsString}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
