import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Link } from 'react-router-dom';

const YourTimeIsPriceless = () => {
  return (
    <section className={cl.yourTimeIsPriceless}>
      <Heading type="h2">Твій час — безцінний.</Heading>
      <img src="/images/about/yourTimeIsPriceless.webp" alt="" />
      <div>
        <Paragraph type="body1">
          Будь сама собі beauty-майстром разом з MAJOR
          <br /> Наші засоби створені, щоб ти витрачала менше часу на догляд і більше — на життя.
        </Paragraph>
        <Paragraph type="body1">Обирай свій ідеальний комплекс — і насолоджуйся результатом з першого дня.</Paragraph>
      </div>
      <Link to="/catalog">До каталогу</Link>
    </section>
  );
};
export default YourTimeIsPriceless;
