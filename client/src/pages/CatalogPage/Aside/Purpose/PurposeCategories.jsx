import PurposeCategoryCard from '@components/UI/CatalogCard/CatalogCard';
import { fetchProductListPurposeCategory } from '@services/ProductListService';
import { useDispatch, useSelector } from 'react-redux';

const PurposeCategories = () => {
  const { items, status, error } = useSelector((state) => state.purposeCategory);
  const dispatch = useDispatch();

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження категорій за призначенням...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  const getByPurposeCategory = (id) => {
    dispatch(fetchProductListPurposeCategory(id));
  };

  return (
    <form>
      <button type="button">Усі товари</button>
      {items.map((item) => (
        <PurposeCategoryCard
          getByPurposeCategory={getByPurposeCategory}
          card={item}
          key={item.id}
          name="purposeCategoryGroup"
        />
      ))}
    </form>
  );
};
export default PurposeCategories;
