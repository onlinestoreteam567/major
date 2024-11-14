import cl from './index.module.scss';

const Paragraph = ({ type, children }) => {
  return (
    <>
      {/* {<p className={cl.paragraph}>{children}</p>} */}
      {type === 'body1' && <p className={cl.body1}>{children}</p>}
      {type === 'body2' && <p className={cl.body2}>{children}</p>}
      {type === 'label' && <p className={cl.label}>{children}</p>}
    </>
  );
};
export default Paragraph;
