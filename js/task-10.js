// color randomizer
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// selectors
const controlPanel = document.querySelector('#controls');

const inputEl = controlPanel.firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const divColoredBoxContainer = document.querySelector('#boxes');

const elements = [];

// create boxes
createBtn.addEventListener('click', function () {
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    const divColoredBox = document.createElement('div');

    divColoredBoxContainer.classList.add('boxes-container');

    divColoredBox.classList.add('boxes-container__item');
    divColoredBox.style.backgroundColor = getRandomHexColor();

    const boxGeometryCounter = Number(30 + i * 10);
    divColoredBox.style.width = boxGeometryCounter + 'px';
    divColoredBox.style.height = boxGeometryCounter + 'px';

    elements.push(divColoredBox);

    // console.log(elements);
  }

  divColoredBoxContainer.append(...elements);
  console.log(`Boxes created: ${inputEl.value}`);
});

// destroy boxes
function destroyBoxes() {
  divColoredBoxContainer.innerHTML = '';
  elements.splice(0, 101);
}

destroyBtn.addEventListener('click', function () {
  destroyBoxes();
  console.log('Boxes destroyed!');
});
