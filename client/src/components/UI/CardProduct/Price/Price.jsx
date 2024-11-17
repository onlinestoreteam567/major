import Hryvnia from '@components/Icons/Hryvnia';
import cl from './index.module.scss';
import HryvniaGr from '@components/Icons/HryvniaGr';
import Heading from '@components/UI/Heading/Heading';

export default function Price({ card }) {
  return (
    <div className={cl.wrapPrice}>
      <div className={cl.price}>
        <Heading type="h2">{card.is_sale ? card.price_sale : card.price}</Heading>
        <p>
          <Hryvnia />
        </p>
      </div>
      {card.is_sale && (
        <div className={cl.oldPrice}>
          <h4>{card.price}</h4>
          <p>
            <HryvniaGr />
          </p>
        </div>
      )}
    </div>
  );
}
