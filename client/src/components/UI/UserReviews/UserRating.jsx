import cl from './index.module.scss';
import StarAll from '@components/Icons/StarAll';
import StarEmpty from '@components/Icons/StarEmpty';
import review from './review.json';

export default function UserRating() {
  const rating = review.rating;
  return (
    <div className={cl.wrapRating}>
      <ul className={cl.arrStar}>
        {rating.stars.map((el, i) => (
          <li key={i}>{el === true ? <StarAll /> : <StarEmpty />}</li>
        ))}
      </ul>
      <p className={cl.average}>{rating.average}</p>
    </div>
  );
}
