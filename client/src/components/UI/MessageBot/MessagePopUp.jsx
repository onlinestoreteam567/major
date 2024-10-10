import cl from './index.module.scss';
import PropTypes from 'prop-types';
import crossIcon from '../../../assets/svg/crossIcon.svg';
import { useState } from 'react';

const MessagePopUp = ({ setShowMessagePopUp }) => {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [counter, setCounter] = useState(0);

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };

  const handleChange = (e) => {
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

    // Show message values while submit
    // console.log(inputsValue);

    setInputsValue({
      name: '',
      phone: '',
      message: '',
    });
  };

  const handleInputPhoneNumberChange = (e) => {
    const phoneNumberValue = e.target.value;
    const cleanedPhoneNumber = phoneNumberValue.replace('_', '');

    // Allow only digits, parentheses, spaces, the plus sign, and underscores
    const isValidNumber = /^[\d ()+_]*$/.test(phoneNumberValue);

    if (isValidNumber) {
      setInputsValue({ ...inputsValue, phone: cleanedPhoneNumber });
      setCounter(counter + 1);
      setTimeout(() => {
        switch (true) {
          case counter === 1:
            e.target.setSelectionRange(11, 11);
            break;

          case counter === 3:
            e.target.setSelectionRange(14, 14);
            break;

          case counter === 5:
            e.target.setSelectionRange(17, 17);
            break;

          default: {
            const cursorPosition = phoneNumberValue.indexOf('_') + 1;
            e.target.setSelectionRange(cursorPosition, cursorPosition);
          }
        }
      }, 0);
    }
  };

  const handleNumberFocus = (e) => {
    setInputsValue({ ...inputsValue, phone: '+38 (0__)  __ __ ___' });
    setTimeout(() => {
      e.target.setSelectionRange(6, 6);
    }, 0);
    setCounter(0);
  };

  return (
    <>
      {/* Overlay */}
      <div className={cl.overlay} onClick={handleCloseMessagePopUp}></div>

      <div className={cl.messagePopUp}>
        <img src={crossIcon} alt="Close popup" onClick={handleCloseMessagePopUp} />
        <h2>Маєте питання?</h2>
        <h3>
          Залиште Ваш номер телефону і ми <br /> Вам зателефонуємо!
        </h3>

        <form>
          <label htmlFor="name">Ім’я та прізвище</label>
          <input
            id="name"
            type="text"
            placeholder="Ім’я та прізвище"
            value={inputsValue.name}
            required
            onChange={(e) => handleInputNameChange(e)}
            autoComplete="name"
          />

          <label htmlFor="phone">Номер телефону</label>
          <input
            id="phone"
            type="text"
            placeholder="+38 (0__) __ __ ___"
            value={inputsValue.phone}
            required
            onChange={(e) => handleInputPhoneNumberChange(e)}
            onFocus={(e) => handleNumberFocus(e)}
            autoComplete="tel"
          />

          <label htmlFor="message">Питання</label>
          <textarea
            id="message"
            placeholder="Напишіть нам Ваше питання"
            value={inputsValue.message}
            required
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />

          <button onClick={handleSubmit}>Відправити повідомлення</button>
        </form>
      </div>
    </>
  );
};

MessagePopUp.propTypes = {
  setShowMessagePopUp: PropTypes.func.isRequired,
};

export default MessagePopUp;
