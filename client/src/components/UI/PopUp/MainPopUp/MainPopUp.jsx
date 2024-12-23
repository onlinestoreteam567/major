import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@UI/Texts/Subtitle/Subtitle';
import Heading from '@UI/Texts/Heading/Heading';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Input, PhoneNumberInput, Textarea } from '@components/form-components';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';

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
        <ButtonClose onClick={handleCloseMessagePopUp} />

        <Subtitle>{getTranslation(popUpData.subtitle)}</Subtitle>
        <Heading type="h3">{getTranslation(popUpData.heading)}</Heading>
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
            labelText={getTranslation(popUpData.textAreaTitle)}
            name="question"
            placeholder={getTranslation(popUpData.textAreaPlaceholder)}
            register={register}
          />

          <Button variant="secondary" submit={true}>
            {getTranslation(popUpData.buttonText)}
          </Button>
        </form>
      </div>
    </>
  );
};

export default MainPopUp;
