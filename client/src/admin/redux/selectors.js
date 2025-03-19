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

export const loadPurposeById = (state) => state.purposeCategoryById.isLoading;
export const responsePurposeById = (state) => state.purposeCategoryById.categoryId;
export const errorPurposeById = (state) => state.purposeCategoryById.error;

export const loadPurposeEdit = (state) => state.purposeEdit.isLoading;
export const responsePurposeEdit = (state) => state.purposeEdit.response;
export const errorPurposeEdit = (state) => state.purposeEdit.error;

export const loadPurposeDelete = (state) => state.purposeDelete.isLoading;
export const responsePurposeDelete = (state) => state.purposeDelete.response;
export const errorPurposeDelete = (state) => state.purposeDelete.error;

export const loadCreateTypeCategory = (state) => state.createTypeCategory.isLoading;
export const responseCreateTypeCategory = (state) => state.createTypeCategory.response;
export const errorCreateTypeCategory = (state) => state.createTypeCategory.error;

export const loadTypeById = (state) => state.typeById.isLoading;
export const responseTypeById = (state) => state.typeById.categoryId;
export const errorTypeById = (state) => state.typeById.error;

export const loadTypeEdit = (state) => state.typeEdit.isLoading;
export const responseTypeEdit = (state) => state.typeEdit.response;
export const errorTypeEdit = (state) => state.typeEdit.error;

export const loadTypeDelete = (state) => state.typeDelete.isLoading;
export const responseTypeDelete = (state) => state.typeDelete.response;
export const errorTypeDelete = (state) => state.typeDelete.error;
