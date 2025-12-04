const calculateDiscountedPrice = (price, discount, setValue) => {
  if (price && discount) {
    const discounted = price - (price * discount) / 100;
    setValue('discounted_price', Math.ceil(discounted));
  } else if (price) {
    setValue('discounted_price', price);
  } else {
    setValue('discounted_price', '');
  }
};

export default calculateDiscountedPrice;
