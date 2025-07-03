import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadCategories, selectCategories } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { loadPurposeDelete, responsePurposeDelete } from '../../../../redux/selectors';
import { useEffect } from 'react';
import { fetchCategories } from '@redux/params/service';
import PurposeCategoryItem from './PurposeCategoryItem/PurposeCategoryItem';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '../../../AdminMessage/AdminMessage';

const PurposeList = () => {
  const items = useSelector(selectCategories);
  const isLoading = useSelector(loadCategories);
  const isLoadingDelete = useSelector(loadPurposeDelete);
  const deleteResponse = useSelector(responsePurposeDelete);
  const dispatch = useDispatch();
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchCategories());
  }, [dispatch, deleteResponse]);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.purposeList}>
          <div>
            <p>Фото</p>
            <p>Назва (UA)</p>
            <p>Назва (ENG)</p>
          </div>

          {items.map((category) => (
            <PurposeCategoryItem key={category.id} category={category} showDeletedMessage={showDeletedMessage} />
          ))}
        </ul>
      )}
      {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
    </>
  );
};
export default PurposeList;
