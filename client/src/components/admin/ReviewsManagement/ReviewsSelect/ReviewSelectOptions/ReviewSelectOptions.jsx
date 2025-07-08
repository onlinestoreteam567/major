import { reviewsGetAll, reviewsGetByStatus } from '@redux/reviews/service';
import { useDispatch } from 'react-redux';
import cl from './index.module.scss';

const ReviewSelectOptions = ({ setIsExpanded, selectedValue, setSelectedValue }) => {
  const dispatch = useDispatch();

  const options = [
    {
      value: 'Всі',
      action: () => dispatch(reviewsGetAll()),
    },
    {
      value: 'Опубліковані',
      action: () => dispatch(reviewsGetByStatus(true)),
    },
    {
      value: 'Не опубліковані',
      action: () => dispatch(reviewsGetByStatus(false)),
    },
  ];

  const handleOptionClick = (option) => {
    option.action();
    setIsExpanded(false);
    setSelectedValue(option.value);
  };

  return (
    <ul className={cl.reviewSelectOptions}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleOptionClick(option)}
          className={selectedValue === option.value ? cl.selected : ''}
        >
          {option.value}
        </button>
      ))}
    </ul>
  );
};

export default ReviewSelectOptions;
