import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteType } from '../../redux/service';
import { responseTypeDelete } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchTypes } from '@redux/params/service';

const TypeList = () => {
  const items = useSelector(selectTypes);
  const isLoading = useSelector(loadTypes);
  const dispatch = useDispatch();
  const deleteResponse = useSelector(responseTypeDelete);

  useEffect(() => {
    if (deleteResponse === 204) {
      dispatch(fetchTypes());
    }
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this category?')) {
      dispatch(deleteType(id));
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
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
