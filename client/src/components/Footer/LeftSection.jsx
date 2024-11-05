import cl from './index.module.scss';
import logoIcon from '@assets/svg/footer/footerLogo.svg';
import telegramIcon from '@assets/svg/footer/telegram.svg';
import instagramIcon from '@assets/svg/footer/instagram.svg';
import facebookIcon from '@assets/svg/footer/facebook.svg';
import gmailIcon from '@assets/svg/footer/gmail.svg';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { Link } from 'react-router-dom';

const LeftSection = () => {
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={cl.logoAndSocialsSection}>
      <Link to="/">
        <img src={logoIcon} alt={getTranslation('logoAlt')} />
      </Link>
      <section>
        <p>{getTranslation('socials')}</p>
        <ul>
          <li>
            <a href="">
              <img src={telegramIcon} alt={getTranslation('telegramAlt')} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagramIcon} alt={getTranslation('instagramAlt')} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={facebookIcon} alt={getTranslation('facebookAlt')} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={gmailIcon} alt={getTranslation('mailAlt')} />
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};
export default LeftSection;
