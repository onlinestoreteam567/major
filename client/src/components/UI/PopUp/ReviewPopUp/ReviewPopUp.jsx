import cl from './index.module.scss';
// import { useState } from 'react';
// import Button from '@UI/Button/Button';
// import StarTrue from '@assets/svg/StarTrue';
// import StarFalse from '@assets/svg/StarFalse';
import Heading from '@components/UI/Texts/Heading/Heading';
import ReviewForm from './ReviewForm';

const ReviewPopUp = ({ card }) => {
  // const [userName, setUserName] = useState('');
  // const [userTel, setUserTel] = useState('');
  // const [text, setText] = useState('');
  // const [checkboxStates, setCheckboxStates] = useState([false, false, false, false, false]);

  // const handleRatingChange = (index) => {
  //   const newCheckboxStates = checkboxStates.map((_, i) => i <= index);
  //   setCheckboxStates(newCheckboxStates);
  // };

  // const handleReview = () => {
  //   const newReview = {
  //     product: {
  //       id: card.id,
  //       name: 'Флюїд шовк для тонкого волосся',
  //     },
  //     user: {
  //       user_name: userName,
  //       user_tel: userTel,
  //       data: new Date(),
  //     },
  //     stars: checkboxStates,
  //     text: text,
  //   };

  //   console.log(newReview);
  // };

  console.log(card);

  return (
    <div className={cl.messagePopUp} onClick={(e) => e.stopPropagation()}>
      <Heading type="h3">Залиште відгук про наш товар</Heading>
      <ReviewForm />
      {/* <form onChange={handleReview}>
        <label htmlFor="name">
          Ім’я та прізвище*
          <input
            autoFocus
            name="name"
            type="text"
            placeholder="Ім’я та прізвище"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="name"
          />
        </label>
        <label htmlFor="tel">
          Номер телефону
          <input
            autoFocus
            name="tel"
            type="text"
            placeholder="+38 (0__) __ __ ___"
            value={userTel}
            required
            onChange={(e) => setUserTel(e.target.value)}
            autoComplete="tel"
          />
        </label>
        <div className={cl.wrapRating}>
          <h4>Оцініть товар*:</h4>
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
        <label htmlFor="text">
          Напишіть коротенький відгук
          <textarea
            name="text"
            placeholder="Відгук про товар"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </label>
        <div className={cl.btnWrap}>
          <Button type="button" onClick={handleReview} variant="secondary">
            Залишити повідомлення
          </Button>
        </div>
      </form> */}
    </div>
  );
};

export default ReviewPopUp;
