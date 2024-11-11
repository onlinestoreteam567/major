import cl from './index.module.scss';
import commentsData from './data';
import Banner from '@UI/Banner/Banner';
import Heading from '@components/UI/Heading/Heading';

// Comments banner component
const Comments = () => {
  return (
    <section className={`slider-container ${cl.comments}`}>
      <Heading type={'h2'}>Відгуки про наші засоби</Heading>

      <Banner slidesData={commentsData} type="comments" />
    </section>
  );
};

export default Comments;
