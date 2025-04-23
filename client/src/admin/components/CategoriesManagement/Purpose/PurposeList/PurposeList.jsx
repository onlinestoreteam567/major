import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadCategories, selectCategories } from '@redux/selectors';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePurpose } from '../../../../redux/service';
import { loadPurposeDelete, responsePurposeDelete } from '../../../../redux/selectors';
import { useEffect } from 'react';
import { fetchCategories } from '@redux/params/service';
import handleDeleteItem from '@utils/handleDeleteItem';

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
          {items.map((category) => (
            <li key={category.id}>
              <p>{category.name}</p>
              <Link to={`/admin/purpose-categories/${category.id}`}>Редагувати</Link>
              <button onClick={() => handleDelete(category.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default PurposeList;
