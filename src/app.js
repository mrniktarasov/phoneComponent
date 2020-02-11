import Phone from './js/phone';
import css from './css/style.css';

const mask = '+7(985)0II-**-**';
const elem = document.querySelector('.phone-box');
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
  elem,
  trueNumber,
};

const phone = new Phone(props);
phone.start();
