import PriceRange from '@pages/CatalogPage/Aside/FilterPrice/PriceRange';
import FilterByStatus from '@pages/CatalogPage/Aside/FilterStatus/FilterByStatus';
import FilterByType from '@pages/CatalogPage/Aside/FilterType/FilterByType';
import FilterByCategory from '@pages/CatalogPage/FilterCategory/FilterByCategory';
import cl from './index.module.scss';
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
