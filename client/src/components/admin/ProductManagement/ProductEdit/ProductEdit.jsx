import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import Spinner from '@components/helpers/Spinner/Spinner';
import { editProduct } from '@redux/admin/product/service';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { useDispatch } from 'react-redux';
import ProductForm from '../ProductForm/ProductForm';
import { useEditProductForm } from './helpers/useEditProductForm';
import { useFetchProductData } from './helpers/useFetchProductData';
import cl from './index.module.scss';

const ProductEdit = () => {
  const { isLoadingGet, responseGet, id, isLoadingEdit, responseEdit, errorEdit } = useFetchProductData();
  const { register, handleSubmit, errors, control, getValues, setValue } = useEditProductForm(responseGet);

  const dispatch = useDispatch();
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
          {responseEdit && <SuccessMessage>Товар успішно відредаговано!</SuccessMessage>}
          <div className={cl.btnWrapper}>
            <ReturnButton to="/admin/products" />
            <LoadingButton isLoading={isLoadingEdit} shortText="Зберегти" longText="Зберегти зміни" />
          </div>
        </form>
      )}
    </>
  );
};

export default ProductEdit;
