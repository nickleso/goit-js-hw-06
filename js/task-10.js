// функция генерации рандомного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// селектор панели
const controlPanel = document.querySelector('#controls');

// input
const inputEl = controlPanel.firstElementChild;
let numberOfBoxesToCreate = 10;

inputEl.addEventListener('input', onInputValue);

function onInputValue() {
  numberOfBoxesToCreate = Number(inputEl.value);
  console.log(numberOfBoxesToCreate);
  return;
}

inputEl.style.backgroundColor = 'bisque';

// количество боксов

console.log(numberOfBoxesToCreate);

// селекторы кнопок и контейнера
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divColoredBoxContainer = document.querySelector('#boxes');

// функция создания бокса
const elements = [];

for (let i = 0; i < numberOfBoxesToCreate; i += 1) {
  const divColoredBox = document.createElement('div');

  divColoredBoxContainer.classList.add('boxes-container');

  divColoredBox.classList.add('boxes-container__item');
  divColoredBox.style.backgroundColor = getRandomHexColor();

  const boxGeometryCounter = Number(30 + i * 10);
  divColoredBox.style.width = boxGeometryCounter + 'px';
  divColoredBox.style.height = boxGeometryCounter + 'px';

  elements.push(divColoredBox);
}

// function makeColoredBox() {
//   const divColoredBox = document.createElement('div');
//   divColoredBox.classList.add('.color-box');
//   divColoredBox.style.backgroundColor = getRandomHexColor();
//   divColoredBox.style.marginTop = '10px';
//   divColoredBox.style.width = boxGeometryCounter + 'px';
//   divColoredBox.style.height = '30px';

//   return divColoredBox;
// }

// const elements = makeColoredBox();

// создание бокса
createBtn.addEventListener('click', function () {
  divColoredBoxContainer.append(...elements);
  console.log('Boxes created !');
});

// удаление боксов
function destroyBoxes() {
  elements.remove();
}

destroyBtn.addEventListener('click', function () {
  destroyBoxes();
  console.log('Boxes destroyed !');
});
