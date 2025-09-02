import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import SliderBoxMain from '../SliderBoxMain/SliderBoxMain';
import ProductList from './ProductList/ProductList';

const ProductListOrSlider = ({ products }) => {
  let isShowSlider = false;
  const { smallMobile, mobile, tablet, deskmin, deskmax } = useScreenSizes();

  switch (true) {
    case products.length >= 2 && (smallMobile || mobile):
      isShowSlider = true;
      break;
    case products.length >= 3 && tablet:
      isShowSlider = true;
      break;
    case products.length >= 4 && deskmin:
      isShowSlider = true;
      break;
    case products.length >= 5 && deskmax:
      isShowSlider = true;
      break;
  }

  return isShowSlider ? (
    <SliderBoxMain slidesData={products} total={products.length} />
  ) : (
    <ProductList products={products} />
  );
};
export default ProductListOrSlider;
