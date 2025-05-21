import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ErrorText from '../../ErrorText/ErrorText';
import LoadingButton from '../../LoadingButton/LoadingButton';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import cl from './index.module.scss';
import ReturnButton from '../../ReturnButton/ReturnButton';
import { partnerSchema } from '../../../validations/partnerSchema';
import { errorPartnerCreate, loadPartnerCreate, selectPartnerCreate } from '@redux/selectors';
import { createPartner } from '@redux/partners/service';
import PartnersForm from '../PartnersForm/PartnersForm';

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
      <ReturnButton to="/admin/partners" />
      <form onSubmit={handleSubmit(onSubmit)} className={cl.partnerCreate}>
        <PartnersForm register={register} errors={errors} />
        <LoadingButton isLoading={isLoading} loadingText="Створення..." defaultText="Створити партнера" />
        {errorPost && <ErrorText error={errorPost}></ErrorText>}
        {response && <SuccessMessage>Партнера успішно створено!</SuccessMessage>}
      </form>
    </>
  );
};

export default PartnerCreate;
