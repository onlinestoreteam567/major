import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const SocialLinks = ({ black }) => {
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={cl.socialLinks}>
      <h3 className={black ? cl.black : ''}>{getTranslation('socials')}</h3>
      <ul>
        <li>
          <a
            href="https://t.me/UA_National_Police"
            rel="nofollow"
            target="_blank"
            aria-label={getTranslation('telegramAlt')}
          >
            <img src="/svg/footer/monochromeTelegram.svg" alt={getTranslation('telegramAlt')} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/major.proficare/"
            rel="nofollow"
            target="_blank"
            aria-label={getTranslation('instagramAlt')}
          >
            <img src="/svg/footer/monochromeInstagram.svg" alt={getTranslation('instagramAlt')} />
          </a>
        </li>
        <li>
          <a href="mailto:major.your.cosmetic@gmail.com" rel="nofollow" aria-label={getTranslation('mailAlt')}>
            <img className={cl.mailIcon} src="/svg/footer/monochromeMail.svg" alt={getTranslation('mailAlt')} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default SocialLinks;
