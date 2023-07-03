function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
input: document.querySelector('input'),
boxes: document.querySelector('#boxes'),
createBtn: document.querySelector('[data-create]'),
destroyBtn: document.querySelector('[data-destroy]'),
};

const inputOption = {
  min: Number(refs.input.min),
  max: Number(refs.input.max),
  step: Number(refs.input.step),
};

console.log(boxes);

// какое число введено:
 
  const handleClick = () => {
    let amount = Number(refs.input.value);
    
    console.log('Button was clicked');
    if (amount < inputOption.min || amount > inputOption.max) { alert('min=1, max=100'); return };

// создаем и добавляем <div>:
    
    const boxArr = [];
    const size = 30;
    for (let i = 0; i < amount; i += inputOption.step) {
      let growingSize = size + i * 10;
      console.log(growingSize);
      const boxesEl = `<div style='width:${growingSize > 70 ? 70 : growingSize}px; height:${growingSize}px; background-color:${createRGB()}'></div>`;
      boxArr.push(boxesEl);
      console.log(refs.boxes);
    };
    refs.boxes.insertAdjacentHTML('beforeend', boxArr.join(''));
  };
  
  refs.createBtn.addEventListener('click', handleClick);

// удаляем <div>:

  const destroyBoxes = () => {
    refs.boxes.innerHTML = '';
    refs.input.value = '';
    
  };
refs.destroyBtn.addEventListener('click', destroyBoxes);

const createRGB = () => {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red},${green},${blue})`;
 };
console.log(createRGB());


// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться 
// колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію 
// getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені 
// елементи.