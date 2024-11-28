import cl from '../index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@components/UI/Texts/Subtitle/Subtitle';
import Heading from '@components/UI/Texts/Heading/Heading';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Input, PhoneNumberInput, Textarea } from '@components/form-components';

const MainPopUp = ({ setShowMessagePopUp, popUpData }) => {
  const { getTranslation } = useTranslationNamespace('yellowButton');
  const { setValue, register, handleSubmit } = useForm({
    resolver: yupResolver(needHelpSchema),
  });

  const handleCloseMessagePopUp = () => setShowMessagePopUp(false);
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src="svg/crossIcon.svg" alt={getTranslation('crossAlt')} onClick={handleCloseMessagePopUp} />
        <Subtitle>{popUpData.subtitle}</Subtitle>
        <Heading type="h3">{popUpData.heading}</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText={getTranslation('nameAndSurname')}
            name="fullName"
            placeholder={getTranslation('nameAndSurname')}
            variant="popUp"
            register={register}
          />

          <PhoneNumberInput
            setValue={setValue}
            variant="popUp"
            register={'phone'}
            name="phone"
            labelText={getTranslation('phoneNumber')}
          />

          <Textarea
            labelText={popUpData.textAreaTitle}
            name="question"
            placeholder={popUpData.textAreaPlaceholder}
            register={register}
          />

          <Button variant="secondary" submit={true}>
            {popUpData.buttonText}
          </Button>
        </form>
      </div>
    </>
  );
};

export default MainPopUp;
