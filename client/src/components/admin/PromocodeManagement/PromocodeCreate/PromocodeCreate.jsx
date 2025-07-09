import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPromocode } from '@redux/admin/promocode/service';
import { errorPromocodeCreate, loadPromocodeCreate, responsePromocodeCreate } from '@redux/admin/selectors';
import { promocodeSchema } from '@validations/admin/promocodeSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PromocodeForm from '../PromocodeForm';
import cl from './index.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearPromocodeCreateState } from '@redux/admin/promocode/promocodeCreateSlice';

const PromocodeCreate = () => {
  const {
    register,
    handleSubmit,
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

  const onSubmit = (values) => dispatch(createPromocode(values));

  useEffect(() => {
    dispatch(clearPromocodeCreateState());
  }, [dispatch]);

  useEffect(() => {
    if (response) {
      const timeout = setTimeout(() => {
        navigate('/admin/promocodes');
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [response, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeCreate}>
        <PromocodeForm register={register} errors={errors} />
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
        {response && <SuccessMessage>Промокод успішно створено!</SuccessMessage>}
      </form>
    </>
  );
};
export default PromocodeCreate;
