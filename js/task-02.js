const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

console.log(ingredientsListEl);

const makeIngredientsItems = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const elements = makeIngredientsItems(ingredients);
ingredientsListEl.append(...elements);
