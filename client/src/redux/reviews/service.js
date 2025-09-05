import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const REVIEW_ENDPOINT = import.meta.env.VITE_REVIEW_ENDPOINT;

export const reviewsGetAll = createAsyncThunk('reviews/getAll', async (_, thunkAPI) => {
  try {
    const endpoint = `${REVIEW_ENDPOINT}/`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const reviewsGetByStatus = createAsyncThunk('reviews/getByStatus', async (status, thunkAPI) => {
  try {
    const endpoint = `${REVIEW_ENDPOINT}/?is_approved=${status}`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const reviewsByProductId = createAsyncThunk('reviews/reviewsByProductId', async (id, _, thunkAPI) => {
  try {
    const endpoint = `${REVIEW_ENDPOINT}/${id}/`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteReview = createAsyncThunk('review/delete', async ({ productId, reviewId }, thunkAPI) => {
  try {
    const response = await apiClient.delete(`${REVIEW_ENDPOINT}/${productId}/${reviewId}/`);
    return response.data;
  } catch (error) {
    console.error('Error in deleting review:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const approveReview = createAsyncThunk('review/approve', async ({ productId, reviewId }, thunkAPI) => {
  try {
    const response = await apiClient.post(`${REVIEW_ENDPOINT}/${productId}/${reviewId}/approve/`);
    return response.data;
  } catch (error) {
    console.error('Error in approving review:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const reviewsGetLatest = createAsyncThunk('reviews/getLatest', async (_, thunkAPI) => {
  try {
    const endpoint = `${REVIEW_ENDPOINT}/?is_approved=true`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
