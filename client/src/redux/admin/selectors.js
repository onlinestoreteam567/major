export const loadAuth = (state) => state.auth.isLoading;
export const selectAccessToken = (state) => state.auth.accessToken;
export const errorAuth = (state) => state.auth.error;

export const loadCreateProduct = (state) => state.createProduct.isLoading;
export const responseCreateProduct = (state) => state.createProduct.response;
export const errorCreateProduct = (state) => state.createProduct.error;

export const loadEditProduct = (state) => state.editProduct.isLoading;
export const responseEditProduct = (state) => state.editProduct.response;
export const errorEditProduct = (state) => state.editProduct.error;

export const loadProductDelete = (state) => state.productDelete.isLoading;
export const responseProductDelete = (state) => state.productDelete.response;
export const errorProductDelete = (state) => state.productDelete.error;

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

export const loadPromocodeList = (state) => state.promocodeList.isLoading;
export const responsePromocodeList = (state) => state.promocodeList.response;
export const errorPromocodeList = (state) => state.promocodeList.error;
export const isFetchedAllPromocodes = (state) => state.promocodeList.isFetchedAllPromocodes;

export const loadPromocodeCreate = (state) => state.promocodeCreate.isLoading;
export const responsePromocodeCreate = (state) => state.promocodeCreate.response;
export const errorPromocodeCreate = (state) => state.promocodeCreate.error;

export const loadPromocodeById = (state) => state.promocodeById.isLoading;
export const responsePromocodeById = (state) => state.promocodeById.response;
export const errorPromocodeById = (state) => state.promocodeById.error;

export const loadPromocodeEdit = (state) => state.promocodeEdit.isLoading;
export const responsePromocodeEdit = (state) => state.promocodeEdit.response;
export const errorPromocodeEdit = (state) => state.promocodeEdit.error;

export const loadPromocodeDelete = (state) => state.promocodeDelete.isLoading;
export const responsePromocodeDelete = (state) => state.promocodeDelete.response;
export const errorPromocodeDelete = (state) => state.promocodeDelete.error;

export const productSearchValue = (state) => state.adminProductSearch.value;
export const reviewsSearchValue = (state) => state.adminReviewsSearch.value;
