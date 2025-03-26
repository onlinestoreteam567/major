import cl from './index.module.scss';

const LoadingButton = ({ isLoading, loadingText, defaultText }) => {
  return (
    <button type="submit" disabled={isLoading} className={cl.loadingButton}>
      {isLoading ? loadingText : defaultText}
    </button>
  );
};
export default LoadingButton;
