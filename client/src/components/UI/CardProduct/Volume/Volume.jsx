import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function Volume({ card }) {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.wrapVolume}>
      {card.volume_ml} {getTranslation('milliliters')}
    </div>
  );
}
