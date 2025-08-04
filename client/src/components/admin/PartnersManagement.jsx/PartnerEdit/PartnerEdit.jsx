import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import Spinner from '@components/helpers/Spinner/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useId';
import { editPartner, getPartnerById } from '@redux/partners/service';
import {
  errorPartnerEdit,
  loadPartnerById,
  loadPartnerEdit,
  responsePartnerById,
  responsePartnerEdit,
} from '@redux/selectors';
import setFormValues from '@utils/setFormValue';
import { partnerSchema } from '@validations/admin/partnerSchema';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PartnersForm from '../PartnersForm/PartnersForm';
import cl from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { clearPartnerEditState } from '@redux/partners/partnerEditSlice';

const formValues = [
  'name_uk',
  'name_en',
  'addres_uk',
  'addres_en',
  'work_schedule_weekdays',
  'work_schedule_weekends',
  'google_maps_link',
  'longitude',
  'latitude',
];

const PartnerEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(partnerSchema),
    mode: 'onSubmit',
  });
  const navigate = useNavigate();
  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const errorEdit = useSelector(errorPartnerEdit);
  const isLoadingEdit = useSelector(loadPartnerEdit);
  const responseEdit = useSelector(responsePartnerEdit);
  const isLoadingGet = useSelector(loadPartnerById);
  const responseGet = useSelector(responsePartnerById);

  useEffect(() => {
    dispatch(getPartnerById(id));
  }, [dispatch, id]);

  useEffect(() => {
    responseGet && setFormValues(setValue, responseGet, formValues);
  }, [responseGet, setValue]);

  useEffect(() => {
    if (responseEdit) {
      dispatch(
        setAdminMessage({
          message: 'Партнера успішно відредаговано',
          onClear: () => dispatch(clearPartnerEditState()),
        })
      );
      navigate('/admin/partners');
    }
  }, [responseEdit]);

  const onSubmit = (formData) => dispatch(editPartner({ formData, id }));

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.partnerEdit}>
      <PartnersForm register={register} errors={errors} getValues={getValues} watch={watch} />
      <div className={cl.btnWrapper}>
        <ReturnButton to="/admin/partners" />
        <LoadingButton
          disabled={Object.keys(errors).length > 0}
          isLoading={isLoadingEdit}
          shortText="Зберегти"
          longText="Зберегти зміни"
        />
      </div>
      {errorEdit && <ErrorText error={errorEdit} />}
    </form>
  );
};
export default PartnerEdit;
