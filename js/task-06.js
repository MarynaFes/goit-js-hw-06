const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', validateInput);
const inputLength = Number(inputEl.dataset.length);

function validateInput() {
    inputEl.value.trim().length === inputLength ? changeClass('valid', 'invalid') : changeClass('invalid', 'valid');
}

function changeClass(first, second) { 
    inputEl.classList.remove(second);
    inputEl.classList.add(first);
}
    
    
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо 
// правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.