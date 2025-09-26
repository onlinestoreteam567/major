import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import Spinner from '@UI/Spinner/Spinner';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { loadPurposeDelete, responsePurposeDelete, selectRole } from '@redux/selectors';
import { fetchCategories } from '@redux/params/service';
import { loadCategories, selectCategories } from '@redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import PurposeCategoryItem from './PurposeCategoryItem/PurposeCategoryItem';

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

  const role = useSelector(selectRole);
  const isShowAdminSections = role === 1;

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
            <PurposeCategoryItem
              key={category.id}
              category={category}
              showDeletedMessage={showDeletedMessage}
              isShowAdminSections={isShowAdminSections}
            />
          ))}
        </ul>
      )}
      {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
    </>
  );
};
export default PurposeList;
