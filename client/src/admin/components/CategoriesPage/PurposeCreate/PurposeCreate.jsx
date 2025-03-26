import {
  errorCreatePurposeCategory,
  loadCreatePurposeCategory,
  responseCreatePurposeCategory,
} from '../../../redux/selectors';
import { createPurposeCategory } from '../../../redux/service';
import { categorySchema } from '../../../validations/categorySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import ErrorText from '../../ErrorText/ErrorText';
import LoadingButton from '../../LoadingButton/LoadingButton';
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
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      let value = values[key];
      if (Array.isArray(value)) {
        value.forEach((val) => formData.append(key, val));
      } else {
        formData.append(key, value);
      }
    });

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
