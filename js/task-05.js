const inputRefs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

inputRefs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  inputRefs.nameOutput.textContent = event.currentTarget.value;
}
