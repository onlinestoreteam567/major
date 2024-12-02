import cl from './index.module.scss';
import commentsData from './data';
import Banner from '@UI/Banner/Banner';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

// Comments banner component
const Comments = () => {
  const { getTranslation } = useTranslationNamespace('common');
  return (
    <section className={`slider-container ${cl.comments}`}>
      <Heading type="h2">{getTranslation('reviewsAboutProducts')}</Heading>

      <Banner slidesData={commentsData} type="comments" />
    </section>
  );
};

export default Comments;
