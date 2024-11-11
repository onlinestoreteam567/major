import Hryvnia from '@components/Icons/Hryvnia';
import cl from './index.module.scss';
import HryvniaGr from '@components/Icons/HryvniaGr';

export default function Price({ card }) {
  return (
    <div className={cl.wrapPrice}>
      <div className={cl.price}>
        <p>{card.is_sale ? card.price_sale : card.price}</p>
        <Hryvnia />
      </div>
      {card.is_sale && (
        <div className={cl.oldPrice}>
          <p>{card.price}</p>
          <HryvniaGr />
        </div>
      )}
    </div>
  );
}
