import FilterByType from '@pages/CatalogPage/Aside/FilterType/FilterByType';
import cl from './index.module.scss';
import FilterByStatus from '@pages/CatalogPage/Aside/FilterStatus/FilterByStatus';
import PriceRange from '@pages/CatalogPage/Aside/FilterPrice/PriceRange';
import FilterByCategory from '@pages/CatalogPage/FilterCategory/FilterByCategory';
const ProductFilters = () => {
  return (
    <div className={cl.productFilters}>
      <FilterByCategory />
      <FilterByType />
      <FilterByStatus />
      <PriceRange />
    </div>
  );
};
export default ProductFilters;
