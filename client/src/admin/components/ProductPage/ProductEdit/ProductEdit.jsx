import { editProduct } from '../../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '@redux/products/service';
import { errorEditProduct, loadEditProduct, responseEditProduct } from '../../../redux/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../../../validations/productSchema';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { loadProductId, selectProductId } from '@redux/selectors';
import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import ErrorText from '../../ErrorText/ErrorText';
import ProductForm from '../ProductForm/ProductForm';
import UploadedImages from './UploadedImages.jsx/UploadedImages';

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
          <ProductForm register={register} errors={errors} control={control} />

          {responseGet && responseGet.images && responseGet.images.length > 0 && (
            <UploadedImages images={responseGet.images} setValue={setValue} getValues={getValues} />
          )}

          <button type="submit" disabled={isLoadingEdit}>
            {isLoadingEdit ? 'Зміна...' : 'Змінити'}
          </button>
          {/* Error handling */}
          {errorEdit && <ErrorText error={errorEdit} />}

          {/* Success response */}
          {responseEdit && <p style={{ color: 'green' }}>Product added successfully!</p>}
        </form>
      )}
      <button onClick={() => console.log(getValues())}>Значення форм</button>
    </>
  );
};

export default ProductEdit;
