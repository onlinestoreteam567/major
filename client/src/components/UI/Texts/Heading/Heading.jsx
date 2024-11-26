import PropTypes from 'prop-types';
import cl from './index.module.scss';

const Heading = ({ type, children }) => {
  return (
    <>
      {type === 'h1' && <h1 className={cl.h1}>{children}</h1>}
      {type === 'h2' && <h2 className={cl.h2}>{children}</h2>}
      {type === 'h3' && <h3 className={cl.h3}>{children}</h3>}
      {type === 'h4' && <h4 className={cl.h4}>{children}</h4>}
    </>
  );
};

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
