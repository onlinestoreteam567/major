import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const ShippingInfo = ({ shippingMethod, getValues }) => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const comment = getValues().comment?.trim();

  return shippingMethod === 'novaPost' ? (
    <Paragraph type="body2">
      {getTranslation('deliveryMethod')} {getTranslation('novaPost')} <br /> <br />
      {getValues().settlement} <br /> {getValues().warehouse}
      {comment && (
        <>
          <br /> <br />
          {getTranslation('commentToOrder')}: {comment}
        </>
      )}
    </Paragraph>
  ) : (
    <Paragraph type="body2">
      {getTranslation('deliveryMethod')} {getTranslation('selfPickup')} <br /> <br />
      {getTranslation('selfPupAddress')}
      {comment && (
        <>
          <br /> <br />
          {getTranslation('commentToOrder')}: {comment}
        </>
      )}
    </Paragraph>
  );
};
export default ShippingInfo;
