import cl from './index.module.scss';

export default function LabelSale({ card }) {
  return (
    <div className={cl.wrapLabelSale}>
      <div className={cl.withWord}>Знижка {card.discount} %</div>
      <div className={cl.withoutWord}>{card.discount} %</div>
    </div>
  );
}
