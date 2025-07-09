import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import Spinner from '@components/helpers/Spinner/Spinner';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { loadTypeDelete, responseTypeDelete } from '@redux/admin/selectors';
import { fetchTypes } from '@redux/params/service';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import TypeCategoryItem from './TypeCategoryItem/TypeCategoryItem';

const TypeList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTypes);
  const isLoading = useSelector(loadTypes);
  const isLoadingDelete = useSelector(loadTypeDelete);
  const deleteResponse = useSelector(responseTypeDelete);
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchTypes());
  }, [dispatch, deleteResponse]);
  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.typeList}>
          <div>
            <p>Назва (UA)</p>
            <p>Назва (ENG)</p>
          </div>

          {items.map((category) => (
            <TypeCategoryItem key={category.id} category={category} showDeletedMessage={showDeletedMessage} />
          ))}
        </ul>
      )}
      {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
    </>
  );
};
export default TypeList;
