import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const SocialLinks = () => {
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={cl.socialLinks}>
      <p>{getTranslation('socials')}</p>
      <ul>
        <li>
          <a href="">
            <img src="/svg/footer/telegram.svg" alt={getTranslation('telegramAlt')} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/svg/footer/instagram.svg" alt={getTranslation('instagramAlt')} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/svg/footer/facebook.svg" alt={getTranslation('facebookAlt')} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/svg/footer/gmail.svg" alt={getTranslation('mailAlt')} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default SocialLinks;
