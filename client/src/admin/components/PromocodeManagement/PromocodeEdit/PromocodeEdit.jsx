import Spinner from '@components/helpers/Spinner/Spinner';
import {
  errorPromocodeEdit,
  loadPromocodeById,
  loadPromocodeEdit,
  responsePromocodeById,
  responsePromocodeEdit,
} from '../../../redux/selectors';
import { editPromocode, getPromocodeById } from '../../../redux/service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useIdFromUrl from '@hooks/useId';
import { promocodeSchema } from '../../../validations/promocodeSchema';
import ErrorText from '../../ErrorText/ErrorText';
import LoadingButton from '../../LoadingButton/LoadingButton';
import PromocodeForm from '../PromocodeForm';
import cl from './index.module.scss';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import ReturnButton from '../../ReturnButton/ReturnButton';

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
      setValue('started_at', responseGet.started_at.slice(0, 10));
      setValue('expires_at', responseGet.expires_at.slice(0, 10));
    }
  }, [responseGet, id, setValue]);

  const onSubmit = (formData) => dispatch(editPromocode({ formData, id }));

  return (
    <>
      <ReturnButton />
      {isLoadingGet ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeEdit}>
          <PromocodeForm register={register} errors={errors} />
          <LoadingButton
            isLoading={isLoadingEdit}
            loadingText="Редагування категорії за типом..."
            defaultText="Редагувати категорію за типом"
          />
          {errorEdit && <ErrorText error={errorEdit} />}
          {responseEdit && <SuccessMessage>Промокод успішно змінено!</SuccessMessage>}
        </form>
      )}
    </>
  );
};
export default PromocodeEdit;
