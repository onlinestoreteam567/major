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
import { useEffect } from 'react';
import { clearCreateTypeState } from '@redux/admin/type/createTypeCategorySlice';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { useNavigate } from 'react-router-dom';

const TypeCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(typeSchema),
    mode: 'onSubmit',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreateTypeCategory);
  const response = useSelector(responseCreateTypeCategory);
  const errorPost = useSelector(errorCreateTypeCategory);

  const onSubmit = (values) => dispatch(createTypeCategory(values));

  useEffect(() => {
    if (response) {
      dispatch(
        setAdminMessage({
          message: 'Категорія успішно створена',
          onClear: () => dispatch(clearCreateTypeState()),
        })
      );
      navigate('/admin/categories');
    }
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.typeCreate}>
        <TypeForm register={register} errors={errors} />
        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/categories" />
          <LoadingButton
            disabled={Object.keys(errors).length > 0}
            isLoading={isLoading}
            shortText="Створити"
            longText="Створити категорію"
          />
        </div>
        {errorPost && <ErrorText error={errorPost} />}
      </form>
    </>
  );
};
export default TypeCreate;
