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
import { useDispatch } from 'react-redux';
import { postCooperationRequest } from '@redux/popUp/service';

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

  const onSubmit = (data) => dispatch(postCooperationRequest(data));

  return (
    <>
      <Overlay handleClose={() => setIsShowCooperationPopUp(false)} />
      <div className={cl.cooperationPopUp}>
        <ButtonClose ariaLabel="ariaLabelMainPopUp" onClick={() => setIsShowCooperationPopUp(false)} />

        <Paragraph type="body1">{getTranslation('cooperationOfferPopUpTitle')}</Paragraph>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText={getTranslation('cooperationOfferPopUpInputName')}
            placeholder={getTranslation('cooperationOfferPopUpInputName')}
            name="fullName"
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
          <BtnSubmit>{getTranslation('cooperationOfferCardButtonText')}</BtnSubmit>
        </form>
      </div>
    </>
  );
};
export default CooperationPopUp;
