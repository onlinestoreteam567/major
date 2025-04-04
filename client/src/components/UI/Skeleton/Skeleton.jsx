import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes';

const Skeleton = ({ width = '100%', heights = { extraMobile, mobile, tablet, deskmin, deskmax } }) => {
  const { mobile, tablet, deskmin, deskmax } = useScreenSizes();

  const getHeight = () => {
    if (deskmax) return heights.deskmax;
    if (deskmin) return heights.deskmin;
    if (tablet) return heights.tablet;
    if (mobile) return heights.mobile;
    return heights.extraMobile;
  };

  return (
    <div className={cl.skeleton} style={{ width, height: 704 }}>
      <Spinner />
    </div>
  );
};

export default Skeleton;
