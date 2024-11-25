import cl from './index.module.scss';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneNumberInput from '@UI/PhoneNumberInput/PhoneNumberInput';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@components/UI/Texts/Subtitle/Subtitle';
import Heading from '@components/UI/Texts/Heading/Heading';
import SelectableStars from './SelectableStars';
import data from './data';
import { useState } from 'react';
import { needHelpSchema } from '@validations/needHelpSchema';

const HasQuestionPopUp = ({ setShowMessagePopUp, type }) => {
  const { getTranslation } = useTranslationNamespace('yellowButton');
  const [rating, setRating] = useState(0);

  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(needHelpSchema),
  });

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };

  const onSubmit = (data) => {
    console.log('Form Submitted with:', { ...data, rating });
    setRating(0);
  };

  const selectedData = data.find((item) => item.type === type) || {};

  const handleRatingChange = (newRating) => setRating(newRating);

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src="svg/crossIcon.svg" alt={getTranslation('crossAlt')} onClick={handleCloseMessagePopUp} />
        <Subtitle>{selectedData.subtitle}</Subtitle>
        {selectedData.heading && <Heading type="h3">{selectedData.heading}</Heading>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">{getTranslation('nameAndSurname')}</label>
          <input id="name" type="text" placeholder={getTranslation('nameAndSurname')} {...register('fullName')} />

          <label htmlFor="phone">{getTranslation('phoneNumber')}</label>
          <PhoneNumberInput setValue={setValue} />

          {selectedData.additionalText && (
            <div className={cl.additionalText}>
              <Heading type="h4">{selectedData.additionalText}</Heading>
              <SelectableStars starsAmount={rating} onRatingChange={handleRatingChange} initialRating={rating} />
            </div>
          )}

          <label htmlFor="message">{selectedData.textAreaTitle}</label>
          <textarea id="message" placeholder={selectedData.textAreaPlaceholder} {...register('question')} />

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
