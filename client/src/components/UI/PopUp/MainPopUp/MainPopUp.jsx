import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@UI/Texts/Subtitle/Subtitle';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Input, PhoneNumberInput, Textarea } from '@components/form-components';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

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
        <Paragraph type="body2">{getTranslation(popUpData.heading)}</Paragraph>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input labelText={getTranslation('name')} name="fullName" variant="popUp" register={register} />

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
            register={register}
            variant={'popUp'}
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
