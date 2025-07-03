import Spinner from '@components/helpers/Spinner/Spinner';
import { deletePromocode, fetchPromocode } from '@redux/admin/promocode/service';
import {
  loadPromocodeDelete,
  loadPromocodeList,
  responsePromocodeDelete,
  responsePromocodeList,
} from '@redux/admin/selectors';
import handleDeleteItem from '@utils/handleDeleteItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cl from './index.module.scss';

const List = () => {
  const items = useSelector(responsePromocodeList);
  const isLoading = useSelector(loadPromocodeList);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadPromocodeDelete);
  const deleteResponse = useSelector(responsePromocodeDelete);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchPromocode());
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => handleDeleteItem(dispatch, deletePromocode, id);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {items !== null &&
            items.map((promocode) => (
              <li key={promocode.id}>
                <p>Назва: {promocode.code}</p>
                <p>Відсоток знижки: {promocode.discount_percent}</p>
                <p>Термін дії почався: {promocode.started_at.slice(0, 10)}</p>
                <p>Термін дії закінчиться: {promocode.expires_at.slice(0, 10)}</p>
                <p>Чи активний {promocode.is_active ? 'Так' : 'Ні'}</p>
                <Link to={`/admin/promocodes/${promocode.id}`}>Редагувати</Link>
                <button onClick={() => handleDelete(promocode.id)}>Видалити</button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
export default List;
