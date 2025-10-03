import Spinner from '@UI/Spinner/Spinner';
import { fetchBanner } from '@redux/banner/service';
import { loadBanner, loadBannerDelete, selectBanner, selectBannerDelete } from '@redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import BannerListItem from './BannerListItem/BannerListItem';

const BannerList = () => {
  const items = useSelector(selectBanner);
  const isLoading = useSelector(loadBanner);
  const dispatch = useDispatch();
  const isLoadingDelete = useSelector(loadBannerDelete);
  const deleteResponse = useSelector(selectBannerDelete);

  useEffect(() => {
    deleteResponse === 204 && dispatch(fetchBanner());
  }, [dispatch, deleteResponse]);

  return (
    <>
      {isLoading || isLoadingDelete ? (
        <Spinner />
      ) : (
        <ul className={cl.bannerList}>
          {items.map((banner, i) => (
            <BannerListItem key={i} banner={banner} />
          ))}
        </ul>
      )}
    </>
  );
};
export default BannerList;
