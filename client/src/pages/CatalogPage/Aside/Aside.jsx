import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import useScreenSizes from '@hooks/useScreenSizes';
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

const Aside = ({ setIsAsideMobile, isHiddenAside, setisHiddenAside }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const dispatch = useDispatch();

  const handleCloseAside = () => handleCloseWithDelay(setisHiddenAside, setIsAsideMobile);
  const handleClearFilters = () => {
    dispatch(fetchProductsAll());
    dispatch(resetFilter());
  };

  return (
    <aside className={`${cl.aside} ${isHiddenAside ? cl.hiddenAnimation : ''}`}>
      <div>
        <section className={cl.topSection}>
          <Heading type="h2">{getTranslation('filters')}</Heading>
          <button className={cl.clearFiltersButton} onClick={() => handleClearFilters()}>
            {getTranslation('reset')}
          </button>
          {!(deskmin || deskmax) && <ButtonClose onClick={() => handleCloseAside()} />}
        </section>
        {!(tablet || deskmin || deskmax) && <FilterByCategory />}
        {(deskmin || deskmax) && <Sorting />}
        <FilterByStatus />
        <PriceRange />
        <FilterByType />
      </div>
    </aside>
  );
};

export default Aside;
