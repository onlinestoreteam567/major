import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { loadReviews, selectReviews } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import handleDeleteItem from '@utils/handleDeleteItem';
import { approveReview, deleteReview, rejectReview } from '@redux/reviews/service';

const ReviewsList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(loadReviews);

  const handleDelete = (id) => handleDeleteItem(dispatch, deleteReview, id);
  const handleApprove = (productId, reviewId) => dispatch(approveReview({ productId, reviewId }));
  const handleReject = (productId, reviewId) => dispatch(rejectReview({ productId, reviewId }));

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
                <p>{review.is_approved ? 'Ухвалено' : 'Не ухвалено'}</p>
                <button onClick={() => handleApprove(review.product_id, review.id)}>Ухвалити</button>
                <button onClick={() => handleReject(review.product_id, review.id)}>Відхилити</button>
                <button onClick={() => handleDelete(review.id)}>Видалити</button>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};
export default ReviewsList;
