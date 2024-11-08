import cl from './index.module.scss';

export default function LabelSale({ card }) {
  return <div className={cl.wrapLabelSale}>Знижка {card.discount} %</div>;
}
