import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const FooterInfo = ({ contacts }) => {
  const { getTranslation } = useTranslationNamespace('footer');

  if (!contacts) return;
  return (
    <section className={cl.footerInfo}>
      <div className={`${cl.workingHoursWrapper} ${cl.wrapper}`}>
        <ul className={cl.workingHours}>
          <li className={cl.liWithImg}>
            <img src="/svg/footer/calendar.svg" alt={getTranslation('calendarAlt')} />
            <h3>{contacts[0].work_schedule_weekdays}</h3>
          </li>
          <li>
            <h3>{contacts[0].work_schedule_weekdays}</h3>
          </li>
        </ul>
      </div>

      <div className={`${cl.phoneNumberWrapper} ${cl.wrapper}`}>
        <ul>
          <li className={cl.liWithImg}>
            <img className={cl.phoneCallIcon} src="/svg/footer/phoneCall.svg" alt={getTranslation('phoneAlt')} />
            <h3 className={cl.titleWithIcon}>{contacts[0].main_phone_number}</h3>
          </li>
          <li>
            <h3>{contacts[0].additional_phone_number}</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default FooterInfo;
