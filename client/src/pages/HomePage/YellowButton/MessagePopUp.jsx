import cl from './index.module.scss';
import PropTypes from 'prop-types';
import crossIcon from '@assets/svg/crossIcon.svg';
import { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@components/UI/Subtitle/Subtitle';
import Heading from '@components/UI/Heading/Heading';

const MessagePopUp = ({ setShowMessagePopUp }) => {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    phone: '+38 (0__)  __ __ ___',
    message: '',
  });

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };

  const handleTextAreaChange = (e) => {
    setInputsValue({ ...inputsValue, [e.target.id]: e.target.value });
  };

  const handleInputNameChange = (e) => {
    const nameValue = e.target.value;
    // Check if nameValue is does not starting with a space and does not contain numbers
    const isValidName = nameValue !== ' ' && !/\d/.test(nameValue);
    if (isValidName) {
      setInputsValue({ ...inputsValue, name: nameValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputsValue({
      name: '',
      phone: '',
      message: '',
    });
  };
  const { getTranslation } = useTranslationNamespace('yellowButton');
  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src={crossIcon} alt={getTranslation('crossAlt')} onClick={handleCloseMessagePopUp} />
        <Subtitle>{getTranslation('hasQuestion')}</Subtitle>
        <Heading type="h3">{getTranslation('leaveYouPhone')}</Heading>

        <form>
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

          <label htmlFor="message">{getTranslation('question')}</label>
          <textarea
            id="message"
            placeholder={getTranslation('writeYourQuestionPlaceholder')}
            value={inputsValue.message}
            onChange={handleTextAreaChange}
            required
          />

          <div className={cl.buttonWrapper}>
            <Button onClick={handleSubmit} variant="secondary">
              {getTranslation('send')}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

MessagePopUp.propTypes = {
  setShowMessagePopUp: PropTypes.func.isRequired,
};

export default MessagePopUp;
