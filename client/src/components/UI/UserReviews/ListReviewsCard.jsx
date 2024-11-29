import cl from './index.module.scss';
import reviewsList from './reviewsList.json';
import ReviewsCard from './ReviewsCard';
import ArrowLeft from '@components/Icons/ArrowLeft';
import ArrowRight from '@components/Icons/ArrowRight';
import Heading from '../Texts/Heading/Heading';
import { useState } from 'react';

export default function ListReviewsCard() {
  const [index, setIndex] = useState(1);

  const onChangeValue = (value) => {
    setIndex((prevIndex) => prevIndex + value);
  };

  const total = reviewsList.length;
  const showReview = reviewsList[index - 1];

  return (
    <div className={cl.wrapListReviewsCard}>
      <div className={cl.wrapTitle}>
        <Heading type="h2">Відгуки про товар</Heading>
        <Heading type="h2">Флюїд шовк для тонкого волосся</Heading>
      </div>
      <ReviewsCard review={showReview} />
      {/* <ul>
        {reviewsList.map((review) => (
          <li key={review.id}>
            <ReviewsCard review={review} />
          </li>
        ))}
      </ul> */}
      <div className={cl.wrapReviewBtn}>
        <button type="button" disabled={index === 1} onClick={() => onChangeValue(-1)}>
          <ArrowLeft />
        </button>
        <button type="button" disabled={index === total} onClick={() => onChangeValue(+1)}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
