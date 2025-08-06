import ErrorText from '@components/admin/ErrorText/ErrorText';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPartner } from '@redux/partners/service';
import { errorPartnerCreate, loadPartnerCreate, selectPartnerCreate } from '@redux/selectors';
import { partnerSchema } from '@validations/admin/partnerSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PartnersForm from '../PartnersForm/PartnersForm';
import cl from './index.module.scss';

const PartnerCreate = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(partnerSchema),
    mode: 'onSubmit',
  });

  const isLoading = useSelector(loadPartnerCreate);
  const response = useSelector(selectPartnerCreate);
  const errorPost = useSelector(errorPartnerCreate);

  const onSubmit = (values) => dispatch(createPartner(values));

  return (
    <>
      {/* <ReturnButton to="/admin/partners" /> */}
      <form onSubmit={handleSubmit(onSubmit)} className={cl.partnerCreate}>
        <PartnersForm register={register} errors={errors} />
        {/* <LoadingButton isLoading={isLoading} loadingText="Створення..." defaultText="Створити партнера" /> */}
        {errorPost && <ErrorText error={errorPost}></ErrorText>}
        {response && <SuccessMessage>Партнера успішно створено!</SuccessMessage>}
      </form>
    </>
  );
};

export default PartnerCreate;
