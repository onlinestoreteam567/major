import PurposeCategoryCard from '@components/UI/CatalogCard/CatalogCard';
import { useSelector } from 'react-redux';

const PurposeCategories = ({ toggleFilter }) => {
  const { items, status, error } = useSelector((state) => state.purposeCategory);

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження категорій за призначенням...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  return (
    <form>
      <button type="button">Усі товари</button>
      {items.map((item) => (
        <PurposeCategoryCard card={item} key={item.id} name="purposeCategoryGroup" onChange={toggleFilter} />
      ))}
    </form>
  );
};
export default PurposeCategories;
