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
import { useEffect } from 'react';

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
    if (price && discount) {
      const discounted = price - (price * discount) / 100;
      setValue('discounted_price', Math.round(discounted));
    } else if (price) {
      setValue('discounted_price', price);
    } else {
      setValue('discounted_price', '');
    }
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

  useEffect(() => {
    if (response) {
      reset();
    }
  }, [response, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
        <ProductForm register={register} errors={errors} control={control} />
        {/* <button type="button" onClick={() => console.log(getValues())}>
          getValues
        </button> */}

        <div className={cl.btn_wrapper}>
          <ReturnButton to="/admin/products" />
          <LoadingButton isLoading={isLoading} />
        </div>

        {errorPost && <ErrorText error={errorPost}></ErrorText>}
        {response && <SuccessMessage>Товар успішно створено!</SuccessMessage>}
      </form>
    </>
  );
};

export default ProductCreate;
