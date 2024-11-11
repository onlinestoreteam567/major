import cl from './index.module.scss';
import StarAll from '@components/Icons/StarAll';
import StarEmpty from '@components/Icons/StarEmpty';

export default function UserRating({ review }) {
  return (
    <div className={cl.wrapRating}>
      <ul className={cl.arrStar}>
        {review.stars.map((el, i) => (
          <li key={i}>{el === true ? <StarAll /> : <StarEmpty />}</li>
        ))}
      </ul>
    </div>
  );
}
