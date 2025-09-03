import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import EmptyText from '@UI/EmptyText/EmptyText';
import Spinner from '@UI/Spinner/Spinner';
import { loadCategories, selectCategories } from '@redux/selectors';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import CategoryCard from './CategoryCard/CategoryCard';
import SliderBoxMain from '@components/UI/SliderBoxMain/SliderBoxMain';

export default function FilterByCategory() {
  const isLoading = useSelector(loadCategories);
  const items = useSelector(selectCategories);
  const { tablet, deskmin, deskmax } = useScreenSizes();

  const showArr = Array.isArray(items) && items.length !== 0;
  const isSliderMode = tablet || deskmin || deskmax;

  return (
    <div className={cl.wrap}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {showArr ? (
            isSliderMode ? (
              <SliderBoxMain slidesData={items} total={items.length} isCatalog={true} />
            ) : (
              items.map((item) => <CategoryCard item={item} key={item.id} />)
            )
          ) : (
            <EmptyText message="Не знайдено" />
          )}
        </ul>
      )}
    </div>
  );
}
