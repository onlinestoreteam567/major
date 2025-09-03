import cl from './index.module.scss';
import { useEffect, useState } from 'react';
import Arrow from '@components/UI/icons/Admin/Arrow/Arrow';
import PromocodeSelectOptions from './PromocodeSelectOptions/PromocodeSelectOptions';
import { isFetchedAllPromocodes } from '@redux/selectors';
import { useSelector } from 'react-redux';

const PromocodeSelect = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Всі');
  const isAllPromocodes = useSelector(isFetchedAllPromocodes);

  useEffect(() => {
    isAllPromocodes && setSelectedValue('Всі');
  }, [isAllPromocodes]);

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
