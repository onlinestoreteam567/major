import cl from './index.module.scss';

export default function LabelSale({ card }) {
  return (
    <>
      <div className={cl.wrapMobile}>
        <div className={cl.wrapLabelSale}>Знижка {card.discount} %</div>
      </div>
      <div className={cl.wrapDesk}>
        <div className={cl.wrapLabelSale}>{card.discount} %</div>
      </div>
    </>
  );
}
