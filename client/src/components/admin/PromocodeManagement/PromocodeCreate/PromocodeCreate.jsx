import ErrorText from '@components/admin/ErrorText/ErrorText';
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
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

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

  const onSubmit = (values) => dispatch(createPromocode(values));

  useEffect(() => {
    if (response) {
      dispatch(
        setAdminMessage({
          message: 'Промокод успішно створено',
          onClear: () => dispatch(clearPromocodeCreateState()),
        })
      );
      navigate('/admin/promocodes');
    }
  }, [response]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.promocodeCreate}>
        <PromocodeForm control={control} register={register} errors={errors} />

        <AdminFormActions
          to="/admin/promocodes"
          isLoading={isLoading}
          errors={errors}
          shortText={'Створити'}
          longText={'Створити промокод'}
        />

        {errorPost && <ErrorText error={errorPost} />}
      </form>
    </>
  );
};
export default PromocodeCreate;
