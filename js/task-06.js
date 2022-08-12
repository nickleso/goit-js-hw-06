const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  input.classList.add('invalid');

  if (event.currentTarget.value.length === input.dataset.length) {
    input.classList.remove('invalid');

    console.log('lost blur');
    input.classList.add('valid');
  }

  console.log(event.currentTarget.value.length);
}
