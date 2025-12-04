import cl from './index.module.scss';
import keyBenefitsArray from '../keyBenefitsArray';
import SliderBoxMain from '@components/UI/SliderBoxMain/SliderBoxMain';

const BannerBenefits = () => {
  const items = keyBenefitsArray;
  const total = items.length - 2 || 0;
  const showArr = Array.isArray(items) && items.length !== 0;
  return (
    <div className={`slider-container ${cl.bannerBenefits}`}>
      {showArr && <SliderBoxMain total={total} slidesData={items} isKeyBenefits={true} />}
    </div>
  );
};
export default BannerBenefits;
