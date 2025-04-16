import { Link } from 'react-router-dom';
import cl from './index.module.scss';

const ReturnButton = ({ children = 'Повернутися', to = '/admin' }) => {
  return (
    <Link to={to} className={cl.return}>
      {children}
    </Link>
  );
};

export default ReturnButton;
