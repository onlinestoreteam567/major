import { reviewsGetAll, reviewsGetByStatus } from '@redux/reviews/service';
import { useDispatch } from 'react-redux';
import cl from './index.module.scss';

const ReviewsSelect = () => {
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case 'all':
        dispatch(reviewsGetAll());
        break;
      case 'approved':
        dispatch(reviewsGetByStatus(true));
        break;
      case 'rejected':
        dispatch(reviewsGetByStatus(false));
        break;
    }
  };

  return (
    <div className={cl.select}>
      <select onChange={handleSelectChange}>
        <option value="all">Всі відгуки</option>
        <option value="approved">Ухвалені</option>
        <option value="rejected">Не ухвалені</option>
      </select>
    </div>
  );
};
export default ReviewsSelect;
