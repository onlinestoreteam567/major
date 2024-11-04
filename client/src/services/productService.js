import apiClient from '@config/apiClient'; // adjust the path as needed
import { handleApiError } from '@utils/handleApiError';

const ProductService = {
  async getCategory() {
    try {
      const { data } = await apiClient.get(`/products/product_purpose_categories/`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async createCategory(categoryData) {
    try {
      const { data } = await apiClient.post(`/products/product_purpose_categories`, categoryData);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async getCategoryById(id) {
    try {
      const { data } = await apiClient.get(`/products/product_purpose_categories/${id}`);
      return data;
    } catch (error) {
      handleApiError(error); // logs and rethrows the error
    }
  },

  async updateCategoryById(id, categoryData) {
    try {
      const { data } = await apiClient.put(`/products/product_purpose_categories/${id}`, categoryData);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async patchCategoryById(id, partialData) {
    try {
      const { data } = await apiClient.patch(`/products/product_purpose_categories/${id}`, partialData);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async deleteCategoryById(id) {
    try {
      const { data } = await apiClient.delete(`/products/product_purpose_categories/${id}`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default ProductService;
