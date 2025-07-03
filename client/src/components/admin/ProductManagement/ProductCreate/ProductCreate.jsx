import { createProduct } from '@redux/admin/product/service';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '@redux/admin/selectors';
import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import ProductForm from '../ProductForm/ProductForm';
import cl from './index.module.scss';
import { useProductForm } from './helpers/useProductForm';

const ProductCreate = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreateProduct);
  const response = useSelector(responseCreateProduct);
  const errorPost = useSelector(errorCreateProduct);
  const { register, handleSubmit, errors, control, resetImagesTrigger, getValues } = useProductForm(response);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'upload_images');
    appendFormData(formData, values, ['upload_images']);
    dispatch(createProduct(formData));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
        <ProductForm register={register} errors={errors} control={control} resetImagesTrigger={resetImagesTrigger} />

        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/products" />
          <LoadingButton isLoading={isLoading} shortText="Створити" longText="Створити товар" />
        </div>

        {errorPost && <ErrorText error={errorPost} />}

        <button type="button" onClick={() => console.log(getValues())}>
          getValues
        </button>
      </form>
    </>
  );
};

export default ProductCreate;
