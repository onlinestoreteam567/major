export const loadAuth = (state) => state.auth.isLoading;
export const selectAccessToken = (state) => state.auth.accessToken;

export const loadCteateProduct = (state) => state.createProduct.isLoading;
export const responseCreateProduct = (state) => state.createProduct.response;
export const errorCreateProduct = (state) => state.createProduct.error;

export const loadCreatePurposeCategory = (state) => state.createPurposeCategory.isLoading;
export const responseCreatePurposeCategory = (state) => state.createPurposeCategory.response;
export const errorCreatePurposeCategory = (state) => state.createPurposeCategory.error;
