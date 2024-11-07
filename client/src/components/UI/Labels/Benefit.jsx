import cl from './index.module.scss';

const Benefit = ({ percent }) => {
  // Don't render anything if percent is undefined
  if (!percent) {
    return null;
  }

  return <div className={cl.benefit}>Вигода {percent}</div>;
};
export default Benefit;
