function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', createElements);
destroyBtn.addEventListener('click', destroyElements);

function createElements() {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount)
  } else {
    return
  }
}

function destroyElements() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  let boxesHTML = '';
  
  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const backgroundColor = getRandomHexColor();
    boxesHTML += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${backgroundColor};"></div>`;
  }

  boxes.innerHTML = boxesHTML;
  input.value = '';
}