import Reviews from '@pages/ProductPage/ProductPageCard/Reviews/Reviews';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { useState } from 'react';
import cl from './index.module.scss';
import MobileView from './MobileView';
import DesktopView from './DesktopView';
import ProductPageCardDescription from './ProductPageCardDetails/ProductPageCardDescription/ProductPageCardDescription';

export default function ProductPageCard({ card }) {
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
      <ProductPageCardDescription card={card} />
      <Reviews card={card} />
    </div>
  );
}
