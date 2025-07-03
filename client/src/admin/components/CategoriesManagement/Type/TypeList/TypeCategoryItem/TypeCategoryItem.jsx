import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DeletePopUp from '../../../../ProductManagement/ProductList/DeletePopUp/DeletePopUp';
import { deleteType } from '../../../../../redux/service';
import { useDispatch } from 'react-redux';

const TypeCategoryItem = ({ category, showDeletedMessage }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isSmallScreen = !(tablet || deskmin || deskmax);
  const dispatch = useDispatch();

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);

  const handleDelete = (id) => {
    dispatch(deleteType(id));
    showDeletedMessage(`Категорію “${category.name}” видалено`);
    toggleDeletePopUp();
  };

  const categoryContent = (
    <div>
      <p>{category.type_name_uk}</p>
      <p>{category.type_name_en}</p>
    </div>
  );

  return (
    <>
      <li className={cl.typeCategoryItem}>
        {isSmallScreen ? (
          <>
            <Link to={`/admin/purpose-categories/${category.id}`}>{categoryContent}</Link>
            <button type="button" onClick={() => toggleDeletePopUp()}>
              <img src="/svg/admin/delete.svg" />
            </button>
          </>
        ) : (
          <>
            {categoryContent}
            <div>
              <Link to={`/admin/purpose-categories/${category.id}`}>
                <img src="/svg/admin/edit.svg" />
              </Link>
              <button type="button" onClick={() => toggleDeletePopUp()}>
                <img src="/svg/admin/delete.svg" />
              </button>
            </div>
          </>
        )}
      </li>

      {isShowDeletePopUp && (
        <DeletePopUp closeDeletePopUp={toggleDeletePopUp} handleDelete={() => handleDelete(category.id)}>
          Ви впевнені, що хочете видалити цю категорію?
        </DeletePopUp>
      )}
    </>
  );
};
export default TypeCategoryItem;
