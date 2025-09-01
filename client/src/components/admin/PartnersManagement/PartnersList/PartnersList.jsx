import Spinner from '@components/helpers/Spinner/Spinner';
import { fetchPartners } from '@redux/partners/service';
import { loadPartnerDelete, loadPartners, selectPartnerDelete, selectPartners } from '@redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import PartnerCard from './PartnerCard/PartnerCard';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const PartnersList = () => {
  const items = useSelector(selectPartners);
  const isLoading = useSelector(loadPartners);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadPartnerDelete);
  const deleteResponse = useSelector(selectPartnerDelete);
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchPartners());
  }, [dispatch, deleteResponse]);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.partnersList}>
          {items.map((card) => (
            <PartnerCard card={card} key={card.id} showDeletedMessage={showDeletedMessage} />
          ))}
        </ul>
      )}
      {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
    </>
  );
};
export default PartnersList;
