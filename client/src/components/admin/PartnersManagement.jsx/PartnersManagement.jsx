import { Link } from 'react-router-dom';
import List from './PartnersList/PartnersList';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPartners } from '@redux/partners/service';
import Button from '@components/UI/Button/Button';
import { selectPartners } from '@redux/selectors';

const PartnersManagement = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectPartners);

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  return (
    <div className={cl.partnersManagement}>
      <div>
        <p>Партнери ({items.length})</p>
        <Link to={`/admin/partners/create`}>
          <Button>Додати партнера</Button>
        </Link>
      </div>
      <List />
    </div>
  );
};
export default PartnersManagement;
