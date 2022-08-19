const categoriesEl = document.querySelector('#categories');

const numberOfCategoriesEl = categoriesEl.children.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

const itemsInCategories = document.querySelectorAll('.item');

itemsInCategories.forEach(function (item) {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
