const inputEl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');
outputText.style.fontSize = '24px';

console.dir(inputEl);

// inputRefs.nameOutput.style.fontSize = '50px';
// inputEl.scrollWidth = 300;

inputEl.addEventListener('input', function () {
  console.log(`${scrollX}px`);
  outputText.style.fontSize = '120px';
});
