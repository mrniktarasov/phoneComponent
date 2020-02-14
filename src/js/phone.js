export default class Phone {
  constructor(Props) {
    this.mask = Props.mask;
    this.elem = Props.elem;
    this.trueNumber = Props.trueNumber;
    this.inputs = [];

    this.phoneWrap = document.createElement('div');
    this.phoneWrap.className = 'phone-wrap';
  }

  start() {
    this.elem.appendChild(this.phoneWrap);
    this.parseMask();
    this.addError();
    this.validateInput();
    return 0;
  }

  parseMask() {
    const chars = this.mask.split('');
    let char;
    for (let i = 0; i < chars.length; i += 1) {
      switch (chars[i]) {
        case 'I':
          char = document.createElement('input');
          char.type = 'text';
          char.maxLength = '1';
          char.placeholder = '_';
          char.className = 'box input-box';
          this.inputs.push({
            elem: char,
            index: i,
          });
          this.addElem(char);
          break;
        case 'X':
          char = document.createElement('div');
          char.innerHTML = 'X';
          char.className = 'box';
          this.addElem(char);
          break;
        case '*':
          char = document.createElement('div');
          char.innerHTML = '•';
          char.className = 'box';
          this.addElem(char);
          break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          char = document.createElement('div');
          char.innerHTML = chars[i];
          char.className = 'box';
          this.addElem(char);
          break;
        default:
          char = document.createElement('div');
          char.innerHTML = chars[i];
          char.className = 'box sym-box';
          this.addElem(char);
          break;
      }
    }
    return 0;
  }

  addElem(elem) {
    this.phoneWrap.appendChild(elem);
    return 0;
  }

  addError() {
    const errorMessage = document.createElement('div');
    errorMessage.innerHTML = 'Неверный номер, попробуйте еще раз';
    errorMessage.className = 'error-box';
    errorMessage.style.display = 'none';
    this.elem.appendChild(errorMessage);
    this.error = errorMessage;
    return 0;
  }

  validateInput() {
    const trueNumber = this.trueNumber.split('');
    const { inputs, error } = this;
    for (let i = 0; i < inputs.length; i += 1) {
      const currentInput = inputs[i];
      const currentElem = currentInput.elem;
      currentElem.onchange = () => {
        let trueAnsws = 0;
        let filling = 0;
        inputs.map((input) => {
          if (input.elem.value !== '') {
            filling += 1;
            if (input.elem.value === trueNumber[input.index]) {
              trueAnsws += 1;
            }
          }
          return 0;
        });
        if (filling === inputs.length && trueAnsws < inputs.length) {
          inputs.map((input) => input.elem.classList.add('error'));
          error.style.display = 'block';
        }
        return 0;
      };
      currentElem.onfocus = () => {
        inputs.map((input) => input.elem.classList.remove('error'));
        error.style.display = 'none';
      };
      currentElem.onkeyup = (event) => {
        let nextElem = currentElem;
        const ml = currentElem.getAttribute('maxlength');
        if (event.keyCode === 39 || event.keyCode === 37) {
          return 0;
        }
        if (ml && currentElem.value.length >= ml) {
          do {
            nextElem = nextElem.nextSibling;
          } while (nextElem && nextElem.tagName !== 'INPUT');
          if (nextElem) {
            nextElem.focus();
          }
        }
        return 0;
      };
      currentElem.onkeydown = (event) => {
        if (event.keyCode === 37) {
          const j = i - 1;
          if (j >= 0) {
            inputs[j].elem.focus();
          }
        } else if (event.keyCode === 39) {
          const j = i + 1;
          if (j < inputs.length) {
            inputs[j].elem.focus();
          }
        } else if (event.keyCode === 8) {
          currentElem.value = '';
        }
      };
    }
  }
}
