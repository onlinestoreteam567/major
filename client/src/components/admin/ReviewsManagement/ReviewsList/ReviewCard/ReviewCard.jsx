import { useDispatch } from 'react-redux';
import cl from './index.module.scss';
import { approveReview, deleteReview } from '@redux/reviews/service';
import Button from '@components/UI/Button/Button';
import { useState } from 'react';
import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';

const ReviewCard = ({ review, showMessage }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const [isShowApprovePopUp, setIsShowApprovePopUp] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (productId, reviewId) => {
    dispatch(deleteReview({ productId, reviewId }));
    showMessage(`Відгук успішно видалено`);
  };
  const handleApprove = (productId, reviewId) => {
    dispatch(approveReview({ productId, reviewId }));
    showMessage(`Відгук успішно опубліковано`);
  };

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);
  const toggleApprovePopUp = () => setIsShowApprovePopUp(!isShowApprovePopUp);

  return (
    <>
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
          <button onClick={() => toggleDeletePopUp()}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        ) : (
          <div className={cl.approveButtonsWrap}>
            <Button onClick={() => toggleApprovePopUp()}>Опублікувати</Button>
            <button onClick={() => toggleDeletePopUp()}>
              <img src="/svg/admin/delete.svg" />
            </button>
          </div>
        )}
      </li>

      {isShowDeletePopUp && (
        <DeletePopUp
          closeDeletePopUp={() => toggleDeletePopUp()}
          handleDelete={() => handleDelete(review.product_id, review.id)}
        >
          Ви впевнені, що хочете видалити цей відгук?
        </DeletePopUp>
      )}

      {isShowApprovePopUp && (
        <DeletePopUp
          closeDeletePopUp={toggleDeletePopUp}
          handleDelete={() => handleApprove(review.product_id, review.id)}
        >
          Ви впевнені, що хочете опублікувати цей відгук
        </DeletePopUp>
      )}
    </>
  );
};
export default ReviewCard;
