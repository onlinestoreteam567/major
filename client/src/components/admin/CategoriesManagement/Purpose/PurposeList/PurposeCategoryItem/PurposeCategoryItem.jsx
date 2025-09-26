import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import { deletePurpose } from '@redux/admin/purpose/service';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';

const PurposeCategoryItem = ({ category, showDeletedMessage, isShowAdminSections }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isSmallScreen = !(tablet || deskmin || deskmax);
  const dispatch = useDispatch();

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);

  const handleDelete = (id) => {
    dispatch(deletePurpose(id));
    showDeletedMessage(`Категорію “${category.name}” видалено`);
    toggleDeletePopUp();
  };

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
    <>
      <li className={cl.purposeCategoryItem}>
        {isSmallScreen ? (
          <>
            <Link to={`/admin/purpose-categories/${category.id}`}>{categoryContent}</Link>
            {isShowAdminSections && (
              <button onClick={() => toggleDeletePopUp()}>
                <img src="/svg/admin/delete.svg" />
              </button>
            )}
          </>
        ) : (
          <>
            {categoryContent}
            <div>
              <Link to={`/admin/purpose-categories/${category.id}`}>
                <img src="/svg/admin/edit.svg" />
              </Link>

              {isShowAdminSections && (
                <button onClick={() => toggleDeletePopUp()}>
                  <img src="/svg/admin/delete.svg" />
                </button>
              )}
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
export default PurposeCategoryItem;
