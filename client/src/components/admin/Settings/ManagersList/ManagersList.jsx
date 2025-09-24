import Spinner from '@UI/Spinner/Spinner';
import { loadUsers } from '@redux/selectors';
import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import ManagerCard from './ManagerCard/ManagerCard';

const ManagersList = ({ managers }) => {
  const isLoading = useSelector(loadUsers);
  console.log(managers);
  // const isLoadingDelete = useSelector(loadPartnerDelete);
  // const deleteResponse = useSelector(selectPartnerDelete);
  // const dispatch = useDispatch();
  // const [deletedMessage, showDeletedMessage] = useTimedMessage();

  // useEffect(() => {
  // deleteResponse === 204 && dispatch(fetchPartners());
  // }, [dispatch, deleteResponse]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.managersList}>
          {managers?.map((card) => (
            <ManagerCard card={card} key={card.id} />
          ))}
        </ul>
      )}
      {/* {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>} */}
    </>
  );
};
export default ManagersList;
