import Hryvnia from '@components/Icons/Hryvnia';
import cl from './index.module.scss';
import HryvniaGr from '@components/Icons/HryvniaGr';
import Heading from '../Heading/Heading';

export default function PriceCardCatalog({ card }) {
  return (
    <div>
      <div>
        <div className={cl.price}>
          <Heading type="h4">{card.is_sale ? card.price_sale : card.price}</Heading>
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
      <div>{card.volume}</div>
    </div>
  );
}
