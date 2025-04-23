import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { loadBanner, loadBannerDelete, selectBanner, selectBannerDelete } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteBanner, fetchBanner } from '@redux/banner/service';
import handleDeleteItem from '@utils/handleDeleteItem';

const List = () => {
  const items = useSelector(selectBanner);
  const isLoading = useSelector(loadBanner);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadBannerDelete);
  const deleteResponse = useSelector(selectBannerDelete);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchBanner());
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => handleDeleteItem(dispatch, deleteBanner, id);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {items.map((card) => (
            <li key={card.id}>
              <img src={card.image_url} />
              <p>{card.product.name}</p>
              <Link to={`/admin/banners/${card.id}`}>Редагувати</Link>
              <button onClick={() => handleDelete(card.id)}>Видалити</button>
              <p>
                Фон: <img src={card.background_image_url} />
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default List;
