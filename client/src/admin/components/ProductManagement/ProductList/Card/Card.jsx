import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes';

const Card = ({ card, handleDelete }) => {
  const { tablet, deskmin, deskmax } = useScreenSizes();

  const isSmallScreen = !(tablet || deskmin || deskmax);

  const cardContent = (
    <>
      <p>{card.available ? <img src="/svg/admin/available.svg" /> : <img src="/svg/admin/notAvalaible.svg" />}</p>
      <Link to={`/admin/products/${card.id}`}>
        <img src={card.images[0].image} alt={card.name} />
      </Link>
      <h3>{card.name}</h3>
      <p>Артикул</p>
      <p>{card.is_discount ? card.price_with_discount : card.price}</p>
      <button>
        <img src="/svg/admin/edit.svg" />
      </button>
    </>
  );

  return (
    <li className={cl.card}>
      {isSmallScreen ? (
        <>
          <Link to={`/admin/products/${card.id}`} className={cl.fullCardLink}>
            {cardContent}
          </Link>
          <button onClick={() => handleDelete(card.id)}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </>
      ) : (
        <>
          {cardContent}
          <button onClick={() => handleDelete(card.id)}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </>
      )}
    </li>
  );
};

export default Card;
