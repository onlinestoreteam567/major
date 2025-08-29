import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

const OriginStorySection = () => {
  return (
    <section className={cl.originStorySection}>
      <Heading type="h2">Коли світ зупинився — ми почали</Heading>
      {/* TODO fill alts */}
      <img src="/images/about/pandemic.webp" alt="" />
      <div>
        <Paragraph type="body1">
          У 2019 році в період пандемії світ зупинився, двері салонів зачинилися, але бажання жінок піклуватися про себе
          нікуди не зникло.
        </Paragraph>
        <Paragraph type="body1">
          Тоді ми вирішили: <br />
          &quot;Якщо неможливо потрапити до салону — ми створимо салон вдома.&quot; Саме тоді зародилася ідея створювати
          продукти, які забеспечать салонний ефект вдома.
        </Paragraph>
      </div>
    </section>
  );
};
export default OriginStorySection;
