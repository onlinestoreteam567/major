import cl from './index.module.scss';
import PropTypes from 'prop-types';
import crossIcon from '../../../assets/svg/crossIcon.svg';
import { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';

const MessagePopUp = ({ setShowMessagePopUp }) => {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    phone: '+38 (0__)  __ __ ___',
    message: '',
  });

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
            onChange={handleInputNameChange}
            autoComplete="name"
          />

          <label htmlFor="phone">Номер телефону</label>
          <PhoneNumberInput inputsValue={inputsValue} setInputsValue={setInputsValue} />

          <label htmlFor="message">Питання</label>
          <textarea
            id="message"
            placeholder="Напишіть нам Ваше питання"
            value={inputsValue.message}
            required
            onChange={handleChange}
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
