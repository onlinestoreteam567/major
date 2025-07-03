import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes';
import DeletePopUp from '../DeletePopUp/DeletePopUp';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductById } from '@redux/products/service';

const Card = ({ card, showDeletedMessage }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isSmallScreen = !(tablet || deskmin || deskmax);

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProductById(id));
    showDeletedMessage(`Товар “${card.name}” видалено`);
    toggleDeletePopUp();
  };

  const cardContent = (
    <>
      <p>{card.available ? <img src="/svg/admin/available.svg" /> : <img src="/svg/admin/notAvailable.svg" />}</p>
      <span>
        <img src={card.images[0].image} alt={card.name} />
      </span>
      <h3>{card.name}</h3>
      <p>{card.article}</p>
      <p>{card.is_discount ? card.price_with_discount : card.price}</p>
    </>
  );

  return (
    <>
      <li className={cl.card}>
        {isSmallScreen ? (
          <>
            <Link to={`/admin/products/${card.id}`} className={cl.fullCardLink}>
              {cardContent}
            </Link>
            <button onClick={() => toggleDeletePopUp()}>
              <img src="/svg/admin/delete.svg" alt="More options" />
            </button>
          </>
        ) : (
          <>
            {cardContent}
            <button onClick={() => toggleDeletePopUp()}>
              <img src="/svg/admin/delete.svg" alt="More options" />
            </button>
            <Link to={`/admin/products/${card.id}`} className={cl.fullCardLink}>
              <img src="/svg/admin/edit.svg" />
            </Link>
          </>
        )}
      </li>
      {isShowDeletePopUp && (
        <DeletePopUp closeDeletePopUp={toggleDeletePopUp} handleDelete={() => handleDelete(card.id)}>
          Ви впевнені, що хочете видалити цей товар?
        </DeletePopUp>
      )}
    </>
  );
};

export default Card;
