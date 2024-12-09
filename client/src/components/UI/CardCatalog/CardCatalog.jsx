import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ProductRating from '../CardProduct/Rating/ProductRating';
import ImgCardCatalog from './ImgCardCatalog';
import cl from './index.module.scss';
import PriceCardCatalog from './PriceCardCatalog';
import TitleCardCatalog from './TitleCardCatalog';
import { useState } from 'react';
import useScreenSizes from '@hooks/useScreenSizes';

export default function CardCatalog({ card }) {
  const [isShowButton, setIsShowButton] = useState(false);

  const { tablet, deskmax } = useScreenSizes();

  const isColorBtn = tablet === false || deskmax === true;
  const isHidden = deskmax === true;

  const showButton = () => {
    setIsShowButton(true);
  };
  const closeButton = () => {
    setIsShowButton(false);
  };

  const id = card.id;
  return (
    <>
      {isHidden ? (
        <div className={cl.wrapCardCatalog} onMouseEnter={showButton} onMouseLeave={closeButton}>
          <Link to={`/catalog/${id}`}>
            <ImgCardCatalog card={card} />
          </Link>
          <div className={cl.wrapInfo}>
            <TitleCardCatalog card={card} />
            <div>
              <ProductRating />
              <PriceCardCatalog card={card} />
            </div>
            {isShowButton && <Button variant={isColorBtn ? 'primary' : 'secondary'}>Додати до кошику</Button>}
          </div>
        </div>
      ) : (
        <div className={cl.wrapCardCatalog}>
          <Link to={`/catalog/${id}`}>
            <ImgCardCatalog card={card} />
          </Link>
          <div className={cl.wrapInfo}>
            <TitleCardCatalog card={card} />
            <div>
              <ProductRating />
              <PriceCardCatalog card={card} />
            </div>
            <Button variant={isColorBtn ? 'primary' : 'secondary'}>Додати до кошику</Button>
          </div>
        </div>
      )}
    </>
  );
}
