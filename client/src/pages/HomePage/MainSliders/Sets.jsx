import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import { useSelector } from 'react-redux';
import Skeleton from '@components/UI/Skeleton/Skeleton';
import EmptyPage from '@components/helpers/EmptyPage';
import { loadSets, selectSets } from '@redux/selectors';

const Sets = () => {
  const { getTranslation } = useTranslationNamespace('common');
  const isLoading = useSelector(loadSets);
  const items = useSelector(selectSets);
  const total = items.length || 0;

  const showArr = Array.isArray(items) && items.length !== 0;

  return (
    <>
      {isLoading ? (
        <Skeleton heights={{ extraMobile: 685, mobile: 693, tablet: 646, deskmin: 651, deskmax: 680 }} />
      ) : (
        <section className={cl.wrapSliders}>
          <Heading type="h2">{getTranslation('cheaperTogether')}</Heading>
          {showArr ? (
            <SliderBoxMain total={total} slidesData={items} />
          ) : (
            <EmptyPage message="Не передбачувана помилка" />
          )}
        </section>
      )}
    </>
  );
};

export default Sets;
