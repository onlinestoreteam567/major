import Spinner from '@UI/Spinner/Spinner';
import { loadUserDelete, loadUsers, selectUserDelete } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import ManagerCard from './ManagerCard/ManagerCard';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { useEffect } from 'react';
import { fetchPartners } from '@redux/partners/service';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const ManagersList = ({ managers }) => {
  const isLoading = useSelector(loadUsers);
  const isLoadingDelete = useSelector(loadUserDelete);
  const deleteResponse = useSelector(selectUserDelete);
  const dispatch = useDispatch();
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchPartners());
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
