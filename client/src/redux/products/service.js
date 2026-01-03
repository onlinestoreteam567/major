import apiClient from '@config/api/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';
import productList from '@backend/products_list.json';

const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

export const fetchBestSellers = createAsyncThunk('bests/fetchBestSellers', async (_, thunkAPI) => {
  try {
    const bestSellers = productList.filter((product) => product.is_best_seller === true);
    return bestSellers;

    // const endpoint = `${PRODUCT_LIST_ENDPOINT}/?is_best_seller=true`;
    // const { data } = await apiClient.get(endpoint);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchSets = createAsyncThunk('sets/fetchSets', async (_, thunkAPI) => {
  const setId = 8;
  try {
    const sets = productList.filter((product) => product.type_category === setId);
    return sets;

    // const endpoint = `${PRODUCT_LIST_ENDPOINT}/?type_category=${setId}`;
    // const { data } = await apiClient.get(endpoint);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchProductsAll = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {
    const allProducts = productList;
    return allProducts;

    // const { data } = await apiClient.get(PRODUCT_LIST_ENDPOINT);
    // return data;
  } catch (error) {
    // console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByTypes = createAsyncThunk('products/getByTypes', async (ids, thunkAPI) => {
  try {
    const typeParam = Array.isArray(ids) && ids.length > 1 ? ids.map((id) => `type=${id}`).join('&') : `type=${ids}`;
    const productByType = productList.filter((product) => product.type_category === typeParam);
    return productByType;

    // const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?${typeParam}`);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByCategory = createAsyncThunk('products/getByCategory', async (id, thunkAPI) => {
  try {
    const productByCategory = productList.filter((product) => product.purpose_category.includes(id));
    return productByCategory;

    // const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?purpose_category=${id}`);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByStatus = createAsyncThunk('products/getByStatus', async (params, thunkAPI) => {
  try {
    const productByStatus = productList.filter((product) => product[params] === true);
    return productByStatus;
    // const endpoint = `${PRODUCT_LIST_ENDPOINT}/?${params}=true`;
    // const { data } = await apiClient.get(endpoint);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getFilteredProducts = createAsyncThunk('products/getFiltered', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const filters = state.filter;

    // Починаємо з повного списку і поступово його фільтруємо
    let filteredResults = [...productList];

    // 1. Фільтрація за ціною (враховуючи ціну зі знижкою)
    if (typeof filters?.price?.min === 'number' && !isNaN(filters.price.min)) {
      filteredResults = filteredResults.filter(
        (product) => (product.price_with_discount || product.price) >= filters.price.min
      );
    }

    if (typeof filters?.price?.max === 'number' && !isNaN(filters.price.max) && filters.price.max > 0) {
      filteredResults = filteredResults.filter(
        (product) => (product.price_with_discount || product.price) <= filters.price.max
      );
    }

    // 2. Фільтрація за категорією призначення (purpose_category - масив)
    if (filters?.category) {
      // filters.category може бути як числом, так і рядком, тому приводимо до числа
      const catId = Number(filters.category);
      filteredResults = filteredResults.filter((product) => product.purpose_category.includes(catId));
    }

    // 3. Фільтрація за типом (type_category)
    if (filters?.type) {
      const typeId = Number(filters.type);
      filteredResults = filteredResults.filter((product) => product.type_category === typeId);
    }

    // 4. Фільтрація за статусом (is_new, is_best_seller, is_discount)
    // Якщо filters.status передає назву ключа (напр. 'is_new')
    if (filters?.status) {
      filteredResults = filteredResults.filter((product) => product[filters.status] === true);
    }

    // Повертаємо фінальний відфільтрований масив
    console.log('Filtered Count:', filteredResults.length);
    return filteredResults;
  } catch (error) {
    console.error('Error filtering products:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return thunkAPI.rejectWithValue(message);
  }
});

// *** PRODUCT_ID ***

export const getProductById = createAsyncThunk('products/getById', async (id, thunkAPI) => {
  try {
    const productById = productList.find((product) => product.id === Number(id));
    return productById;

    // const endpoint = `${PRODUCT_LIST_ENDPOINT}/${id}`;
    // const { data } = await apiClient.get(endpoint);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const REVIEW_ENDPOINT = import.meta.env.VITE_REVIEW_ENDPOINT;
export const addReviewById = createAsyncThunk('products/addReview', async ({ id, newReview }, thunkAPI) => {
  try {
    const endpoint = `${REVIEW_ENDPOINT}/${id}/`;
    const { data } = await apiClient.post(endpoint, newReview);
    return data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getFitCategory = createAsyncThunk('products/getFitCategory', async (id, thunkAPI) => {
  try {
    const categoryId = Number(id);

    const filteredProducts = productList.filter(
      (product) => product.purpose_category && product.purpose_category.includes(categoryId)
    );

    return filteredProducts;
  } catch (error) {
    console.error('Error in getFitCategory:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getSearch = createAsyncThunk('products/getSearch', async (query, thunkAPI) => {
  try {
    // 1. Перетворюємо запит у нижній регістр і прибираємо зайві пробіли
    const normalizedQuery = query.toLowerCase().trim();

    // 2. Якщо запит порожній, можна повернути порожній масив або весь список
    if (!normalizedQuery) return [];

    // 3. Фільтруємо за двома полями
    const searchResults = productList.filter((product) => {
      const nameMatch = product.name?.toLowerCase().includes(normalizedQuery);
      const articleMatch = product.article?.toLowerCase().includes(normalizedQuery);

      // Повертаємо true, якщо є збіг хоча б в одному з полів
      return nameMatch || articleMatch;
    });

    return searchResults;

    // const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?search=${query}`);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByCartIds = createAsyncThunk('products/getProductsByCartIds', async (ids, thunkAPI) => {
  try {
    if (!Array.isArray(ids) || ids.length === 0) {
      return [];
    }

    // 2. Фільтруємо productList
    // Залишаємо товар, якщо його id є у списку ids, який ми отримали
    const productsInCart = productList.filter((product) => ids.includes(product.id));

    // 3. (Опціонально) Сортуємо результати так, щоб вони йшли в тому ж порядку, що й ids у кошику
    const sortedProducts = ids.map((id) => productsInCart.find((p) => p.id === id)).filter((p) => p !== undefined); // Видаляємо null, якщо якогось id не знайшлося в базі

    return sortedProducts;

    // const idsString = ids.join(',');
    // const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?id=${idsString}`);
    // return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsByViewedProductsIds = createAsyncThunk(
  'products/getProductsByViewedProductsIds',
  async (ids, thunkAPI) => {
    try {
      // 1. Перевірка на порожній список
      if (!Array.isArray(ids) || ids.length === 0) {
        return [];
      }

      // 2. Отримуємо дані товарів, зберігаючи порядок з масиву ids
      // Ми проходимо по кожному ID з вашого списку (який зазвичай відсортований за часом)
      // і шукаємо відповідний об'єкт у базі.
      const viewedProducts = ids
        .map((id) => productList.find((product) => product.id === Number(id)))
        .filter((product) => product !== undefined); // Видаляємо null, якщо товар не знайдено

      // 3. Повертаємо масив об'єктів
      return viewedProducts;

      // const idsString = ids.join(',');
      // const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/?id=${idsString}`);
      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductById = createAsyncThunk('products/deleteById', async (id, thunkAPI) => {
  try {
    const endpoint = `${PRODUCT_LIST_ENDPOINT}/${id}/`;
    const response = await apiClient.delete(endpoint);
    return response.status;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
