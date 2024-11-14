import cl from './index.module.scss';
import crossIcon from '@assets/svg/crossIcon.svg';
import { useState } from 'react';
// import PhoneNumberInput from '@UI/PhoneNumberInput/PhoneNumberInput';
import Overlay from '@UI/Overlay/Overlay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Subtitle from '@components/UI/Subtitle/Subtitle';
import Heading from '@components/UI/Heading/Heading';
import data from './data';
// import StarAll from '@components/Icons/StarAll';
// import StarEmpty from '@components/Icons/StarEmpty';
import StarTrue from '@components/Icons/StarTrue';
import StarFalse from '@components/Icons/StarFalse';
// import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';

const ReviewPopUp = ({ setShowMessagePopUp, type }) => {
  const [userName, setUserName] = useState('');
  const [text, setText] = useState('');
  const [checkboxStates, setCheckboxStates] = useState([false, false, false, false, false]);

  const handleCloseMessagePopUp = () => {
    setShowMessagePopUp(false);
  };
  const { getTranslation } = useTranslationNamespace('yellowButton');
  const selectedData = data.find((item) => item.type === type) || {};

  const handleRatingChange = (index) => {
    const newCheckboxStates = checkboxStates.map((_, i) => i <= index);
    setCheckboxStates(newCheckboxStates);
  };

  const handleReview = () => {
    const newReview = {
      // product: {
      //   id: item.id,
      //   name: item.title,
      // },
      product: {
        id: 0,
        name: 'Флюїд шовк для тонкого волосся',
      },
      user: {
        user_name: userName,
        data: new Date(),
      },
      stars: checkboxStates,
      text: text,
    };
    console.log(newReview);
  };

  return (
    <>
      <Overlay handleClose={handleCloseMessagePopUp} />

      <div className={cl.messagePopUp}>
        <img src={crossIcon} alt={getTranslation('crossAlt')} onClick={handleCloseMessagePopUp} />
        <Subtitle>{selectedData.subtitle}</Subtitle>
        {selectedData.heading && <Heading type="h3">{selectedData.heading}</Heading>}
        <from>
          <label htmlFor="name">{getTranslation('nameAndSurname')}</label>
          <input
            autoFocus
            name="name"
            type="text"
            placeholder={getTranslation('nameAndSurname')}
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="name"
          />
          {/* <label htmlFor="phone">{getTranslation('phoneNumber')}</label>
          <PhoneNumberInput inputsValue={inputsValue} setInputsValue={setInputsValue} /> */}
          {/* {selectedData.additionalText && ( */}
          <div className={cl.wrapRating}>
            <Heading type="h4">{selectedData.additionalText}</Heading>
            <ul>
              {checkboxStates.map((el, i) => (
                <li key={i}>
                  <input
                    name="rating"
                    type="checkbox"
                    onChange={() => handleRatingChange(i)}
                    checked={checkboxStates[i]}
                  />
                  {checkboxStates[i] ? <StarTrue /> : <StarFalse />}
                </li>
              ))}
            </ul>
          </div>
          {/* )} */}
          <label htmlFor="text">{selectedData.textAreaTitle}</label>
          <textarea
            name="text"
            placeholder={selectedData.textAreaPlaceholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <div className={cl.buttonWrapper}>
            <Button type="button" variant="secondary" onClick={handleReview}>
              {selectedData.buttonText}
            </Button>
          </div>
        </from>
      </div>
    </>
  );
};

export default ReviewPopUp;
