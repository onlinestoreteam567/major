import Spinner from '@UI/Spinner/Spinner';
import { fetchBanner } from '@redux/banner/service';
import { loadBanner, loadBannerDelete, selectBanner, selectBannerDelete } from '@redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import BannerListItem from './BannerListItem/BannerListItem';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const BannerList = () => {
  const items = useSelector(selectBanner);
  const isLoading = useSelector(loadBanner);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadBannerDelete);
  const deleteResponse = useSelector(selectBannerDelete);
  const [deletedMessage, showDeletedMessage] = useTimedMessage();

  useEffect(() => {
    console.log(deleteResponse);
    deleteResponse === 204 && dispatch(fetchBanner());
  }, [dispatch, deleteResponse]);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.bannerList}>
          {items.map((banner, i) => (
            <BannerListItem key={i} banner={banner} showDeletedMessage={showDeletedMessage} />
          ))}
        </ul>
      )}
      {deletedMessage && <AdminMessage>{deletedMessage}</AdminMessage>}
    </>
  );
};
export default BannerList;
