import { useEffect, useRef, useState } from 'react';
import cl from './index.module.scss';
import handleClickOutside from '../handlers/handleClickOutside';
import handleKeyDown from '../handlers/handleKeyDown';
import getSelectedItemName from '../handlers/getSelectedItemName';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';

const CustomSelect = ({ wrapperRef, onChange, value, items, onBlur, name, errors }) => {
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
        className={`${cl.customSelectDisplay} ${isOpen ? cl.open : ''} ${errors[name] ? cl.error : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => handleKeyDown(e, onChange, isOpen, setIsOpen, displayRef, cl, wrapperRef)}
        ref={displayRef}
      >
        <span id={`${name}-label`}>{getSelectedItemName(value, items)}</span>
        <span className={isOpen ? cl.open : ''}>
          <Arrow />
        </span>
      </div>

      {isOpen && (
        <ul className={cl.optionsList} role="listbox" id={`${name}-list`}>
          {items.map((item) => (
            <li
              key={item.id}
              className={String(value) === String(item.id) ? cl.selected : ''}
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
              data-value={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CustomSelect;
