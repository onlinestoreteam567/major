import { useDispatch } from 'react-redux';
import cl from './index.module.scss';
import { fetchPromocode } from '@redux/admin/promocode/service';
import { promocodeGetByStatus } from '@redux/promocode/service';

const PromocodeSelectOptions = ({ setIsExpanded, selectedValue, setSelectedValue }) => {
  const dispatch = useDispatch();

  const options = [
    {
      value: 'all',
      placeholder: 'Всі',
      action: () => dispatch(fetchPromocode()),
    },
    {
      value: 'active',
      placeholder: 'Активні',
      action: () => dispatch(promocodeGetByStatus(true)),
    },
    {
      value: 'inActive',
      placeholder: 'Не активні',
      action: () => dispatch(promocodeGetByStatus(false)),
    },
  ];

  const handleOptionClick = (option) => {
    option.action();
    setIsExpanded(false);
    setSelectedValue(option.placeholder);
  };

  return (
    <ul className={cl.promocodeSelectOptions}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleOptionClick(option)}
          className={selectedValue === option.value ? cl.selected : ''}
        >
          {option.placeholder}
        </button>
      ))}
    </ul>
  );
};

export default PromocodeSelectOptions;
