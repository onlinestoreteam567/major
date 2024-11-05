import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './index.module.scss';
import arrow from '@svg/catalogPage/arrow.svg';

const DropDown = ({ options, onSelect }) => {
  const { t } = useTranslation();
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
        {selectedOption ? t(selectedOption, { ns: 'catalogPage' }) : t('selectAnOption', { ns: 'catalogPage' })}
        <img src={arrow} alt="" />
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {t(option, { ns: 'catalogPage' })}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
