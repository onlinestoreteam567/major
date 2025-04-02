const setFormValues = (setValue, responseGet) => {
  setValue('left', responseGet.left);
  setValue('product_id', responseGet.product?.id);
  setValue('image', responseGet.image_url);
  setValue('background_image', responseGet.background_image_url);
};

export default setFormValues;
