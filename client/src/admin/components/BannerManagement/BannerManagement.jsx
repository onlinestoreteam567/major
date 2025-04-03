import cl from './index.module.scss';
import List from './BannerList/BannerList';
import { Link } from 'react-router-dom';

const BannerManagement = () => {
  return (
    <div className={cl.bannerManagement}>
      <div>
        <Link to={`/admin/banners/create`}>+</Link>
      </div>
      <List />
    </div>
  );
};
export default BannerManagement;
