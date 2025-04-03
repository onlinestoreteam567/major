import Spinner from '@components/helpers/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useId';
import { getProductById } from '@redux/products/service';
import { loadProductId, selectProductId } from '@redux/selectors';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { errorEditProduct, loadEditProduct, responseEditProduct } from '../../../redux/selectors';
import { editProduct } from '../../../redux/service';
import { productSchema } from '../../../validations/productSchema';
import ErrorText from '../../ErrorText/ErrorText';
import LoadingButton from '../../LoadingButton/LoadingButton';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import UploadedImages from '../../UploadedImages/UploadedImages';
import ProductForm from '../ProductForm/ProductForm';
import cl from './index.module.scss';
import setFormValues from '@utils/setFormValue';

const formValues = [
  'article',
  'available',
  'is_best_seller',
  'is_new',
  'product_name_uk',
  'product_name_en',
  'price',
  'discount',
  'volume_ml',
  'purpose_category',
  'type_category',
  'description_uk',
  'description_en',
  'ingredients',
  'application_uk',
  'application_en',
];

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

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    responseGet && setFormValues(setValue, responseGet, formValues);
  }, [responseGet, setValue]);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'upload_images');
    appendFormData(formData, values, ['upload_images']);

    dispatch(editProduct({ formData, id }));
  };

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form className={cl.productEdit} onSubmit={handleSubmit(onSubmit)}>
      <ProductForm register={register} errors={errors} control={control} />
      {responseGet && responseGet.images && responseGet.images.length > 0 && (
        <UploadedImages images={responseGet.images} setValue={setValue} getValues={getValues} />
      )}
      <LoadingButton isLoading={isLoadingEdit} loadingText="Зміна..." defaultText="Змінити" />
      {errorEdit && <ErrorText error={errorEdit} />}
      {responseEdit && <SuccessMessage>Товар успішно відредаговано!</SuccessMessage>}
    </form>
  );
};

export default ProductEdit;
