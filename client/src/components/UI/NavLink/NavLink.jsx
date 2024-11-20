import PropTypes from 'prop-types';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';

const NavLink = ({ children, type, to }) => {
  return (
    <>
      {type === 'header' && (
        <li>
          <Link to={to} className={cl.header}>
            {children}
          </Link>
        </li>
      )}
      {type === 'footer' && (
        <li>
          <Link to={to} className={cl.footer}>
            {children}
          </Link>
        </li>
      )}
    </>
  );
};

NavLink.propTypes = {
  type: PropTypes.oneOf(['header', 'footer']).isRequired,
  children: PropTypes.node.isRequired,
};
export default NavLink;
