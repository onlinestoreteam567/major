import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadCategories, selectCategories } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deletePurpose } from '../../../../redux/service';
import { loadPurposeDelete, responsePurposeDelete } from '../../../../redux/selectors';
import { useEffect } from 'react';
import { fetchCategories } from '@redux/params/service';
import handleDeleteItem from '@utils/handleDeleteItem';
import PurposeCategoryItem from './PurposeCategoryItem/PurposeCategoryItem';

const PurposeList = () => {
  const items = useSelector(selectCategories);
  const isLoading = useSelector(loadCategories);
  const isLoadingDelete = useSelector(loadPurposeDelete);
  const deleteResponse = useSelector(responsePurposeDelete);
  const dispatch = useDispatch();

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchCategories());
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => handleDeleteItem(dispatch, deletePurpose, id);

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
            <PurposeCategoryItem key={category.id} category={category} />
          ))}
        </ul>
      )}
    </>
  );
};
export default PurposeList;
