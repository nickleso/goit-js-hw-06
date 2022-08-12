const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

console.log(counterValue.value);

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;

  console.log(counterValue.value);
});

incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;

  console.log(counterValue.value);
});
