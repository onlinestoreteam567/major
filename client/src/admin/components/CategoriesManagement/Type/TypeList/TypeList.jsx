import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteType } from '../../../../redux/service';
import { loadTypeDelete, responseTypeDelete } from '../../../../redux/selectors';
import { useEffect } from 'react';
import { fetchTypes } from '@redux/params/service';
import handleDeleteItem from '@utils/handleDeleteItem';
import TypeCategoryItem from './TypeCategoryItem/TypeCategoryItem';

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
          <div>
            <p>Назва (UA)</p>
            <p>Назва (ENG)</p>
          </div>

          {items.map((category) => (
            <TypeCategoryItem key={category.id} category={category} />
          ))}
        </ul>
      )}
    </>
  );
};
export default TypeList;
