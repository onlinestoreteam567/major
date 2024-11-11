import cl from './index.module.scss';
import PropTypes from 'prop-types';
import crossIcon from '@assets/svg/crossIcon.svg';
import { useState } from 'react';
import PhoneNumberInput from '@UI/PhoneNumberInput/PhoneNumberInput';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@components/UI/Subtitle/Subtitle';
import Heading from '@components/UI/Heading/Heading';
import SelectableStars from './SelectableStars';
import data from './data';

const MessagePopUp = ({ setShowMessagePopUp, type }) => {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    phone: '+38 (0__)  __ __ ___',
    message: '',
  });
  const [rating, setRating] = useState(0);

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };

  const handleTextAreaChange = (e) => {
    setInputsValue({ ...inputsValue, [e.target.id]: e.target.value });
  };

  const handleInputNameChange = (e) => {
    const nameValue = e.target.value;
    const isValidName = nameValue !== ' ' && !/\d/.test(nameValue);
    if (isValidName) {
      setInputsValue({ ...inputsValue, name: nameValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted with:', { ...inputsValue, rating });
    setInputsValue({ name: '', phone: '', message: '' });
    setRating(0);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const selectedData = data.find((item) => item.type === type) || {};

  const { getTranslation } = useTranslationNamespace('yellowButton');

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src={crossIcon} alt={getTranslation('crossAlt')} onClick={handleCloseMessagePopUp} />
        <Subtitle>{selectedData.subtitle}</Subtitle>
        {selectedData.heading && <Heading type="h3">{selectedData.heading}</Heading>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{getTranslation('nameAndSurname')}</label>
          <input
            id="name"
            type="text"
            placeholder={getTranslation('nameAndSurname')}
            value={inputsValue.name}
            required
            onChange={handleInputNameChange}
            autoComplete="name"
          />

          <label htmlFor="phone">{getTranslation('phoneNumber')}</label>
          <PhoneNumberInput inputsValue={inputsValue} setInputsValue={setInputsValue} />

          {selectedData.additionalText && (
            <div className={cl.additionalText}>
              <Heading type="h4">{selectedData.additionalText}</Heading>
              <SelectableStars starsAmount={rating} onRatingChange={handleRatingChange} initialRating={rating} />
            </div>
          )}

          <label htmlFor="message">{selectedData.textAreaTitle}</label>
          <textarea
            id="message"
            placeholder={selectedData.textAreaPlaceholder}
            value={inputsValue.message}
            onChange={handleTextAreaChange}
            required
          />

          <div className={cl.buttonWrapper}>
            <Button type="submit" variant="secondary">
              {selectedData.buttonText}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

MessagePopUp.propTypes = {
  setShowMessagePopUp: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default MessagePopUp;
