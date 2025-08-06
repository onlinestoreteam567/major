import ErrorText from '@components/admin/ErrorText/ErrorText';
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
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { clearPromocodeEditState } from '@redux/admin/promocode/promocodeEditSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

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
      dispatch(
        setAdminMessage({
          message: 'Промокод успішно змінено',
          onClear: () => dispatch(clearPromocodeEditState()),
        })
      );
      navigate('/admin/promocodes');
    }
  }, [responseEdit]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeEdit}>
        <PromocodeForm control={control} register={register} errors={errors} />

        <AdminFormActions
          to="/admin/promocodes"
          isLoading={isLoadingEdit}
          errors={errors}
          shortText={'Зберегти'}
          longText={'Зберегти промокод'}
        />

        {errorEdit && <ErrorText error={errorEdit} />}
      </form>
    </>
  );
};
export default PromocodeEdit;
