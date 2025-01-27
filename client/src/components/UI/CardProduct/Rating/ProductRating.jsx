import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import StarTrue from '@assets/svg/StarTrue';
import StarFalse from '@assets/svg/StarFalse';

export default function ProductRating({ card }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (card && card.reviews.length > 0) {
      const newStars = calculateRating(card.reviews);
      setStars(newStars);
    } else if (card) {
      // If there are no reviews, set 5 false stars
      setStars(Array(5).fill(false));
    }
  }, [card]);

  const calculateRating = (reviews) => {
    const totalStars = reviews.reduce((acc, review) => {
      review.stars.forEach((star, index) => {
        acc[index] = (acc[index] || 0) + (star ? 1 : 0);
      });
      return acc;
    }, []);

    const averageStars = totalStars.map((starCount) => starCount >= reviews.length / 2);
    return averageStars;
  };

  if (!card) {
    return null;
  }

  return (
    <div className={cl.wrapRating}>
      <ul className={cl.arrStar}>
        {stars.map((el, i) => (
          <li key={i}>{el ? <StarTrue /> : <StarFalse />}</li>
        ))}
      </ul>
      <p className={cl.total}>{card.reviews.length}</p>
    </div>
  );
}
