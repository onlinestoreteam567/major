import cl from './index.module.scss';
import logoIcon from '../../assets/svg/footer/footerLogo.svg';
import telegramIcon from '../../assets/svg/footer/telegram.svg';
import instagramIcon from '../../assets/svg/footer/instagram.svg';
import facebookIcon from '../../assets/svg/footer/facebook.svg';
import gmailIcon from '../../assets/svg/footer/gmail.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LeftSection = () => {
  const { t } = useTranslation();

  return (
    <section className={cl.logoAndSocialsSection}>
      <Link to="/">
        <img src={logoIcon} alt={t('logo alt', { ns: 'footer' })} />
      </Link>
      <section>
        <p>{t('socials', { ns: 'footer' })}</p>
        <ul>
          <li>
            <a href="">
              <img src={telegramIcon} alt={t('telegram alt', { ns: 'footer' })} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagramIcon} alt={t('instagram alt', { ns: 'footer' })} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={facebookIcon} alt={t('facebook alt', { ns: 'footer' })} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={gmailIcon} alt={t('mail alt', { ns: 'footer' })} />
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};
export default LeftSection;
