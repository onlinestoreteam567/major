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
import { useState } from 'react';
import { needHelpSchema } from '@validations/needHelpSchema';
import { Form, Input, PhoneNumberInput, Textarea } from '@components/form-components';

const HasQuestionPopUp = ({ setShowMessagePopUp, type }) => {
  const { getTranslation } = useTranslationNamespace('yellowButton');
  const [rating, setRating] = useState(0);
  const {
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(needHelpSchema),
  });

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };
  2;
  const onSubmit = (data) => {
    try {
      console.log('Form Submitted with:', { ...data, rating });
      setRating(0);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const selectedData = data.find((item) => item.type === type) || {};

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src="svg/crossIcon.svg" alt={getTranslation('crossAlt')} onClick={handleCloseMessagePopUp} />
        <Subtitle>{selectedData.subtitle}</Subtitle>
        {selectedData.heading && <Heading type="h3">{selectedData.heading}</Heading>}
        <Form onSubmit={onSubmit} schema={needHelpSchema}>
          <label htmlFor="name">{getTranslation('nameAndSurname')}</label>
          <Input name="fullName" placeholder={getTranslation('nameAndSurname')} variant="popUp" />

          <label htmlFor="phone">{getTranslation('phoneNumber')}</label>
          <PhoneNumberInput setValue={setValue} variant="popUp" name="phone" />

          <label htmlFor="message">{selectedData.textAreaTitle}</label>
          <Textarea name="question" placeholder={selectedData.textAreaPlaceholder} />

          <Button variant="secondary" submit={true}>
            {selectedData.buttonText}
          </Button>
        </Form>
        {errors.fullName && <span>{errors.fullName.message}</span>}
        {errors.phone && <span>{errors.phone.message}</span>}
        {errors.question && <span>{errors.question.message}</span>}
      </div>
    </>
  );
};

HasQuestionPopUp.propTypes = {
  setShowMessagePopUp: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default HasQuestionPopUp;
