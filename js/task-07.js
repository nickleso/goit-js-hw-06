const inputEl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');
outputText.style.fontSize = '50px';

inputEl.addEventListener('input', function () {
  console.log(`${inputEl.value}px`);
  outputText.style.fontSize = `${inputEl.value}px`;
});
