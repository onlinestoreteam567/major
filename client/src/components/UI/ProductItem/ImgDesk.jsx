import cl from './index.module.scss';
import LabelHit from './LabelHit';
import LabelNew from './LabelNew';
import LabelSale from './LabelSale';
// import oil_1 from '@pablic/images/thin_oil_0502.webp';
// import oil_2 from '@pablic/images/thin_oil_1091.webp';
// import oil_3 from '@pablic/images/thin_oil_3346.webp';
// import oil_4 from '@pablic/images/thin_all_0872.webp';
import { useState } from 'react';

export default function ImgDesk({ card }) {
  const [bigImage, setBigImage] = useState(card.upload_images[0]);

  const handleImageClick = (image) => {
    setBigImage(image);
  };

  return (
    <div className={cl.wrapImgDeskCard}>
      <div>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_sale ? <LabelSale card={card} /> : ''}
        <img src={bigImage} alt={card.name} />
      </div>
      <div className={cl.wrapSmallImg}>
        <img
          src={card.upload_images[0]}
          alt={card.name}
          onClick={() => handleImageClick('/images/card/thin_oil_0502.webp')}
          className={bigImage === '/images/card/thin_oil_0502.webp' ? cl.selected : ''}
        />
        <img
          src="/images/card/thin_oil_1091.webp"
          alt={card.name}
          onClick={() => handleImageClick('/images/card/thin_oil_1091.webp')}
          className={bigImage === '/images/card/thin_oil_1091.webp' ? cl.selected : ''}
        />
        <img
          src="/images/card/thin_oil_3346.webp"
          alt={card.name}
          onClick={() => handleImageClick('/images/card/thin_oil_3346.webp')}
          className={bigImage === '/images/card/thin_oil_3346.webp' ? cl.selected : ''}
        />
        <img
          src="/images/card/thin_all_0872.webp"
          alt={card.name}
          onClick={() => handleImageClick('/images/card/thin_all_0872.webp')}
          className={bigImage === '/images/card/thin_all_0872.webp' ? cl.selected : ''}
        />
      </div>
    </div>
  );
}
