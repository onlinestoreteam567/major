import { useState } from 'react';
import cl from './index.module.scss';

const BannerFormInformation = () => {
  const [isExpanded, setIsExpanded] = useState();

  const expandedToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className={cl.bannerFormInformation}>
      <button type="button" onClick={() => expandedToggle()}>
        <img src="/svg/admin/information.svg" />
      </button>

      {isExpanded && (
        <div>
          <p>
            Для швидшого завантаження сайту та економії місця, будь ласка, завантажуйте фото у форматі .webp (цей формат
            займає менше місця та забезпечує швидше завантаження)
          </p>
        </div>
      )}
    </div>
  );
};
export default BannerFormInformation;
