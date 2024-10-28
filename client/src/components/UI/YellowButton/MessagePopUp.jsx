import cl from './index.module.scss';
import PropTypes from 'prop-types';
import crossIcon from '@assets/svg/crossIcon.svg';
import { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import Overlay from '../Overlay/Overlay';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src={crossIcon} alt={t('cross alt', { ns: 'yellowButton' })} onClick={handleCloseMessagePopUp} />
        <h2>{t('has question', { ns: 'yellowButton' })}</h2>
        <h3>{t('leave you phone', { ns: 'yellowButton' })}</h3>

        <form>
          <label htmlFor="name">{t('name and surname', { ns: 'yellowButton' })}</label>
          <input
            id="name"
            type="text"
            placeholder={t('name and surname', { ns: 'yellowButton' })}
            value={inputsValue.name}
            required
            onChange={handleInputNameChange}
            autoComplete="name"
          />

          <label htmlFor="phone">{t('phone number', { ns: 'yellowButton' })}</label>
          <PhoneNumberInput inputsValue={inputsValue} setInputsValue={setInputsValue} />

          <label htmlFor="message">{t('question', { ns: 'yellowButton' })}</label>
          <textarea
            id="message"
            placeholder={t('write your question placeholder', { ns: 'yellowButton' })}
            value={inputsValue.message}
            onChange={handleTextAreaChange}
            required
          />

          <button onClick={handleSubmit}>{t('send', { ns: 'yellowButton' })}</button>
        </form>
      </div>
    </>
  );
};

MessagePopUp.propTypes = {
  setShowMessagePopUp: PropTypes.func.isRequired,
};

export default MessagePopUp;
