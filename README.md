
# Phone Component
Компонент для ввода цифр номера телефона с возможной маскированной частью. Длина маскированной части может быть произвольной.
Компонент имеет несколько состояний (`normal`, `hover`, `active`, `error`), которые отражены в макетах.
Особенности:
+ Переход между полями ввода можно переключать при помощи левой и правой клавиш-стрелок
+ При заполнении фокус автоматически переходит на следующее поле 
## Скриншоты
### Неправильный номер
![Макет](https://github.com/mrniktarasov/phoneComponent/blob/master/images/ex_1.jpeg)
![Макет](https://github.com/mrniktarasov/phoneComponent/blob/master/images/ex_2.jpeg)
![Макет](https://github.com/mrniktarasov/phoneComponent/blob/master/images/ex_3.jpeg)
### Правильный номер
![Макет](https://github.com/mrniktarasov/phoneComponent/blob/master/images/ex_4.jpeg)
## Макет
![Макет](https://github.com/mrniktarasov/phoneComponent/blob/master/images/index.jpeg)
## Установка
    npm install phone_number_veification_component
    или
    git clone https://github.com/mrniktarasov/phoneComponent
    cd phoneComponent
    npm i
    npm run build
## Пример использования
    import Phone from './js/phone';
  
    //Необходимо задать маску, правильный номер и элемент, к которому компонент будет добавлен
    const mask = '+7(985)0II-**-**';
    const elem = document.querySelector('.phone-box');
    const trueNumber = '+7(985)093-44-44';
  
    //Данные передаются в компонент в виде объекта
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
  
    //созадется класс и вызывается метод start()
    const phone = new Phone(props);
    phone.start();
    
## API
* mask - маска номера
* elem - элемент, к которому компонент будет прикреплен
* trueNumber - истинный номер, без маски
