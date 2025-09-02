import ErrorText from '@components/admin/ErrorText/ErrorText';
import Spinner from '@UI/Spinner/Spinner';
import { editProduct } from '@redux/admin/product/service';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { useDispatch } from 'react-redux';
import ProductForm from '../ProductForm/ProductForm';
import { useEditProductForm } from './helpers/useEditProductForm';
import { useFetchProductData } from './helpers/useFetchProductData';
import cl from './index.module.scss';
import { useEffect } from 'react';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { useNavigate } from 'react-router-dom';
import { clearEditProductState } from '@redux/admin/product/editProductSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

const ProductEdit = () => {
  const dispatch = useDispatch();
  const { isLoadingGet, responseGet, id, isLoadingEdit, responseEdit, errorEdit } = useFetchProductData();
  const { register, handleSubmit, errors, control, getValues, setValue } = useEditProductForm(responseGet);
  const navigate = useNavigate();

  useEffect(() => {
    if (responseEdit) {
      dispatch(
        setAdminMessage({
          message: 'Товар успішно відрегадовано',
          onClear: () => dispatch(clearEditProductState()),
        })
      );
      navigate('/admin/products');
    }
  }, [responseEdit]);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'upload_images');
    appendFormData(formData, values, ['upload_images']);

    dispatch(editProduct({ formData, id }));
  };

  return (
    <>
      {isLoadingGet ? (
        <Spinner />
      ) : (
        <form className={cl.productEdit} onSubmit={handleSubmit(onSubmit)}>
          <ProductForm
            uploadedImages={responseGet.images}
            register={register}
            errors={errors}
            control={control}
            setValue={setValue}
            getValues={getValues}
          />
          {errorEdit && <ErrorText error={errorEdit} />}
          <AdminFormActions
            to="/admin/products"
            isLoading={isLoadingEdit}
            errors={errors}
            shortText={'Зберегти'}
            longText={'Зберегти товар'}
          />
        </form>
      )}
    </>
  );
};

export default ProductEdit;
