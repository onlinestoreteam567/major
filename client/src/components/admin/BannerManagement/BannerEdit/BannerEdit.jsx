import ErrorText from '@components/admin/ErrorText/ErrorText';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import Spinner from '@UI/Spinner/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useIdFromUrl';
import { editBanner, getBannerById } from '@redux/banner/service';
import { errorBannerEdit, loadBannerById, responseBannerById, responseBannerEdit } from '@redux/selectors';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { bannerSchema } from '@validations/admin/bannerSchema';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import BannerForm from '../BannerForm/BannerForm';
import cl from './index.module.scss';

const BannerEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(bannerSchema),
    mode: 'onSubmit',
  });

  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const isLoadingGet = useSelector(loadBannerById);
  const responseGet = useSelector(responseBannerById);
  const responseEdit = useSelector(responseBannerEdit);
  const errorEdit = useSelector(errorBannerEdit);

  // Fetch product data for editing
  useEffect(() => {
    dispatch(getBannerById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (responseGet) {
      setValue('left', responseGet.left);
      setValue('product_id', responseGet.product?.id);
      setValue('image', responseGet.image_url);
      setValue('background_image', responseGet.background_image_url);
    }
  }, [responseGet, setValue]);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'image');
    formData = handleImageUpload(formData, values, 'background_image');
    appendFormData(formData, values, ['background_image', 'image']);

    dispatch(editBanner({ formData, id }));
  };

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form className={cl.bannerEdit} onSubmit={handleSubmit(onSubmit)}>
      <BannerForm register={register} errors={errors} control={control} />
      {/* {responseGet && <UploadedImage labelText="Завантажене зображення товару:" image={responseGet.image_url} />} */}
      {/* {responseGet && (
        <UploadedImage labelText="Завантажене зображення фону слайду:" image={responseGet.background_image_url} />
      )} */}
      {errorEdit && <ErrorText error={errorEdit} />}
      {responseEdit && <SuccessMessage>Слайд успішно відредаговано!</SuccessMessage>}
    </form>
  );
};

export default BannerEdit;
