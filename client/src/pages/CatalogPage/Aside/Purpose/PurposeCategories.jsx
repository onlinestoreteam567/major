import CatalogCard from '@components/UI/CatalogCard/CatalogCard';
import { useSelector } from 'react-redux';

const PurposeCategories = () => {
  const { items, status, error } = useSelector((state) => state.purposeCategory);

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження категорій за призначенням...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  return (
    <form>
      <button>Усі товари</button>
      {items.map((item) => (
        <CatalogCard item={item} key={item.id} />
      ))}
    </form>
  );
};
export default PurposeCategories;
