import { reviewsGetByStatus } from '@redux/reviews/service';
import { useDispatch } from 'react-redux';
import cl from './index.module.scss';
import { fetchPromocode } from '@redux/admin/promocode/service';

const PromocodeSelectOptions = ({ setIsExpanded, selectedValue, setSelectedValue }) => {
  const dispatch = useDispatch();

  const options = [
    {
      value: 'Всі',
      action: () => dispatch(fetchPromocode()),
    },
    {
      value: 'Активний',
      action: () => dispatch(reviewsGetByStatus(true)),
    },
    {
      value: 'Неактивний',
      action: () => dispatch(reviewsGetByStatus(false)),
    },
  ];

  const handleOptionClick = (option) => {
    option.action();
    setIsExpanded(false);
    setSelectedValue(option.value);
  };

  return (
    <ul className={cl.promocodeSelectOptions}>
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

export default PromocodeSelectOptions;
