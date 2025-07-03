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

  const onSubmit = (values) => dispatch(createPromocode(values));

  return (
    <>
      <ReturnButton to="/admin/promocodes" />
      <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeCreate}>
        <PromocodeForm register={register} errors={errors} />
        <LoadingButton isLoading={isLoading} loadingText="Створення промокоду..." defaultText="Створити промокод" />
        {errorPost && <ErrorText error={errorPost} />}
        {response && <SuccessMessage>Промокод успішно створено!</SuccessMessage>}
      </form>
    </>
  );
};
export default PromocodeCreate;
