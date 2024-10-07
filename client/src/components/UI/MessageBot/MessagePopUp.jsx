import cl from "./index.module.scss";
import PropTypes from "prop-types";
import crossIcon from "../../../assets/svg/crossIcon.svg";
import { useState } from "react";

const MessagePopUp = ({ setShowMessagePopUp }) => {
  const [inputsValue, setInputsValue] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };

  const handleChange = (e) => {
    setInputsValue({ ...inputsValue, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show message values while submit
    // console.log(inputsValue);

    setInputsValue({
      name: "",
      phone: "",
      message: "",
    });
  };

  const handleNumberFocus = (e) => {
    if (!inputsValue.phone) {
      setInputsValue({ ...inputsValue, phone: "+38 (0 )" });
      setTimeout(() => {
        e.target.setSelectionRange(7, 7);
      }, 0);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className={cl.overlay} onClick={handleCloseMessagePopUp}></div>

      <div className={cl.messagePopUp}>
        <img src={crossIcon} alt="" onClick={handleCloseMessagePopUp} />
        <h2>Маєте питання?</h2>
        <h3>
          Залиште Ваш номер телефону і ми <br /> Вам зателефонуємо!
        </h3>

        <form action="">
          <label htmlFor="name">Ім’я та прізвище</label>
          <input
            id="name"
            type="text"
            placeholder="Ім’я та прізвище"
            value={inputsValue.name}
            required
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="phone">Номер телефону</label>
          <input
            id="phone"
            type="text"
            placeholder="+38 (0__) __ __ ___"
            value={inputsValue.phone}
            required
            onChange={(e) => handleChange(e)}
            onFocus={(e) => handleNumberFocus(e)} // Pass the event object
          />

          <label htmlFor="message">Питання</label>
          <textarea
            id="message"
            placeholder="Напишіть нам Ваше питання"
            value={inputsValue.message}
            required
            onChange={(e) => handleChange(e)}
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
