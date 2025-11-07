import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CooperationInviteSection = () => {
  const { getTranslation } = useTranslationNamespace('cooperationPage');

  return (
    <section className={cl.cooperationInviteSection}>
      <Heading type="h2">{getTranslation('cooperationInviteTitle')}</Heading>
      <div>
        <Paragraph type="body1">{getTranslation('cooperationInviteParagraph1')}</Paragraph>
        <ul>
          <li>
            <Paragraph type="body1">{getTranslation('cooperationInviteListItem1')}</Paragraph>
          </li>
          <li>
            <Paragraph type="body1">{getTranslation('cooperationInviteListItem2')}</Paragraph>
          </li>
          <li>
            <Paragraph type="body1">{getTranslation('cooperationInviteListItem3')}</Paragraph>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default CooperationInviteSection;
