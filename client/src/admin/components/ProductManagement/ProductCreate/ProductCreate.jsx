import { yupResolver } from '@hookform/resolvers/yup';
import appendFormData from '@utils/appendFormData';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '../../../redux/selectors';
import { createProduct } from '../../../redux/service';
import { productSchema } from '../../../validations/productSchema';
import ErrorText from '../../ErrorText/ErrorText';
import LoadingButton from '../../LoadingButton/LoadingButton';
import ProductForm from '../ProductForm/ProductForm';
import cl from './index.module.scss';
import handleImageUpload from '@utils/handleImageUpload';
import ReturnButton from '../../ReturnButton/ReturnButton';
import { useEffect, useState } from 'react';
import calculateDiscountedPrice from './calculateDiscountedPrice';

const ProductCreate = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
    shouldUnregister: false,
  });

  const price = watch('price');
  const discount = watch('discount');
  useEffect(() => {
    calculateDiscountedPrice(price, discount, setValue);
  }, [price, discount, setValue]);

  const isLoading = useSelector(loadCreateProduct);
  const response = useSelector(responseCreateProduct);
  const errorPost = useSelector(errorCreateProduct);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'upload_images');
    appendFormData(formData, values, ['upload_images']);
    dispatch(createProduct(formData));
  };

  const [resetImagesTrigger, setResetImagesTrigger] = useState(0);
  useEffect(() => {
    if (response) {
      reset();
      setResetImagesTrigger((prev) => prev + 1);
    }
  }, [response, reset, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
        <ProductForm register={register} errors={errors} control={control} resetImagesTrigger={resetImagesTrigger} />

        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/products" />
          <LoadingButton isLoading={isLoading} />
        </div>

        {errorPost && <ErrorText error={errorPost}></ErrorText>}
      </form>
    </>
  );
};

export default ProductCreate;
