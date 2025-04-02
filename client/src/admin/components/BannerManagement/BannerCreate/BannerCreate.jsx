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

const BannerCreate = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    resolver: yupResolver(bannerSchema),
    mode: 'onSubmit',
  });

  const isLoading = useSelector(loadBannerCreate);
  const response = useSelector(responseBannerCreate);
  const errorPost = useSelector(errorBannerCreate);

  const onSubmit = (values) => {
    const formData = new FormData();

    console.log(formData);
    // Handle file uploads if any
    if (values.image && values.image.length > 0) {
      values.image.forEach((file) => {
        formData.append(`image`, file);
      });
    }
    if (values.background_image && values.background_image.length > 0) {
      values.background_image.forEach((file) => {
        formData.append(`background_image`, file);
      });
    }

    // Append other form data
    Object.keys(values).forEach((key) => {
      if (key !== 'background_image' && key !== 'image') {
        let value = values[key];
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      }
    });

    dispatch(createBanner(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.productCreate}>
      <BannerForm register={register} errors={errors} control={control} />
      <LoadingButton isLoading={isLoading} loadingText="Створення..." defaultText="Створити товар" />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      {response && <SuccessMessage>Товар успішно створено!</SuccessMessage>}
      <button type="button" onClick={() => console.log(getValues())}>
        123
      </button>
    </form>
  );
};

export default BannerCreate;
