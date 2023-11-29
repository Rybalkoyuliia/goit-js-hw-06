function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const actionBtn = document.querySelector(".change-color");
const colorField = document.querySelector(".color");
const widgets = document.querySelector(".widget");

function onChangeColorButtonClick() {
  const randomColor = getRandomHexColor();
  widgets.style.backgroundColor = randomColor;
  colorField.textContent = randomColor;
}

actionBtn.addEventListener("click", onChangeColorButtonClick);
