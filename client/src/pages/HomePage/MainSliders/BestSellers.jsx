import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import { useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import { loadBestSeller, selectBestSeller } from '@redux/selectors';
import Spinner from '@components/helpers/Spinner/Spinner';
import EmblaCarousel from './EmblaCarousel';
import './base.css';
import './sandbox.css';
import './embla.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const OPTIONS = { slidesToScroll: 1, containScroll: false };

const BestSellers = () => {
  const { getTranslation } = useTranslationNamespace('common');
  const isLoading = useSelector(loadBestSeller);
  const items = useSelector(selectBestSeller);

  const showArr = Array.isArray(items) && items.length !== 0;
  return (
    <section className={cl.wrapSliders}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading type="h2">{getTranslation('bestSellers')}</Heading>
          {showArr ? (
            <EmblaCarousel slides={items} options={OPTIONS} />
          ) : (
            <EmptyPage message="Не передбачувана помилка" />
          )}
        </>
      )}
    </section>
  );
};

export default BestSellers;

// import cl from './index.module.scss';
// import Heading from '@UI/Texts/Heading/Heading';
// import useTranslationNamespace from '@hooks/useTranslationNamespace';
// import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
// import { useSelector } from 'react-redux';
// import EmptyPage from '@components/helpers/EmptyPage';
// import { loadBestSeller, selectBestSeller } from '@redux/selectors';
// import Spinner from '@components/helpers/Spinner/Spinner';

// const BestSellers = () => {
//   const { getTranslation } = useTranslationNamespace('common');
//   const isLoading = useSelector(loadBestSeller);
//   const items = useSelector(selectBestSeller);
//   const total = items.length || 0;

//   const showArr = Array.isArray(items) && items.length !== 0;
//   return (
//     <section className={cl.wrapSliders}>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <>
//           <Heading type="h2">{getTranslation('bestSellers')}</Heading>
//           {showArr ? (
//             <SliderBoxMain total={total} slidesData={items} />
//           ) : (
//             <EmptyPage message="Не передбачувана помилка" />
//           )}
//         </>
//       )}
//     </section>
//   );
// };

// export default BestSellers;
