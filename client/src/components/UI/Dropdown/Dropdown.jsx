import { useState } from 'react';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import arrow from '@svg/catalogPage/arrow.svg';

const DropDown = ({ options, onSelect }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={`${cl.dropdown} ${isOpen ? cl.open : ''}`}>
      <button onClick={toggleDropDown}>
        {selectedOption ? getTranslation(selectedOption) : getTranslation('selectAnOption')}
        <img src={arrow} alt="" />
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {getTranslation(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
