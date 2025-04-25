import Description from '@components/UI/CardProduct/Descript/Description';
import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
import useScreenSizes from '@hooks/useScreenSizes';
import { useState } from 'react';
import cl from './index.module.scss';
import MobileView from './MobileView';
import DesktopView from './DesktopView';

export default function Card({ card }) {
  const [count, setCount] = useState(1);
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isNotMobile = tablet || deskmin || deskmax;

  return (
    <div className={cl.cardContainer}>
      <div className={cl.wrapItem}>
        {!isNotMobile ? (
          <MobileView card={card} count={count} setCount={setCount} />
        ) : (
          <DesktopView card={card} count={count} setCount={setCount} />
        )}
      </div>
      <Description card={card} />
      <ListReviewsCard card={card} />
    </div>
  );
}
