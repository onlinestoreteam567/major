import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import {
  errorBannerEdit,
  loadBannerById,
  loadBannerEdit,
  responseBannerById,
  responseBannerEdit,
} from '@redux/selectors';
import Spinner from '@components/helpers/Spinner';
import ErrorText from '../../ErrorText/ErrorText';
import setFormValues from './helpers/setFormValues';
import useIdFromUrl from '@hooks/useId';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import LoadingButton from '../../LoadingButton/LoadingButton';
import cl from './index.module.scss';
import { bannerSchema } from '../../../validations/bannerSchema';
import { editBanner, getBannerById } from '@redux/banner/service';
import handleImageUpload from '@utils/handleImageUpload';
import appendFormData from '@utils/appendFormData';
import BannerForm from '../BannerForm/BannerForm';
import UploadedImage from '../../UploadedImage/UploadedImage';

const BannerEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(bannerSchema),
    mode: 'onSubmit',
  });

  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const isLoadingGet = useSelector(loadBannerById);
  const responseGet = useSelector(responseBannerById);
  const isLoadingEdit = useSelector(loadBannerEdit);
  const responseEdit = useSelector(responseBannerEdit);
  const errorEdit = useSelector(errorBannerEdit);

  // Fetch product data for editing
  useEffect(() => {
    dispatch(getBannerById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (responseGet) setFormValues(setValue, responseGet);
  }, [responseGet, setValue]);

  const onSubmit = (values) => {
    let formData = new FormData();

    formData = handleImageUpload(formData, values, 'image_url');
    formData = handleImageUpload(formData, values, 'background_image_url');

    appendFormData(formData, values, ['background_image', 'image']);
    dispatch(editBanner({ formData, id }));
  };

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form className={cl.bannerEdit} onSubmit={handleSubmit(onSubmit)}>
      <BannerForm register={register} errors={errors} control={control} />
      {responseGet && responseGet.image_url && (
        <UploadedImage
          labelText="Завантажене зображення товару:"
          image={responseGet.image_url}
          setValue={setValue}
          getValues={getValues}
        />
      )}
      {responseGet && responseGet.background_image_url && (
        <UploadedImage
          labelText="Завантажене зображення фону слайду:"
          image={responseGet.background_image_url}
          setValue={setValue}
          getValues={getValues}
        />
      )}
      <LoadingButton isLoading={isLoadingEdit} loadingText="Зміна..." defaultText="Змінити" />
      {errorEdit && <ErrorText error={errorEdit} />}
      {responseEdit && <SuccessMessage>Слайд успішно відредаговано!</SuccessMessage>}
      <button type="button" onClick={() => console.log(getValues())}>
        д
      </button>
    </form>
  );
};

export default BannerEdit;
