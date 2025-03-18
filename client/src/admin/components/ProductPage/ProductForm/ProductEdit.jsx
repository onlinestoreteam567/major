import { editProduct } from '../../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '@redux/products/service';
import { errorEditProduct, loadEditProduct, responseEditProduct } from '../../../redux/selectors';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Textarea } from '@components/form-components';
import { productSchema } from '../../../validations/productSchema';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { loadProductId, selectProductId } from '@redux/selectors';
import Spinner from '@components/helpers/Spinner';
import PurposeCategorySelect from './PurposeCategorySelect';
import TypeCategorySelect from './TypeCategorySelect';

const ProductEdit = () => {
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
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
  });

  const isLoadingGet = useSelector(loadProductId);
  const responseGet = useSelector(selectProductId);

  const isLoadingEdit = useSelector(loadEditProduct);
  const responseEdit = useSelector(responseEditProduct);
  const errorEdit = useSelector(errorEditProduct);

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

    dispatch(editProduct({ formData, id }));
  };

  useEffect(() => {
    if (id && responseGet) {
      setValue('article', responseGet.article);
      setValue('available', responseGet.available);
      setValue('is_best_seller', responseGet.is_best_seller);
      setValue('is_new', responseGet.is_new);
      setValue('product_name_uk', responseGet.product_name_uk);
      setValue('product_name_en', responseGet.product_name_en);
      setValue('price', responseGet.price);
      setValue('discount', responseGet.discount);
      setValue('volume_ml', responseGet.volume_ml);
      console.log(responseGet.purpose_category);
      setValue('purpose_category', responseGet.purpose_category);
      setValue('type_category', responseGet.type_category);
      setValue('description_uk', responseGet.description_uk);
      setValue('description_en', responseGet.description_en);
      setValue('ingredients', responseGet.ingredients);
      setValue('application_uk', responseGet.application_uk);
      setValue('application_en', responseGet.application_en);
    }
  }, [responseGet, id, setValue]);

  return (
    <>
      {isLoadingGet ? (
        <Spinner />
      ) : (
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
          <Controller
            control={control}
            name="purpose_category"
            defaultValue={responseGet && responseGet.purpose_category}
            render={({ field: { value, onChange, ...field } }) => (
              <PurposeCategorySelect field={field} value={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="type_category"
            defaultValue={responseGet && responseGet.type_category}
            render={({ field: { value, onChange, ...field } }) => (
              <TypeCategorySelect field={field} onChange={onChange} />
            )}
          />

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
          <button type="submit" disabled={isLoadingEdit}>
            {isLoadingEdit ? 'Зміна...' : 'Змінити'}
          </button>
          {/* Error handling */}
          {errorEdit &&
            Object.keys(errorEdit).map((key) => (
              <div key={key} style={{ color: 'red' }}>
                <strong>{key}:</strong>
                <ul>
                  {Array.isArray(errorEdit[key]) ? (
                    errorEdit[key].map((message, index) => <li key={index}>{message}</li>)
                  ) : (
                    <li>{errorEdit[key]}</li>
                  )}
                </ul>
              </div>
            ))}
          {/* Success response */}
          {responseEdit && <p style={{ color: 'green' }}>Product added successfully!</p>}
        </form>
      )}
      <button onClick={() => console.log(getValues())}>Значення форм</button>
    </>
  );
};

export default ProductEdit;
