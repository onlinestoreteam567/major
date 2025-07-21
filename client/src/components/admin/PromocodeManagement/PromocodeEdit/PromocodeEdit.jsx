import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useId';
import { editPromocode, getPromocodeById } from '@redux/admin/promocode/service';
import {
  errorPromocodeEdit,
  loadPromocodeEdit,
  responsePromocodeById,
  responsePromocodeEdit,
} from '@redux/admin/selectors';
import { promocodeSchema } from '@validations/admin/promocodeSchema';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PromocodeForm from '../PromocodeForm/PromocodeForm';
import cl from './index.module.scss';
import { useNavigate } from 'react-router-dom';

const PromocodeEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(promocodeSchema),
    mode: 'onSubmit',
  });

  const id = useIdFromUrl();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPromocodeById(id));
    }
  }, [dispatch, id]);

  const errorEdit = useSelector(errorPromocodeEdit);
  const isLoadingEdit = useSelector(loadPromocodeEdit);
  const responseEdit = useSelector(responsePromocodeEdit);
  const responseGet = useSelector(responsePromocodeById);

  const navigate = useNavigate();

  useEffect(() => {
    if (id && responseGet) {
      setValue('code', responseGet.code);
      setValue('discount_percent', responseGet.discount_percent);
      setValue('started_at', responseGet.started_at.slice(0, 10));
      setValue('expires_at', responseGet.expires_at.slice(0, 10));
    }
  }, [responseGet, id, setValue]);

  const onSubmit = (formData) => dispatch(editPromocode({ formData, id }));

  useEffect(() => {
    if (responseEdit) {
      const timeout = setTimeout(() => {
        navigate('/admin/promocodes');
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [responseEdit, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeEdit}>
        <PromocodeForm register={register} errors={errors} />
        <ReturnButton to="/admin/promocodes">Відмінити</ReturnButton>
        <LoadingButton
          isLoading={isLoadingEdit}
          loadingText="Редагування промокоду…"
          shortText="Редагувати промокод"
          longText="Редагувати промокод"
        />
        {errorEdit && <ErrorText error={errorEdit} />}
        {responseEdit && <SuccessMessage>Промокод успішно змінено!</SuccessMessage>}
      </form>
    </>
  );
};
export default PromocodeEdit;
