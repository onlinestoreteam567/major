import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function ProductVolume({ card }) {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.productVolume}>
      {card.volume_ml} {getTranslation('milliliters')}
    </div>
  );
}
