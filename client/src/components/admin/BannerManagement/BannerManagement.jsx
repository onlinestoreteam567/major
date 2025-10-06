import { Link } from 'react-router-dom';
import List from './BannerList/BannerList';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBanner } from '@redux/banner/service';
import { selectBanner } from '@redux/selectors';
import Button from '@components/UI/Button/Button';
import { fetchProductsAll } from '@redux/products/service';
import { clearBannerByIdState } from '@redux/banner/bannerByIdSlice';
import { clearProductIdState } from '@redux/products/cardSlice';

const BannerManagement = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBanner);

  useEffect(() => {
    dispatch(fetchBanner());
    dispatch(fetchProductsAll());
    dispatch(clearBannerByIdState());
    dispatch(clearProductIdState());
  }, [dispatch]);

  return (
    <div className={cl.bannerManagement}>
      <div>
        <p>Банери ({items.length})</p>
        <Link to={`/admin/banners/create`}>
          <Button>Додати банер</Button>
        </Link>
      </div>
      <List />
    </div>
  );
};
export default BannerManagement;
