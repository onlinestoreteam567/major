import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';

const TypeCategoryItem = ({ category }) => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isSmallScreen = !(tablet || deskmin || deskmax);

  console.log(category);

  const categoryContent = (
    <div>
      <p>{category.type_name_uk}</p>
      <p>{category.type_name_en}</p>
    </div>
  );

  return (
    <li className={cl.typeCategoryItem}>
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
export default TypeCategoryItem;
