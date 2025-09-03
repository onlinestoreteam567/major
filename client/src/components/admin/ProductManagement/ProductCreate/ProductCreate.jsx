import { createProduct } from '@redux/admin/product/service';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '@redux/selectors';
import ErrorText from '@components/admin/ErrorText/ErrorText';
import ProductForm from '../ProductForm/ProductForm';
import cl from './index.module.scss';
import { useProductForm } from './helpers/useProductForm';
import { useEffect } from 'react';
import { clearCreateProductState } from '@redux/admin/product/createProductSlice';
import { useNavigate } from 'react-router-dom';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

const ProductCreate = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreateProduct);
  const response = useSelector(responseCreateProduct);
  const errorPost = useSelector(errorCreateProduct);
  const { register, handleSubmit, errors, control, resetImagesTrigger } = useProductForm(response);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'upload_images');
    appendFormData(formData, values, ['upload_images']);
    dispatch(createProduct(formData));
  };

  useEffect(() => {
    if (response) {
      dispatch(
        setAdminMessage({
          message: 'Товар успішно створено',
          onClear: () => dispatch(clearCreateProductState()),
        })
      );
      navigate('/admin/products');
    }
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
        <ProductForm register={register} errors={errors} control={control} resetImagesTrigger={resetImagesTrigger} />

        <AdminFormActions
          to="/admin/products"
          isLoading={isLoading}
          errors={errors}
          shortText={'Створити'}
          longText={'Створити товар'}
        />

        {errorPost && <ErrorText error={errorPost} />}
      </form>
    </>
  );
};

export default ProductCreate;
