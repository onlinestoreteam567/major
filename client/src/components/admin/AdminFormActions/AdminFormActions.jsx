import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';

const AdminFormActions = ({ to, isLoading, errors, shortText, longText }) => {
  const { smallMobile, mobile } = useScreenSizes();

  return (
    <div className={cl.adminFormActions}>
      <Link to={to}>Повернутись</Link>

      <button type="submit" disabled={Object.keys(errors).length > 0 || isLoading}>
        {smallMobile || mobile ? shortText : longText}
      </button>
    </div>
  );
};
export default AdminFormActions;
