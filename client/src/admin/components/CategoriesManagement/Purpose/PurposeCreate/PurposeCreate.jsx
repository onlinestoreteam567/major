import { yupResolver } from '@hookform/resolvers/yup';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorCreatePurposeCategory,
  loadCreatePurposeCategory,
  responseCreatePurposeCategory,
} from '../../../../redux/selectors';
import { createPurposeCategory } from '../../../../redux/service';
import { categorySchema } from '../../../../validations/categorySchema';
import ErrorText from '../../../ErrorText/ErrorText';
import LoadingButton from '../../../LoadingButton/LoadingButton';
import SuccessMessage from '../../../SuccessMessage/SuccessMessage';
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
      <LoadingButton
        isLoading={isLoading}
        loadingText="Створення категорії за призначенням..."
        defaultText="Створити категорію за призначенням"
      />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      {response && <SuccessMessage>Категорія за призначенням успішно створена</SuccessMessage>}
    </form>
  );
};
export default PurposeCreate;
