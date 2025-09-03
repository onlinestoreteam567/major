import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import StarTrue from '@assets/svg/StarTrue';
import StarFalse from '@assets/svg/StarFalse';

export default function ProductRating({ card }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (card && card.average_rating !== undefined) {
      const trueStars = Math.round(card.average_rating);
      const newStars = Array(5).fill(true, 0, trueStars).fill(false, trueStars);
      setStars(newStars);
    }
  }, [card]);

  return (
    <div className={cl.productRating}>
      <ul className={cl.arrStar}>
        {stars.map((el, i) => (
          <li key={i}>{el ? <StarTrue /> : <StarFalse />}</li>
        ))}
      </ul>
      <p className={cl.total}>{card.reviews?.length || 0}</p>
    </div>
  );
}
