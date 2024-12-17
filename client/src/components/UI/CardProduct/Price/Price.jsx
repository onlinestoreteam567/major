import cl from './index.module.scss';

export default function Price({ card }) {
  const hryvnia = '\u20B4';
  return (
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
  );
}
