import { yupResolver } from '@hookform/resolvers/yup';
import appendFormData from '@utils/appendFormData';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '../../../redux/selectors';
import { createProduct } from '../../../redux/service';
import { productSchema } from '../../../validations/productSchema';
import ErrorText from '../../ErrorText/ErrorText';
import LoadingButton from '../../LoadingButton/LoadingButton';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import ProductForm from '../ProductForm/ProductForm';
import cl from './index.module.scss';
import handleImageUpload from '@utils/handleImageUpload';
import ReturnButton from '../../ReturnButton/ReturnButton';

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
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'upload_images');
    appendFormData(formData, values, ['upload_images']);

    dispatch(createProduct(formData));
  };

  return (
    <>
      <ReturnButton to="/admin/products" />
      <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
        <ProductForm register={register} errors={errors} control={control} />
        <LoadingButton isLoading={isLoading} loadingText="Створення..." defaultText="Створити товар" />
        {errorPost && <ErrorText error={errorPost}></ErrorText>}
        {response && <SuccessMessage>Товар успішно створено!</SuccessMessage>}
      </form>
    </>
  );
};

export default ProductCreate;
