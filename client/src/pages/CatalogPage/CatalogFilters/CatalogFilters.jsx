import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import FilterByType from './FilterByType/FilterByType';
import FilterByStatus from './FilterByStatus/FilterByStatus';
import FilterByCategory from '../FilterCategory/FilterByCategory';
import { useDispatch } from 'react-redux';
import { resetFilter } from '@redux/filter/filterSlice';
import { fetchProductsAll } from '@redux/products/service';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Sorting from '../CatalogTop/CatalogSorting/CatalogSorting';
import Overlay from '@components/UI/Overlay/Overlay';
import { useState } from 'react';
import FilterByPrice from './FilterByPrice/FilterByPrice';

const CatalogFilters = ({ setIsShowCatalogFilters }) => {
  const [closeAnimation, setCloseAnimation] = useState();
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const dispatch = useDispatch();

  const handleCloseAside = () => handleCloseWithDelay(setCloseAnimation, setIsShowCatalogFilters);
  const handleClearFilters = () => {
    dispatch(fetchProductsAll());
    dispatch(resetFilter());
  };

  return (
    <>
      {!(deskmin || deskmax) && <Overlay handleClose={handleCloseAside} />}
      <aside className={`${cl.catalogFilters} ${closeAnimation ? cl.hiddenAnimation : ''}`}>
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
            <FilterByPrice handleCloseAside={handleCloseAside} />
            <FilterByType />
          </div>
        </div>
      </aside>
    </>
  );
};

export default CatalogFilters;
