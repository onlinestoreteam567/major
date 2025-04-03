const setFormValues = (setValue, responseGet) => {
  setValue('article', responseGet.article);
  setValue('available', responseGet.available);
  setValue('is_best_seller', responseGet.is_best_seller);
  setValue('is_new', responseGet.is_new);
  setValue('product_name_uk', responseGet.product_name_uk);
  setValue('product_name_en', responseGet.product_name_en);
  setValue('price', responseGet.price);
  setValue('discount', responseGet.discount);
  setValue('volume_ml', responseGet.volume_ml);
  setValue('purpose_category', responseGet.purpose_category);
  setValue('type_category', responseGet.type_category);
  setValue('description_uk', responseGet.description_uk);
  setValue('description_en', responseGet.description_en);
  setValue('ingredients', responseGet.ingredients);
  setValue('application_uk', responseGet.application_uk);
  setValue('application_en', responseGet.application_en);
  setValue('upload_images', responseGet.images);
};

export default setFormValues;
