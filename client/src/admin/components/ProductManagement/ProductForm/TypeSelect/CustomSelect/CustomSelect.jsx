import { useEffect, useRef, useState } from 'react';
import cl from './index.module.scss';
import handleClickOutside from '../handlers/handleClickOutside';
import handleKeyDown from '../handlers/handleKeyDown';
import getSelectedItemName from '../handlers/getSelectedItemName';

const CustomSelect = ({ wrapperRef, onChange, value, items, onBlur, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', (e) => handleClickOutside(e, wrapperRef, setIsOpen));
    return () => {
      document.removeEventListener('mousedown', (e) => handleClickOutside(e, wrapperRef, setIsOpen));
    };
  });

  return (
    <>
      <div
        className={cl.customSelectDisplay}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => handleKeyDown(e, onChange, isOpen, setIsOpen, displayRef, cl, wrapperRef)}
        ref={displayRef}
      >
        <span id={`${name}-label`}>{getSelectedItemName(value, items)}</span>
        <span className={`${cl.arrowIcon} ${isOpen ? cl.open : ''}`}></span>
      </div>

      {isOpen && (
        <ul className={cl.optionsList} role="listbox" id={`${name}-list`}>
          {items.map((item) => (
            <li
              key={item.id}
              className={`${cl.optionItem} ${String(value) === String(item.id) ? cl.selected : ''}`}
              onClick={() => {
                onChange(String(item.id));
                setIsOpen(false);
                onBlur();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onChange(String(item.id));
                  setIsOpen(false);
                  onBlur();
                  displayRef.current.focus();
                }
              }}
              role="option"
              data-value={item.id}
            >
              <span className={`${cl.checkboxIcon} ${String(value) === String(item.id) ? cl.checkboxIconChecked : ''}`}>
                {String(value) === String(item.id) && '✔'}
              </span>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CustomSelect;
