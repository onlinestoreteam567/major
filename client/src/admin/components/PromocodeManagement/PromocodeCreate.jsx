import { errorPromocodeCreate, loadPromocodeCreate, responsePromocodeCreate } from '../../redux/selectors';
import { createPromocode } from '../../redux/service';
import { Input } from '@components/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { promocodeSchema } from '../../validations/promocodeSchema';
import ErrorText from '../ErrorText/ErrorText';

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
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <Input labelText="Промокод:" name="code" register={register} errors={errors} />
      <Input type="number" labelText="Знижка:" name="discount_percent" register={register} errors={errors} />
      <input type="date" name="expires_at" {...register('expires_at')} />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Створення промокоду...' : 'Створити промокод'}
      </button>
      {errorPost && <ErrorText error={errorPost} />}
      {response && <p style={{ color: 'green' }}>Промокод усішно створено!</p>}
    </form>
  );
};
export default PromocodeCreate;
