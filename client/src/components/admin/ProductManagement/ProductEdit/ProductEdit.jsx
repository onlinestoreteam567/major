import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import Spinner from '@components/helpers/Spinner/Spinner';
import { editProduct } from '@redux/admin/product/service';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { useDispatch } from 'react-redux';
import ProductForm from '../ProductForm/ProductForm';
import { useEditProductForm } from './helpers/useEditProductForm';
import { useFetchProductData } from './helpers/useFetchProductData';
import cl from './index.module.scss';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { useEffect } from 'react';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import { clearEditProductState } from '@redux/admin/product/editProductSlice';

const ProductEdit = () => {
  const dispatch = useDispatch();
  const { isLoadingGet, responseGet, id, isLoadingEdit, responseEdit, errorEdit } = useFetchProductData();
  const { register, handleSubmit, errors, control, getValues, setValue } = useEditProductForm(responseGet);
  const [successEditMessage, showSuccessEditMessage] = useTimedMessage(3000, () => dispatch(clearEditProductState()));

  useEffect(() => {
    if (responseEdit) showSuccessEditMessage('Товар успішно відредаговано');
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
          <div className={cl.btnWrapper}>
            <ReturnButton to="/admin/products" />
            <LoadingButton isLoading={isLoadingEdit} shortText="Зберегти" longText="Зберегти зміни" />
          </div>
        </form>
      )}
      {successEditMessage && <AdminMessage>{successEditMessage}</AdminMessage>}
    </>
  );
};

export default ProductEdit;
