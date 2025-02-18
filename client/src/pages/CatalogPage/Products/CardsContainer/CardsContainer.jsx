// import Loading from '@components/UI/Overlay/Loading';
import EmptyPage from '@components/helpers/EmptyPage';
import CardCatalog from './Card/Card';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../../redux/selectors';

export default function CardsContainer() {
  // const { items, status, error } = useSelector((state) => state.productList);

  const items = useSelector(selectProducts);

  // if (status === 'loading') {
  //   return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження усіх товарів...</div>;
  // }

  // if (status === 'failed') {
  //   return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  // }

  const showArr = Array.isArray(items) && items.length !== 0;

  return (
    <>
      {showArr ? (
        <ul className={cl.container}>
          {items.map((card) => (
            <li key={card.id}>
              <CardCatalog card={card} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPage message="Не передбачувана помилка" />
      )}
    </>
  );
}
