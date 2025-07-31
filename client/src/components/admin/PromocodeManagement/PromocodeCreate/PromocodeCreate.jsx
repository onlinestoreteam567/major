import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPromocode } from '@redux/admin/promocode/service';
import { errorPromocodeCreate, loadPromocodeCreate, responsePromocodeCreate } from '@redux/admin/selectors';
import { promocodeSchema } from '@validations/admin/promocodeSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PromocodeForm from '../PromocodeForm/PromocodeForm';
import cl from './index.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearPromocodeCreateState } from '@redux/admin/promocode/promocodeCreateSlice';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import useTimedMessage from '@hooks/admin/useTimedMessage';

const PromocodeCreate = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(promocodeSchema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(loadPromocodeCreate);
  const response = useSelector(responsePromocodeCreate);
  const errorPost = useSelector(errorPromocodeCreate);
  const navigate = useNavigate();

  const [successCreateMessage, showSuccessCreateMessage] = useTimedMessage(1500, () => {
    dispatch(clearPromocodeCreateState());
    navigate('/admin/promocodes');
  });

  const onSubmit = (values) => dispatch(createPromocode(values));

  useEffect(() => {
    if (response) {
      showSuccessCreateMessage('Промокод успішно створено!');
    }
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeCreate}>
        <PromocodeForm control={control} register={register} errors={errors} />
        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/promocodes">Відмінити</ReturnButton>
          <LoadingButton
            isLoading={isLoading}
            loadingText="Створення промокоду…"
            shortText="Створити промокод"
            longText="Створити промокод"
          />
        </div>
        {errorPost && <ErrorText error={errorPost} />}
      </form>
      {successCreateMessage && <AdminMessage>{successCreateMessage}</AdminMessage>}
    </>
  );
};
export default PromocodeCreate;
