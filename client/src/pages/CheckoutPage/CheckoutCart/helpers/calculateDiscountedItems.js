const calculateDiscountedItems = (promocodeDiscount, cartItems) => {
  if (promocodeDiscount && promocodeDiscount.discount_percent) {
    return cartItems.map((item) => {
      if (promocodeDiscount.discount_percent > item.discount) {
        const newPriceWithDiscount = item.price - (item.price * promocodeDiscount.discount_percent) / 100;
        return {
          ...item,
          discount: promocodeDiscount.discount_percent,
          price_with_discount: newPriceWithDiscount,
        };
      }
      return item;
    });
  }
  // If promocode is not applied, return the original cart items
  return [...cartItems];
};

export default calculateDiscountedItems;
