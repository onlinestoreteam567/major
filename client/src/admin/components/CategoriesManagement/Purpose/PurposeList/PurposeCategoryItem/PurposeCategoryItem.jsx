import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';

const PurposeCategoryItem = ({ category }) => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isSmallScreen = !(tablet || deskmin || deskmax);

  const categoryContent = (
    <div>
      <span>
        <img src={category.image} />
      </span>
      <p>{category.category_name_uk}</p>
      <p>{category.category_name_en}</p>
    </div>
  );

  return (
    <li className={cl.purposeCategoryItem}>
      {isSmallScreen ? (
        <>
          <Link to={`/admin/purpose-categories/${category.id}`}>{categoryContent}</Link>
          <button>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </>
      ) : (
        <>
          {categoryContent}
          <div>
            <Link to={`/admin/purpose-categories/${category.id}`}>
              <img src="/svg/admin/edit.svg" />
            </Link>
            <button>
              <img src="/svg/admin/delete.svg" alt="More options" />
            </button>
          </div>
        </>
      )}
    </li>
  );
};
export default PurposeCategoryItem;
