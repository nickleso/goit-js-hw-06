const categoriesEl = document.querySelector('#categories');

const numberOfCategoriesEl = categoriesEl.children.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

const listEl = categoriesEl.children;

const firstItemEl = listEl[0];
console.log('Category:', firstItemEl.firstElementChild.textContent);
console.log('Elements:', firstItemEl.lastElementChild.children.length);

const secondItemEl = listEl[1];
console.log('Category:', secondItemEl.firstElementChild.textContent);
console.log('Elements:', secondItemEl.lastElementChild.children.length);

const thirdItemEl = listEl[2];
console.log('Category:', thirdItemEl.firstElementChild.textContent);
console.log('Elements:', thirdItemEl.lastElementChild.children.length);
