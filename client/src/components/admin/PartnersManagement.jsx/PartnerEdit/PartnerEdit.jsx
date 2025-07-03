import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
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
  } = useForm({
    resolver: yupResolver(partnerSchema),
    mode: 'onSubmit',
  });

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

  const onSubmit = (formData) => dispatch(editPartner({ formData, id }));

  return (
    <>
      <ReturnButton />
      {isLoadingGet ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.partnerEdit}>
          <PartnersForm register={register} errors={errors} />
          <LoadingButton
            isLoading={isLoadingEdit}
            loadingText="Редагування партнера"
            defaultText="Редагувати партнера"
          />
          {errorEdit && <ErrorText error={errorEdit} />}
          {responseEdit && <SuccessMessage>Партнер успішно відредагований!</SuccessMessage>}
        </form>
      )}
    </>
  );
};
export default PartnerEdit;
