import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

const OurProduction = () => {
  return (
    <section className={cl.ourProduction}>
      <Heading type="h2">Наше виробництво</Heading>
      <img src="/images/about/ourProduction.webp" alt="" />
      <div>
        <Paragraph type="body1">Ми показуємо, як створюється косметика Major — відкрито, чесно, з любов’ю.</Paragraph>
        <Paragraph type="body1">
          Розвиваємо українське виробництво, формуємо нове ставлення до вітчизняної косметики та щодня доводимо:
          український продукт — це якість, стиль і турбота в деталях.
        </Paragraph>
      </div>
    </section>
  );
};
export default OurProduction;
