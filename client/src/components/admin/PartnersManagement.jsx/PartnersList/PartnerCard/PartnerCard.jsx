import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import { useState } from 'react';
import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';
import { deletePartner } from '@redux/partners/service';
import { useDispatch } from 'react-redux';

const PartnerCard = ({ card, showDeletedMessage }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePartner(id));
    showDeletedMessage(`Партнера “${card.name}” видалено`);
    toggleDeletePopUp();
  };

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);

  return (
    <>
      <li className={cl.partnerCard}>
        <p>{card.name}</p>
        <div>
          <Link to={`/admin/partners/${card.id}`}>
            <img src="/svg/admin/edit.svg" />
          </Link>
          <button onClick={() => toggleDeletePopUp()}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </div>
      </li>
      {isShowDeletePopUp && (
        <DeletePopUp closeDeletePopUp={toggleDeletePopUp} handleDelete={() => handleDelete(card.id)}>
          Ви впевнені, що хочете видалити цього партнера
        </DeletePopUp>
      )}
    </>
  );
};
export default PartnerCard;
