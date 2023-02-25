const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const ingredientsArray = [];

const elementList = ingredients.forEach(function (value) {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = value;
  ingredientsArray.push(list);
});

listIngredients.append(...ingredientsArray);
