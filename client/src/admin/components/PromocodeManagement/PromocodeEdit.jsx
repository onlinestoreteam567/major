import Spinner from '@components/helpers/Spinner';
import {
  errorPromocodeEdit,
  loadPromocodeById,
  loadPromocodeEdit,
  responsePromocodeById,
  responsePromocodeEdit,
} from '../../redux/selectors';
import { editPromocode, getPromocodeById } from '../../redux/service';
import { Input } from '@components/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useIdFromUrl from '@hooks/useId';
import { promocodeSchema } from '../../validations/promocodeSchema';
import ErrorText from '../ErrorText/ErrorText';

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

  const isLoadingGet = useSelector(loadPromocodeById);
  const responseGet = useSelector(responsePromocodeById);

  useEffect(() => {
    if (id && responseGet) {
      setValue('code', responseGet.code);
      setValue('discount_percent', responseGet.discount_percent);
      setValue('expires_at', responseGet.expires_at.slice(0, 10));
    }
  }, [responseGet, id, setValue]);

  const onSubmit = (formData) => {
    dispatch(editPromocode({ formData, id }));
  };

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <Input labelText="Промокод:" name="code" register={register} errors={errors} />
      <Input type="number" labelText="Знижка:" name="discount_percent" register={register} errors={errors} />
      <input type="date" name="expires_at" {...register('expires_at')} />

      <button type="submit" disabled={isLoadingEdit}>
        {isLoadingEdit ? 'Редагування категорії за типом...' : 'Редагувати категорію за типом'}
      </button>
      {errorEdit && <ErrorText error={errorEdit} />}
      {responseEdit && <p style={{ color: 'green' }}>Product added successfully!</p>}
    </form>
  );
};
export default PromocodeEdit;
