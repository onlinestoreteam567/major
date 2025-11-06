import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

const CooperationInviteSection = () => {
  return (
    <section className={cl.cooperationInviteSection}>
      <Heading type="h2">Запрошуємо до співпраці</Heading>
      <div>
        <Paragraph type="body1">
          майстрів-перукарів, салони краси, школи перукарського мистецтва, магазини професійної косметики та
          б’юті-маркети домашнього догляду до вигідної співпраці:
        </Paragraph>
        <ul>
          <li>
            <Paragraph type="body1">прямі вигоди — ціни від виробника, оперативна доставка;</Paragraph>
          </li>
          <li>
            <Paragraph type="body1">підтримка у просуванні і навчанні персоналу;</Paragraph>
          </li>
          <li>
            <Paragraph type="body1">регулярний фідбек та оновлення новинок.</Paragraph>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default CooperationInviteSection;
