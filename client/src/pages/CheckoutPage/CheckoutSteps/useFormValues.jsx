import { createInvoice } from '@redux/checkout/service';
import { selectCart, selectPromocode } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

function hasTwoDecimals(num) {
  let numStr = num.toString();
  return /^\d+\.\d{2}$/.test(numStr);
}

const convertCurrencyToMinorUnit = (amount) => {
  if (Number.isInteger(amount)) {
    // e.g., 100 -> 10000
    return Number(`${amount}00`);
  } else {
    const amountStr = amount.toString();

    if (hasTwoDecimals(amount)) {
      // e.g., 100.50 -> 10050
      return Number(amountStr.replace('.', ''));
    } else {
      // e.g., 100.5 -> 100.50 -> 10050
      return Number(`${amount}0`.replace('.', ''));
    }
  }
};

const prepareInvoiceProducts = (cartItems, promocodeDiscountPercent) => {
  const globalDiscount = promocodeDiscountPercent?.discount_percent || 0;

  return cartItems.map((item) => {
    const itemDiscount = Number(item.discount) || 0;
    const maxDiscountPercent = Math.max(itemDiscount, globalDiscount);
    const originalPrice = item.price;
    const finalPrice = originalPrice * (1 - maxDiscountPercent / 100);
    const convertedPrice = convertCurrencyToMinorUnit(finalPrice);

    console.log(cartItems);
    return {
      name: item.name,
      article: item.article,
      number_of_items: item.quantity,
      price_with_discount: convertedPrice,
    };
  });
};

const useFormValuesProcessor = () => {
  const promocodeDiscount = useSelector(selectPromocode);
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const processAndLogValues = ({ data, totalToPaid }) => {
    let formValues = data;

    delete formValues.checkbox;

    if (formValues.comment === '') {
      delete formValues.comment;
    }

    if (promocodeDiscount) {
      formValues = { ...formValues, promocode: `-${promocodeDiscount.discount_percent}%` };
    }

    const products = prepareInvoiceProducts(cartItems, promocodeDiscount);
    formValues = { ...formValues, products: products };

    if (formValues.telegram_name === '') {
      delete formValues.telegram_name;
    } else if (formValues.telegram_name && !formValues.telegram_name.trim().startsWith('@')) {
      formValues = { ...formValues, telegram_name: '@' + formValues.telegram_name.trim() };
    }

    if (!formValues.settlement) {
      delete formValues.settlement;
    }
    if (formValues.warehouse === '') {
      delete formValues.warehouse;
    }
    if (formValues.delivery_method === 'pickup') {
      delete formValues.warehouse;
      delete formValues.settlement;
    }

    const convertedTotal = convertCurrencyToMinorUnit(totalToPaid);
    formValues = { ...formValues, full_amount: convertedTotal };

    if (formValues.payment_option === 'partial') {
      formValues = { ...formValues, amount: 10000 };
    } else if (formValues.payment_option === 'full') {
      formValues = { ...formValues, amount: convertedTotal };
    }

    dispatch(createInvoice(formValues));
  };

  return processAndLogValues;
};

export default useFormValuesProcessor;
