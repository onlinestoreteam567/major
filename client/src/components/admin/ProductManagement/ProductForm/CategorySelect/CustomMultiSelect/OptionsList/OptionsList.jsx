import CheckedCheckbox from '@assets/svg/Admin/CheckedCheckbox/CheckedCheckbox';
import handleToggleOption from '../helpers/handleToggleOption';
import cl from './index.module.scss';
import UncheckedCheckbox from '@assets/svg/Admin/UncheckedCheckbox/UncheckedCheckbox';

const OptionsList = ({ name, items, errors, selectedValues, onChange, onBlur }) => {
  return (
    <ul className={`${cl.optionsList} ${errors[name] ? cl.error : ''}`}>
      {items.map((item) => (
        <li
          key={item.id}
          className={`${selectedValues.includes(String(item.id)) ? cl.selected : ''}`}
          onClick={(e) => handleToggleOption(e, String(item.id), selectedValues, onChange, onBlur)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggleOption(e, String(item.id));
            }
          }}
          tabIndex="0"
        >
          {selectedValues.includes(String(item.id)) ? <CheckedCheckbox /> : <UncheckedCheckbox />}
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};
export default OptionsList;
