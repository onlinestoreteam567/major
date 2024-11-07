import PropTypes from 'prop-types';
import cl from './index.module.scss';
import hryvniaSymbol from '@assets/svg/hryvnia.svg';
import oldPrice from '@assets/svg/oldPrice.svg';
import Stars from '@UI/Stars/Stars';
import Label from '@UI/Labels/Label';
import Benefit from '@UI/Labels/Benefit';
import { useState } from 'react';
import Button from '@UI/Button/Button';
import Heading from '../Heading/Heading';
import Subtitle from '../Subtitle/Subtitle';

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
    setButtonText('Додати до кошику');
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
        <Heading type="h3">{cardData.title}</Heading>
        <Stars starsAmount={cardData.stars} feedbackAmount={cardData.feedbackAmount} />
      </section>
      <section className={cl.cardFooter}>
        <Subtitle>
          <span>{cardData.price}</span> <img className={cl.hryvniaSymbol} src={hryvniaSymbol} alt="hryvnia symbol" />
          <span className={cl.oldPrice}>
            555 <img src={oldPrice} alt="" />
          </span>
        </Subtitle>
        <p>
          <span>{cardData.mlQuantity}мл.</span>
        </p>
      </section>

      {isShowButton ? (
        <Button onMouseEnter={changeButtonText} onMouseLeave={defaultButtonText}>
          {buttonText}
        </Button>
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
