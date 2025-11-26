import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import cl from './index.module.scss';
import { Input, PhoneNumberInput } from '@components/form-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cooperationSchema } from '@validations/cooperationSchema';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import Overlay from '@components/UI/Overlay/Overlay';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import { useDispatch, useSelector } from 'react-redux';
import { postCooperationRequest } from '@redux/popUp/service';
import { useEffect } from 'react';
import {
  errorCreateCooperationRequest,
  loadCreateCooperationRequest,
  responseCreateCooperationRequest,
} from '@redux/selectors';
import { clearCreateCooperationRequest } from '@redux/popUp/createCooperationRequestSlice';
import Heading from '@components/UI/Texts/Heading/Heading';

const CooperationPopUp = ({ setIsShowCooperationPopUp }) => {
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

  const onSubmit = (data) => dispatch(postCooperationRequest(data));

  useEffect(() => {
    dispatch(clearCreateCooperationRequest());
  }, []);

  return (
    <>
      <Overlay handleClose={() => setIsShowCooperationPopUp(false)} />
      <div className={cl.cooperationPopUp}>
        <ButtonClose ariaLabel="ariaLabelMainPopUp" onClick={() => setIsShowCooperationPopUp(false)} />

        {requestCreated || errorRequestCreation ? (
          <div className={cl.successMessage}>
            <Heading type="h2">
              {requestCreated && getTranslation('cooperationOfferPopUpRequestCreated')}
              {errorRequestCreation && getTranslation('cooperationOfferPopUpErrorRequestCreation')}
            </Heading>
          </div>
        ) : (
          <>
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
              <BtnSubmit disabled={loadRequestCreation}>{getTranslation('cooperationOfferCardButtonText')}</BtnSubmit>
            </form>
          </>
        )}
      </div>
    </>
  );
};
export default CooperationPopUp;
