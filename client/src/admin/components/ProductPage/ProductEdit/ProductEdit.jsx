import { editProduct } from '../../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '@redux/products/service';
import { errorEditProduct, loadEditProduct, responseEditProduct } from '../../../redux/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../../../validations/productSchema';
import { useEffect } from 'react';
import { loadProductId, selectProductId } from '@redux/selectors';
import Spinner from '@components/helpers/Spinner';
import ErrorText from '../../ErrorText/ErrorText';
import ProductForm from '../ProductForm/ProductForm';
import UploadedImages from './UploadedImages.jsx/UploadedImages';
import handleFormData from './helpers/handleFormData';
import setFormValues from './helpers/setFormValues';
import useIdFromUrl from '@hooks/useId';

const ProductEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
  });

  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const isLoadingGet = useSelector(loadProductId);
  const responseGet = useSelector(selectProductId);
  const isLoadingEdit = useSelector(loadEditProduct);
  const responseEdit = useSelector(responseEditProduct);
  const errorEdit = useSelector(errorEditProduct);

  // Fetch product data for editing
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (responseGet) {
      setFormValues(setValue, responseGet);
    }
  }, [responseGet, setValue]);

  const onSubmit = (values) => {
    const formData = handleFormData(values);
    dispatch(editProduct({ formData, id }));
  };

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <ProductForm register={register} errors={errors} control={control} />
      {responseGet && responseGet.images && responseGet.images.length > 0 && (
        <UploadedImages images={responseGet.images} setValue={setValue} getValues={getValues} />
      )}
      <button type="submit" disabled={isLoadingEdit}>
        {isLoadingEdit ? 'Зміна...' : 'Змінити'}
      </button>
      {errorEdit && <ErrorText error={errorEdit} />}
      {responseEdit && <p style={{ color: 'green' }}>Товар успішно відредаговано!</p>}
    </form>
  );
};

export default ProductEdit;
