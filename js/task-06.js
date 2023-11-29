const textInput = document.querySelector("#validation-input");

function onTargetInput(event) {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}

textInput.addEventListener("blur", onTargetInput);
