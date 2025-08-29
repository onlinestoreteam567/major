import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

const MissionSection = () => {
  return (
    <section className={cl.missionSection}>
      <Heading type="h2">Major — це більше, ніж просто бізнес</Heading>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <img src="/images/placeholder.webp" alt="" />
      </div>
      <div>
        <Paragraph type="body1">
          Це сімейна справа, яка об’єднує всіх нас у спільному прагненні створювати дійсно дієві продукти.
        </Paragraph>
        <Paragraph type="body1">
          У нас невелика але потужна команда, де кожен відповідає за свій процес: від створення формул і тестування до
          пакування і консультації клієнтів.
        </Paragraph>
        <Paragraph type="body1">
          Для нас українське — це не тренд і не гасло.
          <br />
          Це справа життя. Ми його створюємо власноруч. І водночас - захищаємо. <br />
          Бо любов — це не лише слова, це дії.
        </Paragraph>
      </div>
    </section>
  );
};
export default MissionSection;
