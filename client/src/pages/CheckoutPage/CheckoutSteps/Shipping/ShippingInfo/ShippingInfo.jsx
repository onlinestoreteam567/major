import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const ShippingInfo = ({ shippingMethod, getValues }) => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return shippingMethod === 'novaPost' ? (
    <Paragraph type="body2">
      {getValues().settlement} <br /> {getValues().warehouse} <br /> <br />
      {getTranslation('commentToOrder')}: {getValues().comment}
    </Paragraph>
  ) : (
    <Paragraph type="body2">
      {getTranslation('commentToOrder')}: {getValues().comment}
    </Paragraph>
  );
};
export default ShippingInfo;
