import cl from './index.module.scss';

const Paragraph = ({ type = 'body1', children }) => {
  return <p className={cl[type]}>{children}</p>;
};

export default Paragraph;
