import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { deleteType } from '@redux/admin/type/service';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cl from './index.module.scss';

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
            <Link to={`/admin/type/${category.id}`}>{categoryContent}</Link>
            <button type="button" onClick={() => toggleDeletePopUp()}>
              <img src="/svg/admin/delete.svg" />
            </button>
          </>
        ) : (
          <>
            {categoryContent}
            <div>
              <Link to={`/admin/type/${category.id}`}>
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
