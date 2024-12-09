import cl from './index.module.scss';
import StarFalse from '@assets/svg/Icons/StarFalse';
import StarTrue from '@assets/svg/Icons/StarTrue';

export default function UserRating({ review }) {
  return (
    <div className={cl.wrapRating}>
      <ul className={cl.arrStar}>
        {review.stars.map((el, i) => (
          <li key={i}>{el === true ? <StarTrue /> : <StarFalse />}</li>
        ))}
      </ul>
    </div>
  );
}
