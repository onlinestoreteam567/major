import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorCreateTypeCategory, loadCreateTypeCategory, responseCreateTypeCategory } from '@redux/admin/selectors';
import { createTypeCategory } from '@redux/admin/type/service';
import { typeSchema } from '@validations/admin/typeSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TypeForm from '../TypeForm';
import cl from './index.module.scss';

const TypeCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(typeSchema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreateTypeCategory);
  const response = useSelector(responseCreateTypeCategory);
  const errorPost = useSelector(errorCreateTypeCategory);

  const onSubmit = (values) => dispatch(createTypeCategory(values));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.typeCreate}>
      <TypeForm register={register} errors={errors} />
      <div className={cl.btnWrapper}>
        <ReturnButton to="/admin/categories" />
        <LoadingButton isLoading={isLoading} shortText="Створити" longText="Створити категорію" />
      </div>
      {errorPost && <ErrorText error={errorPost} />}
      {response && <SuccessMessage>Категорія за типом успішно створена!</SuccessMessage>}
    </form>
  );
};
export default TypeCreate;
