import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import FilterByType from './FilterType/FilterByType';
import FilterByStatus from './FilterStatus/FilterByStatus';
import PriceRange from './FilterPrice/PriceRange';
import FilterByCategory from '../FilterCategory/FilterByCategory';
import { useDispatch } from 'react-redux';
import { resetFilter } from '@redux/filter/filterSlice';
import { fetchProductsAll } from '@redux/products/service';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Sorting from '../Top/Sorting/Sorting';
import Overlay from '@components/UI/Overlay/Overlay';
import { useState } from 'react';

const Aside = ({ setIsShowAside }) => {
  const [closeAnimation, setCloseAnimation] = useState();

  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const dispatch = useDispatch();

  const handleCloseAside = () => handleCloseWithDelay(setCloseAnimation, setIsShowAside);
  const handleClearFilters = () => {
    dispatch(fetchProductsAll());
    dispatch(resetFilter());
  };

  return (
    <>
      {!(deskmin || deskmax) && <Overlay handleClose={handleCloseAside} />}
      <aside className={`${cl.aside} ${closeAnimation ? cl.hiddenAnimation : ''}`}>
        <div>
          <section className={cl.topSection}>
            <Heading type="h2">{getTranslation('filters')}</Heading>
            <button onClick={() => handleClearFilters()}>{getTranslation('reset')}</button>
            {!(deskmin || deskmax) && <ButtonClose onClick={() => handleCloseAside()} ariaLabel="ariaLabelAside" />}
          </section>
          <div className={cl.overflowWrap}>
            {!(tablet || deskmin || deskmax) && <FilterByCategory />}
            {(deskmin || deskmax) && <Sorting />}
            <FilterByStatus />
            <PriceRange handleCloseAside={handleCloseAside} />
            <FilterByType />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
