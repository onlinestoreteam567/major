import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { deleteProductById } from '@redux/products/service';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import { useImageError } from '@hooks/useImageError';

const ProductListItem = ({ card, showDeletedMessage, isShowAdminSections }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isSmallScreen = !(tablet || deskmin || deskmax);
  const [imageSrc, handleError] = useImageError(card.images[0].image);

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
        <img src={imageSrc} alt={card.name} onError={handleError} />
      </span>
      <h3>{card.name}</h3>
      <p>{card.article}</p>
      <p>{card.is_discount ? card.price_with_discount : card.price}</p>
    </>
  );

  return (
    <>
      <li className={cl.productListItem}>
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
            {isShowAdminSections && (
              <button onClick={() => toggleDeletePopUp()}>
                <img src="/svg/admin/delete.svg" alt="More options" />
              </button>
            )}
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

export default ProductListItem;
