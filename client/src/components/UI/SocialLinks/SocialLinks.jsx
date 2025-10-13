import { selectContacts } from '@redux/selectors';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useSelector } from 'react-redux';

const SocialLinks = ({ black }) => {
  const { getTranslation } = useTranslationNamespace('footer');
  const contacts = useSelector(selectContacts);

  if (!contacts) return;
  const email = `mailto:${contacts[0].email}`;

  return (
    <section className={cl.socialLinks}>
      <h3 className={black ? cl.black : ''}>{getTranslation('socials')}</h3>
      <ul>
        <li>
          <a href={contacts[0].telegram} rel="nofollow" target="_blank" aria-label={getTranslation('telegramAlt')}>
            <img src="/svg/footer/monochromeTelegram.svg" alt={getTranslation('telegramAlt')} />
          </a>
        </li>
        <li>
          <a href={contacts[0].instagram} rel="nofollow" target="_blank" aria-label={getTranslation('instagramAlt')}>
            <img src="/svg/footer/monochromeInstagram.svg" alt={getTranslation('instagramAlt')} />
          </a>
        </li>
        <li>
          <a href={email} rel="nofollow" aria-label={getTranslation('mailAlt')}>
            <img className={cl.mailIcon} src="/svg/footer/monochromeMail.svg" alt={getTranslation('mailAlt')} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default SocialLinks;
