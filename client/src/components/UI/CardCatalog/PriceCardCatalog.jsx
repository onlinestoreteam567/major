import Hryvnia from '@components/Icons/Hryvnia';
import cl from './index.module.scss';
import HryvniaGr from '@components/Icons/HryvniaGr';

export default function PriceCardCatalog({ card }) {
  return (
    <div className={cl.wrapPriceCatalog}>
      <div className={cl.wrapPrice}>
        <div className={cl.price}>
          <h4>{card.is_sale ? card.price_sale : card.price}</h4>
          <p>
            <Hryvnia />
          </p>
        </div>
        {card.is_sale && (
          <div className={cl.oldPrice}>
            <h4>{card.price}</h4>
            <p>
              <HryvniaGr />
            </p>
          </div>
        )}
      </div>
      <div className={cl.wrapVolume}>{card.volume_ml} ml</div>
    </div>
  );
}
