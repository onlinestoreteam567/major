import { Link } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';
import List from './BannerList/BannerList';
import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBanner } from '@redux/banner/service';

const BannerManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanner());
  }, [dispatch]);

  return (
    <div className={cl.bannerManagement}>
      <div>
        <Link to={`/admin/banners/create`}>+</Link>
        <ReturnButton />;
      </div>
      <List />
    </div>
  );
};
export default BannerManagement;
