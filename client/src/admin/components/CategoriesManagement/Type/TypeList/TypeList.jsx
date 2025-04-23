import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteType } from '../../../../redux/service';
import { loadTypeDelete, responseTypeDelete } from '../../../../redux/selectors';
import { useEffect } from 'react';
import { fetchTypes } from '@redux/params/service';
import handleDeleteItem from '@utils/handleDeleteItem';

const TypeList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTypes);
  const isLoading = useSelector(loadTypes);
  const isLoadingDelete = useSelector(loadTypeDelete);
  const deleteResponse = useSelector(responseTypeDelete);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchTypes());
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => handleDeleteItem(dispatch, deleteType, id);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.typeList}>
          {items.map((type) => (
            <li key={type.id}>
              <p>{type.name}</p>
              <Link to={`/admin/type/${type.id}`}>Редагувати</Link>
              <button onClick={() => handleDelete(type.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default TypeList;
