// import Loading from '@components/UI/Overlay/Loading';
import EmptyPage from '@components/helpers/EmptyPage';
import CardCatalog from './Card/Card';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';

export default function CardsContainer() {
  const { items, status, error } = useSelector((state) => state.productList);

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження усіх товарів...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  // const isLoading = useSelector(selectLoading);
  // const products = useSelector(selectProducts);

  const showArr = Array.isArray(items) && items.length !== 0;

  return (
    <>
      {/* {isLoading && <Loading />} */}
      {showArr ? (
        <ul className={cl.container}>
          {items.map((card) => (
            <li key={card.id}>
              <CardCatalog card={card} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPage />
      )}
    </>
  );
}
