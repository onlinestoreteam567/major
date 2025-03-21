import { createProduct } from '../../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '../../../redux/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../../../validations/productSchema';
import ErrorText from '../../ErrorText/ErrorText';
import ProductForm from './ProductForm';

const ProductCreate = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
  });

  const isLoading = useSelector(loadCreateProduct);
  const response = useSelector(responseCreateProduct);
  const errorPost = useSelector(errorCreateProduct);

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

    dispatch(createProduct(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <ProductForm register={register} errors={errors} control={control} />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Product'}
      </button>
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      {response && <p style={{ color: 'green' }}>Успішно створено товар!</p>}
    </form>
  );
};

export default ProductCreate;
