import { createInvoice } from '@redux/checkout/service';
import { useDispatch } from 'react-redux';

function hasTwoDecimals(num) {
  let numStr = num.toString();
  return /^\d+\.\d{2}$/.test(numStr);
}

const useFormValuesProcessor = () => {
  const dispatch = useDispatch();

  const processAndLogValues = ({ data, totalToPaid }) => {
    let formValues = data;

    delete formValues.checkbox;

    if (formValues.comment === '') {
      delete formValues.comment;
    }

    if (formValues.telegram_name === '') {
      delete formValues.telegram_name;
    } else if (formValues.telegramName && !formValues.telegram_name.trim().startsWith('@')) {
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

    if (formValues.payment_option === 'partial') {
      formValues = { ...formValues, amount: 10000 };
    }

    if (Number.isInteger(totalToPaid)) {
      formValues = { ...formValues, full_amount: Number(`${totalToPaid}00`) };

      if (formValues.payment_option === 'full') {
        formValues = { ...formValues, amount: Number(`${totalToPaid}00`) };
      }
    } else {
      if (hasTwoDecimals(totalToPaid)) {
        formValues = { ...formValues, full_amount: Number(totalToPaid.toString().replace('.', '')) };

        if (formValues.payment_option === 'full') {
          formValues = { ...formValues, amount: Number(totalToPaid.toString().replace('.', '')) };
        }
      } else {
        formValues = { ...formValues, full_amount: Number(`${totalToPaid}0`.toString().replace('.', '')) };

        if (formValues.payment_option === 'full') {
          formValues = { ...formValues, amount: Number(`${totalToPaid}0`.toString().replace('.', '')) };
        }
      }
    }

    dispatch(createInvoice(formValues));
  };

  return processAndLogValues;
};

export default useFormValuesProcessor;
