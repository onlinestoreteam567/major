import Spinner from '@components/helpers/Spinner/Spinner';
import { fetchPromocode } from '@redux/admin/promocode/service';
import {
  loadPromocodeDelete,
  loadPromocodeList,
  responsePromocodeDelete,
  responsePromocodeList,
} from '@redux/admin/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import PromocodeListItem from './PromocodeListItem/PromocodeListItem';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const List = () => {
  const items = useSelector(responsePromocodeList);
  const isLoading = useSelector(loadPromocodeList);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadPromocodeDelete);
  const deleteResponse = useSelector(responsePromocodeDelete);
  const [deletedMessage, showDeletedMessage] = useTimedMessage(20000);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchPromocode());
  }, [dispatch, deleteResponse]);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <>
          <ul className={cl.list}>
            {items !== null &&
              items.map((promocode) => (
                <PromocodeListItem key={promocode.id} promocode={promocode} showDeletedMessage={showDeletedMessage} />
              ))}
          </ul>
          {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
        </>
      )}
    </>
  );
};

export default List;
