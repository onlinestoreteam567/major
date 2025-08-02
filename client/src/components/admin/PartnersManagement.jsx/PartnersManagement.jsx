import { Link } from 'react-router-dom';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import List from './PartnersList/PartnersList';
import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPartners } from '@redux/partners/service';

const PartnersManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

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
