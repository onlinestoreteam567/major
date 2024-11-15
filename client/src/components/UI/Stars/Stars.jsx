import cl from './index.module.scss';

const Stars = ({ starsAmount, feedbackAmount }) => {
  const maxStars = 5;

  return (
    <section className={cl.starsImageSection}>
      {Array.from({ length: starsAmount }).map((_, index) => (
        <img key={`filled-${index}`} src="/svg/banners/star.svg" alt="filled star" />
      ))}

      {Array.from({ length: maxStars - starsAmount }).map((_, index) => (
        <img key={`unfilled-${starsAmount + index}`} src="/svg/banners/uncheckstar.svg" alt="unfilled star" />
      ))}

      <span>{feedbackAmount}</span>
    </section>
  );
};

export default Stars;
