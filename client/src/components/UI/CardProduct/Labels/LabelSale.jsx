import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function LabelSale({ card }) {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.wrapLabelSale}>
      <div className={cl.withWord}>
        {getTranslation('discount')} {card.discount} %
      </div>
      <div className={cl.withoutWord}>{card.discount} %</div>
    </div>
  );
}
