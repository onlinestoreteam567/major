import cl from './index.module.scss';
import PropTypes from 'prop-types';

const Subtitle = ({ type = 1, children }) => {
  return (
    <>
      {type === 1 && <h2 className={cl.subtitle1}>{children}</h2>}
      {type === 2 && <h3 className={cl.subtitle2}>{children}</h3>}
    </>
  );
};

Subtitle.propTypes = {
  type: PropTypes.oneOf([1, 2]),
  children: PropTypes.node.isRequired,
};
export default Subtitle;
