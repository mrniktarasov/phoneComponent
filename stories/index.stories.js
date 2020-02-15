import Phone from '../src/js/phone';
import css from '../src/css/style.css';

export default {
  title: 'Demo',
};

export const phoneVerifyComponent = () => {
  const div = document.createElement('div');
  div.className = 'phone-box';

  const mask = '+7(985)0II-**-**';
  const trueNumber = '+7(985)093-44-44';

  const props = {
  /**
  * Маска инпута. Значения:
  * "I" - одиночный инпут для ввода одной цифры
  * "X" - серый блок с символом "X"
  * "*" - серый блок с символом "●"
  * <цифра> - серый блок с введенной цифрой
  * <не цифра> - символ отображается "как есть"
  */
    mask,
    elem: div,
    trueNumber,
  };

  const phone = new Phone(props);
  phone.start();
  return div;
};
