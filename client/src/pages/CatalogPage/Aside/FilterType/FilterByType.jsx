import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import Spinner from '@components/helpers/Spinner';
import { filterType, loadTypes, selectTypes } from '@redux/selectors';
import { getProductsByTypes } from '@redux/products/service';
import { setType } from '@redux/filter/filterSlice';

export default function FilterByType() {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const dispatch = useDispatch();
  const newType = useSelector(filterType);
  console.log('TYPE', newType);

  const isLoading = useSelector(loadTypes);
  const items = useSelector(selectTypes);

  const getTypes = (value) => {
    dispatch(getProductsByTypes(value));
    dispatch(setType(value));
  };

  const showArr = Array.isArray(items) && items.length !== 0;
  return (
    <div>
      <Heading type="h4">{getTranslation('category')}</Heading>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {showArr ? (
            items.map((item) => (
              <li key={item.id}>
                <input
                  key={item.id}
                  type="radio"
                  name="type"
                  value={item.id}
                  checked={String(item.id) === String(newType)}
                  onChange={(e) => getTypes(e.target.value)}
                />
                {console.log(String(item.id) === String(newType))}
                <p>{item.name}</p>
                <span className={cl.slider}></span>
              </li>
            ))
          ) : (
            <EmptyPage message="Не знайдено" />
          )}
        </ul>
      )}
    </div>
  );
}
