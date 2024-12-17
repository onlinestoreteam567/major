// import Hryvnia from '@assets/svg/Hryvnia';
import cl from './index.module.scss';
// import HryvniaGr from '@assets/svg/HryvniaGr';

export default function PriceCardCatalog({ card }) {
  const hryvnia = '\u20B4';

  return (
    <div className={cl.wrapPriceCatalog}>
      <div className={cl.wrapPrice}>
        <div className={cl.price}>
          <span className={cl.costNow}>{card.is_sale ? card.price_sale : card.price}</span>
          <span className={cl.hrnBlack}>{hryvnia}</span>
        </div>
        {card.is_sale && (
          <div className={cl.oldPrice}>
            <span className={cl.costOld}>{card.price}</span>
            <span className={cl.hrnGrey}>{hryvnia}</span>
          </div>
        )}
      </div>
      <div className={cl.wrapVolume}>{card.volume_ml} ml</div>
    </div>
  );
}

/* <div className={cl.wrapPrice}>
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
      </div> */
