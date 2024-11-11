import cl from './index.module.scss';

const Paragraph = ({ children }) => {
  return <p className={cl.paragraph}>{children}</p>;
};
export default Paragraph;
