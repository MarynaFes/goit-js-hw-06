const button = {
  positive: document.querySelector("[data-action='increment']"),
  negative: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};

button.positive.addEventListener("click", increment);
button.negative.addEventListener("click", decrement);



// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.