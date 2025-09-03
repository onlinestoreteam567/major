import cl from './index.module.scss';
import { useEffect, useState } from 'react';
import ReviewSelectOptions from './ReviewSelectOptions/ReviewSelectOptions';
import Arrow from '@components/UI/icons/Admin/Arrow/Arrow';
import { useSelector } from 'react-redux';
import { isFetchedAllReviews } from '@redux/selectors';

const ReviewsSelect = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Всі');
  const isAllReviews = useSelector(isFetchedAllReviews);

  useEffect(() => {
    isAllReviews && setSelectedValue('Всі');
  }, [isAllReviews]);

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
