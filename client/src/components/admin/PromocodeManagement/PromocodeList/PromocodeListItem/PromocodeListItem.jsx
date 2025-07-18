import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import { deletePromocode } from '@redux/admin/promocode/service';
import { useState } from 'react';
import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';

const PromocodeListItem = ({ promocode, showDeletedMessage }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const dispatch = useDispatch();

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);

  const handleDelete = (id) => {
    dispatch(deletePromocode(id));
    showDeletedMessage(`Промокод “${promocode.code}” видалено`);
    toggleDeletePopUp();
  };

  return (
    <>
      <li className={cl.promocodeListItem}>
        <p className={promocode.is_active ? cl.active : ''}>{promocode.is_active ? 'Активний' : 'Неактивний'}</p>
        <p>{promocode.started_at.slice(0, 10).replace(/-/g, '.')}</p>
        <p>{promocode.code}</p>
        <p>{promocode.expires_at.slice(0, 10).replace(/-/g, '.')}</p>
        <p>{promocode.discount_percent}%</p>
        <div>
          <Link to={`/admin/promocodes/${promocode.id}`}>
            <img src="/svg/admin/edit.svg" />
          </Link>
          <button onClick={() => toggleDeletePopUp()}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </div>
      </li>
      {isShowDeletePopUp && (
        <DeletePopUp closeDeletePopUp={toggleDeletePopUp} handleDelete={() => handleDelete(promocode.id)}>
          Ви впевнені, що хочете видалити цей товар?
        </DeletePopUp>
      )}
    </>
  );
};
export default PromocodeListItem;