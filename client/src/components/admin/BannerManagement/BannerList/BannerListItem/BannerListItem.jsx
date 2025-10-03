import { Link } from 'react-router-dom';
import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';
import { useDispatch } from 'react-redux';
import { deleteBanner } from '@redux/banner/service';
import { useState } from 'react';
import cl from './index.module.scss';

const BannerListItem = ({ banner, showDeletedMessage }) => {
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBanner(id));
    showDeletedMessage(`Банер “${banner.name}” видалено`);
    toggleDeletePopUp();
  };

  const toggleDeletePopUp = () => setIsShowDeletePopUp(!isShowDeletePopUp);
  return (
    <>
      <li className={cl.bannerListItem}>
        <img src={banner.background_image_url} />
        <p>{banner.product.name}</p>
        <div>
          <Link to={`/admin/banners/${banner.id}`}>
            <img src="/svg/admin/edit.svg" />
          </Link>
          <button onClick={() => toggleDeletePopUp()}>
            <img src="/svg/admin/delete.svg" alt="More options" />
          </button>
        </div>
      </li>
      {isShowDeletePopUp && (
        <DeletePopUp closeDeletePopUp={toggleDeletePopUp} handleDelete={() => handleDelete(banner.id)}>
          Ви впевнені, що хочете видалити цей банер?
        </DeletePopUp>
      )}
    </>
  );
};
export default BannerListItem;
