import Hryvnia from '@components/Icons/Hryvnia';
import cl from './index.module.scss';
import HryvniaGr from '@components/Icons/HryvniaGr';

export default function Price({ card }) {
  return (
    <div className={cl.wrapPrice}>
      <p className={cl.price}>
        {card.is_sale ? card.price_sale : card.price}
        <Hryvnia />
      </p>
      {card.is_sale && (
        <p className={cl.oldPrice}>
          {card.price}
          <HryvniaGr />
        </p>
      )}
    </div>
  );
}
