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
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(needHelpSchema),
  });

  const handleCloseMessagePopUp = () => setShowMessagePopUp(false);
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <ButtonClose onClick={handleCloseMessagePopUp} ariaLabel="ariaLabelMainPopUp" />

        <div className={cl.overflowWrap}>
          <div>
            <Heading type="h2">{getTranslation(popUpData.subtitle)}</Heading>
            <Paragraph type="body2">{getTranslation(popUpData.heading)}</Paragraph>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                labelText={getTranslation('yourName')}
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
                labelText={getTranslation('phoneNumber')}
                errors={errors}
              />
            </div>

            <div>
              <Textarea
                labelText={getTranslation(popUpData.textAreaTitle)}
                name="question"
                register={register}
                variant={'popUp'}
                errors={errors}
              />

              <Button submit={true}>{getTranslation('send', 'common')}</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainPopUp;
