import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { loadCategories, selectCategories } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@redux/filter/filterSlice';
import { getProductsByCategory } from '@redux/products/service';
import { Link } from 'react-router-dom';
import Skeleton from '@components/UI/Skeleton/Skeleton';

const Catalog = () => {
  const { getTranslation } = useTranslationNamespace('common');
  const isLoading = useSelector(loadCategories);
  const items = useSelector(selectCategories);
  const firstSixItems = items.slice(0, 6);

  const dispatch = useDispatch();
  const getCategory = (value) => {
    dispatch(setCategory(value));
    dispatch(getProductsByCategory(value));
  };

  return isLoading ? (
    <Skeleton heights={{ extraMobile: 445, mobile: 517, tablet: 692, deskmin: 555, deskmax: 840 }} />
  ) : (
    <section className={cl.catalogWrapper}>
      <Heading type="h2">{getTranslation('catalog')}</Heading>
      <ul>
        {firstSixItems.map((item, index) => (
          <Link key={index} to={`/catalog`}>
            <li id={item.id} onClick={(e) => getCategory(e.currentTarget.id)}>
              <figure>
                <img src={item.image} alt="" />
                <figcaption>{getTranslation(item.name)}</figcaption>
              </figure>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
