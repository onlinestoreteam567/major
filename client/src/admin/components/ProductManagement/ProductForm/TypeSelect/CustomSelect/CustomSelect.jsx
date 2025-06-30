import { useRef, useState } from 'react';
import cl from './index.module.scss';
import getSelectedItemName from '../handlers/getSelectedItemName';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';
import useClickOutside from '@hooks/admin/useClickOutside';

const CustomSelect = ({ onChange, value, items, onBlur, name, errors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayRef = useRef(null);
  const wrapperRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className={cl.customSelectWrapper} ref={wrapperRef}>
      <div
        className={`${cl.customSelectDisplay} ${isOpen ? cl.open : ''} ${errors[name] ? cl.error : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        ref={displayRef}
      >
        <span id={`${name}-label`}>{getSelectedItemName(value, items)}</span>
        <span className={isOpen ? cl.open : ''}>
          <Arrow />
        </span>
      </div>

      {isOpen && (
        <ul className={`${cl.optionsList} ${errors[name] ? cl.error : ''}`}>
          {items.map((item) => (
            <li
              key={item.id}
              className={String(value) === String(item.id) ? cl.selected : ''}
              onClick={() => {
                onChange(String(item.id));
                setIsOpen(false);
                onBlur();
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CustomSelect;
