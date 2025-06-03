import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadPartnerDelete, loadPartners, selectPartnerDelete, selectPartners } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import handleDeleteItem from '@utils/handleDeleteItem';
import { deletePartner, fetchPartners } from '@redux/partners/service';

const PartnersList = () => {
  const items = useSelector(selectPartners);
  const isLoading = useSelector(loadPartners);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadPartnerDelete);
  const deleteResponse = useSelector(selectPartnerDelete);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchPartners());
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => handleDeleteItem(dispatch, deletePartner, id);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.partnersList}>
          {items.map((card) => (
            <li key={card.id}>
              <p>{card.name}</p>
              <Link to={`/admin/partners/${card.id}`}>Редагувати</Link>
              <button onClick={() => handleDelete(card.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default PartnersList;
