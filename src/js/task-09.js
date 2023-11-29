function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const actionBtn = document.querySelector(".change-color");
const colorField = document.querySelector(".color");
const widget = document.querySelector(".widget");

function onChangeColorButtonClick() {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  colorField.textContent = randomColor;
}

actionBtn.addEventListener("click", onChangeColorButtonClick);
