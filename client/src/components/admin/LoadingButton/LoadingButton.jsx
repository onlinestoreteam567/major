import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';

const LoadingButton = ({ isLoading, shortText, longText, disabled }) => {
  const { smallMobile, mobile } = useScreenSizes();

  return (
    <button type="submit" disabled={disabled || isLoading} className={cl.loadingButton}>
      {smallMobile || mobile ? shortText : longText}
    </button>
  );
};
export default LoadingButton;
