function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomHexColor();
  console.log('click');
});
