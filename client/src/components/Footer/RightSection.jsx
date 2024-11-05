import cl from './index.module.scss';
import calendarIcon from './../../assets/svg/footer/calendar.svg';
import phoneCallIcon from './../../assets/svg/footer/phoneCall.svg';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const RightSection = () => {
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section>
      <section>
        <p className={cl.titleFooterWithCalendarIcon}>
          <img src={calendarIcon} alt={getTranslation('calendarAlt')} />
          <span>{getTranslation('workingHours')}</span>
        </p>
        <ul className={cl.ulFooter}>
          <li>{getTranslation('monFri')}</li>
          <li>{getTranslation('satSun')}</li>
        </ul>
      </section>
      <section>
        <ul className={cl.ulFooter}>
          <li className={cl.phoneCallLi}>
            <img className={cl.phoneCallIcon} src={phoneCallIcon} alt={getTranslation('phoneAlt')} />
            <span>+38 (096) 327 77 34</span>
          </li>
          <li>+38 (050) 123 84 99</li>
        </ul>
      </section>
    </section>
  );
};
export default RightSection;
