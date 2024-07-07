function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
buttonColor.addEventListener('click', newColor);
function newColor() {
  const bodyColor = getRandomHexColor();
  document.body.style.background = bodyColor;
  spanColor.textContent = bodyColor;
}
