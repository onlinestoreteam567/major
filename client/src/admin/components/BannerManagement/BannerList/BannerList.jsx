import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { loadBanner, loadBannerDelete, selectBanner, selectBannerDelete } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteBanner, fetchBanner } from '@redux/banner/service';

const List = () => {
  const items = useSelector(selectBanner);
  const isLoading = useSelector(loadBanner);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadBannerDelete);
  const deleteResponse = useSelector(selectBannerDelete);

  useEffect(() => {
    if (deleteResponse === 204) {
      dispatch(fetchBanner());
    }
  }, [dispatch, deleteResponse]);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this category?')) {
      dispatch(deleteBanner(id));
    }
  };
  console.log(items);
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
