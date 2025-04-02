import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorText from '../../ErrorText/ErrorText';
import cl from './index.module.scss';
import LoadingButton from '../../LoadingButton/LoadingButton';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import { bannerSchema } from '../../../validations/bannerSchema';
import { errorBannerCreate, loadBannerCreate, responseBannerCreate } from '@redux/selectors';
import { createBanner } from '@redux/banner/service';
import BannerForm from '../BannerForm/BannerForm';
import handleImageUpload from '@utils/handleImageUpload';
import appendFormData from '@utils/appendFormData';

const BannerCreate = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(bannerSchema),
    mode: 'onSubmit',
  });

  const isLoading = useSelector(loadBannerCreate);
  const response = useSelector(responseBannerCreate);
  const errorPost = useSelector(errorBannerCreate);

  const onSubmit = (values) => {
    let formData = new FormData();

    formData = handleImageUpload(formData, values, 'image');
    formData = handleImageUpload(formData, values, 'background_image');
    appendFormData(formData, values, ['background_image', 'image']);

    dispatch(createBanner(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
      <BannerForm register={register} errors={errors} control={control} />
      <LoadingButton isLoading={isLoading} loadingText="Створення..." defaultText="Створити товар" />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      {response && <SuccessMessage>Товар успішно створено!</SuccessMessage>}
    </form>
  );
};

export default BannerCreate;
