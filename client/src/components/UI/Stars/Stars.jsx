import star from '@assets/svg/banners/star.svg';
import uncheckstar from '@assets/svg/banners/uncheckstar.svg';
import cl from './index.module.scss';

const Stars = ({ starsAmount, feedbackAmount }) => {
  const maxStars = 5;

  return (
    <section className={cl.starsImageSection}>
      {Array.from({ length: starsAmount }).map((_, index) => (
        <img key={`filled-${index}`} src={star} alt="filled star" />
      ))}

      {Array.from({ length: maxStars - starsAmount }).map((_, index) => (
        <img key={`unfilled-${starsAmount + index}`} src={uncheckstar} alt="unfilled star" />
      ))}

      <span>{feedbackAmount}</span>
    </section>
  );
};

export default Stars;
