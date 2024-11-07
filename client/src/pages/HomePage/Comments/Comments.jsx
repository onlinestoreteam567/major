import cl from './index.module.scss';
import commentsData from './data';
import Banner from '@UI/Banner/Banner';
import H2 from '@components/UI/Hs/H2/H2';

// Comments banner component
const Comments = () => {
  return (
    <div className={`slider-container ${cl.comments}`}>
      <H2>Відгуки про наші засоби</H2>

      <Banner slidesData={commentsData} type="comments" />
    </div>
  );
};

export default Comments;
