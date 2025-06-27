import { useEffect, useRef, useState } from 'react';
import cl from './index.module.scss';
import getSelectedItemsNames from '../handlers/getSelectedItemsNames.js';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';
import handleClickOutside from '../../TypeSelect/handlers/handleClickOutside';
import handleKeyDown from '../../TypeSelect/handlers/handleKeyDown';

const CustomMultiSelect = ({ wrapperRef, onChange, value, items, onBlur, name, errors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayRef = useRef(null);

  const selectedValues = Array.isArray(value) ? value : [];

  useEffect(() => {
    document.addEventListener('mousedown', (e) => handleClickOutside(e, wrapperRef, setIsOpen));
    return () => {
      document.removeEventListener('mousedown', (e) => handleClickOutside(e, wrapperRef, setIsOpen));
    };
  }, [wrapperRef]);

  const handleToggleOption = (itemId) => {
    let newSelectedValues;
    if (selectedValues.includes(itemId)) {
      newSelectedValues = selectedValues.filter((id) => id !== itemId);
    } else {
      newSelectedValues = [...selectedValues, itemId];
    }
    onChange(newSelectedValues);
    onBlur();
  };

  return (
    <>
      <div
        className={`${cl.customSelectDisplay} ${isOpen ? cl.open : ''} ${errors[name] ? cl.error : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => handleKeyDown(e, onChange, isOpen, setIsOpen, displayRef, cl, wrapperRef, true)}
        ref={displayRef}
        tabIndex="0"
      >
        <span id={`${name}-label`}>{getSelectedItemsNames(selectedValues, items)}</span>
        <span className={isOpen ? cl.open : ''}>
          <Arrow />
        </span>
      </div>

      {isOpen && (
        <ul className={`${cl.optionsList} ${errors[name] ? cl.error : ''}`} role="listbox" id={`${name}-list`}>
          {items.map((item) => (
            <li
              key={item.id}
              className={`${selectedValues.includes(String(item.id)) ? cl.selected : ''}`}
              onClick={() => handleToggleOption(String(item.id))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleToggleOption(String(item.id));
                }
              }}
              data-value={item.id}
              role="option"
              aria-selected={selectedValues.includes(String(item.id))}
              tabIndex="0"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CustomMultiSelect;
