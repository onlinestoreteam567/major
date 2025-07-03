import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { loadTypeDelete, responseTypeDelete } from '../../../../redux/selectors';
import { useEffect } from 'react';
import { fetchTypes } from '@redux/params/service';
import TypeCategoryItem from './TypeCategoryItem/TypeCategoryItem';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '../../../AdminMessage/AdminMessage';

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
