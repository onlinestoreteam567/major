import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const REVIEW_ENDPOINT = import.meta.env.VITE_REVIEW_ENDPOINT;

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

export const rejectReview = createAsyncThunk('review/reject', async ({ productId, reviewId }, thunkAPI) => {
  try {
    const response = await apiClient.post(`${REVIEW_ENDPOINT}/${productId}/${reviewId}/reject/`);
    return response.data;
  } catch (error) {
    console.error('Error in rejecting review:', error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
