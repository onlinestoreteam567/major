import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import reviews from '@components/UI/UserReviews/reviewsList.json';
import StarTrue from '@components/Icons/StarTrue';
import StarFalse from '@components/Icons/StarFalse';

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
          <li key={i}>{el === true ? <StarTrue /> : <StarFalse />}</li>
        ))}
      </ul>
      <p className={cl.total}>{reviews.length}</p>
    </div>
  );
}
