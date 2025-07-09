import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import Spinner from '@components/helpers/Spinner/Spinner';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { loadProductDelete, responseProductDelete } from '@redux/admin/selectors';
import { fetchProductsAll } from '@redux/products/service';
import { loadProducts, selectFilteredProducts } from '@redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import cl from './index.module.scss';

const List = () => {
  const items = useSelector(selectFilteredProducts);
  const isLoading = useSelector(loadProducts);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadProductDelete);
  const deleteResponse = useSelector(responseProductDelete);
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  useEffect(() => {
    if (deleteResponse === 204) dispatch(fetchProductsAll());
  }, [dispatch, deleteResponse]);

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
                <Card card={card} key={card.id} showDeletedMessage={showDeletedMessage} />
              ))}
            </ul>
          </div>
          {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
        </>
      )}
    </>
  );
};
export default List;
