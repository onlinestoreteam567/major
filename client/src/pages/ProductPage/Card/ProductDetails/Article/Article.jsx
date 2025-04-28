import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function Article({ card }) {
  const { getTranslation } = useTranslationNamespace('common');
  return (
    <div className={cl.wrapArticle}>
      <div className={cl.wrapAvaible}>
        <div className={card.available ? cl.green : cl.gray}></div>

        <p>{card.available ? getTranslation('available') : getTranslation('temporarilyUnavailable')}</p>
      </div>
      <p>
        {getTranslation('sku')} {card.article}
      </p>
    </div>
  );
}
