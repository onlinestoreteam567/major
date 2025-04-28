import EmptyPage from '@components/helpers/EmptyPage';
import CardCatalog from './Card/Card';
import cl from './index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '@redux/selectors';
import { resetFilter } from '@redux/filter/filterSlice';
import { fetchProductsAll } from '@redux/products/service';
import Button from '@components/UI/Button/Button';

export default function CardsContainer() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);

  const showArr = Array.isArray(items) && items.length !== 0;

  const handleClearFilters = () => {
    dispatch(fetchProductsAll());
    dispatch(resetFilter());
  };

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
        <div className={cl.emptyWrap}>
          <EmptyPage message="Спробуйте змінити налаштування фільтрів" />
          <Button onClick={handleClearFilters}>Продовжити пошук</Button>
        </div>
      )}
    </>
  );
}
