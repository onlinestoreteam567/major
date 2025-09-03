import cl from './index.module.scss';
import ProductPrice from '@components/UI/ProductPrice/ProductPrice';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function ProductCardPrice({ card }) {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={`${cl.productCardPrice} ${!card.available ? cl.disabled : ''}`}>
      <ProductPrice card={card} />
      <div className={cl.wrapVolume}>
        {card.volume_ml} {getTranslation('milliliters')}
      </div>
    </div>
  );
}
