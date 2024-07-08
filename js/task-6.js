function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.getElementById('controls');
const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.getElementById('boxes');

buttonCreate.addEventListener('click', createBoxesNumber);
function createBoxesNumber() {
  const amount = parseInt(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = 10 + 'px';
    box.style.background = getRandomHexColor();
    divBoxes.appendChild(box);
    size += 10;
  }
}

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  divBoxes.innerHTML = '';
}
