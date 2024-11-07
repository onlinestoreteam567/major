import cl from './index.module.scss';
import commentsData from './data';
import Banner from '@UI/Banner/Banner';

// Comments banner component
const Comments = () => {
  return (
    <div className={`slider-container ${cl.comments}`}>
      <h2>Відгуки про наші засоби</h2>

      <Banner slidesData={commentsData} type="comments" />
    </div>
  );
};

export default Comments;
