import Description from '@pages/ProductPage/Card/ProductDetails/Descript/Description';
import ListReviewsCard from '@pages/ProductPage/Card/Reviews/Reviews';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { useState } from 'react';
import cl from './index.module.scss';
import MobileView from './MobileView';
import DesktopView from './DesktopView';
import { Helmet } from 'react-helmet-async';

export default function Card({ card }) {
  const [count, setCount] = useState(1);
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isNotMobile = tablet || deskmin || deskmax;

  return (
    <div className={cl.cardContainer}>
      <Helmet>
        <title>{card.name} - динамічна назва, змінюється в залежності від товару</title>
        <meta name="description" content={card.description} />
        <meta property="og:title" content={card.name} />
        <meta property="og:description" content={card.description} />
        <meta property="og:image" content={card.image} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
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
