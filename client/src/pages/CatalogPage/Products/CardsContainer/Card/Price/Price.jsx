import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function PriceCardCatalog({ card }) {
  const hryvnia = '\u20B4';

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.wrapPriceCatalog}>
      <div className={cl.wrapPrice}>
        <div className={cl.price}>
          <span className={cl.costNow}>{card.is_discount ? card.price_with_discount : card.price}</span>
          <span className={cl.hrnBlack}>{hryvnia}</span>
        </div>
        {card.is_discount && (
          <div className={cl.oldPrice}>
            <span className={cl.costOld}>{card.price}</span>
            <span className={cl.hrnGrey}>{hryvnia}</span>
          </div>
        )}
      </div>
      <div className={cl.wrapVolume}>
        {card.volume_ml} {getTranslation('milliliters')}
      </div>
    </div>
  );
}
