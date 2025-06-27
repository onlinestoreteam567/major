import cl from './index.module.scss';

const LoadingButton = ({ isLoading, children = 'Зберегти' }) => {
  return (
    <button type="submit" disabled={isLoading} className={cl.loadingButton}>
      {children}
    </button>
  );
};
export default LoadingButton;
