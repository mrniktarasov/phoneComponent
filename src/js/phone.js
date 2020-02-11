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
    for (let i = 0; i < chars.length; i += 1) {
      switch (chars[i]) {
        case 'I':
          const input = document.createElement('input');
          input.type = 'text';
          input.maxLength = '1';
          input.placeholder = '_';
          input.className = 'box input-box';
          this.inputs.push({
            elem: input,
            index: i,
          });
          this.phoneWrap.appendChild(input);
          break;
        case 'X':
          const x = document.createElement('div');
          x.innerHTML = '<span>X</span>';
          x.className = 'box x-box';
          this.phoneWrap.appendChild(x);
          break;
        case '*':
          const dot = document.createElement('div');
          dot.innerHTML = '<span>•</span>';
          dot.className = 'box dot-box';
          this.phoneWrap.appendChild(dot);
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
          const num = document.createElement('div');
          num.innerHTML = `<span>${chars[i]}</span>`;
          num.className = 'box num-box';
          this.phoneWrap.appendChild(num);
          break;
        default:
          const sym = document.createElement('div');
          sym.innerHTML = `<span>${chars[i]}</span>`;
          sym.className = 'box sym-box';
          this.phoneWrap.appendChild(sym);
          break;
      }
    }
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
      const currentTNchar = trueNumber[currentInput.index];
      const currentElem = currentInput.elem;
      currentElem.onblur = function () {
        if (!isNaN(this.value) && this.value !== currentTNchar) {
          inputs.map((input) => input.elem.classList.add('error'));
          error.style.display = 'block';
        }
      };
      currentElem.onfocus = function () {
        inputs.map((input) => input.elem.classList.remove('error'));
        error.style.display = 'none';
      };
      currentElem.onkeyup = function () {
        let nextElem = currentElem;
        const ml = currentElem.getAttribute('maxlength');
        if (ml && currentElem.value.length >= ml) {
          do {
            nextElem = nextElem.nextSibling;
          } while (nextElem && nextElem.tagName !== 'INPUT');
          if (nextElem) {
            nextElem.focus();
          }
        }
      };
    }
  }
}
