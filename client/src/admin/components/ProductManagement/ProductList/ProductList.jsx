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
        <div className={cl.productList}>
          <div>
            <p>В наяв.</p>
            <p>Фото</p>
            <p>Назва</p>
          </div>

          <ul className={cl.productList}>
            {items.map((card) => (
              <li key={card.id}>
                {console.log(card)}
                <p>
                  {card.available ? (
                    <img src="/svg/admin/available.svg" alt="" />
                  ) : (
                    <img src="/svg/admin/notAvalaible.svg" alt="" />
                  )}
                </p>
                <Link to={`/admin/products/${card.id}`}>
                  <img src={card.images[0].image} alt="" />
                </Link>
                <h3>{card.name}</h3>
                <button onClick={() => handleDelete(card.id)}>
                  <img src="/svg/admin/dots.svg" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default List;
