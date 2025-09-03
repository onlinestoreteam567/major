import PropTypes from 'prop-types';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';

const NavLink = ({ children, type, to, ariaLabel }) => {
  return (
    <>
      {type === 'header' && (
        <li className={cl.header}>
          <Link to={to} aria-label={ariaLabel}>
            {children}
          </Link>
        </li>
      )}
      {type === 'footer' && (
        <li className={cl.footer}>
          <Link to={to} aria-label={ariaLabel}>
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
