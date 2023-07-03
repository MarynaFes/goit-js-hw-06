const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const defaultName = textOutput.textContent;
textInput.addEventListener('input', (event) => {
  if (textInput.value === '') {
    textOutput.textContent = defaultName;
  } else {
    textOutput.textContent = event.currentTarget.value;
  }
});


// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у 
// спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>