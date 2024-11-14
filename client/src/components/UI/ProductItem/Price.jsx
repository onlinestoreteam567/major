import Hryvnia from '@components/Icons/Hryvnia';
import cl from './index.module.scss';
import HryvniaGr from '@components/Icons/HryvniaGr';
import Heading from '../Heading/Heading';

export default function Price({ card }) {
  return (
    <div className={cl.wrapPrice}>
      <div className={cl.price}>
        <Heading type="h2">{card.is_sale ? card.price_sale : card.price}</Heading>
        <Heading type="h2">
          <Hryvnia />
        </Heading>
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
