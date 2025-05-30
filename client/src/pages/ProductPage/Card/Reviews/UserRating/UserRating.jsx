import cl from './index.module.scss';
import StarFalse from '@assets/svg/StarFalse';
import StarTrue from '@assets/svg/StarTrue';

export default function UserRating({ review }) {
  return (
    <div className={cl.wrapRating}>
      <ul>
        {review.stars.map((el, i) => (
          <li key={i}>{el === true ? <StarTrue /> : <StarFalse />}</li>
        ))}
      </ul>
    </div>
  );
}
