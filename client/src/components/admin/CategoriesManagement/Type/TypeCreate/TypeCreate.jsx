import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorCreateTypeCategory, loadCreateTypeCategory, responseCreateTypeCategory } from '@redux/admin/selectors';
import { createTypeCategory } from '@redux/admin/type/service';
import { typeSchema } from '@validations/admin/typeSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TypeForm from '../TypeForm';
import cl from './index.module.scss';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { useEffect } from 'react';
import { clearCreateTypeState } from '@redux/admin/type/createTypeCategorySlice';

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
  const [successCreateMessage, showSuccessCreateMessage] = useTimedMessage(3000, () =>
    dispatch(clearCreateTypeState())
  );

  const onSubmit = (values) => dispatch(createTypeCategory(values));

  useEffect(() => {
    if (response) showSuccessCreateMessage('Категорія успішно створена');
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.typeCreate}>
        <TypeForm register={register} errors={errors} />
        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/categories" />
          <LoadingButton isLoading={isLoading} shortText="Створити" longText="Створити категорію" />
        </div>
        {errorPost && <ErrorText error={errorPost} />}
      </form>
      {successCreateMessage && <AdminMessage>{successCreateMessage}</AdminMessage>}
    </>
  );
};
export default TypeCreate;
