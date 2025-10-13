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
            Для швидкого завантаження сайту та економії місця: Будь ласка, завантажуйте фото у форматі .webp (до 1 MB і
            максимум 1080x1080 пікселів).
          </p>
        </div>
      )}
    </div>
  );
};
export default BannerFormInformation;
