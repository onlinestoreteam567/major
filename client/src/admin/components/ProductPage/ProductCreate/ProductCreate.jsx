import { createProduct } from '../../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '../../../redux/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../../../validations/productSchema';
import ErrorText from '../../ErrorText/ErrorText';
import ProductForm from '../ProductForm/ProductForm';
import cl from './index.module.scss';
import LoadingButton from '../../LoadingButton/LoadingButton';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';

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
    <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
      <ProductForm register={register} errors={errors} control={control} />
      <LoadingButton isLoading={isLoading} loadingText="Створення..." defaultText="Створити товар" />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      {response && <SuccessMessage>Товар успішно створено!</SuccessMessage>}
    </form>
  );
};

export default ProductCreate;
