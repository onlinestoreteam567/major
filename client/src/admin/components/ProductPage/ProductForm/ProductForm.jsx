import { createProduct } from '../../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '@redux/products/service';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '../../../redux/selectors';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Textarea } from '@components/form-components';
import { productSchema } from '../../../validations/productSchema';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import PurposeCategorySelect from './PurposeCategorySelect';
import TypeCategorySelect from './TypeCategorySelect';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { loadProductId, selectProductId } from '@redux/selectors';

const ProductForm = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop(); // Extract ID from URL

  const dispatch = useDispatch();

  // Fetch product data for editing
  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue, // You can use this to set the form values if needed
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
  });

  // Loading, Response, and Error from Redux
  const isLoading = useSelector(loadCreateProduct);
  const response = useSelector(responseCreateProduct);
  const errorPost = useSelector(errorCreateProduct);

  const isLoadingP = useSelector(loadProductId);
  const responseP = useSelector(selectProductId);

  const onSubmit = (values) => {
    const formData = new FormData();

    // Handle file uploads if any
    if (values.upload_images && values.upload_images.length > 0) {
      values.upload_images.forEach((file) => {
        formData.append(`upload_images`, file);
      });
    }

    // Append other form data
    Object.keys(values).forEach((key) => {
      if (key !== 'upload_images') {
        let value = values[key];
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      }
    });

    // Dispatch create product action
    dispatch(createProduct(formData));
  };

  // Pre-fill form with fetched product data (if editing an existing product)
  useEffect(() => {
    if (id && responseP) {
      setValue('article', responseP.article);
      setValue('available', responseP.available);
      setValue('is_best_seller', responseP.is_best_seller);
      setValue('is_new', responseP.is_new);
      setValue('product_name_uk', responseP.product_name_uk);
      setValue('product_name_en', responseP.product_name_en);
      setValue('price', responseP.price);
      setValue('discount', responseP.discount);
      setValue('volume_ml', responseP.volume_ml);
      // setValue('purpose_category', responseP.purpose_category);
      // setValue('type_category', responseP.type_category);
      setValue('description_uk', responseP.description_uk);
      setValue('description_en', responseP.description_en);
      setValue('ingredients', responseP.ingredients);
      setValue('application_uk', responseP.application_uk);
      setValue('application_en', responseP.application_en);
    }
  }, [responseP, id, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <Input labelText="Article:" name="article" register={register} errors={errors} />
      <CheckBox labelText="В наявності" name="available" register={register} />
      <CheckBox labelText="Хіт продажу" name="is_best_seller" register={register} />
      <CheckBox labelText="Новинка" name="is_new" register={register} />
      <Input labelText="Product Name (UK):" name="product_name_uk" register={register} errors={errors} />
      <Input labelText="Product Name (EN):" name="product_name_en" register={register} errors={errors} />
      <Input type="number" labelText="Price:" name="price" register={register} errors={errors} />
      <Input type="number" labelText="Discount:" name="discount" register={register} errors={errors} />
      <Input type="number" labelText="Volume (ml):" name="volume_ml" register={register} errors={errors} />
      <PurposeCategorySelect register={register} errors={errors} />
      <TypeCategorySelect register={register} errors={errors} />
      <Textarea labelText="Description (UK):" name="description_uk" register={register} errors={errors} />
      <Textarea labelText="Description (EN):" name="description_en" register={register} errors={errors} />
      <Textarea labelText="Ingredients:" name="ingredients" register={register} errors={errors} />
      <Textarea labelText="Application (UK):" name="application_uk" register={register} errors={errors} />
      <Textarea labelText="Application (EN):" name="application_en" register={register} errors={errors} />
      <Controller
        control={control}
        name="upload_images"
        render={({ field: { value, onChange, ...field } }) => (
          <label>
            Picture
            <input
              {...field}
              multiple
              type="file"
              id="upload_images"
              onChange={(event) => {
                const files = Array.from(event.target.files);
                onChange(files);
              }}
            />
          </label>
        )}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Product'}
      </button>

      {/* Error handling */}
      {errorPost &&
        Object.keys(errorPost).map((key) => (
          <div key={key} style={{ color: 'red' }}>
            <strong>{key}:</strong>
            <ul>
              {Array.isArray(errorPost[key]) ? (
                errorPost[key].map((message, index) => <li key={index}>{message}</li>)
              ) : (
                <li>{errorPost[key]}</li>
              )}
            </ul>
          </div>
        ))}

      {/* Success response */}
      {response && <p style={{ color: 'green' }}>Product added successfully!</p>}
    </form>
  );
};

export default ProductForm;
