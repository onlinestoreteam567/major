import ErrorText from '@components/admin/ErrorText/ErrorText';
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
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';
import { fetchProductsAll } from '@redux/products/service';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { clearBannerEditState } from '@redux/banner/bannerEditSlice';
import { useNavigate } from 'react-router-dom';
import { clearBannerByIdState } from '@redux/banner/bannerByIdSlice';

const BannerEdit = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(bannerSchema),
    mode: 'onSubmit',
  });

  const id = useIdFromUrl();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadingGet = useSelector(loadBannerById);
  const responseGet = useSelector(responseBannerById);
  const responseEdit = useSelector(responseBannerEdit);
  const errorEdit = useSelector(errorBannerEdit);

  useEffect(() => {
    dispatch(getBannerById(id));
    dispatch(fetchProductsAll());
  }, [dispatch, id]);

  useEffect(() => {
    if (responseGet) {
      setValue('left', responseGet.left);
      setValue('product_id', responseGet.product?.id);
      setValue('image', responseGet.image_url || '/images/placeholder.webp');
      setValue('background_image', responseGet.background_image_url);
    }
  }, [responseGet, setValue]);

  useEffect(() => {
    if (responseEdit) {
      dispatch(
        setAdminMessage({
          message: 'Банер успішно відредагований',
          onClear: () => {
            dispatch(clearBannerEditState());
            dispatch(clearBannerByIdState());
          },
        })
      );
      navigate('/admin/banners');
    }
  }, [responseEdit]);

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
      <BannerForm errors={errors} control={control} watch={watch} />
      {errorEdit && <ErrorText error={errorEdit} />}
      <AdminFormActions
        to="/admin/banners"
        isLoading={responseEdit}
        errors={errors}
        shortText={'Зберегти'}
        longText={'Зберегти банер'}
      />
    </form>
  );
};

export default BannerEdit;
