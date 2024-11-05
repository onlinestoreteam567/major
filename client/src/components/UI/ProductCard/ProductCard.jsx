import PropTypes from 'prop-types';
import cl from './index.module.scss';
import hryvniaSymbol from '@assets/svg/hryvnia.svg';
import oldPrice from '@assets/svg/oldPrice.svg';
import Stars from '../Stars/Stars';
import Label from '../Labels/Label';
import Benefit from '../Labels/Benefit';
import { useState } from 'react';

const ProductCard = ({ cardData }) => {
  const [isShowButton, setIsShowButton] = useState(false);
  const [buttonText, setButtonText] = useState('Дізнатись більше');

  const showButton = () => {
    setIsShowButton(true);
  };
  const closeButton = () => {
    setIsShowButton(false);
  };

  const changeButtonText = () => {
    setButtonText('До кошику');
  };
  const defaultButtonText = () => {
    setButtonText('Дізнатись більше');
  };

  return (
    <div className={cl.card} onMouseEnter={showButton} onMouseLeave={closeButton}>
      <section className={cl.cardHeader}>
        <Label labels={cardData.label} />
        <Benefit percent={cardData.percent} />
        <img src={cardData.img.src} alt={cardData.img.alt} className={cl.cardImage} />
        <h3 className={cl.cardTitle}>{cardData.title}</h3>
        <Stars starsAmount={cardData.stars} feedbackAmount={cardData.feedbackAmount} />
      </section>
      <section className={cl.cardFooter}>
        <h3>
          <span>{cardData.price}</span> <img className={cl.hryvniaSymbol} src={hryvniaSymbol} alt="hryvnia symbol" />
          <span className={cl.oldPrice}>
            555 <img src={oldPrice} alt="" />
          </span>
        </h3>
        <h4>
          <span>{cardData.mlQuantity}мл.</span>
        </h4>
      </section>
      {isShowButton ? (
        <button onMouseEnter={changeButtonText} onMouseLeave={defaultButtonText}>
          {buttonText}
        </button>
      ) : (
        <div className={cl.space}></div>
      )}
    </div>
  );
};

// Define PropTypes
ProductCard.propTypes = {
  cardData: PropTypes.shape({
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mlQuantity: PropTypes.string.isRequired,
    feedbackAmount: PropTypes.string,
  }).isRequired,
};
export default ProductCard;
