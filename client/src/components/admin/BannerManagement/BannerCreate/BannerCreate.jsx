import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { createBanner } from '@redux/banner/service';
import { errorBannerCreate, loadBannerCreate, responseBannerCreate } from '@redux/selectors';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { bannerSchema } from '@validations/admin/bannerSchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import BannerForm from '../BannerForm/BannerForm';
import cl from './index.module.scss';

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
    <form onSubmit={handleSubmit(onSubmit)} className={cl.bannerCreate}>
      <BannerForm register={register} errors={errors} control={control} />
      <LoadingButton isLoading={isLoading} loadingText="Створення..." defaultText="Створити слайд" />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      {response && <SuccessMessage>Слайд успішно створено!</SuccessMessage>}
    </form>
  );
};

export default BannerCreate;
