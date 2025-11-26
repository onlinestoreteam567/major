import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Input, PhoneNumberInput } from '@components/form-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cooperationSchema } from '@validations/cooperationSchema';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import { useDispatch, useSelector } from 'react-redux';
import { postCooperationRequest } from '@redux/popUp/service';
import { useEffect } from 'react';
import { clearCreateCooperationRequest } from '@redux/popUp/createCooperationRequestSlice';
import {
  errorCreateCooperationRequest,
  loadCreateCooperationRequest,
  responseCreateCooperationRequest,
} from '@redux/selectors';

const CooperationInterested = () => {
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('cooperationPage');
  const {
    setValue,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(cooperationSchema),
  });

  const requestCreated = useSelector(responseCreateCooperationRequest);
  const loadRequestCreation = useSelector(loadCreateCooperationRequest);
  const errorRequestCreation = useSelector(errorCreateCooperationRequest);

  useEffect(() => {
    dispatch(clearCreateCooperationRequest());
  }, []);

  const onSubmit = (data) => dispatch(postCooperationRequest(data));
  return (
    <div className={cl.cooperationInterested}>
      {requestCreated || errorRequestCreation ? (
        <div className={cl.successMessage}>
          <Heading type="h2">
            {requestCreated && getTranslation('cooperationOfferPopUpRequestCreated')}
            {errorRequestCreation && getTranslation('cooperationOfferPopUpErrorRequestCreation')}
          </Heading>
        </div>
      ) : (
        <>
          <Heading type="h2">{getTranslation('cooperationInterestedTitle')}</Heading>
          <Paragraph type="body1">{getTranslation('cooperationOfferPopUpTitle')}</Paragraph>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              labelText={getTranslation('cooperationOfferPopUpInputName')}
              placeholder={getTranslation('cooperationOfferPopUpInputName')}
              name="name"
              variant="popUp"
              register={register}
              errors={errors}
            />
            <PhoneNumberInput
              setValue={setValue}
              variant="popUp"
              register={'phone'}
              name="phone"
              labelText={getTranslation('cooperationOfferPopUpInputPhone')}
              placeholder={'+38 (097) 123 45 67'}
              errors={errors}
              getValues={getValues}
            />
            <BtnSubmit disabled={loadRequestCreation}>{getTranslation('cooperationInterestedButton')}</BtnSubmit>
          </form>
        </>
      )}
    </div>
  );
};
export default CooperationInterested;
