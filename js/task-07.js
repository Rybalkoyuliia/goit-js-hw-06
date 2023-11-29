const text = document.querySelector("#text");
const fontSize = document.querySelector("#font-size-control");
console.log(text);
function handleChange(event) {
  console.log(event.target.value);
  text.style.fontSize = `${event.target.value}px`;
}
fontSize.addEventListener("input", handleChange);
