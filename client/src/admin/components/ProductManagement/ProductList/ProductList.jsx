import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadProducts, selectProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../../redux/service';
import { loadProductDelete, responseProductDelete } from '../../../redux/selectors';
import { useEffect } from 'react';
import { fetchProductsAll } from '@redux/products/service';
import handleDeleteItem from '@utils/handleDeleteItem';

const List = () => {
  const items = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadProductDelete);
  const deleteResponse = useSelector(responseProductDelete);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchProductsAll());
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => handleDeleteItem(dispatch, deleteProduct, id);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {items.map((card) => (
            <li key={card.id}>
              <p>{card.name}</p>
              <Link to={`/admin/products/${card.id}`}>Редагувати</Link>
              <button onClick={() => handleDelete(card.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default List;
