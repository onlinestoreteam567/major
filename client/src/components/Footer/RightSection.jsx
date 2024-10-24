import cl from './index.module.scss';
import calendarIcon from './../../assets/svg/footer/calendar.svg';
import phoneCallIcon from './../../assets/svg/footer/phoneCall.svg';
import { useTranslation } from 'react-i18next';

const RightSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <section>
        <p className={cl.titleFooterWithCalendarIcon}>
          <img src={calendarIcon} alt={t('calendar alt', { ns: 'footer' })} />
          <span>{t('working hours', { ns: 'footer' })}</span>
        </p>
        <ul className={cl.ulFooter}>
          <li>{t('mon - fri', { ns: 'footer' })}</li>
          <li>{t('sat - sun', { ns: 'footer' })}</li>
        </ul>
      </section>
      <section>
        <ul className={cl.ulFooter}>
          <li className={cl.phoneCallLi}>
            <img className={cl.phoneCallIcon} src={phoneCallIcon} alt={t('phone alt', { ns: 'footer' })} />
            <span>+38 (096) 327 77 34</span>
          </li>
          <li>+38 (050) 123 84 99</li>
        </ul>
      </section>
    </section>
  );
};
export default RightSection;
