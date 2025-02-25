import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Input, PhoneNumberInput, Textarea } from '@components/form-components';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Heading from '@components/UI/Texts/Heading/Heading';

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

        <div className={cl.overflowWrap}>
          <div>
            <Heading type="h2">{getTranslation(popUpData.subtitle)}</Heading>
            <Paragraph type="body2">{getTranslation(popUpData.heading)}</Paragraph>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input labelText={getTranslation('name')} name="fullName" variant="popUp" register={register} />

              <PhoneNumberInput
                setValue={setValue}
                variant="popUp"
                register={'phone'}
                name="phone"
                labelText={getTranslation('phoneNumber')}
              />
            </div>

            <div>
              <Textarea
                labelText={getTranslation(popUpData.textAreaTitle)}
                name="question"
                register={register}
                variant={'popUp'}
              />

              <Button submit={true}>{getTranslation(popUpData.buttonText)}</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainPopUp;
