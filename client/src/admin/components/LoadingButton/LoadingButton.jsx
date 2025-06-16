import cl from './index.module.scss';

const LoadingButton = ({ isLoading }) => {
  return (
    <button type="submit" disabled={isLoading} className={cl.loadingButton}>
      Зберегти
    </button>
  );
};
export default LoadingButton;
