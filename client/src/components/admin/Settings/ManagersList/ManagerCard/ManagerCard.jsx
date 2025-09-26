import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import { useState } from 'react';
import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';
import { useDispatch } from 'react-redux';
import { deleteUser } from '@redux/admin/settings/service';

const ManagerCard = ({ manager, showDeletedMessage }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    showDeletedMessage(`Менеджера “${manager?.email}” видалено`);
    toggleDeletePopUp();
  };

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);

  return (
    <>
      <li className={cl.managerCard}>
        <p>{manager.email}</p>
        <div>
          <Link to={`/admin/settings/${manager?.id}`}>
            <img src="/svg/admin/edit.svg" />
          </Link>
          <button onClick={() => toggleDeletePopUp()}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </div>
      </li>
      {isShowDeletePopUp && (
        <DeletePopUp closeDeletePopUp={toggleDeletePopUp} handleDelete={() => handleDelete(manager.id)}>
          Ви впевнені, що хочете видалити менеджера “{manager?.email}”?
        </DeletePopUp>
      )}
    </>
  );
};
export default ManagerCard;
