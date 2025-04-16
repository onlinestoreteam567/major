import cl from './index.module.scss';
import List from './BannerList/BannerList';
import { Link } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';

const BannerManagement = () => {
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
