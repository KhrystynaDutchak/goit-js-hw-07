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
  boxes.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
  input.value = '';
}