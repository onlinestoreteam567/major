import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadProducts, selectProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../redux/service';
import { loadProductDelete, responseProductDelete } from '../../../redux/selectors';
import { useEffect } from 'react';
import { fetchProductsAll } from '@redux/products/service';
import handleDeleteItem from '@utils/handleDeleteItem';
import Card from './Card/Card';

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
        <div className={cl.productList}>
          <div>
            <p>В наяв.</p>
            <p>Фото</p>
            <p>Назва</p>
            <p>Ціна</p>
          </div>

          <ul className={cl.productList}>
            {items.map((card) => (
              <Card card={card} handleDelete={handleDelete} key={card.id} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default List;
