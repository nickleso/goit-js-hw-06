const input = document.querySelector('#validation-input');

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

console.dir(input);

function onInputFocus(event) {
  input.classList.add('invalid');
}

function onInputBlur(event) {
  if (input.value.length === input.dataset.length) {
    input.classList.remove('invalid');

    console.log('lost blur');
    input.classList.add('valid');
  }

  console.log(input.dataset.length);
  console.log(input.value.length);
}
