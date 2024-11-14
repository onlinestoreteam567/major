import cl from './index.module.scss';
// import StarAll from '@components/Icons/StarAll';
// import StarEmpty from '@components/Icons/StarEmpty';
import StarFalse from '@components/Icons/StarFalse';
import StarTrue from '@components/Icons/StarTrue';

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
