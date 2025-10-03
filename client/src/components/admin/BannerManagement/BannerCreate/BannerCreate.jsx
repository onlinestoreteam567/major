import ErrorText from '@components/admin/ErrorText/ErrorText';
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
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';
import { fetchProductsAll } from '@redux/products/service';
import { useEffect } from 'react';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { useNavigate } from 'react-router-dom';
import { clearCreateBannerState } from '@redux/banner/bannerCreateSlice';

const BannerCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
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

  useEffect(() => {
    dispatch(fetchProductsAll());
  }, [dispatch]);

  useEffect(() => {
    if (response) {
      dispatch(
        setAdminMessage({
          message: 'Банер успішно створено',
          onClear: () => dispatch(clearCreateBannerState()),
        })
      );
      navigate('/admin/banners');
    }
  }, [response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.bannerCreate}>
      <BannerForm errors={errors} control={control} />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
      <AdminFormActions
        to="/admin/banners"
        isLoading={isLoading}
        errors={errors}
        shortText={'Створити'}
        longText={'Створити банер'}
      />
    </form>
  );
};

export default BannerCreate;
