import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
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
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import useTimedMessage from '@hooks/admin/useTimedMessage';

const PromocodeEdit = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(promocodeSchema),
    mode: 'onSubmit',
  });

  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [successEditMessage, showSuccessEditMessage] = useTimedMessage(1500, () => {
    navigate('/admin/promocodes');
  });

  useEffect(() => {
    if (id) {
      dispatch(getPromocodeById(id));
    }
  }, [dispatch, id]);

  const errorEdit = useSelector(errorPromocodeEdit);
  const isLoadingEdit = useSelector(loadPromocodeEdit);
  const responseEdit = useSelector(responsePromocodeEdit);
  const responseGet = useSelector(responsePromocodeById);

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
      showSuccessEditMessage('Промокод успішно змінено!');
    }
  }, [responseEdit]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeEdit}>
        <PromocodeForm control={control} register={register} errors={errors} />
        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/promocodes">Відмінити</ReturnButton>
          <LoadingButton
            isLoading={isLoadingEdit}
            loadingText="Редагування промокоду…"
            shortText="Редагувати промокод"
            longText="Редагувати промокод"
          />
        </div>
        {errorEdit && <ErrorText error={errorEdit} />}
      </form>
      {successEditMessage && <AdminMessage>{successEditMessage}</AdminMessage>}
    </>
  );
};
export default PromocodeEdit;
