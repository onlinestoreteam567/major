import Heading from '../Heading/Heading';
import cl from './index.module.scss';

export default function ReviewsTitle() {
  return (
    <div className={cl.wrapTitleRating}>
      <Heading type="h3">
        Відгуки про товар <br /> Флюїд шовк для тонкого волосся
      </Heading>
    </div>
  );
}
