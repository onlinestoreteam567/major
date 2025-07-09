import Spinner from '@components/helpers/Spinner/Spinner';
import { deleteBanner, fetchBanner } from '@redux/banner/service';
import { loadBanner, loadBannerDelete, selectBanner, selectBannerDelete } from '@redux/selectors';
import handleDeleteItem from '@utils/handleDeleteItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cl from './index.module.scss';

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
