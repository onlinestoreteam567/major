import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import NavLink from './NavLink/NavLink';

const FooterNavigation = ({ contacts }) => {
  const { getTranslation } = useTranslationNamespace('footer');
  if (!contacts) return;

  return (
    <div className={cl.footerNavigation}>
      <div className={cl.wrapList}>
        <ul className={cl.wrapLinks}>
          <NavLink type="footer" to="cooperation" ariaLabel={getTranslation('ariaLabelCooperation')}>
            {getTranslation('cooperation')}
          </NavLink>
          <a href={contacts[0].offer_agreement_policy}>{getTranslation('publicOffer')}</a>
        </ul>
        <ul className={cl.wrapLinks}>
          <a href={contacts[0].exchange_and_return_policy}>{getTranslation('exchangeAndReturn')}</a>
          <a href={contacts[0].paymant_and_delivery_policy}>{getTranslation('paymentAndDelivery')}</a>
        </ul>
      </div>
    </div>
  );
};
export default FooterNavigation;
