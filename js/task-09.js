function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
console.log(body);
const changeColorBtn = document.querySelector('.change-color')
const nameColor = document.querySelector('.color')
changeColorBtn.addEventListener('click', onChangeColorBtn);
function onChangeColorBtn(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку 
// на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }