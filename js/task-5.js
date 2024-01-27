function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const textWidget = document.querySelector('.widget .color')

button.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  textWidget.textContent = randomColor;
  body.style.backgroundColor = randomColor;
  
}