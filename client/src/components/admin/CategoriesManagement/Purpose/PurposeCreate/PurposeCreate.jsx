import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPurposeCategory } from '@redux/admin/purpose/service';
import {
  errorCreatePurposeCategory,
  loadCreatePurposeCategory,
  responseCreatePurposeCategory,
} from '@redux/admin/selectors';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { categorySchema } from '@validations/admin/categorySchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PurposeForm from '../PurposeForm';
import cl from './index.module.scss';

const PurposeCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(categorySchema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreatePurposeCategory);
  const response = useSelector(responseCreatePurposeCategory);
  const errorPost = useSelector(errorCreatePurposeCategory);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'image');
    appendFormData(formData, values, ['image']);

    dispatch(createPurposeCategory(formData));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.purposeCreate}>
      <PurposeForm register={register} errors={errors} control={control} />
      <div className={cl.btnWrapper}>
        <ReturnButton to="/admin/categories" />
        <LoadingButton isLoading={isLoading} shortText="Створити" longText="Створити категорію" />
      </div>
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      {response && <SuccessMessage>Категорія за призначенням успішно створена</SuccessMessage>}
    </form>
  );
};
export default PurposeCreate;
