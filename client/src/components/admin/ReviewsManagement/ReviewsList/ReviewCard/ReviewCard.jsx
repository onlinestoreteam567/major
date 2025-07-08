import { useDispatch } from 'react-redux';
import cl from './index.module.scss';
import { approveReview, deleteReview } from '@redux/reviews/service';
import Button from '@components/UI/Button/Button';

const ReviewCard = ({ review }) => {
  const dispatch = useDispatch();
  const handleDelete = (productId, reviewId) => dispatch(deleteReview({ productId, reviewId }));
  const handleApprove = (productId, reviewId) => dispatch(approveReview({ productId, reviewId }));

  return (
    <li className={cl.reviewCard}>
      <p className={review.is_approved ? cl.approveed : cl.notApproved}>
        {review.is_approved ? 'Опубліковано' : 'Не опубліковано'}
      </p>
      <p>{review.review_text}</p>
      <div className={cl.reviewDetailWrap}>
        <p className={cl.reviewDetail}>
          Оцінка: <span>{review.rating}</span>
        </p>
        <p className={cl.reviewDetail}>
          Дата: <span>{review.date}</span>
        </p>
      </div>
      <p className={cl.reviewDetail}>
        Ім`я користувача: <span>{review.user_name}</span>
      </p>
      {review.is_approved ? (
        <button>
          <img src="/svg/admin/delete.svg" alt="More options" />
        </button>
      ) : (
        <div className={cl.approveButtonsWrap}>
          <Button onClick={() => handleApprove(review.product_id, review.id)}>Опублікувати</Button>
          <button>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
          {/* <button onClick={() => handleDelete(review.product_id, review.id)}>Видалити</button> */}
        </div>
      )}
    </li>
  );
};
export default ReviewCard;
