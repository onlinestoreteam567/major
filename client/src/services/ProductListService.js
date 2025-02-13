import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

if (!PRODUCT_LIST_ENDPOINT) {
  console.error('VITE_PRODUCT_LIST_ENDPOINT is not defined! Check the configuration in the .env file.');
}

export const fetchProductList = createAsyncThunk('productList/fetchProductList', async (_, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get(PRODUCT_LIST_ENDPOINT);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchProductListPurposeCategory = createAsyncThunk(
  'productList/fetchProductListPurposeCategory',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?purpose_category=${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSwitch = createAsyncThunk('filters/fetchSwitch', async (SwitchType, { rejectWithValue }) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/?${SwitchType}=true`;
    const { data } = await apiClient.get(endpoint);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchProductListTypes = createAsyncThunk(
  'productList/fetchProductListTypes',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?type_category=${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ProductListService = {
  // async getProductList() {
  //   try {
  //     const { data } = await apiClient.get(PRODUCT_LIST_ENDPOINT);
  //     return data;
  //   } catch (error) {
  //     handleApiError(error);
  //   }
  // },
  // async createProductList(typeName) {
  //   // Validate type name before making the request
  //   if (!typeName) {
  //     console.error('Invalid type data');
  //     throw new Error('Type name is required');
  //   }
  //   try {
  //     return await apiClient.post(`${PRODUCT_LIST_ENDPOINT}/`, { name: typeName });
  //   } catch (error) {
  //     handleApiError(error);
  //   }
  // },
  // async getProductListById(typeId) {
  //   // Validate type ID before making the request
  //   if (!typeId) {
  //     console.error('Type ID is required');
  //     throw new Error('Invalid type ID');
  //   }
  //   try {
  //     const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`);
  //     return data;
  //   } catch (error) {
  //     handleApiError(error); // logs and rethrows the error
  //   }
  // },
  // async updateProductListById(typeId, updatedType) {
  //   // Validate type ID and updated data before making the request
  //   if (!typeId || !updatedType) {
  //     console.error('Invalid type data');
  //     throw new Error('Type ID and updated data are required');
  //   }
  //   try {
  //     await apiClient.put(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`, updatedType);
  //   } catch (error) {
  //     handleApiError(error);
  //   }
  // },
  // async patchProductListById(typeId, partialUpdate) {
  //   // Validate type ID and partial update data before making the request
  //   if (!typeId || !partialUpdate) {
  //     console.error('Invalid type data');
  //     throw new Error('Type ID and partial data are required');
  //   }
  //   try {
  //     await apiClient.patch(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`, partialUpdate);
  //   } catch (error) {
  //     handleApiError(error);
  //   }
  // },
  // async deleteProductListById(typeId) {
  //   // Validate type ID before making the request
  //   if (!typeId) {
  //     console.error('Type ID is required');
  //     throw new Error('Invalid type ID');
  //   }
  //   try {
  //     await apiClient.delete(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`);
  //   } catch (error) {
  //     handleApiError(error);
  //   }
  // },
};

export default ProductListService;
