import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import StarAll from '@components/Icons/StarAll';
import StarEmpty from '@components/Icons/StarEmpty';
import reviews from '../UserReviews/reviewsList.json';

export default function ProductRating() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = calculateRating(reviews);
    setStars(newStars);
  }, []);

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

  return (
    <div className={cl.wrapRating}>
      <ul className={cl.arrStar}>
        {stars.map((el, i) => (
          <li key={i}>{el === true ? <StarAll /> : <StarEmpty />}</li>
        ))}
      </ul>
      <p className={cl.total}>{reviews.length}</p>
    </div>
  );
}
