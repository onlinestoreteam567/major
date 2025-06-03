import { Link } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';
import List from './PartnersList/PartnersList';
import cl from './index.module.scss';

const PartnersManagement = () => {
  return (
    <div className={cl.partnersManagement}>
      <div>
        <Link to={`/admin/partners/create`}>+</Link>
        <ReturnButton />;
      </div>
      <div></div>
      <List />
    </div>
  );
};
export default PartnersManagement;
