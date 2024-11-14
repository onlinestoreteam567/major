import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import star from '@assets/svg/banners/star.svg';
import uncheckstar from '@assets/svg/banners/uncheckstar.svg';
import cl from './index.module.scss';

const SelectableStars = ({ initialRating = 0, maxStars = 5, onRatingChange }) => {
  const [currentRating, setCurrentRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setCurrentRating(initialRating);
  }, [initialRating]);

  const handleClick = (rating) => {
    setCurrentRating(rating);
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  const handleMouseEnter = (rating) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <section className={cl.starsImageSection}>
      {Array.from({ length: maxStars }).map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= (hoverRating || currentRating);

        return (
          <img
            key={starIndex}
            src={isFilled ? star : uncheckstar}
            alt={isFilled ? 'filled star' : 'unfilled star'}
            className={cl.star}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </section>
  );
};

SelectableStars.propTypes = {
  initialRating: PropTypes.number,
  maxStars: PropTypes.number,
  onRatingChange: PropTypes.func,
};

export default SelectableStars;
