import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPartner } from '@redux/partners/service';
import { errorPartnerCreate, loadPartnerCreate, selectPartnerCreate } from '@redux/selectors';
import { partnerSchema } from '@validations/admin/partnerSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PartnersForm from '../PartnersForm/PartnersForm';
import cl from './index.module.scss';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';

const PartnerCreate = () => {
  const dispatch = useDispatch();

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.partnerCreate}>
        <PartnersForm watch={watch} register={register} errors={errors} getValues={getValues} />

        {errorPost && <ErrorText error={errorPost}></ErrorText>}
        {response && <SuccessMessage>Партнера успішно створено!</SuccessMessage>}
        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/partners" />
          <LoadingButton
            disabled={Object.keys(errors).length > 0}
            isLoading={isLoading}
            shortText="Створити"
            longText="Створити партнера"
          />
        </div>
      </form>
    </>
  );
};

export default PartnerCreate;
