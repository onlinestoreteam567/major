import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadProducts, selectFilteredProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductDelete, responseProductDelete } from '../../../redux/selectors';
import { useEffect } from 'react';
import { fetchProductsAll } from '@redux/products/service';
import Card from './Card/Card';
import AdminMessage from '../../AdminMessage/AdminMessage';
import useTimedMessage from '@hooks/admin/useTimedMessage';

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
