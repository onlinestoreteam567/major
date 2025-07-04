import { errorPromocodeCreate, loadPromocodeCreate, responsePromocodeCreate } from '../../../redux/selectors';
import { createPromocode } from '../../../redux/service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { promocodeSchema } from '../../../validations/promocodeSchema';
import ErrorText from '../../ErrorText/ErrorText';
import PromocodeForm from '../PromocodeForm/PromocodeForm';
import LoadingButton from '../../LoadingButton/LoadingButton';
import cl from './index.module.scss';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import ReturnButton from '../../ReturnButton/ReturnButton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearPromocodeCreateState } from '../../../redux/promocodeCreateSlice';

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
            shortText="Створити"
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
