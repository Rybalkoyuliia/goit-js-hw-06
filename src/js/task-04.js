const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const counter = document.querySelector("#value");
let count = 0;

incrementBtn.addEventListener("click", onIncrementBtnClick);

function onIncrementBtnClick(event) {
  count += 1;
  counter.textContent = count;
}

decrementBtn.addEventListener("click", onDecrementBtnClick);

function onDecrementBtnClick(event) {
  count -= 1;
  counter.textContent = count;
}
