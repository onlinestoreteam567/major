import PropTypes from 'prop-types';
import cl from './index.module.scss';
import stars from '../../../assets/svg/banners/stars.svg';
import hryvniaSymbol from '../../../assets/svg/hryvnia.svg';

// * cardData example:
// * cardData={{
// *   img: {
// *     src: firstSlideImage,
// *     alt: "First best seller image",
// *  },
// *   title: "title",
// *   price: "123",
// *   mlQuantity: "555",
// *   feedbackAmount: "1",
// * }}

const BestSellerCard = ({ cardData }) => {
  return (
    <div className={cl.card}>
      <section>
        <img src={cardData.img.src} alt={cardData.img.alt} />
        <h2>{cardData.title}</h2>
        <section className={cl.starsImageSection}>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <span>{cardData.feedbackAmount}</span>
        </section>
      </section>
      <section className={cl.cardFooter}>
        <h3>
          <span>{cardData.price}</span> <img className={cl.hryvniaSymbol} src={hryvniaSymbol} alt="hryvnia symbol" />
        </h3>
        <h3>
          <span>{cardData.mlQuantity}мл.</span>
        </h3>
      </section>
    </div>
  );
};

// Define PropTypes
BestSellerCard.propTypes = {
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
export default BestSellerCard;
