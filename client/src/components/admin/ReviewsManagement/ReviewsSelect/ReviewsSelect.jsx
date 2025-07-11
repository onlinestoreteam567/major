import cl from './index.module.scss';
import { useState } from 'react';
import ReviewSelectOptions from './ReviewSelectOptions/ReviewSelectOptions';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';

const ReviewsSelect = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Всі');

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={cl.reviewSelect}>
      <div onClick={() => toggleExpand()}>
        <span>{selectedValue}</span>
        <span className={isExpanded ? cl.open : ''}>
          <Arrow />
        </span>
      </div>

      {isExpanded && (
        <ReviewSelectOptions
          setIsExpanded={setIsExpanded}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      )}
    </div>
  );
};

export default ReviewsSelect;
