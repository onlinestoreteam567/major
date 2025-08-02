import Spinner from '@components/helpers/Spinner/Spinner';
import { deletePartner, fetchPartners } from '@redux/partners/service';
import { loadPartnerDelete, loadPartners, selectPartnerDelete, selectPartners } from '@redux/selectors';
import handleDeleteItem from '@utils/handleDeleteItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import PartnerCard from './PartnerCard/PartnerCard';

const PartnersList = () => {
  const items = useSelector(selectPartners);
  const isLoading = useSelector(loadPartners);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadPartnerDelete);
  const deleteResponse = useSelector(selectPartnerDelete);

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
            <PartnerCard card={card} key={card.id} />
          ))}
        </ul>
      )}
    </>
  );
};
export default PartnersList;
