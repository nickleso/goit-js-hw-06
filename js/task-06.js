const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

const neededLength = Number(input.dataset.length);

function onInputBlur(event) {
  if (input.value.length === neededLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');

    return;
  }

  input.classList.remove('valid');
  input.classList.add('invalid');
}
