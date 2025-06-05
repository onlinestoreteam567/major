import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadProducts, selectProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductDelete, responseProductDelete } from '../../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchProductsAll } from '@redux/products/service';
import Card from './Card/Card';
import DeleteMessage from '../../DeleteMessage/DeleteMessage';

const List = () => {
  const items = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadProductDelete);
  const deleteResponse = useSelector(responseProductDelete);
  const [deletedItemName, setDeletedItemName] = useState('');

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchProductsAll());
  }, [dispatch, deleteResponse, deletedItemName]);

  useEffect(() => {
    if (deletedItemName) {
      const timer = setTimeout(() => {
        setDeletedItemName('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [deletedItemName]);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <>
          <div className={cl.productList}>
            <div>
              <p>В наяв.</p>
              <p>Фото</p>
              <p>Назва</p>
              <p>Артикул</p>
              <p>Ціна</p>
            </div>

            <ul>
              {items.map((card) => (
                <Card card={card} key={card.id} setDeletedItemName={setDeletedItemName} />
              ))}
            </ul>
          </div>
          {deletedItemName && <DeleteMessage>Товар “{deletedItemName}” видалено</DeleteMessage>}
        </>
      )}
    </>
  );
};
export default List;
