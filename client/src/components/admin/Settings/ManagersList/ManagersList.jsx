import Spinner from '@UI/Spinner/Spinner';
import { loadUserDelete, loadUsers, selectUserDelete } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import ManagerCard from './ManagerCard/ManagerCard';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { useEffect } from 'react';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import { fetchUsers } from '@redux/admin/settings/service';

const ManagersList = ({ managers }) => {
  const isLoading = useSelector(loadUsers);
  const isLoadingDelete = useSelector(loadUserDelete);
  const deleteResponse = useSelector(selectUserDelete);
  const dispatch = useDispatch();
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  console.log(deleteResponse);
  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchUsers());
  }, [dispatch, deleteResponse]);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.managersList}>
          {managers?.map((manager) => (
            <ManagerCard manager={manager} key={manager.id} showDeletedMessage={showDeletedMessage} />
          ))}
        </ul>
      )}
      {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
    </>
  );
};
export default ManagersList;
