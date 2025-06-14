import { useState, useRef, useEffect, useCallback } from 'react';
import cl from './index.module.scss';
import Spinner from '@components/helpers/Spinner/Spinner';
import { loadTypes, selectTypes } from '@redux/selectors';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

const TypeSelect = ({ control, errors }) => {
  const items = useSelector(selectTypes);
  const isLoading = useSelector(loadTypes);
  const name = 'type_category';

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const displayRef = useRef(null); // Ref for the custom display div

  // Close dropdown when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  // Keyboard navigation for accessibility
  const handleKeyDown = useCallback(
    (event, onChange) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        displayRef.current.focus(); // Return focus to the display
        event.stopPropagation();
      } else if (event.key === 'Enter' || event.key === ' ') {
        if (!isOpen) {
          setIsOpen(true);
        } else if (document.activeElement.classList.contains(cl.optionItem)) {
          // If an option is focused, select it
          const selectedId = document.activeElement.dataset.value;
          onChange(selectedId);
          setIsOpen(false);
          displayRef.current.focus();
        }
        event.preventDefault(); // Prevent default behavior for space/enter
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault(); // Prevent page scrolling
        if (!isOpen) {
          setIsOpen(true);
          // Focus first option when opened with arrow keys
          setTimeout(() => {
            // Small delay to ensure list is rendered
            const firstOption = wrapperRef.current.querySelector(`.${cl.optionItem}`);
            if (firstOption) {
              firstOption.focus();
            }
          }, 0);
        } else {
          const currentFocused = document.activeElement;
          const options = Array.from(wrapperRef.current.querySelectorAll(`.${cl.optionItem}`));
          const currentIndex = options.indexOf(currentFocused);

          let nextIndex;
          if (event.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % options.length;
          } else {
            // ArrowUp
            nextIndex = (currentIndex - 1 + options.length) % options.length;
          }
          options[nextIndex].focus();
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const getSelectedItemName = (currentValue) => {
    const selectedItem = items.find((item) => String(item.id) === String(currentValue));
    return selectedItem ? selectedItem.name : 'Select an option';
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur, ...field } }) => (
        <div className={cl.customSelectWrapper} ref={wrapperRef}>
          {/* Visually hidden native select for RHF and accessibility fallback */}
          {/* It's good practice to mirror the value here, though not strictly required for RHF */}
          <select
            className={cl.visuallyHiddenSelect}
            value={value || ''} // Ensure value is controlled
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur} // Important for RHF touched state
            id={name}
            {...field}
            aria-hidden="true" // Hide from screen readers as we have a custom display
            tabIndex={-1} // Make it not focusable
          >
            <option value="">Select an option</option> {/* Placeholder option */}
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          {/* Custom Display */}
          <div
            className={cl.customSelectDisplay}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => handleKeyDown(e, onChange, value)}
            tabIndex={0} // Make it focusable
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={`${name}-list`}
            aria-labelledby={`${name}-label`} // Assuming you have a label linked
            ref={displayRef}
          >
            <span id={`${name}-label`}>{getSelectedItemName(value)}</span>
            <span className={`${cl.arrowIcon} ${isOpen ? cl.open : ''}`}></span>
          </div>

          {/* Custom Options List */}
          {isOpen && (
            <ul className={cl.optionsList} role="listbox" id={`${name}-list`}>
              {items.map((item) => (
                <li
                  key={item.id}
                  className={`${cl.optionItem} ${String(value) === String(item.id) ? cl.selected : ''}`}
                  onClick={() => {
                    onChange(String(item.id)); // Ensure value is a string if your select expects it
                    setIsOpen(false);
                    onBlur(); // Manually trigger onBlur for RHF validation
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onChange(String(item.id));
                      setIsOpen(false);
                      onBlur();
                      displayRef.current.focus(); // Return focus to the display
                    }
                  }}
                  role="option"
                  aria-selected={String(value) === String(item.id)}
                  tabIndex={-1} // Make options focusable only when active via keyboard
                  data-value={item.id} // Custom data attribute for easy access
                >
                  <span
                    className={`${cl.checkboxIcon} ${String(value) === String(item.id) ? cl.checkboxIconChecked : ''}`}
                  >
                    {String(value) === String(item.id) && '✔'}
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          )}

          {errors[name] && <p style={{ color: 'red', marginTop: '5px' }}>{errors[name].message}</p>}
        </div>
      )}
    />
  );
};

export default TypeSelect;
