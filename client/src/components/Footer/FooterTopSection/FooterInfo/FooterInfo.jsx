import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const FooterInfo = () => {
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={cl.footerInfo}>
      <div className={`${cl.workingHoursWrapper} ${cl.wrapper}`}>
        <ul className={cl.workingHours}>
          <li className={cl.liWithImg}>
            <img src="/svg/footer/calendar.svg" alt={getTranslation('calendarAlt')} />
            <h3>{getTranslation('monFri')}</h3>
          </li>
          <li>
            <h3>{getTranslation('satSun')}</h3>
          </li>
        </ul>
      </div>

      <div className={`${cl.phoneNumberWrapper} ${cl.wrapper}`}>
        <ul>
          <li className={cl.liWithImg}>
            <img className={cl.phoneCallIcon} src="/svg/footer/phoneCall.svg" alt={getTranslation('phoneAlt')} />
            <h3 className={cl.titleWithIcon}>+38 (096) 327 77 34</h3>
          </li>
          <li>
            <h3>+38 (050) 123 84 99</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default FooterInfo;
