import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const FooterInfo = () => {
  const { getTranslation } = useTranslationNamespace('footer');
  const { tablet, deskmin, deskmax } = useScreenSizes();

  return (
    <section className={cl.footerInfo}>
      <ul>
        <h3 className={cl.titleWithIcon}>
          {(tablet || deskmin || deskmax) && <img src="/svg/footer/calendar.svg" alt={getTranslation('calendarAlt')} />}
          {getTranslation('workingHours')}
        </h3>
        <section>
          {' '}
          <li>
            <h3>{getTranslation('monFri')}</h3>
          </li>
          <li>
            <h3>{getTranslation('satSun')}</h3>
          </li>
        </section>
      </ul>

      <ul>
        {!tablet && !deskmin && !deskmax && <h3>Номери телефонів</h3>}

        <section>
          <li>
            <h3 className={cl.titleWithIcon}>
              {(tablet || deskmin || deskmax) && (
                <img className={cl.phoneCallIcon} src="/svg/footer/phoneCall.svg" alt={getTranslation('phoneAlt')} />
              )}{' '}
              +38 (096) 327 77 34
            </h3>
          </li>
          <li>
            <h3>+38 (050) 123 84 99</h3>
          </li>
        </section>
      </ul>
    </section>
  );
};
export default FooterInfo;
