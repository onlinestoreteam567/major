import { Link } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';
import List from './BannerList/BannerList';
import cl from './index.module.scss';

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
