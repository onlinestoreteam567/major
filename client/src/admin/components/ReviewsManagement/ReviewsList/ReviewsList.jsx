import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadReviews, selectReviews } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { approveReview, deleteReview } from '@redux/reviews/service';

const ReviewsList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(loadReviews);

  const handleDelete = (productId, reviewId) => dispatch(deleteReview({ productId, reviewId }));
  const handleApprove = (productId, reviewId) => dispatch(approveReview({ productId, reviewId }));

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {reviews.length === 0 ? (
            <p>Відгуків немає</p>
          ) : (
            reviews.map((review) => (
              <li key={review.id}>
                <p>{review.review_text}</p>
                <p>Рейтинг: {review.rating}</p>
                <p>Ім`я користувача: {review.user_name}</p>
                <p>Дата: {review.date}</p>
                <p>{review.is_approved ? 'Ухвалено' : 'Не ухвалено'}</p>
                {review.is_approved ? (
                  <button onClick={() => handleDelete(review.product_id, review.id)}>Видалити</button>
                ) : (
                  <>
                    <button onClick={() => handleApprove(review.product_id, review.id)}>Ухвалити</button>
                    <button onClick={() => handleDelete(review.product_id, review.id)}>Видалити</button>
                  </>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};
export default ReviewsList;
