import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadProducts, selectProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../redux/service';
import { loadProductDelete, responseProductDelete } from '../../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchProductsAll } from '@redux/products/service';
import handleDeleteItem from '@utils/handleDeleteItem';
import Card from './Card/Card';
import DeletePopUp from './DeletePopUp/DeletePopUp';

const List = () => {
  const items = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadProductDelete);
  const deleteResponse = useSelector(responseProductDelete);
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchProductsAll());
  }, [dispatch, deleteResponse]);

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);
  const handleDelete = (id) => handleDeleteItem(dispatch, deleteProduct, id);

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
                <Card card={card} showDeletePopUp={toggleDeletePopUp} handleDelete={handleDelete} key={card.id} />
              ))}
            </ul>
          </div>
          {isShowDeletePopUp && <DeletePopUp closeDeletePopUp={toggleDeletePopUp} />}
        </>
      )}
    </>
  );
};
export default List;
