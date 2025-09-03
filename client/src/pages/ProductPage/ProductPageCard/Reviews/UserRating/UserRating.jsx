import cl from './index.module.scss';
import StarFalse from '@components/UI/icons/Stars/StarFalse';
import StarTrue from '@components/UI/icons/Stars/StarTrue';

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
