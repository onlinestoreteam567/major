import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes';

const Card = ({ card, showDeletePopUp }) => {
  const { tablet, deskmin, deskmax } = useScreenSizes();

  const isSmallScreen = !(tablet || deskmin || deskmax);

  const cardContent = (
    <>
      <p>{card.available ? <img src="/svg/admin/available.svg" /> : <img src="/svg/admin/notAvalaible.svg" />}</p>
      <span>
        <img src={card.images[0].image} alt={card.name} />
      </span>
      <h3>{card.name}</h3>
      <p>{card.article}</p>
      <p>{card.is_discount ? card.price_with_discount : card.price}</p>
      <Link to={`/admin/products/${card.id}`} className={cl.fullCardLink}>
        <img src="/svg/admin/edit.svg" />
      </Link>
    </>
  );

  return (
    <li className={cl.card}>
      {isSmallScreen ? (
        <>
          <Link to={`/admin/products/${card.id}`} className={cl.fullCardLink}>
            {cardContent}
          </Link>
          <button onClick={() => showDeletePopUp()}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </>
      ) : (
        <>
          {cardContent}
          <button onClick={() => showDeletePopUp()}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </>
      )}
    </li>
  );
};

export default Card;
