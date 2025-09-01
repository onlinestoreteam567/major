import ErrorText from '@components/admin/ErrorText/ErrorText';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPartner } from '@redux/partners/service';
import { errorPartnerCreate, loadPartnerCreate, selectPartnerCreate } from '@redux/selectors';
import { partnerSchema } from '@validations/admin/partnerSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PartnersForm from '../PartnersForm/PartnersForm';
import cl from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { clearPartnerCreateState } from '@redux/partners/partnerCreateSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

const PartnerCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(partnerSchema),
    mode: 'onSubmit',
    defaultValues: {
      longitude: '',
      latitude: '',
    },
  });

  const isLoading = useSelector(loadPartnerCreate);
  const response = useSelector(selectPartnerCreate);
  const errorPost = useSelector(errorPartnerCreate);

  const onSubmit = (values) => dispatch(createPartner(values));

  useEffect(() => {
    if (response) {
      dispatch(
        setAdminMessage({
          message: 'Партнера успішно створено',
          onClear: () => dispatch(clearPartnerCreateState()),
        })
      );
      navigate('/admin/partners');
    }
  }, [response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.partnerCreate}>
      <PartnersForm watch={watch} register={register} errors={errors} getValues={getValues} />
      <AdminFormActions
        to="/admin/partners"
        isLoading={isLoading}
        errors={errors}
        shortText={'Створити'}
        longText={'Створити партнера'}
      />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
    </form>
  );
};

export default PartnerCreate;
