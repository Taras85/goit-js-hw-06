const elementCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${elementCategories.length}`);

elementCategories.forEach(function (topic) {
  console.log(`Category: ${topic.firstElementChild.textContent}`);
  console.log(`Elements: ${topic.lastElementChild.children.length}`);
});
