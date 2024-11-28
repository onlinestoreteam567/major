import cl from './index.module.scss';
import PropTypes from 'prop-types';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@components/UI/Texts/Subtitle/Subtitle';
import Heading from '@components/UI/Texts/Heading/Heading';
import data from './data';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Input, PhoneNumberInput, Textarea } from '@components/form-components';

const HasQuestionPopUp = ({ setShowMessagePopUp, type }) => {
  const { getTranslation } = useTranslationNamespace('yellowButton');
  const { setValue, register, handleSubmit } = useForm({
    resolver: yupResolver(needHelpSchema),
  });

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };

  const selectedData = data.find((item) => item.type === type) || {};

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src="svg/crossIcon.svg" alt={getTranslation('crossAlt')} onClick={handleCloseMessagePopUp} />
        <Subtitle>{selectedData.subtitle}</Subtitle>
        {selectedData.heading && <Heading type="h3">{selectedData.heading}</Heading>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">{getTranslation('nameAndSurname')}</label>
          <Input name="fullName" placeholder={getTranslation('nameAndSurname')} variant="popUp" register={register} />

          <label htmlFor="phone">{getTranslation('phoneNumber')}</label>
          <PhoneNumberInput setValue={setValue} variant="popUp" register={'phone'} />

          <label htmlFor="message">{selectedData.textAreaTitle}</label>
          <Textarea name="question" placeholder={selectedData.textAreaPlaceholder} register={register} />

          <Button variant="secondary" submit={true}>
            {selectedData.buttonText}
          </Button>
        </form>
      </div>
    </>
  );
};

HasQuestionPopUp.propTypes = {
  setShowMessagePopUp: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default HasQuestionPopUp;
