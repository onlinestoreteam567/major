import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import NavLink from '@UI/Texts/NavLink/NavLink';

const Navigation = () => {
  const { getTranslation } = useTranslationNamespace('footer');
  return (
    <ul className={cl.ulNavigation}>
      <div className={cl.wrapList}>
        <div className={cl.wrapLinks}>
          <NavLink type="footer" to="cooperation" ariaLabel={getTranslation('ariaLabelCooperation')}>
            {getTranslation('cooperation')}
          </NavLink>
          <NavLink type="footer" to="publicOffer" ariaLabel={getTranslation('ariaLabelPublicOffer')}>
            {getTranslation('publicOffer')}
          </NavLink>
        </div>
        <div className={cl.wrapLinks}>
          <NavLink type="footer" to="exchangeAndReturn" ariaLabel={getTranslation('ariaLabelExchangeAndReturn')}>
            {getTranslation('exchangeAndReturn')}
          </NavLink>
          <NavLink type="footer" to="paymentAndDelivery" ariaLabel={getTranslation('ariaLabelPaymentAndDelivery')}>
            {getTranslation('paymentAndDelivery')}
          </NavLink>
        </div>
      </div>
    </ul>
  );
};
export default Navigation;
