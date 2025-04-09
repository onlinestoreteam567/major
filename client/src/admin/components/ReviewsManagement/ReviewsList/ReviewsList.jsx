import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { loadReviews, selectReviews } from '@redux/selectors';
import { useSelector } from 'react-redux';

const ReviewsList = () => {
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(loadReviews);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {reviews.length === 0 ? (
            <p>Колись тут будуть ВСІ відгуки, а поки треба шукати за id товару, тому користуйтеся випадашкою</p>
          ) : (
            reviews.map((review) => (
              <li key={review.id}>
                <p>{review.review_text}</p>
                <p>Рейтинг: {review.rating}</p>
                <p>Ім`я користувача: {review.user_name}</p>
                <p>Дата: {review.data}</p>
                <p>{review.is_approved ? 'Ухвалено' : 'Відхилено'}</p>
                <button>Ухвалити</button>
                <button>Відхилити</button>
                <button>Видалити</button>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};
export default ReviewsList;
