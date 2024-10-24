import apiClient from '../config/apiClient';

export const createOrder = async (orderData) => {
  try {
    const response = await apiClient.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Failed to create order:', error);
    throw error;
  }
};

export const fetchOrderById = async (id) => {
  try {
    const response = await apiClient.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch order with ID ${id}:`, error);
    throw error;
  }
};

// Additional functions for fetching order lists, updating, and deleting orders
