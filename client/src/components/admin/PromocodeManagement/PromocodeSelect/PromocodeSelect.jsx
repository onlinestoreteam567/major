import cl from './index.module.scss';
import { useState } from 'react';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';
import PromocodeSelectOptions from './PromocodeSelectOptions/PromocodeSelectOptions';

const PromocodeSelect = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Всі');

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={cl.promocodeSelect}>
      <div onClick={() => toggleExpand()}>
        <span>{selectedValue}</span>
        <span className={isExpanded ? cl.open : ''}>
          <Arrow />
        </span>
      </div>

      {isExpanded && (
        <PromocodeSelectOptions
          setIsExpanded={setIsExpanded}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      )}
    </div>
  );
};

export default PromocodeSelect;
