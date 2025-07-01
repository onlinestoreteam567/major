import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorCreateTypeCategory,
  loadCreateTypeCategory,
  responseCreateTypeCategory,
} from '../../../../redux/selectors';
import { createTypeCategory } from '../../../../redux/service';
import { typeSchema } from '../../../../validations/typeSchema';
import ErrorText from '../../../ErrorText/ErrorText';
import LoadingButton from '../../../LoadingButton/LoadingButton';
import SuccessMessage from '../../../SuccessMessage/SuccessMessage';
import TypeForm from '../TypeForm';
import cl from './index.module.scss';
import ReturnButton from '../../../ReturnButton/ReturnButton';

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
