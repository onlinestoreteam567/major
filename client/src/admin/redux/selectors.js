export const loadAuth = (state) => state.auth.isLoading;
export const selectAccessToken = (state) => state.auth.accessToken;

export const loadCreateProduct = (state) => state.createProduct.isLoading;
export const responseCreateProduct = (state) => state.createProduct.response;
export const errorCreateProduct = (state) => state.createProduct.error;

export const loadEditProduct = (state) => state.editProduct.isLoading;
export const responseEditProduct = (state) => state.editProduct.response;
export const errorEditProduct = (state) => state.editProduct.error;

export const loadCreatePurposeCategory = (state) => state.createPurposeCategory.isLoading;
export const responseCreatePurposeCategory = (state) => state.createPurposeCategory.response;
export const errorCreatePurposeCategory = (state) => state.createPurposeCategory.error;

export const loadCreateTypeCategory = (state) => state.createTypeCategory.isLoading;
export const responseCreateTypeCategory = (state) => state.createTypeCategory.response;
export const errorCreateTypeCategory = (state) => state.createTypeCategory.error;
